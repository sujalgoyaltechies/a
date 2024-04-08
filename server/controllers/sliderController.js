const Image = require('../models/Slider');

const uploadImage = async (req, res) => {
  try {
    let img;

    if (req.file) {
      img = `${req.file.filename}`;
    }

    const newImage = new Image({
      img,
    });

    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const deletedImage = await Image.findByIdAndDelete(imageId);

    if (!deletedImage) {
      return res.status(404).json({ msg: 'Image not found' });
    }

    res.json({ msg: 'Image deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  uploadImage,
  getAllImages,
  deleteImage,
};
