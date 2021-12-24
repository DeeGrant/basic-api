const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 8000

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

let flowers = {
    'roses': roses,
    'daisies': {
        'what': 'Daisies',
        'color': 'White',
        'number': 3
    },
    'lily': {
        'what': 'Lily',
        'color': 'Orange',
        'number': 1
    }
}

app.get('/api/flowers/:flower', (req, res) => {
    const flower = req.params.flower.toLowerCase()
    console.log(flower)
    if (flowers[flower]) {
        res.json(flowers[flower])
    } else {
        res.json(flowers['lily'])
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})