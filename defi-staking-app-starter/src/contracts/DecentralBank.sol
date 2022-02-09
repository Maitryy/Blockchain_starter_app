pragma solidity >0.5.0;
import './RWD.sol';
import './Tether.sol';

contract DecentralBank {
    string public name = "Decentral Bank" ;
    address public owner;
    Tether public tether;
    RWD public rwd;

    address[] public stakers;

    mapping(address => uint) public stakingBalance;
    mapping(address => bool) public hasStaked;
    mapping(address => bool) public isStaking;

    constructor(RWD _rwd, Tether _tether) public {
        rwd = _rwd;
        tether = _tether;
    }

    function depositTokens(uint _amount) public {
        // tranfer tether to this contract address
        require(_amount > 0,'amount should be greater than 0');
        tether.transferFrom(msg.sender,address(this),_amount); 
        stakingBalance[msg.sender] +=_amount;

        if(!hasStaked[msg.sender])
            stakers.push(msg.sender); 

        isStaking[msg.sender]=true;
        hasStaked[msg.sender]=true;

    }
}



