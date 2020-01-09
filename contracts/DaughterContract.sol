pragma solidity ^0.5.0;

contract DaughterContract {
 string public name;
 uint public age;
 constructor(
  string memory _daughtersName,
  uint _daughtersAge
 )
  public
 {
  name = _daughtersName;
  age = _daughtersAge;
 }
}