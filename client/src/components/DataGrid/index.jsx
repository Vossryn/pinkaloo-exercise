import React from "react";

import "./styles.scss";

export default function DataGrid({ rows = [], columns = [] }) {
  return (
    <table className="datagrid-container">
      <thead className="datagrid-header">
        <tr className="datagrid-header-row">
          {columns.map((column, index) => (
            <th className="datagrid-header-cell" key={index}>
              {column.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="datagrid-body">
        {rows.map((row) => (
          <tr className="datagrid-body-row" key={row.id}>
            {columns.map((column, index) => (
              <td className="datagrid-body-cell" key={index}>
                {row[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
