let counter = 0;
function inception(){
  console.log(counter);
  if(counter > 3){
    return 'Done';
  }
  counter++;
  return inception();
}

inception();

// 1. Identify base case
// 2. Identify recursive case
// 3. Get close and closer and return when needed. Usually u have 2 returns