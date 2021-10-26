
const userData = {
    name: 'john',
    email : 'john@example.com',
    zip : 15478862,
    address : {
        city: 'San Francisco',
        // phone : 0622114455,
        mikou : {
            username : 'mikou',
            active : true,
            devloper : {
                frontend : 'Reactjs',
                backend : 'Nodejs'
            }
        }
    },
    
}

const {name, email, zip, address : {city, mikou : {username, active, devloper : {frontend, backend} }}} = userData;

console.log(backend)

