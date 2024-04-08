import React from 'react'
import Header from './Header'
import Footer from './subComponents/Footer'
import "../Styles/Errorpage.css"
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <>
    <Header />
    <div className='Error-page'>
      <div className='error-page-div'>
         <div>
            <h1>OOPS<span style={{
                color:"red"
            }}>!</span></h1>
            <h2>404 - THE PAGE CAN'T BE FOUND</h2>
         </div>
         
        <Link to="./"> <button>GO TO HOME</button></Link>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Errorpage