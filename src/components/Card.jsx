import PropTypes from "prop-types";
import "../sass/main.scss";

function Card({ cover, title, id, onPress }) {
  return (
    <div className="card" data-id={id} onClick={onPress}>
      <p className="card__title">{title}</p>
      <img className="card__image" src={cover} alt={title} />
    </div>
  );
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default Card;
