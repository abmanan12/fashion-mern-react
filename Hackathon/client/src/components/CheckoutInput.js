import React from 'react'

export default function CheckoutInput() {
    return (
        <>

            <div className="col-12 col-md-7 col-lg-8">

                <div className="row">
                    <div className="col-12 col-sm-6">
                        <input type="text" className='form-control' placeholder='First name *' />
                    </div>

                    <div className="col-sm-6 mt-3 mt-sm-0">
                        <input type="text" className='form-control' placeholder='Last name *' />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Company name' />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col-12 col-sm-6">
                        <input type="text" className='form-control' placeholder='Phone number *' />
                    </div>

                    <div className="col-sm-6 mt-3 mt-sm-0">
                        <input type="email" className='form-control' placeholder='Email Address *' />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <select name="" className='form-control'>
                            <option value="">Country</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Address line 01 *' />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Address line 02 *' />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Town/City *' />
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <select name="" className='form-control'>
                            <option value="">District</option>
                        </select>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <input type="text" className='form-control' placeholder='Postcode/ZIP *' />
                    </div>
                </div>

                <div className="row my-3">
                    <div className="col">
                        <input type="checkbox" id='account' />
                        <label className='ms-2' htmlFor='account'>Create an account?</label>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col">
                        <h6>Shipping Details</h6>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <input type="checkbox" id='address' />
                        <label className='ms-2' htmlFor='address'>Ship to a different address?</label>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <textarea name="" style={{ resize: 'none' }} rows='5' className='form-control'
                            placeholder='Order Notes'></textarea>
                    </div>
                </div>
            </div>


        </>
    )
}
