import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetItems = (API, setLoading, headers) => {
  const [items, setItems] = useState([]);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    requestItems();
  }, [])

  const requestItems = async () => {
    try {
      const response = await axios.get(API, { headers });
      setItems(response.data);
    } catch (error) {
      setErrors(error)
    }

    setLoading(false);
  }

  return { items, errors }
}

export { useGetItems };