import React, { useRef, useEffect } from "react";
import naveenImg from "./naveen_sir_profile-removebg-preview.png";
import gsap from "gsap";

const Landing = () => {

    const textRef = useRef(null);
    const imgRef = useRef(null);
    const degreeRef = useRef(null);

    useEffect(() => {

        gsap.fromTo(
            textRef.current,
            { y: 100, opacity: 0 },
            { y: -120, opacity: 1, duration: 1.2, ease: "power3.out" }
        );

        gsap.fromTo(
            imgRef.current,
            { y: 120, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.4, delay: 0.3, ease: "power3.out" }
        );

        gsap.fromTo(
            degreeRef.current,
            { x: 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power3.out" }
        );

    }, []);

    return (
        <section className="hero relative z-10">

            <h1
                ref={textRef}
                className="hero-bg-text"
                aria-hidden="true"
            >
                DR. NAVEEN RAJ RAJAMANI
            </h1>

            <img
                ref={imgRef}
                src={naveenImg}
                alt="Dr. Naveen Raj Rajamani"
                className="hero-image"
            />

            {/* Degree text */}
            {/* <div ref={degreeRef} className="hero-degree">
                M.S., Ph.D
            </div> */}

        </section>
    );
};


export default Landing;