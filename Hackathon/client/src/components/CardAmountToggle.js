import React from 'react'

import { FaMinus, FaPlus } from 'react-icons/fa';

export default function CardAmountToggle({ amount, setIncreased, setDecreased }) {
    return (
        <>

            <div className='cart-button'>
                <span><button className='border-0 bg-light' onClick={() => { setDecreased() }}>
                    <FaMinus />
                </button></span>

                <span>{amount}</span>

                <span><button className='border-0 bg-light' onClick={setIncreased}>
                    <FaPlus />
                </button></span>
            </div>

        </>
    )
}
