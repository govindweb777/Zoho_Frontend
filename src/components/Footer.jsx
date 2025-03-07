import { FiMessageSquare, FiUsers, FiHelpCircle, FiSearch } from 'react-icons/fi';

const Footer = () => {
  return (
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
      <div className="text-gray-500 text-sm">
        Here is your Smart Chat (Ctrl+Space)
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-600">
          <FiHelpCircle className="mr-1" />
          <span className="text-sm">Need Help?</span>
        </div>
        <button className="text-gray-600">
          <FiSearch />
        </button>
      </div>
    </div>
  );
};

export default Footer;