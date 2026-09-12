import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "lime" | "outline" | "dark";
  className?: string;
}

export function Badge({ children, variant = "cyan", className }: BadgeProps) {
  const variantStyles = {
    cyan: "bg-[#2ce2cc] text-[#0f172a] font-semibold",
    lime: "bg-[#b7f300] text-[#0f172a] font-semibold",
    outline: "border border-slate-700 bg-slate-900/50 text-slate-300",
    dark: "bg-[#1e2a38] text-brand-lime border border-brand-lime/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-md text-xs sm:text-sm tracking-wide transition-all shadow-sm",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
