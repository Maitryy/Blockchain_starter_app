pragma solidity ^0.5.0;

contract Tether {
    string public name = 'Mock Tether Token';
    string public symbol = 'mUSDT';
    uint256 public totalSupply = 100000000000000000000000; //1 ml tokens
    uint8 public decimals = 18;

    constructor() public {

    }
}