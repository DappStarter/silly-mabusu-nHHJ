require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strategy radar mean purpose inside light army gather'; 
let testAccounts = [
"0x5c8baac35ac3c5a6f209ebe2e68b5600ccd47912cd77a49e80193d4681d659c2",
"0x7dad853df7da66b98d5bddde2b3e1d68507c60615a26ec5adc6d8a845f5b2ee8",
"0xa412db6ec0ac0774508e0680c8e17146c86ceed27695caf69d1e9a7c5e6bf521",
"0xe9f0ec47fec572b164cb468728567f76b59d85765aea98d550b9c621303e6c4f",
"0x367d5c70098d9632e5da7d99791eaa190aef5da68872618910b7f79e2b53829c",
"0x7c22de6926a958c4d5d59fe26c65e4ecf014681aa21301de6e4fc90beb82a414",
"0x8546b28b65620bb32f037afdbf7c6d7b915ed3b9b47233935def1b6c5e9a39ef",
"0xf726a029bda62ce3c22b1c66e6e5349cb21da4111e0069ce0dd126f4354ab14e",
"0x254528b6bb5cf97419ab5c0a439204b293e72cb1e602349f5733b89610540ed5",
"0x3a9212afab5fb5e4856a5daab17a8c60c673830144b4403e25eb021861d3e449"
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
            version: '^0.8.0'
        }
    }
};

