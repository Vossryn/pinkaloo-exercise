import React from "react";

import "./styles.scss";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  prevPage = () => null,
  nextPage = () => null,
}) {
  return (
    <div className="pagination">
      <div className="pagination-prev" onClick={prevPage}>
        Prev
      </div>
      <div className="pagination-page">
        Page {currentPage} of {totalPages}
      </div>
      <div className="pagination-next" onClick={nextPage}>
        Next
      </div>
    </div>
  );
}
