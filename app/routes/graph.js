const express = require('express')
const router = express.Router()

const inventoryAPI = require('../models/inventoryAPI')
const timeseriesAPI = require('../models/timeseriesAPI')

router.get('/', (req, res) => {
  return inventoryAPI.getAllDeviceNames().then(devices => {
    return res.status(200).json(devices)
  })
})

router.get('/:device', (req, res) => {
  return timeseriesAPI.getAllMetricsByDevice(device).then(metrics => {
    return res.status(200).json(metrics)
  })
})

module.exports = router
