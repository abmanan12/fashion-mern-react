import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {

    let year = new Date().getFullYear()

    return (
        <>

            <footer className='bg-Footer-bg'>
                <div className="pt-3 pt-md-5">
                    <div className="container">

                        <div className="row mt-3">
                            <div className="col-md-4 col-lg-5 col-xl-5 mb-4 px-lg-4">
                                <h6 className="fw-bold mb-3 mb-md-2 mb-lg-4"><img src="/assets/images/logo.png"
                                    alt="Logo" width="140" height="60" /></h6>

                                <p style={{ textAlign: 'justify' }}>Rental Haven provides rental listings and related services for various types of
                                    properties, such as Vehicles, Properties, Electronics, Human Workers and Household
                                    Goods etc.</p>
                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mb-4 mt-3 mt-lg-0 ps-md-5">
                                <h6 className="fw-bold text-uppercase mb-4 text-H1">Trending Searches</h6>
                                <p className='ps-3'><Link to='/' className='footer-link'>Vehicles</Link></p>
                                <p className='ps-3'><Link to='/' className="footer-link">Properties</Link></p>
                                <p className='ps-3'><Link to='/' className="footer-link">Electronics</Link></p>
                            </div>

                            <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4 mt-3 mt-lg-0">
                                <h6 className="fw-bold mb-4 text-uppercase text-H1">Newsletter</h6>
                                <p className='ps-3 ps-md-0'><Link to='/' className='footer-link text-Pa'>Subscribe
                                    Newsletter</Link></p>

                                <div className="input-group ps-3 ps-md-0 pt-2" style={{ maxWidth: '250px' }}>

                                    <input type="text" className="form-control footer-input" placeholder="Enter your email" />
                                    <div className="input-group-append">
                                        <button className="btn btn-H1 text-Footer-bg footer-button" type="button">SEND</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="row m-0">
                            <div className="col p-0 m-0">
                                <div className="text-center text-Pa px-1 py-3 p-sm-3 mt-5">
                                    Copyright &copy; {year}.Abdul Manan.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>

        </>
    )
}
