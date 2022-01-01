import 'animate.css';
import { useEffect } from 'react';

import dynamic from 'next/dynamic'
const AnimationOnScroll = dynamic(() => import('react-animation-on-scroll').then(mod => mod.AnimationOnScroll),
    { ssr: false }
) 

function About(props:any) {

    // useEffect(() => {
    //     props.executeScroll()
    // }, [])
      
    return (
        <div className="z-30 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16 min-h-screen flex items-center">
            <div>
                <div className="flex mb-3">
                    <div>
                        <AnimationOnScroll delay={0} animateOnce={true} animateIn="animate__bounceInLeft">
                            <div data-aos="fade-right" >
                                <h2 className="cursor-default text-4xl sm:text-5xl md:text-7xl font-medium text-gray-200 mb-0 threed-text font-medium animate__animated animate__fadeIn animate__slower">
                                    <span className="textD hover:text-blue-300">A</span>
                                    <span className="textD hover:text-blue-300">g</span>
                                    <span className="textD hover:text-blue-300">e</span>
                                    <span className="textD hover:text-blue-300">n</span>
                                    <span className="textD hover:text-blue-300">c</span>
                                    <span className="textD hover:text-blue-300">y</span>
                                        &nbsp;
                                    <span className="textD hover:text-blue-300">N</span>
                                    <span className="textD hover:text-blue-300">a</span>
                                    <span className="textD hover:text-blue-300">m</span>
                                    <span className="textD hover:text-blue-300">e</span>
                                </h2>
                            </div>
                        </AnimationOnScroll>
                    </div>
                    {/* <div className="animate__animated animate__flash animate__infinite animate__slower">
                        <div className="w-6 h-6 flex-shrink-0 flex items-center">
                            <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                        </div>
                    </div> */} 
                </div>
                <div className="mb-5">
                    <h3 className="text-gray-300 text-sm animate__animated color-lightblue animate__fadeIn animate__slower ">Тут какой нибудь текст с небольшим описанием.</h3>
                </div>
                <div >
                    <button className="mt-5 mr-2 text-gray-100 inline-flex items-center h-10 px-5 transition-colors duration-150 bg-blue-800 rounded-sm focus:shadow-outline hover:bg-blue-700">
                        <span>Contact US With icon</span>
                        <svg className="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                    <button onClick={ (e) => props.executeScroll() } className="mt-5 text-gray-100 inline-flex items-center h-10 px-5 transition-colors duration-150 bg-gray-800 rounded-sm focus:shadow-outline hover:bg-gray-700">
                        <span>See our portfolio</span>
                        <svg className="w-4 h- ml-2 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default About