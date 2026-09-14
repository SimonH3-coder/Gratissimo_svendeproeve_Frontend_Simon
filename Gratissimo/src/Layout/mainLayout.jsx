import { Outlet } from "react-router"
import { Header } from '../Component/Header/header'
import { Navigation } from '../Component/Navbar/Navigation'
import { Footer } from '../Component/Footer/footer'

export function MainLayout () {
    return (
    <>
     < Header/>
     < Navigation />
    < Outlet/>
    < Footer />
    
    </>
    )
    
}