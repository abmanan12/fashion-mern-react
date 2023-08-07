import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import Product from './Product'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productAction'



export default function RecentProducts() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.ProductReducer?.recentProducts)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
            <div className='py-5 bg-light'>
                <div className="container">

                    <div className="row">
                        <div className='col'>
                            <h3 className='fw-bold text-green mb-3'>Recent Products:</h3>
                            <p className='text-muted'>These are the most recently added products available for
                                rent on the platform. User can check details of products by clicking on image.</p>
                        </div>
                    </div>

                    {!products.length ? <div className='content-center text-muted'
                        style={{ height: '30vh' }}><div>Loading...</div></div>
                        : <>
                            <div className="row mt-2">
                                {products.map((curElem, i) => {
                                    return (
                                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3" key={i}>
                                            <Product {...curElem} />
                                        </div>
                                    )
                                })}
                            </div>
                        </>
                    }

                    <div className='text-center mt-4'>
                        <Link to='/product' className='btn btn-outline-green btn-2'>MORE PRODUCTS</Link>
                    </div>

                </div>
            </div>
        </>
    )
}   
