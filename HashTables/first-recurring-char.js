/*
  Given an array = [2,5,1,2,3,5,1,2,4];
  It should return 2;

  Given an array = [2,1,1,2,3,5];
  It should return 1

  Given an array= [2,3,4,5];
  It should return undefined

*/

// find the first recurring character; 
// input should be an array of Integer; 

// store an hash table to compare the element of the given input array

// 1. create a hash table first

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key){
    let hash;
    for(let i = 0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(value){
    const address =  this._hash(value);
    if(!this.data[address]){
      this.data[address] = [];
    }
    this.data[address].push(value);
  }

  lookUp(value) {
    const address = this._hash(value);
    if(this.data[address]){
      for(let i = 0; i< this.data[address].length; i++){
        if(this.data[address][i] === value ) return true
      }
    }
    return false
  }
}

// once create hashTable, then create a compare function
function findRecurringChar(arr){
  const hashTable = new HashTable(arr.length);
  for(let i = 0; i < arr.length; i++){
    // console.log('hash table?',hashTable);
    if(hashTable.lookUp(arr[i])){
      // console.log('found!!!', arr[i]);
      return arr[i];
    }
    hashTable.set(arr[i]);
  }
  return undefined;
}

console.log(findRecurringChar([2,3,4,5]));

function findRecurringChar2(arr) {
  let map = {};
  for(let i = 0; i < arr.length; i++){
    if(map[arr[i]]){
      return arr[i];
    }
    map[arr[i]] = i
  }
  return undefined;
} // time complexity O(n) but space complexity O(n)

console.log(findRecurringChar2([2,5,1,2,3,5,1,2,4]));

function findRecurringChar3(arr) {
  for (let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      
    }
  }
} // time complexity O(n) but space complexity O(n)
