import { useEffect, useState } from "react";

const MouseParallax = ({ children }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setPos({ x, y });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`
      }}
      className="transition-transform duration-300 ease-out"
    >
      {children}
    </div>
  );
};

export default MouseParallax;