// let nums = [11, 12, 13, 14];
// let minus10 = [];
// for(let i = 0; i < nums.length; i++) {
//     minus10[i] = nums[i] - 10;
    
//  }

//  console.log(minus10);
//  const result = nums.map(num => num -10);
//  console.log(result);



const data = [
    {id: 1, name: 'Saad'},
    {id: 2, name: 'Farid'},
    {id: 3, name: 'John'},
    {id: 4, name: 'Doe'},
];

const updateById = (id, string) => {
    const result = data.map(user => {
        if(user.id === id) {
            return {
                ...user,
                name : user.name + " " + string
            }
        }
        return user;
    })
    return result;
}

console.log(updateById(3, "Bright Coding"));


let nums = [11, 12, 13, 14]; 
let cats = nums.map ( ( ) => 'cats');

console.log(cats);

const updateVegetablesCollection = (veggies, veggie) => {

}


