import "./App.css";
import Banner from "./Components/Banner";
import Exhibit from "./Components/Exhibit";
import IPAddressComponent from "./Components/IPAddressComponent";
import PylonLatencyComponent from "./Components/PylonLatencyComponent";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="exhibit-container">
        <Exhibit title={"Public IPv4 Address"}>
          <IPAddressComponent ipVersion={"IPv4"} />
        </Exhibit>
        <Exhibit title={"Public IPv6 Address"}>
          <IPAddressComponent ipVersion={"IPv6"} />
        </Exhibit>
        <Exhibit title={"Pylon Latency"}>
          <PylonLatencyComponent />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
