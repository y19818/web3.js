var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));
//console.log(web3);

var privateKey=new Buffer('f2ce19c88ef20d398747c7f06bfb2505673666a52c9478b29f648987574bc03f', 'hex');
console.log("------ private key:\n");
console.log(privateKey.toString('hex'));

var VnscoinTx = require('vnscoinjs-tx');
function reward(f,n,t) {
    var txParams = {
        from:f,
        gasPrice: '0x32x',
        nonce:n,
        gasLimit: '0x7a1200',
        to: t,
        value: '10',
        data: '',
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
    
}


reward('0x0921b564909B66F909B582880D4C0eeaFA28e372','0x5','0x0921b564909B66F909B582880D4C0eeaFA28e372')