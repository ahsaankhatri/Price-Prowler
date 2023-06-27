import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="contact-wrapper">
        <div className="contact-container flex-row">
                <div className="banner-section-1">
                  Banner Ad
                </div>
            <div className="title">
                Contact Form
            </div>

            <div className="row input-container">
                <div className="col-md-6 col-sm-12">
                  <div className="styled-input">
                    <input type="text" required />
                    <label>First Name</label> 
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="styled-input" style={{float: 'right'}}>
                    <input type="text" required />
                    <label>Last Name</label> 
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="styled-input">
                    <input type="text" required />
                    <label>Phone Number</label> 
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="styled-input" style={{float: 'right'}}>
                    <input type="text" required />
                    <label>Email</label> 
                  </div>
                </div>
                <div className="col-xs-12">
                  <div className="styled-input wide">
                    <textarea required></textarea>
                    <label>Message</label>
                  </div>
                </div>
                <div className='terms-checkbox'>
                <input id="terms" type="checkbox" />
                <p>I agree to the <a href="/contact">Terms of Service</a> and <a href="/contact">Privacy Policy</a>
                  . I have read the terms and conditions and I accept the processing of my personal data in accordance
                    with the Explicit Consent Text.</p>
                </div>
              <div className='submit-button'>
                <button>Submit</button>
              </div>
            </div>
                <div className="banner-section-2">
                  Banner Ad
                </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
