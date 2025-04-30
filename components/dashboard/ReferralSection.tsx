"use client";

import { Gift, ArrowRight } from "lucide-react";

export default function ReferralSection() {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium uppercase text-muted-foreground mb-4">
        REFER VENQ
      </h3>
      
      <div className="bg-emerald-500 rounded-lg overflow-hidden">
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
              <Gift size={20} className="text-white" />
            </div>
            <div>
              <p className="text-xs font-medium text-white/80 mb-0.5">
                REFER A FRIEND
              </p>
              <p className="text-sm font-semibold text-white">
                Earn up to ₹2,000
              </p>
            </div>
          </div>
          
          <button className="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center hover:bg-black/30 transition-colors">
            <ArrowRight size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}