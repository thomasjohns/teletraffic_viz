const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeSeriesSchema = new Schema({
  name: String,
  type: String,
  datetime: [Number],
  cpu: [Number],
  memory: [Number],
  disk: [Number],
  uptime: [Number]
})

module.exports = mongoose.model('TimeSeries', timeSeriesSchema, 'timeSeries')
