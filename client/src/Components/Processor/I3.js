import React, { useEffect, useState } from "react";
import "../../Styles/Homefresh.css";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../Header";
import Footer from "../subComponents/Footer";

const I3 = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleFilterByRupees = () => {
    const filteredData = products.filter(
      (product) => product.Price >= minPrice && product.Price <= maxPrice
    );
    setFilteredProducts(filteredData);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/product/get")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  useEffect(() => {
    handleFilterByRupees();
  }, [minPrice, maxPrice]);

  const commonLinkStyles = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <>
      <Header />

      <div className="container px-4 text-center">
        <div className="row gx-5">
          <h2>Refurbished Dell Laptops</h2>
          <div className="col-12 col-md-3" style={{ marginTop: "23px" }}>
            <div className="p-3">
              {/* Slider for Price Filtering */}
              <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Filter by Price:
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <input
                        type="range"
                        id="priceRange"
                        min="0"
                        max="100000"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                        style={{ width: "100%" }}
                      />
                      <span>₹{maxPrice}</span>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="accordion-item" style={{ border: "none" }}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      Quick links{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse "
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <ul style={{ listStyle: "none", textAlign: "start" }}>
                        <li>
                          <Link to="/dell" style={commonLinkStyles}>
                            Dell
                          </Link>
                        </li>
                        <li>
                          <Link to="/hp" style={commonLinkStyles}>
                            HP
                          </Link>
                        </li>

                        <li>
                          <Link to="/lenovo" style={commonLinkStyles}>
                            Lenovo
                          </Link>
                        </li>
                        <li>
                          <Link to="/apple" style={commonLinkStyles}>
                            MacBook
                          </Link>
                        </li>

                        <hr />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-9">
            <div className="p-3">
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="home-fresh-body">
                  {products ? (
                    (filteredProducts.length > 0 ? filteredProducts : products)
                      .filter((e) => e.processor.toLowerCase() === "i3")
                      .map((product) => (
                        <div
                          key={product._id}
                          className="home-fresh-card col-12 col-md-6"
                        >
                          <div className="card-img">
                            <Link to={`/product/${product._id}`}>
                              <img
                                src={`http://localhost:8080/${product.img}`}
                                alt=""
                              />
                            </Link>
                            <div className="card-cart-btn"></div>
                          </div>
                          <div className="home-fresh-card-content">
                            <div>
                              <span>
                                Refurbished {product.brand}, {product.memory}GB
                                Ram, {product.storage} GB SSD
                              </span>
                            </div>
                            <div className="price">
                              <s>Rs. {product.originalPrice}</s>
                              <span> Rs. {product.Price}</span>
                            </div>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default I3;
