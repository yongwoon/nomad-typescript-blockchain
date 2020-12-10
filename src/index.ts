class Block{
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number,
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(0, "24tq5w34", "", "hello", 1234567)

let blockchain: [Block] = [genesisBlock]

console.log(blockchain)
// export 하므로서 module 로 사용가능하다.
export {};
