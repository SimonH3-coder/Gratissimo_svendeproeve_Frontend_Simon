
import { NavLink } from "react-router"



export function Opretlogin () {

    return (
        <>
      
            <header>
            <h1>Log ind eller opret dig som bruger</h1>
            <p>Når du opretter en profil på Gratissimo får adgang til at oprette, slette og
                redigerei job annoncer. Som privatperson får du mulighed for at gemme de jobs
                du kunne være interessert i.
            </p>
            <NavLink to={"/mypage"}>Log ind for at til min side</NavLink>
        </header>
      
      <h1>Opret ny profil</h1>
      <form  >
        <p>Email</p>
        <input
          id= "email"
        type ="email"
         name="email"
        placeholder="Skriv email..."
        required/>
        <p>Password</p>
        <input
        id="password"
        type="password"
        name="password"
        placeholder="Skriv dit password..."
        required/>
        <p>Gentag password</p>
        <input
        id="password"
        type="password"
        placeholder="Skriv dit password..."
        required/>
        <p>Fornavn</p>
        <input
        id="firstname"
        type="firstname"
        placeholder="Skriv dit fornavn..."
        required/>
        <p>Efternavn</p>
        <input
        id="lastname"
        type="lastname"
        placeholder="Skriv dit efternavn..."
        required/>
        <p>Telefon nummer</p>
        <input
        id="phone"
        type="phone"
        placeholder="Skriv dig telefonnummer..."
        required/>


      </form>
      <button>Opret profil</button>
      <NavLink to={"/mypage"}>Log in</NavLink>





     
             
        
        
        </>
        
    )
}