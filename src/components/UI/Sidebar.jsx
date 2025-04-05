import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Calendar,
  FileText,
  Activity,
  Clipboard,
  CreditCard,
  BarChart2,
} from "lucide-react";

const menuItems = [
  { icon: <Home size={20} />, label: "Dashboard", to: "/" },
  { icon: <Calendar size={20} />, label: "Appointments", to: "/appointments" },
  { icon: <FileText size={20} />, label: "Medical Records", to: "/records" },

  {
    icon: <Clipboard size={20} />,
    label: "Prescriptions",
    to: "/prescriptions",
  },
  { icon: <CreditCard size={20} />, label: "Billing", to: "/billing" },
  { icon: <BarChart2 size={20} />, label: "Analytics", to: "/analytics" },
];

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 text-rose-400 border-r p-6 flex flex-col justify-between fixed bg-black">
      <div>
        <img
          src="LogoHealth.png"
          alt="HealthiFy Logo"
          className="w-full max-w-md h-[120px] object-contain mt-0"
        />

        <ul className="space-y-2">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded text-sm font-medium ${
                    isActive
                      ? "bg-gray-200 text-rose-400"
                      : "text-gray-400 hover:bg-gray-100 hover:text-rose-400"
                  }`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
