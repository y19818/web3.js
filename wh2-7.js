var Web3 = require("web3");
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8585"));
//console.log(web3);

var privateKey=new Buffer('f2ce19c88ef20d398747c7f06bfb2505673666a52c9478b29f648987574bc03f', 'hex');
console.log("------ private key:\n");
console.log(privateKey.toString('hex'));

var VnscoinTx = require('vnscoinjs-tx');

const txParams = {
  from:"0x0921b564909B66F909B582880D4C0eeaFA28e372",
  gasPrice: '0x32x',
  nonce:'0x0',
  gasLimit: '0x7a1200',
  to: '0x0921b564909B66F909B582880D4C0eeaFA28e372', 
  value: '10', 
  data: '&#x674E;&#x6587;&#x4EAE;&#xFF08;1986-2020&#xFF09;&#xFF0C;&#x7537;&#xFF0C;&#x8FBD;&#x5B81;&#x7701;&#x9526;&#x5DDE;&#x5E02;&#x4EBA; \ &#x6B66;&#x6C49;&#x5927;&#x5B66;&#x4E34;&#x5E8A;&#x533B;&#x5B66;&#x4E13;&#x4E1A;&#x6BD5;&#x4E1A;&#xFF0C;&#x6B66;&#x6C49;&#x5E02;&#x4E2D;&#x5FC3;&#x533B;&#x9662;&#x773C;&#x79D1;&#x533B;&#x751F; \ &#x674E;&#x6587;&#x4EAE;&#x6700;&#x65E9;&#x4E8E;2019&#x5E74;12&#x6708;30&#x65E5;&#x5411;&#x5916;&#x754C;&#x53D1;&#x51FA;\ &#x65B0;&#x578B;&#x51A0;&#x72B6;&#x75C5;&#x6BD2;&#xFF08;2019-nCov&#xFF09;&#x9632;&#x62A4;&#x9884;&#x8B66;&#xFF0C;&#x662F;&#x75AB;&#x60C5;&#x201C;&#x5439;&#x54E8;&#x4EBA;&#x201D;\ &#x540C;&#x65F6;&#x4E5F;&#x662F;&#x88AB;&#x516C;&#x5B89;&#x673A;&#x5173;&#x4EE5;&#x9020;&#x8C23;&#x4E4B;&#x7531;&#x8BAD;&#x8BEB;&#x7684;&#x201C;&#x6B66;&#x6C49;&#x516B;&#x541B;&#x5B50;&#x201D;&#x4E4B;&#x4E00;\ 2020&#x5E74;2&#x6708;7&#x65E5;&#x51CC;&#x6668;  \ &#x674E;&#x6587;&#x4EAE;&#x533B;&#x751F;&#x56E0;&#x611F;&#x67D3;&#x65B0;&#x578B;&#x51A0;&#x72B6;&#x75C5;&#x6BD2;&#xFF0C;&#x75C5;&#x91CD;&#x7ECF;&#x62A2;&#x6551;&#x65E0;&#x6548;&#x53BB;&#x4E16;&#xFF0C;&#x4EAB;&#x5E74;34&#x5C81;  \ &#x622A;&#x81F3;2020&#x5E74;2&#x6708;7&#x65E5;9&#x70B9;49&#x5206; \ &#x5168;&#x56FD;&#x65B0;&#x578B;&#x51A0;&#x72B6;&#x75C5;&#x6BD2;&#x611F;&#x67D3;&#x8005;  \ &#x786E;&#x8BCA;31211&#x4EBA;&#xFF0C;&#x7591;&#x4F3C;26359&#x4EBA;&#xFF0C;&#x6B7B;&#x4EA1;637&#x4EBA;  \ &#x4E3A;&#x4F17;&#x4EBA;&#x62B1;&#x85AA;&#x8005;&#xFF0C;&#x4E0D;&#x53EF;&#x4F7F;&#x5176;&#x51BB;&#x6BD9;&#x4E8E;&#x98CE;&#x96EA;\ &#x4E3A;&#x81EA;&#x7531;&#x5F00;&#x9053;&#x8005;&#xFF0C;&#x4E0D;&#x53EF;&#x4EE4;&#x5176;&#x56F0;&#x5384;&#x4E8E;&#x8346;&#x68D8;\ &#x8BAD;&#x8BEB;&#x90E8;&#x5206;&#x5185;&#x5BB9;&#x5982;&#x4E0B;&#xFF1A;\ &#x201C;&#x6211;&#x4EEC;&#x5E0C;&#x671B;&#x4F60;&#x51B7;&#x9759;&#x4E0B;&#x6765;&#x597D;&#x597D;&#x53CD;&#x601D;&#xFF0C;&#x5E76;&#x90D1;&#x91CD;&#x544A;&#x8BEB;&#x4F60;&#xFF1A;\ &#x5982;&#x679C;&#x4F60;&#x56FA;&#x6267;&#x5DF1;&#x89C1;&#xFF0C;&#x4E0D;&#x601D;&#x6094;&#x6539;&#xFF0C;&#x7EE7;&#x7EED;&#x8FDB;&#x884C;&#x8FDD;&#x6CD5;&#x6D3B;&#x52A8;&#xFF0C; \ &#x4F60;&#x5C06;&#x4F1A;&#x53D7;&#x5230;&#x6CD5;&#x5F8B;&#x7684;&#x5236;&#x88C1;&#xFF01;&#x4F60;&#x542C;&#x660E;&#x767D;&#x4E86;&#x5417;&#xFF1F;&#x201D;\ &#x5F7C;&#x65F6;&#x4E4B;&#x8A00;&#xFF0C;&#x6070;&#x662F;&#x674E;&#x6587;&#x4EAE;&#x533B;&#x751F;&#x7528;&#x751F;&#x547D;&#x7684;&#x4EE3;&#x4EF7;&#x5BF9;&#x5728;&#x4F4D;&#x4E4B;&#x4EBA;&#x3001;&#x5BF9;&#x6574;&#x4E2A;&#x793E;&#x4F1A;&#x7684;&#x8BAD;&#x8BEB; \ &#x79E6;&#x4EBA;&#x4E0D;&#x6687;&#x81EA;&#x54C0;&#xFF0C;&#x800C;&#x540E;&#x4EBA;&#x54C0;&#x4E4B; \ &#x540E;&#x4EBA;&#x54C0;&#x4E4B;&#x800C;&#x4E0D;&#x9274;&#x4E4B;&#xFF0C;&#x4EA6;&#x4F7F;&#x540E;&#x4EBA;&#x800C;&#x590D;&#x54C0;&#x540E;&#x4EBA;&#x4E5F;  \ &#x6FB3;&#x6D32;&#x534E;&#x4EBA;&#x94ED;&#x8BB0;&#x674E;&#x6587;&#x4EAE;&#x533B;&#x751F;\ 2020 &#x5E74; 2 &#x6708; 7 &#x65E5;',
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

