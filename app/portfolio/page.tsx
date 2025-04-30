import MainLayout from "@/components/layout/MainLayout";
import KycBanner from "@/components/header/KycBanner";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <KycBanner />
      <MainLayout>
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6">Your Portfolio</h1>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 text-center">
            <p className="text-lg text-gray-500">You have no active investments yet.</p>
            <p className="text-sm text-gray-400 mt-2">Complete your KYC to start investing.</p>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}