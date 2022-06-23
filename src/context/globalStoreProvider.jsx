import StoreContext from "./storeContext";
import {useState} from "react";


const GlobalStoreProvider = (props) => {
    
    const [cart, setCart] = useState([]);
    const [user, setUser] = useState({name: "admin", id: 42});

    const addProdToCart = () => {
        console.log("Global add prod");


    let copy = [...cart];
    let found = false;
    for (let i=0; i< copy.length; i++) {
        let item =  copy[i];

        if (item._id ===prod._id) {
            found = true;
            item.qantity += prod.quantity;
        }


    }    
        
        if (!found) {
             copy.push(prod);
        }
       
        setCart(copy);
    
    
    };



    const removeProdFromCart = (_id) => {
        console.log("Global remove prod");

       let copy = [...cart];

       for (let i=0; i< copy.length; i++) {
           if (copy[i]._id ===_id) {
            copy.splice(i, 1);
           }
       }
    }


    return (
        <StoreContext.Provider 
        value={{
            cart: cart,
            user: user,
            addProdtoCart:  addProdToCart,
            removeProdFromCart:  removeProdFromCart,

        }}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default GlobalStoreProvider