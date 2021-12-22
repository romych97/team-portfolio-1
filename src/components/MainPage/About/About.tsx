import 'animate.css';

function About() {
    return (
        <div className="z-30">
            <div className="flex">
                <div>
                    <h1 className="text-5xl font-semibold animate__animated animate__fadeIn animate__slower">AGENCY NAME</h1>
                </div>
                <div className="animate__animated animate__flash animate__infinite animate__slower">
                    {/* <div className="w-6 h-6 flex-shrink-0 flex items-center">
                        <img className="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                    </div> */}
                </div>
            </div>
            <div >
                <h3 className="text-1xl animate__animated animate__fadeIn animate__slower">Тут какой нибудь текст с небольшим описанием.</h3>
            </div>
            <div >
                <button class="inline-flex items-center h-10 px-5 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-sm focus:shadow-outline hover:bg-indigo-800">
                    <span>Contact US With icon</span>
                    <svg class="w-4 h-4 ml-3 fill-current" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default About