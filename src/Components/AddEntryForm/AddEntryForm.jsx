import React, { useState } from "react";
import "./AddEntryForm.css";
import Button from "@mui/material/Button";
import { FormControl, InputLabel, Input, TextField } from "@mui/material";

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
    <form onSubmit={handleSubmit} className="form-grid">
      <div className="form-group">
        <TextField
          helperText="Please Enter Your Weight"
          label="Weight"
          required
          className="form-control"
          type="number"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
        />
      </div>
      <div className="form-group">
        <TextField
          helperText="Please Enter Your Weight"
          required
          className="form-control"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <Button variant="contained" type="submit">
        Add
      </Button>
    </form>
  );
};

export default AddEntryForm;
