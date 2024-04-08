import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Container,
  Paper,
  Typography,
  Grid,
  Card,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    generation: 0,
    originalPrice: 0,
    brand: "",
    model: "",
    year: 2012,
    condition: "",
    processor: "",
    memory: "",
    storage: "",
    graphics: "",
    display: "",
    category: "",
    stockQuantity: 0,
    Price: 0,
    img: null,
  });
  const [imagePreview, setImagePreview] = useState(null);

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

    // Display image preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      generation: 0,
      originalPrice: 0,
      brand: "",
      model: "",
      year: 2022,
      condition: "",
      processor: "",
      memory: "",
      storage: "",
      graphics: "",
      display: "",
      category: "",
      stockQuantity: 0,
      Price: 0,
      img: null,
    });
    setImagePreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await axios.post(
        "http://localhost:8080/product/post",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        toast.success("Product added successfully!", {
          autoClose: 3000,
        });

        console.log("Product added successfully!");
        resetForm(); // Reset the form after successful submission
      } else {
        console.error("Error adding product");
        toast.error("Error adding product", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`Error: ${error.message}`, {
        autoClose: 3000,
      });
    }
  };


  const renderFormFields = () => {
    switch (step) {
      case 1:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Category"
                variant="outlined"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Generation"
                variant="outlined"
                type="number"
                name="generation"
                value={formData.generation}
                onChange={handleChange}
                required
                InputProps={{
                  inputProps: {
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                  },
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Original Price"
                variant="outlined"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                required
              />
            </Grid>
            {/* Add other form fields for step 1 */}
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="brand-label">Brand</InputLabel>
                <Select
                  label="Brand"
                  labelId="brand-label"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="dell">Dell</MenuItem>
                  <MenuItem value="hp">Hp</MenuItem>
                  <MenuItem value="lenovo">Lenovo</MenuItem>
                  <MenuItem value="apple">MacBook</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Model"
                variant="outlined"
                name="model"
                value={formData.model}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Year"
                variant="outlined"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </Grid>
            {/* Add other form fields for step 1 */}
          </Grid>
        );
      case 2:
        return (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Memory"
                variant="outlined"
                type="number"
                name="memory"
                value={formData.memory}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Storage"
                variant="outlined"
                type="number"
                name="storage"
                value={formData.storage}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Graphics"
                variant="outlined"
                name="graphics"
                value={formData.graphics}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="display-label">Display</InputLabel>
                <Select
                  label="Display"
                  labelId="display-label"
                  name="display"
                  value={formData.display}
                  onChange={handleChange}
                  required
                >
                  <MenuItem value="Yes">Yes</MenuItem>
                  <MenuItem value="No">No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Stock Quantity"
                variant="outlined"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Price"
                variant="outlined"
                name="Price"
                value={formData.Price}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={6}>
        <TextField
          fullWidth
          label="Processor"
          variant="outlined"
          name="processor"
          select
          value={formData.processor}
          onChange={handleChange}
          required
        >
          <MenuItem value="i3">i3</MenuItem>
          <MenuItem value="i5">i5</MenuItem>
          <MenuItem value="i7">i7</MenuItem>
        </TextField>
      </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Condition"
                variant="outlined"
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <input
                type="file"
                id="img"
                name="img"
                onChange={handleImageChange}
                accept="image/*"
                required
              />
            </Grid>
            <Grid item xs={12}>
              {imagePreview && (
                <Card>
                  <CardMedia
                    component="img"
                    alt="Selected"
                    src={imagePreview}
                    style={{ width: "50px", height: "50px" }}
                  />
                </Card>
              )}
            </Grid>
            {/* Add other form fields for step 2 */}
        
           
          </Grid>
        );
      default:
        return null;
    }
  };
  

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: 20, marginTop: 20 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Add Product
        </Typography>
        <form onSubmit={handleSubmit}>
          {renderFormFields()}

          {/* Navigation buttons */}
          <div style={{ marginTop: 20 }}>
            {step > 1 && (
              <Button
                variant="outlined"
                color="primary"
                onClick={handlePrev}
              >
                Previous
              </Button>
            )}
            {step < 2 && (
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: 10 }}
                onClick={handleNext}
              >
                Next
              </Button>
            )}
            {step === 2 && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginLeft: 10 }}
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </Paper>
      <ToastContainer />
    </Container>
  );
};

export default AddProduct;