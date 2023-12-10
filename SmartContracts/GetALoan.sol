// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract LendingPlatform {
    address public owner;
    mapping(address => uint256) public balances;
    mapping(address => uint256) public borrowedAmounts;
    mapping(address => bool) public hasActiveLoan;

    event Borrowed(address indexed lender, address indexed borrower, uint256 amount);
    event Repaid(address indexed lender, address indexed borrower, uint256 amount);

    constructor() payable {
        owner = msg.sender;
        if (msg.value > 0) {
            deposit();
        }
    }


    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    function borrow(address payable lender, address payable borrower, uint256 amount) external {
        require(amount > 0, "Borrowed amount must be greater than zero");
        require(balances[lender] >= amount, "Lender has insufficient balance");
        require(!hasActiveLoan[borrower], "Borrower can only borrow one loan at a time");

        // Effects
        balances[lender] -= amount;
        borrowedAmounts[borrower] = amount;
        hasActiveLoan[borrower] = true;

        // Interactions
        borrower.transfer(amount);  // Send the borrowed amount to the borrower

        emit Borrowed(lender, borrower, amount);
    }

    function repay(address payable lender, address payable borrower) external payable {
        uint256 borrowedAmount = borrowedAmounts[borrower];
        require(borrowedAmount > 0, "Borrower has no borrowed amount to repay");
        require(msg.sender == borrower, "Only borrower can repay");
        require(msg.value == borrowedAmount, "You must repay the full borrowed amount");
        // Interactions
        lender.transfer(borrowedAmount);  // Send the borrowed amount to the borrower
        // Effects
        borrowedAmounts[borrower] = 0;
        hasActiveLoan[borrower] = false;

        // Interactions
        balances[lender] += msg.value;  // Update lender's balance

        emit Repaid(lender, borrower, borrowedAmount);
    }

    function deposit() public payable onlyOwner {
        require(msg.value > 0, "Deposit amount must be greater than zero");
        balances[owner] += msg.value;
    }

    function getBalance() external view returns (uint256) {
        return balances[msg.sender];
    }

    function getBorrowedAmount() external view returns (uint256) {
        return borrowedAmounts[msg.sender];
    }
}
