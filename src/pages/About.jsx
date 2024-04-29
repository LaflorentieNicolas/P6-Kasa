import imgAboutBanner from "../assets/img/banner-about.webp";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";

function About() {
  return (
    <main>
      <div className="banner">
        <Banner img={imgAboutBanner} />
      </div>
      <Collapse />
    </main>
  );
}

export default About;
