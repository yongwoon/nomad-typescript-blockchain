"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "24tq5w34", "", "hello", 1234567);
let blockchain = [genesisBlock];
console.log(blockchain);
//# sourceMappingURL=index.js.map