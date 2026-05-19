import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PricingTable = ({ tiers }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white border-4 border-black shadow-[6px_6px_0_#000] overflow-hidden">
      <div className="bg-black text-white p-6 border-b-4 border-[#FF9500]">
        <h3 className="text-2xl font-black tracking-tight">Upfront Pricing</h3>
        <p className="text-gray-400 mt-1 text-sm font-bold">Based on truck space. No hidden fees.</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="py-4 px-6 font-bold text-gray-900">Load Size</th>
              <th className="py-4 px-6 font-bold text-gray-900 hidden sm:table-cell">Capacity / Example</th>
              <th className="py-4 px-6 font-bold text-gray-900 text-right">Rate</th>
            </tr>
          </thead>
          <tbody>
            {tiers.map((tier, index) => (
              <motion.tr 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => navigate('/quote')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate('/quote');
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Book a ${tier.size.toLowerCase()} pickup starting at ${tier.price}`}
                className={`cursor-pointer transition-colors duration-200 hover:bg-[#FFC107]/10 border-b-2 border-gray-200 last:border-0 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="py-4 px-6">
                  <span className="font-bold text-gray-900">{tier.size}</span>
                  <div className="sm:hidden text-xs text-gray-500 mt-1">{tier.desc}</div>
                </td>
                <td className="py-4 px-6 hidden sm:table-cell text-sm text-gray-600">
                  {tier.desc}
                </td>
                <td className="py-4 px-6 text-right">
                  <span className="font-black text-[#FF9500] text-lg">{tier.price}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-gray-100 border-t-2 border-gray-300 text-center text-xs text-gray-600 font-bold">
        * Final price confirmed on-site before we load. No surprises.
      </div>
    </div>
  );
};

export default PricingTable;
