"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Loader2, Send, Sparkles } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export function ContactModal({ isOpen, onClose, defaultService }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: defaultService || "Graphic Design",
      budget: "$500 - $2,000",
    },
  });

  useEffect(() => {
    if (defaultService) {
      setValue("service", defaultService);
    }
  }, [defaultService, setValue]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setIsSuccess(true);
        reset();
      } else {
        setServerError(resData.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setServerError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    setServerError(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleModalClose}
            className="fixed inset-0 bg-[#2a3541]/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
            className="relative w-full max-w-2xl bg-[#222c37] border border-[#3d4c5d] rounded-2xl shadow-2xl p-6 sm:p-8 text-[#fbfcfc] z-10 my-8"
          >
            {/* Close Button */}
            <button
              onClick={handleModalClose}
              className="absolute top-5 right-5 p-2 rounded-lg text-[#fbfcfc]/60 hover:text-[#fbfcfc] hover:bg-[#2a3541] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#afe714]/20 border border-[#afe714] flex items-center justify-center text-[#afe714]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold font-poppins text-[#fbfcfc]">
                  Message Sent Successfully!
                </h3>
                <p className="text-[#fbfcfc]/80 text-sm max-w-md">
                  Thank you for reaching out to Nexiv. Our creative team will review your project requirements and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleModalClose}
                    className="px-6 py-2.5 rounded-md bg-[#afe714] hover:bg-[#9dd110] text-[#2a3541] font-bold text-sm"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <div className="mb-6 space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#afe714]/15 text-[#afe714] text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" /> Start Your Project
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-poppins text-[#fbfcfc]">
                    Let&apos;s Build Something Great
                  </h3>
                  <p className="text-xs sm:text-sm text-[#fbfcfc]/70">
                    Tell us about your brand goals and vision. We will deliver a tailored proposal.
                  </p>
                </div>

                {serverError && (
                  <div className="mb-4 p-3.5 rounded bg-red-900/40 border border-red-500/50 text-red-200 text-xs">
                    {serverError}
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#fbfcfc]/90 mb-1">
                        Your Name *
                      </label>
                      <input
                        {...register("name")}
                        placeholder="John Doe"
                        className="w-full bg-[#2a3541] border border-[#3d4c5d] rounded-lg px-3.5 py-2.5 text-sm text-[#fbfcfc] focus:outline-none focus:border-[#afe714] transition-all"
                      />
                      {errors.name && (
                        <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#fbfcfc]/90 mb-1">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="john@example.com"
                        className="w-full bg-[#2a3541] border border-[#3d4c5d] rounded-lg px-3.5 py-2.5 text-sm text-[#fbfcfc] focus:outline-none focus:border-[#afe714] transition-all"
                      />
                      {errors.email && (
                        <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#fbfcfc]/90 mb-1">
                        Phone Number (Optional)
                      </label>
                      <input
                        {...register("phone")}
                        placeholder="+265 884 288 849"
                        className="w-full bg-[#2a3541] border border-[#3d4c5d] rounded-lg px-3.5 py-2.5 text-sm text-[#fbfcfc] focus:outline-none focus:border-[#afe714] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#fbfcfc]/90 mb-1">
                        Primary Service *
                      </label>
                      <select
                        {...register("service")}
                        className="w-full bg-[#2a3541] border border-[#3d4c5d] rounded-lg px-3.5 py-2.5 text-sm text-[#fbfcfc] focus:outline-none focus:border-[#afe714] transition-all cursor-pointer"
                      >
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Branding">Branding & Identity</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Motion & Design">Motion & Video</option>
                        <option value="Full Creative Suite">Full Creative Suite</option>
                      </select>
                      {errors.service && (
                        <p className="text-xs text-red-400 mt-1">{errors.service.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#fbfcfc]/90 mb-1">
                      Estimated Project Budget
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full bg-[#2a3541] border border-[#3d4c5d] rounded-lg px-3.5 py-2.5 text-sm text-[#fbfcfc] focus:outline-none focus:border-[#afe714] transition-all cursor-pointer"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 - $2,000">$500 - $2,000</option>
                      <option value="$2,000 - $5,000">$2,000 - $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#fbfcfc]/90 mb-1">
                      Project Details / Requirements *
                    </label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Describe what you want to achieve, timeline, references or any specific deliverables..."
                      className="w-full bg-[#2a3541] border border-[#3d4c5d] rounded-lg px-3.5 py-2.5 text-sm text-[#fbfcfc] focus:outline-none focus:border-[#afe714] transition-all resize-none"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center py-3 rounded-md bg-[#afe714] hover:bg-[#9dd110] text-[#2a3541] font-bold text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin mr-2" />
                          Sending Inquiry...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Submit Project Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
