// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract SimpleCredentialsVerifier {
    struct FreelancingContract {
        address client;
        address freelancer;
        uint256 amount;
        uint64[] skillBadges;
        bool isCompleted;
    }

    mapping(address => FreelancingContract[]) public freelancerToContracts;
    mapping(address => uint64[]) public walletToSkillBadges;

    function hasOpenContracts(address freelancer, uint256 minAmount)
        public
        view
        returns (bool)
    {
        FreelancingContract[] memory contracts = freelancerToContracts[
            freelancer
        ];
        for (uint256 i = 0; i < contracts.length; i++) {
            if (!contracts[i].isCompleted && contracts[i].amount >= minAmount) {
                return true;
            }
        }
        return false;
    }

    function isEnabledToBorrow(address freelancer, uint256 minAmount)
        public
        view
        returns (bool)
    {
        return hasOpenContracts(freelancer, minAmount);
    }
}
