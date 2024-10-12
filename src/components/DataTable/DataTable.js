import React, { useState, useEffect, useMemo } from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./DataTable.css";

const DataTable = ({ columns, data }) => {
  const [sortedData, setSortedData] = useState(data);
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    handleSort(sortKey);
  }, [data]);

  const handleSort = (key) => {
    if (!key) return;
    const order = sortKey === key && sortOrder === "asc" ? "desc" : "asc";
    const sorted = [...data].sort((a, b) => {
      if (a[key] < b[key]) return order === "asc" ? -1 : 1;
      if (a[key] > b[key]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setSortKey(key);
    setSortOrder(order);
    setSortedData(sorted);
  };

  const filteredData = useMemo(() => {
    if (!filter) return sortedData;
    return sortedData.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      )
    );
  }, [filter, sortedData]);

  return (
    <div className="data-table-container">
      <input
        type="text"
        className="filter-input"
        placeholder="Filter data"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <table className="data-table">
        <TableHeader columns={columns} onSort={handleSort} />
        <TableBody data={filteredData} columns={columns} />
      </table>
      <p className="message">
        Sorted by: {sortKey || "None"} ({sortOrder})
      </p>
      <p className="message">Filtered by: {filter}</p>
    </div>
  );
};

export default DataTable;
