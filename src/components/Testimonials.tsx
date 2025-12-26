import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    location: 'Islamabad',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUUoOgyhrj4F8VqMeEvS-tErmkFOySrqA5MQ&s',
    rating: 5,
    text: 'Excellent service! The car was in perfect condition and the booking process was seamless. Highly recommend Gogari for anyone looking to rent a car in Pakistan.'
  },
  {
    id: 2,
    name: 'Fatima Ali',
    location: 'Karachi',
    image: 'https://img.freepik.com/premium-photo/gorgeous-girl-portrait-wearing-traditional-pakistani-dress-fashion-shoot-garden_658768-601.jpg',
    rating: 5,
    text: 'Amazing experience! The staff was very professional and helpful. The car was clean and well-maintained. Will definitely use Gogari again for my future trips.'
  },
  {
    id: 3,
    name: 'Hassan Malik',
    location: 'Lahore',
    image: 'https://images.unsplash.com/photo-1622860685754-2e0787bc8122?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFraXN0YW5pJTIwYm95c3xlbnwwfHwwfHx8MA%3D%3D',
    rating: 5,
    text: 'Great prices and excellent customer service. I rented a Toyota Corolla for a week and had a wonderful experience. The pickup and drop-off process was very smooth.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real experiences from our valued clients</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
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
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full flex flex-col justify-center">
                  <Quote className="w-12 h-12 text-blue-600 mb-6" />
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-lg mb-8 italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-gray-800 text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-gray-600">{testimonials[currentIndex].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-blue-600 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:bg-blue-600 hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}