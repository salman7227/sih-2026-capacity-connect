import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  ClipboardCheck,
  Award,
  BarChart3,
  User,
  Settings,
} from "lucide-react";

import "./TraineeSidebar.css";

function TraineeSidebar() {
  const mainMenu = [
    {
      name: "Dashboard",
      path: "/trainee",
      icon: LayoutDashboard,
    },
    {
      name: "My Courses",
      path: "/trainee/courses",
      icon: BookOpen,
    },
    {
      name: "Assessments",
      path: "/trainee/assessments",
      icon: ClipboardCheck,
    },
    {
      name: "Certificates",
      path: "/trainee/certificates",
      icon: Award,
    },
    {
      name: "Progress",
      path: "/trainee/progress",
      icon: BarChart3,
    },
  ];

  const bottomMenu = [
    {
      name: "Profile",
      path: "/trainee/profile",
      icon: User,
    },
    {
      name: "Settings",
      path: "/trainee/settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="trainee-sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <div className="logo-mark">C</div>

        <div className="logo-text">
          <span>CAPACITY</span>
          <strong>CONNECT</strong>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sidebar-navigation">
        <div className="sidebar-main-menu">
          {mainMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/trainee"}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={22} strokeWidth={2} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>

        {/* Divider */}
        <div className="sidebar-divider"></div>

        {/* Bottom Navigation */}
        <div className="sidebar-bottom-menu">
          {bottomMenu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
              >
                <Icon size={22} strokeWidth={2} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Bottom Message */}
      <div className="sidebar-message">
        <div className="message-decoration"></div>

        <h3>
          Keep Learning
          <br />
          Keep Growing
        </h3>
      </div>

    </aside>
  );
}

export default TraineeSidebar;