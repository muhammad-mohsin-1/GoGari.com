import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { Scale, FileText, AlertCircle, CreditCard, Ban, Car, MapPin, Phone, Mail } from 'lucide-react';
import { User } from '../App';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface TermsPageProps {
  user?: User;
  onLogout: () => void;
}

export default function TermsPage({ user, onLogout }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar user={user} onLogout={onLogout} />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm"
          >
            <Scale className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-4 font-bold"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Please read these terms carefully before using our services.
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
          >
            <div className="mb-8">
              <p className="text-gray-600 leading-relaxed">
                These Terms and Conditions govern your use of the Gogari car rental service. By accessing or using our 
                website and services, you agree to be bound by these terms. If you do not agree with any part of these 
                terms, you may not use our services.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <Car className="w-5 h-5 text-blue-500" />
                    1. Rental Requirements
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>The driver must be at least 21 years of age.</li>
                    <li>A valid driver's license held for at least one year is required.</li>
                    <li>International renters must provide a valid International Driving Permit (IDP) along with their national license.</li>
                    <li>A valid CNIC (for Pakistani nationals) or Passport (for foreigners) is mandatory.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-blue-500" />
                    2. Booking and Payment
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <p className="mb-2">
                    Reservations can be made online or via phone. A security deposit is required at the time of vehicle pickup.
                    The deposit amount varies by vehicle category.
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>We accept major credit/debit cards and cash.</li>
                    <li>Full rental payment is due upon vehicle pickup.</li>
                    <li>Late returns will incur additional hourly or daily charges.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <Ban className="w-5 h-5 text-blue-500" />
                    3. Vehicle Use Restrictions
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <p className="mb-2">The vehicle must NOT be used for:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Transporting illegal substances or dangerous goods.</li>
                    <li>Racing, rallying, or off-road driving (unless using a designated 4x4 vehicle).</li>
                    <li>Sub-renting or teaching someone to drive.</li>
                    <li>Driving under the influence of alcohol or drugs.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5 text-blue-500" />
                    4. Insurance and Liability
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <p>
                    Basic insurance is included in the rental price, covering third-party liability. However, the renter 
                    is responsible for any damage to the vehicle up to the deductible amount. Comprehensive insurance 
                    waivers are available for purchase. The renter is fully liable for damage caused by negligence or 
                    violation of these terms.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Contact Section at bottom matching Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us Regarding Terms</h3>
              <div className="grid md:grid-cols-3 gap-6">
                 <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">MM Alam Road, Gulberg III,<br/>Lahore, Pakistan</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+92 322 4374661</p>
                    </div>
                 </div>
                 <div className="flex items-start gap-3">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">mohsinimran203@gmail.com</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}