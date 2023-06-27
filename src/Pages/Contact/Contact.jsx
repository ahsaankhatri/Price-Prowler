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
            </div>
            <div className='submit-button'>
              <button>Submit</button>
            </div>
            {/* <span>I agree to the</span>
            <span> </span>
            <span>Terms of Service</span>
            <span> and </span>
            <span>Privacy Policy</span>
            <span>. I have read the terms and conditions and I accept the processing of my personal data in accordance
                with the Explicit Consent Text.</span> */}
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
