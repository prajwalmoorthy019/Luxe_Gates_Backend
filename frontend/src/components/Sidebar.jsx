import {
  LayoutDashboard,
  Users,
  FileText,
  Image,
  Package,
  User,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

import logo from "../assets/luxe-logo.png";

function Sidebar() {

  const location = useLocation();

  const menus = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <LayoutDashboard size={20} />,
    },

    {
      name: "Customers",
      path: "/customers",
      icon: <Users size={20} />,
    },

    {
      name: "Quotations",
      path: "/quotations",
      icon: <FileText size={20} />,
    },

    {
      name: "Gallery",
      path: "/gallery",
      icon: <Image size={20} />,
    },

    {
      name: "Products / Items",
      path: "/products",
      icon: <Package size={20} />,
    },

    {
      name: "Users",
      path: "/users",
      icon: <User size={20} />,
    },

    {
      name: "Reports",
      path: "/reports",
      icon: <BarChart3 size={20} />,
    },

    {
      name: "Settings",
      path: "/settings",
      icon: <Settings size={20} />,
    },
  ];

  return (

    <div className="w-[290px] bg-[#0a0f1c] rounded-[30px] m-4 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#1b2235]">

      {/* TOP SECTION */}
      <div>

        {/* LOGO */}
        <div className="flex flex-col items-center pt-10 pb-8">

          <img
            src={logo}
            alt="Luxe Gates"
            className="w-40 object-contain"
          />

        </div>

        {/* MENU ITEMS */}
        <div className="px-4 space-y-3">

          {menus.map((menu) => {

            const isActive = location.pathname === menu.path;

            return (

              <Link
                key={menu.path}
                to={menu.path}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300

                ${
                  isActive
                    ? "bg-gradient-to-r from-[#c89b3c] to-[#a67c1f] text-white shadow-lg"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }

                `}
              >

                <div>
                  {menu.icon}
                </div>

                <span className="text-lg font-medium">
                  {menu.name}
                </span>

              </Link>

            );
          })}

        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="p-5 border-t border-white/10">

        <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-zinc-300 hover:bg-white/5 transition-all duration-300">

          <LogOut size={20} />

          <span className="text-lg font-medium">
            Sign Out
          </span>

        </button>

      </div>

    </div>
  );
}

export default Sidebar;