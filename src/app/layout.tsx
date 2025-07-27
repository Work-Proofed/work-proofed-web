import React from 'react';
import '@/styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ProofWork - Document Your Work Journey',
  description: 'Track and showcase your professional growth with ProofWork - the smart way to document your work journey.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">{children}</body>
    </html>
  );
}
