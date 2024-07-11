import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import getAboutContent from "../api/getAboutContent.js";
import "../sass/main.scss";
import imgAboutBanner from "../assets/img/banner-about.webp";
import PropTypes from "prop-types";

const About = () => {
  const [aboutData, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const aboutContent = await getAboutContent();
        setData(aboutContent);
      } catch (err) {
        setError(err);
      }
    }
    getData();
  }, []);

  return (
    <main>
      <div className="banner">
        <Banner img={imgAboutBanner} />
      </div>
      {error && <span>{error.message}</span>}{" "}
      <div className="about-container">
        {aboutData.map((about) => (
          <Collapse
            key={about.id}
            title={<h2 className="collapse__title-about">{about.title}</h2>}
            description={<p className="collapse__text">{about.description}</p>}
          />
        ))}
      </div>
    </main>
  );
};

About.propTypes = {
  aboutData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.instanceOf(Error),
};

export default About;
