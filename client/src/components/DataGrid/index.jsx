import React from "react";

export default function DataGrid({ data, currentPage, totalPages }) {
  return (
    <div>
      <div>Data Grid</div>
      <div>{data}</div>
      <div>{currentPage}</div>
      <div>{totalPages}</div>
    </div>
  );
}
