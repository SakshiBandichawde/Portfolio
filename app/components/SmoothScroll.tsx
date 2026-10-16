"use client";

import { type ReactNode, useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;
    function syncPreference() {
      lenis?.destroy();
      lenis = preference.matches ? undefined : new Lenis({
        duration: 1.05,
        smoothWheel: true,
        autoRaf: true,
        anchors: { offset: -100 },
      });
    }
    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => {
      preference.removeEventListener("change", syncPreference);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
