// SPDX-License-Identifier: MIT

pragma solidity ^0.8.17;
contract SuperbowlInu {

  mapping(address => uint8) public choices;

  uint256 chiefsCount = 0;
  uint256 eaglesCount = 0;
  event VoteCasted(address, uint8);

    /*
     * Adds a user's choice and uses a key-value pair to match an address to a choice.
     *
     * @param - uint8 choice
     * NOTE: 1 is Chiefs, 2 is Eagles.
     */
    function addChoice(uint8 choice) public {
        // Require the choice is within the bounds
        require(choice == 1 || choice == 2, "Not choosing a team");
        // Require the user has not yet chosen a team
        require(choices[msg.sender] == 0);
        // Add the users choice to the choices mapping
        choices[msg.sender] = choice;
        // Ternarily increments chiefsCount || eaglesCount
        choice == 1 ? chiefsCount++ : eaglesCount++;
        emit VoteCasted(msg.sender, choice);
    }

}