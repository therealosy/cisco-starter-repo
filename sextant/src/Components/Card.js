import React from "react";

import "../Styles/Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-title-container">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="card-content">{props.content}</div>
    </div>
  );
}
