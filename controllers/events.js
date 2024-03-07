const Event = require('../models/events')

exports.addAEvent = (req, res) => {
  let inputData = { ...req.body }
  Event.createData(inputData)
    .then((data) => {
      console.log('New event added:', data)
      res.status(201).send('Event added successfully')
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error')
    })
}

exports.getAllEventsInACity = (req, res) => {
    Event.getAllData()
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Internal Server Error' +err)
      })
  }
