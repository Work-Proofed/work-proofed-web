'use client';

import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    name: "Mike Johnson",
    role: "Landscaping Business Owner",
    content: "Since using WorkProofed, client disputes have dropped by 90%. The before/after photos are a game-changer for proving job completion.",
    rating: 5
  },
  {
    name: "Sarah Martinez",
    role: "House Cleaning Service",
    content: "I used to spend hours chasing payments. Now my clients pay instantly when they see the completed work photos. Best investment for my business!",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Pool Service Pro",
    content: "The automated invoicing and payment reminders have cut my admin time in half. Plus, my customers love the professional service photos.",
    rating: 5
  }
];

const stats = [
  { label: 'Faster Payments', value: '73%' },
  { label: 'Fewer Disputes', value: '90%' },
  { label: 'Time Saved', value: '15hrs/week' },
  { label: 'Payment Processing', value: '2.5%' }
];

const Proof = () => {
  return (
    <div id="proof" className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Service Pros Like You
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Join thousands of service professionals who've transformed their business with WorkProofed
          </p>
        </div>

        {/* Stats */}
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-lg shadow-brand text-center">
                <p className="text-3xl font-extrabold text-brand">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white rounded-xl shadow-brand p-8 transform transition duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
              <div>
                <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proof; 