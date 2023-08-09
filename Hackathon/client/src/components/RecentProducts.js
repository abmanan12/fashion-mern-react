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
            <div className='py-5 bg-Others-bg'>
                <div className="container">

                    <div className="row">
                        <div className='col'>
                            <h3 className='fw-bold text-H1 mb-3'>Recent Products:</h3>
                            <p className='text-Pa'>Explore our latest additions, featuring the freshest fashion products
                                now available for you to rent on our platform. Dive into the details of each item by simply
                                clicking on its image.</p>

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
                        <Link to='/product' className='btn btn-hvr'>MORE PRODUCTS</Link>
                    </div>

                </div>
            </div>
        </>
    )
}   
