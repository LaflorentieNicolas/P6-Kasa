import "../sass/main.scss";

function Banner({ img, className }) {
  return (
    <div className={className}>
      <img src={img} alt="Bannière" />
    </div>
  );
}

export default Banner;
