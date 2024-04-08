import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Snackbar,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const SliderList = () => {
  const [images, setImages] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:8080/slider/get');
        setImages(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleDelete = async (imageId) => {
    try {
      await axios.delete(`http://localhost:8080/slider/delete/${imageId}`);
      setImages((prevImages) =>
        prevImages.filter((image) => image._id !== imageId)
      );
      setDeleteMessage('Image deleted successfully');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Container style={{ padding: '16px', maxHeight: '80vh', overflowY: 'auto' }}>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image._id}>
            <Card>
              {/* You can customize the image display here */}
              {/* For simplicity, assuming image URL is stored in 'imageUrl' field */}
              <img
                src={`http://localhost:8080/${image.img}`}
                alt="Gallery Item"
                style={{ width: '100%', height: '200px', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {/* You can display additional information about the image */}
                  Image Details
                </Typography>
                <IconButton
                  aria-label="delete"
                  onClick={() => handleDelete(image._id)}
                >
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Snackbar for delete message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={deleteMessage}
      />
    </Container>
  );
};

export default SliderList;
