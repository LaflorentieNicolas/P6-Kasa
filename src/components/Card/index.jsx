import "../../sass/main.scss";

function Card({ cover, title }) {
  return (
    <div className="card">
      <p className="card__title">{title}</p>
      <img className="card__image" src={cover} alt={title} />
    </div>
  );
}

export default Card;
