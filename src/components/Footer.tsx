import { Link, useNavigate } from 'react-router-dom';
import { Car, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  const handleLinkClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Gogari */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl">Gogari</span>
            </div>
            <p className="text-gray-400 mb-4">
              Pakistan's premier car rental service offering quality vehicles for all your travel needs. Experience comfort, reliability, and exceptional service.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleLinkClick('/')} className="text-gray-400 hover:text-white transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/cars')} className="text-gray-400 hover:text-white transition-colors">
                  Cars and Packages
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/blog')} className="text-gray-400 hover:text-white transition-colors">
                  Cars Blog
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={() => handleLinkClick('/faq')} className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/privacy')} className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/terms')} className="text-gray-400 hover:text-white transition-colors">
                  Terms and Conditions
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/eco-drive')} className="text-gray-400 hover:text-white transition-colors">
                  Eco Drive
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/complaints')} className="text-gray-400 hover:text-white transition-colors">
                  Complaints
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('/project-details')} className="text-gray-400 hover:text-white transition-colors">
                  Project Details
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  MM Alam Road, Gulberg III, Lahore, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+923224374661" className="text-gray-400 hover:text-white transition-colors">
                  +92 322 4374661
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:mohsinimran203@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  mohsinimran203@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-400 text-sm">
            © 2025 Gogari. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Developed with ❤️ in Pakistan
          </p>
          <p className="text-gray-400 text-sm">
            Developed by Muhammad Mohsin and Usman Siddique
          </p>
        </div>
      </div>
    </footer>
  );
}