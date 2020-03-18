const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const sortedArray = array;
  let counter = 1;
  while(counter < array.length){
    for(let i = 0; i < array.length - counter; i++){
      // compare two elements and swapping them
      if(sortedArray[i] > sortedArray[i+1]){
        let temp = sortedArray[i];
        sortedArray[i] = sortedArray[i+1];
        sortedArray[i+1] = temp;
      }
      console.log('first for loop',sortedArray);
    }
    counter++;
  }
  return sortedArray;
}

bubbleSort(numbers);
console.log(numbers);


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
}

bubbleSort(numbers);
console.log(numbers);