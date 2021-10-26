const icons = document.querySelectorAll('.fa-plus');



// const kiki = document.getElementsByClassName('fa-plus');

console.log(icons)
// console.log(Array.from(kiki))


for(const icon of icons) {
    icon.addEventListener('click', function() {
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;

        const currentChoice = this.parentNode.parentNode.childNodes[3];
        console.log(height);
      
        if(this.className.includes("fa-plus")) {
            this.className = "fas fa-minus";
            // gsap.to(currentChoice, {duration: 0.2, height: height + 40, opacity: 1})
            
            
        }
        else if(this.className.includes("fa-minus")) {
            this.className = "fas fa-plus";
            // gsap.to(currentChoice, {duration: 0.2, height: 0, opacity: 1})


          
        }
    })
}

// gsap.to("#logo", {duration: 1, x: 350});


// Toggle sun to moon & vice versa 

const selectSun = document.querySelector('.sun');

selectSun.addEventListener("click", function () {
    console.log(this.src);

    if(this.src.includes("sun")) {
        this.src = "/ressources/moon-solid.svg";
    }
    else if (this.src.includes("moon")){
        this.src = "/ressources/sun-solid.svg";

        
    }
})


// const users = ["marie", "saad", "farid", "jacquier", "marianne", "eli", "marie"];

// const fruits = [1,2,3,4,5];


// if(users.indexOf("marie") !== -1) {
//     users.length = users.indexOf("marie");
//     console.log(users.length)
// }

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop","Samera"];
let myEmployees = ["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia","Anwar"];





console.log(myAdmins[1])
if (myAdmins.indexOf("Stop") !== -1) {
  myAdmins.length = myAdmins.indexOf("Stop");
  console.log(myAdmins)
}

document.write(`<div>We have ${myAdmins.length} admins</div>`);

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<hr>`);
  document.write(`<div>The Admin for team ${i + 1} is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team Members: </h3>`);
  for (let j = 0, n = 1; j < myEmployees.length; j++) {
    if (myEmployees[j][0].toLowerCase() === myAdmins[i][0].toLowerCase()) {
      document.write(`<p>- ${n} ${myEmployees[j]}</p>`);
      n++;
    }
  }
}


const raceWinners = [["saad", "1st"], ["marie", "2nd"], ["farid", "3rd"], ["jacquier", "4th"], ["marianne", "5th"]];

// console.log(raceWinners.length)

// console.log(raceWinners[1][0])


// for(let i = 0 ; raceWinners.length ; i++) {
//         console.log(`La position de ${raceWinners[i][0]} est ${raceWinners[i][1]}! ${raceWinners[i][1] === '1st' ? 'Félicitations' : ''}`)
// }

const groceries =  ["marie", "saad", "farid", "jacquier", "marianne", "eli", "marie"];

function unpackItem (array) {
        for(let i = array.length -1 , j = 1 ; i >=0; i--, j++) {
            console.log((`unpackItem item ${j} is ${array[i]}`))
        }
}


console.log(unpackItem(groceries))