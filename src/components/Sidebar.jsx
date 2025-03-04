// import { FiPieChart, FiUsers, FiDollarSign, FiBox, FiActivity, FiGrid } from 'react-icons/fi';

// const Sidebar = () => {
//   return (
//     <div className="bg-bigin-blue w-16 min-h-screen flex flex-col items-center">
//       <div className="sidebar-icon">
//         <FiPieChart size={20} />
//         <span className="text-xs mt-1">Pipelines</span>
//       </div>
//       <div className="sidebar-icon">
//         <FiUsers size={20} />
//         <span className="text-xs mt-1">Contacts</span>
//       </div>
//       <div className="sidebar-icon">
//         <FiDollarSign size={20} />
//         <span className="text-xs mt-1">Bank</span>
//       </div>
//       <div className="sidebar-icon">
//         <FiBox size={20} />
//         <span className="text-xs mt-1">Products</span>
//       </div>
//       <div className="sidebar-icon">
//         <FiActivity size={20} />
//         <span className="text-xs mt-1">Activities</span>
//       </div>
//       <div className="sidebar-icon">
//         <FiGrid size={20} />
//         <span className="text-xs mt-1">Dashboard</span>
//       </div>
//       <div className="mt-auto text-center text-white text-xs py-4">
//         <div className="w-8 h-8 mx-auto bg-gray-600 rounded-full flex items-center justify-center mb-1">
//           1
//         </div>
//         <span>Standard</span>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

import { Link } from 'react-router-dom';
import { FiPieChart, FiUsers, FiDollarSign, FiBox, FiActivity, FiGrid } from 'react-icons/fi';

const Sidebar = () => {
  return (
    <div className="bg-bigin-blue w-16 min-h-screen flex flex-col items-center py-4">
      <Link to="/pipelines" className="sidebar-icon">
        <FiPieChart size={20} />
        <span className="text-xs mt-1">Pipelines</span>
      </Link>
      <Link to="/contacts" className="sidebar-icon">
        <FiUsers size={20} />
        <span className="text-xs mt-1">Contacts</span>
      </Link>
      <Link to="/bank" className="sidebar-icon">
        <FiDollarSign size={20} />
        <span className="text-xs mt-1">Bank</span>
      </Link>
      <Link to="/products" className="sidebar-icon">
        <FiBox size={20} />
        <span className="text-xs mt-1">Products</span>
      </Link>
      <Link to="/activities" className="sidebar-icon">
        <FiActivity size={20} />
        <span className="text-xs mt-1">Activities</span>
      </Link>
      <Link to="/dashboard" className="sidebar-icon">
        <FiGrid size={20} />
        <span className="text-xs mt-1">Dashboard</span>
      </Link>

    </div>
  );
};

export default Sidebar;
