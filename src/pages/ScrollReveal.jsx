import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  blurStrength = 4,

  // reusable timing controls
  start = 'top 85%',
  end = '+=350',
  scrub = 1.2,
  stagger = 0.08,

  containerClassName = '',
  textClassName = '',
}) => {
  const containerRef = useRef(null);

  // Split into WORDS (not lines yet)
  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-1">
        {word}
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current ?? window;

    const ctx = gsap.context(() => {
      const words = Array.from(el.querySelectorAll('.word'));

      // 🔑 WAIT FOR LAYOUT
      requestAnimationFrame(() => {
        const lines = [];
        let currentLine = [];
        let lastTop = null;

        words.forEach(word => {
          const top = word.getBoundingClientRect().top;

          if (lastTop === null || Math.abs(top - lastTop) < 4) {
            currentLine.push(word);
          } else {
            lines.push(currentLine);
            currentLine = [word];
          }

          lastTop = top;
        });

        if (currentLine.length) lines.push(currentLine);

        // 🔥 LINE-BY-LINE ANIMATION
        lines.forEach(line => {
          gsap.fromTo(
            line,
            {
              opacity: baseOpacity,
              y: 24,
              filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              ease: 'none',
              stagger,
              scrollTrigger: {
                trigger: el,
                scroller,
                start,
                end,
                scrub,
              },
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [
    scrollContainerRef,
    enableBlur,
    baseOpacity,
    blurStrength,
    start,
    end,
    scrub,
    stagger,
  ]);

  return (
    <div ref={containerRef} className={containerClassName}>
      <p className={textClassName}>{splitText}</p>
    </div>
  );
};

export default ScrollReveal;