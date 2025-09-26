import React from 'react';
import { BookOpen, GraduationCap, CircleCheckBig, Trophy } from 'lucide-react';

const cardConfigs = {
    "Palabras conocidas": {
        icon: <BookOpen className="text-orange-500"/>,
        bgColor: "bg-orange-100",
        textColor: "text-orange-600",
        gradientFrom: "from-orange-400",
        gradientTo: "to-red-500",
        sideColor: "bg-orange-500",
    },
    "Palabras aprendidas": {
        icon: <GraduationCap className="text-blue-500"/>,
        bgColor: "bg-blue-100",
        textColor: "text-blue-600",
        gradientFrom: "from-blue-400",
        gradientTo: "to-blue-600",
        sideColor: "bg-blue-500",
    },
    "Oraciones correctas": {
        icon: <CircleCheckBig className="text-green-500"/>,
        bgColor: "bg-green-100",
        textColor: "text-green-600",
        gradientFrom: "from-green-400",
        gradientTo: "to-green-600",
        sideColor: "bg-green-500",
    },
    "Logros": {
        icon: <Trophy className="text-purple-500"/>,
        bgColor: "bg-purple-100",
        textColor: "text-purple-600",
        gradientFrom: "from-purple-400",
        gradientTo: "to-purple-600",
        sideColor: "bg-purple-500",
    }
}

const GoalCard = ({CardName}) => {
    const config = cardConfigs[CardName]
    return (
        <div className={`${config.sideColor} rounded-xl`}>
            <div className='bg-white l-2 rounded-md w-[98%] md:w-[99.50%] p-4 ms-auto border gap-2 flex flex-col hover:shadow-lg'>
                <div className="flex justify-between items-center ">
                    <h1 className="text-gray-600">{CardName}</h1>
                    <div className={`${config.bgColor} p-2 rounded-full`}>
                       {config.icon}
                    </div>
                </div>
                <h1 className={`${config.textColor} text-2xl font-bold`}>45</h1>
                <div className={`bg-gradient-to-r ${config.gradientFrom} ${config.gradientTo} w-full h-4/12 rounded-xl min-h-[10px]`}/>

                <div className="flex justify-between">
                    <h1 className="text-gray-600">45% del objetivo</h1>
                    <h1 className={`${config.textColor} font-semibold`}>100 palabras</h1>
                </div>
                <div className="bg-green-50 text-green-700 px-4 py-2 font-semibold">
                    <h1>+8 esta semana</h1>
                </div>
            </div>
        </div>
    )
}

export default GoalCard;