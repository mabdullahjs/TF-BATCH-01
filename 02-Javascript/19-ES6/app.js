

// // try {
// //     aler('hello world')

// // } catch (error) {
// //     console.error(error);
// // }
// // console.log('hello world');



// // fetch('https://jsonplaceholder.typicode.com/todos')
// //     .then(response => response.json())
// //     .then(json => console.log(json))
// //     .catch((err)=>{
// //         console.log(err);
// //     })



// // axios('https://jsonplaceholder.typicode.com/todos')
// // .then((res)=>{
// //     console.log(res.data);
// // })
// // .catch((err)=>{
// //     console.log(err);
// // })


// const div = document.querySelector('div');
// async function renderApiData() {
//     try {
//         const res = await axios('https://jsonplaceholder.typicode.com/users')
//         console.log(res.data);
//         res.data.map((item, index) => {
//             div.innerHTML += `
//             <h1>${item.name}</h1>
//             <button id="btn">show Index</button> <hr/>
//             `
//         })
//         const btn = document.querySelectorAll('#btn');
//         btn.forEach((item , index)=>{
//             // console.log(item);
//             item.addEventListener('click' , ()=>{
//                 console.log(res.data[index]);
//             })
//         })

//         // console.log(btn);

//     } catch (error) {
//         console.log(error);
//     }
// }
// renderApiData()


























// var
// redeclare true
// reassign true

// let
// redeclare false
// reassign true

// const
// redeclare false
// reassign false

// var city = 'karachi';
// city = 'lahore';
// var city = 'islamabad';


// let city;
// city = 'lahore';
// let city = 'islamabad';

// const city;
// city = 'lahore';
// let city = 'islamabad';




//ternary operators

// let bankBalance = 20000;
// if (bankBalance > 400000) {
//     console.log('shaadi mubarak');
// } else if (bankBalance > 100000) {
//     console.log('acha dekhta hain!');
// }
// else {
//     console.log('istekhara ma naa aya ha ammi zehr kha laingi.');
// }
// bankBalance > 400000 ? console.log('shaadi Mubarak') : bankBalance > 100000 ? console.log('dekhta hain'): console.log('warr gaya');





// spread operators

// const arr = [1, 2, 4, 5, 6];
// const arr2 = [ 9, 10, 11 , ...arr]
// console.log(arr2);




//rest operator

// const sumOfVal = (...num) => {
//     console.log(num);
//     let sum = num.reduce((acc, currentVal) => {
//         return acc + currentVal
//     }, 0)

//     return sum

// }

// console.log(sumOfVal(1, 2, 3, 4, 5));






// object destructuring

// let obj = {
//     name: 'abdullah',
//     email: 'mabdullah2037@gmail.com',
//     age: 20
// }


// let { name: n, email, age } = obj;
// console.log(n);






// array destructuring
// let num = [1, 2, 3, 4, 5, 6, 7];

// let [a, b, c, , , , d] = num;


// console.log(d);




//lexical scope and closures

// function hellos() {
//     let city = 'karachi';
//     function hello2() {
//         console.log(city);
//     }
//     return hello2
// }

// hellos()()






// ecommerce
//weather
//stop watch



// let div = document.querySelector('div');
// let a = 0

// setInterval(() => {
//     a += 1
//     div.innerHTML = a
// }, 1000);












