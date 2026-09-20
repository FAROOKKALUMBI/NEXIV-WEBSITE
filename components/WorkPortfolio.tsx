"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";

export type WorkProject = {
  title: string;
  category: string;
  subcategory?: string;
  image: string;
  description?: string;
};

const filters = [
  "All",
  "Graphic Design",
  "UI/UX & Web Design",
  "Digital Marketing",
  "Motion & Design",
];
const graphicFilters = [
  "All",
  "Banners",
  "Branding",
  "Editorial",
  "Flyers",
  "Logos",
  "Merch",
  "Posters",
  "Signage",
];
const comingSoonCategories = new Set(["Digital Marketing", "Motion & Design"]);

export function WorkPortfolio({ projects }: { projects: WorkProject[] }) {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeGraphicFilter, setActiveGraphicFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const visibleProjects = projects.filter(
    (project) =>
      (activeFilter === "All" || project.category === activeFilter) &&
      (activeFilter !== "Graphic Design" ||
        activeGraphicFilter === "All" ||
        project.subcategory === activeGraphicFilter)
  );

  const showComingSoon =
    comingSoonCategories.has(activeFilter) || visibleProjects.length === 0;
  const selectedProject =
    selectedIndex === null ? null : visibleProjects[selectedIndex];

  const navigate = (direction: -1 | 1) =>
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current + direction + visibleProjects.length) %
          visibleProjects.length
    );

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

  return (
    <>
      {/* Category filters */}
      <div className="mb-5 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => selectFilter(filter)}
            className={`rounded-full px-4 py-2 font-inter text-sm font-semibold transition-colors ${
              activeFilter === filter
                ? "bg-[#afe714] text-[#293541]"
                : "border border-[#293541]/15 bg-white text-[#293541] hover:border-[#293541]/40"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Subcategory filters for Graphic Design */}
      {activeFilter === "Graphic Design" && (
        <div className="mb-8 flex flex-wrap gap-2 border-l-2 border-[#afe714] pl-3">
          {graphicFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveGraphicFilter(filter);
                setSelectedIndex(null);
              }}
              className={`rounded-full px-3 py-1.5 font-inter text-xs font-semibold transition-colors ${
                activeGraphicFilter === filter
                  ? "bg-[#293541] text-white"
                  : "border border-[#293541]/15 bg-white text-[#293541] hover:border-[#293541]/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {activeFilter !== "Graphic Design" && <div className="mb-8" />}

      {/* Pinterest-style Masonry Grid */}
      {showComingSoon ? (
        <div className="rounded-2xl border border-[#293541]/10 bg-white px-6 py-14 text-center shadow-sm">
          <p className="font-poppins text-2xl font-bold">New work coming soon</p>
          <p className="mt-2 font-inter text-sm text-[#293541]/70">
            Check back shortly.
          </p>
        </div>
      ) : (
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 [column-fill:_balance]">
          {visibleProjects.map((project, index) => (
            <article
              key={project.image}
              onClick={() => setSelectedIndex(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ")
                  setSelectedIndex(index);
              }}
              tabIndex={0}
              role="button"
              className="group relative mb-3 sm:mb-4 inline-block w-full cursor-pointer overflow-hidden rounded-2xl break-inside-avoid bg-slate-900/5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:ring-2 focus-visible:ring-[#afe714] outline-none"
            >
              {/* Full-bleed flyer image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-auto block rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
              />

              {/* Small floating pill-shaped label on top-left corner */}
              <div className="absolute left-2.5 top-2.5 sm:left-3 sm:top-3 z-10 rounded-full bg-black/65 px-2.5 py-1 sm:px-3 sm:py-1 font-inter text-[11px] sm:text-xs font-semibold text-white backdrop-blur-md shadow-sm pointer-events-none select-none">
                {project.subcategory ?? project.category}
              </div>

              {/* Hover-only Top-Right Action Button */}
              <div className="absolute right-2.5 top-2.5 sm:right-3 sm:top-3 z-10 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/65 text-white backdrop-blur-md opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                <ArrowUpRight size={14} className="sm:w-4 sm:h-4" />
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Lightbox / Modal */}
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
              <span className="text-white/65">
                {" "}
                / {visibleProjects.length} ·{" "}
              </span>
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
                    selectedProject.subcategory
                      ? ` · ${selectedProject.subcategory}`
                      : ""
                  } project by NEXIV.`}
              </p>
              <p className="mt-3 font-inter text-xs text-white/45">
                Use arrow keys or swipe left/right to navigate gallery.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
