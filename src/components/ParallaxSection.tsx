import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Speed factor for parallax effect (0-1)
  direction?: 'up' | 'down' | 'left' | 'right';
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className = '',
  speed = 0.2,
  direction = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Calculate transform based on direction
  let transform;
  const distance = 100 * speed; // pixels to move

  switch (direction) {
    case 'up':
      transform = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      break;
    case 'down':
      transform = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      break;
    case 'left':
      transform = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
      break;
    case 'right':
      transform = useTransform(scrollYProgress, [0, 1], [-distance, distance]);
      break;
    default:
      transform = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  }

  const isHorizontal = direction === 'left' || direction === 'right';

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          [isHorizontal ? 'x' : 'y']: transform,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ParallaxSection;