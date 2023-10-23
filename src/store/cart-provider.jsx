import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
    items: [],
    totalAmount: 0,
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedItem = {
            ...action.item,
            amount: 1
        }
        const updatedItems = state.items.concat(updatedItem)
        const updatedAmount = state.totalAmount + action.item.amount * action.item.price

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingCartItem = state.items[existingCartItemIndex]

        const updatedAmount = state.totalAmount - existingCartItem.amount

        let updatedItems;

        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter(item => item.id !== action.id)
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalAmount: updatedAmount
        }
    }

    return initialCartState;
}

const CartProvider = props => {
    const [cart, dispatchCart] = useReducer(cartReducer, initialCartState)

    const addItemToCartHandler = item => {
        dispatchCart({type: 'ADD', item: item})
    };

    const removeItemFromCartHandler = id => {
        dispatchCart({type: 'REMOVE', id: id})
    };

    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;