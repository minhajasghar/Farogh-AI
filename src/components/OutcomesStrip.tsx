import React from 'react';

export const OutcomesStrip: React.FC = () => {
  return (
    <section className="py-20 bg-[#F4F1EA] text-[#0A0A0B] border-b border-[#0A0A0B]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Philosophy Statement */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0A0A0B] leading-tight">
            AI isn't the product. <span className="text-[#789C48]">The outcome is.</span>
          </h2>
          <p className="text-[#0A0A0B]/75 text-base sm:text-lg font-normal leading-relaxed">
            We don't sell AI hype or bloated SaaS subscriptions. We measure success strictly by the operational clarity, automated hours, and reliability brought to your business.
          </p>
        </div>

      </div>
    </section>
  );
};
