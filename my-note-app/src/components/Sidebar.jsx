import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Note</h1>
        <button>ADD</button>
      </div>
      <div className="app-sidebar-notes">
        <div className="app-sidebar-note">
          <div className="sidebar-note-title">
            <strong>title</strong>
            <button>delete</button>
          </div>
          <p>This is note content.</p>
          <small>update:xxxx/xx/xx</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
