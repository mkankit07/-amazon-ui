import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <img src='images/newsletter.png' alt="newsLetter" />
                <h2 className='mb-0 text-white'> Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className='col-7'>
              <div className="input-group">
                <input type="text" className="form-control py-1" placeholder="Your Email address" aria-label="Your Email address" aria-describedby="basic-addon2" />
                <span className="input-group-text py-2" id="basic-addon2">Subscribe</span>
              </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className='container-xxl'>
          <div className='row'>

            <div className='col-4'>
              <h4 className='text-white mb-4'>Contact Us</h4>
              <div>
                <address className='text-white fs-6'>
                  Hno : 133 Jagdishpur <br />Jounpur, Uttar Pradesh <br />
                  PinCode : 222137
                </address>
                <a href="tel:+91 9936973579" className='mt-3 d-block mb-2 text-white'>+91 9936973579</a>
                <a href="mailto:ankit20@navgurukul.org" className='mt-2 d-block mb-0 text-white'>ankit20@navgurukul.org</a>
                <div className='social_icons d-flex align-items-center gap-30 mt-4'>
                  <Link to='' className='text-white'>
                    <BsLinkedin className='fs-4' />                  </Link>
                  <Link to='' className='text-white'>
                    <BsInstagram className='fs-4' />                  </Link>
                  <Link to='' className='text-white' >
                    <BsGithub className='fs-4' />                  </Link>
                  <Link to='' className='text-white'>
                    <BsYoutube className='fs-4' />                  </Link>

                </div>
              </div>
            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>privacy Policy</Link>
                <Link className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link className='text-white py-2 mb-1'>Terms & Conditions</Link>
                <Link className='text-white py-2 mb-1'>Blogs</Link>

              </div>            </div>
            <div className='col-3'>
              <h4 className='text-white mb-4'>Account</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About</Link>
                <Link className='text-white py-2 mb-1'>Faq</Link>
                <Link className='text-white py-2 mb-1'>Contact</Link>
              </div>
            </div>
            <div className='col-2'>
              <h4 className='text-white mb-4'> Quick Links</h4>
              <div className='footer-link d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptops</Link>
                <Link className='text-white py-2 mb-1'>Headphones</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Watch</Link>

              </div>
            </div>

          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <p className='text-white text-center mb-0'>&copy; {new Date().getFullYear()}; Powered by Developer</p>
            </div>

          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer