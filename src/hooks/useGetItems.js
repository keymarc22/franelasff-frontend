import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetItems = (API) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    requestItems();
  }, [])

  const requestItems = async () => {
    try {
      const response = await axios.get(API);
      setItems(response.data);
    } catch (error) {
      console.log(error)
    }
  }

  return { items }
}

export { useGetItems };