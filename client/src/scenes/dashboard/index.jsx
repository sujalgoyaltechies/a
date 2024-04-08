import React, { useEffect, useState } from 'react';
import {
  Typography,
  Paper,
  Grid,
  Container,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
  Snackbar,
} from '@mui/material';

const Dashboard = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const paperStyle = {
    marginBottom: theme.spacing(2),
    overflow: 'auto',
    maxHeight: isSmallScreen ? 'auto' : '400px',
  };

  const [orders, setOrders] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/order/get-all-orders')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  useEffect(() => {
    const productIds = orders.flatMap((order) =>
      order.products.map((product) => product.product)
    );
    const uniqueProductIds = [...new Set(productIds)];

    uniqueProductIds.forEach((productId) => {
      fetch(`http://localhost:8080/product/${productId}`)
        .then((response) => response.json())
        .then((data) => {
          setProductDetails((prevProductDetails) => ({
            ...prevProductDetails,
            [productId]: data,
          }));
        })
        .catch((error) => console.error('Error fetching product details:', error));
    });
  }, [orders]);

  const handleDeleteOrder = (orderId) => {
    fetch(`http://localhost:8080/order/delete/${orderId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Order deleted successfully:', data);
        setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
        setSnackbarOpen(true);
      })
      .catch((error) => console.error('Error deleting order:', error));
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container style={{ padding: '16px', maxHeight: '80vh', overflowY: 'auto' }}>
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} key={order._id}>
            <Paper elevation={3} style={paperStyle}>
              <Card>
                <CardHeader title={`Order ID: ${order._id}`} />
                <CardContent>
                  <Typography variant="body1">User: {order.user}</Typography>
                  <Typography variant="body1">Total Amount: ₹{order.totalAmount}</Typography>
                  <Typography variant="body1">Phone No:{order.phoneNo}</Typography>
                  <Divider />
                  <Typography variant="body1">
                    Shipping Address: {order.shippingAddress.addressLine1}, {order.shippingAddress.pincode}, {order.shippingAddress.country},
                    {order.shippingAddress.state},{order.shippingAddress.district},{order.shippingAddress.localArea}
                  </Typography>
                  <Divider />
                  <Typography variant="h6">Products:</Typography>
                  <List>
                    {order.products.map((product) => (
                      <ListItem key={product._id}>
                        <ListItemAvatar>
                          <Avatar
                            src={`http://localhost:8080/${productDetails[product.product]?.img}`}
                            alt={productDetails[product.product]?.brand}
                          />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <Typography>
                              {productDetails[product.product]?.brand.toUpperCase()} ({productDetails[product.product]?.year}) {productDetails[product.product]?.processor}, {productDetails[product.product]?.memory}GB,
                              {productDetails[product.product]?.storage} SSD
                            </Typography>
                          }
                          secondary={
                            <>
                              <Typography>Quantity: {product.quantity}</Typography>
                              <Typography>Price: ₹ {product.price}</Typography>
                            </>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                  <Button variant="outlined" color="secondary" onClick={() => handleDeleteOrder(order._id)}>
                    Delete Order
                  </Button>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message="Order deleted successfully!"
      />
    </Container>
  );
};

export default Dashboard;
