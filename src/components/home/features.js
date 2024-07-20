"use client";

import { useRef, useEffect } from "react";

export default function MainFeatures() {
  const video = useRef(null);

  useEffect(() => {
    if (video.current) {
      video.current.currentTime = 9;
    }
  }, []);

  return (
    <section className="features section container">
      <h3>
        <span className="outlined-text">Reliable</span> Protection
      </h3>
      <video
        ref={video}
        controls={false}
        autoPlay
        muted
        loop
        width={1920}
        height={1080}>
        <source src="/im76_video.mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
