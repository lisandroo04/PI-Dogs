import React from "react";
import s from "./Pagination.module.css";

export default function Pagination({ totalPages, currentPage, handlePageChange }) {
  const numPagesToShow = 5;
  
  const startPage = Math.max(currentPage - Math.floor(numPagesToShow / 2), 1)
  const endPage = Math.min(startPage + numPagesToShow - 1, totalPages)

  const visiblePages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index)

  return (
    <div className={s.div}>
      <ul className={s.ul}>
        {currentPage > 3 && (
          <li key="first" className={s.li}>
            <button onClick={() => handlePageChange(1)} className={s.otherButton}>
              1
            </button>
          </li>
        )}
        {startPage > 1 && (
          <li key="prev" className={s.li}>
            <button onClick={() => handlePageChange(currentPage - 1)} className={s.otherButton}>
              Prev
            </button>
          </li>
        )}
        {visiblePages.map((num) => (
          <li key={num} className={s.li}>
            <button
              onClick={() => {
                handlePageChange(num);
              }}
              className={currentPage === num ? s.currentButon : s.otherButton}
            >
              {num}
            </button>
          </li>
        ))}
        {endPage < totalPages && (
          <li key="next" className={s.li}>
            <button onClick={() => handlePageChange(currentPage + 1)} className={s.otherButton}>
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}