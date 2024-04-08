import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "../Components/./subComponents/Footer";
import Cookies from "js-cookie";
import axios from "axios";
import "../Styles/Profile.css";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegUser } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { flexibleCompare } from "@fullcalendar/core";
import ProfileLogo from '../Image/profile.png'

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [productDetails, setProductDetails] = useState({});
  const [activeSection, setActiveSection] = useState("profile");
  const [loadingOrder, setLoadingOrder] = useState(false);
  const userToken = Cookies.get("usertoken");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/users/${userToken}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userToken]);

  const fetchOrderData = () => {
    setLoadingOrder(true);
    axios.get(`http://localhost:8080/order/user/${userToken}`)
      .then((response) => {
        setOrderData(response.data);
        setLoadingOrder(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingOrder(false);
      });
  };

  const fetchProductDetails = (productId) => {
    axios.get(`http://localhost:8080/product/${productId}`)
      .then((response) => {
        setProductDetails(prevState => ({
          ...prevState,
          [productId]: response.data
        }));
      console.log(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (orderData) {
      orderData.forEach(order => {
        order.products.forEach(product => {
          fetchProductDetails(product.product);
        });
      });
    }
  }, [orderData]);

  useEffect(() => {
    fetchOrderData();
  }, []);

  const handleProfileClick = () => {
    setActiveSection("profile");
  };

  const handleOrderClick = () => {
    setActiveSection("order");
  };

  const handleLogout = () => {
    // Show confirmation dialog before logging out
    confirmAlert({
      title: "Confirm Logout",
      message: "Are you sure you want to log out?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            try {
              Cookies.remove("usertoken");
              localStorage.clear("name");
              console.log("Logout successful");
            } catch (error) {
              console.error("Error while logging out:", error);
            }

            // const navigate = useNavigate(); // Commented out if not using the hook

            // Check if navigate is available (e.g., using react-router-dom v6)
            if (navigate) {
              navigate("/login");
            }

            // Reload the page
            // window.location.reload();
          },
        },
        {
          label: "No",
          onClick: () => {
            // Do nothing if "No" is clicked
            // console.log("Logout canceled");
          },
        },
      ],
    });
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div style={{ display: "" }}>
        {/* Sidebar */}
        <div
          style={{
            alignItems : "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#f0f0f0",
            // padding: "20px",
          }}
        >
           
          <ul style={{
            listStyle :"none",
            textAlign :"left",
            display :"flex",
            width :"100%"
             
          }}>
            <li>
              <button className="profile-btn"  onClick={handleProfileClick}>
              <FaRegUser style={{marginRight:"10px"}}/>
                Profile
              </button>
            </li>
            <li>
              <button className="profile-btn"  onClick={handleOrderClick}>
              <FaCartArrowDown style={{marginRight:"10px"}} />
                Order
              </button>
            </li>
            <li>
              <button className="profile-btn" onClick={handleLogout}>
              <MdLogout style={{marginRight:"10px"}} />
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* Main Content */}
        <div style={{ padding: "20px", textAlign:"center" , justifyContent  :"center" , display : "flex"  }}>
          {activeSection === "profile" && userData && (
            <div className="profile-div">
             
              <div className="profile-form">
                <div>
                  <img src={ProfileLogo} width={"80px"} height={"80px"} />
                <h3>Profile</h3>
                </div>
              
                <div className="profile-name">
                  <h6>Name : </h6> <span>{userData.name}</span>
                </div>
                <div className="profile-name">
                  <h6>Email :</h6> <span> {userData.email}</span>
                </div>
                <div className="profile-name">
                  <h6>Number :</h6>  <span> {userData.number}</span>
                </div>
              </div>
            </div>
          )}
          {activeSection === "order" && (
            <div>
              {loadingOrder ? (
                <p>Loading...</p>
              ) : orderData ? (
                orderData.map((order) => (
                  <div key={order._id} className="card mb-3" style={{ maxWidth: "540px" }}>
                  <h6 style={{fontWeight : "bold"}}>Order ID: <span style={{ fontWeight : "400" }}>{order._id}</span> </h6>
                  <p style={{fontWeight : "bold"}}>Phone No: <span style={{ fontWeight : "400" }}>{order.phoneNo}</span> </p>
                    <p style={{fontWeight : "bold" , padding : "0px 10px"}}>Shipping Address: <span style={{ fontWeight : "400" }}>{order.shippingAddress.addressLine1},{order.shippingAddress.localArea},{order.shippingAddress.district}/{order.shippingAddress.state},( {order.shippingAddress.pincode} ),{order.shippingAddress.country.slice(0,3).toUpperCase()}</span> </p>
                  <div className="row g-0">
                    
                  {order.products.map((product) => (
  <div key={product._id} className="card mb-3" style={{ maxWidth: "540px"  }}>
    <div className="row g-0">
      <div className="col-md-4">
        <img src={`http://localhost:8080/${productDetails[product.product]?.img}`} width={"80%"} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <p className="card-text">
          
{productDetails[product.product]?.brand.toUpperCase()} ({productDetails[product.product]?.year}){productDetails[product.product]?.processor} ,{productDetails[product.product]?.memory}GB,{productDetails[product.product]?.storage} SSD / </p>
          <p className="card-text"><small className="text-muted">Quantity: {product.quantity}</small></p>
          <p className="card-text"><small className="text-muted">Price: {product.price}</small></p>
        </div>
      </div>
    </div>
  </div>
))}


                  </div>
                </div>
                
                  
                ))
              ) : (
                <p>No orders found.</p>
              )}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;