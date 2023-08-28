import React, { createContext, useContext, useState } from 'react'
import Data from './Data';

const Cart = createContext();

const Context = ({children}) => {
    const [cart, setCart] = useState([]);

    const productsArray = Data.map((data)=>({
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description
    }))

    const [products] = useState(productsArray)

  return (
    <Cart.Provider value={{cart, setCart, products}}>
        {children}
    </Cart.Provider>
  )
}

export const CartState = () =>{
    return useContext(Cart);
};

export default Context
