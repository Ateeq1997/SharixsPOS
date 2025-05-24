import React from "react";
import './style.css'
const Card = ({ icon, title, value }) => {
  return (
    <div className="card">
      <div className="icon">{icon}</div>
      <div className="content">
        <h3>{value}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
