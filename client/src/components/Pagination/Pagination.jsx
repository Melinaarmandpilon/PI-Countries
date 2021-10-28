import React from "react";

export default function Pagination({ allCountries,countriesPerPage,paginate,}) {
  const pageNumbers = [];

//   console.log("paginate", paginate);

  for (let i = 1; i < Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers?.map((pageNum) => (
        <div key={pageNum}>
          <button onClick={e=> paginate(pageNum)}>
            {pageNum}
          </button>
        </div>
      ))}
    </nav>
  );
}
