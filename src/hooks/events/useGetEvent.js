import { useEffect, useState } from 'react';

import { eventPath } from '../../services/events/paths';

export default function useGetEvent(eventId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(eventPath(eventId));
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

    fetchEvent();
  }, [eventId]);

  return { data, isLoading, error };
}