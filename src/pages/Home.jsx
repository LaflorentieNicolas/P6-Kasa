import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Card from "../components/Card";
import getLogements from "../api/getLogements";
import "../sass/main.scss";
import imgHomeBanner from "../assets/img/banner-home.webp";

const Home = () => {
  const [logementData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const logements = await getLogements();

        setData(logements);
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
          <Link to={`/HousingDetails/${logement.id}`} key={logement.id}>
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              cover={logement.cover}
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
