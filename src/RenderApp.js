import React, { useState, useEffect, useRef, Children } from "react";

export default function RenderApp() {
  const [text, setText] = useState("");
  const rendersRef = useRef(1);
  useEffect(() => {
    rendersRef.current++;
    console.log( rendersRef.current)
  });
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
