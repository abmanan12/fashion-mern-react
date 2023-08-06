const initialState = {
    authData: [], loading: false, error: false
}

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'AUTH_START':
            return { ...state, loading: true }


        case 'AUTH_SUCCESS':
            // localStorage.setItem('hackathonUser', JSON.stringify(action?.payload))
            return { ...state, loading: false, authData: action?.payload }


        case 'AUTH_ERROR':
            return { ...state, error: true, loading: false }


        case 'RESET_SUCCESS':
            return { ...state, error: false, loading: false, authData: action?.payload }


        case 'SET_LOGOUT':
            localStorage.removeItem('hackathonStore');
            return { ...state, authData: [] }


        default:
            return state;

    }

}


export default AuthReducer;