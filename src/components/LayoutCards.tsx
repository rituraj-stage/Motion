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
        const timeoutId = setTimeout(() => {
            document.addEventListener("click", handleClick);
        }, 0);
        // document.addEventListener("click", handleClick);
        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("click", handleClick);
        };
    }, [callback]);
    return ref;
}
function LayoutCardsComp(){
    const [current, setCurrent] = useState<Card | null>(null);
    const ref = useOutsideClick(() => setCurrent(null));

    return (
        <div className="py-10 bg-gray-100 min-h-screen relative">
            {current && (
                <motion.div 
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1, 
                    }}
                    className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"></motion.div>)}
            {current && (
                <motion.div 
                    layoutId= {`card-${current.title}`}
                    ref={ref}
                    className="h-[500px] fixed inset-0 z-20 m-auto bg-white w-72 rounded-2xl border border-neutral-200 p-4 overflow-hidden">
                <motion.img
                    layoutId= {`card-image-${current.title}`} 
                    src={current.src} 
                    alt={current.title} 
                    className="w-full aspect-square rounded-2xl"
                />  
                <div className="flex flex-col justify-between items-start">
                    <div className="flex items-start justify-between py-4 w-full gap-2">
                        <div className="flex flex-col items-start gap-2">
                            <motion.h2 
                                layoutId= {`card-title-${current.title}`}
                                className="font-bold text-xs tracking-tight text-black">
                                {current.title}
                            </motion.h2>
                            <motion.p 
                                layoutId= {`card-description-${current.title}`}
                                className="text-[10px] text-neutral-500">
                                {current.description}
                            </motion.p>
                        </div>
                        <motion.div
                            layoutId= {`card-cta-${current.title}`}
                        >
                            <a 
                                href={current.ctaLink}
                                className="px-2 py-1 bg-green-500 rounded-full text-white text-xs"
                            >
                                {current.ctaLink}
                            </a>
                        </motion.div>
                    </div> 
                    <motion.div 
                        initial= {{
                            filter: 'blur(10px)',
                            opacity: 0,
                        }}
                        animate= {{
                            filter: 'blur(0px)',
                            opacity: 1,
                        }}
                        transition={{
                            delay: 0.3
                        }}
                        className="h-50 overflow-auto  pb-20 [mask-image:linear-gradient(to_top,transparent_20%,black_80%)]">
                        {current.content()}
                    </motion.div>   
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
                            <motion.img 
                                layoutId= {`card-image-${card.title}`} 
                                src={card.src} 
                                alt={card.title} 
                                className="h-14 aspect-square rounded-lg"
                            />
                            <div className="flex flex-col items-start gap-2">
                                <motion.h2 
                                    layoutId= {`card-title-${card.title}`}
                                    className="font-bold text-xs tracking-tight text-black">{card.title}
                                </motion.h2>
                                <motion.p 
                                    layoutId= {`card-description-${card.title}`}
                                    className="text-[10px] text-neutral-500">{card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.div 
                            layoutId= {`card-cta-${card.title}`}
                            className="px-2 py-1 bg-green-500 rounded-full text-white text-xs">{card.ctaText}</motion.div>
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
        src: "./logo.png",
        ctaText: "Play",
        ctaLink: "#",
        content: ()=> {
            return (
                <p className="text-[10px] text-neutral-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, quaerat assumenda ipsa, impedit omnis cupiditate dignissimos sequi maiores placeat molestias similique tenetur consequuntur itaque consectetur delectus earum? Cumque, numquam labore.

                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum quibusdam obcaecati, itaque dolore ducimus perferendis nisi ea atque. Fugiat adipisci iure soluta nesciunt doloremque commodi exercitationem voluptatum nemo suscipit itaque!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate enim voluptatem aperiam delectus dolor asperiores nihil facilis dolore, fugit, ullam aliquid quo amet nostrum, suscipit aliquam odit provident animi voluptate!
                </p>
            );
        },
    },
    {
        description: "Babbu Maan",
        title: "Power talks",
        src: "./logo.png",
        ctaText: "Play",
        ctaLink: "#",
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