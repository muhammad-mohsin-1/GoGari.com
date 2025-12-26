import { Leaf, Battery, Recycle, Wind, TreePine, Award } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';

interface EcoDrivePageProps {
  onLogout: () => void;
}

export default function EcoDrivePage({ onLogout }: EcoDrivePageProps) {
  const ecoFeatures = [
    {
      icon: Battery,
      title: 'Electric & Hybrid Fleet',
      description: 'We offer a growing selection of electric and hybrid vehicles to reduce carbon emissions and promote sustainable transportation.'
    },
    {
      icon: Leaf,
      title: 'Carbon Offset Program',
      description: 'For every rental, we plant trees and invest in renewable energy projects to offset the carbon footprint of your journey.'
    },
    {
      icon: Recycle,
      title: 'Eco-Friendly Maintenance',
      description: 'Our vehicles are maintained using environmentally friendly products and practices, ensuring minimal environmental impact.'
    },
    {
      icon: Wind,
      title: 'Fuel Efficiency Standards',
      description: 'All our vehicles meet strict fuel efficiency standards, helping you save money while protecting the environment.'
    },
    {
      icon: TreePine,
      title: 'Green Partnerships',
      description: 'We partner with eco-friendly hotels, restaurants, and attractions to provide you with sustainable travel options.'
    },
    {
      icon: Award,
      title: 'Sustainability Certifications',
      description: 'Gogari is certified by leading environmental organizations for our commitment to sustainable business practices.'
    }
  ];

  const ecoTips = [
    'Choose hybrid or electric vehicles when available',
    'Plan efficient routes to minimize fuel consumption',
    'Use cruise control on highways for better fuel economy',
    'Avoid idling - turn off the engine when parked',
    'Maintain steady speeds and avoid aggressive acceleration',
    'Keep tires properly inflated for optimal efficiency',
    'Remove unnecessary weight from the vehicle',
    'Use air conditioning sparingly'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />

      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-green-600 to-teal-600">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1704475289650-6ab9fc4a0a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY28lMjBmcmllbmRseSUyMGVsZWN0cmljJTIwY2FyJTIwY2hhcmdpbmd8ZW58MXx8fHwxNzY2Njk2NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080)' }}
        />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Leaf className="w-16 h-16 text-white mx-auto mb-4" />
            <h1 className="text-5xl text-white mb-4">Eco Drive Initiative</h1>
            <p className="text-xl text-white">
              Driving towards a greener future with sustainable car rental solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl text-gray-800 mb-6">Our Environmental Commitment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Gogari, we believe that transportation doesn't have to come at the cost of our planet. 
            We're committed to reducing our environmental impact while providing you with exceptional 
            service and reliable vehicles. Join us in our journey towards sustainable mobility.
          </p>
        </motion.div>

        {/* Eco Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {ecoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Eco-Friendly Driving Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-lg p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl text-gray-800 mb-6 text-center">Eco-Friendly Driving Tips</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Help us make a difference with these simple tips to reduce your environmental impact while driving
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ecoTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 bg-white rounded-lg p-4"
              >
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm">{index + 1}</span>
                </div>
                <span className="text-gray-700">{tip}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white"
        >
          <h2 className="text-3xl mb-8 text-center">Our Environmental Impact in 2025</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">5,000+</div>
              <div className="text-green-100">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">50,000 kg</div>
              <div className="text-green-100">CO₂ Emissions Offset</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">30%</div>
              <div className="text-green-100">Hybrid/Electric Fleet</div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
