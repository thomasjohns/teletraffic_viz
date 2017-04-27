const mongoose = require('mongoose')
const Promise = require('bluebird')

const Schema = mongoose.Schema

const inventorySchema = new Schema({
  metric: [String],
  device: { type: String, name: String }
})

class Inventory {
  static getAllDeviceNames () {
    let result = this.model.findOne(
      {},
      { device: 10 },
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
