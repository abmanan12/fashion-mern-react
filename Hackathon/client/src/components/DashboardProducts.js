import React, { useState } from 'react'

import { FaTrash } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import DashboardModal from './DashboardModal'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, getProducts } from '../actions/productAction'

export default function DashboardProducts() {

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [modalProduct, setModalProduct] = useState(null);
    const products = useSelector(state => state.ProductReducer?.products)


    const handleDelete = async (id) => {
        try {
            await dispatch(deleteProduct(id))
            await dispatch(getProducts())
        }
        catch (error) {
            console.log(error);
        }
    }


    const openModal = productData => {
        setModalProduct(productData);
        setModal(true)
    };

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
                        <th scope="col">Action</th>
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
                                    <td>
                                        <FiEdit className='text-green' style={{ cursor: 'pointer' }}
                                            onClick={() => openModal(curElem)} />

                                        <FaTrash className='text-danger ms-3' style={{ cursor: 'pointer' }}
                                            onClick={() => handleDelete(curElem?._id)} />
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>

            </table>

            {modal && <DashboardModal modal={modal} setModal={setModal} modalProduct={modalProduct} />}

        </>
    )
}
