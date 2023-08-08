import React, { useEffect, useRef } from 'react'

import AddToCart from './AddToCart';
import UserReviews from './UserReviews';
import { useSelector } from 'react-redux';
import FormatPrice from '../helper/FormatPrice';
import { Link, useParams } from 'react-router-dom';

export default function SingleProduct() {

    let id = useParams().id
    const products = useSelector(state => state.ProductReducer?.products)

    let singleProduct = products?.find(curElem => {
        return curElem?._id === id
    })


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

            <div className='pt-4 text-muted'>
                <Link to='/' className='ms-5 text-green footer-link'>Home</Link> / {singleProduct?.name}
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
                                <h4 className='fw-bold'>{singleProduct?.name}</h4>
                                <h4 className='fw-bold text-green'><FormatPrice price={singleProduct?.price} /></h4>
                            </div>

                            <div className="row mt-2" style={{ fontSize: '14px' }}>
                                <div className="col">
                                    <span>Size:</span><span className='ms-3 text-green'>{singleProduct?.size}</span>
                                </div>
                            </div>

                            <div className="row" style={{ fontSize: '14px' }}>
                                <div className="col">
                                    <span>Color:</span><span className='ms-3 text-green'>{singleProduct?.color}</span>
                                </div>
                            </div>

                            <div className="row mt-3" style={{ fontSize: '14px' }}>
                                <div className="col">
                                    <span>Category:</span><span className='ms-3 text-green'>{singleProduct?.category}</span>
                                </div>
                            </div>

                            <div className="row" style={{ fontSize: '14px' }}>
                                <div className="col">
                                    <span>Availabilty:</span><span className='ms-3 text-green'>{singleProduct?.quantity > 0 ? 'In Stock' : 'Not Available'}</span>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col">
                                    <p className='txt-justify' style={{ fontSize: '15px' }}>{singleProduct?.description}</p>
                                </div>
                            </div>

                            <hr className='w-75 mt-3' />

                            <AddToCart singleProduct={singleProduct} />

                        </div>
                    </div>

                </div>
            </div>

            <UserReviews />

        </>
    )
}
