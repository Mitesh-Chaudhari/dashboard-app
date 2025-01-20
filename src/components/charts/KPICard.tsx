'use client'

import React from 'react'
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid'

const KPICard: React.FC = () => {
  const kpis = [
    { label: 'Revenue', value: '$12,345', change: 5.4 },
    { label: 'New Users', value: '1,234', change: -2.1 },
    { label: 'Conversion Rate', value: '3.45%', change: 0.8 },
  ]

  return (
    <div className="grid grid-cols-1 gap-10">
      {kpis.map((kpi, index) => (
        <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{kpi.label}</h3>
          <p className="text-3xl font-bold text-gray-900 dark:text-white">{kpi.value}</p>
          <div className={`flex items-center ${kpi.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {kpi.change >= 0 ? (
              <ArrowUpIcon className="w-4 h-4 mr-1" />
            ) : (
              <ArrowDownIcon className="w-4 h-4 mr-1" />
            )}
            <span>{Math.abs(kpi.change)}%</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default KPICard

