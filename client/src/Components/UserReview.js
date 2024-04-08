import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import axios from 'axios';

import "../Styles/Userreview.css";

const UserReview = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Fetch data when component mounts
        axios.get("http://localhost:8080/reviews")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // Empty dependency array to ensure useEffect runs only once

    const settings = {
        dots: false,
        fade: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <FaArrowRight style={{ color: 'black' }} />,
        prevArrow: <FaArrowLeft style={{ color: 'black' }} />,
    };

    return (
        <div className='user-review-div'>
            <div className='user-review-head'>
                <h1>User Reviews</h1>
            </div>
            <div className='author-con'>
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={index} className='author-div'>
                            <div className='author-content'>
                                <h3>{item.user}</h3>
                                <h6>User Name</h6>
                                <hr />
                                <p>“{item.content}”</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default UserReview;
