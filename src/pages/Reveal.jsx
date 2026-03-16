import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({
  children,
  scrollContainerRef,

  baseOpacity = 0,
  y = 40,

  start = "top 85%",
  delay = 0,

  className = "",
}) => {

  const ref = useRef(null);

  useEffect(() => {

    const el = ref.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current ?? window;

    const ctx = gsap.context(() => {

      gsap.fromTo(
        el,
        {
          opacity: baseOpacity,
          y: y
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            scroller,
            start,
            toggleActions: "play none none reverse"
          }
        }
      );

    }, ref);

    return () => ctx.revert();

  }, [scrollContainerRef, baseOpacity, y, start, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Reveal;