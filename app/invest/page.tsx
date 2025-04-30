import MainLayout from "@/components/layout/MainLayout";
import KycBanner from "@/components/header/KycBanner";

export default function InvestPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <KycBanner />
      <MainLayout>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Investment Opportunities</h1>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <p className="text-lg text-gray-500">Available investment opportunities will appear here.</p>
            <p className="text-sm text-gray-400 mt-2">Complete your KYC to view investment options.</p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}