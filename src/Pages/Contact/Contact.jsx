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
            <div className="title">
                Contact Form
            </div>

            <div className="form">
                <form action="submit">
                        <input type="text" id="first-name" name="first-name" placeholder='First Name' required />
                        <input type="text" id="last-name" name="last-name" placeholder='Last Name' required />
                        <input type="text" id="phone" name="phone" placeholder='Phone Number' required />
                        <input type="text" id="email" name="email" placeholder='Email' required />
                        <textarea id="message" name="message" placeholder='Message' required></textarea>

                        <label>
                        <input type="checkbox" id="terms" name="terms" />
                        I agree to the and . I have read the terms and conditions
                        and I accept the processing of my personal data in accordance with the Explicit
                        Consent Text.
                        </label>
                    <button>Submit</button>
                </form>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
