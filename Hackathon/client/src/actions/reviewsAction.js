import axios from 'axios'

const URL = 'http://localhost:5000'


// publish reviews api
export const publishReview = userData => async (dispatch) => {

    dispatch({ type: 'ADD_REVIEW_START' })

    try {
        await axios.post(`${URL}/reviews`, userData)
        dispatch({ type: 'ADD_REVIEW_SUCCESS' })
    }
    catch (error) {
        console.log(error);
        dispatch({ type: 'ADD_REVIEW_ERROR' })
    }
}


// get reviews api
export const getIdReviews = id => async (dispatch) => {

    dispatch({ type: 'GET_REVIEW_START' })

    try {
        const { data } = await axios.get(`${URL}/getReviews/${id}`)
        dispatch({ type: 'GET_REVIEW_SUCCESS', payload: data })
    }
    catch (error) {
        dispatch({ type: 'GET_REVIEW_ERROR' })
        console.log(error?.response);
    }

}