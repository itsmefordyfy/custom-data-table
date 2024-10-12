// src/components/App.js

import React from "react";
import DataTable from "./DataTable/DataTable";

const App = () => {
  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
  ];

  const data = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Mike", age: 32 },
  ];

  return <DataTable columns={columns} data={data} />;
};

export default App;
