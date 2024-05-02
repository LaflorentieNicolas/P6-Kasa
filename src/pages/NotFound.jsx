import { NavLink } from "react-router-dom";
import "../sass/main.scss";

function NotFound() {
  return (
    <div className="error">
      <p className="error__number">404</p>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/" className="error__back-home-page">
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}
export default NotFound;
