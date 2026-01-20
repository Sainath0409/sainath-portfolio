"use client";
import { useEffect, useMemo, useState } from 'react'
import { data } from '../data'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
    const projects = useMemo(() => [...data?.projects]?.reverse(), [])

    const categories = useMemo(() => [...new Set(projects.map(p => p.category))], [projects])
    const [category, setCategory] = useState('')
    const [filteredProjects, setFilteredProjects] = useState([])
    const [viewAll, setViewAll] = useState(false)

    const filterProjects = (cat) => {
        setCategory(cat)
        setViewAll(false)
        const filtered = projects.filter(p => p.category.toLowerCase() === cat.toLowerCase())
        setFilteredProjects(filtered)
    }

    useEffect(() => {
        const defaultCategory = categories.includes('MERN Stack') ? 'MERN Stack' : categories[0]
        filterProjects(defaultCategory)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projects])

    return (
        <section id="projects" className="mx-4 md:mx-0 min-h-screen xl:py-20">
            <h2 className="text-4xl text-center dark:text-white">
                Recent <span className="text-[#DC143C]">Projects</span>
            </h2>

            <div className="overflow-x-auto scroll-hide md:w-full max-w-screen-sm mx-auto mt-6 flex justify-between items-center gap-2 md:gap-3 bg-white dark:bg-grey-800 p-2 rounded-md">
                {categories.map((c, i) => (
                    <span
                        key={i}
                        onClick={() => filterProjects(c)}
                        className={`p-1.5 md:p-2 w-full text-sm md:text-base text-center font-semibold capitalize rounded-md cursor-pointer transition-all ${
                            category === c
                                ? "bg-[#DC143C] dark:bg-[#DC143C] text-white"
                                : "bg-white text-black  dark:bg-gray-800 dark:text-white hover:bg-red-100 hover:dark:bg-red-900"
                        }`}
                    >
                        {c}
                    </span>
                ))}
            </div>

            <div className="md:mx-6 lg:mx-auto lg:w-5/6 2xl:w-3/4 my-4 md:my-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-10">
                {filteredProjects.slice(0, viewAll ? filteredProjects.length : 9).map((p, i) => (
                    <ProjectCard key={i} data={p} />
                ))}
            </div>

            {filteredProjects.length > 6 && (
                <div
                    className="text-center mt-4 cursor-pointer text-[#DC143C] font-semibold"
                    title={viewAll ? 'Show Less' : 'View All'}
                    onClick={() => setViewAll(!viewAll)}
                >
                    {viewAll ? 'Show Less' : 'View All'}
                </div>
            )}
        </section>
    )
}

export default Projects
