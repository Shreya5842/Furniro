import { motion } from 'framer-motion';
import heroImg from '../assets/hero.jpg';

const Hero = () => {
  return (
    <section
      className="relative min-h-[600px] bg-no-repeat bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 max-w-3xl text-left px-4 md:px-8 py-12 bg-[#F9F1E7] rounded-xl ml-auto mr-8 shadow-lg"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="uppercase tracking-widest text-sm mb-2 text-gray-600"
        >
          New Arrival
        </motion.p>

        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-primary leading-snug"
        >
          Discover Our<br />New Collection
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mb-8 text-gray-600"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis.
        </motion.p>

        <motion.a
          href="#products"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="inline-block bg-primary text-white px-6 py-3 rounded-full hover:bg-dark transition duration-300"
        >
          Buy Now
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
