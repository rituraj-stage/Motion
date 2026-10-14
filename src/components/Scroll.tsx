import { IconRocket } from "@tabler/icons-react"

function ScrollComp(){
    return (
        <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
            hi there
        </div>
    )
}

const features = [
    {
        icon: <IconRocket className="w-8 h-8 text-neutral-200" />,
        title: "Generate ultra-realistic images in seconds",
        description: "With our AI-powered image generator, you can create stunning visuals that look like they were taken by a professional photographer.",
        content: (
            
            <img 
                src="/path/to/your/image.jpg"
                alt="Feature"
                height={500}
                width={500}
                className="ronded-lg"
            />
        ),
    },
]

export default ScrollComp