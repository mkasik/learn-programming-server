const express = require('express')
const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
const courses= require('./data/Courses.json')
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/courses', (req, res) => {
  res.send(courses);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})