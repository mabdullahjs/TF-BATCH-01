const todo = document.querySelector('#todo');
const ul = document.querySelector('ul');

// let names = 'abdullah'
// console.log(`my name is ${names}asfhdfhdfh`);


let arr = []
function addTodo(){
    console.log(todo.value);
    arr.push(todo.value);
    console.log(arr);
    todo.value = '';
    for (let i = 0; i < arr.length; i++) {
        ul.innerHTML += `<li>${arr[i]}</li>`
        
    }
}