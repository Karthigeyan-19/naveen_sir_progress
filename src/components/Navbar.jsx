import { NavLink } from "react-router-dom";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

const links = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Publications", path: "/publications" },
  { name: "Courses", path: "/courses" },
  { name: "Projects", path: "/projects" },
  { name: "Students", path: "/students" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navRef = useRef();
  const linksRef = useRef([]);

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {

      gsap.from(navRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      gsap.from(linksRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        delay: 0.3,
        ease: "power3.out"
      });

    });

    return () => ctx.revert();

  }, []);

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center px-4 pt-6">

      <nav
        ref={navRef}
        className="bg-[#7A1E2C] text-white w-full max-w-6xl rounded-xl shadow-md px-8 py-4 flex items-center justify-between"
      >

        <h1 className="text-lg md:text-xl tracking-wide">
          Dr. Naveen Raj R
        </h1>

        <div className="hidden md:flex gap-8 text-sm font-medium">

          {links.map((link, i) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              ref={(el) => (linksRef.current[i] = el)}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}

        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

      </nav>

      {open && (
        <div className="absolute top-20 bg-[#7A1E2C] w-[90%] max-w-6xl rounded-xl shadow-md flex flex-col gap-4 p-6 md:hidden text-center">

          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="hover:text-[#C9A227]"
            >
              {link.name}
            </NavLink>
          ))}

        </div>
      )}

    </div>
  );
};

export default Navbar;