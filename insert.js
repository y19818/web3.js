var mysql  = require('mysql');


var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));
//console.log(web3);
var sum = 0;

var VnscoinTx = require('vnscoinjs-tx');
//var tx = web3.vns.getTransaction('0xd377c1bcafc24b97f76d7392ed876de6fef169b1a98bed19c9cc4fc31d0f0995');
//console.log(tx.value.c[0]/10**4);
var c = web3.vns;
for (var i=3544645;i<=3549678;i++)
{

    var a = c.getBlock(i);
    for(var p=0;p<=a.transactions.length;p++){
        // web3.vns.getTransaction(x);
        if (a.transactions[p]!=undefined){
            var b =web3.vns.getTransaction(a.transactions[p]);
            var connection = mysql.createConnection({
                host     : 'localhost',
                user     : 'root',
                password : 'ywx980108',
                port: '3306',
                database: 'VNSCOIN'
            });

            connection.connect();
            var  addSql = 'INSERT INTO transactions(idtransactions,blockHash,blockNumber,`from`,gas,gasPrice,hash,input,nonce,`to`,transactionIndex,value,v,r,s) ' +
                'VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
            var  addSqlParams = [i,b.blockHash,
                b.blockNumber,b.from,b.gas,b.gasPrice.c[0],b.hash,b.input,b.nonce,b.to,b.transactionIndex,b.value.c[0]/10**4,b.v,b.r,b.s];
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
                if (i%1 == 0){
                    console.log(i)
                }
            });
            connection.end();


        }
    }

    //console.log(i)
}
