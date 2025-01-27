/**
@type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: {
     version: "0.8.0",  // Set this to the Solidity version you need
     settings: {
       optimizer: {
         enabled: true,
         runs: 200
       }
     }
   },
   networks: {
     holesky: {
       url: 'https://eth-holesky.g.alchemy.com/v2/SsP0b1sNwktRyTmnzr6i0UblHFDRco6o',
       accounts: [`0x${PRIVATE_KEY}`]
     }
   }
 };