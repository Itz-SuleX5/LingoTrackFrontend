import React, { useState, useEffect }from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { Users } from 'lucide-react';
import { Settings } from 'lucide-react';
import { LogOut } from 'lucide-react';
import GoalCard from "../organisms/GoalCard";
import ActualLevel from "../molecules/ActualLevel";
import GoalsSections from "../organisms/GoalsSections";
import LearnedWordsSection from "../organisms/LearnedWordsSection";

const Progress = ({profile}) => {
    const { user, isAuthenticated, getAccessTokenSilently, logout } = useAuth0();
    const [ showDropdown, setShowDropdown] = useState(false)
    const firstName = isAuthenticated && user?.name?.split(' ')[0];
    const [token, setToken] = useState(null);

    useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (err) {
        console.error("Error getting token:", err);
      }
    };

    fetchToken();
  }, [getAccessTokenSilently]);
    console.log(token)
    return (
        <div className="w-11/12 mx-auto mt-4 flex flex-col gap-4">
            <div className="bg-white border border-orange-200 rounded-xl flex flex-col md:flex-row px-8 py-8 items-center gap-4">
                <img src={profile.profile_picture_url} className="rounded-full w-15 h-15 aspect-square cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}/>
                {showDropdown && (
                    <div className="flex flex-col absolute bg-white shadow border rounded-md border-gray-200 top-30 pt-2">
                        <h1 className="font-semibold px-4 pb-2">{firstName}</h1>
                        <h1>{token}</h1>
                        <a href={user.picture}>{user.picture}</a>
                        <div className="flex flex-col border-y-2 w-full">
                           <button className="flex gap-2 px-4 hover:bg-gray-50 py-2">
                                <Users strokeWidth={1.5} className="text-gray-700"/>
                                <h1 className="text-gray-700">Mi perfil</h1>
                            </button>
                        <button className="flex gap-2 px-4 hover:bg-gray-50 py-2">
                            <Settings strokeWidth={1.5} className="text-gray-700"/>
                            <h1 className="text-gray-700">Configuracion</h1>
                        </button> 
                        </div>
                        <button className="flex px-4 text-red-500 gap-2 cursor-pointer hover:bg-red-100 py-2" onClick={() => logout()}>
                            <LogOut/>
                            <h1>Cerrar sesion</h1>
                        </button>
                        
                    </div>
                )}
                <div className="text-center md:text-left">
                    <h1 className="font-bold text-3xl">¡Hola {profile.username} !</h1>
                    <h1 className="text-gray-600">¡Bienvenido de vuelta. Sigamos aprendiendo inglés juntos!</h1>
                </div>
                <div className="flex gap-5 md:ms-auto">
                    <div className="bg-white border border-orange-100 items-center flex flex-col px-4 py-2 shadow-md border-2 rounded-md">
                        <h1 className="text-orange-600 font-semibold">5</h1>
                        <h1 className="text-gray-500">días seguidos</h1>
                    </div>
                    <div className="bg-white border border-orange-100 items-center flex flex-col px-4 py-2 shadow-md border-2 rounded-md">
                        <h1 className="text-orange-600 font-semibold">{profile.current_level}</h1>
                        <h1 className="text-gray-500">nivel actual</h1>
                    </div>
                </div>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <GoalCard CardName="Palabras conocidas"/>
                <GoalCard CardName="Palabras aprendidas"/>
                <GoalCard CardName="Oraciones correctas"/>
                <GoalCard CardName="Logros"/>
            </div>

            <ActualLevel/>

            <GoalsSections/>

            <LearnedWordsSection/>
        </div>
        
    )
}

export default Progress;