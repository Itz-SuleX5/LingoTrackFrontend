import React from 'react'
import { BookOpen } from 'lucide-react';
import SectionsButton from '../atoms/SectionsButton';
import LearnedWordsCard from '../molecules/LearnedWordsCard';
const LearnedWordsSection = () => {
    return (
        <div className="mb-40 flex flex-col p-4 gap-4 bg-white">
            <div className='flex items-center justify-between '>
                <div className="flex items-center gap-4">
                   <div className='text-blue-600 bg-blue-100 flex items-center rounded-full p-2'>
                        <BookOpen/>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold text-gray-700'>Palabras aprendidas</h1>
                        <h1 className='text-gray-600'>6 palabras en tu vocabulario</h1>
                    </div> 
                </div>
                <SectionsButton section="Palabras aprendidas"/>
            </div>

            <div className='grid md:grid-cols-3 gap-4'>
                <LearnedWordsCard/>
            </div>
            
            
        </div>
    )
}

export default LearnedWordsSection;