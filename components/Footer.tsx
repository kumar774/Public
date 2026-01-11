import React from 'react';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold font-hindi">जनसेवा कनेक्ट</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Dedicated to transparency, progress, and the well-being of every citizen. 
              Together we can build a stronger community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-saffron-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-saffron-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About the Leader</Link></li>
              <li><Link to="/help" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/complaint" className="text-gray-400 hover:text-white transition-colors">File a Complaint</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Office</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-saffron-500">Reach Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 mt-1" />
                <span className="text-gray-400">123 Janpath Road,<br />Civil Lines, New Delhi - 110001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <span className="text-gray-400">+91 11 2345 6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <span className="text-gray-400">contact@leaderoffice.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} JanSeva Office. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <span className="hover:text-gray-300 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;