import React from 'react';

import { formatDate } from '../../utils';

import { ReactComponent as DeleteIcon } from '../../assets/icons/delete.svg';

import styles from './Table.module.css';

const Table = ({ astronauts, onDelete }) => (
  <table className={styles.table}>
    <thead className={styles.head}>
      <tr className={styles.row}>
        <th className={styles.cell}>Имя</th>
        <th className={styles.cell}>Дата</th>
        <th className={styles.cell}>Количество дней</th>
        <th className={styles.cell}>Название миссии</th>
        <th className={styles.cell}>Повторные полёты</th>
      </tr>
    </thead>
    <tbody className={styles.body}>
      {astronauts.map(astronaut => (
        <tr className={styles.row} key={astronaut.name}>
          <td className={styles.cell}>{astronaut.name}</td>
          <td className={styles.cell}>{formatDate(astronaut.date)}</td>
          <td className={styles.cell}>{astronaut.days}</td>
          <td className={styles.cell}>{astronaut.mission}</td>
          <td className={styles.cell}>{astronaut.isMultiple ? 'Да' : 'Нет'}</td>
          <button
            onClick={onDelete.bind(null, astronaut.id)}
            className={styles.deleteButton}
            type="button"
          >
            <DeleteIcon />
          </button>
        </tr>
      ))}
    </tbody>
  </table>
);

export { Table };
