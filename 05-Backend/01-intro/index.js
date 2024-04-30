const express = require('express') 

const app = express()
const port = 3000

app.get('/' , (req , res)=>{
  res.send('hello world');
})

app.get('/user' , (req , res)=>{
  res.send({name:'abdullah' , age:20 , email: 'mabdullah2037@gmail.com'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

