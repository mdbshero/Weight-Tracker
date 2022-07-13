import React, { useState } from "react";

const AddEntryForm = (props) => {
  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let newEntry = {
      weight: weight,
      date: date,
    };
    props.addNewEntry(newEntry);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Weight</label>
      <input
        type="number"
        value={weight}
        onChange={(e) => setWeight(parseFloat(e.target.value))}
      />
      <label>Date</label>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEntryForm;
