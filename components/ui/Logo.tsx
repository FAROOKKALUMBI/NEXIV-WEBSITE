"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "md" | "lg";
}

export function Logo({ variant = "light", className, size = "md" }: LogoProps) {
  const isDark = variant === "dark";
  const boxSize = size === "lg" ? "w-12 h-12 rounded-[10px]" : "w-10 h-10 rounded-[9px]";
  const textSize = size === "lg" ? "text-[26px]" : "text-[22px]";

  return (
    <Link href="/" className={cn("inline-flex items-center gap-3 group cursor-pointer select-none", className)}>
      {/* Dark rounded box with neon green cursive N emblem matching Image 3 */}
      <div className={cn("bg-[#293541] flex items-center justify-center p-2 shadow-sm shrink-0 border border-white/5", boxSize)}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#afe714]"
        >
          <path
            d="M32 76C23 76 18 69 18 58V32C18 24 24 18 32 18C40 18 45 24 45 32V60C45 64 48 67 52 67C56 67 59 64 59 60V32C59 24 65 18 73 18C81 18 87 24 87 32V58C87 69 82 76 73 76C65 76 60 70 60 62V34C60 30 57 27 53 27C49 27 46 30 46 34V62C46 70 41 76 32 76Z"
            fill="#afe714"
          />
        </svg>
      </div>

      <div className="flex items-baseline">
        <span
          className={cn(
            "font-poppins font-bold tracking-tight leading-none",
            textSize,
            isDark ? "text-white" : "text-[#293541]"
          )}
        >
          NEXIV
        </span>
        <span className={cn("text-[10px] font-bold ml-1 align-super", isDark ? "text-[#afe714]" : "text-[#293541]/70")}>
          TM
        </span>
      </div>
    </Link>
  );
}