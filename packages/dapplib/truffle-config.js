require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad good prison sure segment'; 
let testAccounts = [
"0x0c129825b2ceb349c944b6681e81e0468caed91d72538dda578a42439d912b38",
"0xfbc0e4db59f256f9b3397f5136ff4db7ce9b9681ca8f6ed935087d8d06e0674c",
"0xf24f3f037ddf0fe7b220440674cc64e08feb5d71ac7c116de28cbb3efacb8189",
"0xd7f57331296c637a6107a246ce5386140fdd39fd9a44ddd42522a82dbba3c15f",
"0xf4d64b6081e928979270d0e5819e7774e64da69aeb27a7f3a6b3200fa38abdad",
"0x6ebeaf46930dff12bc9ef927d1b917011b4530cede17e8e46efce3a465e3819c",
"0xb752bf23b87bc2cfcf70e8193ebefc3b0a218a21200fbadd3cad4ee9a955607c",
"0x91789152fe43f3b023a36ebe388639e95fa381a61139e680d03c97151a8f9321",
"0xbca5b5fafc88497b9375e9113f9ec7e907ea2566855bd516f33c23dc2ef67e1e",
"0xc780c83b42aadae49d7f1d18dba6627f234ff8df3f636fa045adc648f0bdf285"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
