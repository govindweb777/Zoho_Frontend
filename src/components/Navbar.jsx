import { useState } from 'react';
// import { FiSearch, FiPlus, FiClipboard, FiBell, FiHelpCircle, FiSettings, FiX } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import {
  FiSearch,
  FiPlus,
  FiClipboard,
  FiBell,
  FiHelpCircle,
  FiSettings,
  FiX,
  FiColumns,
  FiFileText,
  FiUsers,
  FiDollarSign,
  FiShoppingCart,
  FiCheckSquare,
  FiCalendar,
  FiPhone
} from 'react-icons/fi';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showCreateRecordModal, setShowCreateRecordModal] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeNotificationTab, setActiveNotificationTab] = useState('feeds');
  const [showApprovalModal, setShowApprovalModal] = useState(false);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const recordTypes = [
    { icon: FiColumns, label: 'Pipeline', type: 'pipeline' },
    { icon: FiFileText, label: 'Deal (Standard)', type: 'deal' },
    { icon: FiUsers, label: 'Contact', type: 'contact' },
    { icon: FiDollarSign, label: 'Bank', type: 'bank' },
    { icon: FiShoppingCart, label: 'Product', type: 'product' },
    { icon: FiCheckSquare, label: 'Task', type: 'task' },
    { icon: FiCalendar, label: 'Event', type: 'event' },
    { icon: FiPhone, label: 'Call', type: 'call' }
  ];


  return (
    <>
      <nav className="bg-bigin-blue h-12 flex items-center justify-between px-4 shadow-md relative z-10">
        {/* Left section - existing code remains the same */}
        <div className="flex items-center">
          <img src="../public/logo.png" className='h-6 w-8 mr-3' alt="webseeder" />
          <div className="text-white font-bold text-xl mr-4">WebSeeder CRM</div>

          <div className="ml-5 flex items-center bg-[#0A4761] rounded-3xl px-3 py-1.5 w-[350px]">
            <div className="relative border-gray-600 border-r-2">
              <select className="bg-transparent text-white text-sm font-medium focus:outline-none mr-2">
                <option value="all" className="text-black">All</option>
              </select>
            </div>

            <input
              type="text"
              placeholder="Search (ctrl + k)"
              className="w-full bg-transparent text-sm text-white placeholder-gray-300 px-3 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            <FiSearch className="text-gray-300" />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3">
          <div className="text-white text-sm">
            <span className="text-[#32A0FD]">Upgrade</span> or <span className="text-[#32A0FD]">Extend Trial</span>
          </div>
          <button className="text-white bg-[#159A62] hover:bg-bigin-teal bg-opacity-30 p-1 text-semibold"
            onClick={() => setShowCreateRecordModal(!showCreateRecordModal)}
          >
            <FiPlus />
          </button>

          <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5"
            onClick={() => setShowApprovalModal(!showApprovalModal)}>
            <FiClipboard />
          </button>
          <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5 "
            onClick={() => setShowNotifications(!showNotifications)}>
            <FiBell />
          </button>
          <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5"
          onClick={() => setShowUpgradeModal(!showUpgradeModal)}>
            <FiHelpCircle />

          </button>
          <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5">
            <FiSettings />
          </button>

          {/* Profile Avatar */}
          <div className="relative">
            <button
              className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center"
              onClick={() => setShowProfileMenu(!showProfileMenu)}
            >
              MS
            </button>
          </div>
        </div>
      </nav>
      {/* Upgrade Modal */}
{showUpgradeModal && (
  <div
    className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center"
    onClick={() => setShowUpgradeModal(false)}
  >
    <div
      className="bg-white rounded-md shadow-xl w-full max-w-md overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setShowUpgradeModal(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <FiX className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-8 flex flex-col items-center">
        <div className="bg-gray-100 p-8 rounded-full mb-4">
          <div className="relative">
            <svg width="120" height="120" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="200" r="30" fill="#F0F0F0" />
              <path d="M200 100 L150 250 L240 170 L160 170 L250 250 Z" fill="#32A0FD" />
              <circle cx="140" cy="160" r="15" fill="#FFD54F" />
              <circle cx="260" cy="160" r="8" fill="#FFFFFF" stroke="#CCCCCC" />
              <circle cx="320" cy="200" r="5" fill="#FFFFFF" stroke="#CCCCCC" />
              <rect x="140" y="320" width="120" height="3" fill="#CCCCCC" />
              <rect x="160" y="330" width="80" height="3" fill="#CCCCCC" />
            </svg>
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
              <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10 Q40 0, 50 10 Q60 20, 30 40 Q0 20, 10 10 Q20 0, 30 10Z" fill="#67B8FF" opacity="0.7" />
                <circle cx="32" cy="20" r="4" fill="white" />
                <path d="M20 15 L40 30 L20 25 Z" fill="#FFD54F" />
              </svg>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2">Upgrade to Express</h2>
        
        <div className="w-full border-t border-b border-gray-200 my-4"></div>
        
        <p className="text-center text-gray-600 mb-2">
          The Signals feature is not a part of the 'Free' plan.
        </p>
        <p className="text-center text-gray-600 mb-4">
          Please upgrade to 'Express' plan to access advanced features like this.
        </p>
        
        <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-10 rounded-full">
          Upgrade Now!
        </button>
      </div>
    </div>
  </div>
)}


      {/* Approval Form Modal */}
      {showApprovalModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center"
          onClick={() => setShowApprovalModal(false)}
        >
          <div
            className="bg-white shadow-xl w-full h-full overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Approvals</h2>
              <button
                onClick={() => setShowApprovalModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            <div className="border-b">
              <div className="flex">
                <button className="py-3 px-4 font-medium text-sm border-b-2 border-green-500 text-green-500">
                  Forms
                </button>
              </div>
            </div>

            <div className="p-6 flex flex-col items-center justify-center min-h-[300px] mt-16">
              <div className="mb-4">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="2" width="16" height="20" rx="2" stroke="#9CA3AF" strokeWidth="1.5" />
                  <line x1="8" y1="7" x2="16" y2="7" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="8" y1="12" x2="16" y2="12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="8" y1="17" x2="13" y2="17" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">You don't have any forms.</h3>
              <p className="text-gray-500 text-center max-w-md">
                Create approval forms to streamline your business processes and get approvals from your team members.
              </p>
              {/* <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
                <FiPlus className="mr-2" /> Create New Form
              </button> */}
            </div>
          </div>
        </div>
      )}

      {/* Notification Modal */}
      {showNotifications && (
        <div
          className="fixed top-0 right-0 inset-0 bg-black bg-opacity-30 z-50 flex justify-end items-start"
          onClick={() => setShowNotifications(false)}
        >
          <div
            className="w-[480px] h-full bg-white shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <button
                onClick={() => setShowNotifications(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Notification Tabs */}
            <div className="flex border-b">
              <button
                className={`flex-1 py-3 font-medium text-sm ${activeNotificationTab === 'feeds' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                onClick={() => setActiveNotificationTab('feeds')}
              >
                Feeds
              </button>
              <button
                className={`flex-1 py-3 font-medium text-sm ${activeNotificationTab === 'reminders' ? 'text-green-500 border-b-2 border-green-500' : 'text-gray-500'}`}
                onClick={() => setActiveNotificationTab('reminders')}
              >
                Reminders
              </button>
            </div>

            {/* Feeds Content */}
            {activeNotificationTab === 'feeds' && (
              <div className="p-4 flex flex-col items-center justify-center flex-grow">
                <div className="mb-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="3" y1="8" x2="21" y2="8" />
                    <line x1="9" y1="12" x2="15" y2="12" />
                    <line x1="9" y1="16" x2="15" y2="16" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">You don't have any feed notifications right now.</h3>
                <p className="text-gray-500 text-center">
                  Get notified whenever your team members mention you in a note or update any records that you own or follow.
                </p>
              </div>
            )}

            {/* Reminders Content */}
            {activeNotificationTab === 'reminders' && (
              <div className="p-4 flex flex-col items-center justify-center flex-grow">
                <div className="mb-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="6" x2="12" y2="12" />
                    <line x1="12" y1="12" x2="16" y2="16" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">No reminders to show</h3>
                <p className="text-gray-500 text-center">
                  When you have upcoming tasks, calls, or events, you'll see reminders here.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {showCreateRecordModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 shadow-sm z-50 flex justify-end items-start "
          onClick={() => setShowCreateRecordModal(false)}
        >
          <div
            className="w-[280px] h-[750px] bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-lg font-semibold">Create New Record</h2>
              <button
                onClick={() => setShowCreateRecordModal(false)}
                className="text-gray-600 hover:text-gray-900 bg-gray-200 rounded-full p-1"
              >
                <FiX className="w-6 h-6" />
              </button>
            </div>

            <div className="p-2">
              {recordTypes.map((record, index) => (
                <button
                  key={index}
                  className="w-full text-left flex items-center p-3 hover:bg-gray-100 border-b-2 "
                >
                  <record.icon className="mr-3 text-xl text-gray-600" />
                  <span className="text-semibold ">{record.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}



      {/* Profile Menu Overlay */}
      {showProfileMenu && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 shadow-xl z-50 flex justify-end items-start "
          onClick={() => setShowProfileMenu(false)}
        >
          <div
            className="w-[480px] h-[730px] bg-white shadow-xl  overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-gray-200 p-4">
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
                onClick={() => setShowProfileMenu(false)}
              >
                <FiX className="w-6 h-6" />
              </button>

              {/* Profile Header with Butterfly */}
              <div className="flex items-center mb-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 50 50' width='50' height='50'%3E%3Cpath d='M25 10 Q35 0, 45 10 Q55 20, 25 40 Q-5 20, 5 10 Q15 0, 25 10Z' fill='%23ff69b4' opacity='0.7'/%3E%3C/svg%3E"
                  alt="Butterfly"
                  className="w-12 h-12 mr-3"
                />
                <div>
                  <div className="font-bold text-lg">Simran Singh</div>
                  <div className="text-gray-500 text-sm">User ID: 60016323958</div>
                  <div className="mt-1">
                    <a href="#" className="text-blue-500 mr-2 text-sm">My Zoho Account</a>
                    <button
                      onClick={handleLogout}
                      className="text-red-500 text-sm"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <div className="p-4">



              {/* Remaining content from the original profile menu */}
              {/* My Organization */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-sm">My Organization</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-2">
                      YE
                    </div>
                    <span>Yashraj Enterprises</span>
                  </div>
                  <button className="text-blue-500 text-sm">Switch</button>
                </div>
              </div>

              {/* Subscription */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-sm">Subscription</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <span>Free</span>
                    <button className="text-blue-500 text-sm ml-2">Upgrade</button>
                  </div>
                </div>
                <button className=" text-sm mt-1">Move to Zoho CRM</button>
              </div>

              {/* Need Help? */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-sm">Need Help?</h3>
                <div className="grid grid-cols-2 gap-2">
                  <a href="#" className="flex items-center text-gray-600 text-sm hover:bg-gray-100 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Talk to us
                  </a>
                  <a href="mailto:support@bigin.com" className="flex items-center text-gray-600 text-sm hover:bg-gray-100 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    support@bigin.com
                  </a>
                  <a href="#" className="flex items-center text-gray-600 text-sm hover:bg-gray-100 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Help Resources
                  </a>
                  <a href="#" className="flex items-center text-gray-600 text-sm hover:bg-gray-100 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                      <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                    </svg>
                    Book a demo
                  </a>
                  <a href="#" className="flex items-center text-gray-600 text-sm hover:bg-gray-100 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                    </svg>
                    What's New
                  </a>
                  <a href="#" className="flex items-center text-gray-600 text-sm hover:bg-gray-100 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.465l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                    Join Our Webinars
                  </a>
                  <a href="#" className="flex items-center text-gray-600 text-sm hover:bg-gray-100 p-1 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.465l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" />
                    </svg>
                    Record Screen
                    <span className="bg-blue-500 text-white text-xs px-1 rounded ml-1">New</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Download Apps */}
            <div className="flex space-x-2 mt-28 bg-gray-200">
              <a href="#" className="w-1/2 p-4">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="w-full" />
              </a>
              <a href="#" className="w-1/2 mt-1">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Google Play" className="w-full" />
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
