const express = require('express')
const mongoose = require('mongoose')

const home = require('./routes/home')
const graph = require('./routes/graph')
// const table = require('./routes/table')
// const download = require('./routes/download')

mongoose.connect('mongodb://localhost/reporting')

const app = express()

app.set('json spaces', 4)
// app.use(express.static(path.join(__dirname, 'public')))

app.use('/', home)
app.use('/graph', graph)
// app.use('/table', table)
// app.use('/download', download)

app.listen(3001)
console.log('Listening on port 3001...')

module.exports = app
