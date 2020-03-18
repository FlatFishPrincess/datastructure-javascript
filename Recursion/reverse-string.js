//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let reversedStr = "";
  for(let i = str.length -1; i >= 0; i--){
    reversedStr += str[i];
  }
  return reversedStr;
}

function reverseString2(str) {
  return reverseRecurse(str, str.length-1);
}

function reverseRecurse(str, length){
  console.log(str[length], length);
  if(length === 0) { return str[length] }
  return str[length] + reverseRecurse(str, length-1);
}

console.log(reverseString('yoyo mastery'));
console.log(reverseString2('yoyo mastery'));
//should return: 'yretsam oyoy'


function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {
    
    if(array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

reverseString('yoyo master');

function reverseStringRecursive (str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

reverseStringRecursive('yoyo master');