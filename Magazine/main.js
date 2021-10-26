
const users = [
    {
      name: 'Yazeed',
      age: 25
    },
    {
      name: 'Sam',
      age: 30
    },
    {
      name: 'Bill',
      age: 20
    }
  ];



const startsWithB = string => string.toLowerCase().startsWith('y');
;

const namesStartingWithB = [];

for (let i = 0; i < users.length; i++) {
  if (startsWithB(users[i].name)) {
    namesStartingWithB.push(users[i]);
  }
}

console.log(namesStartingWithB);


const filterItem = users.filter(user => startsWithB(user.name));

console.log(filterItem)


const chart = (string) => string.charAt(0).toUpperCase() + string.substring(1,5);

console.log(chart("lorem"))
