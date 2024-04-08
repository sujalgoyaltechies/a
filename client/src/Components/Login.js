import React, { useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      const { userData } = response.data;
      const token = response.data.userData.token;
      const name = response.data.userData.name;

      if (userData.email === "admin@gmail.com") {
        Cookies.set("admintoken", token, { expires: 1 / 24 });
        toast.success("Login successful!", {
          autoClose: 3000,
        });

        navigate("/dashboard");
      } else {
        Cookies.set("usertoken", token, { expires: 1 / 24 });
        localStorage.setItem("name", name);
        toast.success("Login successful!", {
          autoClose: 3000,
        });
        
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      // console.log(error.response.data.errors[0])
      if (
        Array.isArray(error.response.data.errors) &&
        error.response.data.errors.length > 0
      ) {
        toast.error(error.response.data.errors[0]);
      } else {
        toast.error("An error occurred while processing your request.");
      }
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
            textAlign: "center",
            padding: "20px",
            maxWidth: "550px",
            width: "100%",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Login</h3>
          <h5 style={{ marginBottom: "20px" }}>
            Don't have an account yet?
            <span>
              <Link
                to="/signup"
                style={{ textDecoration: "", color: "rgba(244, 157, 16, 0.765)" }}
              >
                {" "}
                Create account
              </Link>
            </span>
          </h5>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
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
              required
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
                color: "black",
                letterSpacing: ".2em",
                fontFamily: "'Times New Roman', Times, serif",
                backgroundColor: "#f49d10c3",
                transition: "bottom 0.3s ease",
                overflow: "hidden",
              }}
            >
              SIGN IN
            </button>
            <Link to="/"
                style={{ textDecoration: "none", color: "rgba(244, 157, 16, 0.765)" }}
             >
              Return to Store
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;
