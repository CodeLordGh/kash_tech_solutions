import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
  type?: 'words' | 'chars' | 'lines';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  once = true,
  delay = 0,
  type = 'words',
  tag = 'div',
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  // Split text into array based on type
  const splitText = () => {
    if (type === 'chars') {
      return text.split('');
    } else if (type === 'words') {
      return text.split(' ');
    } else {
      return text.split('\\n');
    }
  };

  const items = splitText();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  // Render based on tag type
  // Use type assertion to help TypeScript understand the component type
  const MotionTag = (motion[tag as keyof typeof motion] || motion.div) as typeof motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {items.map((item, index) => (
        <motion.span
          key={index}
          className="inline-block"
          variants={itemVariants}
          style={{
            marginRight: type === 'words' ? '0.25em' : type === 'chars' ? '0' : undefined,
            display: type === 'lines' ? 'block' : 'inline-block',
          }}
        >
          {item}
        </motion.span>
      ))}
    </MotionTag>
  );
};

export default AnimatedText;