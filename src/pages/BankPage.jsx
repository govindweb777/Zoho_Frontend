import { useState } from 'react';
import { FiPlus, FiMoreVertical, FiChevronDown, FiFilter } from 'react-icons/fi';

const BankPage = () => {
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
          <button className="bg-bigin-teal text-white rounded-md px-4 py-1.5 flex items-center">
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