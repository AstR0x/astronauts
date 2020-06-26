import React from 'react';

import styles from './Pagination.module.css';

export const Pagination = ({ onChangePage, totalPages, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages); i++) {
    pageNumbers.push(i);
  }

  const buttonClasses = pageNumber => {
    const classes = [styles.listButton];

    if (pageNumber === currentPage) {
      classes.push(styles.isActive);
    }

    return classes.join(' ');
  };

  return (
    <ul className={styles.list}>
      <li>
        <button
          onClick={onChangePage.bind(null, 1)}
          className={styles.listButton}
          type="button"
        > &lt;&lt;
        </button>
      </li>
      {pageNumbers.map(pageNumber => (
        <li key={pageNumber}>
          <button
            onClick={onChangePage.bind(null, pageNumber)}
            className={buttonClasses(pageNumber)}
            type="button"
          >
            {pageNumber}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={onChangePage.bind(null, totalPages)}
          className={styles.listButton}
          type="button"
        >
          &gt;&gt;
        </button>
      </li>
    </ul>
  );
};
