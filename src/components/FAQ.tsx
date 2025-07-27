'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "How long does it take to get started?",
    answer: "You can be up and running in less than 5 minutes. Just download the app, create your account, and start creating job tickets. No complex setup or training needed—if you can use a smartphone, you can use WorkProofed."
  },
  {
    question: "Do I need to be tech-savvy to use WorkProofed?",
    answer: "Not at all! WorkProofed was built for busy service pros, not tech experts. The app is as simple to use as taking photos or sending a text message. Plus, our support team is always here to help if you need it."
  },
  {
    question: "How does the payment processing work?",
    answer: "We handle all payment processing securely through the app with a simple 2.5% fee—much lower than most competitors. Your clients can pay by credit card or ACH, and funds are typically deposited in your account within 1-2 business days."
  },
  {
    question: "What if my clients don't want to use the app?",
    answer: "Your clients don't need to download anything! They'll receive professional emails with before/after photos and can pay through a simple web link. It's completely seamless for them while making you look more professional."
  },
  {
    question: "Can I try it before committing?",
    answer: "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start. You can test everything risk-free and see how it helps your business before making a decision."
  },
  {
    question: "What makes WorkProofed different from other solutions?",
    answer: "Unlike bloated enterprise software, WorkProofed was built specifically for small service businesses. We focus on what you actually need: easy job management, proof of work, and fast payments—all at a fraction of the cost of traditional solutions."
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we take security seriously. All your data is encrypted, backed up automatically, and stored securely in the cloud. You can access it anytime, anywhere, and never worry about losing important job information or client details."
  },
  {
    question: "What kind of support do you offer?",
    answer: "Every plan includes email support with fast response times. Our Team Pro and Enterprise plans include priority support with direct phone access. Plus, we have extensive help documentation and video tutorials available 24/7."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div id="faq" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Got questions? We've got answers. If you can't find what you're looking for, our support team is always ready to help.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="bg-white rounded-lg shadow-brand p-6 cursor-pointer hover:shadow-lg transition-all duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <dt className="text-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <ChevronDownIcon
                      className={`h-6 w-6 text-brand transition-transform duration-200 ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </div>
                </dt>
                <dd
                  className={`mt-4 text-base text-gray-500 transition-all duration-200 ${
                    openIndex === index ? 'block' : 'hidden'
                  }`}
                >
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Still have questions?{' '}
            <a href="#contact" className="text-brand hover:text-brand-dark font-medium">
              Contact our team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 