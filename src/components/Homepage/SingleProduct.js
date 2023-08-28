import { CartState } from "../Context";
import "./Home.css"
const SingleProduct = ({prod, theme}) => {

  const {cart, setCart} = CartState();

  return (
    <div className={theme==='light'?'product':'dark-product'}>
        <img src={prod.image} alt="Error" />
        <h2>{prod.name}</h2>
        <h3>${prod.price}</h3>
        <h4>{prod.description}</h4>

        {cart.includes(prod)? (<button className="add remove" onClick={()=> {setCart(cart.filter((c)=>c.id!==prod.id))}}>Remove From Cart</button>)
        : (<button className="add" onClick={() => setCart([...cart, prod])}>Add to Cart</button>)}

    </div>
  )
}

export default SingleProduct
