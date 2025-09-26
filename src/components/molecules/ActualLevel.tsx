import React from 'react';
import { Award,TrendingUp  } from 'lucide-react';
import LevelCards from './LevelCards';
import SectionsButton from '../atoms/SectionsButton';

const ActualLevel = () => {
    return (
        <div className='rounded-xl border border-orange-200 bg-amber-50 p-4 gap-4 flex flex-col'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center'>
                   <div className='rounded-full bg-orange-100 p-2 text-orange-500'>
                        <Award/>
                    </div>
                    <div>
                        <h1 className='text-gray-700 font-semibold'>Nivel actual: Basico 2</h1>
                        <h1 className='text-gray-600'>Progreso hacia Basico 3</h1>
                    </div> 
                </div>
                
                <SectionsButton section="Nivel actual"/>

            </div>

            <div className='grid md:grid-cols-3 gap-4'>
               <LevelCards cardName="Racha actual"/> 
               <LevelCards cardName="Progreso semanal"/> 
               <LevelCards cardName="Proximo hito"/> 
            </div>
            
            <div className='bg-white border rounded-xl p-4 gap-2 flex flex-col'>
                <div className='flex justify-between'>
                    <h1 className='text-gray-700'>Progreso hacia el siguiente nivel</h1>
                    <h1 className='text-orange-600'>75%</h1>              
                </div>

                <div className='bg-gradient-to-r from-orange-400 to-red-400 min-h-[10px] w-full rounded'/>

                <h1 className='text-sm text-gray-500'>5 dias mas para pasar al siguiente nivel</h1>

            </div>


        </div>
    )
}

export default ActualLevel;