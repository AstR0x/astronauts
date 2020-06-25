import React, { useState, useEffect } from 'react';

import { formatDate } from 'utils';

import styles from './AstronautsTable.module.css';

import data from '../../data.json';

const AstronautsTable = () => {
  const [astronauts, setAstronauts] = useState([]);

  useEffect(() => {
    setAstronauts(data);
  }, []);

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr className={styles.row}>
            <th className={styles.cell}>
              Имя
            </th>
            <th className={styles.cell}>
              Дата
            </th>
            <th className={styles.cell}>
              Количество дней
            </th>
            <th className={styles.cell}>
              Название миссии
            </th>
            <th className={styles.cell}>
              Повторные полёты
            </th>
          </tr>
        </thead>
        <tbody className={styles.body}>
          {astronauts.map(astronaut => (
            <tr className={styles.row} key={astronaut.name}>
              <td className={styles.cell}>{astronaut.name}</td>
              <td className={styles.cell}>{formatDate(astronaut.date)}</td>
              <td className={styles.cell}>{astronaut.days}</td>
              <td className={styles.cell}>{astronaut.mission}</td>
              <td className={styles.cell}>
                {astronaut.isMultiple ? 'Да' : 'Нет'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { AstronautsTable };
