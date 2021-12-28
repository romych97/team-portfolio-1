// import 'animate.css';

function Skills() {

    return (
        <div className="z-30 max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16 min-h-screen">
            <div >
                <div className="mb-3">
                    <div>
                        <h2 className="cursor-default text-4xl sm:text-5xl md:text-7xl font-medium text-gray-200 mb-0 threed-text font-medium animate__animated animate__fadeIn animate__slower">
                            <span className="textD hover:text-blue-300">R</span>
                            <span className="textD hover:text-blue-300">e</span>
                            <span className="textD hover:text-blue-300">v</span>
                            <span className="textD hover:text-blue-300">i</span>
                            <span className="textD hover:text-blue-300">e</span>
                            <span className="textD hover:text-blue-300">w</span>
                            <span className="textD hover:text-blue-300">s</span>
                        </h2>
    
                    </div>
                </div>
                <div className="flex">
                    <div className="w-50 flex-1">
                        <div>
                            <div className="mb-5">
                                <h3 className="text-gray-300 text-sm animate__animated color-lightblue animate__fadeIn animate__slower ">
                                    A small gallery of recent projects chosen by me.
                                    I've done them all together with amazing people from companies around the globe. It's only a drop in the ocean compared to the entire list.
                                </h3>
                            </div>
                        </div>
                        <div className="mb-10">
                            <button className=" mr-2 text-gray-100 inline-flex items-center h-10 px-10 transition-colors duration-150 bg-blue-800 rounded-sm focus:shadow-outline hover:bg-blue-700">
                                <span>See more!</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-50 flex-1">
                        {/* <TagCloud /> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills