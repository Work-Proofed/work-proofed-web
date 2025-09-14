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
    demoContent: {
      title: 'Create Job Ticket',
      fields: [
        { label: 'Client Name', placeholder: 'Sarah Johnson' },
        { label: 'Job Description', placeholder: 'Kitchen Renovation - Phase 1' },
        { label: 'Requirements', placeholder: 'Remove old cabinets, install new custom cabinets...' }
      ]
    }
  },
  {
    name: 'Professional Invoicing',
    description: 'Generate beautiful, professional invoices automatically. Include work documentation and payment options.',
    icon: CreditCardIcon,
    benefit: 'Get paid 73% faster',
    demoContent: {
      title: 'Invoice Preview',
      invoice: {
        number: 'WP-2025-001',
        date: '01/06/2025',
        client: 'Sarah Johnson',
        amount: '$2,850.00',
        description: 'Kitchen cabinet refinishing and hardware replacement'
      }
    }
  },
  {
    name: 'Payment Processing',
    description: 'Accept credit cards and bank transfers instantly with our built-in payment processing at just 2.5%.',
    icon: CreditCardIcon,
    benefit: 'Lower fees than competitors',
    demoContent: {
      title: 'Payment Summary',
      payment: {
        subtotal: '$2,850.00',
        fee: '$71.25',
        total: '$2,921.25'
      }
    }
  },
  {
    name: 'Job Documentation',
    description: 'Capture before and after photos, add notes, and maintain a complete record of every job.',
    icon: CameraIcon,
    benefit: 'Reduce disputes by 90%',
    demoContent: {
      title: 'Job Details',
      details: {
        client: 'Sarah Johnson',
        description: 'Complete kitchen renovation including cabinet installation',
        amount: '$4,500.00'
      }
    }
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
                      {/* Demo Content */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-6">
                          <h2 className="text-xl font-semibold text-gray-900">{feature.demoContent.title}</h2>
                          {feature.demoContent.invoice && (
                            <span className="text-sm text-gray-500">#{feature.demoContent.invoice.number}</span>
                          )}
                        </div>

                        {/* Job Creation Form */}
                        {feature.demoContent.fields && (
                          <div className="space-y-4">
                            {feature.demoContent.fields.map(field => (
                              <div key={field.label} className="space-y-2">
                                <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                                <div className="mt-1 rounded-md shadow-sm">
                                  <div className="h-10 bg-gray-50 border border-gray-300 rounded-md"></div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Invoice Preview */}
                        {feature.demoContent.invoice && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center">
                              <div>
                                <p className="text-sm text-gray-500">Invoice Date:</p>
                                <p className="font-medium">{feature.demoContent.invoice.date}</p>
                              </div>
                              <div className="text-right">
                                <p className="text-sm text-gray-500">Amount:</p>
                                <p className="font-medium">{feature.demoContent.invoice.amount}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Description:</p>
                              <p className="text-sm">{feature.demoContent.invoice.description}</p>
                            </div>
                          </div>
                        )}

                        {/* Payment Summary */}
                        {feature.demoContent.payment && (
                          <div className="space-y-4">
                            <div className="rounded-lg bg-gray-50 p-4">
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Subtotal</span>
                                  <span>{feature.demoContent.payment.subtotal}</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-gray-500">Processing Fee (2.5%)</span>
                                  <span>{feature.demoContent.payment.fee}</span>
                                </div>
                                <div className="flex justify-between font-semibold">
                                  <span>Total</span>
                                  <span className="text-brand">{feature.demoContent.payment.total}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Job Details */}
                        {feature.demoContent.details && (
                          <div className="space-y-4">
                            <div>
                              <h3 className="font-medium">{feature.demoContent.details.client}</h3>
                              <p className="text-sm text-gray-500 mt-1">{feature.demoContent.details.description}</p>
                            </div>
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                              <span className="text-lg font-semibold text-brand">{feature.demoContent.details.amount}</span>
                            </div>
                          </div>
                        )}
                      </div>
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