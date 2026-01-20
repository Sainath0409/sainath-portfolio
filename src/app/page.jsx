"use client";

import dynamic from "next/dynamic";
import { useSelector } from "react-redux";

const Header = dynamic(() => import("../components/Header").then(mod => mod.Header), { ssr: false });
const About = dynamic(() => import("../sections/About"), { ssr: false });
const Contact = dynamic(() => import("../sections/Contact"), { ssr: false });
const Experiences = dynamic(() => import("../sections/Experiences"), { ssr: false });
const Home = dynamic(() => import("../sections/Home"), { ssr: false });
const Projects = dynamic(() => import("../sections/Projects"), { ssr: false });
const Skills = dynamic(() => import("../sections/Skills"), { ssr: false });
const Socials = dynamic(() => import("../components/Socials"), { ssr: false });

export default function App() {
    const theme = useSelector((store) => store?.theme?.theme);

    return (
        <div
            className={
                theme === "dark"
                    ? "dark bg-slate-50 dark:bg-black min-h-screen"
                    : " bg-slate-50 dark:bg-black min-h-screen"
            }>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Experiences />
            <Contact />
            <Socials />
        </div>
    );
}
