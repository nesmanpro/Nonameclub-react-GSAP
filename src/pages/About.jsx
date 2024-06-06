import '../css/about.css';
import img1 from '../assets/img/nnc1.jpg';
import img2 from '../assets/img/nnc2.jpg';
import img3 from '../assets/img/nnc3.jpg';
import img4 from '../assets/img/nnc4.jpg';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);


const About = () => {

    const containerAbout = useRef(null);

    useGSAP(() => {







        ScrollTrigger.create({
            trigger: '.wrapper-about',
            start: 'top top',
            end: '+=1300vh',
            scrub: 1,
            pin: true,
            onUpdate: (self) => {
                gsap.to('.wrapper-about', {
                    x: `${-1200 * self.progress}vw`,
                    duration: 0.5,
                    ease: 'power3.out'
                })
            }
        });

        const cards = [
            { id: '#card-1', endTranslateX: -2000, rotate: 45 },
            { id: '#card-2', endTranslateX: -1000, rotate: -30 },
            { id: '#card-3', endTranslateX: -2000, rotate: 45 },
            { id: '#card-4', endTranslateX: -1500, rotate: -30 }
        ];




        cards.forEach((card) => {
            ScrollTrigger.create({
                trigger: 'card.id',
                start: 'top top',
                end: '+=1000vh',
                scrub: 1,
                onUpdate: (self) => {
                    gsap.to(card.id, {
                        x: `${card.endTranslateX * self.progress}px`,
                        rotate: `${card.rotate * self.progress * 1.5}`,
                        duration: 0.5,
                        ease: 'power3.out'
                    })
                }
            });
        });

    }, { scope: containerAbout })


    return (
        <div className='container-about' ref={containerAbout}>
            <section className="wrapper-about">
                <h1 className='h1'>We are No Name Club</h1>
                <div className="card" id="card-1">
                    <img src={img1} alt="" />
                </div>
                <div className="card" id="card-2">
                    <img src={img2} alt="" />
                </div>
                <div className="card" id="card-3">
                    <img src={img3} alt="" />
                </div>
                <div className="card" id="card-4">
                    <img src={img4} alt="" />
                </div>
            </section>
            <section className="outro">
                <h1>
                    This page doesn&apos;t show you what we are...<br /> but that&apos;s okay. <br />
                    It shows you what we want to be!!
                </h1>
            </section>

        </div>
    )
}

export default About