'use client';

import React, { useState, useEffect } from 'react';

export default function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookiePreference = localStorage.getItem('cookiePreference');
    if (!cookiePreference) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiePreference', 'accepted');
    setVisible(false);
  };

  const handleDecline = () => {
    window.location.href = 'https://www.youtube.com/watch?v=1iZC69TAcfc&list=RDeqjFmsZGBSc&index=2';
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto">
        <video className="mb-4" src="/videos/zumi-wave.mp4" autoPlay loop muted />
        <h1 className="text-3xl font-bold mb-4">Cookie Notice</h1>
        <p className="text-gray-800 mb-6">
          We use cookies to analyze traffic and see if we have any visitors aha. By clicking OK, you agree to our use of cookies.
          By clicking no, you will be redirected to the best youtube song ever :)
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleAccept}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            OK
          </button>
          <button
            onClick={handleDecline}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}