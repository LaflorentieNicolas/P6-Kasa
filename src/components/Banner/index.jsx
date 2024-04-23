import "./banner.scss";

function Banner({ img, className }) {
  return (
    <div className={className}>
      <img src={img} alt="Bannière" />
      <h1>{"Chez vous, partout et ailleurs"}</h1>
    </div>
  );
}

export default Banner;
