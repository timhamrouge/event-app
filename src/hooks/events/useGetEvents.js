import { useEffect, useState } from 'react';

import { eventsSearchPath } from '../../services/events/paths';

export default function useGetEvents(searchTerm) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(eventsSearchPath(searchTerm));
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    if (searchTerm) fetchEvent();
  }, [searchTerm]);

  return { data, isLoading, error };
}