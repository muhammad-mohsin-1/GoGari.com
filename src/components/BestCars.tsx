import { motion } from 'motion/react';
import { Users, Fuel, Settings, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars } from '../data/cars';

export default function BestCars() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-800 mb-4">Our Best Cars</h2>
          <p className="text-xl text-gray-600">Choose from our premium fleet of vehicles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.slice(0, 9).map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* Car Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 fill-white" />
                  <span>{car.rating}</span>
                </div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl text-gray-800 mb-1">{car.name}</h3>
                    <span className="text-gray-500">{car.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl text-blue-600">Rs {car.price.toLocaleString()}</div>
                    <span className="text-gray-500">per day</span>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-t border-b border-gray-200">
                  <div className="flex flex-col items-center">
                    <Users className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">{car.passengers} Seats</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Settings className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">{car.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Fuel className="w-5 h-5 text-gray-600 mb-1" />
                    <span className="text-sm text-gray-600">{car.fuel}</span>
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={`/cars/${car.id}`}
                  className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all text-center"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}