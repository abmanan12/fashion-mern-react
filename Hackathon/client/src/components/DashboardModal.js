import React, { useState } from 'react'

import { Modal } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { deleteImage, getProducts, updateProduct, uploadImage } from '../actions/productAction';

export default function DashboardModal({ modal, setModal, modalProduct }) {

    const dispatch = useDispatch()
    const [img, setImg] = useState(null)
    const [state, setState] = useState(modalProduct)


    const handleChange = e => {
        setState(state => ({ ...state, [e.target.name]: e.target.value }))
    }


    const handleImage = async (e) => {

        try {
            await dispatch(deleteImage(state?.image))
        }
        catch (error) {
            return console.log(error);
        }

        if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0])
        }
    }


    const handleUpdate = async (e) => {

        e.preventDefault()

        const { name, price, color, size, quantity, category, description } = state

        if (!name || !description || !price || !category || !quantity || !size || !color) {
            return console.log('Plz fill all fields properly');
        }

        let userData = state

        // upload image
        if (img) {

            const data = new FormData()
            const filename = Date.now() + img?.name
            data.append('filename', filename)
            data.append('file', img)
            userData.image = filename

            try {
                await dispatch(uploadImage(data))
            }
            catch (error) {
                return console.log(error);
            }
        }
        
        
        // callregister api
        try {
            
            await dispatch(updateProduct(state))
            await dispatch(getProducts())
            setModal(false);

        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>

            <Modal opened={modal} onClose={() => setModal(true)} title="Update Product" centered>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col">

                            <form onSubmit={handleUpdate}>

                                <div className="row mt-4">
                                    <div className="col">
                                        <input type="text" className='form-control' name='name' placeholder='Title Name'
                                            value={state?.name} onChange={handleChange} />
                                    </div>

                                    <div className="col">
                                        <select className='form-select' name='category' value={state?.category} onChange={handleChange}>
                                            <option value="" hidden>Select Category</option>
                                            <option value="shoes">Shoes</option>
                                            <option value="clothes">Clothes</option>
                                            <option value="asseseries">Asseseries</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="text" className='form-control' name='quantity' placeholder='Enter Quantity'
                                            value={state?.quantity} onChange={handleChange} />
                                    </div>

                                    <div className="col">
                                        <input type="text" className='form-control' name='price' placeholder='Enter Price'
                                            value={state?.price} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <select className='form-select' name='size' value={state?.size} onChange={handleChange}>
                                            <option value="" hidden>Select Size</option>
                                            <option value="small">Small</option>
                                            <option value="medium">Medium</option>
                                            <option value="large">Large</option>
                                        </select>
                                    </div>

                                    <div className="col">
                                        <select className='form-select' name='color' value={state?.color} onChange={handleChange}>
                                            <option value="" hidden>Select Color</option>
                                            <option value="red">Red</option>
                                            <option value="blue">Blue</option>
                                            <option value="black">Black</option>
                                            <option value="white">White</option>
                                            <option value="brown">Brown</option>
                                            <option value="yellow">Yellow</option>
                                        </select>
                                    </div>
                                </div>


                                <div className="row mt-3">
                                    <div className="col">
                                        <input type="file" className='form-control' onChange={handleImage} />
                                    </div>

                                    <div className="col">
                                        <input type="text" className='form-control' name='description' placeholder='Enter Description'
                                            value={state?.description} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="row mt-4">
                                    <div className="col">
                                        <button className='btn btn-green text-light'>Update Product</button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>



            </Modal>

        </>
    )
}
