import { useEffect, useState } from 'react';

import { artistPath } from '../../services/artists/paths';

export default function useGetArtist(artistId) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtist = async () => {
      console.log('timothy', artistPath(artistId), artistId)
      try {
        const response = await fetch(artistPath(artistId));
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

    fetchArtist();
  }, [artistId]);

  return { data, isLoading, error };
}