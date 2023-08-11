import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { resetPassword, sendEmail } from '../../actions/authAction'

const initialState = {
    username: '',
    password: '',
    cpassword: '',
    resetToken: ''
}

export default function ForgotPassword() {

    const disptach = useDispatch()
    const [state, setState] = useState(initialState)
    const [enterPassword, setEnterPassword] = useState(false)

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        const { username, password, cpassword, resetToken } = state

        if (!username) {
            return console.log('Plz enter email');
        }

        if (!enterPassword) {

            const data = await disptach(sendEmail(username))
            console.log(data);

            if (data === 'email sent') {
                setEnterPassword(true)
            }
            else if (data === 'User not found') {
                console.log('User not Found');
            }
            else {
                console.log('Something went wrong')
            }
        }
        else {

            if (password !== cpassword) {
                return console.log('Passwords do not match')
            }
            else {

                const data = await disptach(resetPassword(password, resetToken))

                if (data === 'OTP is not correct') {
                    console.log('OTP Code is not Correct.');
                }
                else {
                    console.log('Something went wrong');
                }
            }
        }

    }

    return (

        <div className='bg-Footer-bg'>
            <div className="container content-center vh-100">
                <div className="row mx-auto auth-width justify-content-center" style={{ minHeight: '60vh' }}>

                    <div className="column left-column d-none d-sm-flex">
                        <h3 className='text-Footer-bg'>Welcome Back!</h3>
                        <p className='mt-3 mb-5 text-Footer-bg'>To keep connected with us, please login with your personal info</p>
                        <Link to='/auth/login' className="btn px-5 py-2 auth-btn1">LOGIN</Link>

                        <div className="random-shapes">
                            <div className="shape diagonal"></div>
                            <div className="shape triangle"></div>
                        </div>
                    </div>

                    <div className="column right-column2 text-center">

                        <h3 className={enterPassword ? 'mt-4 text-H2' : 'mt-5 text-H2'}>Forgot Password</h3>

                        {!enterPassword &&
                            (<div className="row mx-auto text-center mt-5 content-center">
                                <div className="col-12" style={{ maxWidth: '280px' }}>
                                    <input className='form-control' name='username' type="text" onChange={handleChange} placeholder="Enter your email" />
                                </div>
                            </div>)}

                        {enterPassword &&
                            (<div className="row mx-auto text-center mt-4 content-center">
                                <div className="col-12" style={{ maxWidth: '280px' }}>
                                    <input className='form-control' name='resetToken' type="text" onChange={handleChange} placeholder="OTP Code" />
                                </div>
                                <div className="col-12 mt-4" style={{ maxWidth: '280px' }}>
                                    <input className='form-control' name='password' type="password" onChange={handleChange} placeholder="Password" />
                                </div>
                                <div className="col-12 mt-4" style={{ maxWidth: '280px' }}>
                                    <input className='form-control' name='cpassword' type="password" onChange={handleChange} placeholder="Confirm Password" />
                                </div>
                            </div>)}

                        <button className="btn mt-5 px-5 py-2 auth-btn2" onClick={handleSubmit}>
                            {enterPassword ? 'RESET PASSWORD' : 'SEND OTP'}
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};
