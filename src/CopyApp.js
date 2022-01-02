import React, { useState, useRef } from "react";

export default function CopyApp() {
  const [text, setText] = useState("");
  const [isCopy, setIsCopy] = useState(false);
  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy"); //copiar texto seleccionado
    setIsCopy(true);
    setTimeout(() => {
      //esperar dos segundos para luego ejecutar funciones
      setIsCopy(false);
    }, 2000);
  };
  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleCopy}>Copy</button>
      {isCopy && <h1>Copiado</h1>}
    </div>
  );
}
