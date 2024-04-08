import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./subComponents/Footer";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/signup", {
        name:name,
        email:email,
        number:phone,
        password:password,
        confPassword: cpassword,
      });

      console.log(response.data);
      toast.success("Form submitted successfully!");

      setInterval(() => {
        navigate("/login");

      }, 5000);
    } catch (error) {
      // console.log(error.response.data.errors[0])
      if (Array.isArray(error.response.data.errors) && error.response.data.errors.length > 0) {
        toast.error(error.response.data.errors[0]);
      }
       else {
        toast.error("An error occurred while processing your request.");
      }
    }
  };

  const handleNumberChange = (e) => {
    const inputValue = e.target.value;
    if (!isNaN(inputValue) && inputValue.length <= 10) {
      setPhone(inputValue);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70vh",
        }}
      >
        <div
          style={{
            padding: "20px",
            maxWidth: "550px",
            width: "100%",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Create Account</h3>
          <h5 style={{ marginBottom: "20px" }}>
           Already
            <span>
              <Link
                to="/login"
                style={{ textDecoration: "", color: "rgba(244, 157, 16, 0.765)" }}
              >
                {" "}
                Login
              </Link>
            </span>
          </h5>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter the Name"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter the Email"
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={handleNumberChange}
              placeholder="Enter the Number"
              maxLength={10}
              required
            />
          </div>
          <div style={{ marginBottom: "20px", position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the Password"
            />
            <span
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "10px", // Adjust the right position as needed
                top: "50%", // Center vertically
                transform: "translateY(-50%)",
              }}
              onClick={togglePasswordVisibility}
            >
              {showPassword ? (
                <i className="fas fa-eye-slash"></i>
              ) : (
                <i className="fas fa-eye"></i>
              )}
            </span>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <input
              type="password"
              className="form-control"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              placeholder="Enter the Confirm Password"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <button
              className="btn btn-primary"
              onClick={handleSubmit}
              style={{
                width: "60%",

                height: "40px",
                border: "none",
                 color:"black",
                letterSpacing: ".2em",
                fontFamily: "'Times New Roman', Times, serif",
                backgroundColor: "#f49d10c3",
                transition: "bottom 0.3s ease",
                overflow: "hidden",
              }}            >
              CREATE
            </button>
            <Link to="/" style={{ textDecoration: "none" }}>
              Return to Store
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Signup;
