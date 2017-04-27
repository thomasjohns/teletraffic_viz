const express = require('express')
const router = express.Router()

const Inventory = require('../models/inventory')
const TimeSeries = require('../models/timeseries')

router.get('/', (req, res) => {
  return Inventory.getAllDeviceNames().then(devices => {
    return res.status(200).json(devices)
  })
})

router.get('/:device', (req, res) => {
  return TimeSeries.getAllMetricsByDevice(req.query.device).then(metrics => {
    return res.status(200).json(metrics)
  })
})

module.exports = router
