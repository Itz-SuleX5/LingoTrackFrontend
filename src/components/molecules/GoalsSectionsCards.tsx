import React from 'react';
import * as Icons from "lucide-react";
import { Calendar } from "lucide-react";

const colorMap = {
  purple: {
    card: "bg-purple-50 border border-purple-500",
    iconWrapper: "bg-purple-100 text-purple-700",
    date: "bg-purple-100 text-purple-700",
  },
  blue: {
    card: "bg-blue-50 border border-blue-500",
    iconWrapper: "bg-blue-100 text-blue-700",
    date: "bg-blue-100 text-blue-700",
  },
  green: {
    card: "bg-green-50 border border-green-500",
    iconWrapper: "bg-green-100 text-green-700",
    date: "bg-green-100 text-green-700",
  },
  orange: {
    card: "bg-orange-50 border border-orange-500",
    iconWrapper: "bg-orange-100 text-orange-700",
    date: "bg-orange-100 text-orange-700",
  },
  red: {
    card: "bg-red-50 border border-red-500",
    iconWrapper: "bg-red-100 text-red-700",
    date: "bg-red-100 text-red-700",
  },
  yellow: {
    card: "bg-yellow-50 border border-yellow-500",
    iconWrapper: "bg-yellow-100 text-yellow-700",
    date: "bg-yellow-100 text-yellow-700",
  },
};

const cardConfigs = {
        "Todos" : {
            color: "purple"
        },
        "Palabras" : {
            color: "blue"
        },
        "Oraciones" : {
            color: "green"
        },
        "Gramatica" : {
            color: "orange"
        },
        "Nivel": {
            color: "red"
        },
        "Social": {
            color: "purple"
        },
        "Constancia": {
            color: "yellow"
        }
    }
const GoalsSectionsCards = ({category, icon, title, description, date}) => {
    const config = cardConfigs[category]
    const styles = colorMap[config.color]
    const IconComponent = Icons[icon] || Icons.Award;
    return (
        <div className={`flex items-center p-2 ${styles.card} border rounded-xl gap-4`}>
            <div className={`flex items-center p-2 rounded-full ${styles.iconWrapper}`}>
                <IconComponent/>
            </div>
            <div className='flex flex-col rounded-md gap-2'>
                <h1 className="font-semibold text-slate-800">{title}</h1>
                <h1 className="text-gray-600">{description}</h1>
                <div className={`flex ${styles.date} rounded-md px-2 py-1 gap-2`}>
                    <Calendar/>
                    {date}
                </div>
            </div>
        </div>
    )
}

export default GoalsSectionsCards;