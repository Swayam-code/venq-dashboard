import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar - fixed width on desktop, hidden on mobile with overlay */}
      <div className="hidden md:block md:w-60 h-full">
        <Sidebar />
      </div>
      
      {/* Mobile sidebar - shown only when menu is open */}
      <div className="md:hidden">
        {/* Mobile sidebar toggle would go here */}
      </div>
      
      {/* Main content area */}
      <div className={cn(
        "flex-1 overflow-auto",
        "transition-all duration-300 ease-in-out"
      )}>
        <main className="h-full">{children}</main>
      </div>
    </div>
  );
}