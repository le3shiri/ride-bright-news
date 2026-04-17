import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";
import news6 from "@/assets/news-6.jpg";
import reviewFeatured from "@/assets/review-featured.jpg";

export type Author = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const authors: Record<string, Author> = {
  "Marco Rossi": {
    name: "Marco Rossi",
    role: "Senior Editor",
    bio: "Born in Bologna, Marco has covered Italian motorcycle culture for 18 years. Former club racer, lifelong tifoso.",
    initials: "MR",
  },
  "Lena Park": {
    name: "Lena Park",
    role: "Electric & Tech Correspondent",
    bio: "Lena writes about the future of mobility. She owns three EVs and one very loud two-stroke.",
    initials: "LP",
  },
  "James Holloway": {
    name: "James Holloway",
    role: "Racing Editor",
    bio: "Trackside in every paddock that matters. James has covered MotoGP since 2009.",
    initials: "JH",
  },
  "Sofia Greco": {
    name: "Sofia Greco",
    role: "Lifestyle Editor",
    bio: "Sofia explores the culture, fashion, and rituals that surround the motorcycle world.",
    initials: "SG",
  },
  "David Chen": {
    name: "David Chen",
    role: "Adventure Correspondent",
    bio: "100,000+ km across six continents. David tests bikes where the road ends.",
    initials: "DC",
  },
  "Hannah Reyes": {
    name: "Hannah Reyes",
    role: "Safety & Gear Editor",
    bio: "Former crash reconstruction specialist. Hannah translates safety data into rider-friendly advice.",
    initials: "HR",
  },
};

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: "Racing" | "New Bikes" | "Electric" | "Safety";
  date: string;
  author: string;
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
    date: "Apr 14, 2026",
    author: "Marco Rossi",
    readTime: "6 min",
  },
  {
    id: "zero-sr-x-electric",
    title: "Zero SR/X: The Electric Naked That Changes Everything",
    excerpt: "Silent, brutal, and finally affordable — we ride the bike that may end the combustion era.",
    image: news2,
    category: "Electric",
    date: "Apr 12, 2026",
    author: "Lena Park",
    readTime: "8 min",
  },
  {
    id: "motogp-mugello-recap",
    title: "MotoGP Mugello: A Title Race Reignited",
    excerpt: "Three riders within seven points. The summer of 2026 will be unforgettable.",
    image: news3,
    category: "Racing",
    date: "Apr 10, 2026",
    author: "James Holloway",
    readTime: "5 min",
  },
  {
    id: "cafe-racer-revival",
    title: "The Quiet Revival of the Café Racer",
    excerpt: "How a generation of riders is rediscovering style, simplicity, and Sunday mornings.",
    image: news4,
    category: "New Bikes",
    date: "Apr 08, 2026",
    author: "Sofia Greco",
    readTime: "7 min",
  },
  {
    id: "transcontinental-adv",
    title: "Crossing Continents on the New BMW R 1300 GS",
    excerpt: "From Lisbon to Vladivostok — 14,000 km on the world's most capable adventure bike.",
    image: news5,
    category: "New Bikes",
    date: "Apr 05, 2026",
    author: "David Chen",
    readTime: "12 min",
  },
  {
    id: "helmet-safety-2026",
    title: "Helmet Safety Standards Get Their Biggest Update in 20 Years",
    excerpt: "ECE 22.07 is here. We break down what it means for your next lid.",
    image: news6,
    category: "Safety",
    date: "Apr 02, 2026",
    author: "Hannah Reyes",
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
};

export const reviews: Review[] = [
  {
    id: "blackline-cruiser-2026",
    title: "Blackline 1800 Cruiser",
    subtitle: "A modern classic with chrome and soul",
    image: reviewFeatured,
    rating: 4.7,
    excerpt:
      "Effortless torque, timeless design, and a soundtrack that turns every commute into theatre. The Blackline 1800 is everything a cruiser should be — and a little more.",
    specs: [
      { label: "Engine", value: "1,802 cc V-Twin" },
      { label: "Top Speed", value: "215 km/h" },
      { label: "Power", value: "94 hp @ 5,000 rpm" },
      { label: "Fuel", value: "5.6 L / 100 km" },
      { label: "Weight", value: "318 kg" },
      { label: "Price", value: "$22,499" },
    ],
    pros: ["Effortless low-end torque", "Premium fit & finish", "Iconic exhaust note", "Comfortable for long hauls"],
    cons: ["Heavy at low speeds", "Limited lean angle", "Thirsty in city traffic"],
  },
  {
    id: "ducati-panigale-v4-review",
    title: "Ducati Panigale V4",
    subtitle: "Track weapon, road poet",
    image: news1,
    rating: 4.9,
    excerpt: "Few bikes manage to be this fast and this rideable. The Panigale V4 redefines the superbike formula.",
    specs: [
      { label: "Engine", value: "1,103 cc V4" },
      { label: "Top Speed", value: "299 km/h" },
      { label: "Power", value: "220 hp @ 13,000 rpm" },
      { label: "Fuel", value: "6.8 L / 100 km" },
      { label: "Weight", value: "198 kg" },
      { label: "Price", value: "$28,995" },
    ],
    pros: ["Stunning acceleration", "Razor-sharp chassis", "World-class electronics"],
    cons: ["Aggressive seating", "Premium price", "Service intervals"],
  },
  {
    id: "zero-srx-review",
    title: "Zero SR/X Electric",
    subtitle: "The future, today",
    image: news2,
    rating: 4.5,
    excerpt: "Instant torque, zero emissions, and a 240 km real-world range. Electric motorcycling has finally grown up.",
    specs: [
      { label: "Motor", value: "ZF75-10 PMAC" },
      { label: "Top Speed", value: "201 km/h" },
      { label: "Power", value: "110 hp" },
      { label: "Range", value: "240 km city" },
      { label: "Weight", value: "229 kg" },
      { label: "Price", value: "$23,995" },
    ],
    pros: ["Silent and torquey", "Low running costs", "App-connected ride modes"],
    cons: ["Limited fast charging", "Range drops on highway"],
  },
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
