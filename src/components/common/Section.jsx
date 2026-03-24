import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-[var(--space-80)] md:py-[var(--space-160)] lg:py-[var(--space-240)] scroll-mt-[100px] ${className}`}
    >
      <div className="section-container">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
