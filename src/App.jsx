import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(Flip);

function App() {

  const location = useLocation();


  const preloaderTextRef = useRef();
  const preloaderBackgroundRef = useRef();



  useEffect(() => {


    const preloaderText = preloaderTextRef.current;
    const preloaderBackground = preloaderBackgroundRef.current;



    const master = gsap.timeline();

    const setInitialState = () => {

      gsap.set(preloaderText, {
        yPercent: 100
      })

    }

    const preloaderAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power2.out'
        }
      });



      tl.to(preloaderText, {
        yPercent: 0,
        delay: 0.3
      })
        .to(preloaderText, {
          yPercent: -105,
          delay: 1
        })
        .to(preloaderBackground, {
          yPercent: -100,
          duration: 1.5,
          ease: 'power4.inOut'
        }, '<')

      return tl;

    }



    const UIanimation = () => {

      const tl = gsap.timeline({
        delay: 0.5,
        defaults: {
          ease: 'power3.out',
          duration: 1.7,
          yPercent: 0,
          y: 0
        }

      });


      return tl
    }

    master
      .add(setInitialState())
      .add(preloaderAnimation())
      .add(UIanimation(), '-=1.2')


  }, []);


  return (
    <>

      <div className="preloader">
        <p className="preloader__text">
          <span ref={preloaderTextRef}>Collection 2024</span>
        </p>
        <div
          className="preloader__background"
          ref={preloaderBackgroundRef}
        ></div>
      </div>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route exact path='/work' element={<Work />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
