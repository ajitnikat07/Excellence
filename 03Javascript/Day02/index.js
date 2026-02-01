//declare the variables
let num=10;
console.log(num);

//declaration of (string)
let string="Hello world";
console.log(string);

//declaration of (boolean)
let boolean=true;
console.log(typeof boolean);

//declaration of the string
let str="rohit";
console.log(str);
console.log(str.length);

//undefined 
let account;
console.log(account);

//null(datatype)
let data=null;
console.log(data);
console.log(typeof data);    //it shows object because of legacy reasons

//big_int
let a=4345452452454654542154654115n;
console.log(a);

//declaration of sentence
let comment = "hello dosto kaise ho aaj ka topic hai blockchain";
console.log(comment);

let statement=false;
console.log(statement);
console.log(typeof statement);

//Floating point number is stored in the (mantisa and exponent) part in the RAM

// ArogyaChain: Health Records Management Using Blockchain
// Introduction
// ArogyaChain is a blockchain-based solution aimed at revolutionizing the management of Electronic Health Records (EHR). The goal of this project is to implement secure, decentralized, and scalable storage of medical records by leveraging blockchain technology. The system ensures privacy and provides granular access controls, addressing the scalability challenges by storing records off-chain.

// The key benefits of ArogyaChain include:
// Security: Utilizes blockchain for immutable and tamper-proof health records.
// Scalability: Incorporates off-chain storage for handling large medical data.
// Access Control: Granular permissions ensure only authorized users can access specific health records.

// Features:
// Decentralized Ledger: All transactions (medical records) are recorded on the blockchain, ensuring transparency and integrity.
// Off-Chain Storage: Large health records are stored off-chain using IPFS, while hashes of the data are maintained on the blockchain for verification.
// Access Control via Smart Contracts: Patients, doctors, and hospitals are given specific permissions to access or update health records using smart contracts.
// Auditability: Provides complete logs of who accessed or modified a record, ensuring accountability.
// Tech Stack
// Frontend: HTML, CSS, JavaScript (for interacting with the blockchain)
// Blockchain: Ethereum
// Smart Contracts: Solidity
// Development Framework: Truffle
// Blockchain Simulator: Ganache
// Off-chain Storage: IPFS
// Wallet: Metamask
// Backend: Node.js