import { useState } from 'react';
import useFetch from '../hooks/useFetch';
import { FilterListType } from '../types';
import { RickContext } from './RickContext';
import { fetchCharacters } from '../services/api';

type RickProviderProps = {
  children: React.ReactNode;
};

const infos = ['name', 'species', 'status', 'origin', 'location'];

function RickProvider({ children }: RickProviderProps) {
  // useFetch é um hook que retorna os dados da API
  const { data, loading, error } = useFetch(fetchCharacters);

  // filterList é a lista de filtros aplicados
  const [filterList, setFilterList] = useState<FilterListType[]>([]);

  // columns é a lista de colunas que ainda não foram filtradas
  // inicia com todas as colunas
  const [columns, setColumns] = useState<string[]>(infos);

  // addFilter é a função que adiciona um filtro na lista de filtros aplicados
  // filter é o filtro a ser adicionado
  const addFilter = (filter: FilterListType) => {
    // remova a coluna do filtro da lista de colunas
    const removedColumn = columns.filter((column) => column !== filter.info);
    // adicione o filtro na lista de filtros aplicados
    setFilterList([...filterList, filter]);
    // atualize a lista de colunas
    setColumns(removedColumn);
  };

  // removeFilter é a função que remove um filtro da lista de filtros aplicados
  // info é o nome da coluna do filtro a ser removido
  const removeFilter = (info: string) => {
    // remova o filtro da lista de filtros aplicados
    const filterRemoved = filterList.filter((filter) => filter.info !== info);
    // atualize a lista de filtros aplicados
    setFilterList(filterRemoved);
    // adicione a coluna do filtro na lista de colunas
    setColumns([...columns, info]);
  };

  const removeAllFilters = () => {
    // limpa a lista de filtros aplicados
    setFilterList([]);
    // adicione todas as colunas da lista de filtros aplicados na lista de colunas
    setColumns(infos);
  };

  const value = {
    data,
    loading,
    error,
    columns,
    filterList,
    addFilter,
    removeFilter,
    removeAllFilters,
  };

  return (
    <RickContext.Provider value={ value }>
      {children}
    </RickContext.Provider>
  );
}

export default RickProvider;
