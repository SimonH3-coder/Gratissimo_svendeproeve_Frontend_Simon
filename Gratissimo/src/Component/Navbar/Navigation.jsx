import { NavLink } from 'react-router'
import style from "./Navigation.module.scss"
export function Navigation () {
    return (
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
                    <NavLink to={"profil"}>Opret profil</NavLink>
                </li>
                <li>
                    <NavLink to={"login"}>Log ind</NavLink>
                </li>


                </div>
               
            </ul>

        </nav>

    )

}