import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { cn } from '../lib/utils';

const navItems = <>
    <NavLink to="/"><li>Home</li></NavLink>
    <NavLink to="/about"><li>About</li></NavLink>
    <NavLink to="/skills"><li>Skills</li></NavLink>
    <NavLink to="/projects"><li>Projects</li></NavLink>
    <NavLink to="/contact"><li>Contact</li></NavLink>
</>

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return ()=>window.removeEventListener("scroll", handleScroll)
    }, [])

    return <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>

        <div className='container flex items-center justify-between'>
                <Link className='text-xl font-bold text-primary flex items-center '>
                    <span className='relative z-10'>
                        <span className='text-glow text-foreground'>Jamil</span> Portfolio
                    </span>
                </Link>

                {/* {desktop nav} */}
                <div>
                    {navItems}
                </div>


                {/* mobile nav */}
        </div>

    </nav>
};

export default Navbar;