const express = require('express')
const app = express()
const port = 3000

const arr = [];

app.use(express.json());

//get all todos
app.get('/api/v1/todo', (req, res) => {
    res.send({ todo: arr })
})

//add todo
app.post('/api/v1/todo', (req, res) => {
    const { title } = req.body;
    arr.push({ title: title, id: Date.now() })
    res.send({ message: 'data added', todo: arr });
})

//get single todo
app.get('/api/v1/todo/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    const item = arr.filter(item => item.id == id);
    console.log(item);
    res.send({todo: item})
})

app.put('/api/v1/todo' , (req , res)=>{
    const {id} = req.params
    const {title} = req.body

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//HTTP METHODS
// GET //data mangwana ka liya
// POST //data bhejna ka liya
// PUT //update
// DELETE //delete


//thunder client