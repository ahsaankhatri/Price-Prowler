import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'



const About = () => {
  return (
    <div>
      <Header />
      <div className='about-wrapper'>
            <div className="about-container flex-row">
                <div className="banner-section-1">
                  Banner Ad
                </div>
              <div className="title">
                About Us
              </div>

              <div className='para'>
                <p>Lorem ipsum dolor sit amet consectetur. Sit senectus odio dui lectus rutrum enim scelerisque tincidunt. Tellus neque
                  porttitor luctus nec ut mattis et in. Justo eget at sit elit est. Elementum tristique fusce sapien Lorem ipsum dolor sit amet
                  consectetur. Sit senectus odio dui lectus rutrum enim scelerisque tincidunt. Tellus neque porttitor luctus nec ut mattis et
                  in. Justo eget at sit elit est. Elementum tristique fusce sapien Lorem ipsum dolor sit amet consectetur. Sit senectus odio
                  dui lectus rutrum enim scelerisque tincidunt. Tellus neque porttitor luctus nec ut mattis et in. Justo eget at sit elit est.
                  Elementum tristique fusce sapien Lorem ipsum dolor sit amet consectetur. Sit senectus odio dui lectus rutrum enim
                  scelerisque tincidunt. Tellus neque porttitor luctus nec ut mattis et in. Justo eget at sit elit est. Elementum tristique fusce
                  sapien Lorem ipsum dolor sit amet consectetur. Sit senectus odio dui lectus rutrum enim scelerisque tincidunt. Tellus
                  neque porttitor luctus nec ut mattis et in. Justo eget at sit elit est. Elementum tristique fusce sapien</p>
              </div>
              <div className="banner-section-2">
                  Banner Ad
              </div>
          </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;
