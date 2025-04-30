"use client";

import { Phone } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="call-to-action">
      <h3 className="text-sm font-medium uppercase text-emerald-500 mb-2">
        CALL OR WHATSAPP
      </h3>
      <h2 className="text-lg font-semibold mb-1">Connect Now!</h2>
      <p className="text-sm text-gray-500 mb-4">
        Your Investment Manager is here for you anytime you need help
      </p>
      <button className="w-full bg-black text-white py-2.5 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-900 transition-colors">
        <Phone size={16} />
        <span className="text-sm font-medium">Book a Call Now</span>
      </button>
    </div>
  );
}