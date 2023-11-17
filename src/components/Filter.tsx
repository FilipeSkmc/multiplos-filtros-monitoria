import { useContext, useEffect, useState } from 'react';
import { FilterListType, InfoType } from '../types';
import { RickContext } from '../context/RickContext';
import styles from './Filter.module.css';

function Filter() {
  // trazer as colunas do contexto e as funções addFilter e removeAllFilters
  const { columns, addFilter, removeAllFilters } = useContext(RickContext);

  // formData é o estado que guarda as informações do formulário
  // info é a coluna selecionada no select e value é o valor digitado no input
  // info inicia com a primeira coluna da lista de colunas
  const [formData, setFormData] = useState<FilterListType>({
    info: columns[0] as InfoType,
    value: '',
  });

  // sempre que a lista de colunas mudar, o estado de formData deve ser atualizado
  // info deve ser a primeira coluna da lista de colunas
  useEffect(() => {
    setFormData({
      value: '',
      info: columns[0] as InfoType,
    });
  }, [columns]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handleSubmit é a função que adiciona um filtro na lista de filtros aplicados
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // adicione um filtro na lista de filtros aplicados - filterList
    addFilter(formData);
  };

  return (
    <div className={ styles.filtersContainer }>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="info">
          <select
            name="info"
            id="info"
            value={ formData.info }
            onChange={ handleChange }
          >
            { columns.map((column) => (
              <option key={ column } value={ column }>{column}</option>
            ))}
          </select>
        </label>

        <label htmlFor="value">
          <input
            type="text"
            name="value"
            id="value"
            value={ formData.value }
            onChange={ handleChange }
          />
        </label>

        <button
          disabled={ columns.length === 0 }
          type="submit"
        >
          Filter

        </button>
        <button
          type="button"
          disabled={ columns.length > 4 }
          onClick={ removeAllFilters }
        >
          Remove All
        </button>
      </form>
    </div>
  );
}

export default Filter;
