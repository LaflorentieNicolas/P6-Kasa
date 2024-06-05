import { useNavigate } from "react-router-dom";

import "../sass/main.scss";

function Card({ cover, title, id }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/form/${id}`);
  };

  return (
    <div className="card" data-id={id} onClick={handleCardClick}>
      <p className="card__title">{title}</p>
      <img className="card__image" src={cover} alt={title} />
    </div>
  );
}

export default Card;
