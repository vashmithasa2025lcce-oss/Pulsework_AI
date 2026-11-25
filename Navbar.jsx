
import React from "react";
import "./Navbar.css";

function Navbar({ activePage, setActivePage }) {
  const menuItems = [
    { name: "Dashboard", icon: "▦" },
    { name: "Projects", icon: "▣" },
    { name: "Tasks", icon: "☑" },
    { name: "Team", icon: "♧" },
    { name: "Reports", icon: "▤" },
    { name: "Settings", icon: "⚙" },
  ];

  return (
    <aside className="sidebar">

      <div className="brand">
        <span className="brand-icon">∿</span>
        <span>PulseWorks <small>AI</small></span>
      </div>

      <nav className="sidebar-menu">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={
              activePage === item.name
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => setActivePage(item.name)}
          >
            <span className="menu-icon">{item.icon}</span>
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="help-box">
          <span>💡</span>
          <div>
            <strong>Need help?</strong>
            <small>Contact our support team</small>
          </div>
        </div>

        <div className="sidebar-user">
          <div className="user-avatar">J</div>
          <div>
            <strong>John</strong>
            <small>Admin</small>
          </div>
        </div>
      </div>

    </aside>
  );
}

export default Navbar;
