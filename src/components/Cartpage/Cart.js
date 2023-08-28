import React, { useEffect, useState, useContext } from 'react'
// import "./Styles.css"
import "./Cart.css"
import SingleProduct from '../Homepage/SingleProduct'
import { CartState } from '../Context'

const Cart = ({theme}) => {

    const [total, setTotal] = useState();
    const {cart} = CartState();

    useEffect(()=>{
        setTotal(cart.reduce((acc, curr)=>acc + Number(curr.price),0));
    },[cart]);

  return (
    <div className={theme === 'light' ? "cart-page" : "dark-cart-page"}>
    {/* <div className="dart-cart-page"> */}
        <h1>Your Cart Items </h1>
        <h2>Total: ${total}</h2>
        <div className="productContainer">
          {cart.map((prod)=>(
            <SingleProduct 
              prod={prod}
              key={prod.id}
              theme={theme}
            />
          ))}
        </div>
    </div>
  )
}

export default Cart
