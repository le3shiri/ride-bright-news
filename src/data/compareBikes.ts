import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news5 from "@/assets/news-5.jpg";
import reviewFeatured from "@/assets/review-featured.jpg";

export type CompareBike = {
  id: string;
  name: string;
  brand: string;
  category: "Sport" | "Naked" | "Cruiser" | "Adventure" | "Electric";
  image: string;
  price: number; // USD
  power: number; // hp
  torque: number; // Nm
  weight: number; // kg
  topSpeed: number; // km/h
  fuel: number; // L/100km (0 for electric)
  range: number; // km
  zeroToHundred: number; // s
  rating: number; // 0-5
};

export const compareBikes: CompareBike[] = [
  {
    id: "ducati-panigale-v4",
    name: "Panigale V4",
    brand: "Ducati",
    category: "Sport",
    image: news1,
    price: 28995,
    power: 220,
    torque: 124,
    weight: 198,
    topSpeed: 299,
    fuel: 6.8,
    range: 235,
    zeroToHundred: 2.9,
    rating: 4.9,
  },
  {
    id: "zero-srx",
    name: "SR/X Electric",
    brand: "Zero",
    category: "Electric",
    image: news2,
    price: 23995,
    power: 110,
    torque: 190,
    weight: 229,
    topSpeed: 201,
    fuel: 0,
    range: 240,
    zeroToHundred: 3.3,
    rating: 4.5,
  },
  {
    id: "blackline-1800",
    name: "Blackline 1800",
    brand: "Throttle Custom",
    category: "Cruiser",
    image: reviewFeatured,
    price: 22499,
    power: 94,
    torque: 165,
    weight: 318,
    topSpeed: 215,
    fuel: 5.6,
    range: 320,
    zeroToHundred: 4.8,
    rating: 4.7,
  },
  {
    id: "bmw-r1300-gs",
    name: "R 1300 GS",
    brand: "BMW",
    category: "Adventure",
    image: news5,
    price: 19995,
    power: 145,
    torque: 149,
    weight: 237,
    topSpeed: 220,
    fuel: 5.2,
    range: 380,
    zeroToHundred: 3.6,
    rating: 4.8,
  },
  {
    id: "yamaha-mt-09",
    name: "MT-09 SP",
    brand: "Yamaha",
    category: "Naked",
    image: news3,
    price: 12299,
    power: 117,
    torque: 93,
    weight: 193,
    topSpeed: 230,
    fuel: 5.0,
    range: 280,
    zeroToHundred: 3.2,
    rating: 4.6,
  },
];
