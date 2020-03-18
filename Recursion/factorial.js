// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  //code here
  // if(number <= 1) return number;
  if(number === 2) return number;
  return number * findFactorialRecursive(number -1);
}

function findFactorialIterative(number) {
  //code here
  let count = number;
  let result = 1;
  while(count > 0){
    result = result * count;
    count--;
  }
  return result;
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));