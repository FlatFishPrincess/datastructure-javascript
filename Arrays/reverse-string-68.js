// create a function that reverses a string
// 'Hi my name is Andrei ' shoud be
// 'ierdnA si eman 

// input? empyu
function reverse(str){
  const trimedStr = str.trim();
  if(!str || trimedStr.length <2 || typeof str !== 'string') return;
  const strArr = trimedStr.split("");
  let reversedStr = "";
  for(let i = 1; i <= strArr.length; i++){
    reversedStr += strArr[strArr.length - i];
  }
  return reversedStr;
}

// another method
const revers2 = str => [...str].reverse().join('');

// console.log(reverse('Jiweon Park'));

// const string =  "Jiweon Park";
const string = reverse("Jiweon Park");
console.log(string);