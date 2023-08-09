const initialState = {
    reviews: null, uploading: false, error: false, loading: false
}

const ReviewsReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'ADD_REVIEW_START':
            return { ...state, uploading: true }

        case 'ADD_REVIEW_SUCCESS':
            return { ...state, uploading: false }

        case 'ADD_REVIEW_ERROR':
            return { ...state, error: true, uploading: false }

        case 'GET_REVIEW_START':
            return { ...state, loading: true }

        case 'GET_REVIEW_SUCCESS':
            return { ...state, loading: false, reviews: action?.payload }

        case 'GET_REVIEW_ERROR':
            return { ...state, error: true, loading: false }

        default:
            return state;

    }

}


export default ReviewsReducer;