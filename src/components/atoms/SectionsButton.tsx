import React from 'react';
import { TrendingUp, Eye, EyeClosed } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
    EyeClosed,
    Eye, 
    TrendingUp
}

const colorMap = {
  orange: "from-orange-500 to-orange-600",
  purple: "from-purple-500 to-purple-600",
  blue: "from-blue-500 to-blue-600",
};

const cardConfigs = {
    "Nivel actual" : {
        color: "orange",
        icon: "TrendingUp",
        text: "Siguiente nivel"
    },
    "Logros": {
        color: "purple",
        icon: "EyeClosed",
        hoverIcon: "Eye",
        text: "Ver todos"
    },
    "Palabras aprendidas": {
        color: "blue",
        icon: "EyeClosed",
        hoverIcon: "Eye",
        text: "Ver todas"
    }
}
const SectionsButton = ({section}) => {
    const config = cardConfigs[section]
    const Icon = iconMap[config.icon]
    const HoverIcon = iconMap[config.hoverIcon]
    const [animation, setAnimation] = React.useState(false);
    return (
        <motion.button className={`relative flex items-center text-white bg-gradient-to-r ${colorMap[config.color]} px-4 py-2 gap-2 rounded-md hover:cursor-pointer group`} onHoverStart={() => setAnimation(true)} onHoverEnd={() => setAnimation(false)} whileHover={{scale:1.1, rotate:1.2, transition: {duration: 0.2} }} whileTap={{scale:1.1, rotate:-10, transition: {duration: 0.2} }}>
            <div className="relative w-5 h-5 flex items-center justify-center">
            {section !== "Nivel actual" ? (
                <>
                <Icon className='absolute transition-opacity duration-300 opacity group-hover:opacity-0'/>
                <HoverIcon className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300'/>
                </>
            ) : (
                <motion.div
                    animate={{
                    y: animation ? -5 : 0,
                    x: animation ? 5: 0,
                    scale: animation ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                    <Icon />
                </motion.div>
            )}
            </div>
            {config.text}
        </motion.button>
    )
}

export default SectionsButton;