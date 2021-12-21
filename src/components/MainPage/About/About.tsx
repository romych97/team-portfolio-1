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
        </div>
    )
}

export default About