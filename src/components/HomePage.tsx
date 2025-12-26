import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import HeroSlider from './HeroSlider';
import BookingForm from './BookingForm';
import BestCars from './BestCars';
import WhyChooseUs from './WhyChooseUs';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';

interface HomePageProps {
  user?: any;
  onLogout: () => void;
}

export default function HomePage({ user, onLogout }: HomePageProps) {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={onLogout} />
      
      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Booking Form Section */}
      <div className="relative -mt-20 z-10">
        <BookingForm />
      </div>

      {/* Best Cars Section */}
      <BestCars />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Statistics Section */}
      <Statistics />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Newsletter Section */}
      <Newsletter />

      <Footer />
    </div>
  );
}
