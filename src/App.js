import React, { useState, useEffect } from 'react';

import { splitIntoSubarrays, filterAstronauts } from 'utils';

import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import { Table } from 'components/Table';
import { Pagination } from 'components/Pagination';

import data from './data.json';

import styles from './App.module.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [astronauts, setAstronauts] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

  useEffect(() => {
    setAstronauts(data);
    setIsLoading(false);
  }, []);

  const onFilter = event => {
    setCurrentPage(1);
    setFilter(event.target.value);
  };

  const onAdd = astronaut => setAstronauts([...astronauts, astronaut]);
  const onDelete = id => setAstronauts(astronauts.filter(astronaut => astronaut.id !== id));
  const onChangePage = pageNumber => setCurrentPage(pageNumber);

  const filteredAstronauts = filter ? filterAstronauts(filter, astronauts) : astronauts;
  const subarrays = splitIntoSubarrays(filteredAstronauts, perPage);
  const displayedAstronauts = subarrays.length ? subarrays[currentPage - 1] : [];
  const totalPages = subarrays.length;

  return !isLoading ? (
    <div className={styles.app}>
      <Form onAdd={onAdd} />
      <Filter onFilter={onFilter} />
      <Table onDelete={onDelete} astronauts={displayedAstronauts} />
      {totalPages && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onChangePage={onChangePage}
        />
      )}
    </div>
  ) : 'Загрузка...';
}

export default App;
