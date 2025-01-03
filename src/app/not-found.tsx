"use client";

import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function SearchComponent() {
  return <div>Search Results</div>;
}

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 text-center max-w-md w-full border-4 border-pink-200">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/notfound.gif"
              alt="Cute assistant not found"
              width={250}
              height={250}
              className="rounded-xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4">
            Oops! Lost in Space
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            The page you&apos;re looking for seems to have teleported to another dimension. Let&apos;s bring you back home!
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-transform shadow-md"
          >
            Return to Safety
          </Link>
          <div className="mt-6">
            <Image
              src="/images/kawaii-star.png"
              alt="Kawaii star"
              width={50}
              height={50}
              className="inline-block mx-2 animate-bounce"
            />
            <Image
              src="/images/kawaii-heart.png"
              alt="Kawaii heart"
              width={50}
              height={50}
              className="inline-block mx-2 animate-bounce"
            />
            <Image
              src="/images/kawaii-cloud.png"
              alt="Kawaii cloud"
              width={50}
              height={50}
              className="inline-block mx-2 animate-bounce"
            />
          </div>
          <SearchComponent />
        </div>
      </div>
    </Suspense>
  );
}