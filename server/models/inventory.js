const mongoose = require('mongoose')
const Promise = require('bluebird')

const { Model, Schema } = mongoose

const inventorySchema = new Schema({
  metric: [String],
  device: [{ type: String, name: String }]
})

class Inventory extends Model {
  static getAllDeviceNames () {
    let result = this.findOne(
      {},
      { device: 1 },
      { name: 1 }
    )
    return Promise.resolve(result)
  }

  static getDeviceMenuTypesAndNames () {
    let result = this.findOne(
      {},
      { device: 1 },
      { name: 1 }
    )
    return Promise.resolve(result)
  }

  static getAllDeviceTypes () {
    return {}
  }

  static getAllDeviceNamesAndTypes () {
    return {}
  }

  static getDeviceNamesByType () {
    return {}
  }

  static getDeviceTypeByName () {
    return {}
  }
}

inventorySchema.loadClass(Inventory)
module.exports = mongoose.model('Inventory', inventorySchema, 'inventory')
