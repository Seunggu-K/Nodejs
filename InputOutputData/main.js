const accountStr =
  '{"name": "Jedi","members": ["Yoda", "Obi Wan"],"number": 34512,"location": "A galaxy far, far away"}';

let accountObj = JSON.parse(accountStr);

console.log(accountObj.name);
console.log(accountObj.members);

/*
Result : 
Jedi
[ 'Yoda', 'Obi Wan' ]
*/
