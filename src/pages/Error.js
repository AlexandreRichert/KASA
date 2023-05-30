import { NavLink } from "react-router-dom";


export default function Error() {
    return (
      <div className="error">
        <h1>404</h1>
        <div className="error-message">
          Oups ! la page que vous demandez n'existe pas
        </div>
        <br />
        <p>
          <NavLink to ="/">Retourner sur la page d'accueil</NavLink>
        </p>
      </div>
    );
  }