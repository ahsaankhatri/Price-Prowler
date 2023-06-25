import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import CountUp from "react-countup";


const About = () => {
  return (
    <div>
      <Header />
      <div className='about-wrapper'>
            <div className="about-container flex-row">
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

              <div className="flex-row Numbers">
                            <div className="col-2 stats1">
                                <span>
                                    <CountUp start={0} end={200} duration={3}/>
                                    <span>K+ </span>
                                </span>
                                <span>Product Searched</span>
                            </div>

                            <div className="stats2">
                                <span>
                                    <CountUp start={0} end={5} duration={3}/>
                                    <span>K+ </span>
                                </span>
                                <span>Happy Customers</span>
                            </div>

                            <div className="stats3">
                                <span>
                                    <CountUp start={0} end={3} duration={5}/>
                                    <span>+ </span>
                                </span>
                                <span>Multiple Vendors</span>
                            </div>
                            </div>
          </div>
    </div>
    <Footer/>
    </div>
  )
}

export default About;
