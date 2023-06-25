import React from 'react'
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Companies from "../../components/companies/Companies";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Companies/>
      <Footer/>
    </div>
  )
}

export default Home
