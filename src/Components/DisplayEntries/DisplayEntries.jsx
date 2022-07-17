import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Tab } from "bootstrap";

const DisplayEntries = (props) => {
  const entries = props.entries;
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader={true} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Entry Number</TableCell>
            <TableCell align="left">Weight</TableCell>
            <TableCell align="left">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry, index) => {
            return (
              <TableRow key={index}>
                <TableCell align="left">{index + 1}</TableCell>
                <TableCell align="left">{entry.weight}</TableCell>
                <TableCell align="left">{entry.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DisplayEntries;
