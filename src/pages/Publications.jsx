import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";
import Reveal from "./Reveal";
import { contain } from "three/src/extras/TextureUtils";

gsap.registerPlugin(ScrollTrigger);

const publications = [

  {
    type: "journal",
    year: 2025,
    title: "FIM-Guided PINNs for Real-Time Parameter Identification in Digital Twins of Nonlinear Vibratory Systems",
    authors: "R Naveen Raj, Santo Banerjee",
    venue: "Knowledge Based Systems"
  },

  {
    type: "journal",
    year: 2024,
    title: "Polymer gear failure prediction: A regression-Based approach using FEA and photoelasticity technique",
    authors: "Sugunesh A. P., S. Vignesh, A. Johnney Mertens, R Naveen Raj",
    venue: "Engineering Failure Analysis"
  },

  {
    type: "journal",
    year: 2023,
    title: "A Two stage Neural Network For Choosing Optimal Ejection Parameters in Low Altitude Seat Ejection Based on Novel Injury Parameter",
    authors: "Naveen Raj R, K Shankar",
    venue: "Optimization and Engineering – Springer"
  },

  {
    type: "journal",
    year: 2022,
    title: "An Improved Spinal Injury Parameter Model for Under Body Impulsive Loading Scenarios",
    authors: "Naveen Raj R, K Shankar",
    venue: "International Journal of Numerical Methods in Biomedical Engineering – Wiley"
  },

  {
    type: "journal",
    year: 2020,
    title: "Multi Objective Optimization of Low Altitude Seat Ejections with Fuzzy Logic Based Decision Making",
    authors: "Naveen Raj R, K Shankar",
    venue: "Journal of Human Factors and Mechanical Engineering for Defense and Safety – Springer"
  },

  {
    type: "journal",
    year: 2025,
    title: "Modal Physics-Informed Neural Networks for Forward and Inverse Structural Vibration Problems",
    authors: "Asok R, Naveen Raj R",
    venue: "Under Review",
    status: "review"
  },

  {
    type: "journal",
    year: 2025,
    title: "Model-Free Vibration Control with Zero-Shot Generalization: A Deep Reinforcement Learning Approach for Systems with Parameter Uncertainty",
    authors: "Ramkumar P, R Naveen Raj",
    venue: "Under Review",
    status: "review"
  },

  {
    type: "journal",
    year: 2025,
    title: "SEAVIN: A Physics Informed Feature Fusion Framework for Robust Underwater Monocular Depth Estimation",
    authors: "Chamakura Sai Kumar, Naveen Raj R, Ravivarman R",
    venue: "Under Review",
    status: "review"
  },

  {
    type: "conference",
    year: 2024,
    title: "Spectral Bias of Physics Informed Neural Network for Structural Dynamics Systems",
    authors: "Naveen Raj R",
    venue: "International Congress of Sound and Vibration – Amsterdam"
  },

  {
    type: "conference",
    year: 2024,
    title: "Physics Informed Neural Network for Solution of Duffing Oscillators",
    authors: "Naveen Raj R",
    venue: "ICNDA 2024 – Springer"
  },

  {
    type: "conference",
    year: 2025,
    title: "Latent Space Learning for Wind Turbine Blade Fault Diagnosis Using 1D CNN Variational Autoencoder",
    authors: "Arul Pradeep, Kevin P, Naveen Raj R",
    venue: "VETOMAC 2025 – Springer"
  },

  {
    type: "conference",
    year: 2025,
    title: "Model-Free Active Vibration Control of Linear SDOF Systems Using Reinforcement Learning",
    authors: "Ramkumar P, Naveen Raj R",
    venue: "VETOMAC 2025 – Springer"
  },

  {
    type: "conference",
    year: 2025,
    title: "Predictive Maintenance of Wind Turbine Gearboxes Using Spectrogram-Based CNN",
    authors: "Devansh S, Saranya M, Kavyashree U, Naveen Raj R",
    venue: "VETOMAC 2025 – Springer"
  },

  {
    type: "conference",
    year: 2024,
    title: "Detection and Monocular Depth Estimation of Ghost Nets",
    authors: "Mohammed Ayaan, Naveen Raj R",
    venue: "Computer Vision and Image Processing 2024 – Springer"
  },

  {
    type: "conference",
    year: 2024,
    title: "Spectral Bias of Physics Informed Neural Network for Structural Dynamics Systems",
    authors: "Naveen Raj R",
    venue: "International Congress of Sound and Vibration – Amsterdam"
  },

  {
    type: "conference",
    year: 2025,
    title: "Reinforcement Learning for Continuous Active Vibration Suppression in Dynamic Systems",
    authors: "Ramkumar P, Naveen Raj R",
    venue: "ICOVP & WMVC 2025"
  },

  {
    type: "conference",
    year: 2025,
    title: "Reinforcement Learning for Continuous Active Vibration Suppression in Dynamic Systems",
    authors: "Ramkumar P, Naveen Raj R",
    venue: "ICOVP & WMVC 2025"
  },

  {
    type: "conference",
    year: 2017,
    title: "A Multi-Objective Optimization Study Of Parameters For Low-Altitude Seat Ejections",
    authors: "Naveen Raj R, K Shankar",
    venue: "SocPros 2017 – IIT Bhubaneswar"
  },

  {
    type: "conference",
    year: 2018,
    title: "Using a Coupled MDOF Bio-dynamic Model to Study the Effect of Curvature of Spine on Lumbar Spine Compression Under Axial Loads",
    authors: "Naveen Raj R, K Shankar",
    venue: "WorldBioCom 2018 – London"
  }

];

