import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from '../components/FadeInSection';
import ParallaxSection from '../components/ParallaxSection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const techSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate technology cards
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
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: techSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  // Services
  const services = [
    {
      title: "Web Design",
      description: "We create visually stunning, user-friendly websites that captivate your audience and reflect your brand identity.",
      features: [
        "Responsive design for all devices",
        "User-centered interface design",
        "Custom graphics and illustrations",
        "Wireframing and prototyping",
        "Accessibility compliance"
      ],
      icon: (
        <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      )
    },
    {
      title: "Web Development",
      description: "We build robust, scalable web applications using the latest technologies and best practices.",
      features: [
        "Custom web application development",
        "Content management systems",
        "API development and integration",
        "Performance optimization",
        "Security implementation"
      ],
      icon: (
        <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    },
    {
      title: "E-commerce Solutions",
      description: "We create online stores that drive sales, with seamless checkout processes and robust inventory management.",
      features: [
        "Custom e-commerce website development",
        "Shopping cart and checkout optimization",
        "Payment gateway integration",
        "Inventory management systems",
        "Order processing automation"
      ],
      icon: (
        <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      description: "We design intuitive user interfaces and seamless user experiences that delight your customers.",
      features: [
        "User research and persona development",
        "Information architecture",
        "Interaction design",
        "Usability testing",
        "Design systems creation"
      ],
      icon: (
        <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
        </svg>
      )
    },
    {
      title: "Digital Marketing",
      description: "We help you reach your target audience and grow your online presence through strategic digital marketing.",
      features: [
        "Search engine optimization (SEO)",
        "Social media marketing",
        "Content marketing strategy",
        "Email marketing campaigns",
        "Analytics and performance tracking"
      ],
      icon: (
        <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
        </svg>
      )
    },
    {
      title: "Mobile App Development",
      description: "We develop cross-platform mobile applications that provide seamless experiences across all devices.",
      features: [
        "Native and hybrid app development",
        "Cross-platform compatibility",
        "UI/UX design for mobile",
        "App store optimization",
        "Ongoing maintenance and updates"
      ],
      icon: (
        <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ];

  // Technologies with SVG icons from public folder
  const technologies = [
    {
      name: "React",
      icon: <img src="/images/tech/react.svg" alt="React" className="w-full h-full" />
    },
    {
      name: "TypeScript",
      icon: <img src="/images/tech/typescript.svg" alt="TypeScript" className="w-full h-full" />
    },
    {
      name: "Node.js",
      icon: <img src="/images/tech/nodejs.svg" alt="Node.js" className="w-full h-full" />
    },
    {
      name: "MongoDB",
      icon: <img src="/images/tech/mongodb.svg" alt="MongoDB" className="w-full h-full" />
    },
    {
      name: "Next.js",
      icon: <img src="/images/tech/nextjs.svg" alt="Next.js" className="w-full h-full" />
    },
    {
      name: "Tailwind CSS",
      icon: <img src="/images/tech/tailwind.svg" alt="Tailwind CSS" className="w-full h-full" />
    },
    {
      name: "GraphQL",
      icon: <img src="/images/tech/graphql.svg" alt="GraphQL" className="w-full h-full" />
    },
    {
      name: "AWS",
      icon: <img src="/images/tech/aws.svg" alt="AWS" className="w-full h-full" />
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Comprehensive web solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                What We <span className="text-gradient">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We provide end-to-end digital solutions to help your business thrive in the digital landscape.
              </p>
            </FadeInSection>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-white dark:bg-primary/40 rounded-xl p-8 shadow-lg h-full flex flex-col">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-secondary mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-primary text-center mt-auto">
                    Get Started
                  </Link>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ParallaxSection direction="left">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  How We <span className="text-gradient">Work</span>
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Our approach is collaborative and transparent, ensuring that your vision is realized 
                  through a structured process that delivers exceptional results.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Discovery & Planning",
                      description: "We start by understanding your business, goals, and target audience to create a strategic roadmap."
                    },
                    {
                      title: "Design & Prototyping",
                      description: "We create wireframes and visual designs that align with your brand and user expectations."
                    },
                    {
                      title: "Development & Testing",
                      description: "We build your solution using modern technologies and rigorously test for quality assurance."
                    },
                    {
                      title: "Launch & Support",
                      description: "We deploy your solution and provide ongoing support to ensure continued success."
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ParallaxSection>
            
            <ParallaxSection direction="right">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-lg"></div>
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                    alt="Our process" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ParallaxSection>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section ref={techSectionRef} className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Technologies We <span className="text-gradient">Use</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We leverage the latest technologies to build modern, scalable, and performant digital solutions.
              </p>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="tech-card flex flex-col items-center p-6 bg-white dark:bg-primary/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-20 h-20 mb-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
                    {index === 0 && "Building interactive UIs with component-based architecture"}
                    {index === 1 && "Type-safe JavaScript for robust application development"}
                    {index === 2 && "Server-side JavaScript runtime for scalable backends"}
                    {index === 3 && "NoSQL database for flexible data storage solutions"}
                    {index === 4 && "React framework for production-grade applications"}
                    {index === 5 && "Utility-first CSS framework for rapid UI development"}
                    {index === 6 && "API query language for efficient data fetching"}
                    {index === 7 && "Cloud infrastructure for reliable, scalable hosting"}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to start your project?
              </h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss how we can help bring your vision to life.
              </p>
              <Link 
                to="/contact" 
                className="bg-white text-secondary hover:bg-white/90 font-medium py-3 px-8 rounded-lg transition-all duration-300 inline-block"
              >
                Get in Touch
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;