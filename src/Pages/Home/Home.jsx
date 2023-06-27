import React from 'react'
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Companies from "../../components/companies/Companies";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="banner-section-1">
        Banner Ad
      </div>
      <Hero/>
      <div className="banner-section-2">
        Banner Ad
      </div>
      <Companies/>
      <Footer/>
    </div>
  )
}

export default Home
