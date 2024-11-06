import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import FilterBar from "./components/Filterbar";
import BugTable from "./components/Bugtable";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <FilterBar />
      <BugTable/>
      
    </div>
  );
}

export default App;