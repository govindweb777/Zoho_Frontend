import React, { useEffect, useState } from 'react';
import { FiFilter, FiPlus, FiMoreVertical, FiChevronDown, FiSearch, FiStar, FiEdit2, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const PipelinesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('All Deals');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCreateViewModalOpen, setIsCreateViewModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [newViewName, setNewViewName] = useState('');
  const [viewMode, setViewMode] = useState('all');

  const [isCreateDealModalOpen, setIsCreateDealModalOpen] = useState(false);
  const [isOwnerDropdownOpen, setIsOwnerDropdownOpen] = useState(false);
  const [dealForm, setDealForm] = useState({
    dealName: '',
    bankName: '',
    branchName: '',
    contactName: '',
    stage: '',
    amount: '',
    closingDate: '',
    description: ''
  });

  // Handler for the Deal button click
  const handleDealButtonClick = () => {
    setIsCreateDealModalOpen(true);
  };

  // Function to handle form field changes
  const handleDealFormChange = (field, value) => {
    setDealForm({
      ...dealForm,
      [field]: value
    });
  };

  // Function to handle deal creation
  const handleCreateDeal = () => {
    // Add your logic to save the deal
    console.log('Deal created:', dealForm);
    setIsCreateDealModalOpen(false);
  };



  const dealStages = [
    { id: 1, name: 'Lead', amount: '₹0.00', count: '0 Deal' },
    { id: 2, name: '13\\2', amount: '₹0.00', count: '0 Deal' },
    { id: 3, name: '13\\4', amount: '₹0.00', count: '0 Deal' },
    { id: 4, name: 'DM Aplication', amount: '₹0.00', count: '0 Deal' },
    { id: 5, name: 'Possession Order', amount: '₹0.00', count: '0 Deal' },
    { id: 6, name: 'Physical Possession', amount: '₹12,000.00', count: '1 Deal' },
  ];

  const [dealViews, setDealViews] = useState([
    "All Deals", "All Deals1", "Closing Next Month", "Closing This Month",
    "My Deals", "My Deals Closing This Month", "New Last Week", "New This Week"
  ]);

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

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, []);

  const handleCreateView = () => {
    if (newViewName.trim()) {
      setDealViews([...dealViews, newViewName]);
      setSelectedFilter(newViewName);
      setIsCreateViewModalOpen(false);
      setNewViewName('');
    }
  };

  const handleAddToFavorites = (view) => {
    if (!favorites.includes(view)) {
      setFavorites([...favorites, view]);
    } else {
      setFavorites(favorites.filter(fav => fav !== view));
    }
  };

  // Filter views based on search term and view mode
  const filteredViews = dealViews.filter(view =>
    view.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (viewMode === 'all' || favorites.includes(view))
  );

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 bg-white">
        <div className="flex items-center">
          <div className="relative mr-2">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5"
            >
              <span>{selectedFilter}</span>
              <FiChevronDown className="ml-1" />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-72 bg-white border border-gray-300 shadow-md rounded-md z-10">
                <div className="p-2 border-b">
                  <div className='flex gap-4'>
                    <button
                      className={`font-semibold text-sm ${viewMode === 'all' ? 'text-bigin-teal' : 'text-gray-600'}`}
                      onClick={() => setViewMode('all')}
                    >
                      All Views
                    </button>
                    <button
                      className={`font-semibold text-sm ${viewMode === 'favorites' ? 'text-bigin-teal' : 'text-gray-600'}`}
                      onClick={() => setViewMode('favorites')}
                    >
                      Favorites
                    </button>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-md px-2 py-1 mt-2">
                    <FiSearch className="text-gray-500 mr-2" />
                    <input
                      type="text"
                      placeholder="Search Views"
                      className="w-full bg-transparent outline-none"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  <div className="p-2 font-semibold text-sm text-gray-600">
                    {viewMode === 'all' ? 'Public Views' : 'Favorite Views'}
                  </div>
                  <ul className="py-2">
                    {filteredViews.map((view, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => {
                          setSelectedFilter(view);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span className={selectedFilter === view ? 'font-bold' : ''}>
                          {view}
                        </span>
                        <div className="flex items-center">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddToFavorites(view);
                            }}
                            className="mr-2"
                          >
                            <FiStar
                              className={`${favorites.includes(view)
                                ? 'text-yellow-500 fill-current'
                                : 'text-gray-400'
                                }`}
                            />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-2 border-t">
                  <button
                    className="w-full flex items-center justify-center text-bigin-teal hover:bg-gray-100 py-2 rounded-md"
                    onClick={() => setIsCreateViewModalOpen(true)}
                  >
                    <FiPlus className="mr-2" /> Create View
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

        <div className="flex items-center">
          <div className="mr-2">Sort By</div>
          <button className="flex items-center bg-white border border-gray-300 rounded-3xl px-4 py-1.5 mr-2">
            <span>Deal Name</span>
            <FiChevronDown className="ml-1" />
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-3xl p-1.5 mr-2">
            <FiFilter />
          </button>
          <button className="flex items-center bg-white border border-gray-300 rounded-3xl p-1.5 mr-2">
            <FiFilter />
          </button>
          <button className="bg-bigin-teal text-white rounded-3xl px-4 py-1.5 flex items-center"
            onClick={() => setIsCreateDealModalOpen(true)}>
            <FiPlus className="mr-1 " />
            <span >Deal</span>
            <FiChevronDown className="ml-1" />
          </button>
          <button className="ml-2 ">
            <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* Add Create Deal Modal */}
      {isCreateDealModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full bg-white w-[570px] shadow-lg overflow-y-auto">
            <div className="p-3 border-b-2 border-gray-100">

              <h2 className="text-2xl font-semibold ml-4">Create Deal</h2>
            </div>
            <div className="px-7 ">


              <div className="mb-6">

                <div className="flex gap-5 mt-3">
                  <div className=''>
                    <h3 className="text-lg mt-2">Deal Information</h3>
                  </div>
                  <div className="flex justify-between items-center mb-6 ml-32">
                    <label className="text-gray-700 ">Owner</label>
                    <div className="relative right-0">
                      <button
                        onClick={() => setIsOwnerDropdownOpen(!isOwnerDropdownOpen)}
                        className="flex items-center justify-between w-full border border-gray-300 rounded-3xl ml-3 px-3 py-2"
                      >
                        <div className="flex items-center">
                          <img
                            src="/api/placeholder/24/24"
                            alt="Profile"
                            className="w-5 h-5 rounded-full mr-2"
                          />
                          <span>Simran Singh</span>
                        </div>
                        <FiChevronDown />
                      </button>

                      {isOwnerDropdownOpen && (
                        <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-3xl ml-3 shadow-md z-10 mt-1">
                          <div className="p-3 text-center text-gray-500">
                            No users found
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700">Deal Name</label>
                    <div className="w-2/3 relative">
                      <div className="border-l-4 border-red-500 absolute h-full left-0 top-0"></div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                        value={dealForm.dealName}
                        onChange={(e) => handleDealFormChange('dealName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700">Bank Name</label>
                    <div className="w-2/3 relative flex items-center">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3"
                        value={dealForm.bankName}
                        onChange={(e) => handleDealFormChange('bankName', e.target.value)}
                      />
                      <button className="absolute right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700">Branch Name</label>
                    <div className="w-2/3 relative">
                      <div className="border-l-4 border-red-500 absolute h-full left-0 top-0"></div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                        value={dealForm.branchName}
                        onChange={(e) => handleDealFormChange('branchName', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700">Contact Name</label>
                    <div className="w-2/3 relative">
                      <div className="border-l-4 border-red-500 absolute h-full left-0 top-0"></div>
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                        value={dealForm.contactName}
                        onChange={(e) => handleDealFormChange('contactName', e.target.value)}
                      />
                      <div className="absolute right-0 top-0 flex h-full">
                        <button className="h-full px-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button className="h-full px-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700">Stage</label>
                    <div className="w-2/3 relative">
                      <div className=" border-red-500 absolute h-full left-0 top-0"></div>
                      <div className="relative">
                        <select
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4 appearance-none"
                          value={dealForm.stage}
                          onChange={(e) => handleDealFormChange('stage', e.target.value)}
                        >
                          <option value="">Choose a stage</option>
                          <option value="Lead">Lead</option>
                          <option value="13\2">13\2</option>
                          <option value="13\4">13\4</option>
                          <option value="DM Aplication">DM Aplication</option>
                          <option value="Possession Order">Possession Order</option>
                          <option value="Physical Possession">Physical Possession</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <FiChevronDown className="text-gray-500" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700">Amount</label>
                    <div className="w-2/3 relative">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md py-2 px-3"
                        value={dealForm.amount}
                        onChange={(e) => handleDealFormChange('amount', e.target.value)}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-gray-500">₹</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700">Closing Date</label>
                    <div className="w-2/3 relative">
                      <div className="border-l-4 border-red-500 absolute h-full left-0 top-0"></div>
                      <input
                        type="text"
                        placeholder="MM/DD/YYYY"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                        value={dealForm.closingDate}
                        onChange={(e) => handleDealFormChange('closingDate', e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <label className="text-gray-700">Description</label>
                    <div className="w-2/3">
                      <textarea
                        placeholder="A few words about this deal"
                        className="w-full border border-gray-300 rounded-md py-2 px-3 h-24 resize-none"
                        value={dealForm.description}
                        onChange={(e) => handleDealFormChange('description', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 py-4 px-6 bg-white border-t flex justify-between">
                <button
                  className="text-blue-500 font-medium"
                  onClick={() => {/* Customize fields logic */ }}
                >
                  Customize Fields
                </button>
                <div>
                  <button
                    className="mr-2 px-4 py-2 border border-gray-300 rounded-3xl"
                    onClick={() => setIsCreateDealModalOpen(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded-3xl"
                    onClick={handleCreateDeal}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create View Modal */}
      {isCreateViewModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Create View</h2>
            <input
              type="text"
              placeholder="Enter view name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
              value={newViewName}
              onChange={(e) => setNewViewName(e.target.value)}
            />
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md"
                onClick={() => setIsCreateViewModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-bigin-teal text-white rounded-md"
                onClick={handleCreateView}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Deal Stages (remains the same as previous code) */}
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
    </div>
  );
};

export default PipelinesPage;