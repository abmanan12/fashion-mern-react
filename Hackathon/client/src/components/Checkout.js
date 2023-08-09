import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom'
import { useCartContext } from '../contexts/CartContext'
import FormatPrice from '../helper/FormatPrice'
import CheckoutAuth from './CheckoutAuth'
import CheckoutInput from './CheckoutInput'

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

      <div className='bg-Others-bg'>

        <CheckoutAuth />

        <div className="container-fluid py-5 content-center">
          <div className="row checkout-width">
            <div className="col">

              <div className="row">

                <CheckoutInput />

                <div className="col-12 col-md-5 col-lg-4 pt-5 pt-md-0">
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
                        <h6 className='text-H2'>SUBTOTAL</h6>
                      </div>

                      <div className="col text-end">
                        <p>{<FormatPrice price={subTotal} />}</p>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col">
                        <h6 className='text-H2'>SHIPPING</h6>
                      </div>

                      <div className="col text-end">
                        <p style={{ fontSize: '10px' }}>Flate Rate: {<FormatPrice price={shipping} />}</p>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col">
                        <h6 className='text-H2'>TOTAL</h6>
                      </div>

                      <div className="col text-end">
                        <p>{<FormatPrice price={totalPrice} />}</p>
                      </div>
                    </div>

                    <div className="row mt-2">
                      <div className="col">
                        <input type="radio" name='payment' id='payment' />
                        <label className='ms-2 text-H2' htmlFor='payment'>CHECK PAYMENTS</label>
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
                        <label className='ms-2 text-H2' htmlFor='paypal'>PAYPAL</label>
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
                        <span className='ms-2 text-Pa'>I've read and accept</span> <Link className='link'>terms & conditions*</Link>
                      </div>
                    </div>

                    <div className="row mt-4">
                      <div className="col">
                        <button className='btn btn-hvr w-100' style={{ fontSize: '14px' }}>PROCEED TO PAYPAL</button>
                      </div>
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
