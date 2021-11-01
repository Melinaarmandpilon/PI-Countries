import React from "react";

export default function Pagination({ allCountries,countriesPerPage,paginate,}) {
  const pageNumbers = [];

  // console.log("paginate", paginate);

  let totalPage=Math.ceil(allCountries / countriesPerPage)

  for (let i = 1; i <  totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {pageNumbers?.map((pageNum) => (
          <button key={pageNum} onClick={e=> paginate(pageNum)}>
            {pageNum}
          </button>
      ))}
    </div>
  );
}
