import React from 'react';

import styles from './Filter.module.css';

export const Filter = ({ filter, onFilter }) => (
  <input
    value={filter}
    onChange={onFilter}
    className={styles.input}
    placeholder="Фильтр"
  />
);
