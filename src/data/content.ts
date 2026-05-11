import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";
import news6 from "@/assets/news-6.jpg";
import reviewFeatured from "@/assets/review-featured.jpg";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: "Racing" | "New Bikes" | "Electric" | "Safety";
  readTime: string;
  body?: string[];
};

export const articles: Article[] = [
  {
    id: "ducati-panigale-v4-2026",
    title: "Ducati Panigale V4 2026: Evolution of a Legend",
    excerpt: "The Bologna factory unleashes a sharper, lighter superbike with 220 hp and revised aerodynamics.",
    image: news1,
    category: "New Bikes",
    readTime: "6 min",
  },
  {
    id: "zero-sr-x-electric",
    title: "Zero SR/X: The Electric Naked That Changes Everything",
    excerpt: "Silent, brutal, and finally affordable — we ride the bike that may end the combustion era.",
    image: news2,
    category: "Electric",
    readTime: "8 min",
  },
  {
    id: "motogp-mugello-recap",
    title: "MotoGP Mugello: A Title Race Reignited",
    excerpt: "Three riders within seven points. The summer of 2026 will be unforgettable.",
    image: news3,
    category: "Racing",
    readTime: "5 min",
  },
  {
    id: "cafe-racer-revival",
    title: "The Quiet Revival of the Café Racer",
    excerpt: "How a generation of riders is rediscovering style, simplicity, and Sunday mornings.",
    image: news4,
    category: "New Bikes",
    readTime: "7 min",
  },
  {
    id: "transcontinental-adv",
    title: "Crossing Continents on the New BMW R 1300 GS",
    excerpt: "From Lisbon to Vladivostok — 14,000 km on the world's most capable adventure bike.",
    image: news5,
    category: "New Bikes",
    readTime: "12 min",
  },
  {
    id: "helmet-safety-2026",
    title: "Helmet Safety Standards Get Their Biggest Update in 20 Years",
    excerpt: "ECE 22.07 is here. We break down what it means for your next lid.",
    image: news6,
    category: "Safety",
    readTime: "4 min",
  },
];

export type Review = {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  rating: number;
  excerpt: string;
  specs: { label: string; value: string }[];
  pros: string[];
  cons: string[];
  videoUrl?: string;
};

export const reviews: Review[] = [
  {
    id: "yamaha-tenere-700-world-raid-2026",
    title: "Yamaha Ténéré 700 World Raid",
    subtitle: "Built for those who don’t follow roads",
    image: news5,
    rating: 4.9,
    excerpt: "Adventure isn’t waiting — it’s calling. Meet the new Yamaha Ténéré 700 World Raid 2026 — built for those who don’t follow roads, they create them.",
    specs: [
      { label: "Make", value: "Yamaha" },
      { label: "Model", value: "Ténéré 700 World Raid 2026" },
      { label: "Category", value: "Adventure" }
    ],
    pros: ["Ultimate off-road capability", "Legendary reliability"],
    cons: ["Tall seat height"],
    videoUrl: "https://www.instagram.com/reel/DQ7kRsjjN4W/"
  },
  {
    id: "bmw-1300-gs-vs-ktm-1390",
    title: "BMW 1300 GS vs KTM 1390",
    subtitle: "The Ultimate Adventure Showdown",
    image: reviewFeatured,
    rating: 4.8,
    excerpt: "الصراع اليوم ماشي غير على الأرقام، الصراع على \"الهيبة\" في الطريق والسيطرة في الـ Off-road. 🇩🇪 BMW 1300 GS: التوازن المثالي والراحة. 🇦🇹 KTM 1390: القوة المفرطة والجنون.",
    specs: [
      { label: "BMW Engine", value: "1,300 cc Boxer" },
      { label: "KTM Power", value: "173 HP" },
      { label: "Focus", value: "Off-road & Comfort" }
    ],
    pros: ["Comfortable for long distances (BMW)", "Extreme power and adrenaline (KTM)", "Top tier technology"],
    cons: ["Very aggressive (KTM)", "Heavy for some (BMW)"],
    videoUrl: "https://www.instagram.com/reel/DXZwsUlDDvP/"
  },
  {
    id: "comfort-vs-adrenaline",
    title: "Comfort vs Adrenaline",
    subtitle: "Choosing your next adventure",
    image: news1,
    rating: 4.5,
    excerpt: "كاين اللي كيقلب على الراحة والطريق طويلة..وكاين اللي قلبو ميت وكيقلب على الأدرينالين. أنتم شنو تختاروا لمغامرتكم الجاية؟",
    specs: [
      { label: "Type", value: "Touring vs Sport" },
      { label: "Goal", value: "Comfort / Thrills" }
    ],
    pros: ["Long distance comfort", "Heart-pounding adrenaline"],
    cons: ["Hard to choose just one"],
    videoUrl: "https://www.instagram.com/reel/DW4VoiqjUce/"
  },
  {
    id: "bmw-f450-gs",
    title: "BMW F 450 GS",
    subtitle: "Meet the new “Monster” of the mid-range",
    image: news2,
    rating: 4.7,
    excerpt: "Meet the new “Monster” of the mid-range: The BMW F450 GS. Weight: 175 kg, Power: 48 HP with an Easy Ride Clutch. Keep riding and stay safe!",
    specs: [
      { label: "Weight", value: "175 kg" },
      { label: "Power", value: "48 HP" },
      { label: "Clutch", value: "Easy Ride (Semi-Auto)" }
    ],
    pros: ["Lightweight at 175 kg", "Accessible 48 HP", "Innovative Semi-Auto clutch"],
    cons: ["Less power for highway cruising"],
    videoUrl: "https://www.instagram.com/reel/DWes6MajSim/"
  },
  {
    id: "bmw-f450-gs-first-impressions",
    title: "BMW F 450 GS Impressions",
    subtitle: "Pure adventure in every shift",
    image: news3,
    rating: 4.6,
    excerpt: "The BMW F 450 GS isn’t just a new model… it’s a new rhythm for every new rider who wants light weight, real control, and pure adventure in every shift.",
    specs: [
      { label: "Focus", value: "New Riders" },
      { label: "Handling", value: "Lightweight" },
      { label: "Control", value: "Real Control" }
    ],
    pros: ["Great for new riders", "Nimble handling"],
    cons: ["Might outgrow quickly"],
    videoUrl: "https://www.instagram.com/reel/DRDKvesDaF_/"
  },
  {
    id: "suzuki-sv7gx-vs-yamaha-tracer-7",
    title: "Suzuki SV7GX vs Yamaha Tracer 7",
    subtitle: "The Middleweight Battle",
    image: news4,
    rating: 4.8,
    excerpt: "The all-new Suzuki SV7GX with aggressive lines and agile handling faces off against the Yamaha Tracer 7. Built for riders who crave performance and freedom.",
    specs: [
      { label: "Suzuki", value: "SV7GX" },
      { label: "Yamaha", value: "Tracer 7" },
      { label: "Category", value: "Middleweight" }
    ],
    pros: ["Aggressive lines (Suzuki)", "Agile handling", "Proven reliability (Yamaha)"],
    cons: ["Tough choice between the two"],
    videoUrl: "https://www.instagram.com/reel/DRAsTIyjB74/"
  }
];

