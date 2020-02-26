class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  // we consider it as O(1) as it is really fast
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    } 
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if(currentBucket) {
      for(let i = 0; i< currentBucket.length; i++){
        if(currentBucket[i][0] === key) return currentBucket[i];
      }
    }
    return undefined
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]) {
        console.log('data?',this.data[i][0][0]);
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }

  values() {
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        console.log('value?', this.data[i][0][1]);
        valuesArray.push(this.data[i][0][1]);
      }
    }
    return valuesArray;
  }
}

const myHashTable = new HashTable(50);
// console.log(myHashTable._hash('???'));
myHashTable.set('grapes', 5);
myHashTable.set('grapes', 10);
myHashTable.set('apples', 4);
myHashTable.set('test', 2);
// myHashTable.get('grapes');
// console.log(myHashTable.get('grapes'));
console.log(myHashTable.keys());
console.log(myHashTable.values());