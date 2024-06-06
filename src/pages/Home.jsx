import img from '../assets/img/nnc-home.jpg';
import '../css/home.css';
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

gsap.registerPlugin(Flip);


const Home = () => {

    const homeRef = useRef(null);
    const homeTitleRefs = useRef([]);
    const homeImageStartRef = useRef(null);
    const homeCaptionRef = useRef(null);
    const homeButtonRef = useRef(null);
    const homeImageWrapperRef = useRef(null);
    const homeImageRef = useRef(null);


    useEffect(() => {

        const homeTitle = homeTitleRefs.current;
        const homeImageStart = homeImageStartRef.current;
        const homeCaption = homeCaptionRef.current;
        const homeButton = homeButtonRef.current;
        const homeImageWrapper = homeImageWrapperRef.current;
        const homeImage = homeImageRef.current;

        const master = gsap.timeline();

        const setInitialAnimation = () => {

            gsap.set(homeButton, {
                y: 64,
                autoAlpha: 0
            });

            gsap.set([homeTitle, homeCaption], {
                yPercent: 110
            });

        };

        const homeImageAnimation = () => {

            const tl = gsap.timeline({
                delay: 1.5,
                defaults: {
                    ease: 'power3.inOut',
                    duration: 2
                }
            });

            const state = Flip.getState(homeImageWrapper);

            homeImageStart.appendChild(homeImageWrapper);

            tl.from(homeImage, { scale: 1.07 })
                .to(homeImageWrapper, { borderRadius: '15px' }, '<')
                .add(() => {
                    Flip.from(state, {
                        duration: 2,
                        ease: 'power3.inOut'
                    })
                }, '<');

            return tl;
        }


        const HomeUiAnimation = () => {

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power3.inOut',
                    duration: 1.7,
                    yPercent: 0,
                    y: 0
                }
            });

            tl.to(homeCaption, {
                duration: 1.2,
                ease: 'power3.inOut'
            })
                .to(homeTitle, {
                    stagger: 0.2
                }, '-=0.9')
                .to(homeButton, {
                    autoAlpha: 1
                }, 0.3)

            return tl

        };


        master
            .add(setInitialAnimation())
            .add(homeImageAnimation(), '-=1.5')
            .add(HomeUiAnimation(), '<')



    }, [])





    return (
        <div className='home-container' ref={homeRef}>
            <div ref={homeImageStartRef} className="home-image-start"></div>
            <div className="home__wrapper">
                <section className="home">
                    <div className="home__image" ref={homeImageWrapperRef}>
                        <img className='img-home' src={img} alt="LA river" ref={homeImageRef} />
                    </div>
                    <div className="home__content">
                        <p className="home__caption">
                            <span ref={homeCaptionRef}>Modern aesthetics for your identity.</span>
                        </p>
                        <h1 className="home__title">
                            <span>
                                <span ref={(el) => homeTitleRefs.current.push(el)}>Creative designs,</span>
                            </span>
                            <span>
                                <span ref={(el) => homeTitleRefs.current.push(el)}>Lasting impact.</span>
                            </span>
                        </h1>
                        <Link to='/about'>
                            <p
                                className="home__button button button--white"
                                ref={homeButtonRef}
                            >
                                &gt;&gt; Check it out &lt;&lt;
                            </p>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home