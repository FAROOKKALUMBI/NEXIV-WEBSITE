export interface RecentDropItem {
  src: string;
  alt: string;
  tag: string;
}

/**
 * Manually curated recent drops showcase for the homepage marquee.
 * To add or remove items: drop the image into /public/assets/recent-drops/
 * and add/edit an entry in this array.
 * This is 100% independent from the main Portfolio / Work section.
 */
export const recentDrops: RecentDropItem[] = [
  {
    src: "/assets/recent-drops/mawu-mawu-branding.jpg",
    alt: "Mawu Mawu Brand Identity",
    tag: "Branding",
  },
  {
    src: "/assets/recent-drops/umi-cleaning-merch.jpg",
    alt: "Umi Cleaning Services Merch",
    tag: "Merch",
  },
  {
    src: "/assets/recent-drops/mwato-sacco-flyer.jpg",
    alt: "Mwato Sacco Registration Flyer",
    tag: "Event",
  },
  {
    src: "/assets/recent-drops/elite-financial-poster.jpg",
    alt: "Elite Financial Solutions Promo",
    tag: "Poster",
  },
  {
    src: "/assets/recent-drops/beas-meals-signage.jpg",
    alt: "Bea's Meals Signage & Identity",
    tag: "Signage",
  },
  {
    src: "/assets/recent-drops/social-weekend-poster.jpg",
    alt: "Social Weekend Event Poster",
    tag: "Poster",
  },
  {
    src: "/assets/recent-drops/eating-competition-poster.jpg",
    alt: "Eating Competition Open Challenge Flyer",
    tag: "Event",
  },
  {
    src: "/assets/recent-drops/finale-dinner-poster.jpg",
    alt: "Finale Dinner Leo Club Poster",
    tag: "Poster",
  },
  {
    src: "/assets/recent-drops/mr-and-miss-mzuni-poster.jpg",
    alt: "Mr & Miss Mzuni 2026 Poster",
    tag: "Event",
  },
  {
    src: "/assets/recent-drops/shade-of-hope-flyer.jpg",
    alt: "A Shade Of Hope Charity Flyer",
    tag: "Flyer",
  },
  {
    src: "/assets/recent-drops/mahau-rice-plug-flyer.jpg",
    alt: "Mahau Rice Plug Promo Flyer",
    tag: "Flyer",
  },
  {
    src: "/assets/recent-drops/blue-and-pink-funds-flyer.jpg",
    alt: "Blue & Pink Funds Financial Flyer",
    tag: "Promo",
  },
  {
    src: "/assets/recent-drops/womens-day-poster.jpg",
    alt: "International Women's Day Poster",
    tag: "Poster",
  },
  {
    src: "/assets/recent-drops/jersey-collections-flyer.jpg",
    alt: "Jersey Collections Store Flyer",
    tag: "Promo",
  },
  {
    src: "/assets/recent-drops/kamuzu-day-poster.jpg",
    alt: "Happy Kamuzu Day Tribute Poster",
    tag: "Poster",
  },
  {
    src: "/assets/recent-drops/eid-al-adha-poster.jpg",
    alt: "Eid Al-Adha Celebration Poster",
    tag: "Event",
  },
];
