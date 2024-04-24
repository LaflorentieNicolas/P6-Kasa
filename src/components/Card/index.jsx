import "../../sass/main.scss";

function Card({ cover, name }) {
  return (
    <div className="card">
      <img className="card__image" src={cover} alt={name} />
      <p className="card__title">{name}</p>
    </div>
  );
}

export default Card;
