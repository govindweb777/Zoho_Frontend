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

  const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useState(false);
  // State for dropdown
  const [isOwnerDropdownOpen, setIsOwnerDropdownOpen] = useState(false);

  // Product form state
  const [productForm, setProductForm] = useState({
    productName: '',
    productCode: '',
    productCategory: '-None-',
    unitPrice: '',
    description: 'A few words about this product',
    isActive: true
  });

  // Handle form field changes
  const handleProductFormChange = (field, value) => {
    setProductForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle save product action
  const handleCreateProduct = () => {
    console.log('Product data:', productForm);
    setIsCreateProductModalOpen(false);
  };

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
          <button className="bg-bigin-teal text-white rounded-md px-4 py-1.5 flex items-center"
            onClick={() => setIsCreateProductModalOpen(true)}>
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

      {isCreateProductModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full bg-white w-[570px] shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-3 border-b-2 border-gray-100">
              <h2 className="text-2xl font-semibold ml-4">Create Product</h2>
            </div>

            {/* Content Area - Scrollable */}
            <div className="flex-grow overflow-y-auto">
              <div className="px-7 py-4 pb-3">
                <div className="mb-6">
                  {/* Product Information Section */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg">Product Information</h3>
                    <div className="flex items-center">
                      <label className="text-gray-700 mr-3">Owner</label>
                      <div className="relative">
                        <button
                          onClick={() => setIsOwnerDropdownOpen(!isOwnerDropdownOpen)}
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

                        {isOwnerDropdownOpen && (
                          <div className="absolute top-full left-0 w-full bg-white border border-gray-300 rounded-3xl shadow-md z-10 mt-1">
                            <div className="p-3 text-center text-gray-500">
                              No users found
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Product Name</label>
                      <div className="w-3/4 relative">
                        <div className="border-l-4 border-red-500 absolute h-full left-0 top-0"></div>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                          value={productForm.productName}
                          onChange={(e) => handleProductFormChange('productName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Product Code</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={productForm.productCode}
                          onChange={(e) => handleProductFormChange('productCode', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Product Category</label>
                      <div className="w-3/4 relative">
                        <select
                          className="w-full border border-gray-300 rounded-md py-2 px-3 appearance-none"
                          value={productForm.productCategory}
                          onChange={(e) => handleProductFormChange('productCategory', e.target.value)}
                        >
                          <option value="-None-">-None-</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Office Supplies">Office Supplies</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <FiChevronDown className="text-gray-500" />
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Unit Price</label>
                      <div className="w-3/4 relative">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={productForm.unitPrice}
                          onChange={(e) => handleProductFormChange('unitPrice', e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <span className="text-gray-500">₹</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Description</label>
                      <div className="w-3/4">
                        <textarea
                          className="w-full border border-gray-300 rounded-md py-2 px-3 min-h-24"
                          value={productForm.description}
                          onChange={(e) => handleProductFormChange('description', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        id="productActive"
                        className="mr-2 h-5 w-5 text-green-500"
                        checked={productForm.isActive}
                        onChange={(e) => handleProductFormChange('isActive', e.target.checked)}
                      />
                      <label htmlFor="productActive" className="text-gray-700">
                        Product Active
                      </label>
                    </div>
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
                  onClick={() => setIsCreateProductModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-3xl"
                  onClick={handleCreateProduct}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;