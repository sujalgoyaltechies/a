import React from 'react'
import "../Styles/Homeusage.css"
import Image1 from '../Image/v1.jpg'
import Image2 from '../Image/v2.jpg'
import Image3 from '../Image/v3.jpg'

const HomeUsage = () => {
  return (
    <>
    <div className='home-usage-div'>
      <div className='home-usage-head'>
        <h1>Shop by Usage</h1>
      </div>
      <div className='home-usage-main'>
          <img src={Image1} alt="" />
          <img src={Image2} alt="" />
          <img src={Image3} alt="" />
      </div>

    </div>
    </>
  )
}

export default HomeUsage