import React from 'react';
import { Zap, TrendingUp, Goal } from 'lucide-react';

const CardConfigs = {
    "Racha actual": {
        icon: <Zap/>,
        color: "blue",
        text: "dias consecutivos"
    },
    "Progreso semanal": {
        icon: <TrendingUp/>,
        color: "green",
        text: "por encima del promedio"
    },
    "Proximo hito": {
        icon: <Goal/>,
        color: "purple",
        text: "palabras conocidas"
    }
}

const LevelCards = ({cardName}) => {
    const config = CardConfigs[cardName]
    return (
        <div className={`flex bg-white border-[1.7px] border-${config.color}-100 p-4 rounded-xl items-center gap-4`}>
            <div className={`bg-${config.color}-100 text-${config.color}-500 rounded-full p-2`}>
                {config.icon}
            </div>
            <div className='flex flex-col'>
                <h1 className='text-gray-700 font-semibold'>{cardName}</h1>
                <h1 className={`text-xl text-${config.color}-600 font-bold`}>5</h1>
                <h1 className='text-gray-500'>{config.text}</h1>
            </div>
        </div>
    )
}

export default LevelCards;