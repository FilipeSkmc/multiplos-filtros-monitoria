import { useEffect, useState } from 'react';
import { DataTypeContext } from '../types';

function useFetch(fetchFunction: () => Promise<DataTypeContext[]>) {
  const [data, setData] = useState<DataTypeContext[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchFunction();

        setData(response);
        setLoading(false);
      } catch (e: any) {
        setError(e.message);
      }
    }
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
