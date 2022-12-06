require('@nomiclabs/hardhat-waffle');

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */
export const solidity = "0.8.17";
export const networks = {
  goerli: {
    url: process.env.STAGING_QUICKNODE_KEY,
    accounts: [process.env.PRIVATE_KEY],
  },
  mainnet: {
    url: process.env.PROD_QUICKNODE_KEY,
    accounts: [process.env.PRIVATE_KEY],
  },
};
