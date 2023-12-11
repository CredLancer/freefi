# FreeFi
FreeFi is at the forefront of empowering freelancers with financial freedom by transforming the lending industry. Through our innovative community lending framework, we provide loans supported by the skills of contractors. By utilizing decentralized finance methods and Trust Credentials, we introduce transparency, accountability, and instantaneous credit scoring to the lending process.<br>

Be a part of our journey to redefine the lending landscape, offering a secure, on-chain solution for DAOs, communities, member organizations, and beyond. Join us in shaping the future of lending with a trustless approach.<br>
## Problems we are solving 
Freelancers encounter significant challenges in securing loans, primarily due to the absence of a consistent work history, limiting their access to conventional lending avenues. This obstacle impedes their aspirations for sustainable living, homeownership, car leasing, and more.<br>

**Key insights on the issue:**<br>

1. A survey by Upwork reveals that 58% of freelancers struggle to secure financing because of the lack of a stable income source.<br>
2. The Federal Reserve's 2020 Small Business Credit Survey indicates that 70% of non-employer firms, often comprising freelancers, face funding shortfalls, highlighting the difficulty in accessing capital.<br>
3. The Freelancers Union's study found that 63% of freelancers encounter challenges obtaining a mortgage due to their irregular income, emphasizing the limitations in traditional loan applications.<br>

Notably, there is currently no decentralized lending platform facilitating private, uncollateralized loans. Our goal is to provide a solution tailored for close-knit communities seeking to harness decentralized finance (DeFi) to bring credit capital and investment returns to their members.<br>


## Smart Contracts 

**Get a loan**<br>
Trustless & Transparent: Smart contracts are used for loan requests, transfers and trust credential issuance. FreedFi ensures a seamless and efficient experience for both freelancers and investors.<br>

GetaLoan.sol https://github.com/captainahab0x/freedfi/blob/main/contracts/src/GetALoan.sol <br>

Borrowers request, are approved, and payback loans.<br>
Investors approve loans and receive payback.<br>
FreeFi fund the loan and issues Trust Credentials.<br>
This smart contract is a basic lending platform written in Solidity. It allows users to borrow funds from a lender and repay the borrowed amount. Key features include tracking user balances, borrowed amounts, and the status of active loans.<br>
	•			Deployment Information:<br>
	We have deployed the contract using Remix , Contracts are deployed on the following blockchain: Avalache - GetALoan.sol -<br>
 address: 0xddB6BA183a73a6418eDa8a0feb812ED57116Aa3e
	•			Blockchain Explorer:<br>
	**We have used a blockchain explorer; Avalanche Explorer (for Avalanche C-Chain)<br>**
	•			Record Keeping:<br>
	Maintain a record of contract deployments, including contract addresses, deployment dates, and networks (e.g., Avalanche Fuji C-Chain, Ethereum, XDC, Celo, etc.).<br>
In this Smart Contract we deployed it on **Avalanche Fuji C-Chain** <br>
**Explanation:** <br>
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
![image](https://github.com/CredLancer/freefi/assets/149180655/abe5f4db-7726-46b0-8507-9857405893cd)
