import React from "react";
import BugRow from "./BugRow";

function BugTable() {
  const bugs = [
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
  ];

  return (
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
  );
}

export default BugTable;