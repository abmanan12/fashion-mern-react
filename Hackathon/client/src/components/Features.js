import React, { useEffect, useRef } from 'react'

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useAnimation, useInView } from 'framer-motion'

import { IoIosListBox } from "react-icons/io";
import { AiOutlineFileSearch } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdPayment } from "react-icons/md";

export default function Features() {

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    const animateText = {
        visible: { opcacity: 1, scale: 1, y: 0 },
        hidden: { opcacity: 0, scale: 0.80, y: 30 }
    }

    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
        else {
            controls.start('hidden')
        }
    }, [inView, controls])

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        slidesToShow: 1,
    };



    return (
        <>

            <div className='bg-Others-bg py-5'>
                <div className="container shadow-none px-4 px-lg-5">

                    <div className='heroText'>
                        <h3 className='typing-demo text-green fw-bold mb-3'>Fashion Store Features</h3>
                    </div>

                    <Slider {...settings}>
                        <div className='text-Pa'>
                            Showcase your fashion-forward collection and reach a wider audience. Display your latest clothes,
                            shoes, and accessories for rent and connect with fashion enthusiasts. Monetize your trendy pieces
                            and create a seamless renting experience for style-savvy individuals.
                        </div>

                        <div className='text-Pa'>
                            Explore a diverse range of fashion products across different categories. From clothing to shoes
                            and accessories, find the perfect pieces that suit your style. Browse, compare, and effortlessly
                            add items to your cart, making renting a hassle-free experience for your fashion needs.
                        </div>

                        <div className='text-Pa'>
                            Share your renting experience with the fashion community. Leave reviews and ratings for items you've
                            rented, helping others make informed choices. Discover real feedback from fellow fashion enthusiasts
                            and enhance your renting decisions.
                        </div>

                        <div className='text-Pa'>
                            Simplify your fashion rental journey. Our intuitive cart system streamlines the process. Add your
                            favorite fashion items, manage your selections, and proceed to checkout effortlessly. Enjoy a
                            seamless and stylish renting experience from selection to the runway.
                        </div>
                    </Slider>


                </div>

                <div className="container mt-3 mt-sm-4 px-4 px-lg-5">
                    <div className="row" ref={ref} >

                        <motion.div className="col-6 col-md-3" variants={animateText} animate={controls} initial='hidden'
                            transition={{ duration: 2, delay: 0.25 }}>
                            <p className='text-H1 hero-icons'><IoIosListBox /></p>
                            <p className='text-H1 hero-icon-text'>Order Item</p>
                        </motion.div>

                        <motion.div className="col-6 col-md-3" variants={animateText} animate={controls} initial='hidden'
                            transition={{ duration: 2, delay: 0.25 }}>
                            <p className='text-H1 hero-icons'><AiOutlineFileSearch /></p>
                            <p className='text-H1 hero-icon-text'>Search & Filtering</p>
                        </motion.div>

                        <motion.div className="col-6 col-md-3" variants={animateText} animate={controls} initial='hidden'
                            transition={{ duration: 2, delay: 0.25 }}>
                            <p className='text-H1 hero-icons'><BsFillCartCheckFill /></p>
                            <p className='text-H1 hero-icon-text'>Favourite Items</p>
                        </motion.div>

                        <motion.div className="col-6 col-md-3" variants={animateText} animate={controls} initial='hidden'
                            transition={{ duration: 2, delay: 0.25 }}>
                            <p className='text-H1 hero-icons'><MdPayment /></p>
                            <p className='text-H1 hero-icon-text'>Payment Method</p>
                        </motion.div>

                    </div>
                </div>
            </div>

        </>
    )
}
