const express = require('express')
const mongoose = require('mongoose')

const apiHome = require('./routes/api_home')
const inventory = require('./routes/inventory')
const timeseries = require('./routes/timeseries')

mongoose.Promise = require('bluebird')

mongoose.connect('mongodb://localhost/reporting')

const app = express()

app.set('json spaces', 4)

app.use('/api', apiHome)
app.use('/api/inventory', inventory)
app.use('/api/timeseries', timeseries)

app.listen(3001)
console.log('Listening on port 3001...')

module.exports = app
