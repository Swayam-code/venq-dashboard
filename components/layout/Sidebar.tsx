"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Bell, LogOut, Home } from "lucide-react";
import * as LucideIcons from "lucide-react";

type IconName = keyof typeof LucideIcons;

export default function Sidebar() {
  const pathname = usePathname();
  const [expanded] = useState(true);

  const renderIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as IconName];
    return Icon ? <Icon size={18} /> : null;
  };

  const NavItem = ({ name, path, icon }: { name: string; path: string; icon: string }) => (
    <Link href={path} className="w-full">
      <div className={cn(
        "sidebar-link",
        pathname === path && "active"
      )}>
        <div className="flex-shrink-0">{renderIcon(icon)}</div>
        {expanded && <span className="text-sm font-medium">{name}</span>}
      </div>
    </Link>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <div className="px-3 py-2">
      <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
        {expanded ? title : ""}
      </h3>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-black text-white">
      <div className="p-4 mb-2">
        <div className="flex items-center justify-center">
          <div className="flex items-center h-8">
            {/* V */}
            <span className="text-3xl font-medium tracking-tighter mr-0.5">V</span>
            
            {/* Custom E with three lines */}
            <div className="inline-flex flex-col justify-center h-7 mx-0.5">
              <div className="w-4 h-0.5 bg-white mb-1.5"></div>
              <div className="w-4 h-0.5 bg-white mb-1.5"></div>
              <div className="w-4 h-0.5 bg-white"></div>
            </div>
            
            {/* N */}
            <span className="text-3xl font-medium tracking-tighter mx-0.5">N</span>
            
            {/* Q */}
            <span className="text-3xl font-medium tracking-tighter ml-0.5">Q</span>
          </div>
        </div>
      </div>

      <div className="px-4 mb-6">
        <button className="w-full bg-white text-black py-2 px-4 rounded-md flex items-center justify-center space-x-2 hover:bg-gray-100 transition-colors">
          <Home size={18} />
          <span className="text-sm font-medium">Properties</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-2 space-y-6">
        <div>
          <SectionTitle title="GENERAL" />
          <div className="space-y-1">
            {NAVIGATION_ITEMS.GENERAL.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title="PRODUCTS" />
          <div className="space-y-1">
            {NAVIGATION_ITEMS.PRODUCTS.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>
        </div>

        <div>
          <SectionTitle title="ANALYTICS" />
          <div className="space-y-1">
            {NAVIGATION_ITEMS.ANALYTICS.map((item) => (
              <NavItem key={item.name} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-auto p-4 border-t border-gray-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="font-medium text-sm">S</span>
            </div>
            <div>
              <span className="text-sm font-medium">Sakshamm</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-md hover:bg-gray-800 transition-colors">
              <Bell size={16} />
            </button>
            <button className="p-1.5 rounded-md hover:bg-gray-800 transition-colors">
              <LogOut size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}