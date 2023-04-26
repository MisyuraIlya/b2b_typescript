import React, { useState, useEffect } from "react";
import './Pagination.styles.scss'
type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxVisibleButtons?: number;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  maxVisibleButtons = 5,
}) => {
  const [pageButtons, setPageButtons] = useState<number[]>([]);

  useEffect(() => {
    const newButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      newButtons.push(i);
    }
    setPageButtons(newButtons);
  }, [totalPages]);

  const handleFirstPageClick = () => {
    onPageChange(1);
  };

  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleLastPageClick = () => {
    onPageChange(totalPages);
  };

  const startButtonIndex = Math.max(
    0,
    Math.min(
      pageButtons.length - maxVisibleButtons,
      Math.floor(currentPage - maxVisibleButtons / 2)
    )
  );

  const visibleButtons = pageButtons.slice(startButtonIndex, startButtonIndex + maxVisibleButtons);

  return (
    <div className="pagination">
      <button onClick={handleFirstPageClick} disabled={currentPage === 1}>
        {"<<"}
      </button>
      <button onClick={handlePrevPageClick} disabled={currentPage === 1}>
        {"<"}
      </button>
      {startButtonIndex > 0 && <span>...</span>}
      {visibleButtons.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
      {startButtonIndex + maxVisibleButtons < pageButtons.length && <span>...</span>}
      <button onClick={handleNextPageClick} disabled={currentPage === totalPages}>
        {">"}
      </button>
      <button onClick={handleLastPageClick} disabled={currentPage === totalPages}>
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
