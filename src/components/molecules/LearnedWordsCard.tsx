import React from 'react'
import { Volume2, Calendar } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';

const LearnedWordsCard = () => {
    const {user} = useAuth0();
    return (
        <div className='bg-gradient-to-br from-white to-blue-50 border border-blue-500 rounded-xl p-4 gap-4'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-xl'>run</h1>
                <div className='hover:bg-blue-100 text-blue-500 p-2 rounded-md cursor-pointer'><Volume2 size={18}/></div>
            </div>
            <h1 className='text-md italic text-gray-700'>Correr</h1>
            <div className='flex bg-gradient-to-r from-blue-50 to-sky-50 mt-2 p-2 -space-x-2 rounded-xl'>
                <div className='relative group'>
                    <img src={user.picture} className='w-7 h-7 rounded-full border border-white hover:scale-110 transition-transform duration-200 cursor-pointer'/>
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {user.name}
                    </span>
                </div>
                <div className='relative group'>
                    <img src={user.picture} className='w-7 h-7 rounded-full border border-white hover:scale-110 transition-transform duration-200 cursor-pointer'/>
                    <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                        {user.name}
                    </span>
                </div>
                <div className="flex items-center justify-center z-5 w-7 h-7 rounded-full border border-white bg-blue-200 text-blue-700">+8</div>
                <h1 className='text-blue-700 ml-4'>Personas de tu grupo</h1>
            </div>
            <div className='flex text-gray-500 gap-2 text-sm items-center mt-3'>
                <Calendar size={20}/>
                <h1>Aprendida: 14/09/2025</h1>
            </div>
        </div>
    )
}

export default LearnedWordsCard;