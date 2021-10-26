// const dynamicData = "username";
const data = {
    name : 'Peter',
    age : 30,
    department : 'Sales',

}

const newData = {};

Object.entries(data).forEach(item => {
    console.log(item);
    let key = item[0];
    let value = item[1];
    newData[value] = key;

})

console.log(newData)