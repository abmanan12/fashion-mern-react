import React from 'react'
import { Link } from 'react-router-dom'

export default function CheckoutAuth() {
    return (
        <>

            <div className="container-fluid py-5 content-center">
                <div className="row checkout-width">
                    <div className="col">

                        <div className="row mb-3">
                            <div className="col">
                                <span style={{ color: 'red', fontSize: '14px' }}>Note: Checkout Method is Under Development</span>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="border p-2 bg-light">
                                    <span className='ms-3 me-1'>Returning Customer? </span><Link to='/Auth/login' className='link'>
                                        Click here to login</Link>
                                </div>

                                <p className='ms-sm-3 mt-2' style={{ textAlign: 'justify' }}>If you have shopped with us before, please
                                    enter your details in the boxes below. If you are a new a new customer, please proceed to the Billing &
                                    Shipping section.</p>
                            </div>
                        </div>

                        <div className="row ms-sm-3 mt-2">
                            <div className="col-12 col-md-8">

                                <div className="row">
                                    <div className="col-12 col-sm-6">
                                        <input type="text" className='form-control' placeholder='Username or Email *' />
                                    </div>
                                    <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                                        <input type="Password" className='form-control' placeholder='Password *' />
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row d-flex align-items-center ms-sm-3 mt-3">
                            <div className="col-12 col-sm-10 col-md-8 col-lg-6">

                                <div className="row align-items-center">
                                    <div className="col-12 col-sm-6">
                                        <button className='btn btn-green text-light'>LOGIN</button>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <span style={{ cursor: 'pointer' }}><Link className='link' to='/Auth/register'> Create an
                                            account?</Link></span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="container-fluid mt-2 content-center">
                <div className="row checkout-width">
                    <div className="col">

                        <div className="row">
                            <div className="col">
                                <div className="border p-2 bg-light">
                                    <span className='ms-3 me-1'>Have a Coupon? </span><Link to='/checkout' className='link'>
                                        Click here to enter your code.</Link>
                                </div>
                            </div>
                        </div>

                        <div className="row ms-sm-3 mt-4">
                            <div className="col-sm-6">
                                <input type="text" className='form-control' placeholder='Enter coupen code' />
                            </div>
                        </div>

                        <div className="row ms-sm-3 mt-3">
                            <div className="col">
                                <button className='btn btn-green text-light p-2' style={{ width: '11rem' }}>APPLY COUPON</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
