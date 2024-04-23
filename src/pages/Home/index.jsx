import Banner from "../../components/Banner/index";
import "../../sass/main.scss";
import imgHomeBanner from "../../assets/img/banner-home.webp";

const Home = () => {
  return (
    <main>
      <div className="banner">
        <h1>{"Chez vous, partout et ailleurs"}</h1>
        <Banner img={imgHomeBanner} />
      </div>
    </main>
  );
};

export default Home;
