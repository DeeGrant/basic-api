const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 8000

app.use(cors())

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/js/main.js', (request, response) => {
    response.sendFile(__dirname + '/js/main.js')
})

let roses = {
    'what': 'Roses',
    'color': 'Red',
    'number': 24
}

app.get('/api/roses', (request, response) => {
    response.json(roses)
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})