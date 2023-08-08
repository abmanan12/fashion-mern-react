import React, { useState } from 'react'

import { useFilterContext } from '../contexts/FilterContext'
import { Button, Drawer } from '@mui/material';
import { ImCross } from 'react-icons/im'
import { MdFilterList } from 'react-icons/md'
import FormatPrice from '../helper/FormatPrice';

export default function FilterSection() {

  const [open, setOpen] = useState(false);

  const { filters: { price, maxPrice, minPrice }, updateFilter, clearFilter } = useFilterContext();

  return (
    <>
      <div className='mt-2'>

            <Button style={{ color: 'black' }} onClick={() => setOpen(true)}>
              <h6 className='fw-bold'>Filter <MdFilterList className='fs-4 ms-1' /></h6>
            </Button>

        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}
          PaperProps={{ sx: { marginTop: '86px' } }}>
          <div style={{ width: 260, marginTop: 35 }}>

            <div className="container-fluid">
              <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">

                  <div className='pb-4 d-flex justify-content-between'>
                    <h5 className='fw-bold'>Filters:</h5>
                    <h6 className='text-end text-muted' onClick={() => setOpen(false)}
                      style={{ cursor: 'pointer' }}><ImCross /></h6>
                  </div>

                  <div className="row">
                    <div className="col-12 mb-3">
                      <form onSubmit={(e) => e.preventDefault()}>
                        <input
                          type="search"
                          name="text"
                          placeholder="Search by Name"
                          // value={text}
                          className='form-control py-2'
                          onChange={updateFilter}
                        />
                      </form>
                    </div>

                    <div className="col-12 mb-3">
                      <form>
                        <select className="form-select py-2" name='category' aria-label="Default select example"
                          onChange={updateFilter}>
                          <option hidden value=''>Select Category</option>
                          <option value='shoes'>Shoes</option>
                          <option value='clothes'>Clothing</option>
                          <option value='asseseries'>Accessories</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-12 mb-3">
                      <form>
                        <select className="form-select py-2" name='size' aria-label="Default select example"
                          onChange={updateFilter}>
                          <option hidden value=''>Select Size</option>
                          <option value='small'>Small</option>
                          <option value='medium'>Medium</option>
                          <option value='large'>Large</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-12 mb-3">
                      <form>
                        <select className="form-select py-2" name='color' aria-label="Default select example"
                          onChange={updateFilter}>
                          <option hidden value=''>Select Color</option>
                          <option value='Black'>Black</option>
                          <option value='Blue'>Blue</option>
                          <option value='White'>White</option>
                          <option value='Silver'>Silver</option>
                          <option value='Red'>Red</option>
                          <option value='Grey'>Grey</option>
                          <option value='Brown'>Brown</option>
                        </select>
                      </form>
                    </div>

                    <div className="col-12 pt-2 mb-4">
                      <h5>Price</h5>
                      <p className='mb-1'>{<FormatPrice price={price} />}</p>
                      <div>
                        <input type="range" name='price' max={maxPrice} min={minPrice} value={price}
                          className='w-100' onChange={updateFilter} />
                      </div>
                    </div>

                    <div className="col-12 text-start">
                      <button className='btn btn-green text-light' onClick={clearFilter}>CLEAR FILTERS</button>
                    </div>

                  </div>

                </div>
              </div>

            </div>
          </div>
        </Drawer>

      </div>
    </>
  )
}
