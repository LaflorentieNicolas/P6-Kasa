import arrow from "../assets/img/arrow.png";
import "../sass/main.scss";

function Collapse({ title, description }) {
  return (
    <div className="collapse">
      <p className="collapse__title">{title}</p>
      <button>
        <img src={arrow} alt="Ouvrir le texte" />
      </button>
    </div>
  );
}

export default Collapse;
