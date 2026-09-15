import { NavLink } from 'react-router'
import style from './Header.module.scss'
export function Header () {
    return (
    <>
    <h4>Vi hjælper dig på vej til dit næste frivillige job</h4>
    <button><NavLink to="login">Log ind </NavLink>
    eller
    <NavLink to="profil">opret dig</NavLink>

    
    </button>
 
    
    </>
    )
    
    
}