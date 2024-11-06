import React from "react";

function FilterBar() {
  return (
    <div className="filter-bar">
      <select>
        <option>Severity</option>
        {/* Add other severity levels */}
      </select>
      <select>
        <option>Status</option>
        {/* Add other status options */}
      </select>
      <input type="text" placeholder="Search..." />
    </div>
  );
}

export default FilterBar;