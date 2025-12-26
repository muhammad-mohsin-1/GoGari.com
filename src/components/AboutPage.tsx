import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { User } from '../App';

interface AboutPageProps {
  user?: User;
  onLogout: () => void;
}

const experts = [
  {
    id: 1,
    name: 'Muhammad Mohsin',
    position: 'Chief Executive Officer',
    image: '/mohsin.jpg',
    description: 'With over 15 years in the automotive industry, Mohsin leads our vision with passion and innovation.'
  },
  {
    id: 2,
    name: 'Ayesha Khan',
    position: 'Operations Manager',
    image: 'https://i.dawn.com/primary/2022/03/622205bf0f2bd.jpg',
    description: 'Ayesha ensures smooth operations across all our locations, prioritizing efficiency.'
  },
  {
    id: 3,
    name: 'Usman Siddique',
    position: 'Fleet Manager',
    image: '/usman.jpg',
    description: 'Usman manages our diverse fleet ensuring top quality vehicles and safety standards.'
  },
  {
    id: 4,
    name: 'Sara Malik',
    position: 'Customer Relations Head',
    image: 'https://www.care.org/wp-content/uploads/2021/11/Hina-portrait-at-desk-DSC_6787-scaled.webp',
    description: 'Sara leads our customer service team with dedication and excellence, ensuring happy clients.'
  }
];

export default function AboutPage({ user, onLogout }: AboutPageProps) {
  const [currentExpert, setCurrentExpert] = useState(0);

  const nextExpert = () => {
    setCurrentExpert((prev) => (prev + 1) % experts.length);
  };

  const prevExpert = () => {
    setCurrentExpert((prev) => (prev - 1 + experts.length) % experts.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={onLogout} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white mb-4 font-bold"
          >
            About Gogari
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            Your trusted partner in car rental services across Pakistan
          </motion.p>
        </div>
      </div>

      {/* Who We Are Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-gray-800 mb-6 font-bold">Who We Are</h2>
              <p className="text-lg text-gray-600 mb-4">
                Gogari is Pakistan's premier car rental service, established with a vision to provide 
                reliable, comfortable, and affordable transportation solutions to our valued customers.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Since our inception, we have been committed to delivering exceptional service quality, 
                maintaining a modern fleet of vehicles, and ensuring customer satisfaction at every step 
                of your journey.
              </p>
              <p className="text-lg text-gray-600">
                With a presence in major cities across Pakistan, we offer flexible rental options 
                suitable for both short-term and long-term needs, from business trips to family vacations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://automark.pk/wp-content/uploads/2019/02/automark-rockstar_tesla_rendered.jpg"
                alt="Our Team Meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl text-gray-800 mb-4 font-semibold">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional car rental services that exceed customer expectations through 
                quality vehicles, competitive pricing, and outstanding customer service. We strive to 
                make every journey comfortable, safe, and memorable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl text-gray-800 mb-4 font-semibold">Our Vision</h3>
              <p className="text-gray-600">
                To become Pakistan's most trusted and preferred car rental service, setting industry 
                standards for quality, reliability, and customer satisfaction. We envision expanding our 
                reach to serve more communities while maintaining our commitment to excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-800 mb-4 font-bold">Meet Our Experts</h2>
            <p className="text-xl text-gray-600">
              The dedicated team behind Gogari's success
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {experts.map((expert, index) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl text-gray-800 mb-2 font-semibold">{expert.name}</h3>
                  <p className="text-blue-600 mb-3 font-medium">{expert.position}</p>
                  <p className="text-gray-600 text-sm">{expert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Slider View */}
          <div className="md:hidden relative">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-80">
                <img
                  src={experts[currentExpert].image}
                  alt={experts[currentExpert].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl text-gray-800 mb-2 font-semibold">{experts[currentExpert].name}</h3>
                <p className="text-blue-600 mb-3 font-medium">{experts[currentExpert].position}</p>
                <p className="text-gray-600">{experts[currentExpert].description}</p>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevExpert}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextExpert}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {experts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentExpert(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentExpert ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-white mb-4 font-bold">Our Core Values</h2>
            <p className="text-xl text-blue-100">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Excellence',
                description: 'We strive for excellence in every aspect of our service'
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Your satisfaction is our top priority'
              },
              {
                icon: Target,
                title: 'Integrity',
                description: 'We operate with honesty and transparency'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white p-6 rounded-xl hover:bg-white/10 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl mb-3 font-semibold">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}