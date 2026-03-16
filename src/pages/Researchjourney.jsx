import ScrollReveal from "./ScrollReveal";
import Reveal from "./Reveal";

const ResearchJourney = () => {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-[#f5ede4]">

      {/* Title */}
      <ScrollReveal
        textClassName="w-full text-3xl md:text-5xl uppercase text-center text-[#7A1E2C] font-bold mb-12 md:mb-16 tracking-[0.25em] font-[Nasalization]"
      >
        Research Journey
      </ScrollReveal>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 px-4 md:px-6 place-items-center md:place-items-stretch">

        {/* ADOPT */}
        <Reveal>
          
            <div className="journey-card">
              <h3 className="journey-title">
                ADOPT Lab – IIT Madras
              </h3>

              <p className="journey-para py-5">
                Following my Ph.D., I worked with the ADOPT Lab at IIT Madras,
                headed by Prof. Palaniappan Ramu. I also collaborated with
                Measured Inc. as a Data Scientist developing machine learning
                and deep learning algorithms for large-scale data analytics
                and time-series modeling.
              </p>

              <p className="journey-para">
                My work included industrial research projects such as anomaly
                detection in large-scale image datasets, Bayesian optimization,
                and data-driven time-series analysis.
              </p>
            </div>
        </Reveal>

        {/* PHD */}
        <Reveal delay={0.15}>
            <div className="journey-card">
              <h3 className="journey-title">
                Ph.D – IIT Madras (2021)
              </h3>

              <p className="journey-para py-5">
                I obtained my Ph.D. in Mechanical Engineering from IIT Madras
                under the guidance of Prof. Shankar Krishnapillai.
              </p>

              <p className="journey-para">
                My doctoral research focused on improving aircraft seat
                ejection systems in low-altitude conditions using dynamics,
                modeling, and computational methods for safety-critical
                systems.
              </p>
            </div>
        </Reveal>

      </div>
    </section>
  );
};

export default ResearchJourney;