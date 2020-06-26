import React, { useState } from 'react';

import { MILLISECONDS_IN_SECOND } from '../../constants';

import styles from './Form.module.css';

export const Form = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('Дата полёта');
  const [days, setDays] = useState('');
  const [mission, setMission] = useState('');
  const [isMultiple, setIsMultiple] = useState();

  const onChangeName = event => {
    setName(event.target.value);
  };

  const onChangeDate = event => {
    setDate(event.target.value);
  };

  const onChangeDays = event => {
    setDays(event.target.value);
  };

  const onChangeMission = event => {
    setMission(event.target.value);
  };

  const onChangeIsMultiple = () => {
    setIsMultiple(!isMultiple);
  };

  const isValid = () => Boolean(name.trim() && date.trim() && days.trim() && mission.trim());

  const onAddD = () => {
    const id = Date.now();
    const timestamps = new Date(date).getTime() / MILLISECONDS_IN_SECOND;

    onAdd({ id, name, date: timestamps, days, mission, isMultiple });

    setName('');
    setDate('');
    setDays('');
    setMission('');
    setIsMultiple(false);
  };

  return (
    <form className={styles.form}>
      <input
        type="text"
        value={name}
        onChange={onChangeName}
        className={styles.input}
        placeholder="Имя"
      />
      <input
        type="date"
        value={date}
        onChange={onChangeDate}
        className={styles.input}
        placeholder="Дата"
      />
      <input
        type="number"
        value={days}
        onChange={onChangeDays}
        className={styles.input}
        placeholder="Количество дней"
      />
      <input
        type="text"
        value={mission}
        onChange={onChangeMission}
        className={styles.input}
        placeholder="Название миссии"
      />
      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxLabel}>
          Повторные полёты
        </label>
        <input
          value={isMultiple}
          type="checkbox"
          onChange={onChangeIsMultiple}
          className={styles.checkbox}
        />
      </div>
      <button
        disabled={!isValid()}
        onClick={onAddD}
        className={styles.button}
        type="button"
      >
        Добавить
      </button>
    </form>
  );
};
