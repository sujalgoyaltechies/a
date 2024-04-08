import React from 'react'
import Header from './Header'
import Footer from "../Components/./subComponents/Footer";

const ShippingPolicy = () => {
  return (
    <>
    <Header></Header>
    <hr />
    <div className='about-div'>
       
      <div>
        <h1>Shipping & Return Policy</h1>
        <h2>SHIPPING</h2>
        <p>Lappy Waley ues DTDC or Bluedart as their delivery partner. On confirmation of the order by the customer, Lappy Waley shall deliver the products to the location specified by the customer. The cost of the delivery shall be borne by Lappy Waley.The Customer shall be present at the location at the time of delivery agreed between Lappy Waley and the customer. In case the customer is unavailable at the time of delivery the Customer shall appoint a representative (give an authorization letter) for taking delivery of the Products and the same shall be communicated to Lappy Waley prior to the delivery. The representative shall provide a copy of his/her ID proof and authorization letter from the Customer to the delivery personnel assigned by Lappy Waley. In case the Customer is not present or has not assigned a representative for taking delivery, at the location and a second delivery attempt is required, Lappy Waley shall charge an extra delivery cost to the Customer. The Customer shall ensure the entry of delivery vehicles inside the premises where the delivery location is situated and ensure that prior permission is obtained for the use of the elevator of the building, for delivery of the Products to the location. </p>
        <h2>Return and Refund</h2>
        <p>In the unlikely scenario wherein any product delivered by Lappy Waley is found to be damaged, the customer shall have the option to return the product and seek another product (with the same specifications) or seek refund of the amount paid by him/her. Please note that in case you receive a damaged product please notify us within 24 hours of delivery if you want a refund, after 24 hours Lappy Waley shall refund or replace the product but the buyer is liable for any cost of damage after the product is returned and inspected.</p>
        <p>In case the buyer is not satisfied by their product, Lappy Waley offers a 3 days return policy, making sure the buyer returns the product in the same condition as they received it. The buyer is liable for any cost of damage after the product is returned and inspected.</p>
        <p>Lappy Waley undertakes to replace the defective product within 24 Hours of receipt of information from the customer. In case the customer has asked for a refund within 2 days of delivery , the same shall be processed within 7 business days from the receipt of intimation by the customer. The refund shall be processed through the same means by which the payment was made.</p>
      </div>
  
     
    </div>
    <hr />
    <Footer></Footer>
    </>
  )
}

export default ShippingPolicy