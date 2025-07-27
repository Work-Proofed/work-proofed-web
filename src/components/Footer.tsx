'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/workproofed-icon.png"
                alt="WorkProofed"
                width={40}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="ml-2 text-2xl font-bold text-white">WorkProofed</span>
            </Link>
            <p className="mt-4 text-gray-300">
              Document your professional journey and showcase your growth with WorkProofed.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="#features" className="text-base text-gray-300 hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-base text-gray-300 hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-base text-gray-300 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-base text-gray-300 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-base text-gray-300 hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © {new Date().getFullYear()} WorkProofed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 