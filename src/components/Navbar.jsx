import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Research", path: "/research" },
  { name: "Publications", path: "/publications" },
  { name: "Courses", path: "/courses" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
  { name: "Students", path: "/students" },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-center w-full pt-4">
      <nav className="backdrop-blur-md bg-white/70 border border-slate-200 shadow-md rounded-2xl px-8 py-4 flex items-center gap-12">

        <h1 className="text-xl font-semibold text-primary whitespace-nowrap">
          Dr. Naveen Raj R
        </h1>

        <div className="flex gap-6 items-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "nav-active" : ""}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </nav>
    </div>
  );
};

export default Navbar;