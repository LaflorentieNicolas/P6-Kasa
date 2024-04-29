import arrow from "../assets/img/arrow.png";
import "../sass/main.scss";

function Collapse() {
  return (
    <div className="collapse">
      <p className="collapse__title">Test</p>
      <button>
        <img src={arrow} alt="Ouvrir le texte" />
      </button>
    </div>
  );
}

export default Collapse;
