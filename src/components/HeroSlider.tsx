import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: 1,
    title: 'Experience Luxury Travel',
    subtitle: 'Premium cars for your journey across Pakistan',
    image: 'https://images.unsplash.com/photo-1760055588304-e25991b3f454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBzZWRhbiUyMGNhciUyMHNpbHZlciUyMHNpZGUlMjB2aWV3JTIwc3R1ZGlvfGVufDF8fHx8MTc2Njc2MjU2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Explore Cars',
    action: '/cars'
  },
  {
    id: 2,
    title: 'Modern Fleet at Your Service',
    subtitle: 'Latest models with cutting-edge technology',
    image: 'https://images.unsplash.com/photo-1759731688111-0c47be0cdd7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwY3J1aXNlciUyMGx1eHVyeSUyMHN1diUyMGV4dGVyaW9yfGVufDF8fHx8MTc2Njc2MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Start Journey',
    action: '/cars'
  },
  {
    id: 3,
    title: 'Adventure Awaits',
    subtitle: 'Perfect vehicles for every destination',
    image: 'https://images.unsplash.com/photo-1658753081535-ba91c8a5e981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWElMjBzcG9ydGFnZSUyMHN1diUyMGNhciUyMGV4dGVyaW9yfGVufDF8fHx8MTc2Njc2MjU2Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'Book Cars',
    action: '/cars'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleCTAClick = () => {
    navigate(slides[currentSlide].action);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            {/* Light gradient overlay instead of full black */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white text-5xl md:text-6xl mb-4"
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-white text-xl md:text-2xl mb-8"
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={handleCTAClick}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {slides[currentSlide].cta}
              </motion.button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 text-gray-800 hover:text-white p-4 rounded-full transition-all z-10 shadow-lg hover:shadow-xl group"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-blue-600 text-gray-800 hover:text-white p-4 rounded-full transition-all z-10 shadow-lg hover:shadow-xl group"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-3 rounded-full transition-all ${ 
              index === currentSlide
                ? 'bg-blue-600 w-8'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75 w-3'
            }`}
          />
        ))}
      </div>
    </div>
  );
}