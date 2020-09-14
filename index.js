require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))
morgan.token('body', function (req, res) { return JSON.stringify(req.body) })
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const generateId = () => {
    return Math.floor(Math.random() * 100000)
}

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
      res.json(persons)
    })
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(request.params.id)
    Person.findById(id).then(person => {
      if (person) {
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(request.params.id)
    Person.findByIdAndDelete(id).then(() => {
      res.status(204).end()
    })
})

app.post('/api/persons', (req, res) => {
    const body = req.body
  
    if (!body || !body.name || !body.number) {
        return res.status(400).json({ 
            error: 'name and number are required' 
        })
    }

    /*
    Person.find({name: body.name}).then(existingPerson => {
      if (existingPerson) {
        return res.status(400).json({ 
            error: 'name must be unique' 
        })
      }
    */
      const person = new Person({
        name: body.name,
        number: body.number,
        id: generateId()
      })
    
      person.save().then(savedPerson => {
        res.json(savedPerson)
      })
    /*
    })    
    */
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})