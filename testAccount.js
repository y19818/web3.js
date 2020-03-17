const Web3 = require("web3");
var Accounts = require('web3-eth-accounts');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));

a = web3.eth.accounts.create();
console.log(a.address)
