import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine, Label } from 'recharts';
import DashboardHeader from '../components/DashboardHeader';
import Footer from '../components/Footer';

const ArrowLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
);

// Data for the leak details chart, reflecting the new pattern
const detailedLeakData = [
    { hour: '12am', usage: 2 },
    { hour: '1am', usage: 2 },
    { hour: '2am', usage: 20 },
    { hour: '3am', usage: 24.67 }, // Linear interpolation: 20 + (34-20)/3 * 1
    { hour: '4am', usage: 29.33 }, // Linear interpolation: 20 + (34-20)/3 * 2
    { hour: '5am', usage: 33 }, // Adjusted to 33 as the starting point for 5-8am decline
    { hour: '6am', usage: 25.67 }, // Linear interpolation: 33 - (33-10)/3 * 1
    { hour: '7am', usage: 18.33 }, // Linear interpolation: 33 - (33-10)/3 * 2
    { hour: '8am', usage: 10 },
    { hour: '9am', usage: 0 },
    { hour: '10am', usage: 0 },
    { hour: '11am', usage: 0 },
    { hour: '12pm', usage: 10 },
    { hour: '1pm', usage: 65 }, // The spike
];


const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
          <p className="font-bold text-slate-800">{`${label}`}</p>
          <p className="text-blue-500">{`Usage : ${Math.round(payload[0].value)}L`}</p>
          {label === '1pm' && (
              <p className="text-red-500 font-bold">Leak Detected!</p>
          )}
        </div>
      );
    }
    return null;
};

interface LeakDetailsPageProps {
    onBackToDashboard: () => void;
    onLogout: () => void;
}

const LeakDetailsPage: React.FC<LeakDetailsPageProps> = ({ onBackToDashboard, onLogout }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50/30 via-red-100/40 to-white flex flex-col">
            <DashboardHeader onLogout={onLogout} />
            <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
                <button
                    onClick={onBackToDashboard}
                    className="flex items-center text-slate-600 hover:text-blue-500 transition-colors font-semibold mb-6"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Back to Dashboard
                </button>

                <div className="bg-white p-6 rounded-2xl shadow-xl border-2 border-red-400 animate-red-glow">
                    <div className="mt-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">Detailed Leak Analysis (Last 24 Hours)</h3>
                        <p className="text-red-700 mb-6">A significant water usage spike of 65L was detected at 1:00 PM, which is highly unusual for this time. This pattern could indicate a sudden burst, a large appliance malfunction, or a substantial, isolated water event.</p>
                        <div className="h-[400px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={detailedLeakData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="hour" tick={{ fill: '#64748b' }} stroke="#cbd5e1" />
                                    <YAxis unit="L" tick={{ fill: '#64748b' }} stroke="#cbd5e1"/>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Area type="monotone" dataKey="usage" stroke="#3b82f6" fill="url(#colorUsage)" name="Usage" />
                                    <ReferenceLine x="1pm" stroke="#ef4444" strokeDasharray="5 5" strokeWidth={2}>
                                        <Label value="Leak Detected!" position="top" fill="#ef4444" offset={10} />
                                    </ReferenceLine>
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default LeakDetailsPage;