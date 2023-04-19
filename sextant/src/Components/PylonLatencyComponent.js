import React, { useState } from "react";

const webSocketClient = new WebSocket("ws://localhost:55455");

export default function PylonLatencyComponent() {
  const [latency, setLatency] = useState("Loading...");

  // webSocketClient.onopen = (event) => {
  //   console.log("Connection established");
  // };

  webSocketClient.onmessage = (event) => {
    const timestamp = JSON.parse(event.data);
    try {
      setLatency(`${new Date().getTime() - timestamp}ms`);
    } catch (error) {
      console.log(error);
      setLatency(error.message);
    }
  };

  webSocketClient.onclose = (event) => {
    setLatency("Disconnected");
  };

  return <div>{latency}</div>;
}
