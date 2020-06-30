import React, { useState } from 'react';

import { MILLISECONDS_IN_SECOND } from '../../constants';

import styles from './Form.module.css';

const initialAstronaut = {
  name: '',
  date: '',
  days: '',
  mission: '',
};

export const Form = ({ onAdd }) => {
  const [astronaut, setAstronaut] = useState(initialAstronaut);
  const [isMultiple, setIsMultiple] = useState(false);

  const onChangeIsMultiple = event => setIsMultiple(event.target.checked);
  const onChangeAstronaut = event => setAstronaut({ ...astronaut, [event.target.name]: event.target.value });

  const isValid = astronaut.name.trim()
    && astronaut.date
    && astronaut.days
    && astronaut.mission.trim();

  const onSubmitForm = event => {
    event.preventDefault();
    const { name, date, days, mission } = astronaut;
    const timestamp = new Date(date).getTime() / MILLISECONDS_IN_SECOND;
    const id = Date.now();

    onAdd({
      id,
      name,
      date: timestamp,
      days: parseInt(days, 10),
      mission,
      isMultiple,
    });

    setAstronaut(initialAstronaut);
    setIsMultiple(false);
  };

  const inputs = [
    { value: astronaut.name, name: 'name', type: 'text', placeholder: 'Имя' },
    { value: astronaut.date, name: 'date', type: 'date', placeholder: 'Дата' },
    { value: astronaut.days, name: 'days', type: 'number', placeholder: 'Дней в космосе' },
    { value: astronaut.mission, name: 'mission', type: 'text', placeholder: 'Название миссии' }];

  return (
    <form onSubmit={onSubmitForm} className={styles.form}>
      {inputs.map(({ value, type, placeholder, name }) => (
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChangeAstronaut}
          className={styles.input}
          placeholder={placeholder}
          key={placeholder}
          required
        />
      ))}
      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxLabel}>
          Повторные полёты
        </label>
        <input
          checked={isMultiple}
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
