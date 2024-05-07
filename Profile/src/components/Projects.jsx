import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Link } from 'react-router-dom';


const Projects = ({ project }) => {
    return (
        <>
            <CardContainer className="max-w-sm">
                <CardBody className="bg-black relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] min-h-[300px] h-auto rounded-xl p-6 border  ">
                    <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-300 dark:text-white">{project.name}</h5>

                    </CardItem>
                    {/* <CardItem translateZ="100" className="w-full mt-4"> */}
                        <Carousel>
                            {project.image.map((image, index) => (
                                <div key={index} className="rounded-t-lg flex justify-center items-center min-h-[200px] scroll-snap-start">
                                    <img src={`images/${image}`} alt="" className="block w-full h-auto min-w-full" />
                                </div>
                            ))}
                        </Carousel>
                    {/* </CardItem> */}
                    <div className="flex justify-between items-center mt-20">
                        <CardItem
                            translateZ={20}
                            as={Link}
                            href="https://twitter.com/mannupaaji"
                            target="__blank"
                            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                        >
                            <p className="mb-3 font-normal text-xl text-gray-400"> Technologies: {project.technologies}</p>

                        </CardItem>
                        <CardItem
                            translateZ={20}
                            as="button"
                            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                        >
                            <a href={project.link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-white">
                                <img src='icons/github.svg' className="h-6 w-6 bg-white" />

                            </a>
                        </CardItem>
                    </div>
                </CardBody>
            </CardContainer>

            {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center">
                

                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.about}</p>
                    <p className="mb-3 font-normal text-white"> Technologies: {project.technologies}</p>

                    <a href={project.link} target='_blank' className="inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-white">
                        <img src='icons/github.svg' className="h-6 w-6 bg-white" />

                    </a>
                </div>

            </div> */}


        </>
    )
}

export default Projects