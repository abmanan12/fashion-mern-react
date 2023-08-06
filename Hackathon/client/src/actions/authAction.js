import axios from 'axios'

const URL = 'http://localhost:5000'


// register api
export const register = (formData) => async (dispatch) => {

    dispatch({ type: 'AUTH_START' })

    try {

        const { data } = await axios.post(`${URL}/register`, formData)
        dispatch({ type: 'AUTH_SUCCESS', payload: data })

    } catch (error) {
        dispatch({ type: 'AUTH_ERROR' })
        console.log(error?.response.data);
    }
}


// login api
export const login = (formData) => async (dispatch) => {

    dispatch({ type: 'AUTH_START' })

    try {

        const { data } = await axios.post(`${URL}/login`, formData)
        dispatch({ type: 'AUTH_SUCCESS', payload: data })

    } catch (error) {
        dispatch({ type: 'AUTH_ERROR' })
        console.log(error?.response.data);
    }
}

// forgot password send email api
export const sendEmail = (username) => async (dispatch) => {

    dispatch({ type: 'AUTH_START' })

    try {

        const { data } = await axios.post(`${URL}/sendEmail`, { username })
        return data

    } catch (error) {
        return error?.response.data
    }
}

// forgot password reset api
export const resetPassword = (password, resetToken) => async (dispatch) => {

    dispatch({ type: 'AUTH_START' })

    try {

        const { data } = await axios.post(`${URL}/resetPassword`, { password, resetToken })
        dispatch({ type: 'RESET_SUCCESS', payload: data })

    } catch (error) {
        return error?.response.data
    }
}


// logout
export const logout = () => async (dispatch) => {
    dispatch({ type: 'SET_LOGOUT' })
}


// upload image
export const uploadImage = file => async (dispatch) => {

    try {

        await axios.post(`${URL}/uploadImage`, file)

    } catch (error) {
        // console.log(error);
        console.log(error?.response.data);
    }

}