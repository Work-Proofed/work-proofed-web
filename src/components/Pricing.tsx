'use client';

import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

const tiers = [
  {
    name: 'Solo Pro',
    price: '$29',
    period: 'per month',
    description: 'Perfect for independent service professionals',
    features: [
      'Unlimited job tickets',
      'Before/after photo storage',
      'Client management',
      'Instant invoicing',
      'Payment processing (2.5%)',
      'Automated reminders',
      'Mobile app access',
      '24/7 email support',
    ],
    cta: 'Start Free Trial',
    mostPopular: false,
  },
  {
    name: 'Team Pro',
    price: '$79',
    period: 'per month',
    description: 'Best for small teams up to 5 users',
    features: [
      'Everything in Solo Pro, plus:',
      'Team management',
      '5 user accounts',
      'Team performance tracking',
      'Job assignment',
      'Team chat',
      'Advanced reporting',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'per month',
    description: 'For larger organizations with custom needs',
    features: [
      'Everything in Team Pro, plus:',
      'Unlimited users',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantee',
      'Training & onboarding',
    ],
    cta: 'Contact Sales',
    mostPopular: false,
  },
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
            Choose the plan that fits your business. All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:gap-x-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl bg-white p-8 shadow-lg flex flex-col ${
                tier.mostPopular ? 'ring-2 ring-brand' : ''
              }`}
            >
              {tier.mostPopular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0">
                  <span className="inline-flex rounded-full bg-brand px-4 py-1 text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{tier.name}</h3>
                <p className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">{tier.price}</span>
                  <span className="ml-1 text-xl font-semibold">{tier.period}</span>
                </p>
                <p className="mt-2 text-base text-gray-500">{tier.description}</p>

                <ul className="mt-6 space-y-4">
                  {tier.features.map((feature) => (
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
                  className={`w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-all ${
                    tier.mostPopular
                      ? 'bg-brand text-white hover:bg-brand-dark'
                      : 'bg-brand bg-opacity-10 text-brand hover:bg-opacity-20'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500">
            All plans include unlimited storage, automatic updates, and our 30-day money-back guarantee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 