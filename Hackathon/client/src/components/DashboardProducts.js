import React from 'react'
import { useSelector } from 'react-redux'

export default function DashboardProducts() {

    const products = useSelector(state => state.ProductReducer?.products)

    return (
        <>

            <table className="table caption-top bg-white rounded mt-4">

                <caption className='text-green text-center fw-bold fs-4 pb-4'>All Products</caption>

                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        !products.length ? <td colSpan="5">No Item Exist</td>
                            : products.map((curElem, i) => (
                                <tr key={i} className='align-middle'>
                                    <th scope="row">{i + 1}</th>
                                    <td><img src={curElem?.image ? process.env.REACT_APP_PUBLIC_FOLDER + curElem?.image : ''}
                                        alt={curElem?.name} width="50" height='40' /></td>
                                    <td>{curElem?.name}</td>
                                    <td>{curElem?.category}</td>
                                    <td>{curElem?.quantity}</td>
                                </tr>
                            ))
                    }
                </tbody>

            </table>

        </>
    )
}
