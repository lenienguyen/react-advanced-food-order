import { createContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {},
})

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)

        const updatedItems = [...state.items]

        if(existingCartItemIndex > -1){
            const existingItem = state.items[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1
            }
            updatedItems[existingCartItemIndex] = updatedItem
        } else {
            updatedItems.push({...action.item, quantity: 1})
        }

        // copy old state and update it
        return { ...state, items: updatedItems }
    }

    if(action.type === 'REMOVE'){
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)

        const existingCartItem = state.items[existingCartItemIndex]


        const updatedItems = [...state.items];
        if(existingCartItem.quantity === 1){
            /* const updatedItems = state.items.filter(item => item.id !== action.id) */
            updatedItems.splice(existingCartItemIndex, 1)
        } else {
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1
            }

            updatedItems[existingCartItemIndex] = updatedItem
        }

        return { ...state, items: updatedItems }
    }

    if(action.type === 'CLEAR_CART'){
        return { ...state, items: [] }
    }

    return state;
}


export function CartContextProvider({children}) {
    const [cart, dispatchCart] = useReducer(cartReducer, { items: []})

    const addItem = item => {
        dispatchCart({type: 'ADD', item})
    };

    const removeItem = id => {
        dispatchCart({type: 'REMOVE', id})
    };

    const clearCart = () => {
        dispatchCart({type: 'CLEAR_CART'})
    }

    const cartContext = {
        items: cart.items,
        addItem,
        removeItem,
        clearCart
    }

    return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
}


export default CartContext;