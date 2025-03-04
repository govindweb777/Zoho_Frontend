import { useState } from 'react';
import { FiPlus, FiMoreVertical, FiChevronDown, FiFilter } from 'react-icons/fi';

const ContactsPage = () => {
  const contacts = [
    { id: 1, name: 'MR NAVNATH LAHANU WAGHMARE', taluka: 'SANGAMNER', dist: 'Ahmednagar', bank: 'SANGAMNER UBI', email: '', phone: '', owner: 'Raj Pacharne' },
    { id: 2, name: 'RAVINDRA SHRIKANT KEDARE', taluka: 'Rahata', dist: 'Ahmednagar', bank: 'SHIRDI EAB UBI', email: '', phone: '', owner: 'Raj Pacharne' },
    { id: 3, name: 'BABASAHEB BALKRISHNA KALE', taluka: 'Rahata', dist: 'Ahmednagar', bank: 'SHIRDI UBI', email: '', phone: '', owner: 'Raj Pacharne' },
    { id: 4, name: 'SANDEEP JAGANNATH GUNJAL', taluka: 'Rahata', dist: 'Ahmednagar', bank: 'SHIRDI UBI', email: '', phone: '', owner: 'Raj Pacharne' },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5 mr-2">
            <span>All Contacts</span>
            <FiChevronDown className="ml-1" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-md p-1.5 mr-2">
            <FiFilter />
          </button>
          <button className="bg-bigin-teal text-white rounded-md px-4 py-1.5 flex items-center">
            <FiPlus className="mr-1" />
            <span>Contact</span>
            <FiChevronDown className="ml-1" />
          </button>
          <button className="ml-2">
            <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* Contacts Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="h-4 w-4 text-bigin-teal rounded" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Taluka
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Dist
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Bank Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Owner
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contacts.map(contact => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4 text-bigin-teal rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{contact.taluka}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{contact.dist}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{contact.bank}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{contact.email}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{contact.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-gray-300 flex items-center justify-center text-xs mr-2">RP</div>
                    <div className="text-sm text-gray-900">{contact.owner}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Stats */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div className="flex space-x-6">
          <div>Total Contacts • 4</div>
          <div>Contacts With Open Pipelines • 0</div>
          <div>Without Pipelines • 4</div>
          <div>Untouched • 0</div>
        </div>
        <div className="flex items-center">
          <div className="mr-2">Records per page</div>
          <select className="border rounded px-2 py-1">
            <option>50</option>
          </select>
          <div className="ml-4">1 to 4</div>
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;