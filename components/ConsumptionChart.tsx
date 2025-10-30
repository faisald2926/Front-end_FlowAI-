import React from 'react';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Sun', 'Your Usage': 140, 'Average Usage': 170 },
  { name: 'Mon', 'Your Usage': 130, 'Average Usage': 180 },
  { name: 'Tue', 'Your Usage': 125, 'Average Usage': 175 },
  { name: 'Wed', 'Your Usage': 135, 'Average Usage': 185 },
  { name: 'Thu', 'Your Usage': 150, 'Average Usage': 170 },
  { name: 'Fri', 'Your Usage': 190, 'Average Usage': 190 },
  { name: 'Sat', 'Your Usage': 210, 'Average Usage': 220 },
];

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-slate-200">
          <p className="font-bold text-slate-800">{`${label}`}</p>
          <p className="text-blue-500">{`Your Usage : ${payload[0].value}L`}</p>
          <p className="text-slate-500">{`Average Usage : ${payload[1].value}L`}</p>
        </div>
      );
    }
  
    return null;
  };
  
const CustomDot: React.FC<any> = (props) => {
    const { cx, cy, stroke, payload, value } = props;
    return <circle cx={cx} cy={cy} r={4} fill="#94a3b8" />;
};


const ConsumptionChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 h-[450px]">
      <h3 className="text-2xl font-bold text-slate-800 mb-4">Weekly Consumption</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 5, right: 20, left: -10, bottom: 40,
          }}
        >
          <defs>
            <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fill: '#64748b' }} stroke="#cbd5e1" />
          <YAxis unit="L" tick={{ fill: '#64748b' }} stroke="#cbd5e1"/>
          <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#3b82f6', strokeWidth: 1, strokeDasharray: '3 3' }} />
          <Legend wrapperStyle={{paddingTop: '30px'}}/>
          <Area type="monotone" dataKey="Your Usage" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorUsage)" />
          <Line dataKey="Average Usage" stroke="transparent" activeDot={false} dot={<CustomDot />} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ConsumptionChart;