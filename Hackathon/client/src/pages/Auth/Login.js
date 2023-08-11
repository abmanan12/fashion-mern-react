import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { login } from '../../actions/authAction'
import { Link } from 'react-router-dom'

const initialState = {
    username: '',
    password: '',
}

export default function Login() {

    const disptach = useDispatch()
    const [state, setState] = useState(initialState)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            await disptach(login(state))

        } catch (error) {
            console.log(error);
        }

    }

    return (

        <div className='bg-Footer-bg'>
            <div className="container content-center vh-100">
                <div className="row mx-auto auth-width justify-content-center" style={{ minHeight: '60vh' }}>

                    <div className="column left-column d-none d-sm-flex">
                        <h3 className='text-Footer-bg'>Welcome Back!</h3>
                        <p className='mt-3 mb-5 text-Footer-bg'>To keep connected with us, please register with your personal info</p>
                        <Link to='/auth/register' className="btn px-5 py-2 auth-btn1">REGISTER</Link>

                        <div className="random-shapes">
                            <div className="shape diagonal"></div>
                            <div className="shape triangle"></div>
                        </div>
                    </div>

                    <div className="column right-column2 text-center">

                        <h3 className='mt-4 text-H2'>Login to get access</h3>

                        <div className="row mt-5 content-center">
                            <div className="col-12" style={{ maxWidth: '280px' }}>
                                <input className='form-control' name='username' type="text" onChange={handleChange} placeholder="Enter Email" />
                            </div>
                            <div className="col-12 mt-4" style={{ maxWidth: '280px' }}>
                                <input className='form-control' name='password' type="password" onChange={handleChange} placeholder="Password" />
                            </div>
                        </div>

                        <div className="row mt-3" style={{ fontSize: '12px' }}>
                            <div className="col">
                                <Link to='/auth/forgotPassword' className='link me-4'>Forgot Password?</Link>
                                <Link to='/auth/register' className='link d-sm-none'>Not a User?</Link>
                            </div>
                        </div>

                        <div className="row mt-">
                            <div className="col">
                            </div>
                        </div>

                        <button className="btn mt-5 px-5 py-2 auth-btn2" onClick={handleSubmit}>LOGIN</button>

                    </div>

                </div>
            </div>
        </div>
    );
};
