import ScrollReveal from "./ScrollReveal";
import Reveal from "./Reveal";
import img41 from "../assets/image41.png"
import img42 from "../assets/image42.png"
import img43 from "../assets/image43.png"
import img44 from "../assets/image44.png"
import img45 from "../assets/image45.png"
import img46 from "../assets/image46.png"
import img47 from "../assets/image47.png"
import img48 from "../assets/image48.png"
import img49 from "../assets/image49.png"

const courses = [
  {
    code: "ME1109",
    title: "Strength of Materials",
    icon: img41,
  },
  {
    code: "ME1098",
    title: "Applied Machine Learning for Mechanical Engineers",
    icon: img42,
  },
  {
    code: "ME1050",
    title: "Finite Element Analysis",
    icon: img43,
  },
  {
    code: "ME1099",
    title: "Optimization Techniques for Engineering Design",
    icon: img44,
  },
  {
    code: "ME1069",
    title: "Operations Research",
    icon: img45,
  },
  {
    code: "ME307",
    title: "Computer Aided Design",
    icon: img46,
  },
  {
    code: "ME306",
    title: "Computational Fluid Dynamics",
    icon: img47,
  },
  {
    code: "ME312",
    title: "Computer Aided Design Laboratory",
    icon: img48,
  },
  {
    code: "ME316",
    title: "Simulation Laboratory",
    icon: img49,
  }
];

const Courses = () => {
  return (
    <section className="pt-14 pb-24 bg-[#f5ede4]">

      {/* TITLE */}
      <ScrollReveal
        textClassName="w-full text-5xl text-center text-[#7A1E2C] font-bold mb-20 tracking-[0.15em] font-[Nasalization]"
      >
        COURSES TAUGHT
      </ScrollReveal>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">

        {courses.map((course, i) => (
          <Reveal key={i} delay={i * 0.12}>

            <div className="courses-card flex flex-col items-center text-center">

              {/* ICON */}
              <img
                src={course.icon}
                alt={course.title}
                className="course-icon"
              />

              {/* CODE */}
              <h3 className="courses-title mt-3">
                {course.code}
              </h3>

              {/* TITLE */}
              <p className="courses-para mt-2">
                {course.title}
              </p>

            </div>

          </Reveal>
        ))}

      </div>

    </section>
  );
};

export default Courses;