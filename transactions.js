var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));
var VnscoinTx = require('vnscoinjs-tx');
console.log(web3.vns.getBlock(3543723).transactions)
console.log(web3.vns.getTransaction('0x72a7b0b9f2e83742a136fe28d25e5e4665dd79fd82402572ab0836b3bc81161b'));
var b = web3.vns.getTransaction('0x72a7b0b9f2e83742a136fe28d25e5e4665dd79fd82402572ab0836b3bc81161b');
var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'ywx980108',
    port: '3306',
    database: 'VNSCOIN'
});

connection.connect();
var  addSql = 'INSERT INTO transactions(blockHash,blockNumber,`from`,gas,gasPrice,hash,input,nonce,`to`,transactionIndex,value,v,r,s) ' +
    'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
var  addSqlParams = [b.blockHash,
    b.blockNumber,b.from,b.gas,b.gasPrice.c[0]/10**4,b.hash,b.input,b.nonce,b.to,b.transactionIndex,b.value.c[0]/10**4,b.v,b.r,b.s];
//增
connection.query(addSql,addSqlParams,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});
connection.end();
