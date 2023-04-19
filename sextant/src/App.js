import "./App.css";
import Banner from "./Components/Banner";
import Exhibit from "./Components/Exhibit";
import IPAddressComponent from "./Components/IPAddressComponent";

function App() {
  return (
    <div className="App">
      <Banner />
      <div className="exhibit-container">
        <Exhibit title={"IPv4 Address"}>
          <IPAddressComponent ipVersion={"IPv4"} />
        </Exhibit>
        <Exhibit title={"IPv6 Address"}>
          <IPAddressComponent ipVersion={"IPv6"} />
        </Exhibit>
      </div>
    </div>
  );
}

export default App;
