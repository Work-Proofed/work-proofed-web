'use client';

import React from 'react';
import Image from 'next/image';
import { 
  DocumentCheckIcon,
  CameraIcon,
  CreditCardIcon,
  BellAlertIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Smart Job Management',
    description: 'Create detailed job tickets in seconds. Add client info, requirements, and pricing with just a few taps.',
    icon: DocumentCheckIcon,
    benefit: 'Save 15+ hours every week on admin work',
    image: '/images/app-create-job.png',
    imageAlt: 'Job Creation Screen'
  },
  {
    name: 'Professional Invoicing',
    description: 'Generate beautiful, professional invoices automatically. Include work documentation and payment options.',
    icon: CreditCardIcon,
    benefit: 'Get paid 73% faster',
    image: '/images/app-invoice-screen.png',
    imageAlt: 'Invoice Screen'
  },
  {
    name: 'Payment Processing',
    description: 'Accept credit cards and bank transfers instantly with our built-in payment processing at just 2.5%.',
    icon: CreditCardIcon,
    benefit: 'Lower fees than competitors',
    image: '/images/app-payment-screen.png',
    imageAlt: 'Payment Processing Screen'
  },
  {
    name: 'Job Documentation',
    description: 'Capture before and after photos, add notes, and maintain a complete record of every job.',
    icon: CameraIcon,
    benefit: 'Reduce disputes by 90%',
    image: '/images/app-job-details.png',
    imageAlt: 'Job Details Screen'
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
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div 
                key={feature.name}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-brand bg-opacity-10 text-brand">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="ml-4 text-2xl font-bold text-gray-900">{feature.name}</h3>
                  </div>
                  <p className="text-lg text-brand font-medium mb-2">{feature.benefit}</p>
                  <p className="text-gray-500 text-lg">{feature.description}</p>
                </div>

                {/* Phone Frame */}
                <div className="flex-1">
                  <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        width={272}
                        height={572}
                        className="dark:hidden"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;