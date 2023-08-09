import React from 'react'

import products from '../../helper/products'
import Sort from '../../components/Sort'
import ProductLists from '../../components/ProductLists'

export default function Product() {

  if (!products.length) {
    return <div className='content-center text-muted'
      style={{ height: '34vh' }}>
      <div>Loading...</div>
    </div>
  }

  return (
    <>
      <div className="py-5 bg-Others-bg">
        <div className="container-fluid">

          <div className="row">
            <div className="col">
              <Sort />
            </div>
          </div>

          <div className="row">
            <div className="col">
              <ProductLists />
            </div>
          </div>

        </div>
      </div>

    </>
  )
}
