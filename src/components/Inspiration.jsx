import { useState, useRef } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence, useInView } from 'framer-motion';

import insp1 from '../assets/insp-1.png';
import insp2 from '../assets/insp-2.png';
// import insp3 from '../assets/insp-3.jpg';

const SLIDES = [
  { img: insp1, label: '01 — Bed Room', headline: 'Inner Peace' },
  { img: insp2, label: '02 — Living', headline: 'Bright Calm' },
  // { img: insp3, label: '03 — Dining', headline: 'Natural Light' },
];

const Inspiration = () => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % SLIDES.length);

  // Ref and inView setup
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 }); // 30% visible triggers animation

  return (
    <section className="py-24 bg-[#F9F1E7] overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
        
        {/* -------- Left Column -------- */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-snug">
            50+ Beautiful rooms<br />inspiration
          </h2>
          <p className="mb-8 text-gray-600 max-w-md">
            Our designer already made a lot of beautiful prototype of rooms that
            inspire you
          </p>
          <a href="#!" className="btn-primary">Explore More</a>
        </motion.div>

        {/* -------- Right Slider -------- */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={SLIDES[index].img}
              src={SLIDES[index].img}
              alt={SLIDES[index].headline}
              className="w-full h-[430px] object-cover rounded-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Caption */}
          <motion.div
            key={SLIDES[index].label}
            initial={{ y: 20, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-6 py-4 rounded-lg max-w-[70%]"
          >
            <p className="text-xs tracking-widest mb-1 text-gray-600">
              {SLIDES[index].label}
            </p>
            <h3 className="text-xl font-semibold text-dark">
              {SLIDES[index].headline}
            </h3>
          </motion.div>

          {/* Arrow Button */}
          <motion.button
            onClick={next}
            aria-label="Next slide"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white
                       w-11 h-11 rounded-full grid place-items-center shadow
                       hover:bg-primary hover:text-white transition"
          >
            <FiChevronRight size={24} />
          </motion.button>
        </motion.div>
      </div>

      {/* -------- Dot Indicators -------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="flex justify-center gap-6 mt-10"
      >
        {SLIDES.map((_, i) =>
          i === index ? (
            <span
              key={i}
              className="relative w-6 h-6 flex items-center justify-center"
            >
              <span className="absolute inset-0 rounded-full border-2 border-primary"></span>
              <span className="w-3 h-3 bg-primary rounded-full"></span>
            </span>
          ) : (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-primary transition"
            />
          )
        )}
      </motion.div>
    </section>
  );
};

export default Inspiration;
