import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { Message } from '../components/Message'
import { addToCart } from '../actions/cartActions'

function CartScreen({ match, Location, history }) {
  //  const productId = match.params.id 
  //  const qty = Location.search ? Location.search.split('=') : 1
  //  console.log('qty:', qty)


    return (
        <div>
            <Link to='/' className='btn btn-ligth my-3'>Go back:</Link>
            No user coins at the moment
        </div>
    )
}

export default CartScreen
