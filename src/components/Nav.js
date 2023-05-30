import { NavLink } from "react-router-dom"

export default function Nav () {
    return (
        <div className="navigation">
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/About">A propos</NavLink>
                </li>
            </ul>
        </div>
    )
}