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

                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{products?.length}</h3>
                                <p className='fs-5'>Products</p>
                            </div>
                            <i className='bi bi-cart-plus p-3 fs-1'></i>
                        </div>
                    </div>

                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>3</h3>
                                <p className='fs-5'>Categories</p>
                            </div>
                            <i className='bi bi-currency-dollar p-3 fs-1'></i>
                        </div>
                    </div>

                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>{totalStock}</h3>
                                <p className='fs-5'>Quantities</p>
                            </div>
                            <i className='bi bi-truck p-3 fs-1'></i>
                        </div>
                    </div>

                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-card-color text-dark-gray shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20%</h3>
                                <p className='fs-5'>Increase</p>
                            </div>
                            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Dashboard