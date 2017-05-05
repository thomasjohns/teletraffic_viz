const express = require('express')
const router = express.Router()

const Inventory = require('../models/inventory')

router.get('/menu', (req, res) => {
  return Inventory.getDeviceMenuTypesAndNames().then(menuItems => {
    return res.status(200).json(menuItems['device'])
  })
})

module.exports = router
