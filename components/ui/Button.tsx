"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "lime" | "outline" | "dark" | "cyan" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  arrowType?: "right" | "up-right";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "lime",
      size = "md",
      href,
      showArrow = false,
      arrowType = "right",
      icon,
      iconPosition = "right",
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-md transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

    const sizeStyles = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    const variantStyles = {
      lime: "bg-brand-lime hover:bg-[#a6e000] text-[#131924] shadow-sm hover:shadow-lime-glow focus:ring-brand-lime font-bold",
      outline:
        "border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white hover:border-slate-500 focus:ring-slate-400 backdrop-blur-sm",
      dark: "bg-[#1b2533] hover:bg-[#223042] text-white border border-slate-700/60 hover:border-slate-600 focus:ring-slate-500 shadow-md",
      cyan: "bg-brand-cyan hover:bg-[#20caa6] text-[#0f172a] shadow-sm hover:shadow-cyan-glow focus:ring-brand-cyan font-semibold",
      secondary:
        "bg-white/10 hover:bg-white/20 text-white border border-white/10 backdrop-blur-md focus:ring-white/30",
      ghost: "text-slate-300 hover:text-white hover:bg-white/5",
    };

    const ArrowIcon = arrowType === "up-right" ? ArrowUpRight : ArrowRight;

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        )}
        {showArrow && (
          <ArrowIcon
            className={cn(
              "w-4 h-4 transition-transform duration-300 ease-out",
              arrowType === "right" ? "group-hover:translate-x-1" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            )}
          />
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
