const express = require('express')
const router = express.Router()

const Inventory = require('../models/inventory')

router.get('/menu', (req, res) => {
  return Inventory.getDeviceMenu().then(menuItems => {
    return res.status(200).json(menuItems)
  })
})

module.exports = router
