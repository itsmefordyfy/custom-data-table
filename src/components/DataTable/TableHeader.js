import React from "react";

const TableHeader = ({ columns, onSort }) => {
  const handleSort = (key) => {
    onSort(key);
  };

  return (
    <thead>
      <tr>
        {columns.map((col) => (
          <th key={col.key} onClick={() => handleSort(col.key)}>
            {col.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
