import React from 'react';

const tips = [
  {
    title: "Shorter Showers",
    description: "Your data shows peak usage in the morning. Cutting just 2 minutes from your shower can save over 550 liters a month.",
    icon: "🚿"
  },
  {
    title: "Full Laundry Loads",
    description: "We noticed several small laundry cycles. Running only full loads can significantly reduce your weekly water consumption.",
    icon: "🧺"
  },
  {
    title: "Check for Toilet Leaks",
    description: "A silent toilet leak can waste hundreds of liters. Add a drop of food coloring to the tank; if it appears in the bowl, you have a leak.",
    icon: "🚽"
  }
];

const AITips: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100">
      <div className="flex items-center mb-4">
        {/* Removed SparklesIcon */}
        <h3 className="text-2xl font-bold text-slate-800">AI-Powered Savings Tips</h3>
      </div>
      <p className="text-slate-600 mb-6">Based on your unique water fingerprint, here are some personalized suggestions to help you save.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors">
            <div className="text-4xl mb-3">{tip.icon}</div>
            <h4 className="font-bold text-lg text-blue-900 mb-2">{tip.title}</h4>
            <p className="text-blue-800 text-sm">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9.344 14.73l1.298.65l-.65-1.299L11.902 12l-1.299-.65.65-1.298L9.344 9.27l.469-1.171L8.123 7.822l-.65-1.298L6.476 6.65l-1.298-.65.65-1.299L4.098 4.79l-1.17-.469-1.171.469-.469 1.171 1.171.469.469 1.17-.65 1.299-1.299-.65.65 1.298L2.098 12l1.299.65-.65 1.298L4.73 15.904l.469 1.171 1.17-.469 1.171.469.469-1.17zm6.813-11.704L15.344 3.23l1.298.65-.65-1.299L17.902 2l-1.299-.65.65-1.298L15.344 0.27l.469-1.171L14.123-0.178l-.65-1.298L12.476-0.85l-1.298-.65.65-1.299L10.098-3.21l-1.17-.469-1.171.469-.469 1.171 1.171.469.469 1.17-.65 1.299-1.299-.65.65 1.298L12.098 4l1.299.65-.65 1.298L14.73 6.904l.469 1.171 1.17-.469 1.171.469.469-1.17zm6.813-11.704L22.344 3.23l1.298.65-.65-1.299L24.902 2l-1.299-.65.65-1.298L22.344 0.27l.469-1.171L21.123-0.178l-.65-1.298L19.476-0.85l-1.298-.65.65-1.299L18.098-3.21l-1.17-.469-1.171.469-.469 1.171 1.171.469.469 1.17-.65 1.299-1.299-.65.65 1.298L21.098 4l1.299.65-.65 1.298L23.73 6.904l.469 1.171 1.17-.469 1.171.469.469-1.17z" />
  </svg>
);


export default AITips;