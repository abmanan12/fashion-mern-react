import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { register } from '../../actions/authAction'
import { Link } from 'react-router-dom'

const initialState = {
    name: '',
    username: '',
    country: '',
    password: '',
    cpassword: '',
    // picture: null
}

export default function Register() {

    const disptach = useDispatch()
    const [state, setState] = useState(initialState)
    // const [img, setImg] = useState(null)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    // const handleImage = (e) => {
    //     if (e.target.files && e.target.files[0]) {
    //         setImg(e.target.files[0])
    //     }
    // }

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (state.password !== state.cpassword) {
            console.log('Passwords do not match');
            return
        }

        // let userData = state

        // upload image
        // if (img) {

        //     const data = new FormData()
        //     const filename = Date.now() + img?.name
        //     data.append('filename', filename)
        //     data.append('file', img)
        //     userData.picture = filename

        //     try {
        //         await disptach(uploadImage(data))
        //     }
        //     catch (error) {
        //         console.log(error);
        //     }
        // }

        // else {
        //     console.log('No image selected');
        //     return
        // }

        // callregister api
        try {

            await disptach(register(state))

        } catch (error) {
            console.log(error);
        }

    }

    return (

        <div className='bg-style'>
            <div className="container content-center vh-100">
                <div className="row mx-auto auth-width justify-content-center" style={{ minHeight: '60vh' }}>

                    <div className="column left-column d-none d-sm-flex">
                        <h3>Welcome Back!</h3>
                        <p className='mt-3 mb-5'>To keep connected with us, please login with your personal info</p>
                        <Link to='/auth/login' className="btn px-5 py-2 auth-btn1">LOGIN</Link>

                        <div className="random-shapes">
                            <div className="shape diagonal"></div>
                            <div className="shape triangle"></div>
                        </div>
                    </div>

                    <div className="column right-column text-center">

                        <h3 className='mt-4'>Create Account</h3>

                        <div className="row mt-5">
                            <div className="col px-1 px-sm-2">
                                <input className='form-control' name='name' type="text" onChange={handleChange} placeholder="Enter Name" />
                            </div>
                            <div className="col px-1 px-sm-2">
                                <input className='form-control' name='username' type="text" onChange={handleChange} placeholder="Enter Email" />
                            </div>
                        </div>


                        <div className="row mt-4">
                            <div className="col px-1 px-sm-2">
                                <input className='form-control' name='password' type="password" onChange={handleChange} placeholder="Password" />
                            </div>
                            <div className="col px-1 px-sm-2">
                                <input className='form-control' name='cpassword' type="password" onChange={handleChange} placeholder="Confirm Password" />
                            </div>
                        </div>

                        <div className="row mt-3 d-sm-none">
                            <div className="col">
                                <Link to='/auth/login' className='link'>Already Register?</Link>
                            </div>
                        </div>

                        <button className="btn mt-5 px-5 py-2 auth-btn2" onClick={handleSubmit}>REGISTER</button>

                    </div>

                </div>
            </div>
        </div>
    );
};
