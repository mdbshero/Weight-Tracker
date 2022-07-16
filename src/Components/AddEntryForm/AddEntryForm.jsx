import React, { useState } from "react";
import './AddEntryForm.css'
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
      <Button variant="contained" type="submit">Add</Button>
    </form>
  );
};

export default AddEntryForm;
