const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 4100
const cors = require('cors');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.use(cors());

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API Tito Apps' })
})

app.get('/users', db.getUsers)
app.post('/users/login', db.login)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})