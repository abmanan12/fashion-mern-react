const initialState = {
    products: [], recentProducts: [], uploading: false, error: false, loading: false
}

const ProductReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_PRODUCT_START':
            return { ...state, uploading: true }

        case 'ADD_PRODUCT_ERROR':
            return { ...state, error: true, uploading: false }

        case 'GET_PRODUCT_START':
            return { ...state, loading: true }

        case 'GET_PRODUCT_SUCCESS':
            return { ...state, loading: false, products: action?.payload, recentProducts: action?.payload?.slice(0, 8) }

        case 'GET_PRODUCT_ERROR':
            return { ...state, error: true, loading: false }

        default:
            return state;

    }

}


export default ProductReducer;