import React, {useEffect} from 'react';
import rightpalm from "../images/rightpalm.svg";
import leftpalm from "../images/leftpalm.svg";

import gsap from 'gsap';


const Palms = () => {


// gsap animation

useEffect(() => {

    gsap.from('.inbloom', {duration:4, opacity:0})
    gsap.from('#login-container', {duration:4, opacity:0})
    gsap.to('.leftpalm-1', { duration: 4, ease: "slow.out", transformOrigin: 'left bottom', rotate: -75 })

    gsap.to('.rightpalm-1', { duration: 4.5, ease: "slow.out", transformOrigin: 'right bottom', rotate: 75 })
    gsap.to('.leftpalm-2', { duration: 3, ease: "slow.out", transformOrigin: 'left bottom', rotate: -75 })
    gsap.to('.rightpalm-2', { duration: 3.5, ease: "slow.out", transformOrigin: 'right bottom', rotate: 75 })
    gsap.to('.leftpalm-3', { duration: 2, ease: "slow.out", transformOrigin: 'left bottom', rotate: -75 })
    gsap.to('.rightpalm-3', { duration: 2.5, ease: "slow.out", transformOrigin: 'right bottom', rotate: 75 })
    gsap.to('.leftpalm-4', { duration: 2.2, ease: "slow.out", transformOrigin: 'left bottom', rotate: -75 })
    gsap.to('.rightpalm-4', { duration: 2.3, ease: "slow.out", transformOrigin: 'right bottom', rotate: 75 })
    gsap.to('.leftpalm-5', { duration: 2.1, ease: "slow.out", transformOrigin: 'left bottom', rotate: -75 })
    gsap.to('.rightpalm-5', { duration: 2.1, ease: "slow.out", transformOrigin: 'right bottom', rotate: 75 })
    gsap.to('.leftpalm-6', { duration: 2.2, ease: "slow.out", transformOrigin: 'left bottom', rotate: -75 })
    gsap.to('.rightpalm-6', { duration: 2, ease: "slow.out", transformOrigin: 'right bottom', rotate: 75 })
},
     []);


    return (
        <>
              
    <img className="leftpalm-1" src={leftpalm}></img>
    <img className="rightpalm-1" src={rightpalm}></img>
    <img className="leftpalm-2" src={leftpalm}></img>
    <img className="rightpalm-2" src={rightpalm}></img>
    <img className="leftpalm-3" src={leftpalm}></img>
    <img className="rightpalm-3" src={rightpalm}></img>
    <img className="leftpalm-4" src={leftpalm}></img>
    <img className="rightpalm-4" src={rightpalm}></img>
    <img className="leftpalm-5" src={leftpalm}></img>
    <img className="rightpalm-5" src={rightpalm}></img>
    <img className="leftpalm-6" src={leftpalm}></img> 
    <img className="rightpalm-6" src={rightpalm}></img> 
   
   
    
     
 

        </>
    );
}

export default Palms;
  


  