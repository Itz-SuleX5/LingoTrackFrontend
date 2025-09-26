import React,{ useState } from 'react';
import { Trophy } from 'lucide-react';
import GoalsSectionsButton from '../atoms/GoalsSectionsButton';
import GoalsSectionsCards from '../molecules/GoalsSectionsCards';
import SectionsButton from '../atoms/SectionsButton';

export const achievements = [
  {
    category: "Palabras",
    icon: "Book",
    title: "Primeras 10 palabras",
    description: "10 palabras aprendidas",
    date: "09/15/2025",
  },
  {
    category: "Oraciones",
    icon: "CheckCircle",
    title: "Primeras 10 oraciones",
    description: "10 oraciones correctas",
    date: "09/16/2025",
  },
  {
    category: "Gramatica",
    icon: "Clock",
    title: "Descubridor del pasado",
    description: "Primera forma en pasado",
    date: "09/17/2025",
  },
];

const GoalsSections = () => {
    const [active, setActive] = useState('Palabras'); 
    return (
        <div className='bg-white p-4 border border-purple-200 rounded-xl flex flex-col gap-4'>
            <div className='flex items-center gap-4'>
                <div className='flex bg-purple-100 text-purple-600 rounded-full p-2'>
                    <Trophy/>
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-gray-700 font-semibold'>Logros</h1>
                    <h1 className='text-gray-600'>5 de 8 logros desbloqueados</h1>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className='flex gap-2 overflow-x-auto no-scrollbar py-2 pr-2'>
                    <GoalsSectionsButton name="Todos" active={active} setActive={setActive}/>
                    <GoalsSectionsButton name="Palabras" active={active} setActive={setActive}/>
                    <GoalsSectionsButton name="Oraciones" active={active} setActive={setActive}/>
                    <GoalsSectionsButton name="Gramatica" active={active} setActive={setActive}/>
                    <GoalsSectionsButton name="Nivel" active={active} setActive={setActive}/>
                    <GoalsSectionsButton name="Social" active={active} setActive={setActive}/>
                    <GoalsSectionsButton name="Constancia" active={active} setActive={setActive}/>
                </div>
                <SectionsButton section="Logros"/>
            </div>
            
            <div className="flex grid md:grid-cols-3 gap-4">
              {achievements.map((goal, index) => (
                <GoalsSectionsCards key={index }category={goal.category} icon={goal.icon} title={goal.title} description={goal.description} date={goal.date}/>
                ))}  
            </div>
            
            
        </div>

    )
}

export default GoalsSections;