import React, { useState } from "react";
import "../../Styles/Contact.css";
import Header from "../Header";
import Footer from "./Footer";

import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"; // Import the icons
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:8080/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Message sent successfully!");
          toast.success("Message sent successfully!");
          // Reset the form after successful submission
          setFormData({
            name: "",
            email: "",
            number: "",
            message: "",
          });
        } else {
          alert("Failed to send message. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };
  return (
    <>
      <Header />
      <ToastContainer />
      <div className="contact-div">
        <div className="contact-head">
          {/* <div className="contact-head-details">
            <h1>Contact Us</h1>
            <p>
              If you have any query you can comment us, By filling the form.
              Kindly find below the details through which you will be getting
              solution in 48hrs. You can also contact us at +91-9599-207-207
              availability. TIME: 10am to 7pm IST
            </p>
          </div> */}
        </div>

        <div className="main-form">
          <div className="main-form-left">
            <h1>Get in touch</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-floating">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="nameInput">Name</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  className="form-control"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="emailInput">Email</label>
              </div>
              <br />
              <div className="form-floating">
                <input
                  className="form-control"
                  type="tel"
                  placeholder="Your Phone Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="numberInput">Number</label>
              </div>
              <br />
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="messageInput">Comments</label>
              </div>
              <br />
              <button
                type="submit"
                style={{
                  width: "60%",
                  marginTop: "30px",
                  height: "60px",
                  border: "none",
                  padding: "0",
                  letterSpacing: ".2em",
                  fontFamily: "'Times New Roman', Times, serif",
                  backgroundColor: "#f49d10c3",
                  transition: "bottom 0.3s ease",
                  overflow: "hidden",
                }}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="form-right-detail">
            <div>
              <h2>Customer service</h2>
              <p><a href="mailto:pcssolutions13@gmail.com">pcssolutions13@gmail.com</a></p>

              <h2>Corporate Enquiries</h2>
              <p><a href="mailto:pcssolutions13@gmail.com">pcssolutions13@gmail.com</a></p>

              <h2>Follow us</h2>
              <FaFacebook
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              />
              <FaTwitter
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              />
              <FaInstagram
                style={{
                  marginRight: "20px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              />
              <FaYoutube style={{ cursor: "pointer", fontSize: "20px" }} />
            </div>
          </div>
        </div>

        <div className="form-footer">
          <h1>Store Info</h1>
          <p>
            LappyWaley provides high-quality pre-owned devices at the most
            affordable prices. We source the best refurbished laptops from
            reputable brands like Apple, Lenovo, HP and Dell. Understandably,
            you are doubtful about buying used laptops. So for your peace of
            mind, we also provide one year warranty on each product. This
            eliminates the risk of purchasing refurbished laptops. If you get
            any issues in future, the laptop will easily be repaired or
            replaced.
          </p>
          <p>
            G9 sai villa complex Perfect Computer Solution , Rajeev plaza ke
            samne, Dainik bhaskar office ke paas, 474009 Gwalior, Madhya pradesh
          </p>
          <p> Contact Us - +91-9755552430</p>
          {/* Email: hi@gorefurbo.com */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
