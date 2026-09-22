import { Download, Eye } from "lucide-react";

const priceListHref = "/nexiv-price-list.pdf";

export function PriceListDownload() {
  return (
    <section className="relative overflow-hidden bg-[#afe714] px-5 py-8 text-[#293541] sm:px-10 sm:py-10">
      <div className="pointer-events-none absolute -left-24 -top-32 h-64 w-64 rounded-full bg-[#53ede3]/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-[#293541]/10 blur-3xl" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <p className="font-inter text-sm font-bold tracking-wide text-[#293541]/70">PRICING GUIDE</p>
          <h2 className="mt-2 font-poppins text-3xl font-bold leading-tight sm:text-4xl">Download Price List</h2>
          <p className="mx-auto mt-3 max-w-2xl font-inter text-base leading-relaxed text-[#293541]/80 sm:text-lg">
            Get access to our comprehensive service price list to explore our offers in detail. Our price list provides transparent pricing information to help you make informed decisions.
          </p>
          <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={priceListHref} download className="inline-flex items-center justify-center gap-2 rounded-md bg-[#293541] px-5 py-3 font-inter text-sm font-bold text-white transition-all hover:scale-[1.02] hover:bg-[#202e3a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#293541] focus-visible:ring-offset-2 focus-visible:ring-offset-[#afe714]">
              <Download size={17} /> Download
            </a>
            <a href={priceListHref} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-md border border-[#293541]/45 bg-white/15 px-5 py-3 font-inter text-sm font-bold text-[#293541] transition-all hover:border-[#293541] hover:bg-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#293541] focus-visible:ring-offset-2 focus-visible:ring-offset-[#afe714]">
              <Eye size={17} /> Preview
            </a>
          </div>
      </div>
    </section>
  );
}
