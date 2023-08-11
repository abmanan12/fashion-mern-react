import React, { useEffect, useRef } from 'react'

import AddToCart from './AddToCart';
import { Rating } from '@mantine/core';
import UserReviews from './UserReviews';
import { useSelector } from 'react-redux';
import FormatPrice from '../helper/FormatPrice';
import { Link, useParams } from 'react-router-dom';

export default function SingleProduct() {

    let id = useParams().id
    const { user } = useSelector(state => state.AuthReducer?.authData)
    const products = useSelector(state => state.ProductReducer?.products)
    const { reviews, loading, uploading } = useSelector(state => state?.ReviewsReducer)


    let singleProduct = products?.find(curElem => {
        return curElem?._id === id
    })


    let ratings = reviews !== 'No reviews found' && reviews?.map((curElem) => curElem.rating);
    let reviewLength = ratings && ratings?.length

    const totalRating = ratings && ratings?.reduce((initialVal, curVal) => {
        return initialVal + curVal
    }, 0)


    let cartData = singleProduct
    cartData.userId = user?._id


    const messageEndRef = useRef()
    const scrollBehavior = () => {
        messageEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollBehavior()
    }, [])


    return (
        <>

            <div ref={messageEndRef}></div>

            <div className='bg-Others-bg'>

                <div className='pt-4 text-muted'>
                    <Link to='/' className='ms-5 text-Pa footer-link'>Home</Link> / {singleProduct?.name}
                </div>

                <div className="container py-5">
                    <div className="row align-items-center">

                        <div className="col-12 col-md-6 text-center product2-images">
                            <div className="row">
                                <div className="col">
                                    <img src={singleProduct?.image ? process.env.REACT_APP_PUBLIC_FOLDER + singleProduct?.image : ''}
                                        loading='lazy' style={{ width: '80%' }} alt={singleProduct?.name} />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="row pt-4 pt-md-0 px-3 px-md-0">

                                <div className="col">
                                    <h4 className='fw-bold text-H1'>{singleProduct?.name}</h4>
                                    <h5 className='fw-bold text-H2'><FormatPrice price={singleProduct?.price} /></h5>
                                </div>

                                <div className="row mt-2" style={{ fontSize: '14px' }}>
                                    <div className="col">
                                        <span className='text-H2 fw-bold'>Size:</span><span className='ms-3 text-Pa'>{singleProduct?.size}</span>
                                    </div>
                                </div>

                                <div className="row" style={{ fontSize: '14px' }}>
                                    <div className="col">
                                        <span className='text-H2 fw-bold'>Color:</span><span className='ms-3 text-Pa'>{singleProduct?.color}</span>
                                    </div>
                                </div>

                                <div className="row mt-3" style={{ fontSize: '14px' }}>
                                    <div className="col">
                                        <span className='text-H2 fw-bold'>Category:</span><span className='ms-3 text-Pa'>{singleProduct?.category}</span>
                                    </div>
                                </div>

                                <div className="row" style={{ fontSize: '14px' }}>
                                    <div className="col">
                                        <span className='text-H2 fw-bold'>Shipping:</span><span className='ms-3 text-Pa'>Available</span>
                                    </div>
                                </div>

                                <div className="row" style={{ fontSize: '14px' }}>
                                    <div className="col">
                                        <span className='text-H2 fw-bold'>Availabilty:</span><span className='ms-3 text-Pa'>{singleProduct?.quantity > 0 ? 'In Stock' : 'Not Available'}</span>
                                    </div>
                                </div>


                                <div className="row mt-3" style={{ fontSize: '14px' }}>

                                    {!ratings ? <span className='text-Pa'>No Reviews</span>
                                        : <div className="col d-flex align-items-center">
                                            <span><Rating value={totalRating / reviewLength} fractions={2} readOnly size="xs" /></span>
                                            <span className='text-Pa ms-2'>({reviewLength} reviews)</span>
                                        </div>}

                                </div>

                                <div className="row mt-2">
                                    <div className="col">
                                        <p className='txt-justify' style={{ fontSize: '15px' }}>{singleProduct?.description}</p>
                                    </div>
                                </div>

                                <hr className='w-75 mt-3' />

                                <AddToCart singleProduct={cartData} />

                            </div>
                        </div>

                    </div>
                </div>

                <UserReviews id={singleProduct?._id} />

            </div>


        </>
    )
}
