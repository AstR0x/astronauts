import React, { useState, useEffect } from 'react';

import { formatDate } from './utils';

import { Form } from './components/Form';
import { Filter } from './components/Filter';
import { Table } from './components/Table';

import data from './data.json';

import styles from './App.module.css';

function App() {
  const [astronauts, setAstronauts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setAstronauts(data);
  }, []);

  const displayedData = () => (
    filter ? astronauts.filter(({ name, date, mission }) => (
      name.includes(filter)
      || formatDate(date).includes(filter)
      || mission.includes(filter))) : astronauts
  );

  const onFilter = event => {
    setFilter(event.target.value);
  };

  const onAdd = astronaut => {
    setAstronauts([...astronauts, astronaut]);
  };

  const onDelete = id => {
    setAstronauts(astronauts.filter(astronaut => astronaut.id !== id));
  };

  return (
    <div className={styles.app}>
      <Form onAdd={onAdd} />
      <Filter onFilter={onFilter} />
      <Table onDelete={onDelete} astronauts={displayedData()} />
    </div>
  );
}

export default App;
