import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "light", className, size = "md" }: LogoProps) {
  const isFooterLockup = variant === "dark";
  const isLarge = size === "lg";
  const imageSrc = isFooterLockup ? "/logos/nexiv-lockup-light.png" : "/logos/nexiv-lockup-dark.png";

  // The supplied PNGs include transparent canvas padding. Positioning the
  // full asset in this clipped frame keeps its visible lockup aligned.
  const frameClass = isLarge ? "w-[171px] h-10" : "w-32 h-8";
  const imageClass = isLarge
    ? "w-[305px] max-w-none -left-[68px] -top-[51px]"
    : "w-[229px] max-w-none -left-[51px] -top-[38px]";

  return (
    <Link
      href="/"
      aria-label="NEXIV home"
      className={cn("relative block shrink-0 overflow-hidden cursor-pointer select-none", frameClass, className)}
    >
      <img
        src={imageSrc}
        alt="NEXIV™"
        className={cn("absolute h-auto pointer-events-none", imageClass)}
      />
    </Link>
  );
}
