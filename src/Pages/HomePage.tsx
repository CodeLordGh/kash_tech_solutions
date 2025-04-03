import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedText from '../components/AnimatedText';
import FadeInSection from '../components/FadeInSection';
import ParallaxSection from '../components/ParallaxSection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Services we offer
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      title: "Web Design",
      description: "Beautiful, responsive websites that engage users and reflect your brand identity.",
      link: "/services"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      ),
      title: "Web Development",
      description: "Custom web applications with clean code, optimal performance, and scalability.",
      link: "/services"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      ),
      title: "E-commerce Solutions",
      description: "End-to-end online stores with secure payment gateways and inventory management.",
      link: "/services"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      ),
      title: "UI/UX Design",
      description: "User-centered design that enhances usability and creates memorable experiences.",
      link: "/services"
    }
  ];
  
  // Our process steps
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a strategic foundation."
    },
    {
      number: "02",
      title: "Design",
      description: "Our designers create wireframes and visual concepts that align with your brand and user expectations."
    },
    {
      number: "03",
      title: "Development",
      description: "We build your solution using modern technologies and best practices for optimal performance."
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous quality assurance ensures your product works flawlessly across all devices and browsers."
    },
    {
      number: "05",
      title: "Launch",
      description: "We deploy your solution and provide training to ensure a smooth transition and successful launch."
    }
  ];
  
  // Stats
  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "50+", label: "Happy Clients" },
    { value: "10+", label: "Team Members" },
    { value: "5+", label: "Years Experience" }
  ];
  
  useEffect(() => {
    // Animate services cards on scroll
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Animate process steps on scroll
    const processSteps = document.querySelectorAll('.process-step');

    processSteps.forEach((step, index) => {
      gsap.fromTo(
        step,
        { x: index % 2 === 0 ? -50 : 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 70%",
            toggleActions: "play none none none"
          }
        }
      );
    });

    // Animate technology cards on scroll with a staggered effect
    const techCards = document.querySelectorAll('.tech-card');

    gsap.fromTo(
      techCards,
      {
        y: 30,
        opacity: 0,
        scale: 0.9
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.05,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Add hover animations for tech cards
    techCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      // Clean up ScrollTrigger instances and event listeners
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());

      techCards.forEach((card) => {
        card.removeEventListener('mouseenter', () => {});
        card.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
  
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center bg-primary overflow-hidden"
      >
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/80 to-primary z-10"></div>
          
          {/* Animated background shapes */}
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-secondary/20 blur-3xl"
            animate={{ 
              x: [0, 30, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
          
          <motion.div 
            className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/20 blur-3xl"
            animate={{ 
              x: [0, -40, 0], 
              y: [0, 40, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        {/* Hero content */}
        <motion.div
          className="container mx-auto px-4 md:px-8 relative z-20 pt-20 pb-24"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                Web Design & Development Agency
              </span>
            </motion.div>

            <AnimatedText
              text="We Create Digital Experiences That Solve Problems"
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
              type="words"
              delay={0.4}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            >
              We transform your ideas into powerful digital solutions that drive growth,
              enhance user experience, and help your business stand out in the digital landscape.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                View Our Work
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator - positioned at the bottom of the hero section */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <span className="text-white/80 text-sm mb-2 font-medium">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 relative"
            animate={{ boxShadow: ["0 0 0 rgba(255, 255, 255, 0)", "0 0 10px rgba(255, 255, 255, 0.3)", "0 0 0 rgba(255, 255, 255, 0)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 bg-white rounded-full absolute"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} className="section py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-gradient">Solutions</span> We Provide
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We offer comprehensive web solutions tailored to your specific needs, 
                helping you achieve your business goals in the digital world.
              </p>
            </FadeInSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-white dark:bg-primary/40 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="text-secondary font-medium inline-flex items-center"
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section with Parallax */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxSection direction="left">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-lg"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Team collaboration" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ParallaxSection>
            
            <ParallaxSection direction="right">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  We're a team of <span className="text-gradient">creative minds</span> passionate about digital excellence
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  At KashTech Solutions, we combine creativity with technical expertise to deliver 
                  exceptional digital experiences that help businesses thrive in the digital age.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "User-centered design approach",
                    "Cutting-edge technologies",
                    "Agile development methodology",
                    "Continuous support and maintenance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section ref={processRef} className="section py-24">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="text-gradient">Process</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We follow a structured approach to ensure every project is delivered 
                on time, within budget, and exceeds expectations.
              </p>
            </FadeInSection>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 p-4">
                      <div className={`bg-white dark:bg-primary/40 p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="text-4xl font-bold text-secondary/20 mb-2">{step.number}</div>
                        <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>
                    
                    <div className="hidden md:block md:w-1/2 relative">
                      {/* Circle marker on timeline */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-white dark:border-gray-900"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use Section */}
      <section ref={techRef} className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Technologies We <span className="text-gradient">Use</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge technologies to build robust, scalable, and high-performance digital solutions.
              </p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* React */}
            <FadeInSection delay={0.1}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">React</span>
              </div>
            </FadeInSection>

            {/* TypeScript */}
            <FadeInSection delay={0.2}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">TypeScript</span>
              </div>
            </FadeInSection>

            {/* Node.js */}
            <FadeInSection delay={0.3}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">Node.js</span>
              </div>
            </FadeInSection>

            {/* Tailwind CSS */}
            <FadeInSection delay={0.4}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="Tailwind CSS"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">Tailwind CSS</span>
              </div>
            </FadeInSection>

            {/* MongoDB */}
            <FadeInSection delay={0.5}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">MongoDB</span>
              </div>
            </FadeInSection>

            {/* AWS */}
            <FadeInSection delay={0.6}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                  alt="AWS"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">AWS</span>
              </div>
            </FadeInSection>

            {/* Next.js */}
            <FadeInSection delay={0.7}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="w-16 h-16 mb-3 dark:bg-white dark:rounded-full dark:p-1"
                />
                <span className="font-medium">Next.js</span>
              </div>
            </FadeInSection>

            {/* GraphQL */}
            <FadeInSection delay={0.8}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">GraphQL</span>
              </div>
            </FadeInSection>

            {/* Docker */}
            <FadeInSection delay={0.9}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  alt="Docker"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">Docker</span>
              </div>
            </FadeInSection>

            {/* Redux */}
            <FadeInSection delay={1.0}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  alt="Redux"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">Redux</span>
              </div>
            </FadeInSection>

            {/* Firebase */}
            <FadeInSection delay={1.1}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="Firebase"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">Firebase</span>
              </div>
            </FadeInSection>

            {/* Figma */}
            <FadeInSection delay={1.2}>
              <div className="tech-card flex flex-col items-center p-4 bg-white dark:bg-primary/40 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="Figma"
                  className="w-16 h-16 mb-3"
                />
                <span className="font-medium">Figma</span>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to transform your digital presence?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to create a stunning website that drives results for your business.
                Contact us today to get started on your project.
              </p>
              <Link to="/contact" className="btn-primary text-lg px-8 py-4">
                Start Your Project
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;