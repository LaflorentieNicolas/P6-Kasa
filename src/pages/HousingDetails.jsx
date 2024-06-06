import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import getLogements from "../api/getLogements";
import "../sass/main.scss";

function HousingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementData, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getLogements();
        const logement = data.find((item) => item.id === id);
        if (!logement) {
          navigate("/notfound");
        } else {
          setData(logement);
        }
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, [id, navigate]);

  if (error) {
    return <span>{error}</span>;
  }

  if (!logementData) {
    return null;
  }

  return (
    <main>
      <div className="carrousel">
        <Carrousel
          key={logementData.id}
          id={logementData.id}
          cover={logementData.cover}
          pictures={logementData.pictures}
          title={logementData.title}
        />
      </div>
    </main>
  );
}

export default HousingDetails;
