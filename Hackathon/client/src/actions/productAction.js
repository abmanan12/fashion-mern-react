import axios from 'axios'

const URL = 'http://localhost:5000'


// add products api
export const AddProducts = (formData) => async (dispatch) => {

    dispatch({ type: 'ADD_PRODUCT_START' })

    try {

        await axios.post(`${URL}/create-product`, formData)

    }
    catch (error) {
        dispatch({ type: 'ADD_PRODUCT_ERROR' })
        console.log(error?.response.data);
    }

}
// get products api
export const getProducts = () => async (dispatch) => {

    dispatch({ type: 'GET_PRODUCT_START' })

    try {

        const { data } = await axios.get(`${URL}/getallproducts`)
        dispatch({ type: 'GET_PRODUCT_SUCCESS', payload: data?.products })

    }
    catch (error) {
        dispatch({ type: 'GET_PRODUCT_ERROR' })
        console.log(error?.response.data);
    }

}


// upload image
export const uploadImage = file => async (dispatch) => {

    try {

        await axios.post(`${URL}/uploadImage`, file)

    }
    catch (error) {
        // console.log(error);
        console.log(error?.response.data);
    }

}