// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract FavouriteNumber{
    uint public myFavouriteNumber;

    constructor(uint _number){
        myFavouriteNumber= _number;
    }

    function setMyFavouriteNumber(uint _number) external{
        myFavouriteNumber= _number;
    }
}