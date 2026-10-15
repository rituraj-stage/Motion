import { IconRocket } from "@tabler/icons-react"
import { useMotionValueEvent, useScroll, useTransform , motion } from "motion/react";
import { useRef } from "react";


function ScrollComp(){
    return (
        <div className="flex min-h-screen items-center justify-center bg-neutral-900">
            <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40">
                {features.map((feature, idx) => (
                    <Card key={feature.title} feature={feature} />
                ))}
            </div>
        </div>
    );
}

const Card = ({feature} : {feature:Feature}) =>{
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end" , "end start"]
    })
    const translateContent = useTransform(scrollYProgress, [0,1], [-200,200]);
    // useMotionValueEvent(scrollYProgress, "change", (latest) => {
    //     console.log("changed values", latest);
    // })
    return (
        <div
            ref={ref}
            key = {feature.title} 
            className= "grid grid-cols-2 items-center gap-20 py-40"
        >
            <div className="flex flex-col gap-5">
                {feature.icon}
                <h2 className="text-4xl font-bold text-white">{feature.title}</h2>
                <p className="text-lg text-neutral-400">{feature.description}</p>
            </div>
            <motion.div>{feature.content}</motion.div>
        </div>
    )
}

type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
    content: React.ReactNode;
}

const features : Feature[] = [
    {
        icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
        title: "Generate ultra-realistic images in seconds",
        description: "With our AI-powered image generator, you can create stunning visuals that look like they were taken by a professional photographer.",
        content: (
            
            <img 
                src="logo.png"
                alt="Feature"
                height={500}
                width={500}
                className="ronded-lg"
            />
        ),
    },
    {
        icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
        title: "Batch processing for faster results",
        description: "Our batch processing feature allows you to generate multiple images at once, saving you time and effort.",
        content: (
            <div className="relative">
                <div className="-rotate-[10deg]">
                    <img
                        src="logo.png"
                        alt="Feature"
                        height={500}
                        width={500}
                        className="rounded-lg"
                    />
                </div>
                <div className="absolute inset-0 rotate-[10deg] transform">
                    <img 
                        src="logo.png"
                        alt="Feature"
                        height={500}
                        width={500}
                        className="rounded-lg"
                    />
                </div>
                <div className="absolute inset-0 rotate-[10deg] transform">
                    <img 
                        src="logo.png"
                        alt="Feature"
                        height={500}
                        width={500}
                        className="rounded-lg"
                    />
                </div>
            </div>
        )
    },
    {
        icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
        title: "Generate ultra-realistic images in seconds",
        description: "With our AI-powered image generator, you can create stunning visuals that look like they were taken by a professional photographer.",
        content: (
            
            <img 
                src="logo.png"
                alt="Feature"
                height={500}
                width={500}
                className="ronded-lg"
            />
        ),
    },
]

export default ScrollComp