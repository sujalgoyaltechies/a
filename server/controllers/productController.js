const Product = require('../models/ProductModel');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

const createProduct = async (req, res) => {
  try {
    const {
      name,
      generation,
      originalPrice,
      brand,
      model,
      category,
      year,
      condition,
      processor,
      memory,
      storage,
      graphics,
      display,
      stockQuantity,
      Price,
    } = req.body;
    const token = uuidv4();

    let img;

    if (req.file) {
      img = `${req.file.filename}`;
    }

    const newProduct = new Product({
      name,
      generation,
      originalPrice,
      brand,
      model,
      category,
      year,
      condition,
      processor,
      memory,
      storage,
      graphics,
      display,
      stockQuantity,
      Price,
      img,
      token,
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.productId;

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(deletedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


//   try {
//     const productId = req.params.productId;
//     const updates = req.body;

//     const updatedProduct = await Product.findByIdAndUpdate(
//       productId,
//       updates,
//       { new: true }
//     );

//     if (!updatedProduct) {
//       return res.status(404).json({ message: 'Product not found' });
//     }

//     res.json(updatedProduct);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// };
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.productId;
    const updates = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: updates },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};





module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  deleteProduct,
  updateProduct,
};