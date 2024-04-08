import React from 'react'
import "../Styles/Collection.css"
import Header from './Header'
import Footer from "../Components/./subComponents/Footer";
import Second from '../Image/Untitled design.png'
const Collection = () => {
  return (
    <>
    <Header />
    <div style={{textAlign:"center",
  fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>
    <h1>Collection</h1>
    <div className='collection-div'>
      
           <div className='collection-div-card'>
            <div>
           <img src={Second} alt="" width={"100%"} height={"100%"} />
            </div>
            <p>Basic Renewed Laptop</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Business Refurbished Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
              
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            
            <p>Clearance Sale</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Computer & Laptop Accessories</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Laptop</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

          
            </div>
            
            <p>Newarrivals</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Refurbished Apple Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Refurbished Dell Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

          
            </div>
            
            <p>Refurbished Gaming Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Refurbished HP Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Refurbished i3 Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />
   
          
            </div>
            
            <p>Refurbished i5 Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Refurbished i7 Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Refurbished Laptop Above 30000</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />
   
          
            </div>
            
            <p>Refurbished Laptop Above 35000</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />
 
            </div>
            <p>Refurbished Lenovo Laptops</p>
           </div>
           <div className='collection-div-card'>
            <div>
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            <p>Refurbished Laptop Under 25000</p>
           </div>
           <div className='collection-div-card'>
            <div>
              
            <img src={Second} alt="" width={"100%"} height={"100%"} />

            </div>
            
            <p>Refurbished Laptop Under 30000</p>
           </div>

           
           
    </div>
    </div>
    <Footer />
    </>
  )
}

export default Collection