import { useState } from 'react';
import { FiPlus, FiMoreVertical, FiChevronDown, FiFilter } from 'react-icons/fi';

const ProductsPage = () => {
  const products = [
    { id: 1, name: 'Collection Charges', code: '007', active: 'Active', owner: 'Simran Singh' },
    { id: 2, name: 'Dm Order', code: '', active: 'Active', owner: 'Mahesh Narsale' },
    { id: 3, name: 'GST', code: '003', active: 'Active', owner: 'Simran Singh' },
    { id: 4, name: 'Other Exp', code: '004', active: 'Active', owner: 'Simran Singh' },
    { id: 5, name: 'Pepar Publication', code: '005', active: 'Active', owner: 'Simran Singh' },
    { id: 6, name: 'Photo Graphy', code: '006', active: 'Active', owner: 'Simran Singh' },
    { id: 7, name: 'Physical Possassion', code: '001', active: 'Active', owner: 'Simran Singh' },
    { id: 8, name: 'Police Proction', code: '002', active: 'Active', owner: 'Simran Singh' },
  ];

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-1.5 mr-2">
            <span>All Products</span>
            <FiChevronDown className="ml-1" />
          </button>
        </div>
        <div className="flex items-center">
          <button className="flex items-center bg-white border border-gray-300 rounded-md p-1.5 mr-2">
            <FiFilter />
          </button>
          <button className="bg-bigin-teal text-white rounded-md px-4 py-1.5 flex items-center">
            <FiPlus className="mr-1" />
            <span>Product</span>
            <FiChevronDown className="ml-1" />
          </button>
          <button className="ml-2">
            <FiMoreVertical />
          </button>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" className="h-4 w-4 text-bigin-teal rounded" />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Code
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Active
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product Owner
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                + Create Field
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map(product => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input type="checkbox" className="h-4 w-4 text-bigin-teal rounded" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{product.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{product.code}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{product.active}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-6 w-6 rounded-full bg-purple-300 flex items-center justify-center text-xs mr-2">
                      {product.owner === 'Simran Singh' ? 'SS' : 'MN'}
                    </div>
                    <div className="text-sm text-gray-900">{product.owner}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-blue-500">+ Create Field</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Stats */}
      <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
        <div>
          <div>Total Products • 8</div>
        </div>
        <div className="flex items-center">
          <div className="mr-2">Records per page</div>
          <select className="border rounded px-2 py-1">
            <option>20</option>
          </select>
          <div className="ml-4">1 to 8</div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;