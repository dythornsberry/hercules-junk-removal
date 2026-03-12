import React from 'react';
import { motion } from 'framer-motion';
import { openCalendlyPopup } from '@/lib/calendlyUtils.js';

const PricingTable = ({ tiers }) => {
  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      <div className="bg-[#1a1a1a] text-white p-6 border-b border-[#FF9500]">
        <h3 className="text-2xl font-black tracking-tight">Upfront Pricing</h3>
        <p className="text-gray-400 mt-1 text-sm">Clear, volume-based rates with no hidden fees.</p>
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
                onClick={(e) => {
                  e.preventDefault();
                  openCalendlyPopup();
                }}
                className={`cursor-pointer transition-colors duration-200 hover:bg-[#FFF9F0] border-b border-gray-100 last:border-0 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
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
      <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-500">
        * Prices are estimates and subject to final on-site confirmation. Plus applicable taxes.
      </div>
    </div>
  );
};

export default PricingTable;