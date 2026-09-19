"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

export type WorkProject = { title: string; category: string; subcategory?: string; image: string; description?: string };

const filters = ["All", "Graphic Design", "UI/UX & Web Design", "Digital Marketing", "Motion & Design"];
const graphicFilters = ["All", "Banners", "Branding", "Editorial", "Flyers", "Logos", "Merch", "Posters", "Signage"];
const comingSoonCategories = new Set(["Digital Marketing", "Motion & Design"]);

export function WorkPortfolio({ projects }: { projects: WorkProject[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeGraphicFilter, setActiveGraphicFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);
  const visibleProjects = projects.filter((project) => (activeFilter === "All" || project.category === activeFilter) && (activeFilter !== "Graphic Design" || activeGraphicFilter === "All" || project.subcategory === activeGraphicFilter));
  const showComingSoon = comingSoonCategories.has(activeFilter) || visibleProjects.length === 0;
  const selectedProject = selectedIndex === null ? null : visibleProjects[selectedIndex];
  const navigate = (direction: -1 | 1) => setSelectedIndex((current) => current === null ? null : (current + direction + visibleProjects.length) % visibleProjects.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
      if (event.key === "ArrowLeft") navigate(-1);
      if (event.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, visibleProjects.length]);

  const selectFilter = (filter: string) => {
    setActiveFilter(filter);
    setSelectedIndex(null);
    if (filter !== "Graphic Design") setActiveGraphicFilter("All");
  };

  return <>
    <div className="mb-5 flex flex-wrap gap-2">{filters.map((filter) => <button key={filter} onClick={() => selectFilter(filter)} className={`rounded-full px-4 py-2 font-inter text-sm font-semibold transition-colors ${activeFilter === filter ? "bg-[#afe714] text-[#293541]" : "border border-[#293541]/15 bg-white text-[#293541] hover:border-[#293541]/40"}`}>{filter}</button>)}</div>
    {activeFilter === "Graphic Design" && <div className="mb-10 flex flex-wrap gap-2 border-l-2 border-[#afe714] pl-3">{graphicFilters.map((filter) => <button key={filter} onClick={() => { setActiveGraphicFilter(filter); setSelectedIndex(null); }} className={`rounded-full px-3 py-1.5 font-inter text-xs font-semibold transition-colors ${activeGraphicFilter === filter ? "bg-[#293541] text-white" : "border border-[#293541]/15 bg-white text-[#293541] hover:border-[#293541]/40"}`}>{filter}</button>)}</div>}
    {activeFilter !== "Graphic Design" && <div className="mb-10" />}
    {showComingSoon ? (
      <div className="rounded-2xl border border-[#293541]/10 bg-white px-6 py-14 text-center shadow-sm">
        <p className="font-poppins text-2xl font-bold">New work coming soon</p>
        <p className="mt-2 font-inter text-sm text-[#293541]/70">Check back shortly.</p>
      </div>
    ) : (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <article
            key={project.image}
            onClick={() => setSelectedIndex(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setSelectedIndex(index);
            }}
            tabIndex={0}
            role="button"
            className="group flex flex-col justify-between cursor-pointer overflow-hidden rounded-2xl border border-black/[0.08] bg-white shadow-sm outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#afe714]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f1f5f9] flex items-center justify-center p-3 sm:p-4 rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute right-3.5 top-3.5 flex h-9 w-9 items-center justify-center rounded-full bg-[#293541] text-white shadow-md transition-all duration-300 group-hover:bg-[#afe714] group-hover:text-[#293541] group-hover:scale-110">
                <ArrowUpRight size={16} />
              </div>
            </div>
            <div className="p-5 sm:p-6 bg-white border-t border-slate-100 flex-1 flex flex-col justify-between">
              <div>
                <p className="font-inter text-xs font-bold uppercase tracking-wider text-[#293541]/60">
                  {project.subcategory ? `${project.category} · ${project.subcategory}` : project.category}
                </p>
                <h2 className="mt-1.5 font-poppins text-lg sm:text-xl font-bold text-[#293541] group-hover:text-[#293541]">
                  {project.title}
                </h2>
              </div>
            </div>
          </article>
        ))}
      </div>
    )}
    {selectedProject && (
      <div
        role="dialog"
        aria-modal="true"
        aria-label={selectedProject.title}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedIndex(null);
        }}
        onTouchStart={(event) => {
          touchStart.current = event.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(event) => {
          const start = touchStart.current;
          const end = event.changedTouches[0]?.clientX;
          touchStart.current = null;
          if (start !== null && end !== undefined && Math.abs(end - start) > 50)
            navigate(end < start ? 1 : -1);
        }}
        className="fixed inset-0 z-[10000] flex min-h-dvh items-center justify-center overflow-y-auto bg-[#17222c]/95 px-4 py-6 backdrop-blur-md sm:px-10"
      >
        <div
          className="relative flex w-full max-w-6xl flex-col items-center"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="absolute left-0 top-0 z-10 rounded-full border border-white/10 bg-[#202e3a] px-4 py-2 font-inter text-sm font-semibold text-white shadow-lg">
            <span className="text-[#afe714]">{(selectedIndex ?? 0) + 1}</span>
            <span className="text-white/65"> / {visibleProjects.length} · </span>
            {selectedProject.subcategory ?? selectedProject.category}
          </div>
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#202e3a] text-white shadow-lg transition-all hover:border-[#afe714] hover:bg-[#293541] hover:text-[#afe714] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]"
          >
            <X size={20} />
          </button>
          <div className="flex min-h-[70vh] w-full items-center justify-center pt-14">
            <button
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Previous image"
              className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#202e3a] text-white shadow-lg transition-all hover:border-[#afe714] hover:bg-[#293541] hover:text-[#afe714] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              <ArrowLeft size={21} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[72vh] max-w-[calc(100%-6.5rem)] rounded-xl object-contain shadow-[0_24px_70px_rgba(0,0,0,0.6)]"
            />
            <button
              type="button"
              onClick={() => navigate(1)}
              aria-label="Next image"
              className="absolute right-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#202e3a] text-white shadow-lg transition-all hover:border-[#afe714] hover:bg-[#293541] hover:text-[#afe714] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]"
            >
              <ArrowRight size={21} />
            </button>
          </div>
          <div className="mt-5 w-full max-w-xl rounded-2xl border border-white/10 bg-[#202e3a] px-6 py-5 text-center shadow-xl">
            <h2 className="font-poppins text-xl font-bold text-[#afe714]">
              {selectedProject.title}
            </h2>
            <p className="mt-2 font-inter text-sm leading-relaxed text-white/75">
              {selectedProject.description ??
                `${selectedProject.category}${
                  selectedProject.subcategory ? ` · ${selectedProject.subcategory}` : ""
                } project by NEXIV.`}
            </p>
            <p className="mt-3 font-inter text-xs text-white/45">
              Use arrow keys or swipe left/right to navigate gallery.
            </p>
          </div>
        </div>
      </div>
    )}
  </>;
}

