import React, { useState, useEffect } from 'react';

import { splitIntoSubarrays, filterAstronauts, orderBy } from 'utils';

import { Form } from 'components/Form';
import { Filter } from 'components/Filter';
import { Table } from 'components/Table';
import { Pagination } from 'components/Pagination';

import data from './data.json';

import styles from './App.module.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [astronauts, setAstronauts] = useState([]);
  const [sortField, setSortField] = useState('name');
  const [sortingDirection, setSortingDirection] = useState('asc');
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

  const onSort = field => {
    const direction = sortingDirection === 'asc' ? 'desc' : 'asc';

    setSortField(field);
    setSortingDirection(direction);
  };

  const onAdd = astronaut => setAstronauts([...astronauts, astronaut]);
  const onDelete = id => setAstronauts(astronauts.filter(astronaut => astronaut.id !== id));
  const onChangePage = pageNumber => setCurrentPage(pageNumber);

  const filteredAstronauts = filter ? filterAstronauts(filter, astronauts) : astronauts;
  const subarrays = splitIntoSubarrays(filteredAstronauts, perPage);
  const currentSubarray = subarrays[currentPage - 1];
  const displayedAstronauts = subarrays.length
    ? orderBy(currentSubarray, sortField, sortingDirection)
    : [];
  const totalPages = subarrays.length;

  return !isLoading ? (
    <div className={styles.app}>
      <Form onAdd={onAdd} />
      <Filter onFilter={onFilter} />
      <Table
        onSort={onSort}
        onDelete={onDelete}
        astronauts={displayedAstronauts}
        sortField={sortField}
        sortDirection={sortingDirection}
      />
      {totalPages > 1 && (
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
