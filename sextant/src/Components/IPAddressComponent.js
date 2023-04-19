import React, { useEffect, useState } from "react";

export default function IPAddressComponent(props) {
  const [ipAddress, setIpAddress] = useState();
  const { ipVersion } = props;

  useEffect(() => {
    const urlModifier =
      ipVersion === "IPv6" ? "64" : ipVersion === "IPv4" && "";

    const fetchIP = async () => {
      try {
        const response = await fetch(
          `https://api${urlModifier}.ipify.org?format=json`
        );

        const data = await response.json();
        console.log(response);
        setIpAddress(data.ip);
      } catch (error) {
        console.log(error);
        setIpAddress(error.message);
      }
    };

    fetchIP();
  }, [ipAddress, ipVersion]);

  return <div>{ipAddress}</div>;
}
