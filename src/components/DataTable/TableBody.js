import React from "react";

const TableBody = ({ data, columns }) => (
  <tbody>
    {data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {columns.map((col) => (
          <td key={col.key}>{row[col.key]}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;
