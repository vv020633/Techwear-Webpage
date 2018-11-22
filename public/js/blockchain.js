const SHA256 - require('crypt-js/sha256');

class Block{
  constructor(index, timestamp, data, previousHash = ''){
    this.index = index;
    this.timestamp = timestap;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }
  calculateHash(){
    return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
  }
}

class Blockchain{
  constructor(){
    this.chain = [this.createGenesisBlock()];
  }
  createGenesisBlock(){
    return new Block(0, "3/11/2018", "Genesis Block", "0");
  }
  getLatestBlock(){
    return this.chain[this.chain.length - 1];
  }

  addBlock(){
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }
}

let dopeCoin = new Blockchain();
dopeBlock.addBlock(new Block(1,"4/11/2018", {amount:4}));
dopeBlock.addBlock(new Block(2,"4/11/2018", {amount:6}));

console.log(JSON.stringify(dopeCoin, null, 4));
