//settimeout
//setinterval
//events
//asynchoronous synchronous







// setTimeout(function (){
//     console.log('console from settimeout!');
// } , 2000);


// const interval = setInterval(function (){
//     console.log('console from setinterval!');
// } , 1000);

// function stopIntervals(){
//     clearInterval(interval);
//     return 10
// }


// const btn = document.querySelector('#btn');


// btn.addEventListener('mouseout', () => {
//     console.log('btn clicked');
// })

// const form = document.querySelector('form');
// const input = document.querySelector('input');

// form.addEventListener('submit' , (event)=>{
//     event.preventDefault()
//     console.log(input.value);
// })















// console.log('1');
// console.log('2');
// console.log('3');
// setTimeout(()=>{
//     console.log('4');
// } , 0);
// console.log('5');



// let datafromusa = data ki request
// console.log(data);



//async

// setInterval
// settimeout
// promises
// async await
// fetch
// axios




// let bankBalance = 100000
// const shaadiScnz = new Promise((resolve, reject) => {
//     if (bankBalance > 200000) {
//         resolve('shaadi mubarak!');
//     } else {
//         reject('ammi zehr khalaingi!');
//     }
// })

// shaadiScnz.then((res) => {
//     console.log('then chal rha ha',res);
// }).catch((err) => {
//     console.log('catch chala ha' , err);
// })














//API
// application programming interface



// axios('https://jsonplaceholder.typicode.com/userss')
// .then((res)=>{
//     console.log(res.data);
// }).catch((err)=>{
//     console.log('error===>' , err);
// })

// console.log();







//weather app


// `https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=london&aqi=no`


// let city = prompt('enter city');
// axios(`https://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${'lahore'}&aqi=no`)
// .then((res)=>{
//     // console.log(res.data.current.condition.icon);
//     console.log(res.data);

// })
// .catch((err)=>{
//     console.log(err);
// })



















