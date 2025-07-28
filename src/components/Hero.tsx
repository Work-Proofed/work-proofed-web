'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative bg-white">
      {/* Hero background image */}
      <div className="absolute inset-0 h-screen">
        <Image
          src="/images/hero-bg.jpg"
          alt="Professional at work"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 min-h-screen flex flex-col justify-center">
            <div className="pt-6">
              <div className="flex items-center">
                <Image
                  src="/images/logo.svg"
                  alt="WorkProofed"
                  width={50}
                  height={50}
                  className="h-12 w-auto"
                  priority
                />
                <span className="ml-3 text-2xl font-bold text-white">WorkProofed</span>
              </div>
            </div>
            
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">You work hard.</span>
                  <span className="block text-brand-light">We prove it.</span>
                </h1>
                <p className="mt-3 text-base text-gray-100 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Stop chasing payments and arguing over completed work. Get the only all-in-one platform that helps service pros manage jobs, share proof of completion, and get paid faster—all from your phone.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand hover:bg-brand-dark md:py-4 md:text-lg md:px-10 transition duration-150"
                    >
                      Get Started Today
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="#how-it-works"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-brand-light bg-white bg-opacity-10 hover:bg-opacity-20 md:py-4 md:text-lg md:px-10 transition duration-150"
                    >
                      See How It Works
                    </Link>
                  </div>
                </div>
              </div>
            </main>

            {/* Feature highlights */}
            <div className="mt-24">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6">
                  <Image
                    src="/images/feature-1.jpg"
                    alt="Job Management"
                    width={64}
                    height={64}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">Easy Job Management</h3>
                  <p className="mt-2 text-gray-200">Create and track jobs right from your phone</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6">
                  <Image
                    src="/images/feature-2.jpg"
                    alt="Photo Proof"
                    width={64}
                    height={64}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">Photo Proof</h3>
                  <p className="mt-2 text-gray-200">Document your work with before/after photos</p>
                </div>
                <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6">
                  <Image
                    src="/images/feature-3.jpg"
                    alt="Instant Payments"
                    width={64}
                    height={64}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-white">Instant Payments</h3>
                  <p className="mt-2 text-gray-200">Get paid faster with built-in processing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 