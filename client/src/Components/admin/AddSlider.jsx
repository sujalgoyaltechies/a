
import React, { useState } from 'react';
import axios from 'axios';
import {
  Button,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const AddSlider = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        alert('Please select a file.');
        return;
      }

      setUploading(true);

      const formData = new FormData();
      formData.append('img', selectedFile);

      const response = await axios.post(
        'http://localhost:8080/slider/post',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log('Image uploaded successfully:', response.data);
      setUploadSuccess(true); // Set success message
      setOpenDialog(true); // Open dialog
      // You can handle success as needed, e.g., show a success message or update state.

    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error, e.g., show an error message.
    } finally {
      setUploading(false);
      setSelectedFile(null); // Clear selected file
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <Container>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Paper elevation={3} style={{ padding: '16px' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Upload Image
            </Typography>

            <input
              accept="image/*"
              type="file"
              onChange={handleFileChange}
              style={{ marginBottom: '16px', width: '100%' }}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
              disabled={uploading}
              fullWidth
            >
              {uploading ? (
                <CircularProgress size={24} />
              ) : (
                'Upload'
              )}
            </Button>

            <Dialog open={openDialog} onClose={handleDialogClose}>
              <DialogContent>
                <Typography align="center" gutterBottom>
                  Image uploaded successfully!
                </Typography>
              </DialogContent>
            </Dialog>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddSlider;
