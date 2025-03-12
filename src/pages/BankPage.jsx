import { useState } from 'react';
import { FiPlus, FiMoreVertical, FiChevronDown, FiFilter } from 'react-icons/fi';

const BankPage = () => {

  const [isCreateBankModalOpen, setIsCreateBankModalOpen] = useState(false);
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);
  
  const [bankForm, setBankForm] = useState({
    bankName: '',
    branchName: '',
    phone: '',
    website: '',
    description: 'A few words about this bank',
    // Address fields would go here when expanded
  });

  const handleBankFormChange = (field, value) => {
    setBankForm({
      ...bankForm,
      [field]: value
    });
  };

  const handleCreateBank = () => {
    // Logic to save the bank
    console.log('Bank data:', bankForm);
    setIsCreateBankModalOpen(false);
  };

  const banks = [
    { id: 1, name: 'A.U SMALL FINANSE', branch: 'Ahmednagar', phone: '', website: '', owner: 'Mahesh Narsale', address: '', taluka: '' },
    { id: 2, name: 'Adani Housing Finance', branch: 'Ahemdnagar', phone: '', website: '', owner: 'Hr Yashraj', address: 'Ahmednagar', taluka: '' },
    { id: 3, name: 'Ahmednagar', branch: '', phone: '', website: '', owner: 'Simran Singh', address: '', taluka: '' },
    { id: 4, name: 'Ahmednagar Branch', branch: '', phone: '', website: '', owner: 'Simran Singh', address: '', taluka: '' },
    { id: 5, name: 'Akole Branch', branch: '', phone: '', website: '', owner: 'Simran Singh', address: '', taluka: '' },
    { id: 6, name: 'AKOLE CBI', branch: '', phone: '', website: '', owner: 'Mahesh Narsale', address: 'AKOLE', taluka: 'Akole' },
    { id: 7, name: 'Akole SBI', branch: '', phone: '', website: '', owner: 'Mahesh Narsale', address: 'Akole', taluka: 'Akole' },
    { id: 8, name: 'Akole SBI', branch: '', phone: '', website: '', owner: 'Simran Singh', address: 'Akole', taluka: 'Akole' },
  ];

  return (
    <div className="p-4 mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5 mr-2">
            <span>All Bank</span>
            <FiChevronDown className="ml-1" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-md p-1.5 mr-2">
            <FiFilter />
          </button>
          <button className="bg-bigin-teal text-white rounded-md px-4 py-1.5 flex items-center"
            onClick={() => setIsCreateBankModalOpen(true)}>
            <FiPlus className="mr-1" />
            <span>Bank</span>
            <FiChevronDown className="ml-1" />
          </button>
          <button className="ml-2">
            <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* Banks Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="h-4 w-4 text-bigin-teal rounded" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bank Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Branch Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Website
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bank Owner
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Taluka
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {banks.map(bank => (
              <tr key={bank.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4 text-bigin-teal rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{bank.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{bank.branch}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{bank.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{bank.website}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-orange-300 flex items-center justify-center text-xs mr-2">
                      {bank.owner.split(' ').map(word => word[0]).join('')}
                    </div>
                    <div className="text-sm text-gray-900">{bank.owner}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{bank.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{bank.taluka}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Create Bank Modal */}
      {/* Create Bank Modal */}
      {isCreateBankModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full bg-white w-[570px] shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-3 border-b border-gray-200">
              <h2 className="text-2xl font-semibold ml-4">Create Bank</h2>
            </div>
            
            {/* Content Area - Scrollable */}
            <div className="flex-grow overflow-y-auto">
              <div className="px-7 py-4 pb-3">
                <div className="mb-6">
                  {/* Bank Information Section */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-medium">Bank Information</h3>
                    <div className="flex items-center">
                      <label className="text-gray-700 mr-3">Owner</label>
                      <div className="relative">
                        <button
                          className="flex items-center justify-between border border-gray-300 rounded-3xl px-3 py-2 w-48"
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
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Bank Name</label>
                      <div className="w-3/4 relative">
                        <div className="border-l-4 border-green-500 absolute h-full left-0 top-0"></div>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                          value={bankForm.bankName}
                          onChange={(e) => handleBankFormChange('bankName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Branch Name</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={bankForm.branchName}
                          onChange={(e) => handleBankFormChange('branchName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Phone</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={bankForm.phone}
                          onChange={(e) => handleBankFormChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Website</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={bankForm.website}
                          onChange={(e) => handleBankFormChange('website', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Description</label>
                      <div className="w-3/4">
                        <textarea
                          className="w-full border border-gray-300 rounded-md py-2 px-3 min-h-20"
                          value={bankForm.description}
                          onChange={(e) => handleBankFormChange('description', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Address Information Section */}
                    <div className="mt-8 mb-4">
                      <button 
                        className="flex items-center text-lg text-gray-800"
                        onClick={() => setIsAddressExpanded(!isAddressExpanded)}
                      >
                        Address Information
                        {isAddressExpanded ? (
                          <FiChevronDown className="ml-2 transform rotate-180" />
                        ) : (
                          <FiChevronDown className="ml-2" />
                        )}
                      </button>
                    </div>
                    
                    {isAddressExpanded && (
                      <div className="space-y-4 mt-2 mb-4 pl-4 border-gray-200">
                        <div className="flex justify-between items-center">
                          <label className="text-gray-700 w-1/4">Address</label>
                          <div className="w-3/4">
                            <textarea
                              className="w-full border border-gray-300 rounded-md py-2 px-3 min-h-20"
                              value={bankForm.address}
                              onChange={(e) => handleBankFormChange('address', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <label className="text-gray-700 w-1/4">Taluka</label>
                          <div className="w-3/4">
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md py-2 px-3"
                              value={bankForm.taluka}
                              onChange={(e) => handleBankFormChange('taluka', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <label className="text-gray-700 w-1/4">Dist</label>
                          <div className="w-3/4">
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md py-2 px-3"
                              value={bankForm.dist}
                              onChange={(e) => handleBankFormChange('dist', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <label className="text-gray-700 w-1/4">Pin Code</label>
                          <div className="w-3/4">
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md py-2 px-3"
                              value={bankForm.pinCode}
                              onChange={(e) => handleBankFormChange('pinCode', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer - Fixed at bottom of modal */}
            <div className="py-4 px-6 bg-white border-t flex justify-between mt-auto">
              <button
                className="text-blue-500 font-medium"
                onClick={() => {/* Customize fields logic */ }}
              >
                Customize Fields
              </button>
              <div>
                <button
                  className="mr-2 px-4 py-2 border border-gray-300 rounded-3xl"
                  onClick={() => setIsCreateBankModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-3xl"
                  onClick={handleCreateBank}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Stats */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex space-x-6">
          <div>Total Bank • 71</div>
          <div>Bank With Open Pipelines • 2</div>
          <div>Without Pipelines • 69</div>
          <div>With Won Pipelines • 3</div>
        </div>
        <div className="flex items-center">
          <div className="mr-2">Records per page</div>
          <select className="border rounded px-2 py-1">
            <option>20</option>
          </select>
          <div className="ml-4">1 to 20</div>
        </div>
      </div>
    </div>
  );
};

export default BankPage;