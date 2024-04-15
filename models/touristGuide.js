const mongoose = require('mongoose')
const Schema = mongoose.Schema

const touristGuideSchema = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String },
    mobile: { type: String },
    license: { type: String, required: true },
    validUpto: { type: String, required: true },
    lastDate: { type: String, required: true },
    chargedByRS: { type: Number, required: true },
    charge: {
      type: Number,
      required: true,
      set: function (value) {
        // Add 100 to the value entered by the user
        return parseInt(value) + 100
      },
    },
    city: { type: String, required: true },
    places: [{ type: String, required: true }],
    languages: [{ type: String, required: true }],
    description: { type: String },
  },
  {
    timestamps: true,
  },
)

const TouristGuideTable = mongoose.model('TouristGuide', touristGuideSchema)

module.exports = {
  createData: function (inputData) {
    return new Promise((resolve, reject) => {
      const eventData = new TouristGuideTable(inputData)
      eventData
        .save()
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  },
  getAllTouristGuidesOfCity: function (filter) {
    let cityName = filter.cityName
    return TouristGuideTable.find({ city: cityName })
      .sort({ chargedByRS: 1 })
      .exec()
  },
}
