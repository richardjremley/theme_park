const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const routes = require('./routes')
const db = require('./db')

// () imports and middleware here ^ ///////

const { MissingEntity, WildAnimal } = require('./models')

const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())

// app.use() middleware here ^ ///////////////////

app.use('/api', routes)

// app.get('/animals', async (req, res) => {
//   const animals = await WildAnimal.find({})
//   res.json(animals)
// })

// app.get("/entities", async (req, res) => {
//   const entities = await MissingEntity.find({})
//   res.json(entities)
// })

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
