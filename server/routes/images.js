const express = require('express')
const Image = require('../models/Images')
const router = express.Router()

// Get all images
router.get('/', async (req, res) => {

  try {
    const images = await Image.find({})
    res.json(images)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      "success": false,
      "message": error.message
    })
  }

})


// Create new image
router.post('/add', async (req, res) => {
  const { url } = req.body
  // TODO: validation goes here

  const newImage = new Image({
    url
  })

  try {
    const savedImage = await newImage.save()
    res.status(201).json({
      "success": true,
      "message": 'New image added to the database',
      "data": savedImage
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      "success": false,
      "message": error.message
    })
  }
})


module.exports = router