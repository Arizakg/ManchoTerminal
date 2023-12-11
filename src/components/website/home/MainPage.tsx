/* External dependencies */
import React from 'react';

/* Local dependencies */
import AboutUs from '../aboutUs/AboutUs';
import Footer from '../footer/Footer';
import HeaderTop from '../headerTop/HeaderTop';
import Header from '../header/Header';
import Hero from '../hero/Hero';
import './Style.scss';


export default function MainPage() {
  return (
    <>
      <HeaderTop />
      <Header />
      <Hero />      
      <Footer />
      <AboutUs />
    </>
  );
}
