require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks:{
    sepolia:{
      url: process.env.ALCHEMY_URL,
      accounts:[process.env.ACCOUNT_KEY]
    }
  }
};
