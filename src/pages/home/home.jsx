import React from "react";
import Featured from "../../components/featured/Featured";
import Slide from "../../components/Slide/Slide";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import "./home.scss";
import { cards } from "../../data";
import CatCard from "../../components/categoryCard/CatCard";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide arrowsScroll={3} slidesToShow={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
