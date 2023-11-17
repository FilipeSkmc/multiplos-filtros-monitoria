export type RickValueProvider = {
  data: DataTypeContext[],
  loading: boolean,
  error: string | null,
  columns: string[],
  filterList: FilterListType[],
  addFilter: (filter: FilterListType) => void,
  removeFilter: (info: string) => void,
  removeAllFilters: () => void,
};

export type InfoType = 'name' | 'status' | 'species' | 'location' | 'origin';

export type FilterListType = {
  info: InfoType,
  value: string,
};

export type CharacterType = {
  'id': number,
  'name': string,
  'status': string,
  'species': string,
  'type': string,

  'gender': string,
  'origin': {
    'name': string,
    'url': string
  },
  'location': {
    'name': string,
    'url': string
  },
  'image': string,
  'episode': string[],
  'url': string,
  'created': string
};

export type DataTypeContext = {
  id: number,
  name: string,
  image: string,
  species: string,
  status: string,
  origin: string,
  location: string,
};
