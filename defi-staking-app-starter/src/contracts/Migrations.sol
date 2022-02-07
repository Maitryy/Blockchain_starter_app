pragma solidity >0.5.0;

contract Migrations {
    address public owner;
    uint public last_completed_migration; 

    constructor() public {
        owner = msg.sender;
        // last_completed_migration = 
    }

    modifier restricted() {
        if(msg.sender == owner)
        _; // to continue to func in which modifier was called
    }

    function setCompleted (uint completed) public restricted {
        last_completed_migration = completed;
    }

    function upgrade(address new_address ) public restricted {
        Migrations upgraded = Migrations(new_address);
        upgraded.setCompleted(last_completed_migration);
    }

}