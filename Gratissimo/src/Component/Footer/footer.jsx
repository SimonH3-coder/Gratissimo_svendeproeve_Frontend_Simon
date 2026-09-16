import { NavLink } from 'react-router'
import Facebook from '../../assets/icons/SoMe/Facebook.png'
import GooglePlus from '../../assets/icons/SoMe/Google Plus.png'
import InstagramCircle from '../../assets/icons/SoMe/InstagramCircle.png'
import LinkedInCircled from '../../assets/icons/SoMe/LinkedInCircled.png'
import style from './Footer.module.scss'
export function Footer () {
    return (
        <footer className={style.footerstyling}>
            <section>
                <h3>For jobsøgere</h3>
                <NavLink>Din kundeside</NavLink>
                <NavLink>Opret profil</NavLink>
                <NavLink>Gemte jobs</NavLink>
            </section>
            <section>
                <h3>For arbejdsgivere</h3>
                <NavLink>Virksomhedsprofi</NavLink>
                <NavLink>Opret annonce</NavLink>
                <NavLink>Rekruttering</NavLink>
            </section>
            <section>
                <h3>Links</h3>
                <NavLink>Om Gratissimo</NavLink>
                <NavLink>Job hos os</NavLink>
                <NavLink>For investorer</NavLink>
                <NavLink>Presse</NavLink>
            </section>
            <section>
                <h3>Vil du have jobs direkte i din indbakke?</h3>
                <p>Tilmeld dig vores elektroniske nyhedsbrev</p>
                <form>
                    <input type="email" text="email" placeholder='Indtast email...' />
            <input type="submit" value="Tilmeld" />
                </form>
            </section>
            <section>
                <p>Fidusvej 23</p>
                <p>9230 Øster Lundby</p>
                <p>+45 22 13 22 13</p>
                <figure>
                    <img src={Facebook} alt="facebook" />
                    <img src={GooglePlus} alt="googleplus" />
                    <img src={InstagramCircle} alt="instagram" />
                    <img src={LinkedInCircled} alt="linkedIn" />
                </figure>
            </section>

        </footer>

    )
}