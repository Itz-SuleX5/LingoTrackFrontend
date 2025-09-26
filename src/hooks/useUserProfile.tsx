import {useState, useEffect} from 'react';
import {useAuth0} from '@auth0/auth0-react';

export function useUserProfile() {
    const {user, getAccessTokenSilently, getIdTokenClaims} = useAuth0();
    const [profile, setProfile] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);
    const [level, setLevel] = useState('B0');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const claims = await getIdTokenClaims();
                const token = claims.__raw;
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users/profile/`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
                });

                if (res.status===404){
                    setShowModal(true);
                } else if (res.ok) {
                    const data = await res.json();
                    setProfile(data);
                }
            } catch (err) {
                console.log("Error al obtener el perfil: ", err)
            } finally {
                setLoading(false)
            }
        };

        fetchProfile();
    }, [getAccessTokenSilently]);

    const registerUser = async () => {
        try {
            const claims = await getIdTokenClaims();
            const token = claims.__raw;

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

            if (res.ok) {
                const data = await res.json();
                setProfile(data);
                setShowModal(false);
            }
        } catch(err) {
            console.error('Error al registrar el usuario:', err);
        }
    };

    return {
        profile, 
        loading,
        showModal,
        level,
        setLevel,
        registerUser,
    };
}