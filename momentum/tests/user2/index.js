// const store = (food = 'something') =>{
//     console.log( `I'm going to buy ${food} from the sari-sari store`)
// }

// store();



// import { myAdd } from "./data.js";
// var result = myAdd(1,2);

// console.log(result);


// class Player {
//     constructor (name, country){
//         this.name = name;
//         this.country = country;
//     }

//     homeCountry(){
//         console.log(`${this.name} was born in ${this.country}`);
//     }
// }

// class BasketballPlayer extends Player {
//     constructor(name,country,age){1
//     super(name,country);
//     this.age = age;
//     }

//     showAge(){
//         console.log(`${this.name} is ${this.age} years old and knows how to play basketball`);
//     }
// }

// let playerOne = new Player();
// let playerTwo = new BasketballPlayer();

// let example = new Promise((resolve,reject)=>{
//     let sum = 1+1;
//     if (sum=== 2){
//         resolve('success');
//     }else{
//         reject('failed');
//     }
// });

// example.then((message)=>{
//     console.log
// })


// const findUserData = () => {
//     let p = new Promise ((resolve, reject) =>{
//         class userData {
//             constructor(firstName,age,email){
//             this.firstName = firstName;
//             this.age = age;
//             this.email=email;
//         }
        
//         for(property in userData){
//             if(`${property}` != null){
//                 resolve(`${property}` : `${userData[property]}`)
//             }else {
//                 reject("Not found")
//             }
//         }
//     });
// }

// findUserData.then(success) => {
//     console.log("success!");
// }

// findUserData.catch(error);

const urlAPI = 'https://api.chucknorris.io/jokes/random';

async function getJoke(){
    const response = await fetch(urlAPI);
    const data = await response.json();
    console.log (data.value);
}

getJoke();




