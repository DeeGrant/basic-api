document.querySelector('button').addEventListener('click', getRoses)

async function getRoses() {
    const flower = document.querySelector('input').value
    try {
        const response = await fetch('http://localhost:8000/api/flowers/'+ flower)
        const data = await response.json()
        const result = `${data.number} ${data.what} ${data.number === 1 ? "is" : "are"} ${data.color}!`
        document.querySelector('p').innerText = result
    } catch (e) {
        console.log(e)
    }
}


