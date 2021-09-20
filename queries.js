const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'demodb',
  password: 'Titovaliant17',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM user_game ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const login = (request, response) => {
  const { username, password } = request.body

  pool.query('SELECT * FROM user_game WHERE username = $1 and password = $2', [username, password], (error, results) => {
    console.log(username, password)
    if (error) {
      throw error
    }
    if (results.rows.length > 0) {
      
    response.status(200).json(results.rows)
    }
    else {
      response.status(401).json("Gagal Login")  
    }
  })
}

const createUser = (request, response) => {
  const { id, username, password } = request.body

  pool.query('INSERT INTO user_game (id, username, password) VALUES ($1, $2, $3)', [id, username, password], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send("berhasil menambah data")
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  login,
  createUser,
  updateUser,
  deleteUser,
}