const express = require('express')
const app = express()

const routes = require('./routes')
const config = require('./configurations/configPorts.js')

const setupViewEngine = require('./configurations/viewEngineHandleBars')
setupViewEngine(app)

//----------another way of importing/calling setupViewEngine--------------------
// require('./configurations/viewEngineHandleBars')(app) /it gets the function directly and runs it
//--------------------------------------------------------------------------------


app.use(express.static('src/public'))

//-----Adding middleware-------
app.use(express.urlencoded({extended: false})) //it returns a middleware which parse the url encoded body, this will be used for every request

app.use(routes)

app.listen(config.PORT, () => console.log(`Server is running on Port ${config.PORT} ...`))