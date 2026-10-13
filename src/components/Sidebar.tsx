"use client";

import { IconChevronLeft, IconChevronRight , IconChartBar , IconSettings , IconUser } from "@tabler/icons-react";
import { motion } from "motion/react";
import { useState } from "react";

function SidebarComp() {
    const [isOpen, setIsOpen] = useState(true);
    
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        {
            name:"Home",
            href:"/",
            icon: <HomeIcon />,
        },
        {
            name:"Analytics",
            href:"/",
            icon: <IconChartBar className="w-5 h-5 mr-3" />,
        },
        {
            name:"Users",
            href:"/users",
            icon: <IconUser className="w-5 h-5 mr-3" />,
        },
        {
            name:"Settings",
            href:"/settings",
            icon: <IconSettings className="w-5 h-5 mr-3"/>,
        },
    ]

    const sidebarVariants = {
        open: {
            width: "16rem",
        },
        closed: {
            width: "4.5rem",
        },
    };

    const childVariants= {
        open: {
            opacity: 1,
            y: 0,
        },
        closed: {
            opacity: 0,
            y: -10,
        },
    };

    const parentVariants = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2,
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                delayChildren: -1,
            }
        },
    }

    return(
        <motion.div 
            initial={false}
            animate={isOpen ? "open" : "closed"}
            whileHover= "open"
            exit= "closed"
            transition={{ duration: 0.3}}

            className="border-r border-neutral-100 h-full">
            
            <motion.nav 
                variants={sidebarVariants}
                className={`bg-white shadow-md h-full`}>
                <div className="p-4 flex justify-between items-center">
                    <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
                        Dashboard
                    </h2>
                    {/* Toggle Button  */}
                    <button
                        onClick={toggleSidebar}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                        aria-label={isOpen ? "Close Sidebar" : "Open Sidebar"}
                    >
                        {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
                    </button>
                </div>

                <div className="relative">
                {/* Sidebar content  */}
                    <nav className="p-4">
                        <motion.ul 
                            variants={parentVariants}
                        className="space-y-2">
                            {links.map((link) =>(
                                <motion.li 
                                    variants={childVariants}
                                    key={link.name}>
                                    <a
                                        href={link.href}
                                        className="flex items-center p-2 text-gray-700 rounded hover:bg-gray-200"
                                        title={!isOpen ? link.name : ""}
                                        >
                                            {link.icon}
                                            {/* {isOpen && link.name} */}
                                            {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </nav>
                </div>

            </motion.nav>

        </motion.div>
    );
};

const HomeIcon = () => (
    <svg
        className="w-5 h-5 mr-3"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"

        ></path>
    </svg>
);
export default SidebarComp