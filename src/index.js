const express = require('express')

const config = require('./configconfig')[process.env]
const app = express()

app.get('/', (req, res) => {
    res.send("Home page")
})

app.listen(config.PORT, () => console.log("Server is running on Port 5000 ..."))