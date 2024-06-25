// HousingDetails.jsx

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import Slideshow from "../components/Slideshow";
import getLogement from "../api/getLogement";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../sass/main.scss";

function HousingDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [logementData, setLogementData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchLogementData() {
      try {
        const logement = await getLogement(id);
        if (!logement) {
          navigate("/notfound");
        } else {
          setLogementData(logement);
        }
      } catch (err) {
        setError(err);
      }
    }
    fetchLogementData();
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
      <article className="housing__container">
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
        <div className="housing__host-container">
          <div className="housing__host-info">
            <p className="housing__host-name">{logementData.host.name}</p>
            <img
              src={logementData.host.picture}
              alt="host-cover"
              className="housing__host-picture"
            />
          </div>
          <Rating rating={logementData.rating} />
        </div>
      </article>
      <div className="housing__collapse">
        <Collapse
          id={`${logementData.id}-description`}
          title={
            <h2 className="collapse__title-housingdetails">Description</h2>
          }
          description={
            <p className="collapse__text">{logementData.description}</p>
          }
        />
        <Collapse
          id={`${logementData.id}-equipments`}
          title={<h2 className="collapse__title-housingdetails">Equipement</h2>}
          description={
            <ul>
              {logementData.equipments.map((equipment, index) => (
                <li key={index} className="collapse__text">
                  {equipment}
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </main>
  );
}

HousingDetails.propTypes = {
  logementData: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default HousingDetails;
