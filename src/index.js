const express = require('express')
const app = express()
const config = require('./configurations/configPorts.js')

const setupViewEngine = require('./configurations/viewEngineHandleBars')
setupViewEngine(app)

//----------drug zapis na gornoto zapisvane za setupViewEngine--------------------
// require('./configurations/viewEngineHandleBars')(app) /poneje ot tozi file samo tova e exportirano, moje direktno da go izpylnim
//--------------------------------------------------------------------------------

app.get('/', (req, res) => {
    res.render('home')
})



app.listen(config.PORT, () => console.log(`Server is running on Port ${config.PORT} ...`))