import React from "react";

function Heading() {
  return (
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1>Weekly Report</h1>
      <input
        className="form-control form-control-dark w-25"
        type="text"
        placeholder="Enter your name"
        aria-label="Search"
      />
      <div className="btn-toolbar mb-2 mb-md-0">
        <div className="btn-group mr-2">
          <button type="button" className="btn btn-sm btn-outline-secondary">
            Export
          </button>
        </div>
        <button
          type="button"
          className="btn btn-sm btn-outline-secondary dropdown-toggle"
        >
          <span data-feather="calendar"></span>
          This week
        </button>
      </div>
    </div>
  );
}

export default Heading;
