
import React from 'react';
import { BarChart, AreaChart, LineChart } from 'recharts';
import DashboardHeader from '../components/DashboardHeader';
import ConsumptionChart from '../components/ConsumptionChart';
import LeakAlert from '../components/LeakAlert';
import ComparisonCard from '../components/ComparisonCard';
import AITips from '../components/AITips';

interface DashboardProps {
  onLogout: () => void;
  onNavigateToLeakDetails: () => void; // New prop for navigation
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout, onNavigateToLeakDetails }) => {
  return (
    <div className="min-h-screen bg-slate-100">
      <DashboardHeader onLogout={onLogout} />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4">
             <LeakAlert hasLeak={true} onViewDetails={onNavigateToLeakDetails} /> {/* Pass the new prop */}
          </div>

          <div className="col-span-1 md:col-span-2 lg:col-span-3">
             <ConsumptionChart />
          </div>
          
          {/* Adjusted column span for ComparisonCard after removing GoalSetter */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <ComparisonCard userUsage={135} averageUsage={160} />
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <AITips />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;