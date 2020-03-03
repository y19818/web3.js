var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));
//console.log(web3);
var sum = 0;

var VnscoinTx = require('vnscoinjs-tx');
//var tx = web3.vns.getTransaction('0xd377c1bcafc24b97f76d7392ed876de6fef169b1a98bed19c9cc4fc31d0f0995');
//console.log(tx.value.c[0]/10**4);
var c = web3.vns;
for (var i=165361;i<167775;i++)
{
    var a = c.getBlock(i);
    for(var p=0;p<=a.transactions.length;p++){
        // web3.vns.getTransaction(x);
        if (a.transactions[p]!=undefined){
            var b =web3.vns.getTransaction(a.transactions[p]);
            if (b.from==0x8772749199d59D5760757E74E99C592DeA2a5297){
                console.log(a.transactions[p]);
                console.log('from:'+b.from);
                console.log('to:'+b.to);
                sum = sum -b.value.c[0]/10**4;
                console.log(sum)

            }
            if (b.to==0x8772749199d59D5760757E74E99C592DeA2a5297){
                console.log(a.transactions[p]);
                console.log('from:'+b.from);
                console.log('to:'+b.to);
                sum = sum +b.value.c[0]/10**4;
                console.log(sum)


            }

        }
    }
    if (i%1 == 0){
        console.log(i)
    }
    //console.log(i)
}
console.log(sum);

//console.log(tx);