import React from "react";
import { FaTimes } from "react-icons/fa";
import  sublinks  from "./data";
import { useGlobalContext } from "../context/context";
import "../Styles/Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links &&
                    links.map((link, linkIndex) => {
                      const { url, icon, label } = link;
                      return (
                        <a key={linkIndex} href={url}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
