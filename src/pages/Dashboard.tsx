
import React from "react";
import TrackerAPI from "@/components/dashboard/TrackerAPI";
import WidgetCode from "@/components/dashboard/WidgetCode";
import WidgetSettings from "@/components/dashboard/WidgetSettings";
import StatsSummary from "@/components/dashboard/StatsSummary";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import RecentEvents from "@/components/dashboard/RecentEvents";
import ProductsListing from "@/components/dashboard/ProductsListing";
import AIInsights from "@/components/dashboard/AIInsights";
import { useTrackingData } from "@/hooks/useTrackingData";

const Dashboard: React.FC = () => {
  const {
    visitorsCount,
    visitorsDiff,
    conversionRate,
    conversionDiff,
    salesCount,
    salesDiff,
    activeCustomers,
    customersDiff,
    recentEvents,
    chartData,
    products,
    hasData
  } = useTrackingData();

  return (
    <div className="space-y-6">
      {/* Include the TrackerAPI component to handle tracking requests */}
      <TrackerAPI />
      
      {/* Stats Summary */}
      <StatsSummary
        visitorsCount={visitorsCount}
        visitorsDiff={visitorsDiff}
        conversionRate={conversionRate}
        conversionDiff={conversionDiff}
        salesCount={salesCount}
        salesDiff={salesDiff}
        activeCustomers={activeCustomers}
        customersDiff={customersDiff}
      />

      {/* Performance Chart and Widget Code */}
      <div className="grid gap-6 md:grid-cols-2">
        <PerformanceChart chartData={chartData} hasData={hasData} />
        <WidgetCode />
      </div>

      {/* Recent Events */}
      <RecentEvents recentEvents={recentEvents} />

      {/* Products Listing - remove the products prop */}
      <ProductsListing />

      {/* AI Insights and Widget Settings */}
      <div className="grid gap-6 md:grid-cols-2">
        <AIInsights hasData={hasData} products={products} />
        <WidgetSettings />
      </div>
    </div>
  );
};

export default Dashboard;
