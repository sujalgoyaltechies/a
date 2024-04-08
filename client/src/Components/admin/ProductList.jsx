import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Snackbar,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const ProductList = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");
  const columns = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "Price", headerName: "Price", flex: 1 },
    { field: "stockQuantity", headerName: "Stock Quantity", flex: 1 },
    {
      field: "img",
      headerName: "Image",
      flex: 1,
      renderCell: (params) => (
        <img
          src={`http://localhost:8080/${params.value}`}
          alt={params.row.name}
          style={{ width: "50px", height: "50px" }}
        />
      ),
    },
    { field: "brand", headerName: "Brand", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      renderCell: (params) => (
        <>
          <Button
            variant="contained"
            color="info"
            component={Link}
            to={`/editProduct/${params.row._id}`}
            style={{ marginRight: "8px" }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => handleDelete(params.row._id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </>
      ),
    },
  ];

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRowId = (row) => {
    return row._id;
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/product/get"
      );
      const modifiedData = response.data.map((product) => ({
        ...product,
        action: null,
      }));
      setProducts(modifiedData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/product/${productId}`
      );

      if (response.status === 200) {
        console.log(`Product with ID ${productId} deleted successfully`);
        setDeleteMessage("Product deleted successfully!");
        setSnackbarOpen(true);

        fetchData();
      } else {
        console.error("Error deleting product");
        setDeleteMessage("Error deleting product!");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setDeleteMessage(`Error: ${error.message}`);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbarOpen(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Box m="20px">
      <Typography variant="h3" align="center" gutterBottom>
        Product List
      </Typography>
      <Box m="40px 0 0 0" height="75vh">
        <DataGrid
          rows={products}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={getRowId}
        />
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        message={deleteMessage}
      />
    </Box>
  );
};

export default ProductList;
