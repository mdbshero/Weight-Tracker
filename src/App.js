import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntryForm/AddEntryForm";

function App() {
  const [entries, setEntries] = useState([{ weight: 175, date: "07-13-2022" }, { weight: 175, date: "07-14-2022" }]);

  function addNewEntry(entry) {
    let tempEntries = [...entries, entry]
    setEntries(tempEntries)
  }

  return (
    <div>
      <DisplayEntries entries={entries}/>
      <AddEntryForm addNewEntry={addNewEntry}/>
    </div>
  );
}

export default App;
