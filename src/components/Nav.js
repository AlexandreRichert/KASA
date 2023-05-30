import { NavLink } from "react-router-dom"
export default function Nav () {
    return (
        <div className="navigation">
            <div className="navigation-logo">
                <img src="./LOGO.png" alt="logo" />
            </div>
            <div className="navigation-links">
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">A Propos</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}