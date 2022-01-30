import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import './Product.css'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded product__card'>
      <Link to={`/product/${product._id}`}>
        <Card.Img className="product__img" src={product.image} variant='top' />
      </Link>

      <Card.Body className="product__cardbody">
        <Link to={`/product/${product._id}`}>
          <Card.Title className="product__name" as='div'>
            {product.name}
          </Card.Title>
        </Link>

        <Card.Text className="product__rating" as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
