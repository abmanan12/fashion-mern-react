import React from 'react'

import FormatPrice from '../helper/FormatPrice'

import { Link } from 'react-router-dom'

export default function ListView({ products }) {
    return (

        <div className="conatiner">
            <div className="row pt-2 pb-3">
                <div className="col-12 col-sm-10 mx-auto">
                    {
                        products.map((curElem, i) => {
                            return (
                                <>
                                    <div className="card rounded-0 p-3 mb-3" key={curElem._id}>
                                        <div className="row d-flex align-items-center">
                                            <div className="col">
                                                <img src={curElem.images[0]} alt={curElem.name} loading="lazy" style={{ width: "100%", maxHeight: '250px' }} />
                                            </div>
                                            <div className="col ms-3">
                                                <h4>{curElem.name}</h4>
                                                <p className='my-2'><FormatPrice price={curElem.price} /></p>
                                                <p>{curElem.description?.slice(0, 30)} ...</p>
                                                <Link to={`/singleproduct/${curElem._id}`} className='btn btn-outline-green rounded-0'>READ MORE</Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}
