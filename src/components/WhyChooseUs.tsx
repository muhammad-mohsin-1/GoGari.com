import { motion } from 'motion/react';
import { Shield, DollarSign, Headphones, MapPin, Award, Clock } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Shield,
    title: 'Safe & Secure',
    description: 'All our vehicles are regularly maintained and inspected for your safety'
  },
  {
    id: 2,
    icon: DollarSign,
    title: 'Best Prices',
    description: 'Competitive rates with no hidden charges. Get the best value for your money'
  },
  {
    id: 3,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer support team is available round the clock to assist you'
  },
  {
    id: 4,
    icon: MapPin,
    title: 'Multiple Locations',
    description: 'Pick up and drop off at convenient locations across Pakistan'
  },
  {
    id: 5,
    icon: Award,
    title: 'Quality Fleet',
    description: 'Wide range of well-maintained vehicles from economy to luxury'
  },
  {
    id: 6,
    icon: Clock,
    title: 'Easy Booking',
    description: 'Quick and hassle-free booking process. Reserve your car in minutes'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-800 mb-4">Why Choose Gogari?</h2>
          <p className="text-xl text-gray-600">Your trusted partner for car rentals in Pakistan</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
