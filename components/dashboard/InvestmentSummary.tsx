import { INVESTMENT_SUMMARY } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type IconName = keyof typeof LucideIcons;

export default function InvestmentSummary() {
  const renderIcon = (iconName: string) => {
    const Icon = LucideIcons[iconName as IconName];
    return Icon ? <Icon size={24} className="text-gray-700 mb-3" /> : null;
  };

  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium uppercase text-muted-foreground mb-4">
        INVEST IN
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {INVESTMENT_SUMMARY.map((item, index) => (
          <div key={index} className="investment-card">
            <div className="flex justify-center items-center mb-2">
              {renderIcon(item.icon)}
            </div>
            <h4 className="text-xl font-bold mb-1 text-gray-900">{item.title}</h4>
            <p className="text-sm text-gray-500 text-center">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}