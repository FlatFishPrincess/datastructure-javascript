// mergeSortedArrays([0,3,4,31], [4,6,31]);

// data type first in array, input value not passed
// no nestedArray, duplcate number

// 1. flatten array 
// 2. comparefunction()
// 4, 3, 0, 31, 4, 6,31
// 0, 3, 4, 4, 31, 6,31
// 0, 3, 4, 4, 6, 31 ,31

function mergeSortedArrays(arr1, arr2) {
  let mergedArray =  [...arr1, ...arr2];
  for(let i = 0; i<mergedArray.length; i++){
    let smallest = mergedArray[i];
    for(let j = i+1; j<mergedArray.length; j++){
      if(smallest > mergedArray[j]){
        mergedArray[i] = mergedArray[j];
        mergedArray[j] =  smallest;
        smallest = mergedArray[i];
      }
    }
  }
  return mergedArray;
}

function mergeSortedArrays2(arr1, arr2) {
  let array1Item =  arr1[0];
  let array2Item = arr2[0];
  let array1Index = 1;
  let array2Index = 1;
  let mergedArray = [];

  while(array1Item || array2Item){
    if(!array2Item || array1Item < array2Item){
      mergedArray.push(array1Item);
      array1Item = arr1[array1Index];
      array1Index++;
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[array2Index];
      array2Index++;
    }
  }
  return mergedArray;
}


console.log(mergeSortedArrays2([0,3,4,31], [4,6,31]));