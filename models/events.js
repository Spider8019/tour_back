const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
  {
    eventId: { type: Number, unique: true },
    eventName: { type: String, required: true },
    eventDescription: { type: String },
    eventExternalLink: { type: String },
    tillDate: { type: Date, required: true },
    eventCity: { type: Schema.Types.ObjectId, ref: 'PlaceTable' },
  },
  {
    timestamps: true,
  },
)

const EventTable = mongoose.model('Event', eventSchema)

module.exports = {
  createData: function (inputData) {
    return new Promise((resolve, reject) => {
      const eventData = new EventTable(inputData)
      eventData
        .save()
        .then((data) => resolve(data))
        .catch((err) => reject(err))
    })
  },
}
