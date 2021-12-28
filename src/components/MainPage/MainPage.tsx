
import React, { useRef } from 'react'

import About from './About/About'
import Contacts from './Contacts/Contacts'
import Portfolio from './Portfolio/Portfolio'
import Reviews from './Reviews/Reviews'
import Skills from './Skills/Skills'

const scrollToRef = (ref) => {
    console.log('scrool', ref);
    window.scrollTo(0, ref.current.offsetTop)
}   
// General scroll to element function

function MainPage() {
    
    const portfolioRef = useRef(null)
    const executeScroll = () => scrollToRef(portfolioRef)

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

            <section className="min-h-screen">
                <About executeScroll={ executeScroll } />
            </section>
            
            <section ref={ portfolioRef }  className="min-h-screen">
                <Portfolio />
            </section>
            
            <section className="min-h-screen">
                <Skills />
            </section>
            
            <section className="min-h-screen">
                <Reviews />
            </section>
            
            <section className="min-h-screen">
                <Contacts />
            </section>

        </div>
    );
}

export default MainPage;