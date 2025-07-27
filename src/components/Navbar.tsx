'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/workproofed-icon.png"
                alt="WorkProofed"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-bold text-brand">WorkProofed</span>
            </Link>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link href="#features" className="text-gray-600 hover:text-brand">
              Features
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-brand">
              Pricing
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-brand">
              Contact
            </Link>
            <Link href="/app" className="btn-primary">
              Launch App
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 