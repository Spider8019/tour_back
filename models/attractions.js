const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entryFeesSchema = new Schema(
  {
    indian: {
      child: { type: Number, required: true },
      adult: { type: Number, required: true },
    },
    foreigner: {
      child: { type: Number, required: true },
      adult: { type: Number, required: true },
    },
  },
  { _id: false },
)

const placeSchema = new Schema({
  placeId: { type: Number, required: true, unique: true },
  placeName: { type: String, required: true, unique: true },
  placeCity: { type: String, required: true },
  placeCategory: { type: String, required: true },
  placeImage: { type: String, required: true },
  placeLocation: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    text: { type: String, required: true },
  },
  placeContent: {
    content_1: { type: String, required: true },
    content_2: { type: String, required: true },
  },
  moreImages: { type: [String], required: true },
  entryFees: { entryFeesSchema },
  hashtag: { type: String },
  timings: { type: [String] },
  links: { type: [String] },
})

const PlaceTable = mongoose.model('Place', placeSchema)

module.exports = {
  createData: function (inputData) {
    return new Promise((resolve, reject) => {
      const placeData = new PlaceTable(inputData)
      placeData
        .save()
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  },
  getAllData: function () {
    return PlaceTable.find({}).exec()
  },
  getPlaceByName: function (placeName) {
    return PlaceTable.findOne({ placeName: placeName }).exec()
  },
}
