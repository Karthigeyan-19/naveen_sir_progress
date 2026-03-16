import { useEffect, useState } from "react";

const ScientificGrid = () => {

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const grid = 42;

  return (
    // <div
    //   className="fixed inset-0 -z-10"
    //   style={{
    //     transform: `translate(${pos.x * 0.008}px, ${pos.y * 0.008}px)`,

    //     backgroundColor: "#f8f8ff",

    //     backgroundImage: `
    //       linear-gradient(rgba(168, 45, 93, 0.4) 1px, transparent 1px),
    //       linear-gradient(90deg, rgba(168, 45, 93, 0.4) 1px, transparent 1px),
    //       radial-gradient(circle, #c9a227 2px, transparent 1px)
    //     `,

    //     backgroundSize: `
    //       ${grid}px ${grid}px,
    //       ${grid}px ${grid}px,
    //       ${grid}px ${grid}px
    //     `
    //   }}
    // />
    console.log("F")
  );
};

export default ScientificGrid;