import '../css/menu.css';
import logo from '../assets/logo2.svg'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


const menuLinks = [
    { path: "/", label: "Home" },
    { path: "/work", label: "Work" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" }
]

const NewMenu = () => {
    const container = useRef(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const tl = useRef();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useGSAP(() => {
        gsap.set('.menu-link-item-holder', { y: 75 });

        tl.current = gsap.timeline({ paused: true })
            .to('.menu-overlay', {
                duration: 1.25,
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                ease: 'power4.inOut'
            })
            .to('.menu-link-item-holder', {
                y: 0,
                duration: 1,
                stagger: 0.1,
                ease: 'power4.inOut',
                delay: -0.75
            })

    }, { scope: container });

    useEffect(() => {
        if (isMenuOpen) {
            tl.current.play();
        } else {
            tl.current.reverse();
        }
    }, [isMenuOpen])



    return (
        <div className='body' ref={container}>
            <div className="menu-bar">
                <div className="menu-logo">
                    <Link to='/'>
                        <img className='logo-before' src={logo} alt="" />
                    </Link>
                </div>
                <div className="menu-open" onClick={toggleMenu}><p>Menu</p></div>
            </div>
            <div className="menu-overlay">
                <div className="menu-overlay-bar">
                    <div className="menu-logo">
                        <Link to='/' onClick={toggleMenu}>
                            <img className='logo' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="menu-close" onClick={toggleMenu}>
                        <p>Close</p>
                    </div>
                </div>
                <div className="menu-close-icon" onClick={toggleMenu}>
                    <p>&#x2715;</p>
                </div>
                <div className="menu-copy">
                    <div className="menu-links">
                        {menuLinks.map((link, index) => (
                            <div className='menu-link-item' key={index}>
                                <div className='menu-link-item-holder' onClick={toggleMenu}>
                                    <Link to={link.path} className='menu-link'>{link.label}</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="menu-info">
                        <div className="menu-info-col">
                            <a href="https://www.instagram.com/nesmanpro/" target='_blank' >Instagram &#8599;</a>
                            <a href="https://www.linkedin.com/in/lucasroquecugiani/" target='_blank'>Linkedin &#8599;</a>
                            <a href="https://www.behance.net/nesmanpro" target='_blank'>Behance &#8599;</a>
                        </div>
                        <div className="menu-info-col">
                            <p>hola@nesmanpro.com</p>
                            <p>+34 634561805</p>
                        </div>
                    </div>
                </div>
                <div className="menu-preview">
                    <p>View Showreel</p>
                </div>
            </div>
        </div>
    )
}

export default NewMenu;