import BlurText from "./BlurText";
import ScrollReveal from "./ScrollReveal";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Home = () => {
  return (
    <div className="flex justify-center w-full  px-6">

      {/* MAIN CARD */}
      <div className="bg-white rounded-3xl shadow-xl max-w-6xl w-full p-12">

        {/* HERO SECTION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-6 text-left">

            <h2 className="text-5xl font-bold text-[#1B263B] uppercase">
              <BlurText
                text="Dr. Naveen Raj Rajamani M.S., Ph.D."
                delay={200}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
              />
            </h2>

            <p className="text-lg text-[#415A77] max-w-xl">
              Assistant Professor, Department of Mechanical Engineering,
              National Institute of Technology Puducherry.
            </p>

            <div className="mt-4">

              <span className="font-semibold uppercase text-[#1B263B]">
                Research Interests
              </span>

              <ul className="mt-3 space-y-1 text-[#212529]">
                <li>Scientific Machine Learning</li>
                <li>AI-Enhanced Mechanical Engineering</li>
                <li>Optimization Techniques</li>
                <li>Artificial Intelligence for Predictive Maintenance</li>
                <li>Signal Analysis</li>
              </ul>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">

            <img
              src="/profile.jpg"
              alt="profile"
              className="w-100 rounded-full object-cover shadow-xl border-4 border-[#1B263B]"
            />

          </div>

        </div>


        {/* ABOUT SECTION */}
        <div className="flex flex-col items-center mt-20 gap-6 text-center">

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            blurStrength={4}
            end="+=30"
            scrub={0.8}
            stagger={0.05}
            containerClassName="uppercase"
            textClassName="text-3xl font-bold text-[#1B263B]"
          >
            ABOUT ME
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            end="+=30"
            scrub={1.6}
            stagger={0.12}
            blurStrength={4}
            textClassName="text-base leading-relaxed max-w-3xl text-[#415A77]"
          >
            After my Ph.D I worked with ADOPT LAB in IIT Madras, headed by Prof.
            Palaniappan Ramu. I worked closely with Measured Inc as a Data
            Scientist, developing cutting edge algorithms for marketing data
            analytics using ML/DL and time series analysis techniques. At ADOPT
            we also worked on various other industrial projects such as anomaly
            detection from big data of images and research projects involving
            Bayesian Optimization and self organizing maps for time series.
          </ScrollReveal>

          <ScrollReveal
            baseOpacity={0.1}
            enableBlur
            baseRotation={3}
            end="+=20"
            scrub={1.6}
            stagger={0.12}
            blurStrength={4}
            textClassName="text-base leading-relaxed max-w-3xl text-[#415A77]"
          >
            I obtained my Ph.D from the Department of Mechanical Engineering,
            IIT Madras in 2021 under the guidance of Prof. Shankar
            Krishnapillai. My Ph.D research focused on improving the
            performance of aircraft seat ejection systems in low altitudes.
            The primary objectives of the research were to:
          </ScrollReveal>

          <ul className="space-y-2 text-[#212529] max-w-3xl">

            <li>
              <ScrollReveal end="+=10" scrub={1.2} stagger={0.06}>
                Develop enhanced injury parameters for spinal injury prediction
              </ScrollReveal>
            </li>

            <li>
              <ScrollReveal end="+=10" scrub={1.2} stagger={0.06}>
                Use soft computing techniques such as multi-objective
                optimization, fuzzy logic, and artificial neural networks for
                accurate ejection seat control
              </ScrollReveal>
            </li>

          </ul>

        </div>

      </div>

    </div>
  );
};

export default Home;