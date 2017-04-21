const Promise = require('bluebird')
const TimeSeries = require('../schemas/timeseries')

exports.getAllMetricsByDevice = function (device) {
  let result = TimeSeries.findOne({ 'name': device })
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

// exports.getCpuByDevice = function (device) {}

// exports.getMemoryByDevice = function (device) {}

// exports.getDeskUsageByDevice = function (device) {}

// exports.getUptimeByDevice = function (device) {}
