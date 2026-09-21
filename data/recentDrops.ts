export interface RecentDropItem {
  src: string;
  alt: string;
  tag: string;
}

/**
 * -----------------------------------------------------------------------------------
 * RECENT DROPS MANIFEST (Single Source of Truth)
 * -----------------------------------------------------------------------------------
 * Images for this section live exclusively in /public/recent-drops/
 * This array is completely decoupled and independent from the Work / Portfolio page.
 *
 * To add a new drop:
 * 1. Put the image file into /public/recent-drops/
 * 2. Add one line below with { src: "/recent-drops/filename.jpg", alt: "...", tag: "..." }
 * -----------------------------------------------------------------------------------
 */
export const recentDrops: RecentDropItem[] = [
  {
    src: "/recent-drops/MAWU%20MAWU%20POST.jpg",
    alt: "Mawu Mawu Brand Identity",
    tag: "Branding",
  },
  {
    src: "/recent-drops/NEXIV%20SOCIAL%20MEDIA%20POST.jpg",
    alt: "Bea's Meals Signage & Identity",
    tag: "Signage",
  },
  {
    src: "/recent-drops/thomspark%20social%20media.jpg",
    alt: "Thomspark Pool Table Tournament Poster",
    tag: "Poster",
  },
  {
    src: "/recent-drops/SOCIAL%20MEDIA%20POST%20%20UMI%20LOGO.jpg",
    alt: "Umi Cleaning Services Merch",
    tag: "Merch",
  },
  {
    src: "/recent-drops/NEXIV%20SOCIAL%20MEDIA%20FOR%20MZUNI%20SOSHOZ.jpg",
    alt: "Mzuni Social Weekend Event Poster",
    tag: "Poster",
  },
  {
    src: "/recent-drops/WE%20ARE%20BACK.jpg",
    alt: "We Are Back Promo",
    tag: "Event",
  },
];
