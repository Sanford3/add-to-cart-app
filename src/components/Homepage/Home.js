import React, { useContext, useState } from 'react'

import "./Home.css"
import Data from '../Data'
import SingleProduct from './SingleProduct'
import CartContext, { CartState } from "../Context"
const Home = ({theme}) => {

  const {products} = CartState();

  return (
    <div className={theme==='light'? "homepage" : "dark-homepage"}>
      <h1 className={theme==='light'?'heading':'dark-heading'}>Shop Online From SanTech Stores</h1>
        <div className={theme==='light'?"productContainer":"dark-productContainer"}>
            {products.map((prod)=>(
                <SingleProduct prod={prod} key={prod.id} theme={theme}/>
            ))}
        </div>
    </div>
  )
}

export default Home
