import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntryForm/AddEntryForm";
import EntriesChartTracker from "./Components/EntriesChartTracker/EntriesChartTracker";
import "./App.css";

function App() {
  const [entries, setEntries] = useState([
    { weight: 175, date: "07-13-2022" },
    { weight: 1764, date: "07-14-2022" },
  ]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry];
    setEntries(tempEntries);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <h3 style={{margin: '1em'}} >Weight<small className="text-muted">Tracker</small></h3>
        <div className="col-md-6">
          <div className="border-box">
            <DisplayEntries entries={entries} />
          </div>
          <div className="border-box">
            <AddEntryForm addNewEntry={addNewEntry} />
          </div>
        </div>
        <div className="col-md-6">
          <div className="border-box">
            <EntriesChartTracker entries={entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
