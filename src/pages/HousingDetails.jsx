import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import getLogement from "../api/getLogement";
import "../sass/main.scss";

function HousingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementData, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const logement = await getLogement(id);
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
        <Slideshow
          key={logementData.id}
          id={logementData.id}
          cover={logementData.cover}
          pictures={logementData.pictures}
          title={logementData.title}
        />
      </div>
      <div className="housing__info">
        <h1 className="housing__title">{logementData.title}</h1>
        <h2 className="housing__location">{logementData.location}</h2>
        <div className="housing__tags">
          {logementData.tags.map((tag, i) => (
            <p key={i} className="housing__tags-tag">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}

export default HousingDetails;
