import { useState } from 'react';
import { FiFilter, FiPlus, FiMoreVertical, FiChevronDown } from 'react-icons/fi';

const PipelinesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Deals');

  const dealStages = [
    { id: 1, name: 'Lead', amount: '₹0.00', count: '0 Deal' },
    { id: 2, name: '13\\2', amount: '₹0.00', count: '0 Deal' },
    { id: 3, name: '13\\4', amount: '₹0.00', count: '0 Deal' },
    { id: 4, name: 'DM Aplication', amount: '₹0.00', count: '0 Deal' },
    { id: 5, name: 'Possession Order', amount: '₹0.00', count: '0 Deal' },
    { id: 6, name: 'Physical Possession', amount: '₹12,000.00', count: '1 Deal' },
  ];

  const deals = [
    {
      id: 1,
      name: 'Vyankatesh Enterprises',
      amount: '₹12,000.00',
      date: 'May 31, 2024',
      bank: 'INDIAN BANK',
      location: 'Kalyani Nagar',
      stage: 'Physical Possession'
    }
  ];

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 bg-white">
        <div className="flex items-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5 mr-2">
            <FiFilter className="mr-1" />
            <span>All Deals</span>
            <FiChevronDown className="ml-1" />
          </button>
        </div>
        <div className="flex items-center">
          <div className="mr-2">Sort By</div>
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5 mr-2">
            <span>Deal Name</span>
            <FiChevronDown className="ml-1" />
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-md p-1.5 mr-2">
            <FiFilter />
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-md p-1.5 mr-2">
            <FiFilter />
          </button>
          <button className="bg-bigin-teal text-white rounded-md px-4 py-1.5 flex items-center">
            <FiPlus className="mr-1" />
            <span>Deal</span>
            <FiChevronDown className="ml-1" />
          </button>
          <button className="ml-2">
            <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* Deal Stages */}
      <div className="grid grid-cols-6 gap-4 mb-4 h-[500px] ">
        {dealStages.map(stage => (
          <div key={stage.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-3 border-b">
              <h3 className="font-medium">{stage.name}</h3>
              <div className="flex justify-between text-sm mt-1">
                <span>{stage.amount}</span>
                <span className="text-gray-500">{stage.count}</span>
              </div>
            </div>
            {stage.name === 'Physical Possession' ? (
              <div className="p-3 border-b">
                <div className="flex justify-between">
                  <div>
                    <div className="font-medium">Vyankatesh Enterprises</div>
                    <div className="text-sm">₹12,000.00 • May 31, 2024</div>
                    <div className="text-sm">INDIAN BANK</div>
                    <div className="text-sm">Kalyani Nagar</div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-500 rounded-sm"></div>
                  </div>
                </div>
              </div>
            ) : null}
            <div className="p-4 text-center text-gray-500">
              This stage is empty
            </div>
          </div>
        ))}
      </div>

      {/* Housing Department */}
      {/* <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-3 flex justify-between items-center">
        <div className="font-medium">Housing Department</div>
        <button className="text-gray-400">
          <FiPlus />
        </button>
      </div> */}
    </div>
  );
};

export default PipelinesPage;