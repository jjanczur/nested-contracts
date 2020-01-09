pragma solidity ^0.5.0;

import "./DaughterContract.sol";

contract MomContract {
    string public name;
    uint public age;

    DaughterContract public daughter;

    constructor(
        string memory _momsName,
        uint _momsAge,
        string memory _daughtersName,
        uint _daughtersAge
    )
        public
    {
        daughter = new DaughterContract(_daughtersName, _daughtersAge);
        name = _momsName;
        age = _momsAge;
    }

    function daughterAddress() public view returns (address) {
        return address(daughter);
    }


}