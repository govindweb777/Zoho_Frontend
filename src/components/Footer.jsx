import { FiMessageSquare, FiUsers, FiHelpCircle, FiSearch} from 'react-icons/fi';
import { useState } from 'react';
import { FiHeadphones, FiMail, FiCalendar, FiFileText, FiZap, FiMonitor, FiFile } from 'react-icons/fi';


const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Chats');
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleHelpModal = () => {
    setIsHelpModalOpen(!isHelpModalOpen);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Footer component */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-between items-center z-35">
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-600">
            <FiMessageSquare className="mr-1" />
            <span className="text-sm">Chats</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FiUsers className="mr-1" />
            <span className="text-sm">Channels</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FiUsers className="mr-1" />
            <span className="text-sm">Contacts</span>
          </div>
        </div>
        <div
          className="text-gray-500 text-sm cursor-pointer"
          onClick={toggleModal}
        >
          Here is your Smart Chat (Ctrl+Space)
        </div>
      
        <div className="flex items-center space-x-4">
          <div
            className="flex items-center text-gray-600 cursor-pointer"
            onClick={toggleHelpModal}
          >
            <FiHelpCircle className="mr-1" />
            <span className="text-sm">Need Help?</span>
          </div>

          <div>
            <FiFile size={15} color="gray" />
          </div>

          <button className="text-gray-600">
            <FiSearch />
          </button>
        </div>
      </div>

      {/* Main Chat Modal dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 shadow-xl bg-white z-50">
          {/* Search header */}
          <div className="p-3 flex items-center bg-gray-100 border-b border-gray-200">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Start a 1:1 chat by simply typing @name and message. Eg: @Scott Hola"
                className="w-full py-2 pl-8 pr-4 bg-gray-100 border-0 focus:ring-0 focus:outline-none"
              />
              <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
            </div>
            <button
              onClick={toggleModal}
              className="ml-2 text-amber-500 hover:text-amber-600"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </button>
          </div>

          {/* Tabs navigation */}
          <div className="flex">
            <button
              className={`flex-1 py-3 font-medium ${activeTab === 'Chats'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-600'}`}
              onClick={() => handleTabChange('Chats')}
            >
              Chats
            </button>
            <button
              className={`flex-1 py-3 font-medium ${activeTab === 'Contacts'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-600'}`}
              onClick={() => handleTabChange('Contacts')}
            >
              Contacts
            </button>
            <button
              className={`flex-1 py-3 font-medium ${activeTab === 'Channels'
                ? 'text-blue-500 border-b-2 border-blue-500'
                : 'text-gray-600'}`}
              onClick={() => handleTabChange('Channels')}
            >
              Channels
            </button>
          </div>

          {/* Tab content */}
          <div className="overflow-y-auto" style={{ height: 'calc(100vh - 104px)' }}>
            {activeTab === 'Chats' && (
              <>
                {/* Taz chat item */}
                <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Taz</h4>
                    <p className="text-sm text-gray-500">Taz: Hey there! How you doing?</p>
                  </div>
                </div>

                {/* Zoho CRM chat item */}
                <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Zoho CRM</h4>
                  </div>
                </div>

                {/* #announcements channel item */}
                <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.74"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium">#announcements</h4>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Contacts' && (
              <>
                {/* Zoho CRM contact item */}
                <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Zoho CRM</h4>
                    <p className="text-sm text-gray-500">Happy to help</p>
                  </div>
                </div>

                {/* Taz contact item */}
                <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                  <div className="relative mr-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium">Taz</h4>
                    <p className="text-sm text-gray-500">Happy to help</p>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'Channels' && (
              <div className="flex items-center p-4 hover:bg-gray-50 cursor-pointer">
                <div className="relative mr-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.74"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">#announcements</h4>
                  <p className="text-sm text-gray-500">Welcome to #announcements. By...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Help Modal */}


      {isHelpModalOpen && (
        <div className="fixed bottom-5 right-0 z-50 m-4">
          <div className="bg-white w-[300px] rounded-lg shadow-xl border">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium">Need Help?</h3>
              <button
                onClick={toggleHelpModal}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              <ul className="space-y-4">
                <li className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <FiHeadphones className="text-blue-500 w-6 h-6 mr-3" />
                  <span className="text-gray-700">Talk to us</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <FiMail className="text-blue-500 w-6 h-6 mr-3" />
                  <span className="text-gray-700">support@bigin.com</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <FiCalendar className="text-blue-500 w-6 h-6 mr-3" />
                  <span className="text-gray-700">Book a demo</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <FiFileText className="text-blue-500 w-6 h-6 mr-3" />
                  <span className="text-gray-700">Help Resources</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <FiZap className="text-blue-500 w-6 h-6 mr-3" />
                  <span className="text-gray-700">Product Tour</span>
                </li>
                <li className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <FiMonitor className="text-blue-500 w-6 h-6 mr-3" />
                  <span className="text-gray-700">Join our Webinars</span>
                </li>
                <li className="flex items-center justify-between cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <div className="flex items-center">
                    <FiMonitor className="text-blue-500 w-6 h-6 mr-3" />
                    <span className="text-gray-700">Record Screen</span>
                  </div>
                  <span className="bg-blue-400 text-white text-xs px-2 py-1 rounded-full">New</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default Footer;