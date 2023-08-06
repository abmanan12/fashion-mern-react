const CartReducer = (state, { type, payload }) => {

    switch (type) {

        case 'ADD_CART_PRODUCT':

            let existing = state.cart?.find(curElem => {
                return curElem._id === payload._id
            })

            if (!existing) {
                return {
                    ...state,
                    cart: [...state.cart, payload],
                }
            }
            else {
                return {
                    ...state,
                    cart: [...state.cart],
                }
            }


        case 'REMOVE_ITEM':

            let updateCart = state.cart?.filter(curElem => {
                return curElem._id !== payload
            })

            return {
                ...state,
                cart: updateCart
            }


        default:
            return state

    }

}

export default CartReducer