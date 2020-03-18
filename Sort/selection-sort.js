const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
 
  let counter = 0;
  while(counter < array.length){
    let lowestNumber = array[counter];
    let lowestIndex = counter;
    for(let i = counter; i < array.length; i++){
      if(lowestNumber > array[i]){
        lowestNumber = array[i];
        lowestIndex = i;
      }
    }
    // swapping the lowest number from array
    let temp = array[counter];
    array[counter] = lowestNumber;
    array[lowestIndex] = temp;
    counter++;
  }
  console.log(array);
  return array;
}

selectionSort(numbers);


const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for(let i = 0; i < length; i++){
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for(let j = i+1; j < length; j++){
      if (array[j] < array[min]){
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSort(numbers);
console.log(numbers);