import PropTypes from "prop-types";
import "../sass/main.scss";

function Banner({ img, className }) {
  return (
    <div className={className}>
      <img src={img} alt="Bannière" />
    </div>
  );
}

Banner.propTypes = {
  img: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Banner;
