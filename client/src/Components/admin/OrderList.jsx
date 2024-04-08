import React, { useState, useEffect } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/order/get-all-orders/"
      );

      if (Array.isArray(response.data)) {
        setOrders(response.data);
        console.log(response.data);
      } else {
        console.error("Invalid data structure:", response.data);
        // You may want to handle this case based on your application's requirements
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/${productId}`
      );

      if (response.status === 200) {
        console.log(`Product with ID ${productId} deleted successfully`);
        toast.success("Product deleted successfully!", {
          autoClose: 3000,
        });

        fetchData(); // Update the product list after deletion
      } else {
        console.error("Error deleting product");
        toast.error("Error deleting product!", {
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

  return (
    <div>
      <style>
        {`
          @media (max-width: 767px) {
            .sidebar {
              display: block;
              position: fixed;
              top: 0;
              left: 10;
              width: 100%;
              height: 100vh;
              overflow-y: auto;
            }

            .custom-table {
              width: 100%;
            }
          }
        `}
      </style>
      
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Order List
        </h2>
        <div className="container mt-3">
          <div className="table-responsive">
            <table className="table custom-table">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Phone No.</th>
                  <th>Quantities</th>
                  <th>Total Amount</th> 
                  <th>Shipping Address</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.user}</td>
                    <td>{order.phoneNo}</td>
                    <td>
                      {order.products
                        .map((product) => product.quantity)
                        .join(", ")}
                    </td>
                    <td>{order.totalAmount}</td>
                    <td>
                      <p>
                        {order.shippingAddress.addressLine1},
                        {order.shippingAddress.district},
                        {order.shippingAddress.state}(
                        {order.shippingAddress.pincode})
                      </p>
                    </td>

                    {/* <td>
                      <button
                        className="btn btn-danger btn-sm"
                        style={{ textDecoration: "none" }}
                        // onClick={() => handleDelete(order._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <ToastContainer />
    
    </div>
  );
}

export default OrderList;
