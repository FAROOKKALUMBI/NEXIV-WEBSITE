import Link from "next/link";
import { ProjectInquiryForm } from "@/components/ProjectInquiryForm";
import { Footer } from "@/components/layout/Footer";

const services = new Set(["Graphic Design", "Web Design", "Branding", "UI/UX Design", "Digital Marketing", "Motion & Design", "Full Creative Suite"]);

export default function StartAProjectPage({ searchParams }: { searchParams?: { service?: string } }) {
  const defaultService = searchParams?.service && services.has(searchParams.service) ? searchParams.service : "Graphic Design";
  return <main className="min-h-screen bg-[#f5f5f5] text-[#293541]"><section className="bg-[#293541] px-5 py-16 text-white sm:px-10 sm:py-20"><div className="mx-auto max-w-[1240px]"><p className="font-inter text-sm font-bold tracking-wide text-[#53ede3]">HOME / START A PROJECT</p><div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"><div><h1 className="font-poppins text-4xl font-bold leading-tight sm:text-5xl">Let&apos;s Build Something Great</h1><p className="mt-4 max-w-2xl font-inter text-base leading-relaxed text-white/75 sm:text-lg">Tell us about your brand goals and vision. We will deliver a tailored proposal.</p></div><Link href="/terms-and-conditions" className="inline-flex shrink-0 items-center justify-center rounded-md border border-white/50 px-5 py-2.5 font-inter text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#afe714]">Terms and Conditions</Link></div></div></section><section className="px-5 py-16 sm:px-10 sm:py-20"><div className="mx-auto max-w-2xl rounded-2xl border border-[#3d4c5d] bg-[#222c37] p-6 shadow-2xl sm:p-8"><ProjectInquiryForm defaultService={defaultService} /></div></section><Footer /></main>;
}
