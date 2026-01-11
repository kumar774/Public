import React from 'react';

export interface ComplaintFormData {
  fullName: string;
  phoneNumber: string;
  city: string;
  issueType: string;
  description: string;
  file?: File | null;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  path: string;
}