import { readdirSync } from "fs";
import { join } from "path";
import { Footer } from "@/components/layout/Footer";
import { PageProjectCta } from "@/components/PageProjectCta";
import { WorkPortfolio, type WorkProject } from "@/components/WorkPortfolio";

const publicWorkDirectory = join(process.cwd(), "public", "work");
const graphicSubfolders = ["Banners", "Branding", "Editorial", "Flyers", "Logos", "Merch", "Posters", "Signage"];
const imageFile = (name: string) => /\.(avif|gif|jpe?g|png|webp)$/i.test(name);
const publicPath = (...parts: string[]) => `/work/${parts.map(encodeURIComponent).join("/")}`;

function titleFromFilename(filename: string, fallback: string, index: number) {
  const name = filename.replace(/\.[^.]+$/, "");
  if (/^photo[_-]/i.test(name) || /^untitled$/i.test(name)) return `${fallback} Project ${index + 1}`;
  return name.replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim();
}

function filesFor(directory: string) {
  return readdirSync(directory, { withFileTypes: true }).filter((entry) => entry.isFile() && imageFile(entry.name)).map((entry) => entry.name).sort((a, b) => a.localeCompare(b));
}

function getProjects(): WorkProject[] {
  const graphicProjects = graphicSubfolders.flatMap((subcategory) => filesFor(join(publicWorkDirectory, "graphic-design", subcategory)).map((filename, index) => ({ title: titleFromFilename(filename, subcategory, index), category: "Graphic Design", subcategory, image: publicPath("graphic-design", subcategory, filename) })));
  const webProjects = filesFor(join(publicWorkDirectory, "ui-ux-web-design")).map((filename, index) => ({ title: titleFromFilename(filename, "UI/UX & Web Design", index), category: "UI/UX & Web Design", image: publicPath("ui-ux-web-design", filename) }));
  return [...graphicProjects, ...webProjects];
}

export default function WorkPage() {
  return <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5] text-[#293541]"><section className="bg-[#293541] py-16 text-white sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px] px-5 sm:px-10"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / WORK</p><h1 className="mt-4 max-w-3xl font-poppins text-4xl font-bold leading-tight sm:text-5xl">Work made to be remembered.</h1><p className="mt-5 max-w-2xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">A selection of NEXIV&apos;s creative work across design and digital experiences.</p></div></section><section className="px-5 py-16 sm:px-10 sm:py-20 lg:py-24"><div className="mx-auto max-w-[1240px]"><WorkPortfolio projects={getProjects()} /></div></section><PageProjectCta /><Footer /></main>;
}
