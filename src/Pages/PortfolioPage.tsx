import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import FadeInSection from '../components/FadeInSection';

const PortfolioPage = () => {
  // Portfolio categories
  const categories = [
    'All',
    'Web Design',
    'Web Development',
    'E-commerce',
    'UI/UX Design',
    'Mobile Apps'
  ];

  // Portfolio projects
  const projects = [
    {
      id: 1,
      title: "Eco-Friendly E-commerce Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "A comprehensive e-commerce platform for sustainable products with advanced filtering and checkout features.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"]
    },
    {
      id: 2,
      title: "Financial Services Dashboard",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "A secure dashboard for financial advisors to manage client portfolios and track investments.",
      technologies: ["React", "TypeScript", "Express", "PostgreSQL"]
    },
    {
      id: 3,
      title: "Luxury Real Estate Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80",
      description: "A premium website for a luxury real estate agency with virtual tours and property filtering.",
      technologies: ["Next.js", "Tailwind CSS", "Three.js"]
    },
    {
      id: 4,
      title: "Health & Fitness Mobile App",
      category: "Mobile Apps",
      image: "https://images.unsplash.com/photo-1594882645126-14020914d58d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1185&q=80",
      description: "A mobile application for tracking workouts, nutrition, and health metrics with personalized recommendations.",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      id: 5,
      title: "Restaurant Ordering System",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "An online ordering system for restaurants with real-time order tracking and payment processing.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io"]
    },
    {
      id: 6,
      title: "Travel Booking Platform",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1121&q=80",
      description: "A comprehensive travel booking platform with flight, hotel, and experience reservations.",
      technologies: ["React", "GraphQL", "MongoDB", "Stripe"]
    },
    {
      id: 7,
      title: "Educational Learning Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "An interactive learning platform with courses, quizzes, and progress tracking for students.",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
    },
    {
      id: 8,
      title: "Creative Agency Website",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "A visually stunning website for a creative agency with interactive animations and portfolio showcase.",
      technologies: ["Next.js", "GSAP", "Framer Motion", "Tailwind CSS"]
    },
    {
      id: 9,
      title: "Healthcare Patient Portal",
      category: "UI/UX Design",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "A user-friendly patient portal for healthcare providers with appointment scheduling and medical records.",
      technologies: ["Figma", "Adobe XD", "Sketch"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Our <span className="text-gradient">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Explore our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-secondary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <FadeInSection key={project.id} delay={index * 0.1}>
                  <motion.div 
                    className="bg-white dark:bg-primary/40 rounded-xl overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedProject(project)}
                    whileHover={{ y: -10 }}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <span className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded">
                          {project.category}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </FadeInSection>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="h-80 overflow-hidden">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <span className="text-sm font-medium bg-secondary/10 text-secondary px-3 py-1 rounded">
                    {selectedProject.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {selectedProject.description}
                </p>
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <button 
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                  <Link to="/contact" className="btn-primary">
                    Discuss a Similar Project
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to create your own success story?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's work together to bring your vision to life and create a digital experience that stands out.
              </p>
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;