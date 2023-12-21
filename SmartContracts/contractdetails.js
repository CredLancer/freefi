import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const YourComponent = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(0);
  const [borrowedAmount, setBorrowedAmount] = useState(0);

  const contractABI = [
    {
        "inputs": [
         {
          "internalType": "address payable",
          "name": "lender",
          "type": "address"
         },
         {
          "internalType": "address payable",
          "name": "borrower",
          "type": "address"
         },
         {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
         }
        ],
        "name": "borrow",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
       },
       {
        "inputs": [],
        "name": "deposit",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
       },
       {
        "inputs": [
         {
          "internalType": "address payable",
          "name": "lender",
          "type": "address"
         },
         {
          "internalType": "address payable",
          "name": "borrower",
          "type": "address"
         }
        ],
        "name": "repay",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
       },
       {
        "inputs": [],
        "stateMutability": "payable",
        "type": "constructor"
       },
       {
        "anonymous": false,
        "inputs": [
         {
          "indexed": true,
          "internalType": "address",
          "name": "lender",
          "type": "address"
         },
         {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
         },
         {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
         }
        ],
        "name": "Borrowed",
        "type": "event"
       },
       {
        "anonymous": false,
        "inputs": [
         {
          "indexed": true,
          "internalType": "address",
          "name": "lender",
          "type": "address"
         },
         {
          "indexed": true,
          "internalType": "address",
          "name": "borrower",
          "type": "address"
         },
         {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
         }
        ],
        "name": "Repaid",
        "type": "event"
       },
       {
        "inputs": [
         {
          "internalType": "address",
          "name": "",
          "type": "address"
         }
        ],
        "name": "balances",
        "outputs": [
         {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
         }
        ],
        "stateMutability": "view",
        "type": "function"
       },
       {
        "inputs": [
         {
          "internalType": "address",
          "name": "",
          "type": "address"
         }
        ],
        "name": "borrowedAmounts",
        "outputs": [
         {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
         }
        ],
        "stateMutability": "view",
        "type": "function"
       },
       {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
         {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
         }
        ],
        "stateMutability": "view",
        "type": "function"
       },
       {
        "inputs": [],
        "name": "getBorrowedAmount",
        "outputs": [
         {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
         }
        ],
        "stateMutability": "view",
        "type": "function"
       },
       {
        "inputs": [
         {
          "internalType": "address",
          "name": "",
          "type": "address"
         }
        ],
        "name": "hasActiveLoan",
        "outputs": [
         {
          "internalType": "bool",
          "name": "",
          "type": "bool"
         }
        ],
        "stateMutability": "view",
        "type": "function"
       },
       {
        "inputs": [],
        "name": "owner",
        "outputs": [
         {
          "internalType": "address",
          "name": "",
          "type": "address"
         }
        ],
        "stateMutability": "view",
        "type": "function"
       }      
  ];
  const contractAddress = 0xddB6BA183a73a6418eDa8a0feb812ED57116Aa3e;

  useEffect(() => {
    // Check if Web3 is already injected by the browser's provider
    if (window.ethereum) {
      const newWeb3 = new Web3(window.ethereum);
      setWeb3(newWeb3);

      // Request account access if needed
      window.ethereum.enable().then((accounts) => {
        setAccount(accounts[0]);
      }).catch((error) => {
        console.error('Error enabling Ethereum accounts:', error);
      });
    } else {
      console.error('Please install MetaMask!');
    }
  }, []);

  useEffect(() => {
    // Create a contract instance
    if (web3 && contractABI && contractAddress) {
      const newContract = new web3.eth.Contract(contractABI, contractAddress);
      setContract(newContract);
    }
  }, [web3, contractABI, contractAddress]);

  const deposit = async (amount) => {
    try {
      await contract.methods.deposit().send({ from: account, value: amount });
      updateBalances();
    } catch (error) {
      console.error('Error depositing funds:', error);
    }
  };

  const borrow = async (amount) => {
    try {
      await contract.methods.borrow(account, amount).send({ from: account });
      updateBalances();
    } catch (error) {
      console.error('Error borrowing funds:', error);
    }
  };

  const repay = async () => {
    try {
      await contract.methods.repay(account).send({ from: account, value: borrowedAmount });
      updateBalances();
    } catch (error) {
      console.error('Error repaying loan:', error);
    }
  };

  const updateBalances = async () => {
    try {
      const newBalance = await contract.methods.getBalance().call({ from: account });
      const newBorrowedAmount = await contract.methods.getBorrowedAmount().call({ from: account });
      setBalance(newBalance);
      setBorrowedAmount(newBorrowedAmount);
    } catch (error) {
      console.error('Error updating balances:', error);
    }
  };

  return (
    <div>
      <h1>Lending Platform</h1>
      <p>Account: {account}</p>
      <p>Balance: {balance} wei</p>
      <p>Borrowed Amount: {borrowedAmount} wei</p>

      <button onClick={() => deposit(1000)}>Deposit 1000 wei</button>
      <button onClick={() => borrow(500)}>Borrow 500 wei</button>
      <button onClick={repay}>Repay Loan</button>
    </div>
  );
};

export default YourComponent;
