import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ArrowLeft, Users, Fuel, Settings, Star, MapPin, CheckCircle, Calendar } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import PaymentModal from './PaymentModal';
import { cars } from '../data/cars';
import { useNotifications } from '../context/NotificationContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

interface CarDetailPageProps {
  onLogout: () => void;
}

export default function CarDetailPage({ onLogout }: CarDetailPageProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addNotification } = useNotifications();
  
  const car = cars.find(c => c.id === Number(id));
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  if (!car) {
    return (
      <div>
        <Navbar onLogout={onLogout} />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl text-gray-800 mb-4">Car not found</h2>
            <button
              onClick={() => navigate('/cars')}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Back to Cars
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const calculateDays = () => {
    if (!pickupDate || !dropoffDate) return 1;
    const start = new Date(pickupDate);
    const end = new Date(dropoffDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 1;
  };

  const days = calculateDays();
  const totalAmount = car.price * days;

  const handleBooking = () => {
    if (!pickupLocation || !dropoffLocation) {
      alert('Please select pickup and dropoff locations');
      return;
    }
    if (!pickupDate || !dropoffDate) {
      alert('Please select pickup and dropoff dates');
      return;
    }
    setShowConfirmation(true);
  };

  const handleConfirmation = () => {
    setShowConfirmation(false);
    setShowPayment(true);
  };

  const handleCancelBooking = () => {
    const now = new Date();
    addNotification({
      type: 'cancellation',
      userName: localStorage.getItem('user_name') || 'User',
      carName: car.name,
      message: `Booking cancelled for ${car.name}`,
      date: now.toLocaleDateString('en-GB'),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });
    setShowConfirmation(false);
  };

  const handlePaymentSuccess = () => {
    // Add notification
    const now = new Date();
    addNotification({
      type: 'booking',
      userName: localStorage.getItem('user_name') || 'User',
      carName: car.name,
      message: `Booking confirmed for ${car.name}`,
      date: now.toLocaleDateString('en-GB'),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });

    setShowPayment(false);
    setBookingSuccess(true);
    
    setTimeout(() => {
      setBookingSuccess(false);
      navigate('/cars');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Cars
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Car Details - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Car Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-96 object-cover"
              />
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl text-gray-800">{car.name}</h1>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{car.category}</span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{car.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span>{car.rating} Rating</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl text-blue-600">Rs {car.price.toLocaleString()}</div>
                    <span className="text-gray-500">per day</span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-gray-200">
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-gray-600">{car.passengers} Passengers</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <Settings className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-gray-600">{car.transmission}</span>
                  </div>
                  <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
                    <Fuel className="w-6 h-6 text-blue-600 mb-2" />
                    <span className="text-gray-600">{car.fuel}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl text-gray-800 mb-4">About This Car</h2>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <h2 className="text-2xl text-gray-800 mb-4">Features & Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Booking Form - Right Side (Sticky) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-6 text-white sticky top-24"
            >
              <h3 className="text-2xl mb-6">Book This Car</h3>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block mb-2">Pickup Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={pickupLocation}
                      onChange={(e) => setPickupLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-300"
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Multan">Multan</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Peshawar">Peshawar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Dropoff Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <select
                      value={dropoffLocation}
                      onChange={(e) => setDropoffLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-300"
                      required
                    >
                      <option value="">Select City</option>
                      <option value="Islamabad">Islamabad</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Lahore">Lahore</option>
                      <option value="Rawalpindi">Rawalpindi</option>
                      <option value="Multan">Multan</option>
                      <option value="Faisalabad">Faisalabad</option>
                      <option value="Peshawar">Peshawar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Pickup Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(e) => setPickupDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Dropoff Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="date"
                      value={dropoffDate}
                      onChange={(e) => setDropoffDate(e.target.value)}
                      min={pickupDate || new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 rounded-lg focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-black/20 rounded-lg p-4 mb-6 space-y-2 border border-white/10">
                <div className="flex justify-between font-medium">
                  <span>Rs {car.price.toLocaleString()} × {days} day{days > 1 ? 's' : ''}</span>
                  <span>Rs {totalAmount.toLocaleString()}</span>
                </div>
                <div className="border-t border-white/20 pt-2 flex justify-between font-bold text-lg">
                  <span>Total Amount</span>
                  <span>Rs {totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-white text-blue-600 py-4 rounded-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Proceed to Payment
              </button>

              <p className="text-center text-sm text-blue-100 mt-4">
                Free cancellation up to 24 hours before pickup
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Confirmation Dialog */}
      <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Booking</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to book {car.name} from {pickupDate} to {dropoffDate}?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={handleCancelBooking}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmation}>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Payment Modal */}
      {showPayment && (
        <PaymentModal
          amount={totalAmount}
          carName={car.name}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}

      {/* Booking Success Message */}
      {bookingSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md text-center"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h3 className="text-2xl text-gray-800 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600 mb-4">
              Your booking for {car.name} has been confirmed. Check your notifications for details.
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
}