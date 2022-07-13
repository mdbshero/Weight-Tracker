const DisplayEntries = (props) => {
  const entries = props.entries;
  return (
    <table>
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
    </table>
  );
};

export default DisplayEntries;
