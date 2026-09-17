import { NavLink } from 'react-router'

export function Mypagethree () {
    return (
        <>
         <header>
            <h1>Velkommen Peter</h1>
            <p>Redigere eller slet dine annoncer. Du kan også danne dig et overblik over de annoncer du har gemt som farvorit,
                samt fjerne dem igen
            </p>
            <NavLink to={"/login"}>Log ud</NavLink>
            <NavLink to={"/mypage"}>Min side</NavLink>
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
        <button>Gem ændringer</button>
        </>


    )
}