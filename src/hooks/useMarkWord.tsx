import { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export function useMarkWord() {
  const { getIdTokenClaims } = useAuth0();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const markWord = async (wordId: number, status: 'known' | 'used') => {
    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const claims = await getIdTokenClaims();
      const idToken = claims.__raw;

      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/words/mark/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ word_id: wordId, status }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error al marcar palabra');

      setResponse(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { markWord, loading, error, response };
}
