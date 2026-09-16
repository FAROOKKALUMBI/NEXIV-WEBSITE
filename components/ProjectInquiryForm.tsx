"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, ChevronDown, Loader2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  termsAccepted: z.boolean().refine(Boolean, "You must agree to the Terms and Conditions"),
});

type FormData = z.infer<typeof schema>;

const termsSections = [
  ["Introduction", "Welcome to Nexiv. These Terms and Conditions govern your use of our website and the creative and digital services we provide. By accessing our website or engaging our services, you agree to be bound by these terms."],
  ["Service Agreement", "The services provided by Nexiv are subject to a separate agreement or contract. These agreements outline the scope of work, timelines, deliverables, and any additional terms specific to the services being provided. These Terms and Conditions apply to general website use and complement, but do not replace, individual signed agreements."],
  ["Use of Website", "Visitors may browse the website for informational purposes. Content on this site (text, images, branding, illustrations) is the property of Nexiv and may not be copied, reproduced, or redistributed without written permission."],
  ["Intellectual Property", "All intellectual property rights, including copyrights and trademarks, related to the designs, websites, and other creative works produced by Nexiv belong to the company unless otherwise stated in a separate agreement. Ownership of final deliverables transfers to the client only upon full payment, as specified in the relevant project agreement. Nexiv reserves the right to showcase completed work in its portfolio unless otherwise agreed with the client."],
  ["Client Responsibilities", "Clients are responsible for providing accurate and complete information necessary for the provision of our services. Clients also have the responsibility to review and approve deliverables within the specified timeframes; delays in feedback or approval may affect project timelines."],
  ["Payments", "Payment terms, deposits, and schedules will be outlined in individual project agreements or invoices. Work may be paused or withheld until payment terms are met, as specified in the relevant agreement."],
  ["Limitation of Liability", "Nexiv shall not be held liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with the use or inability to use our services, including but not limited to loss of data, loss of profits, or business interruption."],
  ["Third-Party Links", "Our website may contain links to external websites that are not operated by us. We are not responsible for the privacy practices or content of those third-party websites, and we encourage you to review their policies when visiting them."],
  ["Changes to These Terms", "Nexiv reserves the right to modify or update these Terms and Conditions at any time. Any changes will be effective upon posting the revised terms on our website. We encourage you to review this page periodically for updates."],
  ["Governing Law and Jurisdiction", "These Terms and Conditions shall be governed by and interpreted in accordance with the laws of Malawi. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Malawi."],
  ["Contact", "For questions about these Terms and Conditions, contact us at nexiv25@gmail.com or (+265) 0 884 288 849."],
] as const;

