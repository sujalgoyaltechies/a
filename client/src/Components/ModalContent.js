// ModalContent.js
import React, { useState,useEffect } from "react";
import Cookies from 'js-cookie';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const ModalContent = ({ showModal, closeModal }) => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [localArea, setLocalArea] = useState("");
  const [showCancelConfirmation, setShowCancelConfirmation] = useState(false);
  const [cart, setCart] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = () => {
    // Retrieve cart data from local storage
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    // Calculate the length of the cart items and update the state
    setCartCount(cartData.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
              updateCartCount();
    }, 1000); // Adjust the interval duration as needed

    return () => clearInterval(interval);
}, []);

  

  const handlesubmit = async (e) => {
    e.preventDefault();

    const totalPrice = localStorage.getItem("price");
    const token = Cookies.get('usertoken') 

    const orderData = {
      user: username,
      userid:token,
      products: cart.map((item) => ({
        product: item._id,
        quantity: item.quantity,
        price: item.Price,
      })),
      totalAmount: totalPrice,
      shippingAddress: {
        addressLine1: localArea,
        pincode: pinCode,
        country: country,
        state: state,
        district: city,
        localArea: localArea,
      },
      phoneNo: phone,
    };

    console.log(orderData);

    try {
      const response = await axios.post(
        "http://localhost:8080/order/create-order",
        orderData
      );
      console.log(response.data);
      toast.success("Order placed successfully! Thank you for shopping with us.", { autoClose: 2000 });
      closeModal();
    } catch (error) {
      console.error(error);
    toast.error("Oops! Something went wrong while processing your order. Please try again later.", { autoClose: 2000 });

    }
  };

  const handleCancel = () => {
    setShowCancelConfirmation(true);
  };
  
  const handleCancelConfirmation = () => {
    console.log("Order cancelled");
    // Reset form fields
    setUsername("");
    setPhone("");
    setAddress("");
    setPinCode("");
    setCity("");
    setState("");
    setCountry("");
    setLocalArea("");
  
    setShowCancelConfirmation(false);
    closeModal();
  };
  
  const modalContainerStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    transform: showModal ? "translate(0, 0)" : "translate(0, -150%)",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.5s, opacity 0.5s 1s",
    animation: showModal ? "slideIn .9s forwards" : "none",
    backgroundColor: "#fff",
    zIndex: 1050,
    opacity: showModal ? 1 : 0,
    background: "transparent",
  };

  const handleNumberChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && inputValue.length <= 10) {
      setPhone(inputValue);
    }
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ ...modalContainerStyle, display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Checkout</h5>
            <button
              type="button"
              className="btn-close"
              onClick={handleCancel}
            ></button>
          </div>
          <div className="modal-body">
          
            <div className="row">
              {/* Left side form */}
              <div className="col-md-6 mb-3">

                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                 name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter the Name"
                  required
                />
                <label htmlFor="localArea" className="form-label">
                  Local Area
                </label>
                <input
                  type="text"
                  className="form-control"
                 name="localArea"
                  value={localArea}
                  onChange={(e) => setLocalArea(e.target.value)}
                  placeholder="Enter the LocalArea"

                  required
                />
                <label htmlFor="pinCode" className="form-label">
                  Pin Code
                </label>
                <input
                  type="text"
                  className="form-control"
                 name="pinCode"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  maxLength={6}
                      placeholder="Enter the Pincode"
                  required
                />

                <label htmlFor="state" className="form-label">
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                 name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  placeholder="Enter the State"

                  required
                />
                {/* Add other form fields as needed */}
              </div>

              {/* Right side cart summary details */}
              <div className="col-md-6">

                {/* Add cart summary details here */}
                <label htmlFor="email" className="form-label">
                  Phone No.
                </label>
                <input
                  type="phone"
                  className="form-control"
                 name="number"
                  value={phone}
                  onChange={handleNumberChange}
                      placeholder="Enter your Number"
                      maxLength={10}
                      required
                />
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  className="form-control"
                 name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter the Address"

                  required
                />
                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  type="text"
                  className="form-control"
                 name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter the City"

                  required
                />

                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                 name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder="Enter the Country"

                  required
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={closeModal}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handlesubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelConfirmation && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ ...modalContainerStyle, display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div
              className="modal-content"
              style={{
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#f8d7da",
                  color: "#721c24",
                  borderBottom: "1px solid #f5c6cb",
                }}
              >
                <h5 className="modal-title">Cancel Order</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCancelConfirmation(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  Cancel order? All progress will be lost, and the order will
                  not be completed.
                </p>
              </div>
              <div
                className="modal-footer"
                style={{ borderTop: "1px solid #f5c6cb" }}
              >
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCancelConfirmation(false)}
                >
                  No
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={handleCancelConfirmation}
                >
                  Yes, Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default ModalContent;
