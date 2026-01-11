import { ComplaintFormData } from '../types';

export const submitComplaint = async (data: ComplaintFormData): Promise<{ success: boolean; message: string }> => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log('API Received Data:', data);

  // Mock success
  return {
    success: true,
    message: 'Complaint submitted successfully. Reference ID: JAN-' + Math.floor(Math.random() * 10000)
  };
};