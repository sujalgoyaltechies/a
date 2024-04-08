import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Logo1 from '../Image/pngwing.com (1).png';
import Logo2 from '../Image/pngwing.com (2).png';
import Logo3 from '../Image/pngwing.com (3).png';
import Logo4 from '../Image/pngwing.com (4).png';
import Logo5 from '../Image/pngwing.com (5).png';

import '../Styles/Homecompany.css';

const HomeCompanySlider = () => {
  var settings = {
    dots: false,
    infinite: true, // Set to true for infinite loop
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set the autoplay speed in milliseconds (2 seconds in this example)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='home-company-slider'>
      <div className='     div1'>
        <Slider {...settings}>
         
          <img src={Logo1} width={"10px"} height={"10px"} alt='' />
          <img src={Logo2} width={"10px"} height={"10px"} alt='' />
          <img src={Logo3} width={"10px"} height={"10px"} alt='' />
          <img src={Logo4} width={"10px"} height={"10px"} alt='' />
          <img src={Logo5} width={"10px"} height={"10px"} alt='' />
          <img src={Logo1} width={"10px"} height={"10px"} alt='' />
          <img src={Logo2} width={"10px"} height={"10px"} alt='' />
          <img src={Logo3} width={"10px"} height={"10px"} alt='' />
          <img src={Logo4} width={"10px"} height={"10px"} alt='' />
          <img src={Logo5} width={"10px"} height={"10px"} alt='' />
          <img src={Logo1} width={"10px"} height={"10px"} alt='' />
          <img src={Logo3} width={"10px"} height={"10px"} alt='' />
           
        </Slider>
      </div>
    </div>
  );
};

export default HomeCompanySlider;
