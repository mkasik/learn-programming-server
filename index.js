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

app.get('/details/:id',(req,res)=>{
    const id=req.params.id;
    const details= courses.find(detail=>detail.id===id);
    res.send(details);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})