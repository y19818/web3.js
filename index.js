var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));
//console.log(web3);

var privateKey=new Buffer('5b3e2975592f5fdcf7c38da24e6979689b67dfb3035711b142a465987a19e1b4', 'hex');
console.log("------ private key:\n");
console.log(privateKey.toString('hex'));

var VnscoinTx = require('vnscoinjs-tx');

const txParams = {
  from:"0x888888f00789970f161d48f2c09263da3feb020f",
  gasPrice: '0x32x',
  nonce:'0x14',
  gasLimit: '0x7a1200',
  to: '0xc52b4daebf11b04827ff20d5220fd1587c0ef1eb', 
  value: '10', 
  data: '&#x6BD4;&#x7279;&#x5E01;&#xFF08;Bitcoin&#xFF09;&#x7684;&#x6982;&#x5FF5;&#x6700;&#x521D;&#x7531;&#x4E2D;&#x672C;&#x806A;&#x5728;2008&#x5E74;11&#x6708;1&#x65E5;&#x63D0;&#x51FA;&#xFF0C;&#x5E76;&#x4E8E;2009&#x5E74;1&#x6708;3&#x65E5;&#x6B63;&#x5F0F;&#x8BDE;&#x751F; [1]  &#x3002;&#x6839;&#x636E;&#x4E2D;&#x672C;&#x806A;&#x7684;&#x601D;&#x8DEF;&#x8BBE;&#x8BA1;&#x53D1;&#x5E03;&#x7684;&#x5F00;&#x6E90;&#x8F6F;&#x4EF6;&#x4EE5;&#x53CA;&#x5EFA;&#x6784;&#x5176;&#x4E0A;&#x7684;P2P&#x7F51;&#x7EDC;&#x3002;&#x6BD4;&#x7279;&#x5E01;&#x662F;&#x4E00;&#x79CD;P2P&#x5F62;&#x5F0F;&#x7684;&#x865A;&#x62DF;&#x7684;&#x52A0;&#x5BC6;&#x6570;&#x5B57;&#x8D27;&#x5E01;&#x3002;&#x70B9;&#x5BF9;&#x70B9;&#x7684;&#x4F20;&#x8F93;&#x610F;&#x5473;&#x7740;&#x4E00;&#x4E2A;&#x53BB;&#x4E2D;&#x5FC3;&#x5316;&#x7684;&#x652F;&#x4ED8;&#x7CFB;&#x7EDF;&#x3002;/&#x4E0E;&#x6240;&#x6709;&#x7684;&#x8D27;&#x5E01;&#x4E0D;&#x540C;&#xFF0C;&#x6BD4;&#x7279;&#x5E01;&#x4E0D;&#x4F9D;&#x9760;&#x7279;&#x5B9A;&#x8D27;&#x5E01;&#x673A;&#x6784;&#x53D1;&#x884C;&#xFF0C;&#x5B83;&#x4F9D;&#x636E;&#x7279;&#x5B9A;&#x7B97;&#x6CD5;&#xFF0C;&#x901A;&#x8FC7;&#x5927;&#x91CF;&#x7684;&#x8BA1;&#x7B97;&#x4EA7;&#x751F;&#xFF0C;&#x6BD4;&#x7279;&#x5E01;&#x7ECF;&#x6D4E;&#x4F7F;&#x7528;&#x6574;&#x4E2A;P2P&#x7F51;&#x7EDC;&#x4E2D;&#x4F17;&#x591A;&#x8282;&#x70B9;&#x6784;&#x6210;&#x7684;&#x5206;&#x5E03;&#x5F0F;&#x6570;&#x636E;&#x5E93;&#x6765;&#x786E;&#x8BA4;&#x5E76;&#x8BB0;&#x5F55;&#x6240;&#x6709;&#x7684;&#x4EA4;&#x6613;&#x884C;&#x4E3A;&#xFF0C;&#x5E76;&#x4F7F;&#x7528;&#x5BC6;&#x7801;&#x5B66;&#x7684;&#x8BBE;&#x8BA1;&#x6765;&#x786E;&#x4FDD;&#x8D27;&#x5E01;&#x6D41;&#x901A;&#x5404;&#x4E2A;&#x73AF;&#x8282;&#x5B89;&#x5168;&#x6027;&#x3002;P2P&#x7684;&#x53BB;&#x4E2D;&#x5FC3;&#x5316;&#x7279;&#x6027;&#x4E0E;&#x7B97;&#x6CD5;&#x672C;&#x8EAB;&#x53EF;&#x4EE5;&#x786E;&#x4FDD;&#x65E0;&#x6CD5;&#x901A;&#x8FC7;&#x5927;&#x91CF;&#x5236;&#x9020;&#x6BD4;&#x7279;&#x5E01;&#x6765;&#x4EBA;&#x4E3A;&#x64CD;&#x63A7;&#x5E01;&#x503C;&#x3002;&#x57FA;&#x4E8E;&#x5BC6;&#x7801;&#x5B66;&#x7684;&#x8BBE;&#x8BA1;&#x53EF;&#x4EE5;&#x4F7F;&#x6BD4;&#x7279;&#x5E01;&#x53EA;&#x80FD;&#x88AB;&#x771F;&#x5B9E;&#x7684;&#x62E5;&#x6709;&#x8005;&#x8F6C;&#x79FB;&#x6216;&#x652F;&#x4ED8;&#x3002;&#x8FD9;&#x540C;&#x6837;&#x786E;&#x4FDD;&#x4E86;&#x8D27;&#x5E01;&#x6240;&#x6709;&#x6743;&#x4E0E;&#x6D41;&#x901A;&#x4EA4;&#x6613;&#x7684;&#x533F;&#x540D;&#x6027;&#x3002;&#x6BD4;&#x7279;&#x5E01;&#x4E0E;&#x5176;&#x4ED6;&#x865A;&#x62DF;&#x8D27;&#x5E01;&#x6700;&#x5927;&#x7684;&#x4E0D;&#x540C;&#xFF0C;&#x662F;&#x5176;&#x603B;&#x6570;&#x91CF;&#x975E;&#x5E38;&#x6709;&#x9650;&#xFF0C;&#x5177;&#x6709;&#x6781;&#x5F3A;&#x7684;&#x7A00;&#x7F3A;&#x6027;&#x3002;/2017&#x5E74;12&#x6708;17&#x65E5;&#xFF0C;&#x6BD4;&#x7279;&#x5E01;&#x8FBE;&#x5230;&#x5386;&#x53F2;&#x6700;&#x9AD8;&#x4EF7;19850&#x7F8E;&#x5143;&#x3002;',
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
