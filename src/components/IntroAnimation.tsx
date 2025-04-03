import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const IntroAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.logo-part', 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo('.tagline',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
      "-=0.4"
    )
    .to('.intro-animation', 
      { y: -100, opacity: 0, duration: 0.8, delay: 0.8, ease: "power2.inOut" }
    );
    
    return () => {
      tl.kill();
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      className="intro-animation fixed inset-0 flex flex-col items-center justify-center bg-primary z-50"
      exit={{ opacity: 0 }}
    >
      <div className="flex items-center justify-center">
        <span className="logo-part text-5xl md:text-7xl font-display font-bold text-white">Kash</span>
        <span className="logo-part text-5xl md:text-7xl font-display font-bold text-gradient">Tech</span>
      </div>
      <div className="logo-part text-4xl md:text-6xl font-display font-bold text-white mb-4">Solutions</div>
      <p className="tagline text-light text-lg md:text-xl opacity-80 mt-2">Crafting Digital Experiences</p>
    </motion.div>
  );
};

export default IntroAnimation;