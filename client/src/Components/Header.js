import React, { useEffect, useState } from "react";
import "../Styles/Header.css";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { FaHome } from "react-icons/fa";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { MdClose } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalContent from "./ModalContent";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoIosChatbubbles } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faBars,
  faUserCircle,
  faCartPlus,
  faShop,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem } from "reactstrap";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Image5 from "../Image/5.jpg";
import Image6 from "../Image/6.jpg";
import Image7 from "../Image/7.jpg";
import Image8 from "../Image/8.jpg";
import Image9 from "../Image/9.png";
import Image10 from "../Image/10.png";
import Image13 from "../Image/13.png";
import Image14 from "../Image/14.jpg";
import Image15 from "../Image/15.jpg";
import WhatsApp from "../Image/whatsapp.png";

const Header = () => {
  const [cartLength, setCartLength] = useState(0); // Add state for cart length
  const [showImages, setShowImages] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [showProcessor, setShowProcessor] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from your API
        const response = await fetch(`http://localhost:8080/product/get`);
        const data = await response.json();

        // Filter data based on searchQuery
        const filteredData = data.filter((item) => {
          const searchQueryLower = searchQuery.toLowerCase();

          // Check if any field (name, processor, price, brand) contains the searchQuery
          const nameMatch = item.name.toLowerCase().includes(searchQueryLower);
          const processorMatch = item.processor
            .toLowerCase()
            .includes(searchQueryLower);
          const brandMatch = item.brand
            .toLowerCase()
            .includes(searchQueryLower);

          // Exact price match or price less than or equal to entered price
          const priceMatch =
            parseFloat(item.Price) <= parseFloat(searchQueryLower);

          // Return true if any of the fields match the searchQuery
          return nameMatch || processorMatch || brandMatch || priceMatch;
        });

        setSearchResults(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Fetch data only if searchQuery is not empty
    if (searchQuery.trim() !== "") {
      fetchData();
    }
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchResults([]); // Clear search results when search query is cleared
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]); // Clear search results when search query is cleared
  };

  // Function to toggle the popup state
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const toggleDropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    // Close other dropdowns
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    // Close other dropdowns
    setIsDropdownOpen1(false);
    setIsDropdownOpen3(false);
  };

  const toggleDropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    // Close other dropdowns
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
  };

  const handleToggle = () => {
    setModalOpen(!isModalOpen);
  };

  const user = Cookies.get("usertoken");

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartLength(existingCart.length);
  }, []);

  const handleHover = () => {
    setShowImages(true);
  };

  const handleLeave = () => {
    setShowImages(false);
  };
  const handleHover1 = () => {
    setShowPrice(true);
  };

  const handleLeave1 = () => {
    setShowPrice(false);
  };
  const handleHover2 = () => {
    setShowProcessor(true);
  };

  const handleLeave2 = () => {
    setShowProcessor(false);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      setShowImages(true);
    }
  };

  const handleCartIconClick = () => {
    setCartModalOpen(!isCartModalOpen);
  };
  const modalContainerStyle = {
    position: "fixed",
    top: 0,
    right: isCartModalOpen ? 0 : "-100%",
    height: "100%",
    width: "45%",
    display: "flex",
    flexDirection: "column",
    transition: "right 0.5s, opacity 0.5s 1s",
    animation: isCartModalOpen ? "slideIn .9s forwards" : "none",
    backgroundColor: "#fff",
    zIndex: 1050,
    opacity: isCartModalOpen ? 1 : 0,
  };

  const modalContainerStyle1 = {
    position: "fixed",
    top: 0,
    left: isModalOpen ? 0 : "-100%", // Change from "right" to "left"
    height: "100%",
    width: "45%",
    display: "flex",
    flexDirection: "column",
    transition: "left 0.5s, opacity 0.5s 1s", // Update the transition property
    animation: isModalOpen ? "slideIn .9s forwards" : "none",
    backgroundColor: "#fff",
    zIndex: 1050,
    opacity: isModalOpen ? 1 : 0,
    marginTop: "36px",
    borderRadius: "30px", // Add border radius here
  };

  const modalContentStyle = {
    padding: "15px",
    flexGrow: 1,
  };

  const slideInKeyframes = `
    @keyframes slideIn {
      from {
        right: -100%;
        opacity: 0;
      }
      to {
        right: 0;
        opacity: 1;
      }
    }
  `;

  const styleElement = document.createElement("style");
  styleElement.appendChild(document.createTextNode(slideInKeyframes));
  document.head.appendChild(styleElement);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = () => {
    const storedCartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCartData(storedCartData);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity <= 0) {
      console.log("Quantity cannot be zero or negative.");
      return;
    }

    const updatedCart = [...cartData];
    const currentCartItem = updatedCart[index];

    const stockQuantity = currentCartItem.stockQuantity;

    if (newQuantity <= stockQuantity) {
      currentCartItem.quantity = newQuantity;
      setCartData(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      console.log(`Cannot add more than ${stockQuantity} items to the cart.`);
    }
  };

  const calculateItemTotal = (item) => {
    return parseFloat(item.Price) * parseFloat(item.quantity);
  };

  const calculateSubtotal = () => {
    return cartData.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleClearShoppingCart = () => {
    setCartData([]);
    localStorage.removeItem("cart");
  };

  const openModal = () => {
    localStorage.setItem("price", calculateSubtotal());

    setShowModal(true);
  };

  const closeModal = () => {
    localStorage.setItem("price", calculateSubtotal());
    setShowModal(false);
  };

  const hrStyle = {
    border: 0,
    height: "2px",
    backgroundImage:
      "linear-gradient(325deg, rgb(4, 156, 255) 0px, rgb(53, 238, 122))",
    margin: 0,
  };

  const tabs = [
    {
      route: "/",
      icon: faHome,
      label: "HOME",
    },
    {
      route: "#",
      icon: faBars,
      label: "MENU",
      onClick: handleToggle,
    },
    {
      route: "#",
      icon: faSearch,
      label: "SEARCH",
    },
    {
      route: "/allproduct",
      icon: faShop,
      label: "SHOP",
    },
    {
      route: "/login",
      icon: faUser,
      label: "ACCOUNT",
    },
  ];
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);

  const handleToggle1 = () => {
    setSearchModalOpen(!isSearchModalOpen);
  };
  if (user) {
    tabs.push({
      route: "/cart",
      icon: faCartPlus,
      label: "CART",
    });
  }

  return (
    <>
      <nav>
        <div className="nav-head">
          <span>Welcome to our store</span>
        </div>
        <div className="nav-body">
          <div className="search-btn">
            <button onClick={handleToggle1}>
              <CiSearch style={{ width: "2rem", height: "2rem" }} />
            </button>
          </div>
          <div className="logo">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h2>
                <span style={{ color: "rgb(4 229 254)" }}>Lappy</span>{" "}
                <span style={{ color: "#fe9c04" }}>Waley</span>
              </h2>
            </Link>
          </div>
          <div className="nav-body-right">
            <div className="nav-avatar">
              {user ? (
                <div className="nav-cart">
                  <button onClick={handleCartIconClick}>
                    <CiShoppingCart style={{ width: "2rem", height: "2rem" }} />
                    {cartLength > 0 && <sup>{cartLength}</sup>}
                  </button>
                  <button>
                    <Link to="/profile" style={{ color: "#fe9c04" }}>
                      <FaHome style={{ width: "2rem", height: "2rem" }} />
                    </Link>
                  </button>
                </div>
              ) : (
                <button>
                  <Link to="/login" style={{ color: "#f49d10c3" }}>
                    <RxAvatar style={{ width: "2rem", height: "2rem" }} />
                  </Link>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="main-navbar">
          <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                onClick={handleToggle}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li
                    className="nav-item"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                  >
                    <Link className="nav-link" to="#">
                      <span>SHOP BY BRAND</span>
                    </Link>
                    {showImages && (
                      <div
                        className="images-container"
                        style={{
                          position: "absolute",
                          top: "50px",
                          left: "0",
                          zIndex: "100",
                          background: "white",
                          maxHeight: "400px",
                          overflow: "hidden",
                          opacity: "1",
                          transition: "opacity 5s ease-in-out",
                          width: "100%",
                        }}
                      >
                        <div
                          className="image-wrapper"
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "20px",
                            width: "100%",
                          }}
                        >
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/dell">
                              {" "}
                              <img
                                src={Image5}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/dell">
                                <span>Dell</span>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/hp">
                              {" "}
                              <img
                                src={Image6}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/hp">
                                <span>HP</span>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/lenovo">
                              {" "}
                              <img
                                src={Image7}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/lenovo">
                                <span>Lenovo</span>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/apple">
                              {" "}
                              <img
                                src={Image8}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/apple">
                                <span>MacBook</span>
                              </Link>
                            </div>
                          </div>
                          {/* Add similar blocks for Image 2, Image 3, and Image 4 */}
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={handleHover1}
                    onMouseLeave={handleLeave1}
                  >
                    <Link className="nav-link" to="#">
                      <span>SHOP BY PRICE</span>
                    </Link>
                    {showPrice && (
                      <div
                        className="images-container"
                        style={{
                          position: "absolute",
                          top: "50px",
                          left: "0",
                          zIndex: "100",
                          background: "white",
                          maxHeight: "400px",
                          overflow: "hidden",
                          opacity: "1",
                          transition: "opacity 5s ease-in-out",
                          width: "100%",
                        }}
                      >
                        <div
                          className="image-wrapper"
                          style={{
                            display: "flex",

                            gap: "20px",
                            paddingLeft: "11.5%",
                            width: "100%",
                          }}
                        >
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/under35000">
                              {" "}
                              <img
                                src={Image9}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/under35000">
                                <span>UNDER 35000</span>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/under45000">
                              {" "}
                              <img
                                src={Image10}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/under45000">
                                <span>UNDER 45000</span>
                              </Link>
                            </div>
                          </div>

                          {/* Add similar blocks for Image 2, Image 3, and Image 4 */}
                        </div>
                      </div>
                    )}
                  </li>
                  <li
                    className="nav-item"
                    onMouseEnter={handleHover2}
                    onMouseLeave={handleLeave2}
                  >
                    <Link className="nav-link" to="#">
                      <span>SHOP BY PROCESSOR</span>
                    </Link>
                    {showProcessor && (
                      <div
                        className="images-container"
                        style={{
                          position: "absolute",
                          top: "50px",
                          left: "0",
                          zIndex: "100",
                          background: "white",
                          maxHeight: "400px",
                          overflow: "hidden",
                          opacity: "1",
                          transition: "opacity 5s ease-in-out",
                          width: "100%",
                        }}
                      >
                        <div
                          className="image-wrapper"
                          style={{
                            display: "flex",

                            gap: "20px",
                            paddingLeft: "11.5%",
                            width: "100%",
                          }}
                        >
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/i3">
                              {" "}
                              <img
                                src={Image13}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/i3">
                                <span>I3</span>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/i5">
                              {" "}
                              <img
                                src={Image14}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/i5">
                                <span>I5</span>
                              </Link>
                            </div>
                          </div>
                          <div
                            className="image-item"
                            style={{ marginRight: "10px" }}
                          >
                            <Link to="/i7">
                              {" "}
                              <img
                                src={Image15}
                                alt="Image 1"
                                className="animated-image"
                              />
                            </Link>
                            <div className="image-title">
                              <Link className="nav-link" to="/i7">
                                <span>I7</span>
                              </Link>
                            </div>
                          </div>

                          {/* Add similar blocks for Image 2, Image 3, and Image 4 */}
                        </div>
                      </div>
                    )}
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/clearancesale">
                      <span>CLEARANCE SALE</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      <span>CORPORATE ENQUIRIES</span>
                    </Link>
                  </li>
                  {/* Add other navbar items here */}
                </ul>
              </div>
            </div>
          </nav>

          {/* Modal */}
          {isModalOpen && (
            <div className="modal-container" style={modalContainerStyle1}>
              <div
                className="modal-bg"
                onClick={() => setModalOpen(false)}
              ></div>

              <div className="modal-content" style={modalContentStyle}>
                <div className="modal-header">
                  <h5 className="modal-title">Lappy Waley</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setModalOpen(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <ul className="navbar-nav">
                    <li
                      className="nav-item special-li"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="nav-link" onClick={toggleDropdown1}>
                        <span>SHOP BY BRAND</span>
                      </div>
                      {isDropdownOpen1 && (
                        <div className="dropdown-content">
                          <ul className="navbar-nav">
                            {/* Add dropdown content here */}
                            <li className="nav-item ">
                              <Link className="nav-link" to="/dell">
                                <span>1.Dell</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/hp">
                                <span>2.Hp</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/lenovo">
                                <span>3.Lenovo</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/apple">
                                <span>4.MacBook</span>
                              </Link>
                            </li>
                            {/* Add more brands as needed */}
                          </ul>
                        </div>
                      )}
                    </li>
                    <hr />
                    <li
                      className="nav-item special-li"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="nav-link" onClick={toggleDropdown2}>
                        <span>SHOP BY PRICE</span>
                      </div>
                      {isDropdownOpen2 && (
                        <div className="dropdown-content">
                          <ul className="navbar-nav">
                            {/* Add dropdown content here */}
                            <li className="nav-item">
                              <Link className="nav-link" to="/under35000">
                                <span>1.UNDER 35000</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/under45000">
                                <span>2..UNDER 45000</span>
                              </Link>
                            </li>

                            {/* Add more brands as needed */}
                          </ul>
                        </div>
                      )}
                    </li>
                    <hr />
                    {/* Add other modal navbar items here */}
                    <li
                      className="nav-item special-li"
                      style={{ marginTop: "20px" }}
                    >
                      <div className="nav-link" onClick={toggleDropdown3}>
                        <span>SHOP BY PROCESSOR</span>
                      </div>
                      {isDropdownOpen3 && (
                        <div className="dropdown-content">
                          <ul className="navbar-nav">
                            {/* Add dropdown content here */}
                            <li className="nav-item">
                              <Link className="nav-link" to="/i3">
                                <span>1.i3</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/i5">
                                <span>2.i5</span>
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to="/i7">
                                <span>2.i7</span>
                              </Link>
                            </li>

                            {/* Add more brands as needed */}
                          </ul>
                        </div>
                      )}
                    </li>
                    <hr />
                    {/* Add other modal navbar items here */}
                    <li className="nav-item special-li">
                      <Link className="nav-link" to="/contact">
                        <span>CORPORATE ENQUIRIES</span>
                      </Link>
                    </li>
                    <hr />
                    {/* Add other modal navbar items here */}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {isCartModalOpen && (
          <div className="modal-container" style={modalContainerStyle}>
            <div
              className="modal-bg"
              onClick={() => setCartModalOpen(false)}
            ></div>
            <div className="modal-content" style={modalContentStyle}>
              <div className="modal-header">
                <h5
                  className="modal-title"
                  style={{
                    textTransform: "uppercase",
                    letterSpacing: "0.2rem",
                  }}
                >
                  Cart
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setCartModalOpen(false)}
                ></button>
              </div>
              <hr style={hrStyle} />
              <div className="modal-body">
                {cartData.length === 0 ? (
                  <div style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "18px" }}>
                      Your cart is currently empty.
                    </p>
                    <Link to="/allproduct" className="btn btn-primary">
                      Return To Shop
                    </Link>
                  </div>
                ) : (
                  <div>
                    <div
                      className="table-responsive"
                      style={{
                        overflowY: "auto",
                        maxHeight: "300px",
                        marginBottom: "10px",
                      }}
                    >
                      <table className="table">
                        <tbody>
                          {cartData.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <img
                                  src={`http://localhost:8080/${item.img}`}
                                  alt=""
                                  style={{ width: "70px" }}
                                />
                              </td>
                              <td>
                                Refurbished {item.model.slice(0, 13)},{" "}
                                {item.generation}th Gen / {item.memory}GB RAM /{" "}
                                {item.storage}GB SSD
                                <p>
                                  <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                      handleQuantityChange(
                                        index,
                                        parseFloat(e.target.value)
                                      )
                                    }
                                    className="form-control"
                                    style={{ width: "60px", marginTop: "7px" }}
                                  />
                                </p>
                                <p>Price: ₹ {item.Price}</p>
                              </td>
                              <td>
                                <p onClick={() => handleRemoveItem(index)}>
                                  <MdClose />
                                </p>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p>Total: ₹{calculateSubtotal()}</p>

                    <div>
                      <button
                        onClick={() => setCartModalOpen(false)}
                        className="btn btn-primary"
                        style={{ margin: "10px" }}
                      >
                        Continue Shopping
                      </button>
                      <button
                        onClick={handleClearShoppingCart}
                        className="btn btn-danger"
                        style={{ margin: "10px" }}
                      >
                        Clear Cart
                      </button>

                      <button
                        onClick={() => openModal()}
                        className="btn btn-primary btn-block"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
      <ModalContent showModal={showModal} closeModal={closeModal} />
      {/* <ToastContainer /> */}
      <div>
        <div className="whatsapp-logo" onClick={togglePopup}>
          <img src={WhatsApp} alt="whatsapp" />
        </div>
        {isPopupOpen && (
          <div className="popup">
            <div className="btn-div">
              <button className="close-btn" onClick={togglePopup}>
                <IoMdCloseCircleOutline
                  style={{
                    width: "40px",
                    height: "30px",
                  }}
                />
              </button>
            </div>

            {/* Content of your popup */}
            <div className="whatsapp-div-text">
              <h3>HI THERE!</h3>
              <p>
                We are here to help you! Chat with us on WhatsApp for any
                queries.
              </p>
            </div>
            <div className="chat-btn-div">
              <button className="chat-btn">
                <IoIosChatbubbles
                  style={{
                    width: "30px",
                    height: "20px",
                  }}
                />
                START CHAT
              </button>
            </div>
          </div>
        )}
      </div>
      <nav
        className="navbar fixed-bottom navbar-light d-md-none d-lg-none"
        role="navigation"
        style={{ backgroundColor: "rgb(228, 251, 255)" }}
      >
        <Nav className="w-100">
          <div className="d-flex flex-row justify-content-around w-100">
            {tabs.map((tab, index) => (
              <NavItem
                key={`tab-${index}`}
                onClick={
                  tab.label === "SEARCH"
                    ? handleToggle1 // Condition for SEARCH tab
                    : tab.label === "MENU"
                    ? handleToggle // Condition for MENU tab
                    : undefined // No action for other tabs
                }
              >
                <NavLink
                  to={tab.route}
                  className="nav-link"
                  activeClassName="active"
                  style={{ padding: "3px" }}
                >
                  <div
                    className="row d-flex flex-column justify-content-center align-items-center"
                    style={{
                      color: "rgb(209, 129, 5)",
                      fontSize: "10px",
                      textAlign: "center",
                      alignContent : 'center'
                    }}
                  >
                    <FontAwesomeIcon size="2x" icon={tab.icon} />
                    <div>{tab.label}</div>
                  </div>
                </NavLink>
              </NavItem>
            ))}
          </div>
        </Nav>
      </nav>
      {isSearchModalOpen && (
        <div
          className="search-modal"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
            display: "block",
            overflow: "auto",
            backgroundColor: "rgba(0,0,0,0.5)",
            transition: "opacity 3s ease, visibility 3s ease",
          }}
        >
          {/* Bootstrap modal code */}
          <div
            className="modal fade show"
            style={{
              display: "block",
              zIndex: 1050,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            <div className="modal-fullscreen-xl-down">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleToggle1}
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Your search modal content goes here */}
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your search query..."
                      value={searchQuery}
                      onChange={handleSearchInputChange}
                    />
                    {searchQuery && (
                      <button
                        onClick={handleClearSearch}
                        style={{
                          position: "absolute",
                          top: "50%",
                          right: "10px",
                          transform: "translateY(-50%)",
                          background: "none",
                          border: "none",
                          cursor: "pointer",
                        }}
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    )}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "70vh",
                    }}
                  >
                    <ul>
                      {searchQuery && searchResults.length === 0 ? (
                        <>
                          <p
                            style={{
                              // textAlign: "center",
                              fontWeight: "bold",
                              fontSize: "20px",
                            }}
                          >
                            No results found for "{searchQuery}"
                          </p>
                          <p>
                            Check the spelling or use a different word or phrase
                          </p>
                        </>
                      ) : (
                        searchResults.length > 0 && (
                          <>
                            <div style={{ textAlign: "start" }}>
                              <p
                                style={{ fontWeight: "bold", fontSize: "24px" }}
                              >
                                Product
                              </p>
                              <hr />
                            </div>

                            <ul
                              style={{
                                display: "flex",
                                flexWrap: "wrap",
                                maxWidth: "100%", // Adjust this value as needed
                                overflowX: "auto",
                              }}
                            >
                              {searchResults.map((result, index) => (
                                <Link
                                  to={`/product/${result._id}`}
                                  style={{
                                    textDecoration: "none",
                                    color: "black",
                                  }}
                                >
                                  <li
                                    key={index}
                                    style={{
                                      display: "inline-flex",
                                      alignItems: "center",
                                      marginRight: "10px", // Adjust spacing between items
                                      marginBottom: "10px", // Adjust spacing between rows
                                    }}
                                  >
                                    <img
                                      src={`http://localhost:8080/${result.img}`}
                                      alt=""
                                      style={{
                                        width: "90px",
                                        height: "90px",
                                        marginRight: "10px",
                                      }}
                                    />
                                    <div>
                                      <h7>{result.name}</h7>
                                      <p>
                                        Refurbished {result.model} (
                                        {result.year}) {result.processor},{" "}
                                        {result.memory}GB Ram, {result.storage}
                                        GB SSD
                                      </p>
                                      <p>
                      
                      <s>
                      Rs.
                        <i> {result.originalPrice}</i>
                      </s>{" "}
                      <span style={{color: "#d72c0d"}}>
                      Rs. {result.Price}
                      </span>
                    </p>

                                     
                                    </div>
                                  </li>
                                </Link>
                              ))}
                            </ul>
                          </>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;