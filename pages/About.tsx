import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About the Leader</h1>
          <div className="w-24 h-1 bg-saffron-500 mx-auto rounded-full"></div>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img 
              src="https://picsum.photos/600/800" 
              alt="Leader working" 
              className="rounded-lg shadow-xl w-full object-cover h-96"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">A Life Dedicated to Service</h2>
            <p className="text-gray-700 leading-relaxed">
              Born and raised in the heart of our district, Shri Rahul Sharma has always been driven by a singular passion: to uplift his community. With a background in social work and public administration, he understands the grassroots issues that affect daily life.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since taking office, his focus has been on practical solutions—improving school infrastructure, ensuring clean water access, and digitizing local governance for better transparency.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-saffron-500">
              <p className="italic text-gray-800 font-medium">
                "My office has no doors. Every citizen is welcome, and every problem is my own until it is solved."
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Achievements */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center">Our Vision & Achievements</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-saffron-500 mb-2">50+</div>
                <h3 className="text-lg font-semibold mb-2">Schools Upgraded</h3>
                <p className="text-gray-600 text-sm">Modernizing education infrastructure with smart labs and libraries.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-indiaGreen-600 mb-2">24/7</div>
                <h3 className="text-lg font-semibold mb-2">Public Assistance</h3>
                <p className="text-gray-600 text-sm">Round-the-clock helpline for emergency civic issues.</p>
             </div>
             <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <h3 className="text-lg font-semibold mb-2">Digital Transparency</h3>
                <p className="text-gray-600 text-sm">All fund allocations and project statuses are available online.</p>
             </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h3 className="text-2xl font-bold mb-6">Political Journey</h3>
          <div className="space-y-8 border-l-2 border-gray-200 ml-3 pl-8 relative">
            
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-saffron-500 border-4 border-white"></span>
              <h4 className="text-lg font-bold text-gray-900">2020 - Present</h4>
              <p className="text-gray-600">Member of Legislative Assembly (MLA)</p>
              <p className="text-gray-500 text-sm mt-1">Focusing on urban development and youth employment.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-gray-300 border-4 border-white"></span>
              <h4 className="text-lg font-bold text-gray-900">2015 - 2020</h4>
              <p className="text-gray-600">District Council Head</p>
              <p className="text-gray-500 text-sm mt-1">Initiated the "Clean District" campaign.</p>
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full bg-gray-300 border-4 border-white"></span>
              <h4 className="text-lg font-bold text-gray-900">2010 - 2015</h4>
              <p className="text-gray-600">Student Union Leader</p>
              <p className="text-gray-500 text-sm mt-1">Advocated for student rights and affordable education.</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default About;