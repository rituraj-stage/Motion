"use client";
import { motion } from "motion/react";
import React, {useEffect, useRef, useState} from "react";

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if(ref.current && !ref.current.contains(event.target as Node)){
                callback();
            }
        };
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [callback]);
    return ref;
}
function LayoutCardsComp(){
    const [current, setCurrent] = useState<Card | null>(null);
    // const ref = useRef<HTMLDivElement>(null);
    const ref = useOutsideClick(() => setCurrent(null));

    return (
        <div className="py-10 bg-gray-100 min-h-screen relative">
            {current && (<div className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></div>)}
            {current && (
                <motion.div 
                    layoutId= {`card-${current.title}`}
                    ref={ref}
                    className="h-[600px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4">
                <img 
                    src={current.src} 
                    alt={current.title} 
                    className="w-full aspect-square rounded-xl"
                />  
                <div className="flex flex-col justify-between items-start">
                    <div className="flex items-start justify-between py-4 w-full gap-2">
                        <div className="flex flex-col items-start gap-2">
                            <h2 className="font-bold text-xs tracking-tight text-black">
                                {current.title}
                            </h2>
                            <p className="text-[10px] text-neutral-500">
                                {current.description}
                            </p>
                        </div>
                        <a 
                            href={current.ctaLink}
                            className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
                        >
                            {current.ctaLink}
                        </a>
                    </div> 
                    <div className="h-60 overflow-auto">
                        {current.content()}
                    </div>   
                </div>  
            </motion.div>)}
            <div className="max-w-lg mx-auto flex flex-col gap-10">
                {cards.map((card,idx) => (
                    <motion.button 
                        layoutId={`card-${card.title}`}
                        onClick={() => setCurrent(card)}
                        key={card.title} 
                        className="p-4 rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200">
                        <div className="flex gap-4 items-center">
                            <img 
                                src={card.src} 
                                alt={card.title} 
                                className="h-14 aspect-square rounded-lg"
                            />
                            <div className="flex flex-col items-start gap-2">
                                <h2 className="font-bold text-xs tracking-tight text-black">{card.title}</h2>
                                <p className="text-[10px] text-neutral-500">{card.description}</p>
                            </div>
                        </div>
                        <div className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">{card.ctaText}</div>
                    </motion.button>
                ))}
            </div>
        </div>
    )    
}

type Card = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => React.ReactNode;
}

const cards: Card[] = [
    {
        description: "Bappu",
        title: "Money talks",
        src: "",
        ctaText: "Play",
        ctaLink: "",
        content: ()=> {
            return (
                <p className="text-[10px] text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat assumenda ipsa, impedit omnis cupiditate dignissimos sequi maiores placeat molestias similique tenetur consequuntur itaque consectetur delectus earum? Cumque, numquam labore.
                </p>
            );
        },
    },
    {
        description: "Babbu Maan",
        title: "Money talks",
        src: "",
        ctaText: "Play",
        ctaLink: "",
        content: ()=> {
            return (
                <p className="text-[10px] text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat assumenda ipsa, impedit omnis cupiditate dignissimos sequi maiores placeat molestias similique tenetur consequuntur itaque consectetur delectus earum? Cumque, numquam labore.
                </p>
            );
        },
    }
]

export default LayoutCardsComp;