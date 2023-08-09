import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../actions/productAction'

function Dashboard() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.ProductReducer?.products)
    const totalStock = products.reduce((acc, curProduct) => acc + curProduct.quantity, 0);

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (

        <div className='px-3'>

            <div className='container-fluid'>
                <div className='row g-3 my-2'>

                    <h3 className='text-center fw-bold text-green pt-5 pb-5'>Products Information</h3>

                    <div className='col-sm-6 col-md-3'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm content-center rounded'>
                            <div className='text-center'>
                                <h3 className='fs-2'>{products?.length}</h3>
                                <p className='fs-5'>Products</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-3'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm content-center rounded'>
                            <div className='text-center'>
                                <h3 className='fs-2'>3</h3>
                                <p className='fs-5'>Categories</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-3'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm content-center rounded'>
                            <div className='text-center'>
                                <h3 className='fs-2'>{totalStock}</h3>
                                <p className='fs-5'>Quantities</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-3'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm content-center rounded'>
                            <div className='text-center'>
                                <h3 className='fs-2'>20%</h3>
                                <p className='fs-5'>Increase</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Dashboard