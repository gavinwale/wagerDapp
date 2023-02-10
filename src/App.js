import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import React, { useState } from 'react';

export default function Home() {


    const { contract } = useContract("0x31DCD6d797A39DC41A99b66eC8e0C689f41dc9c9");
    const { mutateAsync: addChoice, isLoading } = useContractWrite(contract, "addChoice");
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    const call = async () => {
      try {
        const data = await addChoice([selectedValue]);
        console.info("contract call successs", data);
      } catch (err) {
        console.error("contract call failure", err);
      }
    }

  return (
    <div className="container">
    
      <main className="main">
      {/* //////// CONNECT ///////// */}
      <div className="connect">
          <ConnectWallet />
        </div>

      {/* //////// TITLE ///////// */}
        <h1 className="title">Superbowl Wager</h1>

      {/* //////// DESCRIPTION ///////// */}
        <h2 className="description">
          Your favorite token for Superbowl LVII
        </h2>

      {/* //////// IMPORTANT LINKS ///////// */}
        <div className="grid">

        <a href="https:dextools.io" className="card">
          <img width="90" height="90" src="https://i.ibb.co/rsQVPq5/dextools-Logo.png" alt="dextools-Logo" border="0"/>
        </a>
        <a href="https://telegram.org" className="card">
          <img width="90" height="90" src="https://i.ibb.co/FbvKg0C/telegram-Logo.png" alt="telegram-Logo" border="0"/>
        </a>
        <a href="https://twitter.com" className="card">
          <img width="90" height="90" src="https://i.ibb.co/dtwRKHg/twitter-Logo.png" alt="twitter-Logo" border="0"/>
        </a>
        <a href="https://goerli.etherscan.io/address/0x31dcd6d797a39dc41a99b66ec8e0c689f41dc9c9" className="card">
          <img width="90" height="90" src="https://i.ibb.co/4WWmKJc/etherscan-Logo.png" alt="View contract" />
        </a>
        </div>

        <div className="select-enter-container">

          <h2>Who you got?</h2>

          <select value={selectedValue} onChange={handleChange} className="card" id="teamSelector">
            <option value="">---</option>
            console.log(selectedValue);
            <option value="1">Chiefs</option>
            console.log(selectedValue);
            <option value="2">Eagles</option>
            console.log(selectedValue);
          </select>


          <button class="card" onClick={call}>Enter</button>

        </div>

      </main>
    </div>
  );
}
