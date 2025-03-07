import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, FunnelChart, Funnel, LabelList } from 'recharts';

const Dashboard = () => {
  // Sample data for pipeline stages
  const pipelineData = [
    { name: 'Adani Housing Finance', value: 0 },
    { name: 'Aspir Housing Finance', value: 10000 },
    { name: 'INDIAN BANK', value: 24000 },
    { name: 'State Bank of India', value: 9000 },
  ];

  // Sample data for funnel chart
  const funnelData = [
    { name: 'Physical Possession', value: 1000, fill: '#82ca9d' },
    { name: 'Billing Department', value: 600, fill: '#5a9bd5' },
  ];

  return (
    <div className="w-full bg-gray-100 p-4 mb-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative">
          <button className="flex items-center bg-white px-4 py-2 rounded-md border shadow-sm">
            <span className="font-medium text-gray-700">Pipelines Dashboard</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-full hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-md flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Component</span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* First row of cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Open Pipelines - This Month</h3>
          <div className="flex justify-center items-center h-24">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Pipelines Won - This Month</h3>
          <div className="flex justify-center items-center h-24">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Pipelines Lost - This Month</h3>
          <div className="flex justify-center items-center h-24">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Revenue Won - This Month</h3>
          <div className="flex justify-center items-center h-24">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
      </div>
      
      {/* Second row of cards - Adjusted proportions */}
      <div className="grid grid-cols-12 gap-4 mb-4 h-[340px]">
        {/* Top 5 Users - Pipelines Won (1/3 width) */}
        <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Top 5 Users - Pipelines Won</h3>
          <div className="flex justify-center items-center h-48">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
        
        {/* Open Pipelines Amount by Stage (2/3 width) */}
        <div className="col-span-12 md:col-span-8 bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-10">Open Pipelines Amount by Stage</h3>
          <div className="flex justify-center items-center h-48">
            <BarChart width={700} height={230} data={pipelineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" label={{ value: 'Bank Name', position: 'insideBottom', offset: -5 }} />
              <YAxis label={{ value: 'Sum of Amt.', angle: -90, position: 'insideLeft' ,dx: -15 }} />

              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
              <Bar dataKey="value" fill="#FFA500" isAnimationActive={false}>
                <LabelList dataKey="value" position="top" formatter={(value) => `₹${value.toLocaleString()}`} />
              </Bar>
            </BarChart>
          </div>
        </div>
      </div>
      
      {/* Third row of cards - Adjusted proportions */}
      <div className="grid grid-cols-12 gap-4">
        {/* Top 5 Users - Pipelines Lost (1/3 width) */}
        <div className="col-span-12 md:col-span-4 bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Top 5 Users - Pipelines Lost</h3>
          <div className="flex justify-center items-center h-48">
            <p className="text-gray-500">No data available</p>
          </div>
        </div>
        
        {/* Monthly Revenue by Users (2/3 width) */}
        <div className="col-span-12 md:col-span-8 bg-white p-4 rounded-md shadow">
          <h3 className="text-lg font-medium text-gray-700 mb-6">Monthly Revenue by Users</h3>
          <div className="flex justify-center items-center h-48">
            <FunnelChart width={500} height={200}>
              <Tooltip formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']} />
              <Funnel
                dataKey="value"
                data={funnelData}
                isAnimationActive={false}
              >
                <LabelList position="right" dataKey="name" fill="#000" stroke="none" />
              </Funnel>
            </FunnelChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;