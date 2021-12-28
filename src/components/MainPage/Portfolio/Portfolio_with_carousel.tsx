
// Change file name to Portfolio.jsx for show carousel


import React, { useState } from "react";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Portfolio() {

    const [ portfolioItems, setPortfolioItems ] = useState([
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
        { 
            img: 'https://upload.wikimedia.org/wikipedia/en/c/ca/Tycho_-_Awake.png',
            link: '',
            name: '',
            description: ''
        },
    ])

    const images = portfolioItems.map(article => (
        <img key={article.name} src={article.img} />
    ));

    const CustomDot = ({ index, onClick, active }) => {
        return (
          <button onClick={ e => { onClick(); e.preventDefault(); }}
                  className={ "w-20 h-20 mx-1 " + (active ? "border" : '')} >
            { React.Children.toArray(images)[index] }
          </button>
        );
      };

    return (
        <div  className="z-30 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16 min-h-screen items-center">
            <div>
                <div className="flex mb-3">
                    <div>
                        <h1 className="cursor-default text-4xl sm:text-5xl md:text-7xl font-medium text-gray-200 mb-0 threed-text font-medium animate__animated animate__fadeIn animate__slower">
                            <span className="textD hover:text-blue-300">O</span>
                            <span className="textD hover:text-blue-300">u</span>
                            <span className="textD hover:text-blue-300">r</span>
                                &nbsp;
                            <span className="textD hover:text-blue-300">P</span>
                            <span className="textD hover:text-blue-300">o</span>
                            <span className="textD hover:text-blue-300">r</span>
                            <span className="textD hover:text-blue-300">t</span>
                            <span className="textD hover:text-blue-300">f</span>
                            <span className="textD hover:text-blue-300">o</span>
                            <span className="textD hover:text-blue-300">l</span>
                            <span className="textD hover:text-blue-300">i</span>
                            <span className="textD hover:text-blue-300">o</span>
                        </h1>
    
                    </div>
                    {/* <div className="animate__animated animate__flash animate__infinite animate__slower">
                        <div className="w-6 h-6 flex-shrink-0 flex items-center">
                            <img className="block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                        </div>
                    </div> */} 
                </div>
                <div className="mb-5">
                    <h3 className="text-gray-300 text-sm animate__animated color-lightblue animate__fadeIn animate__slower ">
                        A small gallery of recent projects chosen by me.
                        I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.
                    </h3>
                </div>
                <div className="mb-10">
                    <button className=" mr-2 text-gray-100 inline-flex items-center h-10 px-10 transition-colors duration-150 bg-blue-800 rounded-sm focus:shadow-outline hover:bg-blue-700">
                        <span>See more!</span>
                    </button>
                    <button className=" text-gray-100 inline-flex items-center h-10 px-5 transition-colors duration-150 bg-gray-800 rounded-sm focus:shadow-outline hover:bg-gray-700">
                        <span>See our skills</span>
                    </button>
                </div>
                <div className="relative" style={{ marginRight: '-0.25rem', marginLeft: '-0.25rem' }}>
                    <Carousel showDots={ true } ssr slidesToSlide={ 1 } containerClass="carousel-container"
                              responsive={ responsive } partialVisible infinite
                              dotListClass="relative" renderDotsOutside={true}
                              customDot={ <CustomDot /> } >

                        { portfolioItems.map((item, i) => {
                            return (
                                <div className="bg-gray-800 shadow-lg rounded p-2 mx-1">
                                    <div className="group relative">
                                    <img className="w-full block rounded" src={ item.img } alt="" />
                                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                        <div>
                                            <div className="mb-1">
                                                <button className="w-full hover:scale-110 bg-blue-800 px-4 text-gray-100 text-xs py-2 rounded text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                                    View Project
                                                </button>
                                            </div>
                                            <div>
                                                <button className="w-full hover:scale-110 bg-blue-800 px-4 text-gray-100 text-xs py-2 rounded text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                                    Go to site
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }) }

                    </Carousel>

                </div>
                <div>
                    <div>
                        
                        {/* <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                            
                            { portfolioItems.map((item, i) => {
                                return (
                                    <div className="bg-gray-800 shadow-lg rounded p-2">
                                        <div className="group relative">
                                        <img className="w-full block rounded" src={ item.img } alt="" />
                                        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                                         
            
                                            <div>
                                                <div className="mb-1">
                                                    <button className="w-full hover:scale-110 bg-blue-800 px-4 text-gray-100 text-xs py-2 rounded text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                                        View Project
                                                    </button>
                                                </div>
                                                <div>
                                                    <button className="w-full hover:scale-110 bg-blue-800 px-4 text-gray-100 text-xs py-2 rounded text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition">
                                                        Go to site
                                                    </button>
                                                </div>
                                            </div>
            
                                        </div>
                                    </div>
                                </div>
                            ) }) }

                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio