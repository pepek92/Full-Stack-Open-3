const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(morgan(':method :status :res[content-length] - :response-time ms :data'))
app.use(express.static('build'))

morgan.token('data', function (req, res) {
  return JSON.stringify(req.body)
})

let persons = [
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "annika",
        "number": "123454",
        "id": 5
      },
      {
        "name": "pepe",
        "number": "546456",
        "id": 6
      },
      {
        "name": "Lucas",
        "number": "345934",
        "id": 7
      }
    ]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {

    let date = new Date()
    const amount = persons.length
    const info = `Phonebook has info for ${amount} people <br><br>${date}`
      
    res.send(info)
})

app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(person => person.id === id)
  
  if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(person => person.id !== id)

  response.status(204).end()
})

const generateId = () => {
  return Math.floor(Math.random() * 5000);
}

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name || !body.number) {
    return response.status(400).json({ 
      error: 'Name or number missing'
    })
  }

  if (persons.find(person => person.name === body.name)) {
    return response.status(400).json({ 
      error: 'Name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  console.log(morgan.token('type', function (req, res) { return res.json }))

  persons = persons.concat(person)

  response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(morgan(':method :url :status :res[content-length] - :response-time ms'))
})