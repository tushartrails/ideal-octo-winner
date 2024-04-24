require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('tushar jain')
})

app.get('/login',(req,res) => {
    res.send('<h1>Hi from the backend</h1>')
})

app.get('/chai',(req,res)=>{
    res.send('<h2>Hi while drinking chai</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})