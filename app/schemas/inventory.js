const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema({
  metric: [String],
  device: { type: String, name: String }
})

module.exports = mongoose.model('Inventory', inventorySchema, 'inventory')
