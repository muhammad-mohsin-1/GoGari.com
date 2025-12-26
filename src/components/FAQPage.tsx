import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

interface FAQPageProps {
  onLogout: () => void;
}

const faqs = [
  {
    id: 1,
    question: 'How do I book a car with Gogari?',
    answer: 'Booking a car is simple! Just select your pickup location, dates, and car type on our homepage. Browse available vehicles, choose your preferred car, and complete the booking form. You\'ll receive a confirmation email immediately.'
  },
  {
    id: 2,
    question: 'What documents do I need to rent a car?',
    answer: 'You need a valid CNIC (Computerized National Identity Card), a valid driving license, and a security deposit. International customers need a passport and international driving permit.'
  },
  {
    id: 3,
    question: 'What is the minimum age to rent a car?',
    answer: 'The minimum age to rent a car from Gogari is 21 years. Drivers must have held a valid license for at least one year. Some vehicle categories may have higher age requirements.'
  },
  {
    id: 4,
    question: 'Is insurance included in the rental price?',
    answer: 'Yes, basic insurance coverage is included in all our rental prices. Additional comprehensive coverage options are available for purchase at checkout for extra protection.'
  },
  {
    id: 5,
    question: 'Can I modify or cancel my booking?',
    answer: 'Yes, you can modify or cancel your booking up to 24 hours before the pickup time. Cancellations made less than 24 hours in advance may incur a fee. Please check our cancellation policy for details.'
  },
  {
    id: 6,
    question: 'What is your fuel policy?',
    answer: 'We operate on a "Full to Full" policy. You receive the car with a full tank and should return it full. If returned without a full tank, refueling charges will apply.'
  },
  {
    id: 7,
    question: 'Are there any mileage restrictions?',
    answer: 'Our standard rentals include unlimited mileage within Pakistan. For cross-border travel or special packages, please contact our customer service for specific terms.'
  },
  {
    id: 8,
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major credit cards (Visa, Mastercard), debit cards, and bank transfers. Payment is required at the time of booking confirmation.'
  },
  {
    id: 9,
    question: 'Can I add an additional driver?',
    answer: 'Yes, additional drivers can be added to your rental. They must meet the same age and license requirements as the primary driver. A small fee may apply.'
  },
  {
    id: 10,
    question: 'What happens if the car breaks down?',
    answer: 'In case of breakdown, contact our 24/7 roadside assistance immediately. We provide free roadside assistance and will arrange a replacement vehicle if necessary.'
  },
  {
    id: 11,
    question: 'Can I rent a car for someone else?',
    answer: 'The person driving the car must be present during pickup with their documents. The booking can be made by someone else, but the driver must sign the rental agreement.'
  },
  {
    id: 12,
    question: 'Do you offer long-term rentals?',
    answer: 'Yes, we offer attractive discounts for weekly and monthly rentals. Contact our sales team for customized long-term rental packages.'
  }
];

export default function FAQPage({ onLogout }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onLogout={onLogout} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-white mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100"
          >
            Find answers to common questions about our car rental services
          </motion.p>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left text-lg text-gray-800">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 ml-4 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}