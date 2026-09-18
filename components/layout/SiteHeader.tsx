"use client";

import { TopBar } from "./TopBar";
import { Navbar } from "./Navbar";

export function SiteHeader() {
  return <header className="fixed left-0 top-0 z-[9999] w-full"><TopBar /><Navbar /></header>;
}
