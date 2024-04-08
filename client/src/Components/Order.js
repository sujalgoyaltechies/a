import React, { useState } from 'react';
import axios from 'axios';

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    generation: '',
    originalPrice: 0,
    brand: '',
    model: '',
    category:"",
    year: 2022,
    condition: '',
    processor: '',
    memory: '',
    storage: '',
    graphics: '',
    display: 'Yes', // Default value
    stockQuantity: 0,
    Price: 0,
    img: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      img: file,
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
  
      const response = await axios.post('http://localhost:8080/product/post', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 201) {
        console.log('Product added successfully!');
        // You may want to reset the form or handle success in some way
      } else {
        console.error('Error adding product');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <h2>Add a New Product</h2>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Generation: </label>
        <input type="number" name="generation" value={formData.generation} onChange={handleChange} required />

        <label>Original Price: </label>
        <input type="number" name="originalPrice" value={formData.originalPrice} onChange={handleChange} required />

        <label>Brand: </label>
        <input type="text" name="brand" value={formData.brand} onChange={handleChange} required />

        <label>Model: </label>
        <input type="text" name="model" value={formData.model} onChange={handleChange} required />

        <label>Year: </label>
        <input type="number" name="year" value={formData.year} onChange={handleChange} required />

        <label>Condition: </label>
        <input type="text" name="condition" value={formData.condition} onChange={handleChange} required />

        <label>Processor: </label>
        <input type="text" name="processor" value={formData.processor} onChange={handleChange} />

        <label>Memory: </label>
        <input type="number" name="memory" value={formData.memory} onChange={handleChange} />

        <label>Storage: </label>
        <input type="number" name="storage" value={formData.storage} onChange={handleChange} />

        <label>Graphics: </label>
        <input type="text" name="graphics" value={formData.graphics} onChange={handleChange} />

        <label>Category: </label>
        <input type="text" name="category" value={formData.category} onChange={handleChange} />

        <label>Display:</label>
      <select name="display" value={formData.display} onChange={handleChange}>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>

        <label>Stock Quantity: </label>
        <input type="number" name="stockQuantity" value={formData.stockQuantity} onChange={handleChange} required />

        <label>Price: </label>
        <input type="number" name="Price" value={formData.Price} onChange={handleChange} />

        <label>Image: </label>
        <input type="file" name="img" onChange={handleImageChange} accept="image/*" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Order;
