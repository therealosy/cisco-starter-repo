import React from "react";

import "../Styles/Exhibit.css";

export default function Exhibit(props) {
  return (
    <div className="exhibit">
      <div className="exhibit-title-container">
        <h3 className="exhibit-title">{props.title}</h3>
      </div>
      <div className="exhibit-content">{props.children}</div>
    </div>
  );
}
