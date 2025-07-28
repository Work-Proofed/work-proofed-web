'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="WorkProofed"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-white">WorkProofed</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="#features" className="text-gray-100 hover:text-white">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-100 hover:text-white">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-100 hover:text-white">
              Contact
            </Link>
            <Link 
              href="/app" 
              className="px-4 py-2 rounded-lg bg-white text-brand hover:bg-gray-100 transition-all"
            >
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 