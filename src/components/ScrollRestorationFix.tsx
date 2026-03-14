"use client";

import { useEffect } from "react";

export default function ScrollRestorationFix() {
  useEffect(() => {
    // Prevent the browser from restoring scroll position to the footer on refresh
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return null;
}
