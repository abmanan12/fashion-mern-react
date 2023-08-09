import React, { useEffect, useRef } from 'react'

import { Link } from 'react-router-dom';
import { motion, useAnimation, useInView } from 'framer-motion'

export default function HeroSection() {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    const animateImg = {
        visible: { opcacity: 1, scale: 1, y: 0 },
        hidden: { opcacity: 0, scale: 0.25, y: 25 }
    }
    const animateText = {
        visible: { opcacity: 1, scale: 1, y: 0 },
        hidden: { opcacity: 0, scale: 0.90, y: 30 }
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        else {
            controls.start('hidden')
        }
    }, [inView, controls])


    return (

        <>

            <div ref={ref}></div>

            <div className='bg-Footer-bg content-center' style={{ height: 'calc(100vh - 86px)' }}>
                <div className="container">
                    <div className="row align-items-center">

                        <motion.div variants={animateText} animate={controls} transition={{ duration: 2, delay: 0.25 }}
                            initial='hidden' className="col-12 col-md-6 px-4 px-lg-5">
                            <h2 className='fw-bold text-H1'>Discover Ideal Fashion Collection</h2>
                            <p className='text-H2'>Welcome to our all-encompassing fashion haven, where you'll uncover
                                a diverse array of clothing, shoes, and accessories. Our platform offers a vast selection of
                                options for your fashion desires. Browse through our extensive assortment and elevate your
                                fashion choices with a convenient and seamless renting experience.</p>

                            <Link to='/products' className='btn btn-hvr mt-2'>GET STARTED</Link>
                        </motion.div>

                        <motion.div variants={animateImg} animate={controls} transition={{ duration: 2, delay: 0.25 }}
                            initial='hidden' className="col-12 col-md-6 text-center mt-5 mt-md-0">
                            <img className='home-imge' src="/assets/images/rent.png" alt="home" loading="lazy"
                                style={{ width: '90%', borderRadius: '5%' }} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>

    )
}
