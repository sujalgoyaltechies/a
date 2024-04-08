import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import AddProduct from "./Components/admin/AddProduct";
import UpdateProduct from "./Components/admin/UpdateProduct";
import OrderList from "./Components/admin/OrderList";
import ProductList from "./Components/admin/ProductList";
import Home from "./Components/Home"
import Login from "./Components/Login"

import Signup from "./Components/Signup"
import Product from "./Components/Products/Product";
import Order from "./Components/Order";
import AllProduct from "./Components/Products/AllProduct";
import Contact from "./Components/subComponents/Contact";
import Dell from "./Components/Brands/Dell";
import Hp from "./Components/Brands/Hp";
import Lenovo from "./Components/Brands/Lenovo";
import Apple from "./Components/Brands/Apple";
import Under25000 from "./Components/Budget/Under25000";
import Under30000 from "./Components/Budget/Under30000";
import Under35000 from "./Components/Budget/Under35000";
import Under45000 from "./Components/Budget/Under45000";
import About from "./Components/About";
import Collection from "./Components/Collection";
import FaQs from "./Components/FaQs";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import ShippingPolicy from "./Components/ShippingPolicy";
import Profile from "./Components/Profile";
import UserPrivate from "./Components/UserPrivate"
import I3 from "./Components/Processor/I3";
import I5 from "./Components/Processor/I5";
import I7 from "./Components/Processor/I7";
import AddSlider from "./Components/admin/AddSlider";
import AdminContact from "./Components/admin/AdminContact";
import SliderList from "./Components/admin/SliderList";
import AdminPrivate from "./Components/admin/AdminPrivate";
import ClearanceSale from "./Components/ClearanceSale";
import Errorpage from "./Components/Errorpage";
import  WhatsApp  from "./Components/WhatsApp";

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  const isDashboard = location.pathname === "/dashboard";
  const isProductRoute =
    location.pathname === "/addProduct" ||
    location.pathname === "/orderlist" ||
    location.pathname === "/productlist" ||
    location.pathname === "/addslider" ||
    location.pathname === "/admincontact" ||
    location.pathname === "/sliderlist" ||
    location.pathname.includes("/editProduct/");

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {(isDashboard || isProductRoute) && <Sidebar />}
          <main className="content">
            {(isDashboard || isProductRoute) && <Topbar />}
            <Routes>
            <Route element={<AdminPrivate   />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/addProduct" element={<AddProduct />} />
              <Route path="/orderlist" element={<OrderList />} />
              <Route path="/productlist" element={<ProductList />} />
              <Route path="/addslider" element={<AddSlider />} />
              <Route path="/admincontact" element={<AdminContact />} />
              <Route path="/sliderlist" element={<SliderList />} />
              <Route
                path="editProduct/:productId"
                element={
                  <>
                    <UpdateProduct />
                  </>
                }
              />
              </Route>
              <Route element={<UserPrivate/>}>
              <Route path="/profile" element={<Profile />} />

              </Route>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="/order" element={<Order />} /> */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/clearancesale" element={<ClearanceSale />} />
              <Route path="/allproduct" element={<AllProduct />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/dell" element={<Dell />} />
              <Route path="/hp" element={<Hp />} />
              <Route path="/lenovo" element={<Lenovo />} />
              <Route path="/apple" element={<Apple />} />
              <Route path="/Under25000" element={<Under25000 />} />
              <Route path="/Under30000" element={<Under30000 />} />
              <Route path="/Under35000" element={<Under35000 />} />
              <Route path="/Under45000" element={<Under45000 />} />
              <Route path="/i3" element={<I3 />} />
              <Route path="/i5" element={<I5 />} />
              <Route path="/i7" element={<I7 />} />

              <Route path="/about" element={<About />} />
              <Route path="/collection" element={<Collection />} />
              <Route path="/Faq" element={<FaQs />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/shippingpolicy" element={<ShippingPolicy />} />
              <Route path="*" element={<Errorpage/>} />
              <Route path="/demo" element={<WhatsApp />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
