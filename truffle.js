var HDWalletProvider = require('truffle-hdwallet-provider')

// Be sure to match this mnemonic with that in Ganache!
var mnemonic =
  'doll source together survey box meat assist green sand conduct ostrich ginger'

module.exports = {
  networks: {
    development: {
      provider: function () {
        return new HDWalletProvider(mnemonic, 'http://127.0.0.1:8545/', 0, 50)
      },
      network_id: '*',
      gas: 9999999
    }
  },
  compilers: {
    solc: {
      version: '^0.4.25'
    }
  }
}
