'use client';

import React from 'react';
import { 
  ClipboardDocumentCheckIcon,
  CameraIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: "Create Job Tickets in Seconds",
    description: "Quickly create detailed job tickets right from your phone. Add client info, job requirements, and pricing—all with a few taps.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Capture Proof of Work",
    description: "Take before and after photos directly in the app. Show clients exactly what was done, eliminating disputes and building trust.",
    icon: CameraIcon,
  },
  {
    title: "Get Paid Instantly",
    description: "Send professional invoices with proof of completion. Clients can pay immediately through our secure payment system with just 2.5% processing.",
    icon: CreditCardIcon,
  }
];

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Simple Steps to Success
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Get started in minutes and transform how you manage jobs, prove work completion, and get paid.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand bg-opacity-10 mb-6">
                    <step.icon className="h-8 w-8 text-brand" aria-hidden="true" />
                  </div>
                  <span className="text-xl font-bold text-brand mb-2">Step {index + 1}</span>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-base text-gray-500">{step.description}</p>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-full w-12 transform -translate-x-6">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 