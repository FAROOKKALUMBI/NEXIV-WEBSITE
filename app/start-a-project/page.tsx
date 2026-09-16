import { Sparkles } from "lucide-react";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const services = new Set(["Graphic Design", "Web Design", "Branding", "UI/UX Design", "Digital Marketing", "Motion & Design", "Full Creative Suite"]);

export default function StartAProjectPage({ searchParams }: { searchParams?: { service?: string } }) {
  const defaultService = searchParams?.service && services.has(searchParams.service) ? searchParams.service : "Graphic Design";
  return <main className="min-h-screen bg-[#f5f5f5] text-[#293541]"><TopBar /><Navbar /><section className="bg-[#293541] px-5 py-16 text-center text-white sm:px-10 sm:py-20"><div className="mx-auto max-w-2xl"><span className="inline-flex items-center gap-1.5 rounded bg-[#afe714]/15 px-3 py-1 font-inter text-xs font-semibold uppercase tracking-wider text-[#afe714]"><Sparkles className="h-3.5 w-3.5" />Start Your Project</span><h1 className="mt-5 font-poppins text-4xl font-bold leading-tight sm:text-5xl">Let&apos;s Build Something Great</h1><p className="mt-4 font-inter text-base leading-relaxed text-white/75 sm:text-lg">Tell us about your brand goals and vision. We will deliver a tailored proposal.</p></div></section><section className="px-5 py-16 sm:px-10 sm:py-20"><div className="mx-auto max-w-2xl rounded-2xl border border-[#3d4c5d] bg-[#222c37] p-6 shadow-2xl sm:p-8"><ProjectInquiryForm defaultService={defaultService} /></div></section><Footer /></main>;
}
