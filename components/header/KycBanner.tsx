"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function KycBanner() {
  return (
    <div className="kyc-banner">
      <div className="text-sm font-medium">
        Complete your KYC now to kickstart your Real Estate investment Journey
      </div>
      <button className="kyc-button">
        Complete KYC <ArrowRight size={16} className="ml-1" />
      </button>
    </div>
  );
}