import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutMe from '../components/AboutMe';
import SkillsSection from '../components/SkillsSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
           {/* Theme Toggle */}
           <ThemeToggle/>

           {/* Background Effects */}
           <StarBackground/>

           {/* Navbar */}
            <Navbar/>
           {/* Main Content */}
            <main>
                <HeroSection/>
                <AboutMe/>
                <SkillsSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>

           {/* Footer */}
           <Footer/>
        </div>
    );
};

export default RootLayout;