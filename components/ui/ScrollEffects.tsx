"use client";

import { useEffect } from "react";

export function ScrollEffects() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.1, rootMargin: "0px 0px -8%" });
    const observeSections = () => document.querySelectorAll("main > section, main > article").forEach((section) => {
      if (!section.classList.contains("scroll-reveal") && !section.classList.contains("is-revealed")) {
        section.classList.add("scroll-reveal");
        observer.observe(section);
      }
    });
    observeSections();
    const mutations = new MutationObserver(observeSections);
    mutations.observe(document.body, { childList: true, subtree: true });
    return () => { observer.disconnect(); mutations.disconnect(); };
  }, []);

  return null;
}
