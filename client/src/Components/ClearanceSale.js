import React from "react";
import Header from "./Header";
import Footer from "../Components/./subComponents/Footer";
import Image from "../Image/laptop-wooden-table.jpg";
import HomeFreshArrival from "./HomeFreshArrival";
function ClearanceSale() {
  return (
    <div>
      <Header />
      <div>
        <img src={Image} style={{ width: "100%", height: "350px" }} />
        <h2 style={{ textAlign: "center", marginTop: "50px" }}>
          Sorry, there are no products in this collection
        </h2>
      </div>
      <hr/>
      <div style={{marginTop:"100px"}}>
      <HomeFreshArrival/>

      </div>
      <Footer />
    </div>
  );
}

export default ClearanceSale;
