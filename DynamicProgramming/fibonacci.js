let calculation = 0;
function fibonacci(n){ //  O(n^2)
  // calculation++;
  if(n < 2) return n;
  return fibonacci(n-1) + fibonacci(n-2);
}

function fibonacciMaster(){ //  O(n)
  let cache = {};
  return function fib(n){
    calculation++;
    if(n in cache){
      return cache[n];
    } else {
      if(n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  }
}

// console.log(fibonacci(6));
// console.log(calculation);
const fasterFib = fibonacciMaster();
console.log('master?', fasterFib(6))
console.log(calculation);