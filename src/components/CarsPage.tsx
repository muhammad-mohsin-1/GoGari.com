import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { Users, Fuel, Settings, Star, SlidersHorizontal, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cars as allCars } from '../data/cars';

interface CarsPageProps {
  onLogout: () => void;
}

export default function CarsPage({ onLogout }: CarsPageProps) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 25000],
    category: '',
    location: '',
    transmission: ''
  });

  // Smart filtering - strict matching
  const filteredCars = allCars.filter((car) => {
    if (car.price < filters.priceRange[0] || car.price > filters.priceRange[1]) return false;
    if (filters.category && car.category !== filters.category) return false;
    if (filters.location && car.location !== filters.location) return false;
    if (filters.transmission && car.transmission !== filters.transmission) return false;
    return true;
  });

  const FilterPanel = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl text-gray-800">Filters</h3>
        {mobileFiltersOpen && (
          <button
            onClick={() => setMobileFiltersOpen(false)}
            className="lg:hidden text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-gray-700 mb-3">Price Range (per day)</label>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="25000"
            step="1000"
            value={filters.priceRange[1]}
            onChange={(e) =>
              setFilters({
                ...filters,
                priceRange: [0, parseInt(e.target.value)]
              })
            }
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Rs 0</span>
            <span>Rs {filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Category */}
      <div>
        <label className="block text-gray-700 mb-3">Category</label>
        <select
          value={filters.category}
          onChange={(e) => setFilters({ ...filters, category: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Categories</option>
          <option value="Economy">Economy</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      {/* Location */}
      <div>
        <label className="block text-gray-700 mb-3">Location</label>
        <select
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Locations</option>
          <option value="Islamabad">Islamabad</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Rawalpindi">Rawalpindi</option>
        </select>
      </div>

      {/* Transmission */}
      <div>
        <label className="block text-gray-700 mb-3">Transmission</label>
        <select
          value={filters.transmission}
          onChange={(e) => setFilters({ ...filters, transmission: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() =>
          setFilters({
            priceRange: [0, 25000],
            category: '',
            location: '',
            transmission: ''
          })
        }
        className="w-full py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-all"
      >
        Reset Filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-white mb-4">Our Fleet</h1>
          <p className="text-xl text-blue-100">
            Find the perfect car for your journey
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel />
            </div>
          </div>

          {/* Mobile Filter Button */}
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="lg:hidden fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg z-40 hover:bg-blue-700 transition-all"
          >
            <SlidersHorizontal className="w-6 h-6" />
          </button>

          {/* Mobile Filters */}
          {mobileFiltersOpen && (
            <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 p-4">
              <div className="bg-white rounded-xl max-h-[90vh] overflow-y-auto">
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Cars Grid */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {filteredCars.length} of {allCars.length} cars
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredCars.map((car, index) => (
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
                        <div className="text-2xl text-blue-600">
                          Rs {car.price.toLocaleString()}
                        </div>
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

                    {/* Book Button */}
                    <Link
                      to={`/cars/${car.id}`}
                      className="block w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg text-center"
                    >
                      View Details
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredCars.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No cars found matching your filters</p>
                <button
                  onClick={() =>
                    setFilters({
                      priceRange: [0, 25000],
                      category: '',
                      location: '',
                      transmission: ''
                    })
                  }
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}