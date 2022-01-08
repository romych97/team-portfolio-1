// import 'animate.css';
import { useEffect, useState } from 'react';


function NavigationArrows(props:any) {
    
    function changeView() {
        console.log(props.currentView)
    }

    return (
        <div style={{ position: 'fixed', bottom: '10px', right: '10px' }}>
            <div style={{ cursor: 'pointer' }} className="text-gray-100 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
                </svg>
            </div>
            <div style={{ cursor: 'pointer' }} className="text-gray-100 cursor-pointer flex items-center justify-center">
                <div style={{ backgroundColor: props.currentView == 'aboutRef' ? 'white' : 'transparent',
                              width: '15px', height: '15px', border: '1px solid' }} className="rounded-full justify-center"></div>
            </div>
            <div style={{ cursor: 'pointer' }} className="text-gray-100 cursor-pointer flex items-center justify-center">
                <div style={{ backgroundColor: props.currentView == 'portfolioRef' ? 'white' : 'transparent',
                              width: '15px', height: '15px', border: '1px solid' }} className="rounded-full justify-center"></div>
            </div>
            <div style={{ cursor: 'pointer' }} className="text-gray-100 cursor-pointer flex items-center justify-center">
                <div style={{ backgroundColor: props.currentView == 'skillsRef' ? 'white' : 'transparent', 
                              width: '15px', height: '15px', border: '1px solid' }} className="rounded-full justify-center"></div>
            </div>
            <div style={{ cursor: 'pointer' }} className="text-gray-100 cursor-pointer flex items-center justify-center">
                <div style={{ backgroundColor: props.currentView == 'reviewsRef' ? 'white' : 'transparent',
                              width: '15px', height: '15px', border: '1px solid' }} className="rounded-full justify-center"></div>
            </div>
            <div onClick={ () => changeView() } style={{ cursor: 'pointer' }} className="text-gray-100 cursor-pointer flex items-center justify-center" >
                <div style={{ backgroundColor: props.currentView == 'contactsRef' ? 'white' : 'transparent',
                              width: '15px', height: '15px', border: '1px solid' }} className="rounded-full justify-center"></div>
            </div>
            <div style={{ cursor: 'pointer' }} className="text-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                </svg>
            </div>
        </div>
    )
}

export default NavigationArrows