import "../sass/main.scss";

function Carrousel({ cover, pictures, title }) {
  return (
    <div className="carrousel-container">
      <img className="card__image" src={cover} alt={title} />
    </div>
  );
}

export default Carrousel;