const Publications = () => {

  const containerRef = useRef();
  const topbarRef = useRef();
  const timelineRef = useRef();
  const filterRef = useRef();

  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? publications
      : publications.filter(p => p.type === filter);


  useEffect(() => {

    const ctx = gsap.context(() => {

      /* -----------------------------
         TOPBAR ENTRY ANIMATION
      ------------------------------*/

      const tl = gsap.timeline();

      tl.from(".pub-count", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })

        .from(".pub-filters button", {
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.6,
          ease: "power2.out"
        }, "-=0.4");


      /* -----------------------------
         COUNT NUMBER ANIMATION
      ------------------------------*/

      let counter = { value: 0 };

      gsap.to(counter, {
        value: filtered.length,
        duration: 1.4,
        ease: "power2.out",
        onUpdate: () => {
          const el = document.querySelector(".pub-count-number");
          if (el) el.textContent = Math.floor(counter.value);
        }
      });

    }, containerRef);

    gsap.utils.toArray(".pub-filters button").forEach(btn => {

      btn.addEventListener("mouseenter", () => {

        gsap.to(btn, {
          scale: 1.08,
          duration: 0.2,
          ease: "power2.out"
        });

      });

      btn.addEventListener("mouseleave", () => {

        gsap.to(btn, {
          scale: 1,
          duration: 0.2
        });

      });

    });

    return () => ctx.revert();

  }, []);

  useEffect(() => {

    const indicator = filterRef.current?.querySelector(".filter-indicator");
    const activeBtn = filterRef.current?.querySelector("button.active");

    if (!indicator || !activeBtn) return;

    gsap.set(indicator, {
      x: activeBtn.offsetLeft,
      width: activeBtn.offsetWidth
    });

  }, []);

  useEffect(() => {

    const indicator = filterRef.current?.querySelector(".filter-indicator");
    const activeBtn = filterRef.current?.querySelector("button.active");

    if (!indicator || !activeBtn) return;

    const x = activeBtn.offsetLeft;
    const w = activeBtn.offsetWidth;

    gsap.to(indicator, {
      x: x,
      width: w,
      duration: 0.45,
      ease: "power3.out"
    });

  }, [filter]);

  return (

    <section ref={containerRef} className="pt-14 pb-24 bg-[#f5ede4]">

      <ScrollReveal
        textClassName="w-full text-3xl md:text-5xl text-center text-[#7A1E2C] font-bold mb-10 tracking-[0.15em] font-[Nasalization]"
      >
        PUBLICATIONS
      </ScrollReveal>

      <div ref={topbarRef} className="pub-topbar">

        <div className="pub-count">
          <span className="pub-count-number">{filtered.length}</span> {filter === "all" ? "Publications" : filter === "journal" ? "Journals" : "Conferences"}
        </div>

        <div className="pub-filters" ref={filterRef}>

          <div className="filter-indicator"></div>

          <button
            data-type="all"
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            data-type="journal"
            className={filter === "journal" ? "active" : ""}
            onClick={() => setFilter("journal")}
          >
            Journals
          </button>

          <button
            data-type="conference"
            className={filter === "conference" ? "active" : ""}
            onClick={() => setFilter("conference")}
          >
            Conferences
          </button>

        </div>

      </div>

      <div ref={timelineRef} className="timeline" key={filter}>

        {filtered.map((pub, i) => (

          <Reveal key={i} delay={i * 0.06}>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <div className="pub-meta">

                  <span className="pub-year">{pub.year}</span>

                  <span className={`pub-type ${pub.type}`}>
                    {pub.type}
                  </span>

                  {pub.status === "review" &&
                    <span className="review-badge">Under Review</span>
                  }

                </div>

                <h3 className="pub-title">{pub.title}</h3>

                <p className="pub-authors">{pub.authors}</p>

                <p className="pub-venue">{pub.venue}</p>

              </div>

            </div>

          </Reveal>

        ))}

      </div>

    </section>

  )

}

export default Publications;