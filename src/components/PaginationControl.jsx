import React from 'react';

export const PaginationControl = ({ page, setPage, nextPage }) => {
  return (
    <nav>
      <ul className="col justify-content-center pagination pb-3">
        <li className="page-item">
          <a role="button" className={page !== 1 ? "page-link " : "page-link text-muted disabled"} onClick={() => setPage(page === 0 ? 0 : page - 1)}>Anterior</a>
        </li>
        <li className="page-item">
          <a role="button" className={nextPage ? "page-link " : "page-link text-muted disabled"} onClick={() => setPage(page + 1)}>Siguente</a>
        </li>
      </ul>
    </nav>
  );
};
