const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quickAttractionSchema = new Schema(
  {
    labelForTitle: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    attractions: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
    enabled: { type: Boolean, default: true },
    tillDate: { type: Date },
  },
  {
    timestamps: true,
  },
)

const QuickAttractionsTable = mongoose.model(
  'QuickAttractions',
  quickAttractionSchema,
)

module.exports = {
  createData: function (inputData) {
    return new Promise((resolve, reject) => {
      const quickAttractions = new QuickAttractionsTable(inputData)
      quickAttractions
        .save()
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  },
  getAllQuickAttractions: function () {
    return QuickAttractionsTable.find({ enabled: true })
      .populate({
        path: 'attractions',
        select: 'placeName placeCity placeImage -_id',
      })
      .sort({ createdAt: 1 })
      .exec()
  },
}
