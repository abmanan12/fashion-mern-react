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


// delete a product api
export const deleteProduct = id => async (dispatch) => {
    try {
        await axios.get(`${URL}/deleteproduct/${id}`)
    }
    catch (error) {
        console.log(error?.response.data);
    }
}


// update a product api
export const updateProduct = product => async (dispatch) => {
    try {
        await axios.put(`${URL}/updateproduct/${product._id}`, product)
    }
    catch (error) {
        console.log(error?.response.data);
    }
}


// upload image api
export const uploadImage = file => async (dispatch) => {
    try {
        await axios.post(`${URL}/uploadImage`, file)
    }
    catch (error) {
        console.log(error?.response.data);
    }
}


// dlete image api
export const deleteImage = image => async (dispatch) => {
    try {
        await axios.post(`${URL}/deleteImage`, { image })
    }
    catch (error) {
        console.log(error?.response.data);
    }
}