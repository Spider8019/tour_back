const mongoose = require('mongoose')
const Schema = mongoose.Schema

const entryFeesSchema = new Schema()

const placeSchema = new Schema(
  {
    placeVisit: { type: Number, default: 0 },
    placeId: { type: Number, required: true, unique: true },
    placeName: { type: String, required: true, unique: true },
    placeCity: { type: String, required: true },
    placeCategory: { type: String, required: true },
    placeImage: { type: String, required: true },
    placeEnabled: { type: Boolean, default: true },
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
    iframe_content: { type: String }, //url
    entryFees: {
      indian: {
        child: { type: Number, required: true },
        adult: { type: Number, required: true },
      },
      foreigner: {
        child: { type: Number, required: true },
        adult: { type: Number, required: true },
      },
    },
    hashtag: { type: String },
    timings: { type: [String] },
    links: { type: [String] },
    verified: { type: Boolean, default: false },
    averageTimeToVisit: { type: String },
    nearestStation: { type: String },
  },
  {
    timestamps: true,
  },
)

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
    return PlaceTable.find({}).sort({ placeName: 1 }).exec()
  },
  getPlaceByName: function (placeName) {
    return PlaceTable.findOneAndUpdate(
      { placeName: placeName },
      { $inc: { placeVisit: 1 } }, // Increment placeVisit by 1
      { new: true }, // Return the updated document
    ).exec()
  },
  getPlacesByProvidedFilter: function (filter) {
    let placeName = filter.placeName
    let regex = new RegExp(placeName, 'i') // 'i' for case-insensitive search
    return PlaceTable.find({
      $or: [{ placeName: regex }, { placeCity: regex }],
    })
      .sort({ placeName: 1 })
      .exec()
  },
  getTopSearches: function (limit = 10) {
    return PlaceTable.find({})
      .sort({ placeVisit: -1 }) // Sort by placeVisit in descending order
      .limit(limit)
      .exec()
  },
  getLatestPlaces: function (limit = 10) {
    return PlaceTable.find({})
      .sort({ createdAt: -1 }) // Sort by createdAt timestamp in descending order
      .limit(limit)
      .exec()
  },
  getAllCities: async function () {
    try {
      const data = await PlaceTable.aggregate([
        {
          $match: {
            $or: [
              { placeEnabled: true },
              { placeEnabled: { $exists: false } }
            ]
          }
        },
        {
          $group: {
            _id: '$placeCity',
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            _id: 0,
            city: '$_id',
            count: 1,
            tier: {
              $switch: {
                branches: [
                  { case: { $gte: ['$count', 12] }, then: 'tier1' },
                  { case: { $gte: ['$count', 5] }, then: 'tier2' },
                ],
                default: 'tier3',
              },
            },
          },
        },
        {
          $group: {
            _id: '$tier',
            cities: { $addToSet: '$city' },
          },
        },
        {
          $project: {
            _id: 0,
            tier: '$_id',
            cities: 1,
          },
        },
      ]).exec()

      const result = data.reduce((acc, obj) => {
        acc[obj.tier] = obj.cities
        return acc
      }, {})

      return result
    } catch (error) {
      console.error('Error in getAllCities:', error)
      return null
    }
  },

}
