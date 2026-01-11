import React from 'react';
import { ArrowRight, Users, ShieldCheck, HeartHandshake, Mic2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const Home: React.FC = () => {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-saffron-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                Official Outreach Portal
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-hindi">
                जनसेवा पहले <br />
                <span className="text-saffron-100">Public Service First</span>
              </h1>
              <p className="text-lg md:text-xl text-saffron-50 opacity-90 max-w-lg">
                Building a transparent, responsive, and progressive community together. Your voice matters, and your welfare is our priority.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link 
                  to="/complaint" 
                  className="px-8 py-4 bg-white text-saffron-600 rounded-lg font-bold shadow-lg hover:bg-saffron-50 transition-colors flex items-center"
                >
                  File a Complaint <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-4 bg-saffron-700 text-white rounded-lg font-bold shadow-lg hover:bg-saffron-800 transition-colors"
                >
                  Meet Your Leader
                </Link>
              </div>
            </div>
            <div className="hidden md:block relative">
              <img 
                src="https://picsum.photos/600/600?grayscale" 
                alt="Leader Portrait" 
                className="rounded-2xl shadow-2xl border-4 border-white/20 mx-auto object-cover h-[500px] w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment to You</h2>
          <p className="text-gray-600">
            We are dedicated to bridging the gap between the administration and the citizens through key pillars of governance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:-translate-y-1">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-saffron-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Community First</h3>
            <p className="text-gray-600">
              Prioritizing local needs and fostering a sense of belonging through regular community engagements.
            </p>
          </Card>

          <Card className="text-center hover:-translate-y-1">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="h-8 w-8 text-indiaGreen-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Transparent Governance</h3>
            <p className="text-gray-600">
              Ensuring every decision is made with integrity and every rupee is accounted for in public development.
            </p>
          </Card>

          <Card className="text-center hover:-translate-y-1">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartHandshake className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold mb-3">Rapid Assistance</h3>
            <p className="text-gray-600">
              A dedicated team to handle grievances and provide immediate support for civic issues.
            </p>
          </Card>
        </div>
      </section>

      {/* Latest Updates / Quote */}
      <section className="bg-saffron-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">"Development is not just about roads and bridges, it's about empowering every citizen to dream big."</h2>
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-1 bg-saffron-500 rounded-full"></div>
                  <div>
                    <p className="font-bold text-gray-900">Shri Rahul Sharma</p>
                    <p className="text-sm text-gray-500">Member of Parliament / Public Leader</p>
                  </div>
                </div>
             </div>
             <div className="flex-1 w-full">
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    <Mic2 className="mr-2 h-5 w-5 text-saffron-600" /> Latest Updates
                  </h3>
                  <ul className="space-y-4">
                    <li className="pb-4 border-b border-gray-100 last:border-0">
                      <span className="text-xs font-bold text-saffron-600 bg-saffron-50 px-2 py-1 rounded">New</span>
                      <p className="mt-1 text-gray-700 font-medium">Inauguration of the new community health center in Sector 4.</p>
                      <p className="text-xs text-gray-400 mt-1">2 days ago</p>
                    </li>
                    <li className="pb-4 border-b border-gray-100 last:border-0">
                      <p className="text-gray-700 font-medium">Town hall meeting scheduled for next Sunday regarding water supply improvements.</p>
                      <p className="text-xs text-gray-400 mt-1">5 days ago</p>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;