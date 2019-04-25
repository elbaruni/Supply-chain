require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {

  networks: {


    rinkeby: {
      provider: function () {

        return new HDWalletProvider(process.env.MNEMONIC, `https://rinkeby.infura.io/v3/2a3ef5517fce4991b5d2c4cf004ff40d`)
      },
      gasPrice: 25000000000,
      netword_id: 4

    },
    development: {
      host: "127.0.0.1",
      port: "7545",
      gas: 4600000,
      network_id: "*"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }



}
