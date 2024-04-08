import React, { useState, useEffect } from "react";
import HomeSlider from "./HomeSlider";
import Header from "./Header";
import HomeShop from "./HomeShop";
import HomeFreshArrival from "./HomeFreshArrival";
import HomeUsage from "./HomeUsage";
import Footer from "../Components/./subComponents/Footer";
import HomeDailyusage from "./HomeDailyusage";
import HomeRefurbished from "./HomeRefurbished";
import HomeCompanySlider from "./HomeCompanySlider";
import UserReview from "./UserReview";
import HomeSection from "./HomeSection";
import Dropdown from "./Dropdown";
import "../Styles/Loader.css"

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) with setTimeout
    const fetchData = () => {
      setTimeout(() => {
        setLoading(false); // Set loading to false after data is fetched
      }, 1600); // Simulating a 2-second loading time
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      {loading ? (
        // Loader component (you can replace this with your preferred loader)
        <div className="loader" style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100px',
          height: '100px',
        }}>
          <span className="loader"></span>
        </div>
      ) : (
        // Content to be displayed after loading
        <>
          <Header />
          <HomeSlider />
          <HomeShop />
          <HomeFreshArrival />
          <HomeUsage />
          <HomeDailyusage />
          <HomeRefurbished />
          <HomeCompanySlider />
          <UserReview />
          <HomeSection />
          <Dropdown />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
