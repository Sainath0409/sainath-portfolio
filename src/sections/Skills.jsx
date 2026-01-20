"use client";
import { useState } from 'react'
import SkillCard from '../components/SkillCard';
import { data } from '../data'

const Skills = () => {

    const categories = Array.from(new Set(data?.skills.map((s) => s.category)))
    const [category, setCategory] = useState(categories[0])

    return (
        <section id='skills' className="min-h-screen mt-12 md:mt-24 mx-4 md:mx-0 xl:py-20 2xl:my-24">
            <h2 className="text-4xl text-center dark:text-white">Tech <span className="text-[#DC143C]">Stack</span></h2>

            <div className="md:w-1/2 overflow-x-auto scroll-hide lg:w-1/3 mx-auto mt-6 bg-white dark:bg-gray-900 p-2 flex justify-between items-center gap-3 rounded-md">
                {categories.map((c, i) => (
                    <span key={i} onClick={() => setCategory(c)} className={`p-1.5 md:p-2 text-sm  md:text-base w-full text-center font-semibold cursor-pointer rounded-md ${category.toLowerCase() === c.toLowerCase() ? "bg-[#DC143C] dark:bg-[#DC143C] text-white" : "bg-white text-black  dark:bg-gray-800 dark:text-white hover:bg-red-100 hover:dark:bg-red-900"} transition-all capitalize`}>{c}</span>
                ))}
            </div>

            <div className="lg:w-3/4 2xl:w-3/5 my-8 mx-auto md:px-12 grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 place-items-center gap-8">
                {data?.skills?.filter((s) => s.category.toLowerCase() === category.toLowerCase()).map((s, i) => (
                    <SkillCard key={i} {...s} />
                ))}
            </div>

        </section>
    )
}

export default Skills