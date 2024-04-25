import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import Skills from './Skills'
import skills_tech from '../skills_tech'
import projects from '../projects'
import Experience from './Experience'
import Projects from './Projects'
import Interests from './Interests'
import My_Interests from '../Interests'

const Home = () => {
    return (
        <>
        
            <br />
            <div className="flex flex-col md:flex-row items-center justify-center py-4">
                <div className="p-6 md:w-1/2 bg-white rounded shadow-lg">
                    <h2 className="text-center text-4xl font-semibold text-blue-600 my-3 hover:scale-105 hover:cursor-pointer" style={{ fontFamily: 'cursive' }}>
                        <mark className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">Raghav Khanna</mark>
                    </h2>
                    <p className="mt-4 text-gray-700 text-center">
                        Passionate and driven Javascript developer with ~2 years of hands-on experience, actively seeking opportunities to apply and enhance my expertise.
                        Holding a BCA degree, I am dedicated to continuous learning and skill refinement. A collaborative team player, I bring optimism, confidence, and a strong commitment to achieving shared goals.
                    </p>
                    <div className="mt-6 flex items-center justify-center">
                        <img src='icons/mail.svg' className="h-6 w-6 mr-2 text-blue-600" />

                        <p className="text-blue-600 cursor-pointer">Mail: raghavkhanna0011@email.com</p>
                    </div>
                    {/* DOB Section */}
                    <div className="mt-4 flex items-center justify-center">
                        <img src='icons/dob.svg' className="h-6 w-6 mr-2 text-blue-600" />

                        <p className="text-blue-600 cursor-pointer">DOB: 01-Jan-2000</p>
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                        <img src='icons/degree.svg' className="h-6 w-6 mr-2 text-blue-600" />

                        <p className="text-blue-600 cursor-pointer">Degree: BCA</p>
                    </div>
                </div>

                {/* Image */}
                <div className="p-6 md:ml-6">
                <img 
                    src="images/Img1.jpg" 
                    alt="Round Image" 
                    className="rounded w-80 h-80 object-cover shadow-lg " 
                />
                </div>

            </div>
            <div>
                <h2 className="flex flex-row flex-nowrap items-center mt-24">
                    <span className="flex-grow block border-t border-black"></span>
                    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
                        Skills
                    </span>
                    <span className="flex-grow block border-t border-black"></span>
                </h2>
            </div>

            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {skills_tech.map((skill, index) => (
                    <Skills key={index} name={skill.name} icon={skill.icon} />
                ))}

            </div>

            <div>
                <h2 className="flex flex-row flex-nowrap items-center mt-20">
                    <span className="flex-grow block border-t border-black"></span>
                    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
                        Experience
                    </span>
                    <span className="flex-grow block border-t border-black"></span>
                </h2>
            </div>
            <br />
            <Experience />

            <div>
                <h2 className="flex flex-row flex-nowrap items-center mt-20">
                    <span className="flex-grow block border-t border-black"></span>
                    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
                        Projects
                    </span>
                    <span className="flex-grow block border-t border-black"></span>
                </h2>
            </div>
            <br/>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {projects.map((project,index) => (
                    <Projects key={index} project={project} />
                ))}

            </div>
            <div>
                <h2 className="flex flex-row flex-nowrap items-center mt-20">
                    <span className="flex-grow block border-t border-black"></span>
                    <span className="flex-none block mx-4 px-4 py-2.5 text-xl rounded leading-none font-medium bg-black text-white">
                        Interests
                    </span>
                    <span className="flex-grow block border-t border-black"></span>
                </h2>
            </div>
            <br />

            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {My_Interests.map((interest,index) => (
                    <Interests  key={index} interest={interest}/>
                ))}

            </div>
           <div className='bg-blue-400 text-white px-2 py-2 text-center text-2xl'>
           ~ If you can see the invisible then you can achieve the impossible ~

           </div>
           <p className='bg-blue-400'>
            &nbsp;
           </p>


        </>

    )
}

export default Home