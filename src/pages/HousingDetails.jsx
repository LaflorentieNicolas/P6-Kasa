import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import getLogements from "../api/getLogements";
import "../sass/main.scss";

function HousingDetails() {
  const { id } = useParams();
  const [logementData, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getLogements();
        const logement = data.find((item) => item.id === id);
        setData(logement);
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, [id]);

  if (error) {
    return <span>{error}</span>;
  }

  if (!logementData) {
    return null;
  }

  return (
    <div className="carrousel">
      <Carrousel
        key={logementData.id}
        id={logementData.id}
        cover={logementData.cover}
        pictures={logementData.pictures}
        title={logementData.title}
      />
    </div>
  );
}

export default HousingDetails;
