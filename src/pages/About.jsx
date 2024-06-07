import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import getAboutContent from "../api/getAboutContent.js";
import "../sass/main.scss";
import imgAboutBanner from "../assets/img/banner-about.webp";

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
      {error && <span>{error}</span>}
      <div className="about-container">
        {aboutData.map((about) => (
          <Collapse
            key={about.id}
            id={about.id}
            title={about.title}
            description={about.description}
          />
        ))}
      </div>
    </main>
  );
};

export default About;
