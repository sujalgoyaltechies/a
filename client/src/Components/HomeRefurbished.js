import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../Styles/Homerefurbished.css"
import Cookies from 'js-cookie';
import { Link, useNavigate} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const HomeRefurbished = () => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/product/get")
      .then((response) => {
        setData(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAddToCart = (selectedProduct) => { // Pass selectedProduct as an argument
    const isLoggedIn = Cookies.get('usertoken');

    if (!isLoggedIn) {
      alert('Please login first.');
      navigate("/login")
    } else {
      const productWithDefaultQuantity = {
        ...selectedProduct, 
        quantity: selectedProduct.quantity || 1,
      };

      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, productWithDefaultQuantity];
      
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Product Added to cart!");

      setTimeout(() => {
        window.location.reload();
      }, 4500);

      console.log("Product added to cart:", productWithDefaultQuantity);
    }
  };
  return (
    <>
    <div className='home-refurbished-div'>
        <div className='home-refurbished-head'>
            <h1>Refurbished HP Laptops</h1>
        </div>
        <div className="home-fresh-body">
          {data.filter((e) => e.brand.toLowerCase() === "hp").slice(0,4).map((item) => (
            <div key={item._id} className="home-fresh-card">
              <div className="card-img">
              <Link to={`/product/${item._id}`}>
               <img
                  src={`http://localhost:8080/${item.img}`}
                  alt=""
                />
                </Link>
                <div className="card-cart-btn">
                <button onClick={() => handleAddToCart(item)}>Add to cart</button>
                </div>
              </div>
              <div className="home-fresh-card-content">
                <div>
                  <span>{item.name.toUpperCase()} / {item.brand}</span>
                </div>
                <div className="price">
                  <s>Rs . {item.originalPrice}</s>
                  <span> Rs. {item.Price}</span>
                </div>
              </div>
            </div>
          ))}
    
        </div>
        <div className="home-fresh-div-btn">
        <Link to="/hp" style={{textDecoration:"none",color:"black"}}> <button> VIEW ALL</button></Link>
        </div>
    </div>
    </>
  )
}

export default HomeRefurbished