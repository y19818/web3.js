var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:18585"));
//console.log(web3);

var keyth=require('keyvnscoin');
var keyobj=keyth.importFromFile('0x028a7d95d7b4ab73c9c8a3b527e4a6fff2c2ba16','/data/VNS/zxy/vns_data/');
var privateKey=keyth.recover('111111',keyobj);
console.log("------ private key:\n");
console.log(privateKey.toString('hex'));

var VnscoinTx = require('vnscoinjs-tx');

const txParams = {
  from:"0x028a7d95d7b4ab73c9c8a3b527e4a6fff2c2ba16",
  nonce: '0x1',
  gasPrice: '0x4a817c888', 
  gasLimit: '0x7a1200',
  gas:"0x7a1200",
  to: '0x028a7d95d7b4ab73c9c8a3b527e4a6fff2c2ba16', 
  value: '1000', 
  data: '',
  stake:'0x1',
  chainId: 2018
}

const tx = new VnscoinTx(txParams)
tx.sign(privateKey)
const serializedTx = tx.serialize()

console.log("serialized tx:\n");
console.log('0x' + serializedTx.toString('hex'));

web3.vns.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
    if(!err) {
        console.log(hash);
    }
    else {
        console.log(err);
    }
});
