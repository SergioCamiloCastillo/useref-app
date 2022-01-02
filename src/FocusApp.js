import React, { useState, useRef } from "react";

export default function FocusApp() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleFocus = () => {
    const input = inputRef.current;
    input.focus();
  };
  return (
    <div>
      <input
        //id="input"
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}
