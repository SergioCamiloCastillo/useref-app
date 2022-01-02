import React, { useState, useEffect, useRef } from "react";

export default function ScrollAnimation() {
  const divRef = useRef();

  const [background, setBackground] = useState("pink");
  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      const backgroundColor = y <= 0 ? "orange" : "pink";
      setBackground(backgroundColor);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={divRef} style={{ height: "180vh", background: background }}>
      <h1>scroll to change background-color</h1>
    </div>
  );
}
