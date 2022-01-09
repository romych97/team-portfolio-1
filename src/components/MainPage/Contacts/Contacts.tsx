

import dynamic from 'next/dynamic'
const AnimationOnScroll = dynamic(() => import('react-animation-on-scroll').then(mod => mod.AnimationOnScroll),
    { ssr: false }
) 

function Contacts() {
    return (
        <div className="z-30 flex max-w-container  min-h-screen">
            <div className="flex-1 mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16">
                <div className="mb-3">
                    <div>
                    <AnimationOnScroll offset={ 0 } delay={0} animateOnce={true} animateIn="animate__bounceInLeft">
                        <div data-aos="fade-right">
                            <h2 className="cursor-default text-4xl sm:text-5xl md:text-7xl font-medium text-gray-200 mb-0 threed-text font-medium animate__animated animate__fadeIn animate__slower">
                                <span className="textD hover:text-blue-300">C</span>
                                <span className="textD hover:text-blue-300">o</span>
                                <span className="textD hover:text-blue-300">n</span>
                                <span className="textD hover:text-blue-300">t</span>
                                <span className="textD hover:text-blue-300">a</span>
                                <span className="textD hover:text-blue-300">c</span>
                                <span className="textD hover:text-blue-300">t</span>
                                    &nbsp;
                                <span className="textD hover:text-blue-300">U</span>
                                <span className="textD hover:text-blue-300">s</span>
                            </h2>
                        </div>
                        </AnimationOnScroll>
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
                        <div className="mb-5">

          <div className=" mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
          </div>
          </div>
        </div>
                        <div className="mb-10">
                            <button className=" mr-2 text-gray-100 inline-flex items-center h-10 px-10 transition-colors duration-150 bg-blue-800 rounded-sm focus:shadow-outline hover:bg-blue-700">
                                <span>Send message</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1" style={{ backgroundImage: 'url(https://jacekjeznach.com/wp-content/themes/new/img/map.png)' }} className="w-50 flex-1">2</div>

        </div>
    )
}

export default Contacts