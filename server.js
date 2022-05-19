const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let savage = {
    'age': 28,
    'birthName': 'A name',
    'birthLocation': "London, England"
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/api/savage", (req, res) => {
    res.json(savage)
})


app.listen(PORT, () => {
    console.log("Server is Running on port " + PORT);
})