const QuickAttractions = require('../models/quickAttractions')

exports.getAllQuickAttractions = (req, res) => {
  QuickAttractions.getAllQuickAttractions()
    .then((data) => {
        // console.log(data
      res.send(data)
    })
    .catch((err) => {
      console.error(err)
      res.status(500).send('Internal Server Error' +err)
    })
}

exports.createQuickAttractions = (req, res) => {
    let inputData = { ...req.body }
    QuickAttractions.createData(inputData)
      .then((data) => {
        console.log('New quickattractions added:', data)
        res.status(201).send('Quick Attraction added successfully')
      })
      .catch((err) => {
        console.error(err)
        res.status(500).send('Internal Server Error')
      })
  }
