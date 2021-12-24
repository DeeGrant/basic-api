document.querySelector('button').addEventListener('click', getRoses)

async function getRoses() {
    try {
        const response = await fetch('http://localhost:8000/api/roses')
        const data = await response.json()
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}

// paragraph = document.querySelector('p')

