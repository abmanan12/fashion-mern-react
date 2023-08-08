const CartReducer = (state, { type, payload }) => {

    switch (type) {

        case 'ADD_CART_PRODUCT':

            const { singleProduct, amount } = payload;

            let existing = state.cart?.find(curElem => {
                return curElem._id === singleProduct._id
            })

            if (existing) {

                let updateProduct = state.cart.map(curElem => {

                    let newAmount = curElem.amount + amount

                    if (newAmount >= curElem.quantity) {
                        newAmount = curElem.quantity
                    }
                    return {
                        ...curElem,
                        amount: newAmount
                    }

                })
                return {
                    ...state,
                    cart: updateProduct
                }
            }
            else {

                singleProduct.amount = amount

                return {
                    ...state,
                    cart: [...state.cart, singleProduct],
                }
            }



        case 'SET_INCREASED':

            let increaseProduct = state.cart.map((curElem) => {

                if (curElem._id === payload) {

                    let increament = curElem.amount + 1

                    if (increament >= curElem?.quantity) {
                        increament = curElem?.quantity
                    }
                    return {
                        ...curElem,
                        amount: increament
                    }

                }
                else {
                    return curElem
                }
            })

            return {
                ...state,
                cart: increaseProduct
            }


        case 'SET_DECREASED':

            let decreaseProduct = state.cart.map((curElem) => {

                if (curElem._id === payload) {

                    let decreament = curElem.amount - 1;

                    if (decreament <= 1) {
                        decreament = 1
                    }
                    return {
                        ...curElem,
                        amount: decreament
                    }

                }
                else {
                    return curElem
                }
            })

            return {
                ...state,
                cart: decreaseProduct
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