import React, { useState, useEffect } from "react";
import Header from "../Header";
import { IoPricetagsOutline, IoReturnDownBackOutline } from "react-icons/io5";
import { GrCheckboxSelected } from "react-icons/gr";
import { CiCircleQuestion } from "react-icons/ci";
import { LiaShippingFastSolid } from "react-icons/lia";
import Footer from "../subComponents/Footer";
import ProductSlider from "../subComponents/ProductSlider";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from 'styled-components'
import ProductDropDown from "../subComponents/ProductDropDown";
 

function Product() {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  const navigate = useNavigate();
  const Button = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid black;
  padding: 0px 0px;
  margin-top: 20px;
  letter-spacing: .2em;
  font-family: 'Times New Roman', Times, serif;
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease;
  overflow: hidden;
  cursor: pointer;
  color: black;

  &:hover {
    background: black;
    color: white;
  }
`;

  useEffect(() => {
    // Fetch product data based on the productId
    axios
      .get("http://localhost:8080/product/" + productId)
      .then((response) => {
        setProduct(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }, [productId]); // Fetch data whenever productId changes

  const handleAddToCart = () => {
    // Get existing cart data from local storage
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const isLoggedIn = Cookies.get("usertoken");

    if (!isLoggedIn) {
      // If not logged in, show an alert

      alert("Please login first.");
      navigate("/login");
    } else {
      const productWithDefaultQuantity = {
        ...product,
        quantity: product.quantity || 1,
      };

      // Add the current product to the cart
      const updatedCart = [...existingCart, productWithDefaultQuantity];

      // Store the updated cart data in local storage
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Product added to cart!");

      setTimeout(() => {
        window.location.reload();
      }, 4500);

      console.log("Product added to cart:", productWithDefaultQuantity);
    }

    // Set a default quantity of 1 if the product quantity is not provided
  };

  const handleBuyItNow=()=>{
    alert("The working process is in progress. Please wait for completion.");
  }

  return (
    <>
      <Header />
      <div class="container px-4 text-center">
        <div class="row gx-5">
          <div class="container px-4 text-center">
            <div class="row gx-5">
              <div class="col">
                <div className="p-3" style={{ marginTop: "70px" }}>

                  <img
                    src={`http://localhost:8080/${product.img}`}
                    alt={product.altText}
                    className="image1 zoomable-image"
                    style={{
                      width: "520px", // Set a default width for all devices
                      height: "auto", // Maintain aspect ratio
                      
                    }}
                  />

                </div>
              </div>
              
              <div class="col">
                <div class="p-3">
                  <h5 style={{ textAlign: "start" }}>
                    <Link to="/" style={{ textDecoration: "none", color : "black" }}>
                      {" "}
                      Home
                    </Link>
                  </h5>
                  <hr />
                  <p style={{ textAlign: "start" }}>
                    {" "}
                    {product?.name?.toUpperCase()}
                  </p>
                  <hr />
                  <h5 style={{ textAlign: "start", marginLeft: "0" }}>
                    Refurbished {product.model} ({product.year}){" "}
                    {product.processor}, {product.memory}GB Ram,{" "}
                    {product.storage}
                    GB SSD
                  </h5>
                  <h5 style={{ textAlign: "start" }}>
                    <p>
                      
                      <s>
                      Rs.
                        <i> {product.originalPrice}</i>
                      </s>{" "}
                      <span style={{color: "#d72c0d"}}>
                      Rs. {product.Price}
                      </span>
                    </p>
                  </h5>

                  <div style={{ textAlign: "start" }}>
                    <p>
                      <GrCheckboxSelected
                        size="24px"
                        style={{ marginRight: "10px" }}
                      />
                      On Site Support{" "}
                    </p>
                    <p>
                      <IoPricetagsOutline
                        size="24px"
                        style={{ marginRight: "10px" }}
                      />
                      EMI Available At 0 Down Payment{" "}
                    </p>
                  </div>

                  <Button
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                    
                  >
                    ADD TO CART
                  </Button>
                  <button
                    className="btn btn"
                    style={{
                      width: "100%",
                      height: "40px",
                      marginTop: "10px",
                      background: "#f49e10",
                    }}
                    onClick={handleBuyItNow}
                  >
                    BUY IT NOW
                  </button>
                  {/* Start Details */}
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                    style={{ marginTop: "20px" }}
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseOne"
                          aria-expanded="false"
                          aria-controls="flush-collapseOne"
                          style={{ fontSize: "14px" }}
                        >
                          <CiCircleQuestion
                            size="25px"
                            style={{ marginRight: "7px" }}
                          />
                          DETAILS
                        </button>
                      </h2>
                      <div
                        id="flush-collapseOne"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          className="accordion-body"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          <table
                            style={{
                              width: "100%",
                              borderCollapse: "collapse",
                              border: "1px solid #ddd",
                            }}
                          >
                            <thead>
                              <tr
                                style={{
                                  border: "1px solid #ddd",
                                  backgroundColor: "#f2f2f2",
                                }}
                              >
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Brand
                                </th>
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product?.name?.toUpperCase()}
                                </th>
                                {/* Add more columns if needed */}
                              </tr>
                            </thead>
                            <tbody>
                              {/* Add your laptop data here */}
                              <tr style={{ border: "1px solid #ddd" }}>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Model
                                </td>
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product.model}
                                </th>
                              </tr>
                              <tr style={{ border: "1px solid #ddd" }}>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Processor
                                </td>
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product.processor}
                                </th>
                              </tr>
                              <tr style={{ border: "1px solid #ddd" }}>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Generation
                                </td>

                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product.generation}th
                                </th>
                              </tr>
                              <tr style={{ border: "1px solid #ddd" }}>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Ram
                                </td>
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product.memory} GB
                                </th>
                              </tr>
                              <tr style={{ border: "1px solid #ddd" }}>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Storage
                                </td>
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product.storage} GB SSD
                                </th>
                              </tr>
                              <tr style={{ border: "1px solid #ddd" }}>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Touchscreen{" "}
                                </td>
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product.display}
                                </th>
                              </tr>

                              <tr style={{ border: "1px solid #ddd" }}>
                                <td
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  Graphic{" "}
                                </td>
                                <th
                                  style={{
                                    border: "1px solid #ddd",
                                    padding: "8px",
                                    textAlign: "left",
                                  }}
                                >
                                  {product.graphics}
                                </th>
                              </tr>

                              {/* Add more rows if needed */}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseTwo"
                          aria-expanded="false"
                          aria-controls="flush-collapseTwo"
                          style={{ fontSize: "14px" }}
                        >
                          <LiaShippingFastSolid
                            size="25px"
                            style={{ marginRight: "7px" }}
                          />
                          SHIPPING{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseTwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          class="accordion-body"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          <p style={{ textAlign: "start" }}>SHIPPING</p>
                          <p style={{ textAlign: "start", fontSize: "11px" }}>
                            Lappywaley ues DTDC or Bluedart as their delivery
                            partner. On confirmation of the order by the
                            customer, Lappywaley shall deliver the products to
                            the location specified by the customer. The cost of
                            the delivery shall be borne by Lappywaley.The
                            Customer shall be present at the location at the
                            time of delivery agreed between Lappywaley and the
                            customer.
                          </p>
                          <p style={{ textAlign: "start", fontSize: "11px" }}>
                            In case the customer is unavailable at the time of
                            delivery the Customer shall appoint a representative
                            (give an authorization letter) for taking delivery
                            of the Products and the same shall be communicated
                            to Lappywaley prior to the delivery.
                          </p>
                          <p style={{ textAlign: "start", fontSize: "11px" }}>
                            The representative shall provide a copy of his/her
                            ID proof and authorization letter from the Customer
                            to the delivery personnel assigned by Lappywaley. In
                            case the Customer is not present or has not assigned
                            a representative for taking delivery, at the
                            location and a second delivery attempt is required,
                            Lappywaley shall charge an extra delivery cost to
                            the Customer.
                          </p>
                          <p style={{ textAlign: "start", fontSize: "11px" }}>
                            The Customer shall ensure the entry of delivery
                            vehicles inside the premises where the delivery
                            location is situated and ensure that prior
                            permission is obtained for the use of the elevator
                            of the building, for delivery of the Products to the
                            location.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseThree"
                          aria-expanded="false"
                          aria-controls="flush-collapseThree"
                          style={{ fontSize: "14px" }}
                        >
                          <IoReturnDownBackOutline
                            size="25px"
                            style={{ marginRight: "7px" }}
                          />
                          RETURNS & REFUNDS{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseThree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          class="accordion-body"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          <p style={{ textAlign: "start" }}>
                            Return and Refund
                          </p>
                          <p style={{ textAlign: "start", fontSize: "11px" }}>
                            In the unlikely scenario wherein any product
                            delivered by Lappywaley is found to be damaged, the
                            customer shall have the option to return the product
                            and seek another product (with the same
                            specifications) or seek refund of the amount paid by
                            him/her. Please note that in case you receive a
                            damaged product please notify us within 24 hours of
                            delivery if you want a refund, after 24 hours
                            Lappywaley shall refund or replace the product but
                            the buyer is liable for any cost of damage after the
                            product is returned and inspected.
                          </p>
                          <p style={{ textAlign: "start", fontSize: "11px" }}>
                            In case the buyer is not satisfied by their product,
                            Lappywaley offers a 3 days return policy, making
                            sure the buyer returns the product in the same
                            condition as they received it. The buyer is liable
                            for any cost of damage after the product is returned
                            and inspected.
                          </p>
                          <p style={{ textAlign: "start", fontSize: "11px" }}>
                            Lappywaley undertakes to replace the defective
                            product within 24 Hours of receipt of information
                            from the customer. In case the customer has asked
                            for a refund within 2 days of delivery , the same
                            shall be processed within 7 business days from the
                            receipt of intimation by the customer. The refund
                            shall be processed through the same means by which
                            the payment was made.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapseFour"
                          aria-expanded="false"
                          aria-controls="flush-collapseFour"
                          style={{ fontSize: "14px" }}
                        >
                          <GrCheckboxSelected
                            size="25px"
                            style={{ marginRight: "7px" }}
                          />
                          WARRANTY{" "}
                        </button>
                      </h2>
                      <div
                        id="flush-collapseFour"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          class="accordion-body"
                          style={{ maxHeight: "200px", overflowY: "auto" }}
                        >
                          <p
                            style={{
                              textAlign: "start",
                              fontSize: "14px",
                              lineHeight: "2.2",
                              marginBottom: "10px",
                            }}
                          >
                            <ol>
                              <li> Laptop Warranty - Upto 2 Years</li>
                              <li>
                                Liquid damages are not covered in our warranty
                                scheme
                              </li>
                              <li>
                                3 months battery warranty. (Battery backup 1 to
                                2 hours)
                              </li>
                              <li>
                                We provide a new charger for the laptop of the
                                same brand with warranty.
                              </li>
                              <li>3 months hinge warranty</li>
                              <li>
                                Please contact our support team immediately if
                                you receive a damaged laptop.
                              </li>
                              <li>
                                {" "}
                                Since the laptop warranty doesn't cover software
                                issues, service charges will apply.
                              </li>
                              <li>
                                Visiting Charge applicable after 2 free visits.
                                (@299/- per visit).
                              </li>
                            </ol>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* End Details */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
     
      </div>
      <ProductSlider />
      <ProductDropDown />
      <ToastContainer />
      <Footer />
    </>
  );
}

export default Product;
