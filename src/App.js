import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useContractWrite, useContractRead, Web3Button, isLoading } from "@thirdweb-dev/react";
import React, { useState } from 'react';

export default async function Home() {

    const { contract } = useContract("0x6aaFD8330fcD222435D5DEF3A28B61744EEbd1f0");
    const { mutateAsync: addChoice, isLoading } = useContractWrite(contract, "addChoice");
    const [selectedValue, setSelectedValue] = useState('');
    const { chiefsData } = useContractRead(contract, "getChiefsCount");
    const { eaglesData } = useContractRead(contract, "getEaglesCount");


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

        <a href="https://www.dextools.io/app/en/ether/pair-explorer/0xa57cBC7F6757590fFA58AC3AEFA52C915a07D56F" className="card">
          <img width="90" height="90" src="https://i.ibb.co/rsQVPq5/dextools-Logo.png" alt="dextools-Logo" border="0"/>
        </a>
        <a href="https://t.me/SBWPortal" className="card">
          <img width="90" height="90" src="https://i.ibb.co/FbvKg0C/telegram-Logo.png" alt="telegram-Logo" border="0"/>
        </a>
        <a href="https://twitter.com/WagerSuperbowl" className="card">
          <img width="90" height="90" src="https://i.ibb.co/dtwRKHg/twitter-Logo.png" alt="twitter-Logo" border="0"/>
        </a>
        <a href="https://etherscan.io/token/0x6aafd8330fcd222435d5def3a28b61744eebd1f0" className="card">
          <img width="90" height="90" src="https://i.ibb.co/4WWmKJc/etherscan-Logo.png" alt="View contract" />
        </a>
        </div>

      {/* //////// BET COUNTS ///////// */}
        <div className="grid">
          <p value="chiefsCount"></p>

          <p value="eaglesCount"></p>
        </div>


        {/* //////// BET ENTRY ///////// */}
        <div className="select-enter-container">

          <h2>Who you got?</h2>

          <select value={selectedValue} onChange={handleChange} className="card" id="teamSelector">
            <option value="">---</option>
            <option value="1">Chiefs</option>
            <option value="2">Eagles</option>
          </select>

          <button class="card" onClick={call}>Enter</button>

        </div>

        <div id="dexscreener-embed">
          <iframe src="https://dexscreener.com/ethereum/0xa57cBC7F6757590fFA58AC3AEFA52C915a07D56F?embed=1">
          </iframe>
        </div>

      </main>
    </div>
  );
}
