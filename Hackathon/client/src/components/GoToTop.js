import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function GoToTop() {

    const [isVisible, setIsVisisble] = useState(false)

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }

    const listenToScroll = () => {
        let heightToHidden = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop

        if (winScroll > heightToHidden) {
            setIsVisisble(true)
        }
        else {
            setIsVisisble(false)
        }

    }

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
        return () => window.removeEventListener('scroll', listenToScroll)
    })

    return (
        <>
            {!isVisible &&
                <div className='content-center top-btn' onClick={goToBtn}>
                    <p className='mb-1'><FaArrowUp /></p>
                </div>
            }
        </>
    )
}
