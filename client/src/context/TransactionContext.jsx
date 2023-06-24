import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI);

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIsWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        alert("Please install metamask");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No Accounts found!");
      }
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object..");
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) {
        alert("Please install metamask");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
      throw new Error("No ethereum object..");
    }
  };

  

  useEffect(() => {
    checkIsWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
      {children}
    </TransactionContext.Provider>
  );
};
