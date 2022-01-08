
import React, { useRef, useEffect, useCallback, useState } from 'react';
import {InView, useInView } from 'react-intersection-observer'; 

import About from './About/About'
import Contacts from './Contacts/Contacts'
import Portfolio from './Portfolio/Portfolio'
import Reviews from './Reviews/Reviews'
import Skills from './Skills/Skills'

// import NavigationArrows from '../../modules/NavigationArrows/NavigationArrows'

function MainPage() {

    
    const [currentView, setCurrentView] = useState(Number);
    
    const [aboutRef, aboutView, aboutInView] = useInView({ threshold: 0.3 });
    const [portfolioRef, portfolioView, portfolioInView] =  useInView({ threshold: 0.3 });
    const [skillsRef, skillsView, skillsInView] = useInView({ threshold: 0.3 });
    const [reviewsRef, reviewsView, reviewsInView] = useInView({ threshold: 0.3 });
    const [contactsRef, contactsView, contactsInView] = useInView({ threshold: 0.3 });
    
    const sections = [
        { id: 1, component: About, ref: aboutRef, element: aboutInView,
            view: { name: 'aboutRef', visible: aboutView } },
        { id: 2, component: Portfolio, ref: portfolioRef, element: portfolioInView, 
            view: { name: 'portfolioRef', visible: portfolioView } },
        { id: 3, component: Skills, ref: skillsRef, element: skillsInView,
            view: { name: 'skillsRef', visible: skillsView } },
        { id: 4, component: Reviews, ref: reviewsRef, element: reviewsInView,
            view: { name: 'reviewsRef', visible: reviewsView } },
        { id: 5, component: Contacts, ref: contactsRef, element: contactsInView,
            view: { name: 'contactsRef', visible: contactsView } },
    ]
    
    useEffect(() => {
        sections.map((section, i) => {
                if(section.view.visible) {
                    return setCurrentView(section.id);
                    // break;
            }
        })
    }, [aboutInView, portfolioInView, skillsInView, reviewsInView, contactsInView])
    
    useEffect(() => {
        console.log(currentView, 'currentView')
    }, [currentView])

    function sectionUp() {
        // currentView <= 1 ? setCurrentView(sections.length) 
        //                  : setCurrentView(currentView - 1);

        // let el = sections.find(x => x.id == currentView).element;
        // console.log(el , 'el')
        // // console.log(sections.find(x => x.id == currentView).element.boundingClientRect.top, 'sections[currentView].ref')
        // // sections.find(x => x.id == currentView)
        // setCurrentView(currentView - 1)
        // return window.scrollTo(-1, el.boundingClientRect.top)
    }
    
    function sectionDown() {
        // currentView >= sections.length ? setCurrentView(1) 
        //                  : setCurrentView(currentView + 1)
        // window.scrollTo(0, sections[currentView + 1].element.boundingClientRect.top)
    }
    
    return (
        <div>

            {/* Code imitation background */}
            <div className="text-cursive absolute top-36 text-gray-800  select-none cursor-default whitespace-nowrap">
                <br />button type="button" className="bg-gray-800 p-1"&gt;
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span className="sr-only"&gt;View notifications&lt;/span&gt;
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"&gt;
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" /&gt;
                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/svg&gt;
                <br />&lt;/button&gt;
            </div>

            {/* max-w-container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-9 xl:pt-20 pb-16 */}

            {/* SECTIONS LIST */}
            { sections.map((section, i) => {
                return (
                    <section ref={ section.ref } className="min-h-screen">
                        <section.component scrollToPortfolio={ () => window.scrollTo(0, portfolioInView.boundingClientRect.top) } />
                    </section>  
                )
            }) }

            {/* <NavigationArrows currentView={ currentView } /> */}
            
            <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
            
                {/* ARROW UP */}
                <div onClick={ (e) => sectionUp() } style={{ cursor: 'pointer' }} className="text-gray-100 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                    </svg>
                </div>

                {/* SECTIONS CIRCLES */}
                { sections.map((section, i) => {
                    return (
                        <div className="mt-1 mb-1 cursor-pointer text-gray-100 cursor-pointer flex items-center justify-center ">
                            <div style={{ backgroundColor: currentView == section.id ? 'white' : 'transparent',
                                        width: '15px', height: '15px', border: '1px solid white' }} className="rounded-full justify-center"></div>
                        </div>
                    )
                }) }

                {/* ARROW DOWN */}
                <div onClick={ (e) => sectionDown() } style={{ cursor: 'pointer' }} className="text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                    </svg>
                </div>

            </div>

        </div>
    );
}

export default MainPage;