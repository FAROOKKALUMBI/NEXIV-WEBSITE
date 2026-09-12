"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: (
        <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com",
      icon: (
        <svg className="w-[15px] h-[15px] fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com",
      icon: (
        <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#293541] pt-20 pb-0 overflow-hidden text-white border-t border-white/[0.05]">
      {/* Top-left soft glow */}
      <div
        aria-hidden="true"
        className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-[#afe714]/6 blur-[120px] pointer-events-none select-none z-0"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[60px]">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start">
            <Logo variant="dark" size="lg" />
            <p className="font-inter text-[14px] text-white/60 mt-[12px] max-w-xs leading-relaxed">
              Your Trusted Creative Partner.
            </p>

            <div className="flex items-center gap-[12px] mt-[24px]">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-[36px] h-[36px] rounded-[8px] bg-white/[0.08] hover:bg-[#afe714] text-white hover:text-[#293541] flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-poppins font-semibold text-[14px] text-white mb-[20px]">
              Company
            </h4>
            <ul className="space-y-[4px] font-inter text-[14px] text-white/65 leading-[2.2]">
              <li>
                <a href="#home" className="hover:text-[#afe714] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#afe714] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#afe714] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-[#afe714] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#afe714] transition-colors">
                  Process
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="font-poppins font-semibold text-[14px] text-white mb-[20px]">
              Our Services
            </h4>
            <ul className="space-y-[4px] font-inter text-[14px] text-white/65 leading-[2.2]">
              <li>
                <a href="#services" className="hover:text-[#afe714] transition-colors">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#afe714] transition-colors">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#afe714] transition-colors">
                  Branding
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#afe714] transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#afe714] transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#afe714] transition-colors">
                  Motion &amp; Video
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="font-poppins font-semibold text-[14px] text-white mb-[20px]">
              Contact Us
            </h4>
            <div className="space-y-[12px] font-inter text-[14px] text-white/65 leading-relaxed">
              <a
                href="tel:+265884288849"
                className="flex items-center gap-2.5 hover:text-[#afe714] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#afe714] shrink-0" />
                <span className="font-inter">(+265) 884 288 849</span>
              </a>
              <a
                href="mailto:nexiv25@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#afe714] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#afe714] shrink-0" />
                <span className="font-inter">nexiv25@gmail.com</span>
              </a>
              <div className="flex items-center gap-2.5 text-white/65 font-inter">
                <MapPin className="w-4 h-4 text-[#afe714] shrink-0" />
                <span>
                  Mzuzu, Malawi <span className="text-[#afe714] font-medium">(HQ)</span>
                </span>
              </div>
            </div>
          </div>

        </div>

        <div className="w-full h-[1px] bg-white/[0.08] mt-[60px]" />

        <div className="py-[28px] flex flex-col sm:flex-row items-center justify-between gap-4 font-inter text-[13px] text-white/50">
          <div>
            &copy; 2026 Nexiv Limited. All rights reserved.
          </div>
          <div className="flex items-center space-x-[32px]">
            <Link href="#privacy" className="hover:text-[#afe714] transition-colors font-inter">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-[#afe714] transition-colors font-inter">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
