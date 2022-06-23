import "./cart.css";
import { useContext} from "react";
import StoreContext from "../context/storeContext";
import ProductInCart from "./productInCart";


const Cart = () => {
    let cart = useContext(StoreContext).cart;

    const getTotal = () => {
        let total= o;
        for (let i=0; i<cart.length; i++) {
            let prod = cart [i];
            total += prod.price * prod.quantity;
        }

        return total.toFixed[2];
    };

    const getNumItems = () => {
        let total = 0;
        for (let i=0; i< cart.length; i++) {
            total += cart[i].quantity;
        }

        return total;
    };

    return (
        <div className="cart">
            <h6>We have {cart.length} product(s) ready for you.</h6>
            <h3>Ready to place your order?</h3>
            <hr />

            <div className="parents">
                <div className="products">
                    {cart.map((prod) => (
                    <ProductInCart key={prod._id} data={prod}></ProductInCart>
                    ))}

                </div>    
           

           
           
                <div className="total-panel">
                    <h3>Your Total:</h3>
                    <h2>${getTotal()}</h2>

                </div>
            </div> 
        </div>  
    );
};

export default Cart;