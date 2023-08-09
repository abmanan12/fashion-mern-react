import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import { useCartContext } from '../contexts/CartContext';
import CardAmountToggle from './CardAmountToggle';

export default function AddToCart({ singleProduct }) {

    const { addToCart } = useCartContext()

    const [amount, setAmount] = useState(1)

    const setIncreased = () => {
        amount < singleProduct?.quantity ? setAmount(amount + 1) : setAmount(singleProduct?.quantity)
    }

    const setDecreased = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }

    return (
        <>

            <div className='mt-3 ms-2' style={{width: '9rem', border: '1px solid', borderRadius: '20px'}}>
                <CardAmountToggle amount={amount} setIncreased={setIncreased} setDecreased={setDecreased} />
            </div>

            <div className="row mt-4">
                <div className="col">
                    <Link to='/cart' className='btn btn-green text-light' onClick={() => { addToCart(singleProduct, amount) }}>
                        ADD TO CART</Link>
                </div>
            </div>

        </>
    )
}
