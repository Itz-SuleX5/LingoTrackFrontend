import {useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export function useRegisterUser() {
    const { user, getAccessTokenSilently } = useAuth0();
    const [level, setLevel] = useState("B0");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleLevelChange = (e) => {
        setLevel(e.target.value);
    };

    const submitUser = async () => {
        setLoading(true);
        setError(null);

        try {
            const token = await getAccessTokenSilently();

            const payload = {
                username: user.name,
                profile_picture_url : user.picture,
                current_level: level,
                words_known_count : 0,
                words_learned_count: 0,
                sentences_correct_count: 0,
            };

            const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/`, {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(payload)
            });

            if (!res.ok) throw new Error('Error al registrar el usuario');
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false)
        }
    };

    return {
        level,
        handleLevelChange,
        submitUser, 
        loading, 
        error
    };
}