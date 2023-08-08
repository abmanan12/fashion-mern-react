import React from 'react'

import { FaStar } from "react-icons/fa";

export default function UserReviews() {

    let ratingStar = Array.from({ length: 5 }, curElem => {
        return (
            <FaStar />
        )
    })

    return (
        <>

            <div className="container my-5">

                <div className="row mb-3">
                    <div className="col">
                        <span style={{ color: 'red', fontSize: '14px' }}>Note: Reviews Method is Under Development</span>
                    </div>
                </div>

                <div className="row product2-reviews px-3 px-md-0">

                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <div className="border bg-light p-2 content-center flex-column review-center">
                                    <h5 className='fw-bold mb-0'>Overall</h5>
                                    <h1 className='text-green mb-0 fw-bold py-2'>4.0</h1>
                                    <p className='mb-0'>(03 Reviews)</p>
                                </div>
                            </div>

                            <div className="col-12 col-sm-6 my-3 my-sm-0 review-center">
                                <h6 className='fw-bold'>Based on 3 Reviews</h6>
                                <p className='stars text-warning'>5 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars text-warning'>4 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars text-warning'>3 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars text-warning'>2 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                                <p className='stars text-warning'>1 Star <span className='mx-1'>{ratingStar}</span> 01</p>
                            </div>
                        </div>

                        <div className="mt-4 d-flex">
                            <img src="/assets/images/dp.jpg" loading='lazy' alt="internet-error" width={50} height={55} />
                            <div className='ms-3'>
                                <h6>Ali Haider</h6>
                                <p className='stars'><span className='text-warning'>{ratingStar}</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className='txt-justify pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Illo, hic illum expedita fugiat nisi blanditiis ducimus quasi ipsam iste
                                    eaque quia aperiam inventore, id sequi atque quaerat quos. Minima, nisi?</p>
                            </div>
                        </div>

                        <div className="mt-4 d-flex">
                            <img src="/assets/images/dp.jpg" loading='lazy' alt="internet-error" width={50} height={55} />
                            <div className='ms-3'>
                                <h6>Khalid Ahmad</h6>
                                <p className='stars'><span className='text-warning'>{ratingStar}</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className='txt-justify pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Illo, hic illum expedita fugiat nisi blanditiis ducimus quasi ipsam iste
                                    eaque quia aperiam inventore, id sequi atque quaerat quos. Minima, nisi?</p>
                            </div>
                        </div>

                        <div className="mt-4 d-flex">
                            <img src="/assets/images/dp.jpg" loading='lazy' alt="internet-error" width={50} height={55} />
                            <div className='ms-3'>
                                <h6>M Usman</h6>
                                <p className='stars'><span className='text-warning'>{ratingStar}</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className='txt-justify pt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing
                                    elit. Illo, hic illum expedita fugiat nisi blanditiis ducimus quasi ipsam iste
                                    eaque quia aperiam inventore, id sequi atque quaerat quos. Minima, nisi?</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-12 col-md-6 mt-4 mt-md-0">
                        <div className="row">
                            <div className="col">
                                <h4 className='fw-bold'>Add a Review</h4>
                            </div>
                        </div>

                        <div className="row my-2">
                            <div className="col">
                                <p className='stars' style={{ fontSize: '14px' }}>Your Rating: <span className='mx-2 text-warning'>
                                    {ratingStar}</span></p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <input type="text" className='form-control py-2' placeholder='Your Full Name' />
                                <input type="email" className='form-control py-2 mt-2' placeholder='Email Address' />
                                <input type="text" className='form-control py-2 mt-2' placeholder='Phone Number' />
                                <textarea name="review" style={{ resize: 'none' }} className='form-control mt-2'
                                    placeholder='Review' rows="3"></textarea>
                            </div>
                        </div>

                        <div className="row mt-3 text-end">
                            <div className="col">
                                <button className='btn btn-green text-light'>Submit Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