export function ProjectInquiryForm({ defaultService = "Graphic Design" }: { defaultService?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [termsOpen, setTermsOpen] = useState(false);
  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { service: defaultService, budget: "MWK 100,000 - MWK 500,000", termsAccepted: false } });
  const termsAccepted = watch("termsAccepted");

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true); setServerError(null);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const result = await response.json();
      if (response.ok && result.success) { setIsSuccess(true); reset(); } else setServerError(result.message || "Failed to submit. Please try again.");
    } catch { setServerError("Network error. Please check your connection and try again."); } finally { setIsSubmitting(false); }
  };

  if (isSuccess) return <div className="flex min-h-[420px] flex-col items-center justify-center space-y-4 px-6 text-center"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#afe714] bg-[#afe714]/20 text-[#afe714]"><CheckCircle2 className="h-10 w-10" /></div><h2 className="font-poppins text-2xl font-bold text-white sm:text-3xl">Message Sent Successfully!</h2><p className="max-w-md font-inter text-sm leading-relaxed text-white/75">Thank you for reaching out to Nexiv. Our creative team will review your project requirements and respond within 24 hours.</p></div>;

  const fieldClass = "w-full rounded-lg border border-[#3d4c5d] bg-[#2a3541] px-3.5 py-2.5 text-sm text-[#fbfcfc] transition-all focus:border-[#afe714] focus:outline-none";
  const labelClass = "mb-1 block font-inter text-xs font-semibold text-[#fbfcfc]/90";
  return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    {serverError && <div className="rounded border border-red-500/50 bg-red-900/40 p-3.5 text-xs text-red-200">{serverError}</div>}
    <div className="grid gap-4 sm:grid-cols-2"><div><label className={labelClass}>Your Name *</label><input {...register("name")} className={fieldClass} />{errors.name && <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>}</div><div><label className={labelClass}>Email Address *</label><input {...register("email")} type="email" className={fieldClass} />{errors.email && <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>}</div></div>
    <div className="grid gap-4 sm:grid-cols-2"><div><label className={labelClass}>Phone Number (Optional)</label><input {...register("phone")} placeholder="+265 884 288 849" className={fieldClass} /></div><div><label className={labelClass}>Primary Service *</label><select {...register("service")} className={fieldClass}><option value="Graphic Design">Graphic Design</option><option value="Web Design">Web Design</option><option value="Branding">Branding &amp; Identity</option><option value="UI/UX Design">UI/UX Design</option><option value="Digital Marketing">Digital Marketing</option><option value="Motion & Design">Motion &amp; Video</option><option value="Full Creative Suite">Full Creative Suite</option></select>{errors.service && <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>}</div></div>
    <div><label className={labelClass}>Estimated Project Budget</label><select {...register("budget")} className={fieldClass}><option value="Under MWK 100,000">Under MWK 100,000</option><option value="MWK 100,000 - MWK 500,000">MWK 100,000 - MWK 500,000</option><option value="MWK 500,000 - MWK 1,000,000">MWK 500,000 - MWK 1,000,000</option><option value="MWK 1,000,000+">MWK 1,000,000+</option></select></div>
    <div><label className={labelClass}>Project Details / Requirements *</label><textarea {...register("message")} rows={5} placeholder="Describe what you want to achieve, timeline, references or any specific deliverables..." className={`${fieldClass} resize-none`} />{errors.message && <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>}</div>
    <div><button type="button" onClick={() => setTermsOpen((open) => !open)} aria-expanded={termsOpen} aria-controls="project-terms" className="flex w-full items-center justify-between gap-4 rounded-lg border border-[#3d4c5d] bg-[#2a3541] px-3.5 py-3 text-left font-inter text-sm font-semibold text-white transition-colors hover:bg-white/5"><span>Terms &amp; Conditions</span><ChevronDown size={18} className={`shrink-0 text-[#afe714] transition-transform ${termsOpen ? "rotate-180" : ""}`} /></button><AnimatePresence initial={false}>{termsOpen && <motion.div id="project-terms" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden"><div className="mt-2 max-h-80 overflow-y-auto rounded-lg border border-[#3d4c5d] bg-[#2a3541] px-3.5 py-4 font-inter text-xs leading-relaxed text-white/70"><div className="space-y-4">{termsSections.map(([heading, text]) => <section key={heading}><h3 className="font-poppins text-sm font-bold text-white">{heading}</h3><p className="mt-1.5">{text}</p></section>)}</div><p className="mt-4 border-t border-[#3d4c5d] pt-4">For the complete standalone page, review our <Link href="/terms-and-conditions" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#afe714] underline underline-offset-2">Terms and Conditions</Link>.</p></div></motion.div>}</AnimatePresence></div>
    <div><label className="flex cursor-pointer items-start gap-3 font-inter text-xs leading-relaxed text-white/85"><input type="checkbox" {...register("termsAccepted")} className="mt-0.5 h-4 w-4 shrink-0 accent-[#afe714]" /><span>I have read and agree to the Terms and Conditions.</span></label>{errors.termsAccepted && <p className="mt-1 text-xs text-red-400">{errors.termsAccepted.message}</p>}</div>
    <button type="submit" disabled={isSubmitting || !termsAccepted} className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#afe714] py-3 font-inter text-sm font-bold text-[#293541] shadow-md transition-all hover:border-black/10 hover:bg-white disabled:cursor-not-allowed disabled:opacity-45">{isSubmitting ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Sending Inquiry...</> : <><Send className="mr-2 h-4 w-4" />Submit Project Request</>}</button>
  </form>;
}
