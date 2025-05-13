import { useState } from "react";
import { FaUser, FaPlus, FaBoxOpen, FaChartBar } from "react-icons/fa";
import MyProfile from "../Component/MyProfile";
import AddNewProduct from "./AddNewProduct";
import MyProduct from "./MyProduct";
import Statistics from "../Component/Statistics";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("profile");

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <MyProfile />;
      case "add":
        return <AddNewProduct />;
      case "my":
        return <MyProduct />;
      case "stats":
        return <Statistics />;
      default:
        return null;
    }
  };

  const navItems = [
    { id: "profile", label: "Profile", icon: <FaUser /> },
    { id: "add", label: "Add Product", icon: <FaPlus /> },
    { id: "my", label: "My Products", icon: <FaBoxOpen /> },
    { id: "stats", label: "Statistics", icon: <FaChartBar /> },
  ];

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr] bg-gray-50">
      {/* Sidebar */}
      <aside className="bg-gray-600 text-white font-mono flex flex-col p-6">
        <h2 className="text-3xl font-bold mb-10 text-center tracking-wide">Dashboard</h2>
        <nav className="space-y-2">
          {navItems.map(({ id, label, icon }) => (
            <button
              key={id}
              onClick={() => setActivePage(id)}
              className={`flex items-center gap-3 w-full px-4 py-3 text-left rounded-lg transition
                ${activePage === id
                  ? "bg-cyan-600 text-white shadow-md"
                  : "hover:bg-gray-300 hover:text-gray-700"
                }`}
            >
              {icon}
              <span className="text-base font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="p-8  overflow-y-auto">
        <h1 className="text-2xl font-semibold mb-6 font-mono text-gray-800 border-b pb-2">
          {navItems.find((item) => item.id === activePage)?.label}
        </h1>
        <div className="bg-white shadow-md p-4 rounded-lg">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
