import React, { useState, useEffect } from 'react';
import useAnimateOnScroll from './useAnimateOnScroll';

const texts = [
  'Web Development Experts, Innovative Solutions',
  'Transforming Ideas into Reality ',
  'Your Tech Partner',
];

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fading out

      setTimeout(() => {
        setCurrentText((prevText) => (prevText + 1) % texts.length); // Change text
        setFade(true); // Fade in new text
      }, 500); // Wait 0.5 seconds for fade-out to complete
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);
  const { ref, classNames } = useAnimateOnScroll('opacity-0', 'opacity-100 transition-all duration-1000 ease-out');

  return (
    <section id="hero" className={`bg-red-600 text-white py-44 mt-12  ${classNames}`} 
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    ref={ref}>
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold">Empowering Africa Through Technology</h1>
        <p className="mt-4">We provide innovative IT solutions that drive business growth across Africa.</p>
      </div>
      <h1
        className={`text-5xl font-bold text-white transition-opacity duration-500 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {texts[currentText]}
      </h1>
    </section>
  );
};

export default Hero;
