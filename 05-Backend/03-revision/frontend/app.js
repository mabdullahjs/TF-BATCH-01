console.log('hello world!');

function getData() {
    axios('http://localhost:5000/api/v1/todo')
        .then((res) => {
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
}

const form = document.querySelector('#form');
const title = document.querySelector('#title');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    axios.post('http://localhost:5000/api/v1/todo', {
        title: title.value,
        description: 'lorem ipsum',
        email:'abdullah@gmail.com'
    }).then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err)
    })
})

// function deleteTodo(){
//     axios.delete(`https://server-the-fort.vercel.app/api/v1/todos/1715185114932`)
//     .then((res)=>{
//         console.log(res.data);
//     }).catch((err)=>{
//         console.log(err)
//     })
// }