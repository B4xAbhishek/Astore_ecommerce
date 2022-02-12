import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'
import './ProductCarousel.css'

function ProductCarousel() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };


  return(

    <Carousel 
    className="carousel__size">
      <Carousel.Item interval={1000}
      className="carousel__item">
        <img
          className="carousel__img"
          src="https://ibb.co/X4zdCfN"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}
      className="carousel__item">
        <img
          className="carousel__img"
          src="/images/sneaker2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}
      className="carousel__item">
        <img
          className="carousel__img"
          src="/images/third.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}
      className="carousel__item">
        <img
          className="carousel__img"
          src="/images/sneaker4.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>

  )

}

export default ProductCarousel ;
