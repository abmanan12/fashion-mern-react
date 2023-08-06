import React, { createContext, useContext, useEffect, useReducer } from 'react'
import CartReducer from '../reducers/CartReducer'

const CartContext = createContext()

const getLocalCartData = () => {
    let localCartData = localStorage.getItem('addCart')
    if (localCartData === null) {
        return []
    }
    else {
        return JSON.parse(localCartData)
    }
}

const initalState = {
    cart: getLocalCartData()
}

export default function CartContextProvider({ children }) {

    const [state, dispatch] = useReducer(CartReducer, initalState)


    const addToCart = singleProduct => {
        dispatch({ type: 'ADD_CART_PRODUCT', payload: singleProduct })
    }


    const removeItem = id => {
        dispatch({ type: 'REMOVE_ITEM', payload: id })
    }


    useEffect(() => {
        localStorage.setItem('addCart', JSON.stringify(state.cart))
    }, [state.cart])


    return (
        <>
            <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}