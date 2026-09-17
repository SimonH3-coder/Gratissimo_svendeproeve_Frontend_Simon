import { NavLink } from 'react-router'
import style from "./Navigation.module.scss"
import logowhite from '../../assets/logo/logo-white.png'
export function Navigation () {
    return (
        <>
        <figure className={style.headerImagestyle}>
                <NavLink to="index">
                    <img src= {logowhite} alt= "logowhite" />
                    </NavLink>
               
            
        
        
            </figure>
        <nav className={style.navbarstyle}>
            <ul>
                <li>
                    <NavLink to={"/search"}>Alle jobs</NavLink>
                </li>
                <li>
                    <NavLink to={"/annonce"}>Opret annonce</NavLink>
                </li>
                <li>
                    <NavLink to={"/news"}>Nyheder</NavLink>
                </li>
                <div>
                     <li>
                    <NavLink to={"profil"}>Opret profil |</NavLink>
                </li>
                <li>
                    <NavLink to={"login"}>Log ind</NavLink>
                </li>


                </div>
               
            </ul>

        </nav>
        
        
        
        
        </>
        

    )

}