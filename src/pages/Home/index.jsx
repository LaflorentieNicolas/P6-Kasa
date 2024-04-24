import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card/index";
import "../../sass/main.scss";
import imgHomeBanner from "../../assets/img/banner-home.webp";

const Home = () => {
  return (
    <main>
      <div className="banner">
        <h1>{"Chez vous, partout et ailleurs"}</h1>
        <Banner img={imgHomeBanner} />
      </div>

      <div className="card-container">
        <Card /> <Card /> <Card /> <Card /> <Card /> <Card />
      </div>
    </main>
  );
};

export default Home;
