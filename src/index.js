const express = require('express')

const app = express()

const routes = require('./routes')
const config = require('./configurations/configPorts.js')

const setupViewEngine = require('./configurations/viewEngineHandleBars')
const dataBaseInit = require('./configurations/dataBaseInit.js')

setupViewEngine(app)


//----------another way of importing/calling setupViewEngine--------------------
// require('./configurations/viewEngineHandleBars')(app) /it gets the function directly and runs it
//--------------------------------------------------------------------------------


app.use(express.static('src/public'))

//-----Adding middleware-------
app.use(express.urlencoded({extended: false})) //Always! it returns a middleware which parse the url encoded body, this will be used for every request

app.use(routes)

dataBaseInit() //er are running the data base. If connection to DB is not possible, it should show an error.
            .then(() => app.listen(config.PORT, () => console.log(`Server is running on Port ${config.PORT} ...`)))
            .catch((err) => console.error(err))