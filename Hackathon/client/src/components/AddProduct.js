import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { AddProducts, uploadImage } from '../actions/productAction'

const initialState = {
    name: '',
    price: '',
    color: '',
    size: '',
    quantity: '',
    category: '',
    description: '',
    image: null,
}

export default function AddProduct() {

    const dispatch = useDispatch()
    const [img, setImg] = useState(null)
    const [state, setState] = useState(initialState)


    const handleChange = e => {
        setState(state => ({ ...state, [e.target.name]: e.target.value }))
    }


    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(e.target.files[0])
        }
    }


    // upload the product
    const handleSubmit = async (e) => {

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

        else {
            return console.log('No image selected');
        }

        // callregister api
        try {

            await dispatch(AddProducts(state))
            setState(initialState);
            setImg(null);

        } 
        catch (error) {
            console.log(error);
        }

    }

    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">

                        <form onSubmit={handleSubmit}>

                            <h3 className='text-center fw-bold text-green pt-4 pb-5'>Add Product</h3>

                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className='form-control' name='name' placeholder='Title Name'
                                        value={state?.name} onChange={handleChange} />
                                </div>

                                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                                    <select className='form-select' name='category' value={state?.category} onChange={handleChange}>
                                        <option value="" hidden>Select Category</option>
                                        <option value="shoes">Shoes</option>
                                        <option value="clothes">Clothes</option>
                                        <option value="asseseries">Asseseries</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className='form-control' name='quantity' placeholder='Enter Quantity'
                                        value={state?.quantity} onChange={handleChange} />
                                </div>

                                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                                    <input type="text" className='form-control' name='price' placeholder='Enter Price'
                                        value={state?.price} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-12 col-sm-6">
                                    <select className='form-select' name='size' value={state?.size} onChange={handleChange}>
                                        <option value="" hidden>Select Size</option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>

                                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
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
                                <div className="col-12 col-sm-6">
                                    <input type="file" className='form-control' onChange={handleImage} />
                                </div>

                                <div className="col-12 col-sm-6 mt-3 mt-sm-0">
                                    <input type="text" className='form-control' name='description' placeholder='Enter Description'
                                        value={state?.description} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row mt-4 mb-4 mb-sm-0">
                                <div className="col">
                                    <button className='btn btn-green text-light'>Add Product</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </>
    )
}
