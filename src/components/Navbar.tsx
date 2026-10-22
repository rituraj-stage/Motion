"use client";
import React, { useState } from "react";
import {motion} from "motion/react";

function NavbarComp(){
    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "About",
            href: "/about",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "Login",
            href: "/login",
        },
    ]

    const [hovered, setHovered] = useState<number | null>(null);
    return (
        <div className="py-40">
            <nav className="max-w-xl mx-auto bg-gray-100 rounded-full flex px-2 py-1">
                {navItems.map((item,idx) => (
                    <a 
                        className="w-full relative text-center py-3 text-xs text-neutral-500" 
                        onMouseEnter={()=> setHovered(idx)} 
                        onMouseLeave={() => setHovered(null)} 
                        href={item.href} 
                        key={item.title}
                    >
                        <span
                            className="relative group-hover:text-neutral-400 text-neutral-500 z-20"
                        >
                            {item.title}
                        </span>
                        {hovered === idx && (   
                        <motion.div 
                            layoutId="hover"
                            className="absolute inset-0 rounded-full w-full h-full bg-black">
                        </motion.div>)}
                        {/* <span className="relative mix-blend-difference">{item.title}</span> */}
                    </a>
                ))}</nav>
        </div>
    )
}

export default NavbarComp;