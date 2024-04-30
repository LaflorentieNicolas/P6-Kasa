import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import "../sass/main.scss";
import imgHomeBanner from "../assets/img/banner-home.webp";

const Home = () => {
  const [logementData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("/logements.json");
        const data = await response.json();

        setData(data);
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, []);

  return (
    <main>
      <div className="banner">
        <h1>{"Chez vous, partout et ailleurs"}</h1>
        <Banner img={imgHomeBanner} />
      </div>

      {error && <span>{error}</span>}

      <div className="card-container">
        {logementData.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
