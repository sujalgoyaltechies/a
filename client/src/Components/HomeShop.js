import React from 'react'
import "../Styles/Homeshop.css"
import Logo1 from '../Image/Lenovo.webp'
import Logo2 from '../Image/Dell.webp'
import Logo3 from '../Image/Apple.webp'
import Logo4 from '../Image/HP.webp'
import Price1 from '../Image/20_000_1.webp'
import Price2 from '../Image//5.webp'
import Price3 from '../Image/UNDER_30K_53266617-f04a-470e-a175-9476d1992072.webp'
import Price4 from '../Image/refurbished_laptop_1.webp'
import { Link } from 'react-router-dom'
const HomeShop = () => {
  return (
    <>
    <div className='home-shop'>
        <div className='home-shop-left'>
                <div><h1>Shop By Brands</h1></div>
                <div className='home-shop-logo'>
                  <div><Link to="/dell"> <img src={Logo2} alt="" width={"135px"} height={"135px"}/></Link></div>
                  <div><Link to="/hp"> <img src={Logo4} alt="" width={"135px"} height={"135px"}/></Link></div>
                  <div><Link to="/lenovo"> <img src={Logo1} alt="" width={"135px"} height={"135px"}/></Link></div>
                  <div><Link to="/apple"> <img src={Logo3} alt="" width={"135px"} height={"135px"}/></Link></div>
                 

                </div>
        </div>
        <div className='home-shop-right'>
<div><h1>Shop By Budget</h1></div>
<div className='home-shop-logo'>
                  <Link to="/Under25000"><img src={Price1} width={"135px"} height={"135px"} alt="" /></Link>
                  <Link to="/Under30000"><img src={Price3} width={"135px"} height={"135px"} alt="" /></Link>
                  <Link to="/Under35000"><img src={Price2} width={"135px"} height={"135px"} alt="" /></Link>
                  <Link to="/Under45000"><img src={Price4} width={"135px"} height={"135px"} alt="" /></Link>
  
                </div>
        </div>
    </div>
    
    </>
  )
}

export default HomeShop