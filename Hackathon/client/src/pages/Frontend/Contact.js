import React, { useState } from 'react'

const initialState = {
  userName: '',
  titleName: '',
  email: '',
  phone: '',
  description: ''
}

export default function Contact() {

  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {

    e.preventDefault()

    console.log(state);
    setState(initialState)
  }

  return (
    <>

      {/* map location */}
      <div className='pt-4 bg-Others-bg'>
        <div className="container">
          <div className="row">
            <div className="col">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.089128545792!2d73.08623897418936!3d31.411670352507027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922681d444b32e1%3A0xc3887a0e53e91f7!2sSaylani%20Mass%20IT%20Training%20Faisalabad!5e0!3m2!1sen!2s!4v1690607410123!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: '0' }}
                allowFullScreen=""
                loading="lazy"
                title='map'
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>


      <div className='py-4 py-lg-5 bg-Others-bg'>
        <div className="container">
          <div className="row">

            {/* Asked Question */}
            <div className="col-12 col-lg-6 pe-lg-5">

              <h6 className='text-Pa'>FREQUENTLY ASKED QUESTIONS</h6>
              <h4 className='fw-bold mb-4 text-H2'>GETTING TO KNOW US</h4>

              <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">

                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-H2" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      How can I explore the latest fashion items available for purchase?
                    </button>
                  </h2>

                  <div id="flush-collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-Pa" style={{ textAlign: 'justify' }}>
                      To discover the trendiest fashion pieces available for purchase, simply browse through our extensive collection.
                      You'll find a wide range of clothing, shoes, and accessories to suit your style. Click on the item images
                      to view details and start your fashion-forward shopping experience.
                    </div>
                  </div>
                </div>

                <div className="accordion-item pt-4">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-H2" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-controls="flush-collapseTwo">
                      How can I add fashion items to my shopping cart?
                    </button>
                  </h2>

                  <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-Pa" style={{ textAlign: 'justify' }}>
                      Adding your favorite fashion items to your shopping cart is simple! Just click on the items you love and select
                      your desired size and quantity. Once you're satisfied with your choices, proceed to the checkout process to
                      complete your fashionable shopping experience.
                    </div>
                  </div>
                </div>

                <div className="accordion-item pt-4">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed text-H2" type="button" aria-expanded="false"
                      data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-controls="flush-collapseThree">
                      How can I leave reviews and share my shopping experience?
                    </button>
                  </h2>

                  <div id="flush-collapseThree" className="accordion-collapse collapse text-Pa" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body text-Pa" style={{ textAlign: 'justify' }}>
                      We encourage you to share your shopping journey with the community! After purchasing an item, you can leave
                      reviews and ratings for the fashion pieces you've experienced. Your feedback helps other fashion enthusiasts
                      make informed choices and enhances their shopping experience as well.
                    </div>
                  </div>
                </div>
              </div>
            </div>



            {/* Contact Form */}
            <div className="col-12 col-lg-6 pt-4 pt-lg-0">

              <h6 className='text-Pa'>INFORMATION ABOUT US</h6>
              <h4 className='fw-bold mb-4 text-H2'>CONTACT US FOR ANY QUESTIONS</h4>

              <div className="row">
                <div className="col-12 col-md-6">
                  <input type="text" className='form-control' name='userName' value={state.userName}
                    onChange={handleChange} placeholder='Enter Name' />
                </div>

                <div className="col-12 col-md-6 mt-3 mt-md-0">
                  <input type='text' className='form-control' name='titleName' value={state.titleName}
                    placeholder='Title Name' onChange={handleChange} />
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <input type="email" className='form-control' name='email' value={state.email}
                    onChange={handleChange} placeholder='Enter Email' />
                </div>

                <div className="col-12 col-md-6 mt-3 mt-md-0">
                  <input type='text' className='form-control' placeholder='Enter Phone Number'
                    name='phone' value={state.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="row mt-3 mt-md-4">
                <div className="col">
                  <textarea className="form-control rounded-0" placeholder='Description' name='description'
                    value={state.description} onChange={handleChange} rows="5" style={{ resize: 'none' }}></textarea>
                </div>
              </div>

              <div className="row mt-3 mt-md-4">
                <div className="col">
                  <button className='btn btn-hvr' onClick={handleSubmit}>SEND QUESTION</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </>
  )
}
