import React, { useEffect, useRef } from 'react'

// import moment from 'moment';
import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from 'framer-motion';
import FormatPrice from '../helper/FormatPrice';

export default function Product(curElem) {

    const { _id, name, images, price, category, createdAt } = curElem;

    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const controls = useAnimation()

    const animateCard = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: { opacity: 0, scale: 0.85, y: 20 }
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
            <motion.div variants={animateCard} animate={controls} transition={{ duration: 2, delay: 0.25 }}
                initial='hidden' className="card rounded-0 border mx-auto my-2 cardWidt bg-white">
                <Link to={`/singleproduct/${_id}`}>
                    <figure>
                        <img src={images[0]} alt={name} loading="lazy" className="card-img-top px-2 pt-3" />
                        <figcaption className="position-absolute border rounded-3 px-2 py-1 bg-light text-green"
                            style={{ top: 30, right: 28 }}>{category}</figcaption>
                    </figure>
                </Link>

                <div className="card-body pt-0 d-flex justify-content-between">
                    <span className="card-text">{name.slice(0, 15)}...</span>
                    <span className="card-text">{<FormatPrice price={price} />}</span>
                </div>

                <div className="card-body pt-5 d-flex justify-content-between align-items-end">
                    {/* <span className="card-text" style={{ fontSize: '14px' }}>{city}</span> */}
                    {/* <span className="card-text" style={{ fontSize: '14px' }}>{moment(new Date(uploadTime)).fromNow()}</span> */}
                </div>
            </motion.div>

        </>
    )
}
