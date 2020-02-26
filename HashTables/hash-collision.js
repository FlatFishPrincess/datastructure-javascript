let user = {
  age: 54,
  name: 'kylie',
  magic: true,
  scream: {function() {
    console.log('Ahhhhhhh!');
  }}
}

user.age // O(1)
user.spell = 'abara kadabra';// O(1)
user.scream(); // O(1)

const a = new Map(); // can maintain in order
const b = new Set(); // stores only values