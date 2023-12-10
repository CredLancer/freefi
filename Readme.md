# FreedFi
Smart Contracts 

Get a loan

This contract allows users to borrow and repay funds.<br>
This smart contract is a basic lending platform written in Solidity. It allows users to borrow funds from a lender and repay the borrowed amount. Key features include tracking user balances, borrowed amounts, and the status of active loans.<br>
	•			Deployment Information:<br>
	We have deployed the contract using Remix , the address for the contract is 0xddB6BA183a73a6418eDa8a0feb812ED57116Aa3e <br>
	•			Blockchain Explorer:<br>
	We have used a blockchain explorer; Avalanche Explorer (for Avalanche C-Chain)<br>
	•			Record Keeping:<br>
	Maintain a record of contract deployments, including contract addresses, deployment dates, and networks (e.g., Avalanche Fuji C-Chain, Ethereum, XDC, Celo, etc.).<br>
In this Smart Contract we deployed it on Avalanche Fuji C-Chain <br>
Explanation: 
- State Variables:<br>
  - `owner`: Address of the contract owner.<br>
  - `balances`: Mapping of addresses to their balances.<br>
  - `borrowedAmounts`: Mapping of borrower addresses to the amount they borrowed.<br>
  - `hasActiveLoan`: Mapping to check if a borrower has an active loan.<br>

- Events:<br>
  - `Borrowed`: Triggered when a borrower successfully borrows funds.<br>
  - `Repaid`: Triggered when a borrower successfully repays their loan.<br>

- Constructor:<br>
  - Initializes the owner as the sender of the deployment transaction.<br>
  - Deposits any ether sent with the deployment into the owner's balance.<br>

- Modifier:<br>
  - `onlyOwner`: Ensures only the owner can execute specific functions.<br>

- Functions:<br>
  - `borrow`: Allows a borrower to borrow funds with checks for validity.<br>
  - `repay`: Allows a borrower to repay their loan with validity checks.<br>
  - `deposit`: Allows the owner to deposit funds into their balance.<br>
  - `getBalance`: Retrieves the caller's balance.<br>
  - `getBorrowedAmount`: Retrieves the amount borrowed by the caller.<br>
