const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema(
  {
    eventName: { type: String, required: true },
    eventDescription: { type: String },
    eventExternalLink: { type: String },
    eventMediaLinks: { type: [String] ,required:true},
    tillDate: { type: Date, required: true },
    eventPlace: { type: Schema.Types.ObjectId, ref: 'PlaceTable' },
    eventCities: [{
      type: String,
      validate: {
        validator: async function (value) {
          const places = await mongoose.model('Place').distinct('placeCity');
          return places.includes(value);
        },
        message: props => `${props.value} is not a valid placeCity`,
      },
      required: true,
    }]
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
  getAllData: function () {
    return EventTable.find({}).sort({ tillDate: 1 }).exec()
  },
}
