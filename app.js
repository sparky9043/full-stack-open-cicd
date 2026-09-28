const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.json({ 'hello': 1 }) // change this string to ensure a new version is deployed
})

const start = async () => {
  await app.listen(PORT)
  console.log(`server started on port ${PORT}`)
}

start()
