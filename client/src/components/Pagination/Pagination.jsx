import React from "react";
import styles from "./Pagination.module.css";

export default function Pagination({
  allCountries,
  countriesPerPage,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  let totalPage = Math.ceil(allCountries / countriesPerPage);

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }
 
  return (
    <div className={styles.container}>
      {pageNumbers && currentPage > 1 ? (
        <button
          className={styles.navigate}
          onClick={() => paginate(currentPage - 1)}
        >
          {" "}
          Prev.{" "}
        </button>
      ) : null}

      {pageNumbers?.map((pageNum) => (
        <button
          className={currentPage === pageNum ? styles.btnselec : styles.btn}
          key={pageNum}
          onClick={() => paginate(pageNum)}
        >
          {pageNum}
        </button>
      ))}

      {pageNumbers && currentPage <= pageNumbers.length - 1 ? (
        <button
          className={styles.navigate}
          onClick={() => paginate(currentPage + 1)}
        >
          {" "}
          Next{" "}
        </button>
      ) : null}
    </div>
  );
}
