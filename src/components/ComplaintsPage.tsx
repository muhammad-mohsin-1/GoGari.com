import { useState } from 'react';
import { AlertTriangle, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNotifications } from '../context/NotificationContext';

interface ComplaintsPageProps {
  onLogout: () => void;
}

export default function ComplaintsPage({ onLogout }: ComplaintsPageProps) {
  const { addNotification } = useNotifications();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    bookingId: '',
    category: '',
    description: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const complaintCategories = [
    'Vehicle Condition',
    'Booking Issues',
    'Payment Problems',
    'Staff Behavior',
    'Delay in Service',
    'Cleanliness',
    'Mechanical Issues',
    'Other'
  ];

  const validateName = (value: string) => {
    if (!/^[a-zA-Z\s]+$/.test(value) || value.trim().length < 3) {
      return 'Name must contain only letters and be at least 3 characters';
    }
    return '';
  };

  const validateEmail = (value: string) => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const validatePhone = (value: string) => {
    if (!/^03\d{9}$/.test(value)) {
      return 'Phone number must start with 03 and be 11 digits';
    }
    return '';
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};

    // Validate name
    const nameError = validateName(formData.name);
    if (nameError) newErrors.name = nameError;

    // Validate email
    const emailError = validateEmail(formData.email);
    if (emailError) newErrors.email = emailError;

    // Validate phone
    const phoneError = validatePhone(formData.phone);
    if (phoneError) newErrors.phone = phoneError;

    // Validate other fields
    if (!formData.bookingId.trim()) {
      newErrors.bookingId = 'Booking ID is required';
    }
    if (!formData.category) {
      newErrors.category = 'Please select a complaint category';
    }
    if (formData.description.trim().length < 20) {
      newErrors.description = 'Please provide at least 20 characters describing your complaint';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add notification
    const now = new Date();
    addNotification({
      type: 'complaint',
      userName: formData.name,
      message: `Complaint lodged: ${formData.category}`,
      date: now.toLocaleDateString('en-GB'),
      time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
    });

    // Show success
    setShowSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        bookingId: '',
        category: '',
        description: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <AlertTriangle className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl text-white mb-4">Lodge a Complaint</h1>
            <p className="text-xl text-white">
              We value your feedback and are committed to resolving any issues promptly
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8"
        >
          <h2 className="text-xl text-gray-800 mb-3">Before You Submit</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Please provide detailed information about your complaint</li>
            <li>• Include your booking ID for faster resolution</li>
            <li>• We aim to respond within 24-48 hours</li>
            <li>• You will receive updates via email and phone</li>
          </ul>
        </motion.div>

        {/* Complaint Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <h2 className="text-2xl text-gray-800 mb-6">Complaint Details</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[a-zA-Z\s]*$/.test(value)) {
                      handleInputChange('name', value);
                    }
                  }}
                  onBlur={() => {
                    if (formData.name) {
                      setErrors(prev => ({ ...prev, name: validateName(formData.name) }));
                    }
                  }}
                  className={`w-full px-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="Muhammad Mohsin"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => {
                    if (formData.email) {
                      setErrors(prev => ({ ...prev, email: validateEmail(formData.email) }));
                    }
                  }}
                  className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="mohsin@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length <= 11 && /^\d*$/.test(value)) {
                      handleInputChange('phone', value);
                    }
                  }}
                  onBlur={() => {
                    if (formData.phone) {
                      setErrors(prev => ({ ...prev, phone: validatePhone(formData.phone) }));
                    }
                  }}
                  className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="03001234567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Booking ID <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.bookingId}
                  onChange={(e) => handleInputChange('bookingId', e.target.value)}
                  className={`w-full px-4 py-3 border ${errors.bookingId ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  placeholder="BKG123456"
                />
                {errors.bookingId && <p className="text-red-500 text-sm mt-1">{errors.bookingId}</p>}
              </div>
            </div>

            {/* Complaint Category */}
            <div>
              <label className="block text-gray-700 mb-2">
                Complaint Category <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
                className={`w-full px-4 py-3 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              >
                <option value="">Select a category</option>
                {complaintCategories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p>}
            </div>

            {/* Description */}
            <div>
              <label className="block text-gray-700 mb-2">
                Detailed Description <span className="text-red-500">*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={6}
                className={`w-full px-4 py-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none`}
                placeholder="Please describe your complaint in detail. Include dates, times, and any relevant information..."
              />
              <div className="flex justify-between items-center mt-1">
                {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                <p className="text-gray-500 text-sm ml-auto">{formData.description.length} / 500 characters</p>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Complaint
            </button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-6 text-center"
        >
          <h3 className="text-xl text-gray-800 mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-4">Contact our customer support team directly</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+923224374661" className="text-blue-600 hover:text-blue-700">
              📞 +92 322 4374661
            </a>
            <a href="mailto:mohsinimran203@gmail.com" className="text-blue-600 hover:text-blue-700">
              ✉️ mohsinimran203@gmail.com
            </a>
          </div>
        </motion.div>
      </div>

      <Footer />

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-2xl p-8 max-w-md text-center"
            >
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl text-gray-800 mb-2">Complaint Submitted!</h3>
              <p className="text-gray-600">
                Thank you for your feedback. Our team will review your complaint and contact you within 24-48 hours.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
