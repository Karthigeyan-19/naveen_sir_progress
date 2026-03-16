import ScrollReveal from "./ScrollReveal";
import Reveal from "./Reveal";

const researchAreas = [
  { title: "Vibration Analysis", desc: "Understanding vibrations in engineering systems." },
  { title: "Dynamics of Engineering Systems", desc: "Modeling complex dynamical engineering systems." },
  { title: "Physics-Informed Neural Networks", desc: "Combining physics laws with neural networks." },
  { title: "Inverse Problems", desc: "Estimating unknown parameters from data." },
  { title: "Scientific Machine Learning", desc: "Integrating machine learning with physics models." },
  { title: "System Identification", desc: "AI driven monitoring and parameter estimation." }
];

const ResearchAreas = () => {
  const colors = ["#7a1e2c", "#c9a227"]; // Teal and Magenta

  return (
    <section id="research" className="pt-24 pb-12 bg-[#f5ede4]">

      {/* Section Title */}
      <ScrollReveal
        textClassName="w-full text-5xl text-center text-[#7A1E2C] font-bold mb-16 tracking-[0.1em] font-[Nasalization]"
      >
        RESEARCH AREAS
      </ScrollReveal>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6 place-items-center md:place-items-stretch">

        {researchAreas.map((area, i) => (
          <Reveal key={i} delay={i * 0.15}>
              <div className="research-card">
                <h3 className="research-title">{area.title}</h3>
                <p className="research-para">{area.desc}</p>
              </div>
          </Reveal>
        ))}

      </div>

    </section>
  );
};

export default ResearchAreas;