export const articleBody = (a: Article): string[] => [
  `${a.excerpt} What follows is our full account from the launch event, the press materials, and a first impression that already tells us this machine matters.`,
  `Throughout a long week of riding — city traffic, mountain passes, and a long motorway slog at dusk — the bike revealed itself slowly. Engineering decisions that look conservative on paper became obvious strengths once the road opened up. The chassis is composed at speed, the brakes have the kind of progressive bite that gives confidence rather than fear, and the electronics fade into the background until you actually need them.`,
  `Where it shines is harder to describe than where it disappoints, but we'll try. The throttle response in the second-from-soft mode is a small masterpiece — linear, predictable, and perfectly calibrated to the engine's character. Wind protection is better than the silhouette suggests, and the seat is friendly enough for genuinely long days.`,
  `Of course, no machine is without compromise. The instrument cluster could be brighter in direct sun, the mirrors vibrate above 6,000 rpm, and the price has crept up again. None of these are deal-breakers, but in a market this competitive they are worth knowing about before you sign.`,
  `Verdict: a confident, considered evolution of a formula that already worked. We'll have a full long-term test in the autumn, but our early impression is that we have been right to be excited.`,
];

export type Video = {
  id: string;
  title: string;
  thumb: string;
  duration: string;
  category: "Reviews" | "Rides" | "Shorts";
  views: string;
};

export const videos: Video[] = [
  { id: "v1", title: "Ducati Panigale V4 — Track Test at Mugello", thumb: news1, duration: "12:34", category: "Reviews", views: "1.2M" },
  { id: "v2", title: "Zero SR/X First Ride: Silent Fury", thumb: news2, duration: "08:21", category: "Reviews", views: "842K" },
  { id: "v3", title: "MotoGP Behind The Scenes — Mugello", thumb: news3, duration: "15:02", category: "Rides", views: "2.1M" },
  { id: "v4", title: "Sunday Café Racer Cruise", thumb: news4, duration: "06:48", category: "Rides", views: "421K" },
  { id: "v5", title: "Crossing the Sahara on a GS", thumb: news5, duration: "22:10", category: "Rides", views: "1.8M" },
  { id: "v6", title: "60 Seconds: ECE 22.07 Helmets", thumb: news6, duration: "00:58", category: "Shorts", views: "318K" },
  { id: "v7", title: "Blackline 1800 Sound Check", thumb: reviewFeatured, duration: "01:12", category: "Shorts", views: "204K" },
  { id: "v8", title: "Cornering Masterclass", thumb: news3, duration: "18:45", category: "Reviews", views: "967K" },
];
