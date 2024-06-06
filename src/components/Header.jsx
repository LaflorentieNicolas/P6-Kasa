import { NavLink } from "react-router-dom";
import logo from "../assets/img/header-logo-desktop.webp";
import "../sass/main.scss";

function Header() {
  return (
    <header>
      <NavLink to="/">
        <img src={logo} alt="Logo Kasa" />
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeclassname="active">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
