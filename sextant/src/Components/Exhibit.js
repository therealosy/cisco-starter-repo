import React from "react";
import Card from "./Card";

import "../Styles/Exhibit.css";

export default function Exhibit(props) {
  const metrics = [{ title: "IP Address", content: "127.0.0.1" }];

  let mappedCard = metrics.map(({ title, content }) => (
    <Card title={title} content={content} />
  ));

  return <div className="exhibit">{mappedCard}</div>;
}
