import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Card from '../components/Card';

const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Our Office</h1>
        <p className="text-lg text-gray-600">
          We are here to listen. Visit us, call us, or send an email. 
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Contact Info Cards */}
        <div className="space-y-6">
          <Card className="flex items-start space-x-4">
            <div className="bg-saffron-100 p-3 rounded-lg">
              <MapPin className="h-6 w-6 text-saffron-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Main Office</h3>
              <p className="text-gray-600 mt-1">
                123 Janpath Road, Civil Lines,<br />
                New Delhi, Delhi - 110001
              </p>
            </div>
          </Card>

          <Card className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Phone Support</h3>
              <p className="text-gray-600 mt-1">
                General Inquiry: +91 11 2345 6789<br />
                Helpline: 1800-123-4567
              </p>
            </div>
          </Card>

          <Card className="flex items-start space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Email</h3>
              <p className="text-gray-600 mt-1">
                contact@leaderoffice.in<br />
                helpdesk@leaderoffice.in
              </p>
            </div>
          </Card>

          <Card className="flex items-start space-x-4">
             <div className="bg-gray-100 p-3 rounded-lg">
              <Clock className="h-6 w-6 text-gray-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Public Visiting Hours</h3>
              <p className="text-gray-600 mt-1">
                Monday - Friday: 10:00 AM - 1:00 PM<br />
                Saturday: 10:00 AM - 12:00 PM<br />
                <span className="text-xs text-red-500 font-semibold">Closed on Sundays & Public Holidays</span>
              </p>
            </div>
          </Card>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gray-200 rounded-2xl overflow-hidden min-h-[400px] shadow-inner relative flex items-center justify-center">
             <div className="text-center p-8">
               <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
               <p className="text-gray-500 font-semibold text-lg">Interactive Map Placeholder</p>
               <p className="text-gray-400 text-sm">Google Maps API Integration would go here.</p>
             </div>
             {/* Simulating map iframe */}
             <div className="absolute inset-0 bg-gray-300 opacity-20 pointer-events-none" style={{backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        </div>

      </div>
    </div>
  );
};

export default Contact;