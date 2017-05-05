const mongoose = require('mongoose')
const Promise = require('bluebird')

const { Model, Schema } = mongoose

const timeSeriesSchema = new Schema({
  name: String,
  type: String,
  ts: [
    {
      dt: Date,
      memory: Number,
      disk: Number,
      cpu: Number,
      uptime: Number
    }
  ]
})

class TimeSeries extends Model {
  static getAllMetricsByDevice (device) {
    let result = this.findOne({ 'name': device }, { 'ts': 1 })
    if (!result) {
      return Promise.reject(
        Object.assign(new Error('Device not found'), {
          statusCode: 404
        })
      )
    } else {
      return Promise.resolve(result)
    }
  }

  static getCpuByDevice (device) {
    return {}
  }

  static getMemoryByDevice (device) {
    return {}
  }

  static getDiskUsageByDevice (device) {
    return {}
  }

  static getUptimeByDevice (device) {
    return {}
  }
}

timeSeriesSchema.loadClass(TimeSeries)
module.exports = mongoose.model('TimeSeries', timeSeriesSchema, 'timeSeries')
