import { NavLink } from "react-router";
import { useState } from  "react"

// Her laves en react component
export function Loginformular () {


// // Den første useState eller isformularOpen holder styr på om navigation er åben eller lukket, når siden læse.
// Ved den anden useState isLogin anvender vi det til at holde styr på login status.  Brugeren starter med ikke at være logget ind, fordi værdien er false.
// Ved en trejde useState  iserror bruges til fejlbeskeder. Den begynder som tom, men hvis der foregår en fejl  kan setErrror ændre teksten og vise en besked til brugeren.

    const [isformularOpen, setIsformularOpen] = useState(false)
    const [isLogin, setLogin] = useState(false)
    const [iserror, setError ] = useState("")

// Funktionen hedder login og anvendes til at logge en bruger ind. Her bruges async pga. programmet skal kommunikere med serveren, og det tager tid.
// Her bliver siden ikke genindlæst, når bruger sender login-formular. JavaScript håndtere det selv. "event.preventDefault()"
// ved setError fjerner vi gammel fejlbeskeder, så brugeren starter med en login formular

    async function login(event) {
        event.preventDefault()
        setError("")

        //"const formFormular = new FormData(event.currentTarget)". Her tager man alle informationerne fra formularen, 
        // som brugeren lige har udfyldt, så de bagefter kan sendes til serveren.

        const formFormular = new formFormular(event.currentTarget)

        //"const response = await fetch("http://localhost:3000/users", {". Her sendes login oplysninger til vores server. 
        // Man anvender await, 
        //pga. vi skal vente svar for severens svar, før vi kan bestemme om login lykkes.

        const response = await fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // "method: "POST"," "Vi bruger POST, fordi vi skal sende data fra vores login-formular til serveren.".
//POST : Sende, (get og delecte, put, patch, head, options  I postman)
// "Content-Type": "application/json". Her bliver der fortalt til serveren at vores data bliver sendt som JSON.

            body: JSON.stringify({
                email: formFormular.get("email"),
                password: formFormular.get("password"),
            })
        })
        // "body: JSON.stringify({ email: formData.get("email"), password: formData.get("password") })"
//Her tager vi brugerens email og password fra formularen og sender dem til JSON.

        if (response.ok) {
            setError("Hvis Email og password ikke  kommer frem")
            return;
        }
        // "if (response.ok) {". Den kigger i programmet, om serverens svar er okay. 
        // Hvis response.ok er true gå//"setError("Hvis Email og password er skrevet forkert")" 
        // setError bruges her til at give besked om at login-informationer er forkerte.
        //"return;" return gør at funktion stopper, så brugeren ikke bliver logget ind, hvis der er en fejl. 


        setLogin(true)
        event.currentTarget.reset()
        
    }
     // "setLogin(true)" Når login lykkes, ænder vi isLogin til true. På den måde ved programmet, 
        // at brugeren er logget ind.
        // "event.currentTarget.reset()". Når login er kommet igennem, nulstiller vi formularen, 
        // så email og password bliver fjernet fra felterne.

    function logout() {
        setLogin(false)
        setIsformularOpen(false)
    }
    //"function logout() {". Her laver vi en function til logout, altså til at logge brugeren ud igen.
// "setLogin(false)" Når brugeren er logger ud, laver vi login status ud fra true til false.
// "setIsOpen(false)" Til sidst lukker vi navigation ved at sætte isOpen til false.


    return (
        <>
           <header>
            <h1>Log ind eller opret dig som bruger</h1>
            <p>Når du opretter en profil på Gratissimo får adgang til at oprette, slette og
                redigerei job annoncer. Som privatperson får du mulighed for at gemme de jobs
                du kunne være interessert i.
            </p>
            <NavLink to={"mypage"}>Log ind for at gå til min side </NavLink>
        </header>

       
                  
                    <h1>Log in</h1>
                    <form onSubmit={login}>
                        <input
                        id= "email"
                        type ="email"
                        name="email"
                        placeholder="Skriv email..."
                        required/>
                        <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Skriv password..."
                        required/>

                        
                       <button type="submit">Log in</button>
                       <NavLink to={"/profil"}>Opret bruger</NavLink>
                    </form>
                   </>

    )
}




