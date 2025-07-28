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
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
                alt="WorkProofed"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
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