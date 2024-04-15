const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rentalGaadiSchema = new Schema(
  {
    gaadiModel: { type: String, required: true },
    gaadiCompany: { type: String, required: true },
    gaadiColor: { type: String },
    gaadiHasAC: { type: Boolean, default: true },
    gaadiHasMusicSystem: { type: Boolean, default: true },
    gaadiHasSeats: { type: Number, default: 6 },
    gaadiNumber: { type: String, required: true },
    freeWater: { type: Boolean, default: false },
    charges: {
      perkm: { type: Number, default: 0 },
      perhour: { type: Number, default: 0 },
    },
    areYouProvidingDriver: { type: Boolean, default: true },
    driverName: { type: String },
    driverAadhar: { type: String },
    tourCompany: { type: String },
    tourCompanyAddress: { type: String },
    cities: [{ type: String, required: true }],
    enableTill: { type: String },
    rechargedBy: { type: Number },
    priority: {
      type: Number,
      default: function () {
        return this.rechargedBy
      },
    },
  },
  {
    timestamps: true,
  },
)

const RentalGaadi = mongoose.model('RentalGaadi', rentalGaadiSchema)

module.exports = {
  createData: function (inputData) {
    return new Promise((resolve, reject) => {
      const gaadiData = new RentalGaadi(inputData)
      gaadiData
        .save()
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  },
  getAllGaadiCategoryInACity: function (cityName) {
    return RentalGaadi.distinct({cities:{$in:[cityName]}},{gaadiModel:1}).exec()
  },
}
