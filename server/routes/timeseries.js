const express = require('express')
const router = express.Router()

const TimeSeries = require('../models/timeseries')

router.get('/:device', (req, res) => {
  return TimeSeries.getAllMetricsByDevice(req.params.device).then(metrics => {
    return res.status(200).json(metrics['ts'])
  })
})

module.exports = router
