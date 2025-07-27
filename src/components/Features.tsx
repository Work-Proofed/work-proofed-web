'use client';

import React from 'react';
import { 
  DocumentCheckIcon,
  PhotoIcon,
  CreditCardIcon,
  BellAlertIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Smart Job Management',
    description: 'Stop juggling paper and spreadsheets. Create, track, and manage all your jobs in one place—as easily as sending a text.',
    icon: DocumentCheckIcon,
    benefit: 'Save 15+ hours every week on admin work'
  },
  {
    name: 'Proof of Completion',
    description: 'End disputes forever with before/after photos and detailed completion records that protect you and build trust with clients.',
    icon: PhotoIcon,
    benefit: 'Reduce client disputes by 90%'
  },
  {
    name: 'Instant Payments',
    description: 'Get paid on the spot with built-in payment processing. No more awkward payment conversations or chasing down checks.',
    icon: CreditCardIcon,
    benefit: 'Get paid 73% faster'
  },
  {
    name: 'Automated Follow-ups',
    description: 'Let the app automatically send invoices, payment reminders, and receipts while you focus on the actual work.',
    icon: BellAlertIcon,
    benefit: 'Never chase payments again'
  },
  {
    name: 'Mobile-First Design',
    description: 'Run your entire business from your phone. No computer needed, no tech skills required—just tap and go.',
    icon: DevicePhoneMobileIcon,
    benefit: 'Work from anywhere, anytime'
  },
  {
    name: 'Business Insights',
    description: 'See exactly how your business is performing with simple reports on jobs, earnings, and client satisfaction.',
    icon: ChartBarIcon,
    benefit: 'Make data-driven decisions'
  }
];

const Features = () => {
  return (
    <div id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-brand font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Built specifically for service professionals who want to look professional, save time, and get paid faster.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative bg-white p-6 rounded-xl shadow-brand hover:shadow-lg transition duration-300">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand bg-opacity-10 text-brand">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="text-sm text-brand font-medium">{feature.benefit}</p>
                  </div>
                </div>
                <p className="mt-3 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features; 