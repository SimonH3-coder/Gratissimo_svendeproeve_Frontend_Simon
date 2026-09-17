import { NavLink } from 'react-router'
import { Registeringsformular } from '../Component/Registeringformular/registeringformular'

export function Mypagetwo () {
    return (
        <>
        <h1>Mypage</h1>
        <header>
            <h1>Velkommen Peter</h1>
            <p>Redigere eller slet dine annoncer. Du kan også danne dig et overblik over de annoncer du har gemt som farvorit,
                samt fjerne dem igen
            </p>
            <NavLink to={"/login"}>Log ud</NavLink>
            <NavLink to={"/mypage"}>Min side</NavLink>
        </header>
        <Registeringsformular/>

        
        
        </>
     
    )
}