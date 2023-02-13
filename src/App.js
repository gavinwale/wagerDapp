import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { useContract, useContractWrite, useContractRead, Web3Button, isLoading } from "@thirdweb-dev/react";
import React, { useState } from 'react';

export default async function Home() {

    const { contract } = useContract("*** INSERT CONTRACT HERE ***");
    const { mutateAsync: addChoice, isLoading } = useContractWrite(contract, "addChoice");
    const [selectedValue, setSelectedValue] = useState('');
    // const { oneData } = useContractRead(contract, "getOneCount");
    // const { twoData } = useContractRead(contract, "getTwoCount");


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
        <h1 className="title">My dApp</h1>

      {/* //////// DESCRIPTION ///////// */}
        <h2 className="description">
          Your favorite token
        </h2>

      {/* //////// IMPORTANT LINKS ///////// */}
        <div className="grid">

        <a href="https://www.dextools.io/" className="card">
          <img width="90" height="90" src="https://i.ibb.co/rsQVPq5/dextools-Logo.png" alt="dextools-Logo" border="0"/>
        </a>
        <a href="https://t.me/" className="card">
          <img width="90" height="90" src="https://i.ibb.co/FbvKg0C/telegram-Logo.png" alt="telegram-Logo" border="0"/>
        </a>
        <a href="https://twitter.com/" className="card">
          <img width="90" height="90" src="https://i.ibb.co/dtwRKHg/twitter-Logo.png" alt="twitter-Logo" border="0"/>
        </a>
        <a href="https://etherscan.io/" className="card">
          <img width="90" height="90" src="https://i.ibb.co/4WWmKJc/etherscan-Logo.png" alt="View contract" />
        </a>
        </div>

      {/* //////// BET COUNTS ///////// 
      
              <div className="grid">
          <p value="oneCount"></p>

          <p value="twoCount"></p>
        </div> 
      
      
      */}



        {/* //////// BET ENTRY ///////// */}
        <div className="select-enter-container">

          <h2>Who you got?</h2>

          <select value={selectedValue} onChange={handleChange} className="card" id="teamSelector">
            <option value="">---</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>

          <button class="card" onClick={call}>Enter</button>

        </div>

        {/* <div id="dexscreener-embed">
          <iframe src="https://dexscreener.com/ethereum/">
          </iframe>
        </div> */}

      </main>
    </div>
  );
}
