import { useContext } from 'react';
import { RickContext } from '../context/RickContext';
import styles from './Table.module.css';

function Table() {
  // data é a lista de personagens
  // filterList é a lista de filtros aplicados
  const { data, filterList } = useContext(RickContext);

  // applyFilters é uma função que retorna a lista de personagens filtrados
  // o filtro é aplicado para cada personagem
  // filterList é a lista de filtros aplicados
  // para cada filtro aplicado, verifique se o valor da coluna do personagem inclui o valor do filtro
  // para aparecer nos itens filtrados, o personagem deve passar por todos os filtros de filterList
  const applyFilters = () => data.filter((character) => (
    filterList.every(({ info, value }) => (
      character[info].toLowerCase().includes(value.toLowerCase())
    ))
  ));

  return (
    <div className={ styles.listBox }>
      <h3>Personagens</h3>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Specie</th>
            <th>Status</th>
            <th>Origin</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          { applyFilters().map((character) => (
            <tr
              key={ character.id }
            >
              <td>
                <img src={ character.image } alt={ character.name } />
              </td>
              <td>{character.name}</td>
              <td>{character.species}</td>
              <td>{character.status}</td>
              <td>{character.origin}</td>
              <td>{character.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
