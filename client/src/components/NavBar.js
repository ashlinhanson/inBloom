// import React from "react";
import React, { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { gsap, TimelineLite, Power3 } from 'gsap';

function Navbarr() {

    let tl = new TimelineLite({ delay: 0.8 })

    useEffect(() => {

        tl.from('.homes', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.1 }, 'Start')
        tl.from('.about', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.2 }, 'Start')
        tl.from('.contact', { x: 15, opacity: 0, ease: Power3.easeOut, delay: 0.3 }, 'Start')
    }, []);


    return (

        <Navbar className="sub" expand="lg" fixed="top" bg="transparent" variant="light">
            <Nav defaultActiveKey="/home" className="flex-column mt-3 ml-auto">
                <Nav.Link className="sub homes" href="/home">H O M E</Nav.Link>
                <Nav.Link className="sub about" href="/about">A B O U T</Nav.Link>
                <Nav.Link className="sub contact" href="/contact">C O N T A C T</Nav.Link>
            </Nav>
        </Navbar>

    )
};

export default Navbarr;
