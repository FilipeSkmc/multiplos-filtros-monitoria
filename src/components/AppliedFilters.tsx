import { useContext } from 'react';
import styles from './AppliedFilters.module.css';
import { RickContext } from '../context/RickContext';

function AppliedFilters() {
  // filterList é a lista de filtros aplicados
  // removeFilter é a função que remove um filtro da lista de filtros aplicados
  const { filterList, removeFilter } = useContext(RickContext);

  return (
    // se o tamanho da lista de filtros for maior que 0, renderize o componente
    // se não, renderize o componente com a mensagem "Nenhum filtro aplicado"
    filterList.length > 0 ? (
      <div className={ styles.appliedFilters }>
        <h3>Filtros aplicados</h3>
        { filterList.map((filter) => (
          <div key={ filter.info }>
            <span>{`${filter.info}: ${filter.value}`}</span>
            {' '}
            <button
              type="button"
              // ao clicar no botão, remova o filtro da lista de filtros aplicados
              // é passado o nome da coluna como parâmetro
              onClick={ () => removeFilter(filter.info) }
            >
              X
            </button>
          </div>
        )) }
      </div>
    ) : (
      <div className={ styles.appliedFilters }>
        <h3>Nenhum filtro aplicado</h3>
      </div>
    )
  );
}

export default AppliedFilters;
