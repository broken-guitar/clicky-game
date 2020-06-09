import React from "react";
import "./Card.css";

const Card = props => (
  <div
   className="card img-container hover"
   style={{backgroundImage: "url(" + props.image + ")" }}
   onClick={() => props.score(props.id)}>
      <div className="h3 card-id-text">
         {props.id}
      </div>
  </div>
);

export default Card;