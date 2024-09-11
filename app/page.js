"use client";

import Link from "next/link";
import { FaUtensils, FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }); // Delay to add the slide-in effect
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-sky-900 font-noto">
      <div className="space-y-8 text-center">
        <h1 className="text-4xl font-bold mb-8 animate-fade-in font-noto tracking-normal">
          Welcome to{" "}
          <span className="text-orange-800 font-bebas tracking-wider">
            Irie Restaurant
          </span>
        </h1>
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          <Link href="/menu" passHref>
            <div
              className={`flex flex-col gap-4 w-[240px] h-[170px] items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-orange-800 rounded-2xl shadow-lg hover:bg-orange-900 transform transition-transform duration-500 ease-in-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <FaUtensils size={40} />
              <span>View Menu</span>
            </div>
          </Link>
          <Link href="/review" passHref>
            <div
              className={`flex flex-col gap-4 w-[240px] h-[170px] items-center justify-center px-6 py-4 text-lg font-semibold text-white bg-sky-800 rounded-2xl shadow-lg hover:bg-sky-900 transform transition-transform duration-500 ease-in-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <FaStar size={40} />
              <span>Leave a Review</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
