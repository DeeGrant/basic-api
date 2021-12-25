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
    what: 'roses',
    color: 'red',
    number: 24
}

app.get('/api/roses', (request, response) => {
    response.json(roses)
})

let flowers = {
    roses: roses,
    daisies: {
        what: 'daisies',
        color: 'white',
        number: 3
    },
    lily: {
        what: 'lily',
        color: 'orange',
        number: 1
    },
    unknown: {
        what: 'unknowns',
        color: 'unknown',
        number: 0
    }
}

app.get('/api/flowers/:flower', (req, res) => {
    const flower = req.params.flower.toLowerCase()
    console.log(flower)
    if (flowers[flower]) {
        res.json(flowers[flower])
    } else {
        res.json(flowers['unknown'])
    }
})

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})