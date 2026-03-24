import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-20 px-6 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
