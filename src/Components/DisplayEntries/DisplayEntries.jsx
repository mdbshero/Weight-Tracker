import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DisplayEntries = (props) => {
  const entries = props.entries;
  return (
    <Table className="table">
      <thead>
        <tr>
          <th>Entry Number</th>
          <th>Weight</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => {
          return (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.weight}</td>
              <td>{entry.date}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default DisplayEntries;
