import React, { useEffect, useRef } from 'react';
import monImage from '../../../src/images/carte.png';
import Typed from 'typed.js';
import "./home.css";

const Home = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Web Developer', 'Mobile Developer ', 'Bug Hunter'],
      typeSpeed: 100,
      backSpeed: 10,
      backDelay: 1000,
      loop: true
    };

    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return ( 
    <section className="home">
      <div className="home-content">
        <h3>Jonastino Heriniantsoniavo</h3>
        <h1><span ref={typedTextRef} ></span></h1>
        <h2>Allow me to help you for creating your business card by this style</h2>
        <a href="#btn" className="btn">Click</a>
      </div>
      <div className="home-img">
        <img src={monImage} alt="images" />
      </div>
    </section>
  );
}

export default Home;
