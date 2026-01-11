import React from 'react';
import Card from '../components/Card';
import { BookOpen, Stethoscope, Hammer, Briefcase, Leaf, Lightbulb, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <BookOpen className="h-8 w-8 text-blue-500" />,
    title: 'Education Support',
    description: 'Scholarship guidance, school admission assistance, and library access programs.'
  },
  {
    icon: <Stethoscope className="h-8 w-8 text-red-500" />,
    title: 'Health Services',
    description: 'Help with hospital admissions, government health schemes (Ayushman Bharat), and medical camps.'
  },
  {
    icon: <Hammer className="h-8 w-8 text-gray-600" />,
    title: 'Infrastructure',
    description: 'Report potholes, broken streetlights, water supply issues, and sanitation problems.'
  },
  {
    icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    title: 'Employment',
    description: 'Job fair information, skill development workshops, and self-employment loan guidance.'
  },
  {
    icon: <Leaf className="h-8 w-8 text-indiaGreen-600" />,
    title: 'Agriculture',
    description: 'Assistance for farmers regarding subsidies, crop insurance, and market access.'
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
    title: 'Electricity & Power',
    description: 'Resolution of billing disputes, new connection requests, and power cut grievances.'
  }
];

const Help: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How Can We Help You?</h1>
        <p className="text-lg text-gray-600">
          Our office is committed to providing assistance across various sectors. Browse the services below or contact us directly.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow">
            <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
            <p className="text-gray-600 flex-grow">{service.description}</p>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <Link 
                to="/complaint" 
                className="text-saffron-600 font-medium hover:text-saffron-700 flex items-center text-sm"
              >
                Request Help <span className="ml-1">&rarr;</span>
              </Link>
            </div>
          </Card>
        ))}
      </div>

      {/* Emergency Contact Banner */}
      <div className="mt-16 bg-indiaGreen-700 rounded-2xl p-8 md:p-12 text-white text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-xl">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Immediate Assistance?</h2>
          <p className="text-green-100">Our emergency helpline is available 24/7 for critical issues.</p>
        </div>
        <div className="flex items-center bg-white text-indiaGreen-800 px-6 py-4 rounded-full font-bold text-xl shadow-sm">
          <PhoneCall className="mr-3 h-6 w-6" />
          +91 1800-123-4567
        </div>
      </div>
    </div>
  );
};

export default Help;