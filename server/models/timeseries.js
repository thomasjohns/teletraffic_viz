const mongoose = require('mongoose')
const Promise = require('bluebird')

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

class TimeSeries {
  static getAllMetricsByDevice (device) {
    let result = this.model.findOne({ 'name': device })
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
