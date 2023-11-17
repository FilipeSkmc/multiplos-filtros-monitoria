import { useContext } from 'react';
import style from './App.module.css';
import { RickContext } from './context/RickContext';
import Table from './components/Table';
import Filter from './components/Filter';
import AppliedFilters from './components/AppliedFilters';

function App() {
  const { loading, error } = useContext(RickContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return (
    <div>
      <Filter />
      <div className={ style.container }>
        <AppliedFilters />
        <Table />
      </div>
    </div>
  );
}

export default App;
