import React, { useEffect, useState } from 'react'

import { Rating } from '@mantine/core';
import { useDispatch, useSelector } from 'react-redux';
import { getIdReviews, publishReview } from '../actions/reviewsAction';

const initialValue = {
    review: ''
}

export default function UserReviews({ id }) {

    const dispatch = useDispatch()
    const [rating, setRating] = useState(0)
    const [state, setState] = useState(initialValue)
    const { user } = useSelector(state => state.AuthReducer?.authData)

    const { reviews, loading, uploading } = useSelector(state => state?.ReviewsReducer)

    const handleChange = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }


    const handleSubmit = async (e) => {

        e.preventDefault()

        if (rating === 0) {
            return console.log('Please select rating');
        }

        if (state.review.length < 4) {
            return console.log('Enter review properly');
        }

        let userData = state
        userData.rating = rating

        userData.productId = id
        userData.name = user?.name
        userData.userId = user?._id
        userData.username = user?.username

        try {
            await dispatch(publishReview(userData))
            dispatch(getIdReviews(id))

            setState(initialValue)
            setRating(0)
        }
        catch (error) {
            console.log(error);
        }
    }


    let ratingMessage;

    switch (rating) {
        case 1:
            ratingMessage = 'Very Bad'
            break;

        case 2:
            ratingMessage = 'Bad'
            break;

        case 3:
            ratingMessage = 'Good'
            break;

        case 4:
            ratingMessage = 'Very Good'
            break;

        case 5:
            ratingMessage = 'Excellent'
            break;

        default:
            ratingMessage = 'Select Rating'
    }


    useEffect(() => {
        dispatch(getIdReviews(id))
    }, [])

    return (
        <>

            <div className="container py-5">

                <div className="row product2-reviews px-3 px-md-0">

                    <div className="col-12 col-md-6">

                        {
                            loading ? <div className="text-green py-3">Loading...</div>

                                : reviews === 'No reviews found' ? <div className="text-Pa py-5">No reviews Exist</div>
                                    : reviews?.map(curElem => {
                                        return (
                                            <div key={curElem?._id}>
                                                <div className="mt-4 d-flex align-items-center">
                                                    <img src="/assets/images/dp.png" loading='lazy' alt="internet-error" width={60} height={50} />
                                                    <div className='ms-1'>
                                                        <h6 className='mb-1 text-H2'>{curElem?.name}</h6>
                                                        <Rating value={curElem?.rating} fractions={2} readOnly size="xs" />
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col">
                                                        <p className='txt-justify pt-2 mx-lg-3'>{curElem?.review}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                        }
                    </div>

                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                        <div className="row">
                            <div className="col">
                                <h5 className='fw-bold text-H2'>Add Review</h5>
                            </div>
                        </div>

                        <div className="d-flex align-items-center mb-2">
                            <Rating value={rating} onChange={setRating} />
                            <span className='ms-2 text-Pa' style={{ fontSize: '14px' }}>{ratingMessage}</span>
                        </div>

                        <div className="row">
                            <div className="col">
                                <input type="text" className='form-control py-2' defaultValue={user?.name} readOnly placeholder='Enter Name' />

                                <input type="email" className='form-control py-2 mt-2' defaultValue={user?.username} readOnly placeholder='Enter Email' />

                                <textarea style={{ resize: 'none' }} className='form-control mt-2' name="review"
                                    value={state?.review} placeholder='Enter Review' rows="4" onChange={handleChange}></textarea>
                            </div>
                        </div>

                        <div className="row mt-3 text-end">
                            <div className="col">
                                <button className='btn btn-hvr' onClick={handleSubmit} disabled={uploading}>
                                    {uploading ? 'sending...' : 'Submit Now'}</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
