"use client";

import { useState } from "react";
import { Play, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HowItWorks() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium uppercase text-muted-foreground mb-4">
        HOW IT WORKS
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Process flow diagram - 3 cols */}
        <div className="md:col-span-3 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 8v8M8 12h8"/>
                </svg>
              </div>
              <p className="text-xs font-medium text-emerald-500">INVESTMENT</p>
              <p className="text-xs text-gray-500">Create Account</p>
            </div>

            {/* Arrow 1 */}
            <div className="flex-shrink-0 mx-4">
              <ArrowRight className="text-gray-300" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="6" width="18" height="12" rx="2"/>
                  <path d="M3 10h18"/>
                </svg>
              </div>
              <p className="text-xs font-medium">Special Selections</p>
              <p className="text-xs text-gray-500">Invest Securely</p>
            </div>

            {/* Arrow 2 */}
            <div className="flex-shrink-0 mx-4">
              <ArrowRight className="text-gray-300" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <p className="text-xs font-medium">10%+ Consistent</p>
              <p className="text-xs text-gray-500">Investment Returns</p>
            </div>
          </div>
        </div>

        {/* Video player - 2 cols */}
        <div className="md:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="relative h-full min-h-[200px] bg-gray-900">
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <Play size={24} className="text-black ml-1" />
              </button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-3">
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium">Watch Explainer Video</p>
                <button className="text-xs text-emerald-500 font-medium flex items-center gap-1">
                  Learn More <ArrowRight size={12} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}