import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'


const CartButtons = ({customStyle, productId}) => {
    const [state, setState] = useState(0);
    const {count, setCount} = useContext(CartContext);
    
    const handleMoreClick = () => {
        setState(state + 1);
    }
    const handleLessClick = () => {
        setState(state - 1);
        }

    const addToCart = () => {
        const existingProduct = count.products.find(
            (p) => p.productId === productId
        );
        if (existingProduct) {
            existingProduct.qty += state; 
        } else {
            const newProduct = {
                productId, 
                qty: state,
            };
            setCount((prevState) => ({
                qtyItems: prevState.qtyItems + state,
                products: [...prevState.products,newProduct],
            })   )
        }
    }

    return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <div style={{margin:"10px"}}>
            <Button variant="outline-secondary" className="rounded-0" onClick={handleLessClick} >
            -
            </Button>
            <span style={{margin: "15px", fontSize: "18px"}}>{state}</span>
            
            {/*<input type="text"
            className="form-control form-control-sm text-center rounded-0"
            placeholder="Cantidad custom"
            id="valueInput"
            value="0"
            /> */}
            
            <Button variant="outline-secondary" className="rounded-0" onClick={handleMoreClick} >
            +
            </Button>
        </div>
        <Button  className="m1-2" variant={customStyle} onClick={addToCart} >
        Agregar al Carrito
        </Button>

    </div>
)
}

export default CartButtons;