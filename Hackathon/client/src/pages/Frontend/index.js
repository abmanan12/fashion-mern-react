import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Hero from './Hero'
import Contact from './Contact'
import PrivateRoute from '../Routes/PrivateRoute'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import About from './About'
import Product from './Product'
import Cart from './Cart'
import Checkout from '../../components/Checkout'
import SingleProduct from '../../components/SingleProduct'

export default function index() {

    return (
        <>

            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Hero />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/contact" element={<PrivateRoute Component={Contact} />} />
                    <Route path="/singleproduct/:id" element={<PrivateRoute Component={SingleProduct} />} />
                </Routes>
            </main>
            <Footer />

        </>
    )
}
