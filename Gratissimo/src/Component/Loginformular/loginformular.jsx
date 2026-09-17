import { useFetch } from "../../Hooks/useFetch";
import { NavLink } from "react-router";
import { useState } from  "react"

export function Loginformular () {

    const [isformularOpen, setIsformularOpen] = useState(false)
    const [isLogin, setLogin] = useState(false)
    const [iserror, setError ] = useState("")

    async function login(event) {
        event.preventDefault()
        setError("")

        const formFormular = new formFormular(event.currentTarget)

        const response = await fetch("http://localhost:4000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: formFormular.get("email"),
                password: formFormular.get("password"),
            })
        })
        if (response.ok) {
            setError("Hvis Email og password ikke  kommer frem")
            return;
        }
        setLogin(true)
        event.currentTarget.reset()
    }
    function logout() {
        setLogin(false)
        setIsformularOpen(false)

    }

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




