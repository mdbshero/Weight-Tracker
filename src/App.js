import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";

function App() {
  const [entries, setEntries] = useState([{ weight: 175, date: "07-13-2022" }, { weight: 175, date: "07-14-2022" }]);

  return (
    <div>
      <DisplayEntries entries={entries}/>
    </div>
  );
}

export default App;
