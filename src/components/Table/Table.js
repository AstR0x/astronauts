import React from 'react';

import { ReactComponent as DeleteIcon } from 'assets/icons/delete.svg';

import { formatDate } from 'utils';

import styles from './Table.module.css';

const symbols = {
  asc: '▲',
  desc: '▼',
};

const cellClasses = `${styles.cell} ${styles.sortedCell}`;
const fields = [
  {
    name: 'name',
    ruName: 'Имя',
  },
  {
    name: 'date',
    ruName: 'Дата полёта',
  },
  {
    name: 'days',
    ruName: 'Дни в космосе',
  },
  {
    name: 'mission',
    ruName: 'Название миссии',
  },
  {
    name: 'isMultiple',
    ruName: 'Повторные полёты',
  }];

const Table = ({ astronauts, onDelete, onSort, sortField, sortDirection }) => (
  <table className={styles.table}>
    <thead className={styles.head}>
      <tr className={styles.row}>
        {fields.map(field => (
          <th
            onClick={onSort.bind(null, field.name)}
            className={cellClasses}
            key={field.name}
          >
            {field.ruName} {sortField === field.name && (
            <span>{symbols[sortDirection]}</span>
            )}
          </th>
        ))}
        <th></th>
      </tr>
    </thead>
    <tbody className={styles.body}>
      {astronauts.map(astronaut => (
        <tr className={styles.row} key={astronaut.id}>
          <td className={styles.cell}>{astronaut.name}</td>
          <td className={styles.cell}>{formatDate(astronaut.date)}</td>
          <td className={styles.cell}>{astronaut.days}</td>
          <td className={styles.cell}>{astronaut.mission}</td>
          <td className={styles.cell}>{astronaut.isMultiple ? 'Да' : 'Нет'}</td>
          <td>
            <button
              onClick={onDelete.bind(null, astronaut.id)}
              className={styles.deleteButton}
              type="button"
            >
              <DeleteIcon />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export { Table };
