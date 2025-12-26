import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'motion/react';
import { Shield, Lock, Eye, FileText, ChevronDown, MapPin, Phone, Mail, Users } from 'lucide-react';
import { useState } from 'react';
import { User } from '../App';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface PrivacyPageProps {
  user?: User;
  onLogout: () => void;
}

export default function PrivacyPage({ user, onLogout }: PrivacyPageProps) {
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
            <Shield className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl text-white mb-4 font-bold"
          >
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100"
          >
            Your privacy is our priority. Learn how we protect your data.
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
                At Gogari, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, and safeguard your data when you use our car rental services 
                and website.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-blue-500" />
                    1. Information We Collect
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <p className="mb-2">We collect information that you provide directly to us, including:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Name, email address, phone number, and postal address.</li>
                    <li>Driver's license information and government-issued ID.</li>
                    <li>Payment information (credit card details are processed securely by our payment partners).</li>
                    <li>Rental history and preferences.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <Eye className="w-5 h-5 text-blue-500" />
                    2. How We Use Your Information
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <p className="mb-2">We use the information we collect to:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Process your car rental bookings and payments.</li>
                    <li>Communicate with you about your reservation and our services.</li>
                    <li>Verify your identity and eligibility to rent a vehicle.</li>
                    <li>Improve our website, fleet, and customer service.</li>
                    <li>Send you promotional offers and newsletters (you can opt-out at any time).</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <Lock className="w-5 h-5 text-blue-500" />
                    3. Data Security
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <p>
                    We implement appropriate technical and organizational measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. We use SSL encryption for data 
                    transmission and secure servers for storage. However, no method of transmission over the Internet 
                    is 100% secure.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline hover:text-blue-600 py-4 text-lg font-semibold text-gray-800">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    4. Sharing of Information
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  <p className="mb-2">We do not sell your personal information to third parties. We may share your information with:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Service providers who assist in our operations (e.g., payment processors, insurance providers).</li>
                    <li>Law enforcement agencies if required by law or to protect our rights and safety.</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Contact Section at bottom matching Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Us Regarding Privacy</h3>
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