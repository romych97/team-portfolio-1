import { useEffect } from "react";

import '../styles/main.scss'

// import AOS from "aos";
// import "aos/dist/aos.css";

export default function MyApp({ Component, pageProps }) {
  

  
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   AOS.init({
  //     // easing: "ease-out-cubic",
  //     once: true,
  //     // Global settings:
  //     debounceDelay: 50, // the delay on debounce used while resizing window (advanced)


  //     mirror: true, // whether elements should animate out while scrolling past them
  //         // offset: 50,
  //   });
  // }, []);

  return <Component {...pageProps} />
}