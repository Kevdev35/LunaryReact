import React from 'react';
import  Navbar from './components/NavBar';
import Hero from './components/Hero';
import GameCarousel from  './components/GameCarousel';
import Stores from  './components/Stores';
import About from   './components/About';
import ContactForm  from './components/ContactForm';
import  Footer from './components/Footer';

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <GameCarousel />
        <Stores />
        <About />
        <ContactForm />
        <Footer />
      </main>
    </>
  );
}

export default App;