import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiPieChart,
  FiUsers,
  FiDollarSign,
  FiBox,
  FiActivity,
  FiGrid,
} from "react-icons/fi";

const Sidebar = () => {
  const [active, setActive] = useState("pipelines");

  return (
    <div className="bg-bigin-blue w-16 min-h-screen flex flex-col items-center py-0 mt-0">
      <Link
        to="/pipelines"
        className={`sidebar-icon ${active === "pipelines" ? "bg-bigin-teal" : ""}`}
        onClick={() => setActive("pipelines")}
      >
        <FiPieChart size={20} />
        <span className="text-xs mt-1">Pipelines</span>
      </Link>

      <Link
        to="/contacts"
        className={`sidebar-icon ${active === "contacts" ? "bg-bigin-teal" : ""}`}
        onClick={() => setActive("contacts")}
      >
        <FiUsers size={20} />
        <span className="text-xs mt-1">Contacts</span>
      </Link>

      <Link
        to="/bank"
        className={`sidebar-icon ${active === "bank" ? "bg-bigin-teal" : ""}`}
        onClick={() => setActive("bank")}
      >
        <FiDollarSign size={20} />
        <span className="text-xs mt-1">Bank</span>
      </Link>

      <Link
        to="/products"
        className={`sidebar-icon ${active === "products" ? "bg-bigin-teal" : ""}`}
        onClick={() => setActive("products")}
      >
        <FiBox size={20} />
        <span className="text-xs mt-1">Products</span>
      </Link>

      <Link
        to="/activities"
        className={`sidebar-icon ${active === "activities" ? "bg-bigin-teal" : ""}`}
        onClick={() => setActive("activities")}
      >
        <FiActivity size={20} />
        <span className="text-xs mt-1">Activities</span>
      </Link>

      <Link
        to="/dashboard"
        className={`sidebar-icon ${active === "dashboard" ? "bg-bigin-teal" : ""}`}
        onClick={() => setActive("dashboard")}
      >
        <FiGrid size={20} />
        <span className="text-xs mt-1">Dashboard</span>
      </Link>
    </div>
  );
};

export default Sidebar;