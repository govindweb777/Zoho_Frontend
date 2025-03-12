import { useState } from 'react';
import { FiPlus, FiMoreVertical, FiChevronDown, FiFilter, FiChevronUp } from 'react-icons/fi';

const ContactsPage = () => {
  const contacts = [
    { id: 1, name: 'MR NAVNATH LAHANU WAGHMARE', taluka: 'SANGAMNER', dist: 'Ahmednagar', bank: 'SANGAMNER UBI', email: '', phone: '', owner: 'Raj Pacharne' },
    { id: 2, name: 'RAVINDRA SHRIKANT KEDARE', taluka: 'Rahata', dist: 'Ahmednagar', bank: 'SHIRDI EAB UBI', email: '', phone: '', owner: 'Raj Pacharne' },
    { id: 3, name: 'BABASAHEB BALKRISHNA KALE', taluka: 'Rahata', dist: 'Ahmednagar', bank: 'SHIRDI UBI', email: '', phone: '', owner: 'Raj Pacharne' },
    { id: 4, name: 'SANDEEP JAGANNATH GUNJAL', taluka: 'Rahata', dist: 'Ahmednagar', bank: 'SHIRDI UBI', email: '', phone: '', owner: 'Raj Pacharne' },
  ];

  const [isCreateContactModalOpen, setIsCreateContactModalOpen] = useState(false);
  const [isOwnerDropdownOpen, setIsOwnerDropdownOpen] = useState(false);
  const [isAddressExpanded, setIsAddressExpanded] = useState(false);

  const [contactForm, setContactForm] = useState({
    firstName: '',
    lastName: '',
    taluka: '',
    dist: '',
    mobile: '',
    phone: '',
    title: '',
    email: '',
    bankName: '',
    branchName: '',
    accountNumber: '',
    loanType: '',
    collectionAmount: ''
  });

  const handleContactFormChange = (field, value) => {
    setContactForm({
      ...contactForm,
      [field]: value
    });
  };

  const handleCreateContact = () => {
    // Handle contact creation logic here
    console.log("Contact data:", contactForm);
    setIsCreateContactModalOpen(false);
  };

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
          <button className="bg-bigin-teal text-white rounded-md px-4 py-1.5 flex items-center"
            onClick={() => setIsCreateContactModalOpen(true)}>
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

      {/* Create Contact Modal */}
      {/* Create Contact Modal */}
      {isCreateContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="absolute right-0 top-0 h-full bg-white w-[570px] shadow-lg flex flex-col">
            {/* Header */}
            <div className="p-3 border-b-2 border-gray-100">
              <h2 className="text-2xl font-semibold ml-4">Create Contact</h2>
            </div>

            {/* Content Area - Scrollable */}
            <div className="flex-grow overflow-y-auto">
              <div className="px-7 py-4 pb-3"> {/* Added padding at bottom to ensure content doesn't get hidden behind footer */}
                <div className="mb-6">
                  {/* Contact Information Section */}
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg">Contact Information</h3>
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
                      <label className="text-gray-700 w-1/4">First Name</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.firstName}
                          onChange={(e) => handleContactFormChange('firstName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Last Name</label>
                      <div className="w-3/4 relative">
                        <div className="border-l-4 border-red-500 absolute h-full left-0 top-0"></div>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                          value={contactForm.lastName}
                          onChange={(e) => handleContactFormChange('lastName', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Taluka</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.taluka}
                          onChange={(e) => handleContactFormChange('taluka', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Dist</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.dist}
                          onChange={(e) => handleContactFormChange('dist', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Mobile</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.mobile}
                          onChange={(e) => handleContactFormChange('mobile', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Phone</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.phone}
                          onChange={(e) => handleContactFormChange('phone', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Title</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.title}
                          onChange={(e) => handleContactFormChange('title', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Email</label>
                      <div className="w-3/4">
                        <input
                          type="email"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.email}
                          onChange={(e) => handleContactFormChange('email', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Bank Name</label>
                      <div className="w-3/4 relative flex items-center">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.bankName}
                          onChange={(e) => handleContactFormChange('bankName', e.target.value)}
                        />
                        <button className="absolute right-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Branch Name</label>
                      <div className="w-3/4 relative">
                        <div className="border-l-4 border-red-500 absolute h-full left-0 top-0"></div>
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3 pl-4"
                          value={contactForm.branchName}
                          onChange={(e) => handleContactFormChange('branchName', e.target.value)}
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
                        {isAddressExpanded ? <FiChevronUp className="ml-2" /> : <FiChevronDown className="ml-2" />}

                      </button>

                    </div>
                    {isAddressExpanded && (
                      <div className="space-y-4 mt-2 mb-4 pl-4 border-gray-200">
                        <div className="flex justify-between items-center">
                          <label className="text-gray-700 w-1/4">Pin Code</label>
                          <div className="w-3/4">
                            <input
                              type="text"
                              className="w-full border border-gray-300 rounded-md py-2 px-3"
                              value={contactForm.pinCode}
                              onChange={(e) => handleContactFormChange('pinCode', e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between items-center">
                          <label className="text-gray-700 w-1/4">Address</label>
                          <div className="w-3/4">
                            <textarea
                              className="w-full border border-gray-300 rounded-md py-2 px-3 min-h-24"
                              value={contactForm.address}
                              onChange={(e) => handleContactFormChange('address', e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Additional Information Section */}
                    <div className="mt-8 mb-4">
                      <h3 className="text-lg text-gray-800">Additional Information</h3>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Account Number</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.accountNumber}
                          onChange={(e) => handleContactFormChange('accountNumber', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Loan Type</label>
                      <div className="w-3/4">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.loanType}
                          onChange={(e) => handleContactFormChange('loanType', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <label className="text-gray-700 w-1/4">Collection Amount</label>
                      <div className="w-3/4 relative">
                        <input
                          type="text"
                          className="w-full border border-gray-300 rounded-md py-2 px-3"
                          value={contactForm.collectionAmount}
                          onChange={(e) => handleContactFormChange('collectionAmount', e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                          <span className="text-gray-500">₹</span>
                        </div>
                      </div>
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
                  onClick={() => setIsCreateContactModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-3xl"
                  onClick={handleCreateContact}
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

export default ContactsPage;