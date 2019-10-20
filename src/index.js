const express = require('express')

const { PORT = 8080 } = process.env

const app = express()

app.use('*', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
  console.log('{APPLICATION_NAME} bootstrapped with app-cli')
  console.log('Listening on port: %d', PORT)
})
