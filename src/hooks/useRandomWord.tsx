import { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export function useRandomWord() {
  const { getIdTokenClaims } = useAuth0();
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchWord = async () => {
    setLoading(true);
    setError(null);

    try {
      const claims = await getIdTokenClaims();
      const idToken = claims.__raw;

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/words/random/`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      });

      if (!res.ok) throw new Error('Error al obtener palabra');

      const data = await res.json();
      setWord(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  return { word, loading, error, refetch: fetchWord };
}
