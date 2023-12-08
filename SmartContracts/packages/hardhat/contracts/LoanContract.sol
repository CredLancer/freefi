// SPDX-License-Identifier: MIT

pragma solidity >=0.8.13;
import "./LoanLibrary.sol";

contract LoanContract {
    using LoanLibrary for LoanLibrary.Lender;
    using LoanLibrary for LoanLibrary.Borrower;
    using LoanLibrary for LoanLibrary.Agreement;
    using LoanLibrary for LoanLibrary.Offer;

    uint256 public constant DEFAULT_EXPIRATION_TIMESPAN = 15552000; //180 days period.

    mapping(address => LoanLibrary.Lender) internal lenderData;
    mapping(address => LoanLibrary.Borrower) internal borrowerData;
    mapping(address => LoanLibrary.Agreement) internal loanAgreements;

    modifier alreadyInAgreement(address _borrowerAddress, address _lenderAddress){
        require(loanAgreements[_borrowerAddress].lenderAddress != _lenderAddress, "Already in loan agreement with this lender.");
        _;
    }

    function createLoanAgreement(LoanLibrary.Lender memory lender, LoanLibrary.Borrower memory borrower, LoanLibrary.Offer memory lenderOffer) public alreadyInAgreement(borrower.borrower, lender.lender) returns (LoanLibrary.Agreement memory) {
        uint256 sixmonthFromTimestamp = block.timestamp + DEFAULT_EXPIRATION_TIMESPAN;

        LoanLibrary.Agreement memory newAgreement = LoanLibrary.Agreement({
            lenderAddress: lender.lender, //vault address 
            borrowerAddress: borrower.borrower,  //borrower address
            currentRepaymentAmount: lenderOffer.loanOfferAmount,  //this changes later???
            principalBorrowAmount: lenderOffer.loanOfferAmount,  //this shouldnt change later
            interestRate: lenderOffer.interestRate,
            repayByTimestamp: sixmonthFromTimestamp, 
            createdDate: block.timestamp, 
            lenderData: lender,  //why the address again??
            borrowerData: borrower //why the address again??
        });

        loanAgreements[lender.lender] = newAgreement;
        return newAgreement;
    }
    function removeLoanAgreement(address lenderAddress) public {
        delete loanAgreements[lenderAddress]; // add security, this should be automatic and controlled
    } 

}