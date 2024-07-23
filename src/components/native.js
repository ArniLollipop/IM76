"use client";

import Script from "next/script";
import { useEffect } from "react";

export default function AddNative({ children }) {
  useEffect(() => {
    const initAOS = () => {
      console.log(AOS);
      if (typeof AOS !== "undefined") {
        AOS.init();
      }
    };

    initAOS();
  }, []);

  return (
    <>
      {children}
      <Script src="/app.js" />
      <Script id="aos-init" />
    </>
  );
}
