const express = require('express');
const multer = require('multer');
const sliderController = require('../controllers/sliderController');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Post an image
router.post('/post', upload.single('img'), sliderController.uploadImage);

// Get all images
router.get('/get', sliderController.getAllImages);
router.delete('/delete/:id', sliderController.deleteImage);

module.exports = router;