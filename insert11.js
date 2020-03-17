const mysql = require('mysql');


const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));
//console.log(web3);
var sum = 0;
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ywx980108',
    port: '3306',
    database: 'vnscoin'
});

function insert(x) {
    var  addSql = 'INSERT INTO transactions(idtransactions,blockHash,blockNumber,`from`,gas,gasPrice,hash,input,nonce,`to`,transactionIndex,value,v,r,s) ' +
        'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    var  addSqlParams = [x.blockNumber,x.blockHash,
        x.blockNumber,x.from,x.gas,x.gasPrice.c[0],x.hash,x.input,x.nonce,x.to,x.transactionIndex,x.value.c[0]/10**4,x.v,x.r,x.s];
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

}

const VnscoinTx = require('vnscoinjs-tx');
//var tx = web3.vns.getTransaction('0xd377c1bcafc24b97f76d7392ed876de6fef169b1a98bed19c9cc4fc31d0f0995');
//console.log(tx.value.c[0]/10**4);
var c = web3.vns;
connection.connect();
for (var i=3549645;i<=3549678;i++)
{

    var a = c.getBlock(i);
    for(var p=0;p<=a.transactions.length;p++){
        // web3.vns.getTransaction(x);
        if (a.transactions[p]!=undefined){
            var b =web3.vns.getTransaction(a.transactions[p]);
            insert(b);
            console.log(b);

        }
    }

    //console.log(i)
}
connection.end();
