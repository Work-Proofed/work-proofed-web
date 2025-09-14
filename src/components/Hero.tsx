'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">You work hard.</span>
                <span className="block text-brand">We prove it.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Stop chasing payments and arguing over completed work. Get the only all-in-one platform that helps service pros manage jobs, share proof of completion, and get paid faster—all from your phone.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    href="/signup"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand-dark md:py-4 md:text-lg md:px-10 transition duration-150"
                  >
                    Start Your Free Trial
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    href="#how-it-works"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand bg-gray-50 hover:bg-gray-100 md:py-4 md:text-lg md:px-10 transition duration-150"
                  >
                    See How It Works
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full bg-gray-50 flex items-center justify-center">
          <div className="relative w-full max-w-lg mx-auto p-8">
            {/* Phone Frame */}
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
              <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
              <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
              <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
              <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                {/* Demo Content */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-gray-900">Payment Summary</h2>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Job</span>
                        <span className="font-medium">Kitchen Renovation - Phase 1</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Client</span>
                        <span className="font-medium">Sarah Johnson</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Job ID</span>
                        <span className="font-medium">#12345</span>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Subtotal</span>
                          <span className="font-medium">$2,850.00</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Processing Fee (2.5%)</span>
                          <span className="font-medium">$71.25</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">Total Amount</span>
                          <span className="text-lg font-semibold text-brand">$2,921.25</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            <div className="h-10 w-10 bg-brand/10 rounded-full flex items-center justify-center">
                              <svg className="h-6 w-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                              </svg>
                            </div>
                          </div>
                          <div>
                            <div className="font-medium">Credit Card</div>
                            <div className="text-sm text-gray-500">Visa, Mastercard, American Express</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Features */}
            <div className="absolute top-4 -left-20 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Instant Payments</span>
              </div>
            </div>
            
            <div className="absolute bottom-4 -right-20 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-brand/10 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Proof of Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;