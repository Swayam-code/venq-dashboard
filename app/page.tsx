import KycBanner from "@/components/header/KycBanner";
import MainLayout from "@/components/layout/MainLayout";
import GreetingSection from "@/components/dashboard/GreetingSection";
import InvestmentSummary from "@/components/dashboard/InvestmentSummary";
import HowItWorks from "@/components/dashboard/HowItWorks";
import ReferralSection from "@/components/dashboard/ReferralSection";
import AccountProgress from "@/components/ui/AccountProgress";
import CallToAction from "@/components/ui/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* KYC Banner - moved back to the top level */}
      <KycBanner />
      
      {/* Main Layout with Sidebar */}
      <MainLayout>
        <div className="flex flex-col md:flex-row h-full">
          {/* Main Content */}
          <div className="flex-1 p-6 md:p-8 overflow-y-auto">
            {/* Greeting */}
            <GreetingSection userName="Sakshamm" />
            
            {/* Investment Summary */}
            <InvestmentSummary />
            
            {/* How It Works */}
            <HowItWorks />
            
            {/* Referral */}
            <ReferralSection />
          </div>
          
          {/* Right Sidebar */}
          <div className="w-full md:w-72 bg-gray-50 p-6 border-t md:border-t-0 md:border-l border-gray-200">
            {/* Call to Action */}
            <CallToAction />
            
            {/* Account Progress */}
            <AccountProgress />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}