const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

let db = []

app.post('/todos/create', (req, res) => {
   const item = { title: req.body.title, description: req.body.description }
   console.log(item)
    db.push(item)
    res.json(item)
  })
  
  app.get('/todos', (req, res) => {
    res.json(db)
  })
  
  app.listen(3000, () => {
    console.log('Server on port 3000')
  }) 
  