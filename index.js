const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/', require('./src/routes'))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
