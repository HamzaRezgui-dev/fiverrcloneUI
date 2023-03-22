import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

const CatCard = ({ item }) => {
  return (
    <Link to="/gigs/120">
      <div className="catcard">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CatCard;