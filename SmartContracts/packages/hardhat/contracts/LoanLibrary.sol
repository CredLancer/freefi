// SPDX-License-Identifier: MIT
pragma solidity >=0.8.13;

library LoanLibrary {
   struct Lender {
        address lender; // Vault Address create vault
    }

    struct Borrower {
        address borrower;
    }

    struct Agreement {
        address lenderAddress; //ok address vault
        address borrowerAddress; //ok same as back
        uint256 currentRepaymentAmount; // borrow + interests
        uint256 principalBorrowAmount; //borrow amount
        uint256 interestRate; // ok
        uint256 repayByTimestamp; // due date
        uint256 createdDate; // date of tx
        Lender lenderData; // ??
        Borrower borrowerData; // ??
    }

    struct Offer {
        uint256 loanOfferAmount;
        uint256 interestRate;
        address lender;
        uint256 minAmount; // Added minimum amount for freelancing contracts
        uint64 skillBadge; // Added required skill badge for freelancing contracts
    }
    }
