import React from "react";
import styles from "./Pagination.module.css"

export default function Pagination({ allCountries,countriesPerPage,paginate,numberPage}) {
  const pageNumbers = [];

  
  let totalPage=Math.ceil(allCountries / countriesPerPage)
  // console.log("totalPage", totalPage);

  for (let i = 1; i <=  totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
        {pageNumbers && numberPage > 1 ? < button className={styles.navigate} onClick={() => paginate(numberPage -1)}> Prev. </button> : null}
     
      {pageNumbers?.map((pageNum) => (
          <button className={numberPage===pageNum?styles.btnselec:styles.btn} key={pageNum} onClick={()=> paginate(pageNum)}>
            {pageNum}
          </button>
      ))}
       {pageNumbers && numberPage <= pageNumbers.length -1 ? <button className={styles.navigate} onClick={() => paginate(numberPage + 1)}> Next </button> : null}
    </div>
  );
}
