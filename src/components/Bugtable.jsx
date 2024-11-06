import React, { useState } from "react";
import BugRow from "./BugRow";
import './BugTable.css';  // Import the external CSS file

function BugTable() {
  // Initialize the bugs array with some default values
  const [bugs, setBugs] = useState([
    {
      id: "CSCvxm65862",
      component: "gzip",
      age: 26,
      pm: "A. Saravara",
      severity: "S2",
      headline: "HIGH severity CVEs in gzip",
      status: "Open",
    },
    {
      id: "CSCvxh06766",
      component: "fretta-bios",
      age: 454,
      pm: "S. Robojs",
      severity: "S3",
      headline: "Secure erase to address SEC-DAT-CLNSTATE-7.2",
      status: "In Progress",
    },
    {
      id: "CSCvxw23844",
      component: "jmukadda",
      age: 135,
      pm: "P. Nikku",
      severity: "S3",
      headline: "SEC-VAI/NEAL-2 compliance for BB/darwin",
      status: "Review",
    },
  ]);

  // Form fields state
  const [formData, setFormData] = useState({
    id: "",
    component: "",
    age: "",
    pm: "",
    severity: "",
    headline: "",
    status: "",
  });

  // Handle input changes in the form
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission to add a new bug
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Add the new bug to the state
    setBugs((prevBugs) => [...prevBugs, formData]);

    // Reset the form fields
    setFormData({
      id: "",
      component: "",
      age: "",
      pm: "",
      severity: "",
      headline: "",
      status: "",
    });
  };

  return (
    <div>
      {/* Form to add new bug */}
      <form onSubmit={handleSubmit} className="form-container">
        <h3 className="form-heading">Add a New Bug</h3>
        <div className="form-grid">
          <div>
            <label className="form-label">Bug ID</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Component</label>
            <input
              type="text"
              name="component"
              value={formData.component}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Age (Days)</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">PM</label>
            <input
              type="text"
              name="pm"
              value={formData.pm}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Severity</label>
            <input
              type="text"
              name="severity"
              value={formData.severity}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Headline</label>
            <input
              type="text"
              name="headline"
              value={formData.headline}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>
        </div>
        <button type="submit" className="form-button">
          Add Bug
        </button>
      </form>

      {/* Bug Table */}
      <table className="bug-table">
        <thead>
          <tr>
            <th>Bug ID</th>
            <th>Component</th>
            <th>Age (Days)</th>
            <th>PM</th>
            <th>Severity</th>
            <th>Headline</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {bugs.map((bug) => (
            <BugRow key={bug.id} bug={bug} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BugTable;
