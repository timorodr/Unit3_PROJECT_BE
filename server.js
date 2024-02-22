require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
// const PeopleRouter = require('./controllers/people')


const app = express()

// MIDDLEWARE
app.use(cors())
app.use(morgan('dev'))
app.use(express.json()) // this middleware allows us to send JSON request with our request object


//routes
// app.use('/user', UserRouter)
// app.use('/deck', DeckRouter)
// app.use('/card', CardRouter)

app.get('/', (req, res) => {
    res.send("hello world")
})


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`listening to port ${PORT}`))