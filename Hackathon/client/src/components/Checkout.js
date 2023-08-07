import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import FormatPrice from '../helper/FormatPrice'

export default function Checkout() {

  const { cart } = useCartContext()

  let subTotal = cart?.map(curElem => curElem.price)
  subTotal = subTotal?.reduce((accum, curVal) => accum + curVal, 0)

  let shipping = subTotal / 10
  let totalPrice = shipping + subTotal

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


      <div className="container-fluid mb-5 content-center">
        <div className="row checkout-width my-5">
          <div className="col">

            <div className="row">
              <div className="col-12 col-md-7 col-lg-8">

                <div className="row">
                  <div className="col-12 col-sm-6">
                    <input type="text" className='form-control' placeholder='First name *' />
                  </div>

                  <div className="col-sm-6 mt-3 mt-sm-0">
                    <input type="text" className='form-control' placeholder='Last name *' />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <input type="text" className='form-control' placeholder='Company name' />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className='form-control' placeholder='Phone number *' />
                  </div>

                  <div className="col-sm-6 mt-3 mt-sm-0">
                    <input type="email" className='form-control' placeholder='Email Address *' />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <select name="" className='form-control'>
                      <option value="">Country</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <input type="text" className='form-control' placeholder='Address line 01 *' />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <input type="text" className='form-control' placeholder='Address line 02 *' />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <input type="text" className='form-control' placeholder='Town/City *' />
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <select name="" className='form-control'>
                      <option value="">District</option>
                    </select>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <input type="text" className='form-control' placeholder='Postcode/ZIP *' />
                  </div>
                </div>

                <div className="row my-3">
                  <div className="col">
                    <input type="checkbox" id='account' />
                    <label className='ms-2' htmlFor='account'>Create an account?</label>
                  </div>
                </div>

                <div className="row mt-5">
                  <div className="col">
                    <h6>Shipping Details</h6>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col">
                    <input type="checkbox" id='address' />
                    <label className='ms-2' htmlFor='address'>Ship to a different address?</label>
                  </div>
                </div>

                <div className="row mt-3">
                  <div className="col">
                    <textarea name="" style={{ resize: 'none' }} rows='5' className='form-control'
                      placeholder='Order Notes'></textarea>
                  </div>
                </div>
              </div>


              <div className="col-12 col-md-5 col-lg-4 mt-5 mt-md-0">
                <div className="card bg-light p-4 rounded-0">

                  <div className="row">
                    <div className="col">
                      <p>Product</p>
                    </div>

                    <div className="col text-end">
                      <p>Total</p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col">
                      <h6>SUBTOTAL</h6>
                    </div>

                    <div className="col text-end">
                      <p>{<FormatPrice price={subTotal} />}</p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col">
                      <h6>SHIPPING</h6>
                    </div>

                    <div className="col text-end">
                      <p style={{ fontSize: '10px' }}>Flate Rate: {<FormatPrice price={shipping} />}</p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col">
                      <h6>TOTAL</h6>
                    </div>

                    <div className="col text-end">
                      <p>{<FormatPrice price={totalPrice} />}</p>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col">
                      <input type="radio" name='payment' id='payment' />
                      <label className='ms-2' htmlFor='payment'>CHECK PAYMENTS</label>
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col">
                      <div className="border bg-white p-3">
                        <p className='mb-0 txt-justify'>Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <input type="radio" name='payment' id='paypal' />
                      <label className='ms-2' htmlFor='paypal'>PAYPAL</label>
                    </div>

                    <div className="col text-end">
                      <img src="/assets/images/paypal-logo.png" loading='lazy' className='me-4' width={60} alt="error" />
                    </div>
                  </div>

                  <div className="row mt-2">
                    <div className="col">
                      <div className="border bg-white p-3">
                        <p className='mb-0 txt-justify'>Please send a check to Store Name, Store Street, Store
                          Town, Store State / County, Store Postcode.</p>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col">
                      <input type="checkbox" />
                      <span className='ms-2'>I've read and accept</span> <Link className='link'>terms & conditions*</Link>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col">
                      <button className='btn btn-green text-light w-100' style={{ fontSize: '14px' }}>PROCEED TO PAYPAL</button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
