import { ComplaintFormData } from '../types';

export interface ValidationErrors {
  fullName?: string;
  phoneNumber?: string;
  city?: string;
  issueType?: string;
  description?: string;
}

export const validateComplaintForm = (data: ComplaintFormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = 'Full Name is required';
  }

  if (!data.phoneNumber.trim()) {
    errors.phoneNumber = 'Phone Number is required';
  } else if (!/^\d{10}$/.test(data.phoneNumber.replace(/\D/g, ''))) {
    errors.phoneNumber = 'Please enter a valid 10-digit phone number';
  }

  if (!data.city.trim()) {
    errors.city = 'City/District is required';
  }

  if (!data.issueType) {
    errors.issueType = 'Please select an issue type';
  }

  if (!data.description.trim()) {
    errors.description = 'Please describe your issue';
  } else if (data.description.length < 20) {
    errors.description = 'Description must be at least 20 characters';
  }

  return errors;
};