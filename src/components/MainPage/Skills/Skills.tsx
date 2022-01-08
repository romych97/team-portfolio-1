// import 'animate.css';
import { useEffect, useState } from 'react';

// import TagCloud from '../../../modules/TagCloud';
// import TagCloud from '../../../modules/TagCloud/index'

const TagCloud = require('TagCloud');


import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer'; 

import dynamic from 'next/dynamic'
const AnimationOnScroll = dynamic(() => import('react-animation-on-scroll').then(mod => mod.AnimationOnScroll),
    { ssr: false }
) 

function Skills() {

    const [skillPercent, setSkillPercent] = useState({ 
        frontend: 0,
        backend: 0,
        react: 0,
        vue: 0,
        reactNative: 0
    })
    
    const { ref, inView, entry } = useInView({ threshold: 0 });

    useEffect(() => {
        const container = '#tagCloudContainer';
        const texts = [
            '3D', 'TagCloud', 'JavaScript',
            'CSS3', 'Animation', 'Interactive',
            'Mouse', 'Rolling', 'Sphere',
            '6KB', 'v2.x',
        ];
        const options = {
            maxSpeed: 'slow',
            keep: false,
            radius: 200
        };

        TagCloud(container, texts, options);
        
    }, [])

    useEffect(() => {
        // console.log
        if (inView) {
            console.log('inView')
            setSkillPercent({ 
                frontend: 33,
                backend: 22,
                react: 70,
                vue: 60,
                reactNative: 25
            });
        }
    }, [inView])

    return (
        <div className="z-30 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16 min-h-screen">
            <div ref={ ref }>
            <div className="flex">
                <div className="flex-1">
                    <div className="mb-3">
                        <div>
                            <AnimationOnScroll offset={ 0 } delay={ 0 } animateOnce={true} animateIn="animate__bounceInLeft">
                                <div>
                                    <h2 className="cursor-default text-4xl sm:text-5xl md:text-7xl font-medium text-gray-200 mb-0 threed-text font-medium">
                                        <span className="textD hover:text-blue-300">O</span>
                                        <span className="textD hover:text-blue-300">u</span>
                                        <span className="textD hover:text-blue-300">r</span>
                                            &nbsp; 
                                        <span className="textD hover:text-blue-300">S</span>
                                        <span className="textD hover:text-blue-300">k</span>
                                        <span className="textD hover:text-blue-300">i</span>
                                        <span className="textD hover:text-blue-300">l</span>
                                        <span className="textD hover:text-blue-300">l</span>
                                        <span className="textD hover:text-blue-300">s</span>
                                    </h2>
                                </div>
                            </AnimationOnScroll>
                        </div>
                    </div>
                    <div className="">
                        <div className="w-50">
                            <div className="mb-5">
                                <div >
                                    <h3 className="text-gray-300 text-sm animate__animated color-lightblue animate__fadeIn animate__slower ">
                                        A small gallery of recent projects chosen by me.
                                        I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.
                                    </h3>
                                </div>
                            </div>
                            <div className="mb-10">
                                { Object.keys(skillPercent).map((keyName, i) => (
                                    <div key={ i } className="mb-3"> 
                                        <div className="flex justify-between mb-1">
                                            <span className="text-base font-medium text-blue-700 dark:text-white">{ keyName }</span>
                                            <span className="text-sm font-medium text-blue-700 dark:text-white">
                                                <CountUp start={ 0 } end={ skillPercent[keyName] } duration={ 3 } 
                                                        useEasing={ true } suffix="%" />
                                            </span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700">
                                            <div className="transition-progress bg-blue-600 h-1 rounded-full" style={{ width: skillPercent[keyName] + '%' }}></div>
                                        </div>
                                    </div>
                                )) }
                            </div>
                            <div className="mb-10">
                                <button className=" mr-2 text-gray-100 inline-flex items-center h-10 px-10 transition-colors duration-150 bg-blue-800 rounded-sm focus:shadow-outline hover:bg-blue-700">
                                    <span>See more!</span>
                                </button>
                                <button className=" text-gray-100 inline-flex items-center h-10 px-5 transition-colors duration-150 bg-gray-800 rounded-sm focus:shadow-outline hover:bg-gray-700">
                                    <span>See our skills</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="w-50 flex-1" id="tagCloudContainer">
{/* <TagCloud /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills