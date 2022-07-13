import React, { useState } from "react";
import './AddEntryForm.css'

const AddEntryForm = (props) => {
  const [weight, setWeight] = useState();
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
    <form onSubmit={handleSubmit} className='form-grid'>
      <div className="form-group">
        <label>Weight</label>
        <input
          className="form-control"
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          className="form-control"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" type="submit" style={{'margin-top': '1em'}} >Add</button>
    </form>
  );
};

export default AddEntryForm;
