import { NavLink } from "react-router-dom"
import logo from '../assets/LOGO.png'


export default function Nav () {
    return (
        <header className="navigation">
            <div className="navigation-logo">
                <img src={logo} alt="logo KASA" />
            </div>
            <nav className="navigation-links">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}