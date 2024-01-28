const num = 9.9;

// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));



// console.log(Math.floor(Math.random()*2));
// function toss(coin){
//     let randomNumber = Math.floor(Math.random()*2)
//     if(randomNumber === 0 && coin === 'chand'){
//         console.log('you won the toss');
//     }
//     else if(randomNumber === 1 && coin === 'masjid'){
//         console.log('you won the toss');
//     }
//     else{
//         console.log('you loss the toss');
//     }
//     // console.log('userChoice' , coin);
// }


const body = document.querySelector('body');
const div = document.querySelector('div');
const color = ['red' , 'green' , 'blue' , 'orange' , 'purple' , 'pink' , 'yellow' , 'aqua']

for (let i = 0; i < color.length; i++) {
    div.innerHTML += `<button style="margin: 10px;" onclick="changeColor(${i})">${color[i]}</button>`
}

function changeColor (i){
    console.log(color[i]);
    body.style.backgroundColor = color[i]
}