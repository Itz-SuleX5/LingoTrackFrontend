import React from 'react';
import { motion } from 'framer-motion';

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

const GoalsSectionsButton = ({name, active, setActive}) => {
    const config = cardConfigs[name]
const _ = [
  "border-purple-300",
  "border-blue-300",
  "border-green-300",
  "border-orange-300",
  "border-red-300",
  "border-yellow-300"
];

    return (
        <motion.button className={` px-2 py-1 rounded-md hover:brightness-95 hover:cursor-pointer ${name  === active ? `text-white bg-${config.color}-500` : `text-neutral-700 bg-white border-[2px] border-${config.color}-300`}`} onClick={() => setActive(name)} whileHover={{scale:1.1, rotate:1.2, transition: {duration: 0.2} }} whileTap={{scale:1.1, rotate:-10, transition: {duration: 0.2} }}>{name}</motion.button>
        
    )
}

export default GoalsSectionsButton;