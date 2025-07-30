import React from 'react';

const projects = [
    {
        id: 1,
        title: "Collaborative Study Platform Page",
        description: "A sleek and responsive landing page built with React and Tailwind CSS, designed for study groups to connect and collaborate seamlessly.",
        image: "/projects/project1.jpg",
        tags: ["React", "TailwindCSS", "DaisyUI", "MongoDB", "ExpressJS", "JWT"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "AthleticHub Page",
        description: "A modern and dynamic landing page built with React and Tailwind CSS, designed to bring athletes and sports enthusiasts together in one community hub.",
        image: "/projects/project2.jpg",
        tags: ["React", "TailwindCSS", "DaisyUI", "MongoDB", "ExpressJS", "JWT"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Plant Care Tracker Page",
        description: "A clean and engaging landing page built with React and Tailwind CSS, tailored for plant lovers to track watering schedules and care tips.",
        image: "/projects/project3.jpg",
        tags: ["React", "TailwindCSS", "DaisyUI", "MongoDB"],
        demoUrl: "#",
        githubUrl: "#"
    }
];




const ProjectSection = () => {
    return <section id='projects' className='py-24 px-4 relative'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>Featured <span className='text-primary'> Projects</span></h2>

            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                A selection of modern, user-focused web applications I've built using React, Tailwind CSS, and backend technologies like MongoDB and ExpressJS. Each project highlights my passion for clean design, responsive layouts, and practical solutions.
            </p>
        </div>
    </section>;
};

export default ProjectSection;