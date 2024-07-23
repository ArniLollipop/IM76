"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import AnimateIn from "./animation";

export default function Template({ children }) {
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useEffect(() => {
    if (!hasRendered) {
      return;
    }
    const handleDOMContentLoaded = () => {
      if (typeof AOS !== "undefined") {
        AOS.init();
      }
      setTimeout(() => {
        AnimateIn();
      }, 0);
    };

    handleDOMContentLoaded();
  }, [hasRendered]);

  return <>{children}</>;
}
