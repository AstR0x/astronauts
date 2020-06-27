import React, { useState } from 'react';

import { MILLISECONDS_IN_SECOND } from '../../constants';

import styles from './Form.module.css';

export const Form = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [days, setDays] = useState('');
  const [mission, setMission] = useState('');
  const [isMultiple, setIsMultiple] = useState(false);

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

  const isValid = Boolean(name.trim() && date.trim() && days && mission.trim());

  const onAddD = () => {
    const id = Date.now();
    const timestamps = new Date(date).getTime() / MILLISECONDS_IN_SECOND;

    onAdd({ id, name, date: timestamps, days: +days, mission, isMultiple });

    setName('');
    setDate('');
    setDays('');
    setMission('');
    setIsMultiple(false);
  };

  const inputs = [
    { value: name, type: 'text', handler: onChangeName, placeholder: 'Имя' },
    { value: date, type: 'date', handler: onChangeDate, placeholder: 'Дата' },
    { value: days, type: 'number', handler: onChangeDays, placeholder: 'Количество дней' },
    { value: mission, type: 'text', handler: onChangeMission, placeholder: 'Название миссии' }];

  return (
    <form onSubmit={onAddD} className={styles.form}>
      {inputs.map(({ value, type, handler, placeholder }) => (
        <input
          type={type}
          value={value}
          onChange={handler}
          className={styles.input}
          placeholder={placeholder}
          required
          key={placeholder}
        />
      ))}
      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxLabel}>
          Повторные полёты
        </label>
        <input
          checked={isMultiple}
          value={isMultiple}
          type="checkbox"
          onChange={onChangeIsMultiple}
          className={styles.checkbox}
        />
      </div>
      <button
        disabled={!isValid}
        className={styles.button}
        type="submit"
      >
        Добавить
      </button>
    </form>
  );
};
