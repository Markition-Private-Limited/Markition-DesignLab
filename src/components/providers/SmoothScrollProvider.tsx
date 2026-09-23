"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,          // friction — lower = heavier, more cinematic drag
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      /* Broadcast target (unsmoothed) scroll so sticky sections can
         respond instantly rather than waiting for lerp to catch up. */
      document.dispatchEvent(
        new CustomEvent("lenis-target-scroll", {
          detail: { targetScroll: (lenis as unknown as { targetScroll: number }).targetScroll },
        })
      );
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
