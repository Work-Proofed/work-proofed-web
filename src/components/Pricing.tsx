import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    features: [
      'Basic documentation features',
      'Up to 10 entries per month',
      'Export to PDF',
      'Mobile app access',
    ],
    cta: 'Start Free',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    features: [
      'Unlimited documentation',
      'Advanced analytics',
      'Custom categories',
      'Priority support',
      'Cloud backup',
      'Multiple export formats',
    ],
    cta: 'Start Pro Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Everything in Pro',
      'Custom branding',
      'API access',
      'Dedicated support',
      'Team management',
      'Advanced security',
    ],
    cta: 'Contact Sales',
    featured: false,
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl shadow-lg bg-white p-8 ${
                tier.featured ? 'ring-2 ring-primary' : ''
              }`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-medium text-gray-900">{tier.name}</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="ml-1 text-xl font-medium text-gray-500">
                      /{tier.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                    </div>
                    <p className="ml-3 text-base text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  className={`w-full rounded-lg px-4 py-2 text-center text-sm font-medium ${
                    tier.featured
                      ? 'bg-primary text-white hover:bg-opacity-90'
                      : 'bg-gray-50 text-primary hover:bg-gray-100'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing; 