// const todo = document.querySelector('#todo');
// const ul = document.querySelector('ul');

// // let names = 'abdullah'
// // console.log(`my name is ${names}asfhdfhdfh`);


// let arr = []
// function addTodo(){
//     console.log(todo.value);
//     arr.push(todo.value);
//     console.log(arr);
//     todo.value = '';
//     for (let i = 0; i < arr.length; i++) {
//         ul.innerHTML += `<li>${arr[i]}</li>`

//     }
// }













































// for (let i = 0; i < 10; i++) {
//     console.log('outer loop', i);
//     for (let j = 0; j < 10; j++) {
//         console.log('inner loop', j);
//     }
// }
// console.log('hello world');











// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++
// }



















// let i = 0;
// do {
//     console.log(i);
//     i++
// } while (i < -10);














// const fruit = ['apple' , 'orange' , 'banana' , 'nashpati'];


// const div = document.querySelector('.container');
// for(let i = 0; i < 4; i++){
//     console.log(fruit[i]);
//     div.innerHTML = div.innerHTML + fruit[i] + '<br/>';
// }
















//Template literals

// let names = 'abdullah';
// let lastName = 'khan';

// console.log("Muhammad " + names + " " + lastName);
// console.log(`Muhammad ${names} ${lastName}`);



















const input = document.querySelector('#todo');
const ul = document.querySelector('ol');

let arr = [];

function renderTodo() {
    ul.innerHTML = '';
    
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `
        <li>${arr[i]}
        <button onclick="deleteTodo(${i})">delete</button>
        <button onclick="editTodo(${i})">edit</button>
        </li>
        `
    }
}

function addTodo() {
    arr.push(input.value)
    if(input.value.trim() === ''){
        console.log('please enter value');
    }else{
        renderTodo()
    }
    input.value = '';

}


//delete todo
function deleteTodo(index) {
    ul.innerHTML = '';
    console.log('delete called', index);
    arr.splice(index, 1);
    renderTodo();
}
//edit todo
function editTodo(index) {
    const editedVal = prompt('enter edited value');
    arr.splice(index, 1, editedVal);
    renderTodo()
    console.log(arr);
}


function deleteAll() {
    arr = [];
    renderTodo();
}






































































