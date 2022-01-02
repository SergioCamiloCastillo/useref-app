import React, { useRef, useState } from "react";

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef();
  const handleVerify = () => {
    const video = videoRef.current;
    setIsPlaying(!isPlaying);
    if(!isPlaying){
        video.play();

    }else{
        video.pause();

    }
  };

  return (
    <div>
      <video onClick={handleVerify} ref={videoRef} width="400">
        <source type="video/mp4" src="videos/videoplanet.mp4"></source>
      </video>
      <br />
      <button onClick={handleVerify}>
        {isPlaying ? <span>Stop</span> : <span>Play</span>}
      </button>
    </div>
  );
}
