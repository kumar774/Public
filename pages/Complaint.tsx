import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, AlertCircle, Loader2 } from 'lucide-react';
import { ComplaintFormData } from '../types';
import { validateComplaintForm, ValidationErrors } from '../utils/formHandler';
import { submitComplaint } from '../api/submitComplaint';

const Complaint: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<ComplaintFormData>({
    fullName: '',
    phoneNumber: '',
    city: '',
    issueType: '',
    description: '',
    file: null
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ValidationErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateComplaintForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to top error
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitComplaint(formData);
      if (response.success) {
        navigate('/thank-you', { state: { message: response.message } });
      }
    } catch (error) {
      console.error('Submission failed', error);
      alert('Failed to submit complaint. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-orange-50/50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-saffron-600 px-8 py-6 text-white">
            <h1 className="text-2xl font-bold">Submit a Complaint / Request Help</h1>
            <p className="text-saffron-100 mt-2 text-sm">Fill out the form below. We will get back to you within 48 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:outline-none transition-colors ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Rahul Verma"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  maxLength={10}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:outline-none transition-colors ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="9876543210"
                />
                {errors.phoneNumber && <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>}
              </div>
            </div>

            {/* City & Issue Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City / District *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:outline-none transition-colors ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="New Delhi"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Issue Type *</label>
                <select
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:outline-none transition-colors bg-white ${errors.issueType ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Category</option>
                  <option value="Roads">Roads & Infrastructure</option>
                  <option value="Water">Water Supply</option>
                  <option value="Electricity">Electricity</option>
                  <option value="Sanitation">Sanitation & Garbage</option>
                  <option value="Health">Health Services</option>
                  <option value="Education">Education</option>
                  <option value="Police">Police / Law & Order</option>
                  <option value="Other">Other</option>
                </select>
                {errors.issueType && <p className="text-red-500 text-xs mt-1">{errors.issueType}</p>}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Detailed Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-saffron-500 focus:outline-none transition-colors ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Please describe the problem in detail. Include location landmarks if possible."
              ></textarea>
              {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}
            </div>

            {/* File Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo/Document (Optional)</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-saffron-400 transition-colors bg-gray-50">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600 justify-center">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-saffron-600 hover:text-saffron-500 focus-within:outline-none"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleFileChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, PDF up to 5MB</p>
                  {formData.file && (
                     <p className="text-sm text-green-600 font-semibold mt-2">Selected: {formData.file.name}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-lg text-white bg-saffron-600 hover:bg-saffron-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-saffron-500 shadow-md transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5" />
                    Submitting...
                  </>
                ) : (
                  'Submit Complaint'
                )}
              </button>
              <p className="text-xs text-gray-500 mt-4 text-center flex items-center justify-center">
                <AlertCircle className="h-3 w-3 mr-1" />
                Your information is secure and will only be used for official purposes.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Complaint;