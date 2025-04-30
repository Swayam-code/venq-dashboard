"use client";

import { Check } from "lucide-react";
import { ACCOUNT_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function AccountProgress() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-500 mb-1">
          Only {ACCOUNT_STEPS.filter(step => !step.completed).length} Steps to go
        </h3>
        <p className="text-xs text-gray-400">
          Complete the steps to get your Investment Journey kickstarted now!
        </p>
      </div>
      
      <div className="space-y-6 relative">
        {/* Vertical connecting line */}
        <div className="absolute top-0 bottom-0 left-[15px] w-0.5 bg-gray-200 z-0"></div>
        
        {ACCOUNT_STEPS.map((step, index) => (
          <div key={step.id} className="flex items-start relative z-10">
            <div className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center mr-3",
              step.completed 
                ? "bg-emerald-500 text-white" 
                : "bg-gray-200 text-gray-400"
            )}>
              {step.completed ? (
                <Check size={16} />
              ) : (
                <span className="text-sm">{index + 1}</span>
              )}
            </div>
            <div className="flex-1">
              <p className={cn(
                "text-sm font-medium",
                step.completed ? "text-emerald-500" : "text-gray-600"
              )}>
                {step.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}