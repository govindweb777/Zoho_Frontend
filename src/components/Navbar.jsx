import { useState } from 'react';
import { FiSearch, FiPlus, FiClipboard, FiBell, FiHelpCircle, FiSettings, FiChevronDown } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove token from localStorage (or sessionStorage)
    localStorage.removeItem("token");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <nav className="bg-bigin-blue h-12 flex items-center justify-between px-4 shadow-md">
      {/* Left section */}
      <div className="flex items-center">
        <div className="text-white font-bold text-xl mr-4">Bigin</div>


        <div className="ml-5 flex items-center bg-[#0A4761] rounded-3xl px-3 py-1.5 w-full w-[350px]">
          {/* Dropdown for selecting filter category */}
          <div className="relative border-gray-600 border-r-2 ">
            <select className="bg-transparent text-white text-sm font-medium focus:outline-none mr-2">
              <option value="all" className="text-black">All</option>
              {/* Add more options if needed */}
            </select>
          </div>

          {/* Search Input Field */}
          <input
            type="text"
            placeholder="Search (ctrl + k)"
            className="w-full bg-transparent text-sm text-white placeholder-gray-300 px-3 focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Search Icon */}
          <FiSearch className="text-gray-300" />
        </div>

      </div>




      {/* Right section */}
      <div className="flex items-center space-x-3">
        <div className="text-white text-sm">
          You are in Free plan. <span className="text-[#32A0FD]">Upgrade</span> or <span className="text-[#32A0FD]">Extend Trial</span>
        </div>
        <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5">
          <FiPlus />
        </button>
        <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5">
          <FiClipboard />
        </button>
        <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5">
          <FiBell />
        </button>
        <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5">
          <FiHelpCircle />
        </button>
        <button className="text-white bg-bigin-dark bg-opacity-30 rounded-full p-1.5">
          <FiSettings />
        </button>
        <div className="relative">
          <button
            className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            MS
          </button>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg z-10">
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center mr-3">
                    MS
                  </div>
                  <div>
                    <div className="font-semibold">Simran Singh</div>
                    <div className="text-sm text-gray-500">User ID: 60016323958</div>
                  </div>
                </div>
                <div className="mt-2 text-sm text-blue-500">
                  <span>My Zoho Account</span> • <button onClick={handleLogout}>Sign Out</button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">My Organization</h3>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-teal-500 text-white flex items-center justify-center mr-2">
                    YE
                  </div>
                  <span>Yashraj Enterprises</span>
                  <span className="ml-2 text-blue-500">• Switch</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;