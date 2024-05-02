import { useNavigate } from "react-router-dom";
import "../sass/main.scss";

function NotFound() {
  const navigate = useNavigate();

  const handleBackHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="error">
      <p className="error__number">404</p>
      <p className="error__text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <p className="error__backhome" onClick={handleBackHomeClick}>
        Retourner sur la page d'accueil
      </p>
    </div>
  );
}

export default NotFound;
