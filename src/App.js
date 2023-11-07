import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import About from './components/About/About';
import Contact from './components/Contact/contact';
import React, { useState, useEffect } from 'react';
import Example from './components/Modal/modal';
import Foot from './components/Footer/footer';
import ScrollReveal from 'scrollreveal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });

    const handleMenuIconClick = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('active');
      }
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const header = document.querySelector('header');

      if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
      }

      sections.forEach((sec) => {
        const id = sec.getAttribute('id');
        const link = document.querySelector(`header nav a[href*="${id}"]`);
        if (link) {
          link.classList.remove('active');
        }
      });
    };

    const menuIcon = document.querySelector('#menu-icon');
    if (menuIcon) {
      menuIcon.addEventListener('click', handleMenuIconClick);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      sr.destroy();
      if (menuIcon) {
        menuIcon.removeEventListener('click', handleMenuIconClick);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      <Home />
      <About />
      <Contact />
      <Example isOpen={modalOpen} toggle={closeModal} />
      <Foot />
    </div>
  );
}

export default App;