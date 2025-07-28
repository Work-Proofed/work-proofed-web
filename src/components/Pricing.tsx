'use client';

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  'Unlimited job tickets',
  'Before/after photo storage',
  'Client management',
  'Instant invoicing',
  'Payment processing (2.5%)',
  'Automated reminders',
  'Mobile app access',
  '24/7 email support',
  'Team management',
  'Advanced reporting',
  'Priority support',
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            One simple plan with everything you need to manage jobs and get paid faster.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative rounded-2xl bg-white p-8 shadow-lg flex flex-col max-w-lg w-full">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900">Professional Plan</h3>
                <span className="inline-flex rounded-full bg-brand bg-opacity-10 px-4 py-1 text-sm font-semibold text-brand">
                  Most Popular
                </span>
              </div>
              
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold tracking-tight text-gray-900">$59.99</span>
                <span className="ml-1 text-xl font-semibold">/month</span>
              </div>
              <p className="mt-2 text-base text-gray-500">or $599/year (save $120)</p>

              <ul className="mt-6 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-brand" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button
                className="w-full rounded-lg px-4 py-3 text-center text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-all"
              >
                Get Started Now
              </button>
            </div>

            <div className="mt-6">
              <div className="rounded-lg bg-gray-50 p-6">
                <h4 className="text-sm font-medium text-gray-900">Payment Processing</h4>
                <p className="mt-2 text-sm text-gray-500">
                  Only pay for what you process. Standard rate of 2.5% per transaction.
                  Additional Stripe fee of 2.9% + $0.30 applies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            All plans include unlimited storage, automatic updates, and our satisfaction guarantee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 