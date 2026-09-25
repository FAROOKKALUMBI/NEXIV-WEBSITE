"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { useState } from "react";

const categories = [
  "Company Branding",
  "Graphics Designing",
  "UI/UX & Web Design",
  "Social Media Marketing",
] as const;

type Category = (typeof categories)[number];
type Plan = { name: string; price: string; features: string[] };

const plans: Record<Category, Plan[]> = {
  "Company Branding": [
    { name: "Starter Pack", price: "MWK 149,000.00", features: ["Logo design", "Brand guidelines", "Business card design"] },
    { name: "Professional Pack", price: "MWK 199,000.00", features: ["Logo design", "Brand guidelines", "Business card design", "Letterhead design"] },
    { name: "Enterprise Pack", price: "MWK 249,000.00", features: ["Logo design", "Brand guidelines", "Business card design", "Letterhead design", "Social media branding"] },
  ],
  "Graphics Designing": [
    { name: "Starter Pack", price: "MWK 89,000.00", features: ["5 social media designs", "Two revision rounds", "Ready-to-post files"] },
    { name: "Professional Pack", price: "MWK 149,000.00", features: ["10 social media designs", "Campaign key visual", "Four revision rounds", "Ready-to-post files"] },
    { name: "Enterprise Pack", price: "MWK 219,000.00", features: ["20 social media designs", "Campaign key visual", "Print-ready artwork", "Priority revisions", "Source files"] },
  ],
  "UI/UX & Web Design": [
    { name: "Starter Pack", price: "MWK 350,000.00", features: ["Up to 4 pages", "Mobile-responsive design", "Contact form"] },
    { name: "Professional Pack", price: "MWK 650,000.00", features: ["Up to 8 pages", "Mobile-responsive design", "SEO foundations", "Content management setup"] },
    { name: "Enterprise Pack", price: "MWK 1,200,000.00", features: ["Custom page count", "E-commerce or advanced features", "SEO foundations", "Analytics setup", "Training and support"] },
  ],
  "Social Media Marketing": [
    { name: "Starter Pack", price: "MWK 120,000.00", features: ["Monthly content calendar", "8 branded posts", "Monthly reporting"] },
    { name: "Professional Pack", price: "MWK 220,000.00", features: ["Monthly content calendar", "12 branded posts", "Community management", "Monthly reporting"] },
    { name: "Enterprise Pack", price: "MWK 350,000.00", features: ["Monthly content calendar", "20 branded posts", "Community management", "Campaign support", "Monthly performance reporting"] },
  ],
};

const projectService: Record<Category, string> = {
  "Company Branding": "Branding",
  "Graphics Designing": "Graphic Design",
  "UI/UX & Web Design": "Web Design",
  "Social Media Marketing": "Digital Marketing",
};

export function ServicePlans() {
  const [activeCategory, setActiveCategory] = useState<Category>("Company Branding");

  return (
    <section className="bg-[#293541] px-5 py-16 text-white sm:px-10 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-poppins text-4xl font-extrabold leading-tight sm:text-5xl">Service Plans</h2>
          <p className="mx-auto mt-5 max-w-3xl font-inter text-base leading-relaxed text-white/70 sm:text-lg">
            We offer diverse packages, subscriptions and service plans for your business needs, feel free to contact us directly for a customized service plan that suits your current goals.
          </p>
        </header>

        <div role="tablist" aria-label="Service plan categories" className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-x-5 gap-y-4 sm:grid-cols-4 sm:gap-x-8">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button key={category} type="button" role="tab" aria-selected={isActive} onClick={() => setActiveCategory(category)} className={`border-b-2 pb-3 font-inter text-sm font-semibold transition-colors sm:text-base ${isActive ? "border-[#afe714] text-[#afe714]" : "border-white/25 text-white/60 hover:border-[#53ede3] hover:text-white"}`}>
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans[activeCategory].map((plan) => (
            <article key={plan.name} className="flex min-h-[390px] flex-col rounded-2xl bg-white p-7 text-[#293541] shadow-xl shadow-black/20 sm:p-8">
              <h3 className="font-poppins text-2xl font-bold text-[#293541]">{plan.name}</h3>
              <p className="mt-2 font-inter text-lg text-[#293541]/70">{plan.price}</p>
              <ul className="mt-7 space-y-3 font-inter text-sm leading-relaxed sm:text-base">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3"><Check size={18} strokeWidth={2.5} className="mt-0.5 shrink-0 text-[#53ede3]" /><span>{feature}</span></li>
                ))}
              </ul>
              <Link href={`/start-a-project?service=${encodeURIComponent(projectService[activeCategory])}`} className="mt-auto block rounded-md bg-[#afe714] px-5 py-3 text-center font-inter text-sm font-bold text-[#293541] transition-all hover:scale-[1.02] hover:bg-[#53ede3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#53ede3] focus-visible:ring-offset-2">
                Purchase
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
