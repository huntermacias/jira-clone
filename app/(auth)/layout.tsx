"use client"; // Ensures this is a client-side component

import Image from 'next/image';
import React from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { ThemeProvider } from '@/components/theme-provider';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
          {/* Navigation Bar */}
          <nav className="flex justify-between items-center w-full mx-auto mb-8">
            {/* Logo */}
            <Image alt="logo" src="/logo.png" height={120} width={120} />

            {/* Theme Toggle Button */}
            <ModeToggle />
          </nav>

          {/* Authentication Form Container */}
          <div className="w-full bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            {children}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AuthLayout;
