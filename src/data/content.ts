



import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";
import news6 from "@/assets/news-6.jpg";
import reviewFeatured from "@/assets/review-featured.jpg";
import importNewsImgSorted0 from "@/assets/news_img_s_0.jpg";
import importNewsImgSorted1 from "@/assets/news_img_s_1.jpeg";
import importNewsImgSorted2 from "@/assets/news_img_s_2.jpg";
import importNewsImgSorted3 from "@/assets/news_img_s_3.jpg";
import importNewsImgSorted4 from "@/assets/news_img_s_4.avif";
import importNewsImgSorted5 from "@/assets/news_img_s_5.webp";
import importNewsImgSorted6 from "@/assets/news_img_s_6.webp";
import importNewsImgSorted7 from "@/assets/news_img_s_7.avif";
import importNewsImgSorted8 from "@/assets/news_img_s_8.jpg";
import importNewsImgSorted9 from "@/assets/news_img_s_9.jpg";
import importNewsImgSorted10 from "@/assets/news_img_s_10.jpg";
import importNewsImgSorted11 from "@/assets/news_img_s_11.jpg";
import importNewsImgSorted12 from "@/assets/news_img_s_12.jpg";
import importNewsImgSorted13 from "@/assets/news_img_s_13.jpg";
import importNewsImgSorted14 from "@/assets/news_img_s_14.jpg";
import importNewsImgSorted15 from "@/assets/news_img_s_15.jpg";
import importNewsImgSorted16 from "@/assets/news_img_s_16.jpg";
import importNewsImgSorted17 from "@/assets/news_img_s_17.jpg";
import importNewsImgSorted18 from "@/assets/news_img_s_18.jpg";
import importNewsImgSorted19 from "@/assets/news_img_s_19.jpg";
import importNewsImgSorted20 from "@/assets/news_img_s_20.jpg";
import importNewsImgSorted21 from "@/assets/news_img_s_21.jpg";
import importNewsImgSorted22 from "@/assets/news_img_s_22.png";
import importNewsImgSorted23 from "@/assets/news_img_s_23.png";
import importNewsImgSorted24 from "@/assets/news_img_s_24.jpg";
import importNewsImgSorted25 from "@/assets/news_img_s_25.jpg";
import importNewsImgSorted26 from "@/assets/news_img_s_26.jpg";

import newsNew0 from "@/assets/news_new_0.jpg";
import newsNew1 from "@/assets/news_new_1.jpg";
import newsNew2 from "@/assets/news_new_2.jpg";
import newsNew3 from "@/assets/news_new_3.jpg";
import newsNew4 from "@/assets/news_new_4.jpg";
import newsNew5 from "@/assets/news_new_5.jpg";
import newsNew6 from "@/assets/news_new_6.jpeg";
import newsNew7 from "@/assets/news_new_7.jpeg";
import newsNew8 from "@/assets/news_new_8.jpg";
import newsNew9 from "@/assets/news_new_9.jpg";
import newsNew10 from "@/assets/news_new_10.jpg";
import newsNew11 from "@/assets/news_new_11.jpg";
import newsNew12 from "@/assets/news_new_12.jpeg";
import newsNew22 from "@/assets/news_new_22.jpg";
import newsNew23 from "@/assets/news_new_23.jpg";
import newsNew24 from "@/assets/news_new_24.jpg";
import newsNew25 from "@/assets/news_new_25.jpg";
import newsNew26 from "@/assets/news_new_26.jpg";
import newsNew27 from "@/assets/news_new_27.jpg";
import newsNew28 from "@/assets/news_new_28.jpg";
import newsNew29 from "@/assets/news_new_29.jpg";
import newsNew30 from "@/assets/news_new_30.jpg";
import newsNew31 from "@/assets/news_new_31.jpg";
import newsNew32 from "@/assets/news_new_32.jpg";
import newsNew33 from "@/assets/news_new_33.jpg";
import newsNew34 from "@/assets/news_new_34.jpg";




export type LocalizedString = {
  fr: string;
  en: string;
  es?: string;
  it?: string;
};

export type LocalizedBody = {
  fr: string[];
  en: string[];
  es?: string[];
  it?: string[];
};

export type Article = {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  image: string;
  category: "Racing" | "New Bikes" | "Electric" | "Safety";
  readTime: string;
  body: LocalizedBody;
  extraImages?: string[];
};

export const getLocalized = <T>(obj: { fr: T; en: T; es?: T; it?: T }, lang: string): T => {
  const l = lang.slice(0, 2) as keyof typeof obj;
  return obj[l] || obj.fr;
};





export const articles: Article[] = [
,
{
    "id": "2025-husqvarna-vitpilen-801-md-ride-review",
    "title": {
        "fr": "2025 Husqvarna Vitpilen 801: MD Ride Review",
        "en": "2025 Husqvarna Vitpilen 801: MD Ride Review",
        "es": "2025 Husqvarna Vitpilen 801: MD Ride Review",
        "it": "2025 Husqvarna Vitpilen 801: MD Ride Review"
    },
    "excerpt": {
        "fr": "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed.",
        "en": "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed.",
        "es": "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed.",
        "it": "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed."
    },
    "image": newsNew22,
    "category": "New Bikes",
    "readTime": "4 min",
    "body": {
        "fr": [
            "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed.",
            "The performance of the motorcycles, however, including those tested by MD, was, on balance, excellent. Now, Husqvarna continues this design trend with the new 2025 Vitpilen 801.",
            "The styling is arguably less polarizing this time, with slightly more traditional lines and a simple round headlight. More importantly, what lies beneath the styling is more potent featuring a 799 cc parallel-twin developed from earlier models in both KTM’s and Husqvarna’s lineup.",
            "This engine is now rated at 105 hp at the crank, which is an impressive number for a parallel-twin of this displacement. It features a nice spread of torque, as well.",
            "Indeed, the Vitpilen 801 is a closely related sibling of KTM’s 790 Duke, which MD has alsotested recently. The styling is quite different, of course, but some of the shared attributes, including the engine and the basic chassis geometry, promise good things from the Vitpilen 801.",
            "MD has tested so many of these KTM/Husqvarna motorcycles featuring similar parallel-twin and chassis designs that it is inescapable reaching a simple conclusion. These bikes are always extremely well balanced, and the chassis offers excellent feedback from the tire contact patches. The Vitpilen 801 was no different in our testing.",
            "This may look like a simple roadster, and it carries a relatively modest price of $10,499 in the United States, but it offers several up-scale features that add to the riding experience.",
            "It offers four rider-selectable modes, including Street, Sport, Rain and a customizable Dynamic mode. Equipped with an IMU, it features cornering ABS and cornering traction control, together with a quick-shifter. A 5 inch, bright color TFT dash is included.",
            "For the first 600 miles, a purchaser of the Vitpilen 801 can sample the “Dynamic pack”, which allows the rider to adjust throttle response as well as traction control, and even levels of wheelie control and engine braking. After this test period, you will have to pay your dealer to keep these features (in the neighborhood of $500). Our test bike had all of these features enabled.",
            "The suspension is impressive for this price category. The fork is adjustable for both compression and rebound through easily reached clickers on top of each fork tube. The fork is a beefy 43 mm diameter unit. The shock is adjustable for both spring preload and rebound.",
            "The front brake calipers are four-piston units with Husqvarna branding that squeeze two 300 mm discs. A single 240 mm rear disc is operated through a two-piston caliper. The ABS system allows you to switch to “SuperMoto mode” and disable rear ABS.",
            "The 17 inch wheels are shod with Michelin Road 6 tires sized 120/70 front and 180/55 rear.",
            "That quick-shifter operates a six-speed gearbox.",
            "The Vitpilen 801 is very light at a claimed 396 pounds with an empty fuel tank.",
            "Riding the Vitpilen 801 proved to be a pleasure, and a reminder of the quality of this chassis, now supported by adjustable suspension components. Characteristic of both Husqvarna and KTM, the suspension damping is on the firm side, but both compression and rebound can be softened for road cruising.",
            "The ergonomics are slightly more aggressive than your standard upright naked bike. A slight lean forward to the bars is coupled with pegs that offer decent leg room. The seat proved comfortable, even on longer rides.",
            "The bike handles superbly. For spirited riding, we added some spring preload in the back for our 200 pound test rider, and stiffened the fork while slowing the rebound in the shock. What we ended up with was a bike very capable, and confident, on twisty roads.",
            "The bike also offers good stability at high speeds, but, of course, as a naked bike you have to deal with wind pressure on your chest and helmet. Vibration levels are reasonable for a parallel twin, and did not interfere with our enjoyment of the bike.",
            "The house-branded brakes get the job done. Certainly better than the base model units on earlier KTM Duke 790s and 890s, they proved more than adequate on the road with a mild initial bite but progressive and adequate power.",
            "The quick-shifter also seemed improved from some of the earlier Husqvarna and KTM models with this feature. It doesn’t like to be shifted between first and second gear, which is not unlike most of the competition, and prefers up-shifts under power. Nevertheless, it was a pleasant addition to the bike, and did not distract from the riding experience.",
            "Throttle response was excellent in the Street mode, but slightly touchy in the Sport mode. This seems to be fairly typical of most modern bikes. Nevertheless, Sport mode is usable for aggressive riding, but Street mode works better everywhere else.",
            "The stock Michelin Road 6 tires are quality rubber. Their presence on the bike is somewhat surprising given its modest price point. Nevertheless, we are not big fans of the Road 6 tires. We find them adequate until pushed hard on twisty roads, where grip is not in the sport tire category, for certain, and also, in our experience, less than available from some of the sport touring tire competition.",
            "The fuel tank capacity is 3.7 gallons and offers decent range while the bike returns roughly 50 MPG in mixed riding.",
            "Styling is subjective, for sure, but we think the new Vitpilen 801 is a very good looking machine. It also performs very well and is reasonably priced given the technology available and the fully adjustable suspension. Take a look at Husqvarna’swebsitefor additional details and specifications"
        ],
        "en": [
            "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed.",
            "The performance of the motorcycles, however, including those tested by MD, was, on balance, excellent. Now, Husqvarna continues this design trend with the new 2025 Vitpilen 801.",
            "The styling is arguably less polarizing this time, with slightly more traditional lines and a simple round headlight. More importantly, what lies beneath the styling is more potent featuring a 799 cc parallel-twin developed from earlier models in both KTM’s and Husqvarna’s lineup.",
            "This engine is now rated at 105 hp at the crank, which is an impressive number for a parallel-twin of this displacement. It features a nice spread of torque, as well.",
            "Indeed, the Vitpilen 801 is a closely related sibling of KTM’s 790 Duke, which MD has alsotested recently. The styling is quite different, of course, but some of the shared attributes, including the engine and the basic chassis geometry, promise good things from the Vitpilen 801.",
            "MD has tested so many of these KTM/Husqvarna motorcycles featuring similar parallel-twin and chassis designs that it is inescapable reaching a simple conclusion. These bikes are always extremely well balanced, and the chassis offers excellent feedback from the tire contact patches. The Vitpilen 801 was no different in our testing.",
            "This may look like a simple roadster, and it carries a relatively modest price of $10,499 in the United States, but it offers several up-scale features that add to the riding experience.",
            "It offers four rider-selectable modes, including Street, Sport, Rain and a customizable Dynamic mode. Equipped with an IMU, it features cornering ABS and cornering traction control, together with a quick-shifter. A 5 inch, bright color TFT dash is included.",
            "For the first 600 miles, a purchaser of the Vitpilen 801 can sample the “Dynamic pack”, which allows the rider to adjust throttle response as well as traction control, and even levels of wheelie control and engine braking. After this test period, you will have to pay your dealer to keep these features (in the neighborhood of $500). Our test bike had all of these features enabled.",
            "The suspension is impressive for this price category. The fork is adjustable for both compression and rebound through easily reached clickers on top of each fork tube. The fork is a beefy 43 mm diameter unit. The shock is adjustable for both spring preload and rebound.",
            "The front brake calipers are four-piston units with Husqvarna branding that squeeze two 300 mm discs. A single 240 mm rear disc is operated through a two-piston caliper. The ABS system allows you to switch to “SuperMoto mode” and disable rear ABS.",
            "The 17 inch wheels are shod with Michelin Road 6 tires sized 120/70 front and 180/55 rear.",
            "That quick-shifter operates a six-speed gearbox.",
            "The Vitpilen 801 is very light at a claimed 396 pounds with an empty fuel tank.",
            "Riding the Vitpilen 801 proved to be a pleasure, and a reminder of the quality of this chassis, now supported by adjustable suspension components. Characteristic of both Husqvarna and KTM, the suspension damping is on the firm side, but both compression and rebound can be softened for road cruising.",
            "The ergonomics are slightly more aggressive than your standard upright naked bike. A slight lean forward to the bars is coupled with pegs that offer decent leg room. The seat proved comfortable, even on longer rides.",
            "The bike handles superbly. For spirited riding, we added some spring preload in the back for our 200 pound test rider, and stiffened the fork while slowing the rebound in the shock. What we ended up with was a bike very capable, and confident, on twisty roads.",
            "The bike also offers good stability at high speeds, but, of course, as a naked bike you have to deal with wind pressure on your chest and helmet. Vibration levels are reasonable for a parallel twin, and did not interfere with our enjoyment of the bike.",
            "The house-branded brakes get the job done. Certainly better than the base model units on earlier KTM Duke 790s and 890s, they proved more than adequate on the road with a mild initial bite but progressive and adequate power.",
            "The quick-shifter also seemed improved from some of the earlier Husqvarna and KTM models with this feature. It doesn’t like to be shifted between first and second gear, which is not unlike most of the competition, and prefers up-shifts under power. Nevertheless, it was a pleasant addition to the bike, and did not distract from the riding experience.",
            "Throttle response was excellent in the Street mode, but slightly touchy in the Sport mode. This seems to be fairly typical of most modern bikes. Nevertheless, Sport mode is usable for aggressive riding, but Street mode works better everywhere else.",
            "The stock Michelin Road 6 tires are quality rubber. Their presence on the bike is somewhat surprising given its modest price point. Nevertheless, we are not big fans of the Road 6 tires. We find them adequate until pushed hard on twisty roads, where grip is not in the sport tire category, for certain, and also, in our experience, less than available from some of the sport touring tire competition.",
            "The fuel tank capacity is 3.7 gallons and offers decent range while the bike returns roughly 50 MPG in mixed riding.",
            "Styling is subjective, for sure, but we think the new Vitpilen 801 is a very good looking machine. It also performs very well and is reasonably priced given the technology available and the fully adjustable suspension. Take a look at Husqvarna’swebsitefor additional details and specifications"
        ],
        "es": [
            "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed.",
            "The performance of the motorcycles, however, including those tested by MD, was, on balance, excellent. Now, Husqvarna continues this design trend with the new 2025 Vitpilen 801.",
            "The styling is arguably less polarizing this time, with slightly more traditional lines and a simple round headlight. More importantly, what lies beneath the styling is more potent featuring a 799 cc parallel-twin developed from earlier models in both KTM’s and Husqvarna’s lineup.",
            "This engine is now rated at 105 hp at the crank, which is an impressive number for a parallel-twin of this displacement. It features a nice spread of torque, as well.",
            "Indeed, the Vitpilen 801 is a closely related sibling of KTM’s 790 Duke, which MD has alsotested recently. The styling is quite different, of course, but some of the shared attributes, including the engine and the basic chassis geometry, promise good things from the Vitpilen 801.",
            "MD has tested so many of these KTM/Husqvarna motorcycles featuring similar parallel-twin and chassis designs that it is inescapable reaching a simple conclusion. These bikes are always extremely well balanced, and the chassis offers excellent feedback from the tire contact patches. The Vitpilen 801 was no different in our testing.",
            "This may look like a simple roadster, and it carries a relatively modest price of $10,499 in the United States, but it offers several up-scale features that add to the riding experience.",
            "It offers four rider-selectable modes, including Street, Sport, Rain and a customizable Dynamic mode. Equipped with an IMU, it features cornering ABS and cornering traction control, together with a quick-shifter. A 5 inch, bright color TFT dash is included.",
            "For the first 600 miles, a purchaser of the Vitpilen 801 can sample the “Dynamic pack”, which allows the rider to adjust throttle response as well as traction control, and even levels of wheelie control and engine braking. After this test period, you will have to pay your dealer to keep these features (in the neighborhood of $500). Our test bike had all of these features enabled.",
            "The suspension is impressive for this price category. The fork is adjustable for both compression and rebound through easily reached clickers on top of each fork tube. The fork is a beefy 43 mm diameter unit. The shock is adjustable for both spring preload and rebound.",
            "The front brake calipers are four-piston units with Husqvarna branding that squeeze two 300 mm discs. A single 240 mm rear disc is operated through a two-piston caliper. The ABS system allows you to switch to “SuperMoto mode” and disable rear ABS.",
            "The 17 inch wheels are shod with Michelin Road 6 tires sized 120/70 front and 180/55 rear.",
            "That quick-shifter operates a six-speed gearbox.",
            "The Vitpilen 801 is very light at a claimed 396 pounds with an empty fuel tank.",
            "Riding the Vitpilen 801 proved to be a pleasure, and a reminder of the quality of this chassis, now supported by adjustable suspension components. Characteristic of both Husqvarna and KTM, the suspension damping is on the firm side, but both compression and rebound can be softened for road cruising.",
            "The ergonomics are slightly more aggressive than your standard upright naked bike. A slight lean forward to the bars is coupled with pegs that offer decent leg room. The seat proved comfortable, even on longer rides.",
            "The bike handles superbly. For spirited riding, we added some spring preload in the back for our 200 pound test rider, and stiffened the fork while slowing the rebound in the shock. What we ended up with was a bike very capable, and confident, on twisty roads.",
            "The bike also offers good stability at high speeds, but, of course, as a naked bike you have to deal with wind pressure on your chest and helmet. Vibration levels are reasonable for a parallel twin, and did not interfere with our enjoyment of the bike.",
            "The house-branded brakes get the job done. Certainly better than the base model units on earlier KTM Duke 790s and 890s, they proved more than adequate on the road with a mild initial bite but progressive and adequate power.",
            "The quick-shifter also seemed improved from some of the earlier Husqvarna and KTM models with this feature. It doesn’t like to be shifted between first and second gear, which is not unlike most of the competition, and prefers up-shifts under power. Nevertheless, it was a pleasant addition to the bike, and did not distract from the riding experience.",
            "Throttle response was excellent in the Street mode, but slightly touchy in the Sport mode. This seems to be fairly typical of most modern bikes. Nevertheless, Sport mode is usable for aggressive riding, but Street mode works better everywhere else.",
            "The stock Michelin Road 6 tires are quality rubber. Their presence on the bike is somewhat surprising given its modest price point. Nevertheless, we are not big fans of the Road 6 tires. We find them adequate until pushed hard on twisty roads, where grip is not in the sport tire category, for certain, and also, in our experience, less than available from some of the sport touring tire competition.",
            "The fuel tank capacity is 3.7 gallons and offers decent range while the bike returns roughly 50 MPG in mixed riding.",
            "Styling is subjective, for sure, but we think the new Vitpilen 801 is a very good looking machine. It also performs very well and is reasonably priced given the technology available and the fully adjustable suspension. Take a look at Husqvarna’swebsitefor additional details and specifications"
        ],
        "it": [
            "Just a few years ago, Husqvarna began introducing Vitpilen and Svartpilen models of various engine displacements with its own interpretation of Scandinavian styling. The reaction to the styling, to say the least, was mixed.",
            "The performance of the motorcycles, however, including those tested by MD, was, on balance, excellent. Now, Husqvarna continues this design trend with the new 2025 Vitpilen 801.",
            "The styling is arguably less polarizing this time, with slightly more traditional lines and a simple round headlight. More importantly, what lies beneath the styling is more potent featuring a 799 cc parallel-twin developed from earlier models in both KTM’s and Husqvarna’s lineup.",
            "This engine is now rated at 105 hp at the crank, which is an impressive number for a parallel-twin of this displacement. It features a nice spread of torque, as well.",
            "Indeed, the Vitpilen 801 is a closely related sibling of KTM’s 790 Duke, which MD has alsotested recently. The styling is quite different, of course, but some of the shared attributes, including the engine and the basic chassis geometry, promise good things from the Vitpilen 801.",
            "MD has tested so many of these KTM/Husqvarna motorcycles featuring similar parallel-twin and chassis designs that it is inescapable reaching a simple conclusion. These bikes are always extremely well balanced, and the chassis offers excellent feedback from the tire contact patches. The Vitpilen 801 was no different in our testing.",
            "This may look like a simple roadster, and it carries a relatively modest price of $10,499 in the United States, but it offers several up-scale features that add to the riding experience.",
            "It offers four rider-selectable modes, including Street, Sport, Rain and a customizable Dynamic mode. Equipped with an IMU, it features cornering ABS and cornering traction control, together with a quick-shifter. A 5 inch, bright color TFT dash is included.",
            "For the first 600 miles, a purchaser of the Vitpilen 801 can sample the “Dynamic pack”, which allows the rider to adjust throttle response as well as traction control, and even levels of wheelie control and engine braking. After this test period, you will have to pay your dealer to keep these features (in the neighborhood of $500). Our test bike had all of these features enabled.",
            "The suspension is impressive for this price category. The fork is adjustable for both compression and rebound through easily reached clickers on top of each fork tube. The fork is a beefy 43 mm diameter unit. The shock is adjustable for both spring preload and rebound.",
            "The front brake calipers are four-piston units with Husqvarna branding that squeeze two 300 mm discs. A single 240 mm rear disc is operated through a two-piston caliper. The ABS system allows you to switch to “SuperMoto mode” and disable rear ABS.",
            "The 17 inch wheels are shod with Michelin Road 6 tires sized 120/70 front and 180/55 rear.",
            "That quick-shifter operates a six-speed gearbox.",
            "The Vitpilen 801 is very light at a claimed 396 pounds with an empty fuel tank.",
            "Riding the Vitpilen 801 proved to be a pleasure, and a reminder of the quality of this chassis, now supported by adjustable suspension components. Characteristic of both Husqvarna and KTM, the suspension damping is on the firm side, but both compression and rebound can be softened for road cruising.",
            "The ergonomics are slightly more aggressive than your standard upright naked bike. A slight lean forward to the bars is coupled with pegs that offer decent leg room. The seat proved comfortable, even on longer rides.",
            "The bike handles superbly. For spirited riding, we added some spring preload in the back for our 200 pound test rider, and stiffened the fork while slowing the rebound in the shock. What we ended up with was a bike very capable, and confident, on twisty roads.",
            "The bike also offers good stability at high speeds, but, of course, as a naked bike you have to deal with wind pressure on your chest and helmet. Vibration levels are reasonable for a parallel twin, and did not interfere with our enjoyment of the bike.",
            "The house-branded brakes get the job done. Certainly better than the base model units on earlier KTM Duke 790s and 890s, they proved more than adequate on the road with a mild initial bite but progressive and adequate power.",
            "The quick-shifter also seemed improved from some of the earlier Husqvarna and KTM models with this feature. It doesn’t like to be shifted between first and second gear, which is not unlike most of the competition, and prefers up-shifts under power. Nevertheless, it was a pleasant addition to the bike, and did not distract from the riding experience.",
            "Throttle response was excellent in the Street mode, but slightly touchy in the Sport mode. This seems to be fairly typical of most modern bikes. Nevertheless, Sport mode is usable for aggressive riding, but Street mode works better everywhere else.",
            "The stock Michelin Road 6 tires are quality rubber. Their presence on the bike is somewhat surprising given its modest price point. Nevertheless, we are not big fans of the Road 6 tires. We find them adequate until pushed hard on twisty roads, where grip is not in the sport tire category, for certain, and also, in our experience, less than available from some of the sport touring tire competition.",
            "The fuel tank capacity is 3.7 gallons and offers decent range while the bike returns roughly 50 MPG in mixed riding.",
            "Styling is subjective, for sure, but we think the new Vitpilen 801 is a very good looking machine. It also performs very well and is reasonably priced given the technology available and the fully adjustable suspension. Take a look at Husqvarna’swebsitefor additional details and specifications"
        ]
    }
},
,
{
    "id": "all-eicma-riding-fest-in-prova-c-anche-la-nuova-bmw-f-450-gs-eicma",
    "title": {
        "fr": "All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS - EICMA",
        "en": "All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS - EICMA",
        "es": "All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS - EICMA",
        "it": "All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS - EICMA"
    },
    "excerpt": {
        "fr": "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS.",
        "en": "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS.",
        "es": "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS.",
        "it": "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS."
    },
    "image": newsNew23,
    "category": "New Bikes",
    "readTime": "1 min",
    "body": {
        "fr": [
            "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS.",
            "Pensata per i possessori di patente A2, la nuova adventure compatta combina accessibilità e spirito GS, grazie al bicilindrico in linea da 420 cc e 48 CV, alla frizione Easy Ride Clutch e a soluzioni tecniche derivate dai modelli di fascia alta. Durante l’evento di Misano, giunto quest'anno alla terza edizione, il pubblico potrà provarla partecipando a test ride dedicati, così da valutarne agilità, comfort e versatilità sia su asfalto sia in off-road. Oltre alla F 450 GS, sarà disponibilel’intera gammaBMW Motorrad, mentre in pista si potrà salire in sella allaBMW S 1000 RRper vivere un’esperienza di guida coinvolgente.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ],
        "en": [
            "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS.",
            "Pensata per i possessori di patente A2, la nuova adventure compatta combina accessibilità e spirito GS, grazie al bicilindrico in linea da 420 cc e 48 CV, alla frizione Easy Ride Clutch e a soluzioni tecniche derivate dai modelli di fascia alta. Durante l’evento di Misano, giunto quest'anno alla terza edizione, il pubblico potrà provarla partecipando a test ride dedicati, così da valutarne agilità, comfort e versatilità sia su asfalto sia in off-road. Oltre alla F 450 GS, sarà disponibilel’intera gammaBMW Motorrad, mentre in pista si potrà salire in sella allaBMW S 1000 RRper vivere un’esperienza di guida coinvolgente.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ],
        "es": [
            "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS.",
            "Pensata per i possessori di patente A2, la nuova adventure compatta combina accessibilità e spirito GS, grazie al bicilindrico in linea da 420 cc e 48 CV, alla frizione Easy Ride Clutch e a soluzioni tecniche derivate dai modelli di fascia alta. Durante l’evento di Misano, giunto quest'anno alla terza edizione, il pubblico potrà provarla partecipando a test ride dedicati, così da valutarne agilità, comfort e versatilità sia su asfalto sia in off-road. Oltre alla F 450 GS, sarà disponibilel’intera gammaBMW Motorrad, mentre in pista si potrà salire in sella allaBMW S 1000 RRper vivere un’esperienza di guida coinvolgente.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ],
        "it": [
            "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta aldebutto dinamico la nuova adventure bikeF 450 GS.",
            "Pensata per i possessori di patente A2, la nuova adventure compatta combina accessibilità e spirito GS, grazie al bicilindrico in linea da 420 cc e 48 CV, alla frizione Easy Ride Clutch e a soluzioni tecniche derivate dai modelli di fascia alta. Durante l’evento di Misano, giunto quest'anno alla terza edizione, il pubblico potrà provarla partecipando a test ride dedicati, così da valutarne agilità, comfort e versatilità sia su asfalto sia in off-road. Oltre alla F 450 GS, sarà disponibilel’intera gammaBMW Motorrad, mentre in pista si potrà salire in sella allaBMW S 1000 RRper vivere un’esperienza di guida coinvolgente.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ]
    }
},
,
{
    "id": "benelli-bkx-300-e-bkx-300-s-due-anime-un-solo-motore-eicma",
    "title": {
        "fr": "Benelli BKX 300 e BKX 300 S: due anime, un solo motore - EICMA",
        "en": "Benelli BKX 300 e BKX 300 S: due anime, un solo motore - EICMA",
        "es": "Benelli BKX 300 e BKX 300 S: due anime, un solo motore - EICMA",
        "it": "Benelli BKX 300 e BKX 300 S: due anime, un solo motore - EICMA"
    },
    "excerpt": {
        "fr": "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura.",
        "en": "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura.",
        "es": "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura.",
        "it": "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura."
    },
    "image": newsNew24,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
        "fr": [
            "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura.",
            "Il design è firmato dal Centro Stile Benelli di Pesaroe riprende il linguaggio stilistico delle versioni 125 cc. Al centro del progetto c’è ilmotore monocilindrico quattro tempi da 292,4 cc con raffreddamento a liquido, eroga 28,6 CV e 24 Nm di coppia, nei limiti imposti dalla patente A2. I consumi contenuti e il serbatoio da 12 litri promettono una buona autonomia.Le differenze tra i due modelli risiedono nella ciclistica e nell’assetto: la adventure BKX 300 è dotata di cerchi a raggi da 19” all’anteriore e da 17” al posteriore; la BKX 300 sceglie invece cerchi in lega da 17” per un’impostazione più reattiva su strada. Su entrambe all’anteriore lavora una forcella da 41 mm regolabile in precarico, compressione ed estensione; al posteriore troviamo il monoammortizzatore con leveraggio progressivo, regolabile in precarico ed estensione.Il set-up è però differente: la BKX 300 strizza l’occhio al fuoristrada, grazie a un’escursione ruota di 180 mm e 229 mm di luce a terra, sella a 860 mm e un peso in ordine di marcia di 156 kg.La BKX 300 S sfrutta invece un assetto ottimizzato per l'asfaltoe i cambi di direzione rapidi, senza rinunciare alla versatilità urbana. Per lei 150 mm di escursione ruota, sella a 820 mm da terra e 153 kg di peso in ordine di marcia. La dotazione tecnica per entrambe è completata dall’impianto frenante con ABS, disco anteriore da 300 mm con pinza radiale a quattro pistoncini, disco da 240 mm e pinza flottante a singolo pistoncino al posteriore. Le pedane sulle nuove BKX 300 e BKX 300 S si regolano su due posizioni, per adattare l'ergonomia di guida; la dotazione tecnologica prevede strumentazione LCD e una presa USB.Le nuove Benelli BKX 300 e BKX 300 S saranno disponibili nelle concessionarie entro la prima metà di maggio 2026.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ],
        "en": [
            "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura.",
            "Il design è firmato dal Centro Stile Benelli di Pesaroe riprende il linguaggio stilistico delle versioni 125 cc. Al centro del progetto c’è ilmotore monocilindrico quattro tempi da 292,4 cc con raffreddamento a liquido, eroga 28,6 CV e 24 Nm di coppia, nei limiti imposti dalla patente A2. I consumi contenuti e il serbatoio da 12 litri promettono una buona autonomia.Le differenze tra i due modelli risiedono nella ciclistica e nell’assetto: la adventure BKX 300 è dotata di cerchi a raggi da 19” all’anteriore e da 17” al posteriore; la BKX 300 sceglie invece cerchi in lega da 17” per un’impostazione più reattiva su strada. Su entrambe all’anteriore lavora una forcella da 41 mm regolabile in precarico, compressione ed estensione; al posteriore troviamo il monoammortizzatore con leveraggio progressivo, regolabile in precarico ed estensione.Il set-up è però differente: la BKX 300 strizza l’occhio al fuoristrada, grazie a un’escursione ruota di 180 mm e 229 mm di luce a terra, sella a 860 mm e un peso in ordine di marcia di 156 kg.La BKX 300 S sfrutta invece un assetto ottimizzato per l'asfaltoe i cambi di direzione rapidi, senza rinunciare alla versatilità urbana. Per lei 150 mm di escursione ruota, sella a 820 mm da terra e 153 kg di peso in ordine di marcia. La dotazione tecnica per entrambe è completata dall’impianto frenante con ABS, disco anteriore da 300 mm con pinza radiale a quattro pistoncini, disco da 240 mm e pinza flottante a singolo pistoncino al posteriore. Le pedane sulle nuove BKX 300 e BKX 300 S si regolano su due posizioni, per adattare l'ergonomia di guida; la dotazione tecnologica prevede strumentazione LCD e una presa USB.Le nuove Benelli BKX 300 e BKX 300 S saranno disponibili nelle concessionarie entro la prima metà di maggio 2026.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ],
        "es": [
            "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura.",
            "Il design è firmato dal Centro Stile Benelli di Pesaroe riprende il linguaggio stilistico delle versioni 125 cc. Al centro del progetto c’è ilmotore monocilindrico quattro tempi da 292,4 cc con raffreddamento a liquido, eroga 28,6 CV e 24 Nm di coppia, nei limiti imposti dalla patente A2. I consumi contenuti e il serbatoio da 12 litri promettono una buona autonomia.Le differenze tra i due modelli risiedono nella ciclistica e nell’assetto: la adventure BKX 300 è dotata di cerchi a raggi da 19” all’anteriore e da 17” al posteriore; la BKX 300 sceglie invece cerchi in lega da 17” per un’impostazione più reattiva su strada. Su entrambe all’anteriore lavora una forcella da 41 mm regolabile in precarico, compressione ed estensione; al posteriore troviamo il monoammortizzatore con leveraggio progressivo, regolabile in precarico ed estensione.Il set-up è però differente: la BKX 300 strizza l’occhio al fuoristrada, grazie a un’escursione ruota di 180 mm e 229 mm di luce a terra, sella a 860 mm e un peso in ordine di marcia di 156 kg.La BKX 300 S sfrutta invece un assetto ottimizzato per l'asfaltoe i cambi di direzione rapidi, senza rinunciare alla versatilità urbana. Per lei 150 mm di escursione ruota, sella a 820 mm da terra e 153 kg di peso in ordine di marcia. La dotazione tecnica per entrambe è completata dall’impianto frenante con ABS, disco anteriore da 300 mm con pinza radiale a quattro pistoncini, disco da 240 mm e pinza flottante a singolo pistoncino al posteriore. Le pedane sulle nuove BKX 300 e BKX 300 S si regolano su due posizioni, per adattare l'ergonomia di guida; la dotazione tecnologica prevede strumentazione LCD e una presa USB.Le nuove Benelli BKX 300 e BKX 300 S saranno disponibili nelle concessionarie entro la prima metà di maggio 2026.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ],
        "it": [
            "Benelli amplia la gamma BKX con due nuovi modelli caratterizzati dallostesso motore ma con impostazioni diverse: laBKX 300è un’adventure in grado di affrontare ilfuoristrada leggero, laBKX 300 Sè inveceuna naked pensata per la città, a suo agio tra le curve anche al di fuori delle mura.",
            "Il design è firmato dal Centro Stile Benelli di Pesaroe riprende il linguaggio stilistico delle versioni 125 cc. Al centro del progetto c’è ilmotore monocilindrico quattro tempi da 292,4 cc con raffreddamento a liquido, eroga 28,6 CV e 24 Nm di coppia, nei limiti imposti dalla patente A2. I consumi contenuti e il serbatoio da 12 litri promettono una buona autonomia.Le differenze tra i due modelli risiedono nella ciclistica e nell’assetto: la adventure BKX 300 è dotata di cerchi a raggi da 19” all’anteriore e da 17” al posteriore; la BKX 300 sceglie invece cerchi in lega da 17” per un’impostazione più reattiva su strada. Su entrambe all’anteriore lavora una forcella da 41 mm regolabile in precarico, compressione ed estensione; al posteriore troviamo il monoammortizzatore con leveraggio progressivo, regolabile in precarico ed estensione.Il set-up è però differente: la BKX 300 strizza l’occhio al fuoristrada, grazie a un’escursione ruota di 180 mm e 229 mm di luce a terra, sella a 860 mm e un peso in ordine di marcia di 156 kg.La BKX 300 S sfrutta invece un assetto ottimizzato per l'asfaltoe i cambi di direzione rapidi, senza rinunciare alla versatilità urbana. Per lei 150 mm di escursione ruota, sella a 820 mm da terra e 153 kg di peso in ordine di marcia. La dotazione tecnica per entrambe è completata dall’impianto frenante con ABS, disco anteriore da 300 mm con pinza radiale a quattro pistoncini, disco da 240 mm e pinza flottante a singolo pistoncino al posteriore. Le pedane sulle nuove BKX 300 e BKX 300 S si regolano su due posizioni, per adattare l'ergonomia di guida; la dotazione tecnologica prevede strumentazione LCD e una presa USB.Le nuove Benelli BKX 300 e BKX 300 S saranno disponibili nelle concessionarie entro la prima metà di maggio 2026.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ]
    }
},
,
{
    "id": "ducati-reinvents-the-hypermotard-for-2026",
    "title": {
        "fr": "Ducati Reinvents the Hypermotard for 2026",
        "en": "Ducati Reinvents the Hypermotard for 2026",
        "es": "Ducati Reinvents the Hypermotard for 2026",
        "it": "Ducati Reinvents the Hypermotard for 2026"
    },
    "excerpt": {
        "fr": "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter).",
        "en": "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter).",
        "es": "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter).",
        "it": "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter)."
    },
    "image": newsNew25,
    "category": "New Bikes",
    "readTime": "29 min",
    "body": {
        "fr": [
            "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter).",
            "An all-new frame and using the latest V2 engine, the new Hypermotard promises to give talented riders the freedom to express themselves.",
            "We don’t currently have pricing information, but these bikes should be available in the Spring of next year.",
            "Here is the press release from Ducati:",
            "DUCATI HYPERMOTARD V2",
            "Some motorcycles become icons. Motorcycles that convey emotion, adrenaline, and fun at first glance. The Ducati Hypermotard is the motorcycle that best represents all of this. A motorcycle that couldn’t be described as “Supermotard,” and that’s why it was called “Hyper.” Twenty years after EICMA 2005, where Ducati presented the first prototype, which won the “Best of Show” award on its debut, the Borgo Panigale manufacturer is writing a new chapter in the history of the “Hyper” with the new Hypermotard V2 and Hypermotard V2 SP.",
            "The fourth-generation Hypermotard is a completely redesigned motorcycle, carrying the legacy of a legendary model and projecting it into the future thanks to a totally new technical base and an unmistakable design.",
            "The most futuristic Hypermotard ever",
            "The Hypermotard V2 was created with the goal of being the best Hypermotard ever. Inspired by the 2005 prototype, it reinterprets its distinctive features with a contemporary and radical twist. The double-wing fuel tank, the streamlined front end, the dual exhaust under the tail, and the floating rear light are stylistic references to the first 1100, making the V2 immediately recognizable as a Hypermotard. The result is a modern, compact, essential motorcycle that conveys lightness at first glance. The new Hypermotard V2 and SP are the lightest and most powerful Hypermotards ever. Thanks to a weight reduction of 13 kg (14 kg for the SP) compared to the previous 950 and the 120 hp of the Ducati V2 engine, the new Hypermotard V2s are more nimble, responsive, and exciting than ever.",
            "Technology and style: essential Ducati",
            "The front of the new Hypermotard V2 is robotic and modern, designed according to a stylistic language that strives for extreme simplicity: the double DRL, reminiscent of the Hyper’s iconic light signature, is inserted into a dark, glossy headlight, the protagonist of a sculpted, single-piece front end. The clean, essential styling complements a taut, lightweight mechanical base, creating an extremely compact motorcycle.",
            "The SP version is even bolder, thanks to the oversized logo that extends to the beak, contrasting with the white forged wheels and racing details such as the carbon mudguard, the gold Öhlins suspension, and the Brembo M50 calipers. In addition to the dedicated livery, which references the 20 years since the first prototype was created, the Hypermotard V2 SP also features technical features that push the Hyper’s fun bike character even further.",
            "More power and torque, for a Hyper with unprecedented performance",
            "The new 890 cc Ducati V2 engine is perfect for the Hypermotard. It’s the lightest twin-cylinder ever produced by Ducati (54.4 kg, a weight saving of 6.42 kg compared to the previous Testastretta 11°) and, thanks to the IVT variable intake valve timing system, unique in the segment, it delivers generous power across the entire rev range with a prompt response to every throttle opening, a must-have feature for a Hypermotard.",
            "With its 120 hp, it’s the most powerful engine ever mounted on a Hypermotard. It can rev beyond 11,000 rpm, but more importantly, it has a maximum torque of 94 Nm, 70% of which is available at just 3,000 rpm, ensuring impressive acceleration out of corners. Furthermore, the shorter gear ratios and higher torque in every gear make the Hypermotard V2 faster and more responsive than the previous model. Finally, the class-leading maintenance intervals (45,000 km for valve clearance checks) ensure the fun never stops.",
            "Of course, for A2 license holders, a version with power limited to 35 kW is available, while still maintaining the Hypermotard character.",
            "Supermotard ergonomics, total control",
            "The riding position is commanding, like a true supermotard: wide handlebars, the bike narrow between the legs, light and communicative. The texture on the seat and side panels, inspired by that used on the Panigale V4, increases grip and feeling for the bike, making riding easy and fun. The SP version amplifies these sensations, making it even more nimble, lightweight, and responsive. Furthermore, the lower ground clearance compared to the previous “SP”, achieved without compromising the bike’s ability to lean on the track, allows for better transfer of the increased available torque to the ground, and increases stability and riding precision.",
            "The Hypermotard V2 is also designed to accommodate riders of all heights, thanks to lowered suspension and different seat sizes available among the Ducati Performance accessories.",
            "Monocoque frame and racing suspension",
            "The monocoque frame, unique in the segment and developed specifically for the Hypermotard, integrates the engine as a structural element and airbox, performing a dual function and ensuring maximum lightness and compactness. The steel rear subframe harks back to the first Hypermotard, while the aluminium double-sided swingarm, inspired by the Ducati Hollow Symmetrical Swingarm of the Panigale V4, ensures rigidity and a distinctive design.",
            "The new chassis makes the bike neutral, intuitive, and less tiring, with smooth and precise lean angles. The standard version features adjustable Kayaba suspension, while the SP is equipped with premium, fully adjustable Öhlins suspension (NIX30 forks with 48 mm stanchions and STX 46 shock absorber) for more refined, racing-like handling, thanks to their greater ability to smooth out micro-roughness in the road surface while providing the necessary braking support for sporty riding. Both versions are equipped with a Sachs steering damper.",
            "The Hypermotard V2 features cast light alloy wheels, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes. On the V2 SP, the forged aluminium wheels, weighing a full 1.56 kg less, reduce inertia and improve agility, while also improving trajectory accuracy. They are paired with Pirelli Diablo Rosso IV Corsa tyres. For track use, Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport 190/60 size are available.",
            "Both versions feature a complete Brembo braking system, with dual 320 mm front discs. The Hypermotard V2 is equipped with M4.32 monobloc calipers with a PR18/19 radial master cylinder, while the SP uses M50 calipers and a PR16/21 master cylinder for superior track performance.",
            "Advanced electronics for total control",
            "The new Ducati Hypermotard V2 is equipped with a latest-generation electronics package based on a 6-axis inertial measurement platform. This system detects roll, pitch, and yaw in real time, allowing for rapid, precise, and calibrated intervention of all controls, such as Cornering ABS, Ducati Traction Control (DTC), Ducati Wheelie Control (DWC), and Engine Brake Control (EBC). Each of these controls can be adjusted to multiple levels of intervention to adapt to any situation, favouring performance in sports riding or stability and safety on low-grip surfaces.",
            "The operating parameters of each of these controls are associated with the four predefined Riding Modes (Race, Sport, Road, and Wet) to modify the Hypermotard V2’s behaviour based on the situation. Riders can modify these modes to customize each mode to their individual riding style.",
            "All information is displayed on the new 5″ TFT dashboard with 800 x 480 resolution. It features three Info Modes, selectable via the new “petal” joystick on the left switchgear: Road, Road Pro, and Track, each with automatic switching between day and night views. Each of these modes presents the most relevant information for each context to maximize readability. In Road and Road Pro modes, the display shows the most relevant information for road riding, while in Track, the display focuses on essential information for track riding, and shows the level of intervention of each individual control in real time, just like on the Panigale V4.",
            "The Hypermotard V2 features four levels of Cornering ABS. Levels 1 and 2 are designed for the track, with level 2 integrating the Slide by Brake function, allowing riders to learn how to manage corner entry like supermotard pros. Levels 3 and 4 are optimized for road riding, offering maximum safety without ever being invasive.",
            "Thanks to these advanced electronics, complemented by the new Ducati Quick Shift 2.0, which makes gear changes more direct and precise, the Hypermotard V2 is fun and safe on the road, and performs well on the track, where it significantly surpasses the previous 950.The Hypermotard V2 SP will also offer the Ducati Power Launch and the Pit Limiter straight out of the crate.",
            "Ducati Performance for an even more Hyper soul",
            "For those who want to enhance the versatility or performance of the Hypermotard V2, Ducati has developed a range of Ducati Performance accessories, starting naturally with the exhaust line created in collaboration with Termignoni.",
            "Those who want to make their Hyper more aggressive can choose the homologated double silencer with titanium sleeves and carbon end caps, which adds a racing touch to the design. Those who want to unleash the full performance of the engine on the track can install the complete exhaust, not homologated for road use, which increases power by 3.6 hp, reduces weight by 4 kg, and gives the Hypermotard an even more engaging exhaust note.",
            "On the electronics front, accessories designed for everyday use are available, such as the Ducati Multimedia System (DMS) for Bluetooth smartphone connectivity and the Turn-by-Turn navigation system for a connected ride. It also features track-ready features, such as the Lap Timer Pro self-timing system, complete with GPS module.",
            "A wide range of carbon and billet aluminium components is available for an even more Hyper look: carbon fibre mudguards and engine cover, fuel tank cap, fork sliders, aluminium motard-style footpegs and footrests.",
            "Availability and Colours",
            "The new Hypermotard will arrive in european dealerships in April 2026, in two versions: Hypermotard V2 and Hypermotard V2 SP. Availability will extend in the North American market in May, 2026, and then Japan and Australia in October 2026.",
            "#DucatiWorldPremiere2026 #Ducati2026 #hypermotard",
            "Hypermotard V2 SP",
            "- Liveries",
            "- SP livery",
            "- Main standard features",
            "- V-twin engine, 890 cc",
            "- Maximum power: 120 hp at 10,750 rpm",
            "- Maximum torque: 94 Nm at 8,250 rpm",
            "- Kerb weight without fuel: 177 kg",
            "- Dedicated monocoque frame",
            "- Öhlins NIX30 48 mm upside-down forks, fully adjustable",
            "- Öhlins STX46 monoshock, fully adjustable",
            "- Forged aluminium wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Braking system with Brembo M50 calipers",
            "- Pirelli Diablo Rosso IV Corsa tyres 120/70 and 190/55",
            "- Latest-generation electronics package with 6-axis Inertial Measurement Unit (6D IMU): Four-stages ABS with cornering functionality; Ducati Traction Control (DTC); Ducati Wheelie Control (DWC);Ducati Quick Shift (DQS) 2.0; Engine Brake Control (EBC).",
            "- New petal joystick",
            "- New 5″ full-TFT dashboard with 16:9 aspect ratio",
            "- Riding Modes (Race, Sport, Road, Wet)",
            "- Full-LED headlights with DRL and dynamic turn indicators",
            "- Ready for Ducati Multimedia System (DMS), Turn-by-Turn Navigation",
            "- Lithium battery",
            "- Carbon Fiber front fender",
            "- Ducati Power Launch",
            "- Ducati Pit Limiter",
            "Hypermotard V2",
            "- Liveries",
            "- Ducati Red",
            "Main standard features as Hypermotard V2 SP with the exception of:",
            "- 46mm upside-down Kayaba forks, fully adjustable",
            "- Kayaba monoshock, adjustable for preload and rebound",
            "- Cast light-alloy wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Pirelli Diablo Rosso IV tyres, 120/70 and 190/55",
            "- Braking system with Brembo M4.32 calipers",
            "- Kerb weight without fuel: 180 kg",
            "- Lead-acid battery",
            "Twenty years after the presentation of the first prototype based on the Desmodue 1100 at EICMA 2005, the Hypermotard has undergone a complete overhaul. With the fourth generation, the Hypermotard is lighter, more powerful, and visibly more compact: in short, even more adrenaline-fuelled than the previous generation. Added to all this is a top-notch electronics package, making it even more sophisticated.",
            "The name also changes, becoming Hypermotard V2. This underscores the evolutionary leap and the fact that the bike is designed around a new mechanical base. The latter uses the new Ducati V2, 6 hp more powerful than the Testastretta 11°, and the monocoque frame, which, combined, reduce the weight by 13 kg.",
            "The Hypermotard V2 is available in two versions: the V2 and the more specialized and iconic V2 SP, which differs not only in its livery, but also for the technical features that enhance the model’s sportiness and reduce its weight by 3 kg. Every component of the Hypermotard V2 SP is designed to enhance the Hyper’s signature fun-bike character. The equipment includes Öhlins suspension, forged wheels with Pirelli Diablo Rosso IV Corsa tyres, a upgraded front braking system, and a lithium battery. The Ducati Power Launch and Pit Limiter are standard equipment.",
            "Design and Ergonomics",
            "The fourth generation of the Hypermotard returns to its origins, drawing inspiration from the Hypermotard 1100, the first Ducati fun-bike in history. The new Hypermotard V2 therefore takes the styling cues of the Hypermotard 1100 and reinterprets them in the style of contemporary Ducatis, combining taut, accelerated lines with softer, more sophisticated ones. The mechanical base, with the new Ducati V2 engine as its protagonist, defines a modern motorcycle, extreme in its compactness and essentiality, whose lightness is evident from the very first glance.",
            "The authenticity of the new Hypermotard V2 is expressed through stylistic details that recall the iconic Hypermotard 1100: the side panel with double wing, the sculpted front grille, the partially exposed trellis subframe, the floating tail with separate rear light, and the high under-seat exhausts, perfectly integrated into the bike’s profile. Added to these are the high, straight seat and the advanced fuel tank, elements that strengthen the visual and conceptual link with the motard world.",
            "The front view is very aggressive and modern, thanks to a surface treatment of the headlight and the immediately adjacent areas that renders the perimeter of the light unit almost invisible. The LED headlight is equipped with a DRL (Daytime Running Light) that creates a distinctive “double C” profile around the central reflector, creating a family feeling with the Hypermotard 698 Mono. The reflector houses the low beam, which splits the reflector in two, and the high beam, which turns it on entirely.",
            "The compact rear light, also a high-intensity LED, is positioned high up. It consists of a parking light that recalls the “double C” motif of the DRL and a brake light located in the centre. The front (located on the handguards) and rear turn indicators are also LED and switch off automatically after turns.",
            "Many styling choices were made with the aim of making the Hypermotard V2 slim and compact, including the shape of the seat, which, despite dimensions comparable to that of the 950 model, appears decidedly smaller. The colour of the tank cover, featuring a textured finish designed to increase grip for the rider’s legs, “penetrates” the seat, making it visually shorter. Furthermore, the passenger area is particularly slim thanks to the recessed profile of the seat, which, when viewed from above, creates an “hourglass” shape with the subframe cover.",
            "The SP version is immediately recognizable by its livery and the SP logo written in large letters on the fuel tank side panels, which create a colourful interplay with the white rims. The rear side panels are embellished with the number commemorating the model’s twentieth anniversary.",
            "The riding position has been completely redesigned compared to the Hypermotard 950. The footpegs have been moved forward, bringing the posture closer to that of a motard and improving rider control and chassis responsiveness, thus increasing riding enjoyment in all conditions. The variable-section handlebar, in black anodized aluminium, has been moved forward, increasing the load on the front end and thus achieving greater stability and improving the Hypermotard 950’s ability to maintain its trajectory. The handlebar width of 807 mm creates a commanding position and facilitates body movement. The black anodized steering head and clamps have a sophisticated look.",
            "The new-generation Hypermotard, both the V2 and V2 SP versions, has a seat height of 880 mm. Compared to the previous 950 SP, the V2 SP is therefore more accessible and less intimidating, with a 10 mm reduction and an instep area of 53 mm, making it much easier to touch the ground. The rider’s position is also more favourable compared to the Hypermotard 950, thanks to an instep area reduced by 18 mm.",
            "Engine",
            "The new Hypermotard is powered by the new 890 cc 90° V-twin, the lightest twin-cylinder engine (54.4 kg) ever produced by Ducati. Equipped with the IVT variable valve timing system on the hollow-stem intake valves, the new V2 represents a new chapter in the history of Ducati twin-cylinder engines, becoming the benchmark not only for its lightness, but also for its compactness, low fuel consumption and emissions (Euro 5+ homologation), combined with a wide range of use and a fully exploitable maximum power level.",
            "The IVT system continuously adjusts intake timing to always ensure the best possible delivery without compromising performance and usability, thus achieving high power at high revs, torque at medium and low revs, and a smooth response thanks to regular combustion. This eliminates the trade-off between low-end torque and high-end power, resulting in an engine that adapts to various conditions of use, from low-speed riding in urban traffic to sportier riding on mixed out-of-town roads.",
            "The V2 engine delivers a maximum power of 120 hp at 10,750 rpm, with a more decisive acceleration than the Testastretta 11° starting at 9,500 rpm, which sees the limiter intervene at 11,500 rpm. Maximum torque is 94 Nm at 8,250 rpm, with generous delivery even at low revs (more than 70% of maximum torque already available at 3,000 rpm, more than 80% always available between 4,000 rpm and 11,000 rpm), ensuring prompt response at every throttle opening and maximum usability both for everyday use and for track use.",
            "By adopting the Termignoni racing exhaust, with titanium muffler sleeves and carbon end caps, the power and torque curves are increased across the entire rev range, reaching a peak of +4 hp and +5 Nm of torque, while weight is reduced by 4.5 kg. Homologated Termignoni mufflers are also available for the Hypermotard V2 family, also with titanium sleeves and carbon end caps, which combine a sporty design with a weight reduction of 0.5 kg.",
            "The six-speed transmission is equipped with the second-generation Ducati Quick Shift (DQS) 2.0, which debuted on the new Panigale V4, and which offers a more direct shift feel; a shorter, repeatable, and less “rubbery” travel is particularly appreciated during sporty riding. The clutch is a slipper-type wet clutch with progressive hydraulic control and low lever load. The final drive ratio (15/41) has been fine-tuned to ensure optimum engine responsiveness when reopening the throttle on open roads.",
            "For younger riders with an A2 license, a version with power limited to 35 kW is available. This version delivers maximum power of 43.5 hp at 6,250 rpm, and peak torque of 5 kgm at 5,750 rpm. Maintenance intervals include valve clearance checks every 45,000 km, reducing maintenance costs.",
            "Chassis",
            "The chassis of the new Hypermotard V2 has been completely redesigned, with the specific goal of achieving a ride that, while retaining the fun-bike character of the previous generation, is more neutral, easier, and more intuitive. Leaning is now very linear, without requiring excessive pressure on the handlebars from the rider, and subsequently, when cornering, the bike does not require corrections to maintain the line.",
            "The chassis of the new Hypermotard uses a monocoque structure, designed specifically for this model, which serves both as a frame and airbox, using the V-twin engine as a structural element. This compact and rational solution allows the Hypermotard V2 to weigh 180 kg with all fluids, excluding fuel, a full 13 kg less than the previous model. The Hypermotard V2 SP, thanks to its lighter components, weighs an impressive 177 kg.",
            "The 1,517 mm wheelbase and steering geometry with 26° rake and 110 mm trail make the Hypermotard stable at speed while maintaining the model’s signature agility.",
            "Monocoque Frame",
            "The cast aluminium monocoque structure uses the new V-twin engine, to which it is attached directly to the vertical cylinder head, as a structural element. In addition to fulfilling the classic frame function, the monocoque also serves as an airbox, closed at the top by the 12.5-litre fuel tank. The frame houses the air filter, throttle bodies, and fuel circuit complete with injectors.",
            "The monocoque was specifically designed for this application, achieving higher lateral and torsional stiffness than the Panigale V2 and Streetfighter V2. For this reason, the frame features a stiffening cross at the front and a closed opening on the left side, similar to that found on other models.",
            "The rear subframe maintains the tubular steel trellis structure, inspired by that of the first Hypermotard; it is attached to the monocoque at the top and directly to the engine at the bottom.",
            "Suspension",
            "The two versions of the Hypermotard V2 differ in their suspension and wheel configurations. The Hypermotard V2 features a fully adjustable Kayaba front fork with 46 mm stanchions and a Kayaba shock absorber with adjustable preload and rebound damping.",
            "The Hypermotard V2 SP is equipped with fully adjustable Öhlins suspension, which offers a smoother ride and improved performance thanks to its greater ability to adapt to the micro-roughness of the road while still providing the necessary support during braking and acceleration. The rear shock absorber is an Öhlins STX 46 with a separate reservoir, while the front fork is an Öhlins NIX30 with 48 mm diameter stanchions and a TiN coating for improved smoothness.",
            "On both versions, the shock absorber is mounted laterally, attached directly to the new double-sided swingarm, for easy access to spring preload adjustments. Both models are equipped with a Sachs steering damper.",
            "The new double-sided swingarm, attached directly to the engine, is made of low-pressure casting aluminium alloy, reducing the average thickness of the structure. The heavily tapered external design recalls that of the Ducati Hollow Symmetrical Swingarm on the new Panigale V4, ensuring the same riding benefits in terms of mechanical grip, stability when exiting corners, precision in closing the line mid-corner, and maintaining the line through the curve. Compared to other sports models in the V2 range, the swingarm uses a different mounting system to the engine.",
            "Wheels and Tyres",
            "The Hypermotard V2 is equipped with 6-spoke Y-shaped light alloy wheels, measuring 3.50 x 17″ at the front and 5.50 x 17″ at the rear, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes.",
            "The Hypermotard V2 SP is equipped with forged wheels featuring a 5-spoke design inspired by the Desmosedici GP, which are 1.56 kg lighter. Thanks to a 27% reduction in the moment of inertia at the front and 21% at the rear, the Hypermotard V2 SP’s tendency to naturally close the line is accentuated. The forged wheels are paired with the sportier Pirelli Diablo Rosso IV Corsa tyres, which offer greater grip in the dry, superior handling at high speeds, and consistent performance over multiple intense riding sessions.",
            "For track use, the bike can be fitted with Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport size of 190/60.",
            "Brakes",
            "The new Hypermotard is equipped with a complete Brembo braking system that ensures high braking efficiency combined with precision and sensitivity at the brake lever, with excellent linearity between brake force and response. Both models, the V2 and V2 SP, are equipped with dual 320 mm discs at the front and a single 245 mm disc at the rear.",
            "The Hypermotard V2 features M4.32 monobloc calipers, controlled by a PR18/19 radial master cylinder. The front calipers on the Hypermotard V2 SP are M50 monobloc calipers with four 30 mm pistons, featuring a compact design that allows for a weight saving of 140 grams per caliper compared to the M4.32. The front system is controlled by a PR16/21 radial master cylinder, which combines excellent feel with class-leading braking power. The brake pads were chosen to ensure an easily manageable response during initial braking and maximum efficiency during the second half of braking.",
            "Electronics",
            "The new Hypermotard features a latest-generation electronics package, with controls and functions derived from those of the Panigale V4. The functions are managed through a 5″ 16:9 TFT dashboard and a “petal” joystick on completely new control blocks.",
            "To emphasize the cleanliness and elegance of the new dashboard, the physical warning lights have been removed from the external panel and moved inside the display, with the sole exception of the red LED over-rev indicator. The tachometer and gear indicator flash with a pulsating effect and turn green to indicate the moment of gear shifting, and red to signal the rev limiter intervention. During the running-in period, the tachometer turns orange when the recommended rpm is exceeded.",
            "The screen features three display modes (Info Modes) called Road, Road Pro, and Track (all with automatic switching between night and day backlighting), which differ in the type of information displayed and the corresponding graphical presentation. Using the handlebar joystick, it is possible to switch directly between the two Info Modes while riding.",
            "The Road display is designed to provide essential information for road riding. The circular tachometer bar occupies the entire right-hand side of the display, with the gear indicator in the centre. The speed and selected Riding Mode are located on the left. The on-board computer data are located at the corners of the display, including the time, coolant temperature, and air temperature.",
            "The Road Pro variant increases the density of information displayed, moving the tachometer to the centre to make room on the left for the percentage levels of power and torque delivered. The parameters for the selected Riding Mode are visible on the right.",
            "The Track Info Mode features a straight tachometer bar, positioned along the entire length of the upper part of the display. The gear indicator is larger than the Road view, while the speed indicator is smaller. The left-hand side contains information from the Lap Timer Pro, if installed (GPS signal, lap time, split time, lap and session number in progress, split time improvement indicator, and lap time (overall or session-specific, as on the Panigale V4). The right-hand side of the display shows the Riding Mode parameters, allowing the rider to vary the level of intervention of every single control while riding, displaying their activation in real time.",
            "The dashboard also allows Bluetooth pairing with a smartphone and a helmet communication system to play music, answer calls, and listen to the Turn-by-Turn navigation system (if installed).",
            "Latest-generation electronic controls",
            "The new Hypermotard V2 is equipped with modern and sophisticated electronics, based on the use of a 6-axis inertial platform, capable of instantly detecting the roll, yaw, and pitch angles of the motorcycle.",
            "The Hypermotard V2’s electronics package includes:",
            "Cornering ABS",
            "- Ducati Traction Control (DTC)",
            "- Ducati Wheelie Control (DWC)",
            "- Ducati Quick Shift (DQS) 2.0",
            "- Engine Brake Control (EBC)",
            "The operating parameters of each control are associated by default with the four Riding Modes (Race, Sport, Road, Wet). Riders can customize their riding styles and restore the default parameters set by Ducati.",
            "The Hypermotard V2 SP also comes as standard with the Ducati Power Launch (DPL) and the Ducati Pit Limiter (DPL), which can be purchased as accessories for the Hypermotard V2.",
            "Cornering ABS",
            "The Hypermotard V2’s ABS system includes a “cornering” function, which extends ABS intervention even when the bike is leaning and derives the intervention logic and control types from the Panigale V4. Compared to other sports models in the V2 range, the Hypermotard V2 offers four levels of intervention instead of three, to better meet the needs of all riders, both on the track and on the road, even in situations where grip is critical.",
            "ABS level 1, selectable even if not associated with any Riding Mode by default, is recommended for expert track riders and ensures racing-level ABS intervention, active on the front wheel only. Both the “cornering” function and rear wheel lift-up control are disabled for maximum performance.",
            "Level 2 is recommended for track use by amateur riders. The system manages both the front and rear braking systems, maintaining the cornering function active but without lift-up control, thus allowing for more sporty braking. Selecting level 2 enables the “slide-by-brake” function, which allows for drifting into corners, safely training the rider in track drifting technique.",
            "Level 3, unlike Levels 1 and 2, is a sporty setting suitable for road riding that allows for high deceleration while maintaining the cornering function and reducing lift-up control.",
            "Level 4 is recommended for road riding in low-grip conditions. It ensures safe and stable braking in all conditions and constantly monitors rear wheel lift, even during sharp deceleration.",
            "Ducati Traction Control (DTC)",
            "The Ducati Traction Control strategy used on the new Hypermotard is derived from racing experience. In addition to interfacing with the 6-axis inertial platform and adapting intervention and wheelspin to the bike’s lean angle, the software significantly improves power management out of corners thanks to the new “predictive” control strategy. By acting not only on the instantaneous value of rear wheelspin, but also on its variation, it intercepts loss of grip more quickly and reduces wheelspin peaks, thus ensuring faster and more consistent intervention. All this translates into greater vehicle stability out of corners, even in less than optimal grip conditions, greater acceleration, and improved performance.",
            "DTC, in addition to managing ignition advance and injection, intervenes in the throttle body valves when rapid intervention is not required, maintaining optimal combustion parameters and achieving smoother engine response and intervention. The control can be set to eight different levels (six designed for dry conditions and two for wet conditions), allowing riders to adapt the control strategy to their riding style, the context, and grip conditions.",
            "Ducati Wheelie Control (DWC)",
            "The Hypermotard is equipped with the latest version of Ducati Wheelie Control (DWC). This system, using information from the IMU 6D, controls wheelies and allows maximum acceleration performance to be achieved easily and safely. The DWC now more accurately detects the presence and severity of wheelies and intervenes to control them with greater precision, thus responding even more closely to the rider’s requests.",
            "Ducati Quick Shift (DQS) 2.0",
            "The Hypermotard V2 uses the second-generation DQS introduced on the new Panigale V4. Compared to a traditional quickshifter, the gear lever no longer features a Hall-effect microswitch, because the shift strategy is based solely on the gear sensor located on the shift drum. The benefit for the rider is a more direct shift feel, with a shorter, repeatable, and less “rubbery” travel, which is particularly appreciated during track riding.",
            "Engine Brake Control (EBC)",
            "EBC (Engine Brake Control) has been developed to help riders optimize the stability of the motorcycle in extreme corner entry conditions by balancing the forces applied to the rear tyre under intense engine braking. The Hypermotard V2’s EBC, optimized based on lean angle, monitors the position of the throttle valves, the selected gear, and the deceleration of the new V-twin’s crankshaft during aggressive braking, and precisely adjusts the throttle opening to balance the torque forces applied to the tyre.",
            "Riding Modes",
            "The Riding Modes allow you to choose from four different pre-set riding styles, ensuring the Hypermotard V2’s behaviour is perfectly adapted to the rider, the type of track, and environmental conditions. Each Riding Mode is associated with a different control parameter setting; selecting the different Riding Modes allows you to instantly vary the engine’s character and the intervention of the electronic controls.",
            "Race Riding Mode",
            "The Race RM is designed for track riding on high-grip asphalt. By selecting Race, the rider can count on 120 hp, with direct Ride-by-Wire throttle response. Race Mode features a default, low-intrusion electronics setting without compromising safety, with ABS at level 2 without lift-up control and the activation of the “slide-by-brake” function, a controlled slide under braking that allows the bike to be safely sideways when entering a corner.",
            "Sport Riding Mode",
            "By selecting Sport RM, the rider can count on 120 hp of power delivery with a sporty Ride-by-Wire throttle response. The electronic controls are configured to perfectly support the rider when riding on dry roads. Rear wheel lift-up control under braking is engaged, and the Cornering ABS function is set to offer maximum performance when cornering.",
            "Road Riding Mode",
            "Road RM is recommended for use on low-grip surfaces. It provides the rider with 120 hp of power delivery, with a progressive Ride-by-Wire response to throttle opening, as with the Sport RM. The default level of electronic controls is set to offer maximum safety by ensuring the best grip and stability.",
            "Wet Riding Mode",
            "The Wet RM is designed for slippery surfaces, such as rain. With the default Low Power Mode, the Ride-by-Wire response is particularly softened, and the DTC, DWC, ABS, and EBC engine braking systems intervene even more significantly. Maximum power is limited to 95 hp/70 kW.",
            "Of course, the rider can customize the Riding Mode parameters and subsequently restore the default settings set by Ducati. It is also possible to enable Level 1 ABS (recommended for more experienced riders on the track), which intervenes only on the front wheel, without activating the cornering function and lift-up control, to offer maximum braking performance.",
            "Coming Home",
            "The Coming Home feature improves convenience and comfort. It makes it easier to see your surroundings when arriving home in the dark. After turning off the motorcycle, the low beam headlights remain on for 30 seconds before turning off automatically. This feature can be enabled from the Menu.",
            "Ducati Brake Light (DBL) EVO",
            "The new Hypermotard V2 is equipped with the Ducati Brake Light EVO to improve safety in urban traffic. In the event of sudden braking from a speed above 55 km/h (34 mph), the rear light flashes rapidly to warn following vehicles. The hazard light activates when deceleration drops below a predefined threshold, and the rear brake flasher automatically deactivates.",
            "DBL is disabled in the RM Race.",
            "Accessories",
            "Ducati Performance offers a wide range of accessories to customize the new Hypermotard. Carbon fibre parts include the front and rear mudguards, clutch and alternator covers, while the fuel tank cap, fork sliders, footpegs, and motard-style footrests are available in billet aluminium.",
            "The offering also includes brake and clutch levers, grips (heated or conventional), a USB port, Cruise Control, sport or comfort seats of varying heights, a Turn-by-Turn navigation system, a Ducati Multimedia System, tank or passenger seat bags.",
            "Also worth mentioning is the Termignoni exhaust, which is not homologated and is reserved for track use, that adds 3.6 CV and reduces weight by 4 Kgs, and the homologated double silencer (non street-legal outside EU5+ area) with titanium sleeves and carbon end caps, also developed in collaboration with Termignoni, which adds to the sporty design of the Hypermotard V2."
        ],
        "en": [
            "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter).",
            "An all-new frame and using the latest V2 engine, the new Hypermotard promises to give talented riders the freedom to express themselves.",
            "We don’t currently have pricing information, but these bikes should be available in the Spring of next year.",
            "Here is the press release from Ducati:",
            "DUCATI HYPERMOTARD V2",
            "Some motorcycles become icons. Motorcycles that convey emotion, adrenaline, and fun at first glance. The Ducati Hypermotard is the motorcycle that best represents all of this. A motorcycle that couldn’t be described as “Supermotard,” and that’s why it was called “Hyper.” Twenty years after EICMA 2005, where Ducati presented the first prototype, which won the “Best of Show” award on its debut, the Borgo Panigale manufacturer is writing a new chapter in the history of the “Hyper” with the new Hypermotard V2 and Hypermotard V2 SP.",
            "The fourth-generation Hypermotard is a completely redesigned motorcycle, carrying the legacy of a legendary model and projecting it into the future thanks to a totally new technical base and an unmistakable design.",
            "The most futuristic Hypermotard ever",
            "The Hypermotard V2 was created with the goal of being the best Hypermotard ever. Inspired by the 2005 prototype, it reinterprets its distinctive features with a contemporary and radical twist. The double-wing fuel tank, the streamlined front end, the dual exhaust under the tail, and the floating rear light are stylistic references to the first 1100, making the V2 immediately recognizable as a Hypermotard. The result is a modern, compact, essential motorcycle that conveys lightness at first glance. The new Hypermotard V2 and SP are the lightest and most powerful Hypermotards ever. Thanks to a weight reduction of 13 kg (14 kg for the SP) compared to the previous 950 and the 120 hp of the Ducati V2 engine, the new Hypermotard V2s are more nimble, responsive, and exciting than ever.",
            "Technology and style: essential Ducati",
            "The front of the new Hypermotard V2 is robotic and modern, designed according to a stylistic language that strives for extreme simplicity: the double DRL, reminiscent of the Hyper’s iconic light signature, is inserted into a dark, glossy headlight, the protagonist of a sculpted, single-piece front end. The clean, essential styling complements a taut, lightweight mechanical base, creating an extremely compact motorcycle.",
            "The SP version is even bolder, thanks to the oversized logo that extends to the beak, contrasting with the white forged wheels and racing details such as the carbon mudguard, the gold Öhlins suspension, and the Brembo M50 calipers. In addition to the dedicated livery, which references the 20 years since the first prototype was created, the Hypermotard V2 SP also features technical features that push the Hyper’s fun bike character even further.",
            "More power and torque, for a Hyper with unprecedented performance",
            "The new 890 cc Ducati V2 engine is perfect for the Hypermotard. It’s the lightest twin-cylinder ever produced by Ducati (54.4 kg, a weight saving of 6.42 kg compared to the previous Testastretta 11°) and, thanks to the IVT variable intake valve timing system, unique in the segment, it delivers generous power across the entire rev range with a prompt response to every throttle opening, a must-have feature for a Hypermotard.",
            "With its 120 hp, it’s the most powerful engine ever mounted on a Hypermotard. It can rev beyond 11,000 rpm, but more importantly, it has a maximum torque of 94 Nm, 70% of which is available at just 3,000 rpm, ensuring impressive acceleration out of corners. Furthermore, the shorter gear ratios and higher torque in every gear make the Hypermotard V2 faster and more responsive than the previous model. Finally, the class-leading maintenance intervals (45,000 km for valve clearance checks) ensure the fun never stops.",
            "Of course, for A2 license holders, a version with power limited to 35 kW is available, while still maintaining the Hypermotard character.",
            "Supermotard ergonomics, total control",
            "The riding position is commanding, like a true supermotard: wide handlebars, the bike narrow between the legs, light and communicative. The texture on the seat and side panels, inspired by that used on the Panigale V4, increases grip and feeling for the bike, making riding easy and fun. The SP version amplifies these sensations, making it even more nimble, lightweight, and responsive. Furthermore, the lower ground clearance compared to the previous “SP”, achieved without compromising the bike’s ability to lean on the track, allows for better transfer of the increased available torque to the ground, and increases stability and riding precision.",
            "The Hypermotard V2 is also designed to accommodate riders of all heights, thanks to lowered suspension and different seat sizes available among the Ducati Performance accessories.",
            "Monocoque frame and racing suspension",
            "The monocoque frame, unique in the segment and developed specifically for the Hypermotard, integrates the engine as a structural element and airbox, performing a dual function and ensuring maximum lightness and compactness. The steel rear subframe harks back to the first Hypermotard, while the aluminium double-sided swingarm, inspired by the Ducati Hollow Symmetrical Swingarm of the Panigale V4, ensures rigidity and a distinctive design.",
            "The new chassis makes the bike neutral, intuitive, and less tiring, with smooth and precise lean angles. The standard version features adjustable Kayaba suspension, while the SP is equipped with premium, fully adjustable Öhlins suspension (NIX30 forks with 48 mm stanchions and STX 46 shock absorber) for more refined, racing-like handling, thanks to their greater ability to smooth out micro-roughness in the road surface while providing the necessary braking support for sporty riding. Both versions are equipped with a Sachs steering damper.",
            "The Hypermotard V2 features cast light alloy wheels, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes. On the V2 SP, the forged aluminium wheels, weighing a full 1.56 kg less, reduce inertia and improve agility, while also improving trajectory accuracy. They are paired with Pirelli Diablo Rosso IV Corsa tyres. For track use, Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport 190/60 size are available.",
            "Both versions feature a complete Brembo braking system, with dual 320 mm front discs. The Hypermotard V2 is equipped with M4.32 monobloc calipers with a PR18/19 radial master cylinder, while the SP uses M50 calipers and a PR16/21 master cylinder for superior track performance.",
            "Advanced electronics for total control",
            "The new Ducati Hypermotard V2 is equipped with a latest-generation electronics package based on a 6-axis inertial measurement platform. This system detects roll, pitch, and yaw in real time, allowing for rapid, precise, and calibrated intervention of all controls, such as Cornering ABS, Ducati Traction Control (DTC), Ducati Wheelie Control (DWC), and Engine Brake Control (EBC). Each of these controls can be adjusted to multiple levels of intervention to adapt to any situation, favouring performance in sports riding or stability and safety on low-grip surfaces.",
            "The operating parameters of each of these controls are associated with the four predefined Riding Modes (Race, Sport, Road, and Wet) to modify the Hypermotard V2’s behaviour based on the situation. Riders can modify these modes to customize each mode to their individual riding style.",
            "All information is displayed on the new 5″ TFT dashboard with 800 x 480 resolution. It features three Info Modes, selectable via the new “petal” joystick on the left switchgear: Road, Road Pro, and Track, each with automatic switching between day and night views. Each of these modes presents the most relevant information for each context to maximize readability. In Road and Road Pro modes, the display shows the most relevant information for road riding, while in Track, the display focuses on essential information for track riding, and shows the level of intervention of each individual control in real time, just like on the Panigale V4.",
            "The Hypermotard V2 features four levels of Cornering ABS. Levels 1 and 2 are designed for the track, with level 2 integrating the Slide by Brake function, allowing riders to learn how to manage corner entry like supermotard pros. Levels 3 and 4 are optimized for road riding, offering maximum safety without ever being invasive.",
            "Thanks to these advanced electronics, complemented by the new Ducati Quick Shift 2.0, which makes gear changes more direct and precise, the Hypermotard V2 is fun and safe on the road, and performs well on the track, where it significantly surpasses the previous 950.The Hypermotard V2 SP will also offer the Ducati Power Launch and the Pit Limiter straight out of the crate.",
            "Ducati Performance for an even more Hyper soul",
            "For those who want to enhance the versatility or performance of the Hypermotard V2, Ducati has developed a range of Ducati Performance accessories, starting naturally with the exhaust line created in collaboration with Termignoni.",
            "Those who want to make their Hyper more aggressive can choose the homologated double silencer with titanium sleeves and carbon end caps, which adds a racing touch to the design. Those who want to unleash the full performance of the engine on the track can install the complete exhaust, not homologated for road use, which increases power by 3.6 hp, reduces weight by 4 kg, and gives the Hypermotard an even more engaging exhaust note.",
            "On the electronics front, accessories designed for everyday use are available, such as the Ducati Multimedia System (DMS) for Bluetooth smartphone connectivity and the Turn-by-Turn navigation system for a connected ride. It also features track-ready features, such as the Lap Timer Pro self-timing system, complete with GPS module.",
            "A wide range of carbon and billet aluminium components is available for an even more Hyper look: carbon fibre mudguards and engine cover, fuel tank cap, fork sliders, aluminium motard-style footpegs and footrests.",
            "Availability and Colours",
            "The new Hypermotard will arrive in european dealerships in April 2026, in two versions: Hypermotard V2 and Hypermotard V2 SP. Availability will extend in the North American market in May, 2026, and then Japan and Australia in October 2026.",
            "#DucatiWorldPremiere2026 #Ducati2026 #hypermotard",
            "Hypermotard V2 SP",
            "- Liveries",
            "- SP livery",
            "- Main standard features",
            "- V-twin engine, 890 cc",
            "- Maximum power: 120 hp at 10,750 rpm",
            "- Maximum torque: 94 Nm at 8,250 rpm",
            "- Kerb weight without fuel: 177 kg",
            "- Dedicated monocoque frame",
            "- Öhlins NIX30 48 mm upside-down forks, fully adjustable",
            "- Öhlins STX46 monoshock, fully adjustable",
            "- Forged aluminium wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Braking system with Brembo M50 calipers",
            "- Pirelli Diablo Rosso IV Corsa tyres 120/70 and 190/55",
            "- Latest-generation electronics package with 6-axis Inertial Measurement Unit (6D IMU): Four-stages ABS with cornering functionality; Ducati Traction Control (DTC); Ducati Wheelie Control (DWC);Ducati Quick Shift (DQS) 2.0; Engine Brake Control (EBC).",
            "- New petal joystick",
            "- New 5″ full-TFT dashboard with 16:9 aspect ratio",
            "- Riding Modes (Race, Sport, Road, Wet)",
            "- Full-LED headlights with DRL and dynamic turn indicators",
            "- Ready for Ducati Multimedia System (DMS), Turn-by-Turn Navigation",
            "- Lithium battery",
            "- Carbon Fiber front fender",
            "- Ducati Power Launch",
            "- Ducati Pit Limiter",
            "Hypermotard V2",
            "- Liveries",
            "- Ducati Red",
            "Main standard features as Hypermotard V2 SP with the exception of:",
            "- 46mm upside-down Kayaba forks, fully adjustable",
            "- Kayaba monoshock, adjustable for preload and rebound",
            "- Cast light-alloy wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Pirelli Diablo Rosso IV tyres, 120/70 and 190/55",
            "- Braking system with Brembo M4.32 calipers",
            "- Kerb weight without fuel: 180 kg",
            "- Lead-acid battery",
            "Twenty years after the presentation of the first prototype based on the Desmodue 1100 at EICMA 2005, the Hypermotard has undergone a complete overhaul. With the fourth generation, the Hypermotard is lighter, more powerful, and visibly more compact: in short, even more adrenaline-fuelled than the previous generation. Added to all this is a top-notch electronics package, making it even more sophisticated.",
            "The name also changes, becoming Hypermotard V2. This underscores the evolutionary leap and the fact that the bike is designed around a new mechanical base. The latter uses the new Ducati V2, 6 hp more powerful than the Testastretta 11°, and the monocoque frame, which, combined, reduce the weight by 13 kg.",
            "The Hypermotard V2 is available in two versions: the V2 and the more specialized and iconic V2 SP, which differs not only in its livery, but also for the technical features that enhance the model’s sportiness and reduce its weight by 3 kg. Every component of the Hypermotard V2 SP is designed to enhance the Hyper’s signature fun-bike character. The equipment includes Öhlins suspension, forged wheels with Pirelli Diablo Rosso IV Corsa tyres, a upgraded front braking system, and a lithium battery. The Ducati Power Launch and Pit Limiter are standard equipment.",
            "Design and Ergonomics",
            "The fourth generation of the Hypermotard returns to its origins, drawing inspiration from the Hypermotard 1100, the first Ducati fun-bike in history. The new Hypermotard V2 therefore takes the styling cues of the Hypermotard 1100 and reinterprets them in the style of contemporary Ducatis, combining taut, accelerated lines with softer, more sophisticated ones. The mechanical base, with the new Ducati V2 engine as its protagonist, defines a modern motorcycle, extreme in its compactness and essentiality, whose lightness is evident from the very first glance.",
            "The authenticity of the new Hypermotard V2 is expressed through stylistic details that recall the iconic Hypermotard 1100: the side panel with double wing, the sculpted front grille, the partially exposed trellis subframe, the floating tail with separate rear light, and the high under-seat exhausts, perfectly integrated into the bike’s profile. Added to these are the high, straight seat and the advanced fuel tank, elements that strengthen the visual and conceptual link with the motard world.",
            "The front view is very aggressive and modern, thanks to a surface treatment of the headlight and the immediately adjacent areas that renders the perimeter of the light unit almost invisible. The LED headlight is equipped with a DRL (Daytime Running Light) that creates a distinctive “double C” profile around the central reflector, creating a family feeling with the Hypermotard 698 Mono. The reflector houses the low beam, which splits the reflector in two, and the high beam, which turns it on entirely.",
            "The compact rear light, also a high-intensity LED, is positioned high up. It consists of a parking light that recalls the “double C” motif of the DRL and a brake light located in the centre. The front (located on the handguards) and rear turn indicators are also LED and switch off automatically after turns.",
            "Many styling choices were made with the aim of making the Hypermotard V2 slim and compact, including the shape of the seat, which, despite dimensions comparable to that of the 950 model, appears decidedly smaller. The colour of the tank cover, featuring a textured finish designed to increase grip for the rider’s legs, “penetrates” the seat, making it visually shorter. Furthermore, the passenger area is particularly slim thanks to the recessed profile of the seat, which, when viewed from above, creates an “hourglass” shape with the subframe cover.",
            "The SP version is immediately recognizable by its livery and the SP logo written in large letters on the fuel tank side panels, which create a colourful interplay with the white rims. The rear side panels are embellished with the number commemorating the model’s twentieth anniversary.",
            "The riding position has been completely redesigned compared to the Hypermotard 950. The footpegs have been moved forward, bringing the posture closer to that of a motard and improving rider control and chassis responsiveness, thus increasing riding enjoyment in all conditions. The variable-section handlebar, in black anodized aluminium, has been moved forward, increasing the load on the front end and thus achieving greater stability and improving the Hypermotard 950’s ability to maintain its trajectory. The handlebar width of 807 mm creates a commanding position and facilitates body movement. The black anodized steering head and clamps have a sophisticated look.",
            "The new-generation Hypermotard, both the V2 and V2 SP versions, has a seat height of 880 mm. Compared to the previous 950 SP, the V2 SP is therefore more accessible and less intimidating, with a 10 mm reduction and an instep area of 53 mm, making it much easier to touch the ground. The rider’s position is also more favourable compared to the Hypermotard 950, thanks to an instep area reduced by 18 mm.",
            "Engine",
            "The new Hypermotard is powered by the new 890 cc 90° V-twin, the lightest twin-cylinder engine (54.4 kg) ever produced by Ducati. Equipped with the IVT variable valve timing system on the hollow-stem intake valves, the new V2 represents a new chapter in the history of Ducati twin-cylinder engines, becoming the benchmark not only for its lightness, but also for its compactness, low fuel consumption and emissions (Euro 5+ homologation), combined with a wide range of use and a fully exploitable maximum power level.",
            "The IVT system continuously adjusts intake timing to always ensure the best possible delivery without compromising performance and usability, thus achieving high power at high revs, torque at medium and low revs, and a smooth response thanks to regular combustion. This eliminates the trade-off between low-end torque and high-end power, resulting in an engine that adapts to various conditions of use, from low-speed riding in urban traffic to sportier riding on mixed out-of-town roads.",
            "The V2 engine delivers a maximum power of 120 hp at 10,750 rpm, with a more decisive acceleration than the Testastretta 11° starting at 9,500 rpm, which sees the limiter intervene at 11,500 rpm. Maximum torque is 94 Nm at 8,250 rpm, with generous delivery even at low revs (more than 70% of maximum torque already available at 3,000 rpm, more than 80% always available between 4,000 rpm and 11,000 rpm), ensuring prompt response at every throttle opening and maximum usability both for everyday use and for track use.",
            "By adopting the Termignoni racing exhaust, with titanium muffler sleeves and carbon end caps, the power and torque curves are increased across the entire rev range, reaching a peak of +4 hp and +5 Nm of torque, while weight is reduced by 4.5 kg. Homologated Termignoni mufflers are also available for the Hypermotard V2 family, also with titanium sleeves and carbon end caps, which combine a sporty design with a weight reduction of 0.5 kg.",
            "The six-speed transmission is equipped with the second-generation Ducati Quick Shift (DQS) 2.0, which debuted on the new Panigale V4, and which offers a more direct shift feel; a shorter, repeatable, and less “rubbery” travel is particularly appreciated during sporty riding. The clutch is a slipper-type wet clutch with progressive hydraulic control and low lever load. The final drive ratio (15/41) has been fine-tuned to ensure optimum engine responsiveness when reopening the throttle on open roads.",
            "For younger riders with an A2 license, a version with power limited to 35 kW is available. This version delivers maximum power of 43.5 hp at 6,250 rpm, and peak torque of 5 kgm at 5,750 rpm. Maintenance intervals include valve clearance checks every 45,000 km, reducing maintenance costs.",
            "Chassis",
            "The chassis of the new Hypermotard V2 has been completely redesigned, with the specific goal of achieving a ride that, while retaining the fun-bike character of the previous generation, is more neutral, easier, and more intuitive. Leaning is now very linear, without requiring excessive pressure on the handlebars from the rider, and subsequently, when cornering, the bike does not require corrections to maintain the line.",
            "The chassis of the new Hypermotard uses a monocoque structure, designed specifically for this model, which serves both as a frame and airbox, using the V-twin engine as a structural element. This compact and rational solution allows the Hypermotard V2 to weigh 180 kg with all fluids, excluding fuel, a full 13 kg less than the previous model. The Hypermotard V2 SP, thanks to its lighter components, weighs an impressive 177 kg.",
            "The 1,517 mm wheelbase and steering geometry with 26° rake and 110 mm trail make the Hypermotard stable at speed while maintaining the model’s signature agility.",
            "Monocoque Frame",
            "The cast aluminium monocoque structure uses the new V-twin engine, to which it is attached directly to the vertical cylinder head, as a structural element. In addition to fulfilling the classic frame function, the monocoque also serves as an airbox, closed at the top by the 12.5-litre fuel tank. The frame houses the air filter, throttle bodies, and fuel circuit complete with injectors.",
            "The monocoque was specifically designed for this application, achieving higher lateral and torsional stiffness than the Panigale V2 and Streetfighter V2. For this reason, the frame features a stiffening cross at the front and a closed opening on the left side, similar to that found on other models.",
            "The rear subframe maintains the tubular steel trellis structure, inspired by that of the first Hypermotard; it is attached to the monocoque at the top and directly to the engine at the bottom.",
            "Suspension",
            "The two versions of the Hypermotard V2 differ in their suspension and wheel configurations. The Hypermotard V2 features a fully adjustable Kayaba front fork with 46 mm stanchions and a Kayaba shock absorber with adjustable preload and rebound damping.",
            "The Hypermotard V2 SP is equipped with fully adjustable Öhlins suspension, which offers a smoother ride and improved performance thanks to its greater ability to adapt to the micro-roughness of the road while still providing the necessary support during braking and acceleration. The rear shock absorber is an Öhlins STX 46 with a separate reservoir, while the front fork is an Öhlins NIX30 with 48 mm diameter stanchions and a TiN coating for improved smoothness.",
            "On both versions, the shock absorber is mounted laterally, attached directly to the new double-sided swingarm, for easy access to spring preload adjustments. Both models are equipped with a Sachs steering damper.",
            "The new double-sided swingarm, attached directly to the engine, is made of low-pressure casting aluminium alloy, reducing the average thickness of the structure. The heavily tapered external design recalls that of the Ducati Hollow Symmetrical Swingarm on the new Panigale V4, ensuring the same riding benefits in terms of mechanical grip, stability when exiting corners, precision in closing the line mid-corner, and maintaining the line through the curve. Compared to other sports models in the V2 range, the swingarm uses a different mounting system to the engine.",
            "Wheels and Tyres",
            "The Hypermotard V2 is equipped with 6-spoke Y-shaped light alloy wheels, measuring 3.50 x 17″ at the front and 5.50 x 17″ at the rear, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes.",
            "The Hypermotard V2 SP is equipped with forged wheels featuring a 5-spoke design inspired by the Desmosedici GP, which are 1.56 kg lighter. Thanks to a 27% reduction in the moment of inertia at the front and 21% at the rear, the Hypermotard V2 SP’s tendency to naturally close the line is accentuated. The forged wheels are paired with the sportier Pirelli Diablo Rosso IV Corsa tyres, which offer greater grip in the dry, superior handling at high speeds, and consistent performance over multiple intense riding sessions.",
            "For track use, the bike can be fitted with Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport size of 190/60.",
            "Brakes",
            "The new Hypermotard is equipped with a complete Brembo braking system that ensures high braking efficiency combined with precision and sensitivity at the brake lever, with excellent linearity between brake force and response. Both models, the V2 and V2 SP, are equipped with dual 320 mm discs at the front and a single 245 mm disc at the rear.",
            "The Hypermotard V2 features M4.32 monobloc calipers, controlled by a PR18/19 radial master cylinder. The front calipers on the Hypermotard V2 SP are M50 monobloc calipers with four 30 mm pistons, featuring a compact design that allows for a weight saving of 140 grams per caliper compared to the M4.32. The front system is controlled by a PR16/21 radial master cylinder, which combines excellent feel with class-leading braking power. The brake pads were chosen to ensure an easily manageable response during initial braking and maximum efficiency during the second half of braking.",
            "Electronics",
            "The new Hypermotard features a latest-generation electronics package, with controls and functions derived from those of the Panigale V4. The functions are managed through a 5″ 16:9 TFT dashboard and a “petal” joystick on completely new control blocks.",
            "To emphasize the cleanliness and elegance of the new dashboard, the physical warning lights have been removed from the external panel and moved inside the display, with the sole exception of the red LED over-rev indicator. The tachometer and gear indicator flash with a pulsating effect and turn green to indicate the moment of gear shifting, and red to signal the rev limiter intervention. During the running-in period, the tachometer turns orange when the recommended rpm is exceeded.",
            "The screen features three display modes (Info Modes) called Road, Road Pro, and Track (all with automatic switching between night and day backlighting), which differ in the type of information displayed and the corresponding graphical presentation. Using the handlebar joystick, it is possible to switch directly between the two Info Modes while riding.",
            "The Road display is designed to provide essential information for road riding. The circular tachometer bar occupies the entire right-hand side of the display, with the gear indicator in the centre. The speed and selected Riding Mode are located on the left. The on-board computer data are located at the corners of the display, including the time, coolant temperature, and air temperature.",
            "The Road Pro variant increases the density of information displayed, moving the tachometer to the centre to make room on the left for the percentage levels of power and torque delivered. The parameters for the selected Riding Mode are visible on the right.",
            "The Track Info Mode features a straight tachometer bar, positioned along the entire length of the upper part of the display. The gear indicator is larger than the Road view, while the speed indicator is smaller. The left-hand side contains information from the Lap Timer Pro, if installed (GPS signal, lap time, split time, lap and session number in progress, split time improvement indicator, and lap time (overall or session-specific, as on the Panigale V4). The right-hand side of the display shows the Riding Mode parameters, allowing the rider to vary the level of intervention of every single control while riding, displaying their activation in real time.",
            "The dashboard also allows Bluetooth pairing with a smartphone and a helmet communication system to play music, answer calls, and listen to the Turn-by-Turn navigation system (if installed).",
            "Latest-generation electronic controls",
            "The new Hypermotard V2 is equipped with modern and sophisticated electronics, based on the use of a 6-axis inertial platform, capable of instantly detecting the roll, yaw, and pitch angles of the motorcycle.",
            "The Hypermotard V2’s electronics package includes:",
            "Cornering ABS",
            "- Ducati Traction Control (DTC)",
            "- Ducati Wheelie Control (DWC)",
            "- Ducati Quick Shift (DQS) 2.0",
            "- Engine Brake Control (EBC)",
            "The operating parameters of each control are associated by default with the four Riding Modes (Race, Sport, Road, Wet). Riders can customize their riding styles and restore the default parameters set by Ducati.",
            "The Hypermotard V2 SP also comes as standard with the Ducati Power Launch (DPL) and the Ducati Pit Limiter (DPL), which can be purchased as accessories for the Hypermotard V2.",
            "Cornering ABS",
            "The Hypermotard V2’s ABS system includes a “cornering” function, which extends ABS intervention even when the bike is leaning and derives the intervention logic and control types from the Panigale V4. Compared to other sports models in the V2 range, the Hypermotard V2 offers four levels of intervention instead of three, to better meet the needs of all riders, both on the track and on the road, even in situations where grip is critical.",
            "ABS level 1, selectable even if not associated with any Riding Mode by default, is recommended for expert track riders and ensures racing-level ABS intervention, active on the front wheel only. Both the “cornering” function and rear wheel lift-up control are disabled for maximum performance.",
            "Level 2 is recommended for track use by amateur riders. The system manages both the front and rear braking systems, maintaining the cornering function active but without lift-up control, thus allowing for more sporty braking. Selecting level 2 enables the “slide-by-brake” function, which allows for drifting into corners, safely training the rider in track drifting technique.",
            "Level 3, unlike Levels 1 and 2, is a sporty setting suitable for road riding that allows for high deceleration while maintaining the cornering function and reducing lift-up control.",
            "Level 4 is recommended for road riding in low-grip conditions. It ensures safe and stable braking in all conditions and constantly monitors rear wheel lift, even during sharp deceleration.",
            "Ducati Traction Control (DTC)",
            "The Ducati Traction Control strategy used on the new Hypermotard is derived from racing experience. In addition to interfacing with the 6-axis inertial platform and adapting intervention and wheelspin to the bike’s lean angle, the software significantly improves power management out of corners thanks to the new “predictive” control strategy. By acting not only on the instantaneous value of rear wheelspin, but also on its variation, it intercepts loss of grip more quickly and reduces wheelspin peaks, thus ensuring faster and more consistent intervention. All this translates into greater vehicle stability out of corners, even in less than optimal grip conditions, greater acceleration, and improved performance.",
            "DTC, in addition to managing ignition advance and injection, intervenes in the throttle body valves when rapid intervention is not required, maintaining optimal combustion parameters and achieving smoother engine response and intervention. The control can be set to eight different levels (six designed for dry conditions and two for wet conditions), allowing riders to adapt the control strategy to their riding style, the context, and grip conditions.",
            "Ducati Wheelie Control (DWC)",
            "The Hypermotard is equipped with the latest version of Ducati Wheelie Control (DWC). This system, using information from the IMU 6D, controls wheelies and allows maximum acceleration performance to be achieved easily and safely. The DWC now more accurately detects the presence and severity of wheelies and intervenes to control them with greater precision, thus responding even more closely to the rider’s requests.",
            "Ducati Quick Shift (DQS) 2.0",
            "The Hypermotard V2 uses the second-generation DQS introduced on the new Panigale V4. Compared to a traditional quickshifter, the gear lever no longer features a Hall-effect microswitch, because the shift strategy is based solely on the gear sensor located on the shift drum. The benefit for the rider is a more direct shift feel, with a shorter, repeatable, and less “rubbery” travel, which is particularly appreciated during track riding.",
            "Engine Brake Control (EBC)",
            "EBC (Engine Brake Control) has been developed to help riders optimize the stability of the motorcycle in extreme corner entry conditions by balancing the forces applied to the rear tyre under intense engine braking. The Hypermotard V2’s EBC, optimized based on lean angle, monitors the position of the throttle valves, the selected gear, and the deceleration of the new V-twin’s crankshaft during aggressive braking, and precisely adjusts the throttle opening to balance the torque forces applied to the tyre.",
            "Riding Modes",
            "The Riding Modes allow you to choose from four different pre-set riding styles, ensuring the Hypermotard V2’s behaviour is perfectly adapted to the rider, the type of track, and environmental conditions. Each Riding Mode is associated with a different control parameter setting; selecting the different Riding Modes allows you to instantly vary the engine’s character and the intervention of the electronic controls.",
            "Race Riding Mode",
            "The Race RM is designed for track riding on high-grip asphalt. By selecting Race, the rider can count on 120 hp, with direct Ride-by-Wire throttle response. Race Mode features a default, low-intrusion electronics setting without compromising safety, with ABS at level 2 without lift-up control and the activation of the “slide-by-brake” function, a controlled slide under braking that allows the bike to be safely sideways when entering a corner.",
            "Sport Riding Mode",
            "By selecting Sport RM, the rider can count on 120 hp of power delivery with a sporty Ride-by-Wire throttle response. The electronic controls are configured to perfectly support the rider when riding on dry roads. Rear wheel lift-up control under braking is engaged, and the Cornering ABS function is set to offer maximum performance when cornering.",
            "Road Riding Mode",
            "Road RM is recommended for use on low-grip surfaces. It provides the rider with 120 hp of power delivery, with a progressive Ride-by-Wire response to throttle opening, as with the Sport RM. The default level of electronic controls is set to offer maximum safety by ensuring the best grip and stability.",
            "Wet Riding Mode",
            "The Wet RM is designed for slippery surfaces, such as rain. With the default Low Power Mode, the Ride-by-Wire response is particularly softened, and the DTC, DWC, ABS, and EBC engine braking systems intervene even more significantly. Maximum power is limited to 95 hp/70 kW.",
            "Of course, the rider can customize the Riding Mode parameters and subsequently restore the default settings set by Ducati. It is also possible to enable Level 1 ABS (recommended for more experienced riders on the track), which intervenes only on the front wheel, without activating the cornering function and lift-up control, to offer maximum braking performance.",
            "Coming Home",
            "The Coming Home feature improves convenience and comfort. It makes it easier to see your surroundings when arriving home in the dark. After turning off the motorcycle, the low beam headlights remain on for 30 seconds before turning off automatically. This feature can be enabled from the Menu.",
            "Ducati Brake Light (DBL) EVO",
            "The new Hypermotard V2 is equipped with the Ducati Brake Light EVO to improve safety in urban traffic. In the event of sudden braking from a speed above 55 km/h (34 mph), the rear light flashes rapidly to warn following vehicles. The hazard light activates when deceleration drops below a predefined threshold, and the rear brake flasher automatically deactivates.",
            "DBL is disabled in the RM Race.",
            "Accessories",
            "Ducati Performance offers a wide range of accessories to customize the new Hypermotard. Carbon fibre parts include the front and rear mudguards, clutch and alternator covers, while the fuel tank cap, fork sliders, footpegs, and motard-style footrests are available in billet aluminium.",
            "The offering also includes brake and clutch levers, grips (heated or conventional), a USB port, Cruise Control, sport or comfort seats of varying heights, a Turn-by-Turn navigation system, a Ducati Multimedia System, tank or passenger seat bags.",
            "Also worth mentioning is the Termignoni exhaust, which is not homologated and is reserved for track use, that adds 3.6 CV and reduces weight by 4 Kgs, and the homologated double silencer (non street-legal outside EU5+ area) with titanium sleeves and carbon end caps, also developed in collaboration with Termignoni, which adds to the sporty design of the Hypermotard V2."
        ],
        "es": [
            "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter).",
            "An all-new frame and using the latest V2 engine, the new Hypermotard promises to give talented riders the freedom to express themselves.",
            "We don’t currently have pricing information, but these bikes should be available in the Spring of next year.",
            "Here is the press release from Ducati:",
            "DUCATI HYPERMOTARD V2",
            "Some motorcycles become icons. Motorcycles that convey emotion, adrenaline, and fun at first glance. The Ducati Hypermotard is the motorcycle that best represents all of this. A motorcycle that couldn’t be described as “Supermotard,” and that’s why it was called “Hyper.” Twenty years after EICMA 2005, where Ducati presented the first prototype, which won the “Best of Show” award on its debut, the Borgo Panigale manufacturer is writing a new chapter in the history of the “Hyper” with the new Hypermotard V2 and Hypermotard V2 SP.",
            "The fourth-generation Hypermotard is a completely redesigned motorcycle, carrying the legacy of a legendary model and projecting it into the future thanks to a totally new technical base and an unmistakable design.",
            "The most futuristic Hypermotard ever",
            "The Hypermotard V2 was created with the goal of being the best Hypermotard ever. Inspired by the 2005 prototype, it reinterprets its distinctive features with a contemporary and radical twist. The double-wing fuel tank, the streamlined front end, the dual exhaust under the tail, and the floating rear light are stylistic references to the first 1100, making the V2 immediately recognizable as a Hypermotard. The result is a modern, compact, essential motorcycle that conveys lightness at first glance. The new Hypermotard V2 and SP are the lightest and most powerful Hypermotards ever. Thanks to a weight reduction of 13 kg (14 kg for the SP) compared to the previous 950 and the 120 hp of the Ducati V2 engine, the new Hypermotard V2s are more nimble, responsive, and exciting than ever.",
            "Technology and style: essential Ducati",
            "The front of the new Hypermotard V2 is robotic and modern, designed according to a stylistic language that strives for extreme simplicity: the double DRL, reminiscent of the Hyper’s iconic light signature, is inserted into a dark, glossy headlight, the protagonist of a sculpted, single-piece front end. The clean, essential styling complements a taut, lightweight mechanical base, creating an extremely compact motorcycle.",
            "The SP version is even bolder, thanks to the oversized logo that extends to the beak, contrasting with the white forged wheels and racing details such as the carbon mudguard, the gold Öhlins suspension, and the Brembo M50 calipers. In addition to the dedicated livery, which references the 20 years since the first prototype was created, the Hypermotard V2 SP also features technical features that push the Hyper’s fun bike character even further.",
            "More power and torque, for a Hyper with unprecedented performance",
            "The new 890 cc Ducati V2 engine is perfect for the Hypermotard. It’s the lightest twin-cylinder ever produced by Ducati (54.4 kg, a weight saving of 6.42 kg compared to the previous Testastretta 11°) and, thanks to the IVT variable intake valve timing system, unique in the segment, it delivers generous power across the entire rev range with a prompt response to every throttle opening, a must-have feature for a Hypermotard.",
            "With its 120 hp, it’s the most powerful engine ever mounted on a Hypermotard. It can rev beyond 11,000 rpm, but more importantly, it has a maximum torque of 94 Nm, 70% of which is available at just 3,000 rpm, ensuring impressive acceleration out of corners. Furthermore, the shorter gear ratios and higher torque in every gear make the Hypermotard V2 faster and more responsive than the previous model. Finally, the class-leading maintenance intervals (45,000 km for valve clearance checks) ensure the fun never stops.",
            "Of course, for A2 license holders, a version with power limited to 35 kW is available, while still maintaining the Hypermotard character.",
            "Supermotard ergonomics, total control",
            "The riding position is commanding, like a true supermotard: wide handlebars, the bike narrow between the legs, light and communicative. The texture on the seat and side panels, inspired by that used on the Panigale V4, increases grip and feeling for the bike, making riding easy and fun. The SP version amplifies these sensations, making it even more nimble, lightweight, and responsive. Furthermore, the lower ground clearance compared to the previous “SP”, achieved without compromising the bike’s ability to lean on the track, allows for better transfer of the increased available torque to the ground, and increases stability and riding precision.",
            "The Hypermotard V2 is also designed to accommodate riders of all heights, thanks to lowered suspension and different seat sizes available among the Ducati Performance accessories.",
            "Monocoque frame and racing suspension",
            "The monocoque frame, unique in the segment and developed specifically for the Hypermotard, integrates the engine as a structural element and airbox, performing a dual function and ensuring maximum lightness and compactness. The steel rear subframe harks back to the first Hypermotard, while the aluminium double-sided swingarm, inspired by the Ducati Hollow Symmetrical Swingarm of the Panigale V4, ensures rigidity and a distinctive design.",
            "The new chassis makes the bike neutral, intuitive, and less tiring, with smooth and precise lean angles. The standard version features adjustable Kayaba suspension, while the SP is equipped with premium, fully adjustable Öhlins suspension (NIX30 forks with 48 mm stanchions and STX 46 shock absorber) for more refined, racing-like handling, thanks to their greater ability to smooth out micro-roughness in the road surface while providing the necessary braking support for sporty riding. Both versions are equipped with a Sachs steering damper.",
            "The Hypermotard V2 features cast light alloy wheels, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes. On the V2 SP, the forged aluminium wheels, weighing a full 1.56 kg less, reduce inertia and improve agility, while also improving trajectory accuracy. They are paired with Pirelli Diablo Rosso IV Corsa tyres. For track use, Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport 190/60 size are available.",
            "Both versions feature a complete Brembo braking system, with dual 320 mm front discs. The Hypermotard V2 is equipped with M4.32 monobloc calipers with a PR18/19 radial master cylinder, while the SP uses M50 calipers and a PR16/21 master cylinder for superior track performance.",
            "Advanced electronics for total control",
            "The new Ducati Hypermotard V2 is equipped with a latest-generation electronics package based on a 6-axis inertial measurement platform. This system detects roll, pitch, and yaw in real time, allowing for rapid, precise, and calibrated intervention of all controls, such as Cornering ABS, Ducati Traction Control (DTC), Ducati Wheelie Control (DWC), and Engine Brake Control (EBC). Each of these controls can be adjusted to multiple levels of intervention to adapt to any situation, favouring performance in sports riding or stability and safety on low-grip surfaces.",
            "The operating parameters of each of these controls are associated with the four predefined Riding Modes (Race, Sport, Road, and Wet) to modify the Hypermotard V2’s behaviour based on the situation. Riders can modify these modes to customize each mode to their individual riding style.",
            "All information is displayed on the new 5″ TFT dashboard with 800 x 480 resolution. It features three Info Modes, selectable via the new “petal” joystick on the left switchgear: Road, Road Pro, and Track, each with automatic switching between day and night views. Each of these modes presents the most relevant information for each context to maximize readability. In Road and Road Pro modes, the display shows the most relevant information for road riding, while in Track, the display focuses on essential information for track riding, and shows the level of intervention of each individual control in real time, just like on the Panigale V4.",
            "The Hypermotard V2 features four levels of Cornering ABS. Levels 1 and 2 are designed for the track, with level 2 integrating the Slide by Brake function, allowing riders to learn how to manage corner entry like supermotard pros. Levels 3 and 4 are optimized for road riding, offering maximum safety without ever being invasive.",
            "Thanks to these advanced electronics, complemented by the new Ducati Quick Shift 2.0, which makes gear changes more direct and precise, the Hypermotard V2 is fun and safe on the road, and performs well on the track, where it significantly surpasses the previous 950.The Hypermotard V2 SP will also offer the Ducati Power Launch and the Pit Limiter straight out of the crate.",
            "Ducati Performance for an even more Hyper soul",
            "For those who want to enhance the versatility or performance of the Hypermotard V2, Ducati has developed a range of Ducati Performance accessories, starting naturally with the exhaust line created in collaboration with Termignoni.",
            "Those who want to make their Hyper more aggressive can choose the homologated double silencer with titanium sleeves and carbon end caps, which adds a racing touch to the design. Those who want to unleash the full performance of the engine on the track can install the complete exhaust, not homologated for road use, which increases power by 3.6 hp, reduces weight by 4 kg, and gives the Hypermotard an even more engaging exhaust note.",
            "On the electronics front, accessories designed for everyday use are available, such as the Ducati Multimedia System (DMS) for Bluetooth smartphone connectivity and the Turn-by-Turn navigation system for a connected ride. It also features track-ready features, such as the Lap Timer Pro self-timing system, complete with GPS module.",
            "A wide range of carbon and billet aluminium components is available for an even more Hyper look: carbon fibre mudguards and engine cover, fuel tank cap, fork sliders, aluminium motard-style footpegs and footrests.",
            "Availability and Colours",
            "The new Hypermotard will arrive in european dealerships in April 2026, in two versions: Hypermotard V2 and Hypermotard V2 SP. Availability will extend in the North American market in May, 2026, and then Japan and Australia in October 2026.",
            "#DucatiWorldPremiere2026 #Ducati2026 #hypermotard",
            "Hypermotard V2 SP",
            "- Liveries",
            "- SP livery",
            "- Main standard features",
            "- V-twin engine, 890 cc",
            "- Maximum power: 120 hp at 10,750 rpm",
            "- Maximum torque: 94 Nm at 8,250 rpm",
            "- Kerb weight without fuel: 177 kg",
            "- Dedicated monocoque frame",
            "- Öhlins NIX30 48 mm upside-down forks, fully adjustable",
            "- Öhlins STX46 monoshock, fully adjustable",
            "- Forged aluminium wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Braking system with Brembo M50 calipers",
            "- Pirelli Diablo Rosso IV Corsa tyres 120/70 and 190/55",
            "- Latest-generation electronics package with 6-axis Inertial Measurement Unit (6D IMU): Four-stages ABS with cornering functionality; Ducati Traction Control (DTC); Ducati Wheelie Control (DWC);Ducati Quick Shift (DQS) 2.0; Engine Brake Control (EBC).",
            "- New petal joystick",
            "- New 5″ full-TFT dashboard with 16:9 aspect ratio",
            "- Riding Modes (Race, Sport, Road, Wet)",
            "- Full-LED headlights with DRL and dynamic turn indicators",
            "- Ready for Ducati Multimedia System (DMS), Turn-by-Turn Navigation",
            "- Lithium battery",
            "- Carbon Fiber front fender",
            "- Ducati Power Launch",
            "- Ducati Pit Limiter",
            "Hypermotard V2",
            "- Liveries",
            "- Ducati Red",
            "Main standard features as Hypermotard V2 SP with the exception of:",
            "- 46mm upside-down Kayaba forks, fully adjustable",
            "- Kayaba monoshock, adjustable for preload and rebound",
            "- Cast light-alloy wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Pirelli Diablo Rosso IV tyres, 120/70 and 190/55",
            "- Braking system with Brembo M4.32 calipers",
            "- Kerb weight without fuel: 180 kg",
            "- Lead-acid battery",
            "Twenty years after the presentation of the first prototype based on the Desmodue 1100 at EICMA 2005, the Hypermotard has undergone a complete overhaul. With the fourth generation, the Hypermotard is lighter, more powerful, and visibly more compact: in short, even more adrenaline-fuelled than the previous generation. Added to all this is a top-notch electronics package, making it even more sophisticated.",
            "The name also changes, becoming Hypermotard V2. This underscores the evolutionary leap and the fact that the bike is designed around a new mechanical base. The latter uses the new Ducati V2, 6 hp more powerful than the Testastretta 11°, and the monocoque frame, which, combined, reduce the weight by 13 kg.",
            "The Hypermotard V2 is available in two versions: the V2 and the more specialized and iconic V2 SP, which differs not only in its livery, but also for the technical features that enhance the model’s sportiness and reduce its weight by 3 kg. Every component of the Hypermotard V2 SP is designed to enhance the Hyper’s signature fun-bike character. The equipment includes Öhlins suspension, forged wheels with Pirelli Diablo Rosso IV Corsa tyres, a upgraded front braking system, and a lithium battery. The Ducati Power Launch and Pit Limiter are standard equipment.",
            "Design and Ergonomics",
            "The fourth generation of the Hypermotard returns to its origins, drawing inspiration from the Hypermotard 1100, the first Ducati fun-bike in history. The new Hypermotard V2 therefore takes the styling cues of the Hypermotard 1100 and reinterprets them in the style of contemporary Ducatis, combining taut, accelerated lines with softer, more sophisticated ones. The mechanical base, with the new Ducati V2 engine as its protagonist, defines a modern motorcycle, extreme in its compactness and essentiality, whose lightness is evident from the very first glance.",
            "The authenticity of the new Hypermotard V2 is expressed through stylistic details that recall the iconic Hypermotard 1100: the side panel with double wing, the sculpted front grille, the partially exposed trellis subframe, the floating tail with separate rear light, and the high under-seat exhausts, perfectly integrated into the bike’s profile. Added to these are the high, straight seat and the advanced fuel tank, elements that strengthen the visual and conceptual link with the motard world.",
            "The front view is very aggressive and modern, thanks to a surface treatment of the headlight and the immediately adjacent areas that renders the perimeter of the light unit almost invisible. The LED headlight is equipped with a DRL (Daytime Running Light) that creates a distinctive “double C” profile around the central reflector, creating a family feeling with the Hypermotard 698 Mono. The reflector houses the low beam, which splits the reflector in two, and the high beam, which turns it on entirely.",
            "The compact rear light, also a high-intensity LED, is positioned high up. It consists of a parking light that recalls the “double C” motif of the DRL and a brake light located in the centre. The front (located on the handguards) and rear turn indicators are also LED and switch off automatically after turns.",
            "Many styling choices were made with the aim of making the Hypermotard V2 slim and compact, including the shape of the seat, which, despite dimensions comparable to that of the 950 model, appears decidedly smaller. The colour of the tank cover, featuring a textured finish designed to increase grip for the rider’s legs, “penetrates” the seat, making it visually shorter. Furthermore, the passenger area is particularly slim thanks to the recessed profile of the seat, which, when viewed from above, creates an “hourglass” shape with the subframe cover.",
            "The SP version is immediately recognizable by its livery and the SP logo written in large letters on the fuel tank side panels, which create a colourful interplay with the white rims. The rear side panels are embellished with the number commemorating the model’s twentieth anniversary.",
            "The riding position has been completely redesigned compared to the Hypermotard 950. The footpegs have been moved forward, bringing the posture closer to that of a motard and improving rider control and chassis responsiveness, thus increasing riding enjoyment in all conditions. The variable-section handlebar, in black anodized aluminium, has been moved forward, increasing the load on the front end and thus achieving greater stability and improving the Hypermotard 950’s ability to maintain its trajectory. The handlebar width of 807 mm creates a commanding position and facilitates body movement. The black anodized steering head and clamps have a sophisticated look.",
            "The new-generation Hypermotard, both the V2 and V2 SP versions, has a seat height of 880 mm. Compared to the previous 950 SP, the V2 SP is therefore more accessible and less intimidating, with a 10 mm reduction and an instep area of 53 mm, making it much easier to touch the ground. The rider’s position is also more favourable compared to the Hypermotard 950, thanks to an instep area reduced by 18 mm.",
            "Engine",
            "The new Hypermotard is powered by the new 890 cc 90° V-twin, the lightest twin-cylinder engine (54.4 kg) ever produced by Ducati. Equipped with the IVT variable valve timing system on the hollow-stem intake valves, the new V2 represents a new chapter in the history of Ducati twin-cylinder engines, becoming the benchmark not only for its lightness, but also for its compactness, low fuel consumption and emissions (Euro 5+ homologation), combined with a wide range of use and a fully exploitable maximum power level.",
            "The IVT system continuously adjusts intake timing to always ensure the best possible delivery without compromising performance and usability, thus achieving high power at high revs, torque at medium and low revs, and a smooth response thanks to regular combustion. This eliminates the trade-off between low-end torque and high-end power, resulting in an engine that adapts to various conditions of use, from low-speed riding in urban traffic to sportier riding on mixed out-of-town roads.",
            "The V2 engine delivers a maximum power of 120 hp at 10,750 rpm, with a more decisive acceleration than the Testastretta 11° starting at 9,500 rpm, which sees the limiter intervene at 11,500 rpm. Maximum torque is 94 Nm at 8,250 rpm, with generous delivery even at low revs (more than 70% of maximum torque already available at 3,000 rpm, more than 80% always available between 4,000 rpm and 11,000 rpm), ensuring prompt response at every throttle opening and maximum usability both for everyday use and for track use.",
            "By adopting the Termignoni racing exhaust, with titanium muffler sleeves and carbon end caps, the power and torque curves are increased across the entire rev range, reaching a peak of +4 hp and +5 Nm of torque, while weight is reduced by 4.5 kg. Homologated Termignoni mufflers are also available for the Hypermotard V2 family, also with titanium sleeves and carbon end caps, which combine a sporty design with a weight reduction of 0.5 kg.",
            "The six-speed transmission is equipped with the second-generation Ducati Quick Shift (DQS) 2.0, which debuted on the new Panigale V4, and which offers a more direct shift feel; a shorter, repeatable, and less “rubbery” travel is particularly appreciated during sporty riding. The clutch is a slipper-type wet clutch with progressive hydraulic control and low lever load. The final drive ratio (15/41) has been fine-tuned to ensure optimum engine responsiveness when reopening the throttle on open roads.",
            "For younger riders with an A2 license, a version with power limited to 35 kW is available. This version delivers maximum power of 43.5 hp at 6,250 rpm, and peak torque of 5 kgm at 5,750 rpm. Maintenance intervals include valve clearance checks every 45,000 km, reducing maintenance costs.",
            "Chassis",
            "The chassis of the new Hypermotard V2 has been completely redesigned, with the specific goal of achieving a ride that, while retaining the fun-bike character of the previous generation, is more neutral, easier, and more intuitive. Leaning is now very linear, without requiring excessive pressure on the handlebars from the rider, and subsequently, when cornering, the bike does not require corrections to maintain the line.",
            "The chassis of the new Hypermotard uses a monocoque structure, designed specifically for this model, which serves both as a frame and airbox, using the V-twin engine as a structural element. This compact and rational solution allows the Hypermotard V2 to weigh 180 kg with all fluids, excluding fuel, a full 13 kg less than the previous model. The Hypermotard V2 SP, thanks to its lighter components, weighs an impressive 177 kg.",
            "The 1,517 mm wheelbase and steering geometry with 26° rake and 110 mm trail make the Hypermotard stable at speed while maintaining the model’s signature agility.",
            "Monocoque Frame",
            "The cast aluminium monocoque structure uses the new V-twin engine, to which it is attached directly to the vertical cylinder head, as a structural element. In addition to fulfilling the classic frame function, the monocoque also serves as an airbox, closed at the top by the 12.5-litre fuel tank. The frame houses the air filter, throttle bodies, and fuel circuit complete with injectors.",
            "The monocoque was specifically designed for this application, achieving higher lateral and torsional stiffness than the Panigale V2 and Streetfighter V2. For this reason, the frame features a stiffening cross at the front and a closed opening on the left side, similar to that found on other models.",
            "The rear subframe maintains the tubular steel trellis structure, inspired by that of the first Hypermotard; it is attached to the monocoque at the top and directly to the engine at the bottom.",
            "Suspension",
            "The two versions of the Hypermotard V2 differ in their suspension and wheel configurations. The Hypermotard V2 features a fully adjustable Kayaba front fork with 46 mm stanchions and a Kayaba shock absorber with adjustable preload and rebound damping.",
            "The Hypermotard V2 SP is equipped with fully adjustable Öhlins suspension, which offers a smoother ride and improved performance thanks to its greater ability to adapt to the micro-roughness of the road while still providing the necessary support during braking and acceleration. The rear shock absorber is an Öhlins STX 46 with a separate reservoir, while the front fork is an Öhlins NIX30 with 48 mm diameter stanchions and a TiN coating for improved smoothness.",
            "On both versions, the shock absorber is mounted laterally, attached directly to the new double-sided swingarm, for easy access to spring preload adjustments. Both models are equipped with a Sachs steering damper.",
            "The new double-sided swingarm, attached directly to the engine, is made of low-pressure casting aluminium alloy, reducing the average thickness of the structure. The heavily tapered external design recalls that of the Ducati Hollow Symmetrical Swingarm on the new Panigale V4, ensuring the same riding benefits in terms of mechanical grip, stability when exiting corners, precision in closing the line mid-corner, and maintaining the line through the curve. Compared to other sports models in the V2 range, the swingarm uses a different mounting system to the engine.",
            "Wheels and Tyres",
            "The Hypermotard V2 is equipped with 6-spoke Y-shaped light alloy wheels, measuring 3.50 x 17″ at the front and 5.50 x 17″ at the rear, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes.",
            "The Hypermotard V2 SP is equipped with forged wheels featuring a 5-spoke design inspired by the Desmosedici GP, which are 1.56 kg lighter. Thanks to a 27% reduction in the moment of inertia at the front and 21% at the rear, the Hypermotard V2 SP’s tendency to naturally close the line is accentuated. The forged wheels are paired with the sportier Pirelli Diablo Rosso IV Corsa tyres, which offer greater grip in the dry, superior handling at high speeds, and consistent performance over multiple intense riding sessions.",
            "For track use, the bike can be fitted with Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport size of 190/60.",
            "Brakes",
            "The new Hypermotard is equipped with a complete Brembo braking system that ensures high braking efficiency combined with precision and sensitivity at the brake lever, with excellent linearity between brake force and response. Both models, the V2 and V2 SP, are equipped with dual 320 mm discs at the front and a single 245 mm disc at the rear.",
            "The Hypermotard V2 features M4.32 monobloc calipers, controlled by a PR18/19 radial master cylinder. The front calipers on the Hypermotard V2 SP are M50 monobloc calipers with four 30 mm pistons, featuring a compact design that allows for a weight saving of 140 grams per caliper compared to the M4.32. The front system is controlled by a PR16/21 radial master cylinder, which combines excellent feel with class-leading braking power. The brake pads were chosen to ensure an easily manageable response during initial braking and maximum efficiency during the second half of braking.",
            "Electronics",
            "The new Hypermotard features a latest-generation electronics package, with controls and functions derived from those of the Panigale V4. The functions are managed through a 5″ 16:9 TFT dashboard and a “petal” joystick on completely new control blocks.",
            "To emphasize the cleanliness and elegance of the new dashboard, the physical warning lights have been removed from the external panel and moved inside the display, with the sole exception of the red LED over-rev indicator. The tachometer and gear indicator flash with a pulsating effect and turn green to indicate the moment of gear shifting, and red to signal the rev limiter intervention. During the running-in period, the tachometer turns orange when the recommended rpm is exceeded.",
            "The screen features three display modes (Info Modes) called Road, Road Pro, and Track (all with automatic switching between night and day backlighting), which differ in the type of information displayed and the corresponding graphical presentation. Using the handlebar joystick, it is possible to switch directly between the two Info Modes while riding.",
            "The Road display is designed to provide essential information for road riding. The circular tachometer bar occupies the entire right-hand side of the display, with the gear indicator in the centre. The speed and selected Riding Mode are located on the left. The on-board computer data are located at the corners of the display, including the time, coolant temperature, and air temperature.",
            "The Road Pro variant increases the density of information displayed, moving the tachometer to the centre to make room on the left for the percentage levels of power and torque delivered. The parameters for the selected Riding Mode are visible on the right.",
            "The Track Info Mode features a straight tachometer bar, positioned along the entire length of the upper part of the display. The gear indicator is larger than the Road view, while the speed indicator is smaller. The left-hand side contains information from the Lap Timer Pro, if installed (GPS signal, lap time, split time, lap and session number in progress, split time improvement indicator, and lap time (overall or session-specific, as on the Panigale V4). The right-hand side of the display shows the Riding Mode parameters, allowing the rider to vary the level of intervention of every single control while riding, displaying their activation in real time.",
            "The dashboard also allows Bluetooth pairing with a smartphone and a helmet communication system to play music, answer calls, and listen to the Turn-by-Turn navigation system (if installed).",
            "Latest-generation electronic controls",
            "The new Hypermotard V2 is equipped with modern and sophisticated electronics, based on the use of a 6-axis inertial platform, capable of instantly detecting the roll, yaw, and pitch angles of the motorcycle.",
            "The Hypermotard V2’s electronics package includes:",
            "Cornering ABS",
            "- Ducati Traction Control (DTC)",
            "- Ducati Wheelie Control (DWC)",
            "- Ducati Quick Shift (DQS) 2.0",
            "- Engine Brake Control (EBC)",
            "The operating parameters of each control are associated by default with the four Riding Modes (Race, Sport, Road, Wet). Riders can customize their riding styles and restore the default parameters set by Ducati.",
            "The Hypermotard V2 SP also comes as standard with the Ducati Power Launch (DPL) and the Ducati Pit Limiter (DPL), which can be purchased as accessories for the Hypermotard V2.",
            "Cornering ABS",
            "The Hypermotard V2’s ABS system includes a “cornering” function, which extends ABS intervention even when the bike is leaning and derives the intervention logic and control types from the Panigale V4. Compared to other sports models in the V2 range, the Hypermotard V2 offers four levels of intervention instead of three, to better meet the needs of all riders, both on the track and on the road, even in situations where grip is critical.",
            "ABS level 1, selectable even if not associated with any Riding Mode by default, is recommended for expert track riders and ensures racing-level ABS intervention, active on the front wheel only. Both the “cornering” function and rear wheel lift-up control are disabled for maximum performance.",
            "Level 2 is recommended for track use by amateur riders. The system manages both the front and rear braking systems, maintaining the cornering function active but without lift-up control, thus allowing for more sporty braking. Selecting level 2 enables the “slide-by-brake” function, which allows for drifting into corners, safely training the rider in track drifting technique.",
            "Level 3, unlike Levels 1 and 2, is a sporty setting suitable for road riding that allows for high deceleration while maintaining the cornering function and reducing lift-up control.",
            "Level 4 is recommended for road riding in low-grip conditions. It ensures safe and stable braking in all conditions and constantly monitors rear wheel lift, even during sharp deceleration.",
            "Ducati Traction Control (DTC)",
            "The Ducati Traction Control strategy used on the new Hypermotard is derived from racing experience. In addition to interfacing with the 6-axis inertial platform and adapting intervention and wheelspin to the bike’s lean angle, the software significantly improves power management out of corners thanks to the new “predictive” control strategy. By acting not only on the instantaneous value of rear wheelspin, but also on its variation, it intercepts loss of grip more quickly and reduces wheelspin peaks, thus ensuring faster and more consistent intervention. All this translates into greater vehicle stability out of corners, even in less than optimal grip conditions, greater acceleration, and improved performance.",
            "DTC, in addition to managing ignition advance and injection, intervenes in the throttle body valves when rapid intervention is not required, maintaining optimal combustion parameters and achieving smoother engine response and intervention. The control can be set to eight different levels (six designed for dry conditions and two for wet conditions), allowing riders to adapt the control strategy to their riding style, the context, and grip conditions.",
            "Ducati Wheelie Control (DWC)",
            "The Hypermotard is equipped with the latest version of Ducati Wheelie Control (DWC). This system, using information from the IMU 6D, controls wheelies and allows maximum acceleration performance to be achieved easily and safely. The DWC now more accurately detects the presence and severity of wheelies and intervenes to control them with greater precision, thus responding even more closely to the rider’s requests.",
            "Ducati Quick Shift (DQS) 2.0",
            "The Hypermotard V2 uses the second-generation DQS introduced on the new Panigale V4. Compared to a traditional quickshifter, the gear lever no longer features a Hall-effect microswitch, because the shift strategy is based solely on the gear sensor located on the shift drum. The benefit for the rider is a more direct shift feel, with a shorter, repeatable, and less “rubbery” travel, which is particularly appreciated during track riding.",
            "Engine Brake Control (EBC)",
            "EBC (Engine Brake Control) has been developed to help riders optimize the stability of the motorcycle in extreme corner entry conditions by balancing the forces applied to the rear tyre under intense engine braking. The Hypermotard V2’s EBC, optimized based on lean angle, monitors the position of the throttle valves, the selected gear, and the deceleration of the new V-twin’s crankshaft during aggressive braking, and precisely adjusts the throttle opening to balance the torque forces applied to the tyre.",
            "Riding Modes",
            "The Riding Modes allow you to choose from four different pre-set riding styles, ensuring the Hypermotard V2’s behaviour is perfectly adapted to the rider, the type of track, and environmental conditions. Each Riding Mode is associated with a different control parameter setting; selecting the different Riding Modes allows you to instantly vary the engine’s character and the intervention of the electronic controls.",
            "Race Riding Mode",
            "The Race RM is designed for track riding on high-grip asphalt. By selecting Race, the rider can count on 120 hp, with direct Ride-by-Wire throttle response. Race Mode features a default, low-intrusion electronics setting without compromising safety, with ABS at level 2 without lift-up control and the activation of the “slide-by-brake” function, a controlled slide under braking that allows the bike to be safely sideways when entering a corner.",
            "Sport Riding Mode",
            "By selecting Sport RM, the rider can count on 120 hp of power delivery with a sporty Ride-by-Wire throttle response. The electronic controls are configured to perfectly support the rider when riding on dry roads. Rear wheel lift-up control under braking is engaged, and the Cornering ABS function is set to offer maximum performance when cornering.",
            "Road Riding Mode",
            "Road RM is recommended for use on low-grip surfaces. It provides the rider with 120 hp of power delivery, with a progressive Ride-by-Wire response to throttle opening, as with the Sport RM. The default level of electronic controls is set to offer maximum safety by ensuring the best grip and stability.",
            "Wet Riding Mode",
            "The Wet RM is designed for slippery surfaces, such as rain. With the default Low Power Mode, the Ride-by-Wire response is particularly softened, and the DTC, DWC, ABS, and EBC engine braking systems intervene even more significantly. Maximum power is limited to 95 hp/70 kW.",
            "Of course, the rider can customize the Riding Mode parameters and subsequently restore the default settings set by Ducati. It is also possible to enable Level 1 ABS (recommended for more experienced riders on the track), which intervenes only on the front wheel, without activating the cornering function and lift-up control, to offer maximum braking performance.",
            "Coming Home",
            "The Coming Home feature improves convenience and comfort. It makes it easier to see your surroundings when arriving home in the dark. After turning off the motorcycle, the low beam headlights remain on for 30 seconds before turning off automatically. This feature can be enabled from the Menu.",
            "Ducati Brake Light (DBL) EVO",
            "The new Hypermotard V2 is equipped with the Ducati Brake Light EVO to improve safety in urban traffic. In the event of sudden braking from a speed above 55 km/h (34 mph), the rear light flashes rapidly to warn following vehicles. The hazard light activates when deceleration drops below a predefined threshold, and the rear brake flasher automatically deactivates.",
            "DBL is disabled in the RM Race.",
            "Accessories",
            "Ducati Performance offers a wide range of accessories to customize the new Hypermotard. Carbon fibre parts include the front and rear mudguards, clutch and alternator covers, while the fuel tank cap, fork sliders, footpegs, and motard-style footrests are available in billet aluminium.",
            "The offering also includes brake and clutch levers, grips (heated or conventional), a USB port, Cruise Control, sport or comfort seats of varying heights, a Turn-by-Turn navigation system, a Ducati Multimedia System, tank or passenger seat bags.",
            "Also worth mentioning is the Termignoni exhaust, which is not homologated and is reserved for track use, that adds 3.6 CV and reduces weight by 4 Kgs, and the homologated double silencer (non street-legal outside EU5+ area) with titanium sleeves and carbon end caps, also developed in collaboration with Termignoni, which adds to the sporty design of the Hypermotard V2."
        ],
        "it": [
            "The Ducati Hypermotard V2 introduced earlier this week at EICMA takes the already minimalist 950 version and subtracts 29 pounds (the SP is 31 pounds lighter).",
            "An all-new frame and using the latest V2 engine, the new Hypermotard promises to give talented riders the freedom to express themselves.",
            "We don’t currently have pricing information, but these bikes should be available in the Spring of next year.",
            "Here is the press release from Ducati:",
            "DUCATI HYPERMOTARD V2",
            "Some motorcycles become icons. Motorcycles that convey emotion, adrenaline, and fun at first glance. The Ducati Hypermotard is the motorcycle that best represents all of this. A motorcycle that couldn’t be described as “Supermotard,” and that’s why it was called “Hyper.” Twenty years after EICMA 2005, where Ducati presented the first prototype, which won the “Best of Show” award on its debut, the Borgo Panigale manufacturer is writing a new chapter in the history of the “Hyper” with the new Hypermotard V2 and Hypermotard V2 SP.",
            "The fourth-generation Hypermotard is a completely redesigned motorcycle, carrying the legacy of a legendary model and projecting it into the future thanks to a totally new technical base and an unmistakable design.",
            "The most futuristic Hypermotard ever",
            "The Hypermotard V2 was created with the goal of being the best Hypermotard ever. Inspired by the 2005 prototype, it reinterprets its distinctive features with a contemporary and radical twist. The double-wing fuel tank, the streamlined front end, the dual exhaust under the tail, and the floating rear light are stylistic references to the first 1100, making the V2 immediately recognizable as a Hypermotard. The result is a modern, compact, essential motorcycle that conveys lightness at first glance. The new Hypermotard V2 and SP are the lightest and most powerful Hypermotards ever. Thanks to a weight reduction of 13 kg (14 kg for the SP) compared to the previous 950 and the 120 hp of the Ducati V2 engine, the new Hypermotard V2s are more nimble, responsive, and exciting than ever.",
            "Technology and style: essential Ducati",
            "The front of the new Hypermotard V2 is robotic and modern, designed according to a stylistic language that strives for extreme simplicity: the double DRL, reminiscent of the Hyper’s iconic light signature, is inserted into a dark, glossy headlight, the protagonist of a sculpted, single-piece front end. The clean, essential styling complements a taut, lightweight mechanical base, creating an extremely compact motorcycle.",
            "The SP version is even bolder, thanks to the oversized logo that extends to the beak, contrasting with the white forged wheels and racing details such as the carbon mudguard, the gold Öhlins suspension, and the Brembo M50 calipers. In addition to the dedicated livery, which references the 20 years since the first prototype was created, the Hypermotard V2 SP also features technical features that push the Hyper’s fun bike character even further.",
            "More power and torque, for a Hyper with unprecedented performance",
            "The new 890 cc Ducati V2 engine is perfect for the Hypermotard. It’s the lightest twin-cylinder ever produced by Ducati (54.4 kg, a weight saving of 6.42 kg compared to the previous Testastretta 11°) and, thanks to the IVT variable intake valve timing system, unique in the segment, it delivers generous power across the entire rev range with a prompt response to every throttle opening, a must-have feature for a Hypermotard.",
            "With its 120 hp, it’s the most powerful engine ever mounted on a Hypermotard. It can rev beyond 11,000 rpm, but more importantly, it has a maximum torque of 94 Nm, 70% of which is available at just 3,000 rpm, ensuring impressive acceleration out of corners. Furthermore, the shorter gear ratios and higher torque in every gear make the Hypermotard V2 faster and more responsive than the previous model. Finally, the class-leading maintenance intervals (45,000 km for valve clearance checks) ensure the fun never stops.",
            "Of course, for A2 license holders, a version with power limited to 35 kW is available, while still maintaining the Hypermotard character.",
            "Supermotard ergonomics, total control",
            "The riding position is commanding, like a true supermotard: wide handlebars, the bike narrow between the legs, light and communicative. The texture on the seat and side panels, inspired by that used on the Panigale V4, increases grip and feeling for the bike, making riding easy and fun. The SP version amplifies these sensations, making it even more nimble, lightweight, and responsive. Furthermore, the lower ground clearance compared to the previous “SP”, achieved without compromising the bike’s ability to lean on the track, allows for better transfer of the increased available torque to the ground, and increases stability and riding precision.",
            "The Hypermotard V2 is also designed to accommodate riders of all heights, thanks to lowered suspension and different seat sizes available among the Ducati Performance accessories.",
            "Monocoque frame and racing suspension",
            "The monocoque frame, unique in the segment and developed specifically for the Hypermotard, integrates the engine as a structural element and airbox, performing a dual function and ensuring maximum lightness and compactness. The steel rear subframe harks back to the first Hypermotard, while the aluminium double-sided swingarm, inspired by the Ducati Hollow Symmetrical Swingarm of the Panigale V4, ensures rigidity and a distinctive design.",
            "The new chassis makes the bike neutral, intuitive, and less tiring, with smooth and precise lean angles. The standard version features adjustable Kayaba suspension, while the SP is equipped with premium, fully adjustable Öhlins suspension (NIX30 forks with 48 mm stanchions and STX 46 shock absorber) for more refined, racing-like handling, thanks to their greater ability to smooth out micro-roughness in the road surface while providing the necessary braking support for sporty riding. Both versions are equipped with a Sachs steering damper.",
            "The Hypermotard V2 features cast light alloy wheels, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes. On the V2 SP, the forged aluminium wheels, weighing a full 1.56 kg less, reduce inertia and improve agility, while also improving trajectory accuracy. They are paired with Pirelli Diablo Rosso IV Corsa tyres. For track use, Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport 190/60 size are available.",
            "Both versions feature a complete Brembo braking system, with dual 320 mm front discs. The Hypermotard V2 is equipped with M4.32 monobloc calipers with a PR18/19 radial master cylinder, while the SP uses M50 calipers and a PR16/21 master cylinder for superior track performance.",
            "Advanced electronics for total control",
            "The new Ducati Hypermotard V2 is equipped with a latest-generation electronics package based on a 6-axis inertial measurement platform. This system detects roll, pitch, and yaw in real time, allowing for rapid, precise, and calibrated intervention of all controls, such as Cornering ABS, Ducati Traction Control (DTC), Ducati Wheelie Control (DWC), and Engine Brake Control (EBC). Each of these controls can be adjusted to multiple levels of intervention to adapt to any situation, favouring performance in sports riding or stability and safety on low-grip surfaces.",
            "The operating parameters of each of these controls are associated with the four predefined Riding Modes (Race, Sport, Road, and Wet) to modify the Hypermotard V2’s behaviour based on the situation. Riders can modify these modes to customize each mode to their individual riding style.",
            "All information is displayed on the new 5″ TFT dashboard with 800 x 480 resolution. It features three Info Modes, selectable via the new “petal” joystick on the left switchgear: Road, Road Pro, and Track, each with automatic switching between day and night views. Each of these modes presents the most relevant information for each context to maximize readability. In Road and Road Pro modes, the display shows the most relevant information for road riding, while in Track, the display focuses on essential information for track riding, and shows the level of intervention of each individual control in real time, just like on the Panigale V4.",
            "The Hypermotard V2 features four levels of Cornering ABS. Levels 1 and 2 are designed for the track, with level 2 integrating the Slide by Brake function, allowing riders to learn how to manage corner entry like supermotard pros. Levels 3 and 4 are optimized for road riding, offering maximum safety without ever being invasive.",
            "Thanks to these advanced electronics, complemented by the new Ducati Quick Shift 2.0, which makes gear changes more direct and precise, the Hypermotard V2 is fun and safe on the road, and performs well on the track, where it significantly surpasses the previous 950.The Hypermotard V2 SP will also offer the Ducati Power Launch and the Pit Limiter straight out of the crate.",
            "Ducati Performance for an even more Hyper soul",
            "For those who want to enhance the versatility or performance of the Hypermotard V2, Ducati has developed a range of Ducati Performance accessories, starting naturally with the exhaust line created in collaboration with Termignoni.",
            "Those who want to make their Hyper more aggressive can choose the homologated double silencer with titanium sleeves and carbon end caps, which adds a racing touch to the design. Those who want to unleash the full performance of the engine on the track can install the complete exhaust, not homologated for road use, which increases power by 3.6 hp, reduces weight by 4 kg, and gives the Hypermotard an even more engaging exhaust note.",
            "On the electronics front, accessories designed for everyday use are available, such as the Ducati Multimedia System (DMS) for Bluetooth smartphone connectivity and the Turn-by-Turn navigation system for a connected ride. It also features track-ready features, such as the Lap Timer Pro self-timing system, complete with GPS module.",
            "A wide range of carbon and billet aluminium components is available for an even more Hyper look: carbon fibre mudguards and engine cover, fuel tank cap, fork sliders, aluminium motard-style footpegs and footrests.",
            "Availability and Colours",
            "The new Hypermotard will arrive in european dealerships in April 2026, in two versions: Hypermotard V2 and Hypermotard V2 SP. Availability will extend in the North American market in May, 2026, and then Japan and Australia in October 2026.",
            "#DucatiWorldPremiere2026 #Ducati2026 #hypermotard",
            "Hypermotard V2 SP",
            "- Liveries",
            "- SP livery",
            "- Main standard features",
            "- V-twin engine, 890 cc",
            "- Maximum power: 120 hp at 10,750 rpm",
            "- Maximum torque: 94 Nm at 8,250 rpm",
            "- Kerb weight without fuel: 177 kg",
            "- Dedicated monocoque frame",
            "- Öhlins NIX30 48 mm upside-down forks, fully adjustable",
            "- Öhlins STX46 monoshock, fully adjustable",
            "- Forged aluminium wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Braking system with Brembo M50 calipers",
            "- Pirelli Diablo Rosso IV Corsa tyres 120/70 and 190/55",
            "- Latest-generation electronics package with 6-axis Inertial Measurement Unit (6D IMU): Four-stages ABS with cornering functionality; Ducati Traction Control (DTC); Ducati Wheelie Control (DWC);Ducati Quick Shift (DQS) 2.0; Engine Brake Control (EBC).",
            "- New petal joystick",
            "- New 5″ full-TFT dashboard with 16:9 aspect ratio",
            "- Riding Modes (Race, Sport, Road, Wet)",
            "- Full-LED headlights with DRL and dynamic turn indicators",
            "- Ready for Ducati Multimedia System (DMS), Turn-by-Turn Navigation",
            "- Lithium battery",
            "- Carbon Fiber front fender",
            "- Ducati Power Launch",
            "- Ducati Pit Limiter",
            "Hypermotard V2",
            "- Liveries",
            "- Ducati Red",
            "Main standard features as Hypermotard V2 SP with the exception of:",
            "- 46mm upside-down Kayaba forks, fully adjustable",
            "- Kayaba monoshock, adjustable for preload and rebound",
            "- Cast light-alloy wheels, 3.50 x 17″ at the front and 5.50 x 17″ at the rear",
            "- Pirelli Diablo Rosso IV tyres, 120/70 and 190/55",
            "- Braking system with Brembo M4.32 calipers",
            "- Kerb weight without fuel: 180 kg",
            "- Lead-acid battery",
            "Twenty years after the presentation of the first prototype based on the Desmodue 1100 at EICMA 2005, the Hypermotard has undergone a complete overhaul. With the fourth generation, the Hypermotard is lighter, more powerful, and visibly more compact: in short, even more adrenaline-fuelled than the previous generation. Added to all this is a top-notch electronics package, making it even more sophisticated.",
            "The name also changes, becoming Hypermotard V2. This underscores the evolutionary leap and the fact that the bike is designed around a new mechanical base. The latter uses the new Ducati V2, 6 hp more powerful than the Testastretta 11°, and the monocoque frame, which, combined, reduce the weight by 13 kg.",
            "The Hypermotard V2 is available in two versions: the V2 and the more specialized and iconic V2 SP, which differs not only in its livery, but also for the technical features that enhance the model’s sportiness and reduce its weight by 3 kg. Every component of the Hypermotard V2 SP is designed to enhance the Hyper’s signature fun-bike character. The equipment includes Öhlins suspension, forged wheels with Pirelli Diablo Rosso IV Corsa tyres, a upgraded front braking system, and a lithium battery. The Ducati Power Launch and Pit Limiter are standard equipment.",
            "Design and Ergonomics",
            "The fourth generation of the Hypermotard returns to its origins, drawing inspiration from the Hypermotard 1100, the first Ducati fun-bike in history. The new Hypermotard V2 therefore takes the styling cues of the Hypermotard 1100 and reinterprets them in the style of contemporary Ducatis, combining taut, accelerated lines with softer, more sophisticated ones. The mechanical base, with the new Ducati V2 engine as its protagonist, defines a modern motorcycle, extreme in its compactness and essentiality, whose lightness is evident from the very first glance.",
            "The authenticity of the new Hypermotard V2 is expressed through stylistic details that recall the iconic Hypermotard 1100: the side panel with double wing, the sculpted front grille, the partially exposed trellis subframe, the floating tail with separate rear light, and the high under-seat exhausts, perfectly integrated into the bike’s profile. Added to these are the high, straight seat and the advanced fuel tank, elements that strengthen the visual and conceptual link with the motard world.",
            "The front view is very aggressive and modern, thanks to a surface treatment of the headlight and the immediately adjacent areas that renders the perimeter of the light unit almost invisible. The LED headlight is equipped with a DRL (Daytime Running Light) that creates a distinctive “double C” profile around the central reflector, creating a family feeling with the Hypermotard 698 Mono. The reflector houses the low beam, which splits the reflector in two, and the high beam, which turns it on entirely.",
            "The compact rear light, also a high-intensity LED, is positioned high up. It consists of a parking light that recalls the “double C” motif of the DRL and a brake light located in the centre. The front (located on the handguards) and rear turn indicators are also LED and switch off automatically after turns.",
            "Many styling choices were made with the aim of making the Hypermotard V2 slim and compact, including the shape of the seat, which, despite dimensions comparable to that of the 950 model, appears decidedly smaller. The colour of the tank cover, featuring a textured finish designed to increase grip for the rider’s legs, “penetrates” the seat, making it visually shorter. Furthermore, the passenger area is particularly slim thanks to the recessed profile of the seat, which, when viewed from above, creates an “hourglass” shape with the subframe cover.",
            "The SP version is immediately recognizable by its livery and the SP logo written in large letters on the fuel tank side panels, which create a colourful interplay with the white rims. The rear side panels are embellished with the number commemorating the model’s twentieth anniversary.",
            "The riding position has been completely redesigned compared to the Hypermotard 950. The footpegs have been moved forward, bringing the posture closer to that of a motard and improving rider control and chassis responsiveness, thus increasing riding enjoyment in all conditions. The variable-section handlebar, in black anodized aluminium, has been moved forward, increasing the load on the front end and thus achieving greater stability and improving the Hypermotard 950’s ability to maintain its trajectory. The handlebar width of 807 mm creates a commanding position and facilitates body movement. The black anodized steering head and clamps have a sophisticated look.",
            "The new-generation Hypermotard, both the V2 and V2 SP versions, has a seat height of 880 mm. Compared to the previous 950 SP, the V2 SP is therefore more accessible and less intimidating, with a 10 mm reduction and an instep area of 53 mm, making it much easier to touch the ground. The rider’s position is also more favourable compared to the Hypermotard 950, thanks to an instep area reduced by 18 mm.",
            "Engine",
            "The new Hypermotard is powered by the new 890 cc 90° V-twin, the lightest twin-cylinder engine (54.4 kg) ever produced by Ducati. Equipped with the IVT variable valve timing system on the hollow-stem intake valves, the new V2 represents a new chapter in the history of Ducati twin-cylinder engines, becoming the benchmark not only for its lightness, but also for its compactness, low fuel consumption and emissions (Euro 5+ homologation), combined with a wide range of use and a fully exploitable maximum power level.",
            "The IVT system continuously adjusts intake timing to always ensure the best possible delivery without compromising performance and usability, thus achieving high power at high revs, torque at medium and low revs, and a smooth response thanks to regular combustion. This eliminates the trade-off between low-end torque and high-end power, resulting in an engine that adapts to various conditions of use, from low-speed riding in urban traffic to sportier riding on mixed out-of-town roads.",
            "The V2 engine delivers a maximum power of 120 hp at 10,750 rpm, with a more decisive acceleration than the Testastretta 11° starting at 9,500 rpm, which sees the limiter intervene at 11,500 rpm. Maximum torque is 94 Nm at 8,250 rpm, with generous delivery even at low revs (more than 70% of maximum torque already available at 3,000 rpm, more than 80% always available between 4,000 rpm and 11,000 rpm), ensuring prompt response at every throttle opening and maximum usability both for everyday use and for track use.",
            "By adopting the Termignoni racing exhaust, with titanium muffler sleeves and carbon end caps, the power and torque curves are increased across the entire rev range, reaching a peak of +4 hp and +5 Nm of torque, while weight is reduced by 4.5 kg. Homologated Termignoni mufflers are also available for the Hypermotard V2 family, also with titanium sleeves and carbon end caps, which combine a sporty design with a weight reduction of 0.5 kg.",
            "The six-speed transmission is equipped with the second-generation Ducati Quick Shift (DQS) 2.0, which debuted on the new Panigale V4, and which offers a more direct shift feel; a shorter, repeatable, and less “rubbery” travel is particularly appreciated during sporty riding. The clutch is a slipper-type wet clutch with progressive hydraulic control and low lever load. The final drive ratio (15/41) has been fine-tuned to ensure optimum engine responsiveness when reopening the throttle on open roads.",
            "For younger riders with an A2 license, a version with power limited to 35 kW is available. This version delivers maximum power of 43.5 hp at 6,250 rpm, and peak torque of 5 kgm at 5,750 rpm. Maintenance intervals include valve clearance checks every 45,000 km, reducing maintenance costs.",
            "Chassis",
            "The chassis of the new Hypermotard V2 has been completely redesigned, with the specific goal of achieving a ride that, while retaining the fun-bike character of the previous generation, is more neutral, easier, and more intuitive. Leaning is now very linear, without requiring excessive pressure on the handlebars from the rider, and subsequently, when cornering, the bike does not require corrections to maintain the line.",
            "The chassis of the new Hypermotard uses a monocoque structure, designed specifically for this model, which serves both as a frame and airbox, using the V-twin engine as a structural element. This compact and rational solution allows the Hypermotard V2 to weigh 180 kg with all fluids, excluding fuel, a full 13 kg less than the previous model. The Hypermotard V2 SP, thanks to its lighter components, weighs an impressive 177 kg.",
            "The 1,517 mm wheelbase and steering geometry with 26° rake and 110 mm trail make the Hypermotard stable at speed while maintaining the model’s signature agility.",
            "Monocoque Frame",
            "The cast aluminium monocoque structure uses the new V-twin engine, to which it is attached directly to the vertical cylinder head, as a structural element. In addition to fulfilling the classic frame function, the monocoque also serves as an airbox, closed at the top by the 12.5-litre fuel tank. The frame houses the air filter, throttle bodies, and fuel circuit complete with injectors.",
            "The monocoque was specifically designed for this application, achieving higher lateral and torsional stiffness than the Panigale V2 and Streetfighter V2. For this reason, the frame features a stiffening cross at the front and a closed opening on the left side, similar to that found on other models.",
            "The rear subframe maintains the tubular steel trellis structure, inspired by that of the first Hypermotard; it is attached to the monocoque at the top and directly to the engine at the bottom.",
            "Suspension",
            "The two versions of the Hypermotard V2 differ in their suspension and wheel configurations. The Hypermotard V2 features a fully adjustable Kayaba front fork with 46 mm stanchions and a Kayaba shock absorber with adjustable preload and rebound damping.",
            "The Hypermotard V2 SP is equipped with fully adjustable Öhlins suspension, which offers a smoother ride and improved performance thanks to its greater ability to adapt to the micro-roughness of the road while still providing the necessary support during braking and acceleration. The rear shock absorber is an Öhlins STX 46 with a separate reservoir, while the front fork is an Öhlins NIX30 with 48 mm diameter stanchions and a TiN coating for improved smoothness.",
            "On both versions, the shock absorber is mounted laterally, attached directly to the new double-sided swingarm, for easy access to spring preload adjustments. Both models are equipped with a Sachs steering damper.",
            "The new double-sided swingarm, attached directly to the engine, is made of low-pressure casting aluminium alloy, reducing the average thickness of the structure. The heavily tapered external design recalls that of the Ducati Hollow Symmetrical Swingarm on the new Panigale V4, ensuring the same riding benefits in terms of mechanical grip, stability when exiting corners, precision in closing the line mid-corner, and maintaining the line through the curve. Compared to other sports models in the V2 range, the swingarm uses a different mounting system to the engine.",
            "Wheels and Tyres",
            "The Hypermotard V2 is equipped with 6-spoke Y-shaped light alloy wheels, measuring 3.50 x 17″ at the front and 5.50 x 17″ at the rear, shod with Pirelli Diablo Rosso IV tyres in 120/70 and 190/55 sizes.",
            "The Hypermotard V2 SP is equipped with forged wheels featuring a 5-spoke design inspired by the Desmosedici GP, which are 1.56 kg lighter. Thanks to a 27% reduction in the moment of inertia at the front and 21% at the rear, the Hypermotard V2 SP’s tendency to naturally close the line is accentuated. The forged wheels are paired with the sportier Pirelli Diablo Rosso IV Corsa tyres, which offer greater grip in the dry, superior handling at high speeds, and consistent performance over multiple intense riding sessions.",
            "For track use, the bike can be fitted with Pirelli Diablo Superbike slicks with a 180/60 rear section or, alternatively, the supersport size of 190/60.",
            "Brakes",
            "The new Hypermotard is equipped with a complete Brembo braking system that ensures high braking efficiency combined with precision and sensitivity at the brake lever, with excellent linearity between brake force and response. Both models, the V2 and V2 SP, are equipped with dual 320 mm discs at the front and a single 245 mm disc at the rear.",
            "The Hypermotard V2 features M4.32 monobloc calipers, controlled by a PR18/19 radial master cylinder. The front calipers on the Hypermotard V2 SP are M50 monobloc calipers with four 30 mm pistons, featuring a compact design that allows for a weight saving of 140 grams per caliper compared to the M4.32. The front system is controlled by a PR16/21 radial master cylinder, which combines excellent feel with class-leading braking power. The brake pads were chosen to ensure an easily manageable response during initial braking and maximum efficiency during the second half of braking.",
            "Electronics",
            "The new Hypermotard features a latest-generation electronics package, with controls and functions derived from those of the Panigale V4. The functions are managed through a 5″ 16:9 TFT dashboard and a “petal” joystick on completely new control blocks.",
            "To emphasize the cleanliness and elegance of the new dashboard, the physical warning lights have been removed from the external panel and moved inside the display, with the sole exception of the red LED over-rev indicator. The tachometer and gear indicator flash with a pulsating effect and turn green to indicate the moment of gear shifting, and red to signal the rev limiter intervention. During the running-in period, the tachometer turns orange when the recommended rpm is exceeded.",
            "The screen features three display modes (Info Modes) called Road, Road Pro, and Track (all with automatic switching between night and day backlighting), which differ in the type of information displayed and the corresponding graphical presentation. Using the handlebar joystick, it is possible to switch directly between the two Info Modes while riding.",
            "The Road display is designed to provide essential information for road riding. The circular tachometer bar occupies the entire right-hand side of the display, with the gear indicator in the centre. The speed and selected Riding Mode are located on the left. The on-board computer data are located at the corners of the display, including the time, coolant temperature, and air temperature.",
            "The Road Pro variant increases the density of information displayed, moving the tachometer to the centre to make room on the left for the percentage levels of power and torque delivered. The parameters for the selected Riding Mode are visible on the right.",
            "The Track Info Mode features a straight tachometer bar, positioned along the entire length of the upper part of the display. The gear indicator is larger than the Road view, while the speed indicator is smaller. The left-hand side contains information from the Lap Timer Pro, if installed (GPS signal, lap time, split time, lap and session number in progress, split time improvement indicator, and lap time (overall or session-specific, as on the Panigale V4). The right-hand side of the display shows the Riding Mode parameters, allowing the rider to vary the level of intervention of every single control while riding, displaying their activation in real time.",
            "The dashboard also allows Bluetooth pairing with a smartphone and a helmet communication system to play music, answer calls, and listen to the Turn-by-Turn navigation system (if installed).",
            "Latest-generation electronic controls",
            "The new Hypermotard V2 is equipped with modern and sophisticated electronics, based on the use of a 6-axis inertial platform, capable of instantly detecting the roll, yaw, and pitch angles of the motorcycle.",
            "The Hypermotard V2’s electronics package includes:",
            "Cornering ABS",
            "- Ducati Traction Control (DTC)",
            "- Ducati Wheelie Control (DWC)",
            "- Ducati Quick Shift (DQS) 2.0",
            "- Engine Brake Control (EBC)",
            "The operating parameters of each control are associated by default with the four Riding Modes (Race, Sport, Road, Wet). Riders can customize their riding styles and restore the default parameters set by Ducati.",
            "The Hypermotard V2 SP also comes as standard with the Ducati Power Launch (DPL) and the Ducati Pit Limiter (DPL), which can be purchased as accessories for the Hypermotard V2.",
            "Cornering ABS",
            "The Hypermotard V2’s ABS system includes a “cornering” function, which extends ABS intervention even when the bike is leaning and derives the intervention logic and control types from the Panigale V4. Compared to other sports models in the V2 range, the Hypermotard V2 offers four levels of intervention instead of three, to better meet the needs of all riders, both on the track and on the road, even in situations where grip is critical.",
            "ABS level 1, selectable even if not associated with any Riding Mode by default, is recommended for expert track riders and ensures racing-level ABS intervention, active on the front wheel only. Both the “cornering” function and rear wheel lift-up control are disabled for maximum performance.",
            "Level 2 is recommended for track use by amateur riders. The system manages both the front and rear braking systems, maintaining the cornering function active but without lift-up control, thus allowing for more sporty braking. Selecting level 2 enables the “slide-by-brake” function, which allows for drifting into corners, safely training the rider in track drifting technique.",
            "Level 3, unlike Levels 1 and 2, is a sporty setting suitable for road riding that allows for high deceleration while maintaining the cornering function and reducing lift-up control.",
            "Level 4 is recommended for road riding in low-grip conditions. It ensures safe and stable braking in all conditions and constantly monitors rear wheel lift, even during sharp deceleration.",
            "Ducati Traction Control (DTC)",
            "The Ducati Traction Control strategy used on the new Hypermotard is derived from racing experience. In addition to interfacing with the 6-axis inertial platform and adapting intervention and wheelspin to the bike’s lean angle, the software significantly improves power management out of corners thanks to the new “predictive” control strategy. By acting not only on the instantaneous value of rear wheelspin, but also on its variation, it intercepts loss of grip more quickly and reduces wheelspin peaks, thus ensuring faster and more consistent intervention. All this translates into greater vehicle stability out of corners, even in less than optimal grip conditions, greater acceleration, and improved performance.",
            "DTC, in addition to managing ignition advance and injection, intervenes in the throttle body valves when rapid intervention is not required, maintaining optimal combustion parameters and achieving smoother engine response and intervention. The control can be set to eight different levels (six designed for dry conditions and two for wet conditions), allowing riders to adapt the control strategy to their riding style, the context, and grip conditions.",
            "Ducati Wheelie Control (DWC)",
            "The Hypermotard is equipped with the latest version of Ducati Wheelie Control (DWC). This system, using information from the IMU 6D, controls wheelies and allows maximum acceleration performance to be achieved easily and safely. The DWC now more accurately detects the presence and severity of wheelies and intervenes to control them with greater precision, thus responding even more closely to the rider’s requests.",
            "Ducati Quick Shift (DQS) 2.0",
            "The Hypermotard V2 uses the second-generation DQS introduced on the new Panigale V4. Compared to a traditional quickshifter, the gear lever no longer features a Hall-effect microswitch, because the shift strategy is based solely on the gear sensor located on the shift drum. The benefit for the rider is a more direct shift feel, with a shorter, repeatable, and less “rubbery” travel, which is particularly appreciated during track riding.",
            "Engine Brake Control (EBC)",
            "EBC (Engine Brake Control) has been developed to help riders optimize the stability of the motorcycle in extreme corner entry conditions by balancing the forces applied to the rear tyre under intense engine braking. The Hypermotard V2’s EBC, optimized based on lean angle, monitors the position of the throttle valves, the selected gear, and the deceleration of the new V-twin’s crankshaft during aggressive braking, and precisely adjusts the throttle opening to balance the torque forces applied to the tyre.",
            "Riding Modes",
            "The Riding Modes allow you to choose from four different pre-set riding styles, ensuring the Hypermotard V2’s behaviour is perfectly adapted to the rider, the type of track, and environmental conditions. Each Riding Mode is associated with a different control parameter setting; selecting the different Riding Modes allows you to instantly vary the engine’s character and the intervention of the electronic controls.",
            "Race Riding Mode",
            "The Race RM is designed for track riding on high-grip asphalt. By selecting Race, the rider can count on 120 hp, with direct Ride-by-Wire throttle response. Race Mode features a default, low-intrusion electronics setting without compromising safety, with ABS at level 2 without lift-up control and the activation of the “slide-by-brake” function, a controlled slide under braking that allows the bike to be safely sideways when entering a corner.",
            "Sport Riding Mode",
            "By selecting Sport RM, the rider can count on 120 hp of power delivery with a sporty Ride-by-Wire throttle response. The electronic controls are configured to perfectly support the rider when riding on dry roads. Rear wheel lift-up control under braking is engaged, and the Cornering ABS function is set to offer maximum performance when cornering.",
            "Road Riding Mode",
            "Road RM is recommended for use on low-grip surfaces. It provides the rider with 120 hp of power delivery, with a progressive Ride-by-Wire response to throttle opening, as with the Sport RM. The default level of electronic controls is set to offer maximum safety by ensuring the best grip and stability.",
            "Wet Riding Mode",
            "The Wet RM is designed for slippery surfaces, such as rain. With the default Low Power Mode, the Ride-by-Wire response is particularly softened, and the DTC, DWC, ABS, and EBC engine braking systems intervene even more significantly. Maximum power is limited to 95 hp/70 kW.",
            "Of course, the rider can customize the Riding Mode parameters and subsequently restore the default settings set by Ducati. It is also possible to enable Level 1 ABS (recommended for more experienced riders on the track), which intervenes only on the front wheel, without activating the cornering function and lift-up control, to offer maximum braking performance.",
            "Coming Home",
            "The Coming Home feature improves convenience and comfort. It makes it easier to see your surroundings when arriving home in the dark. After turning off the motorcycle, the low beam headlights remain on for 30 seconds before turning off automatically. This feature can be enabled from the Menu.",
            "Ducati Brake Light (DBL) EVO",
            "The new Hypermotard V2 is equipped with the Ducati Brake Light EVO to improve safety in urban traffic. In the event of sudden braking from a speed above 55 km/h (34 mph), the rear light flashes rapidly to warn following vehicles. The hazard light activates when deceleration drops below a predefined threshold, and the rear brake flasher automatically deactivates.",
            "DBL is disabled in the RM Race.",
            "Accessories",
            "Ducati Performance offers a wide range of accessories to customize the new Hypermotard. Carbon fibre parts include the front and rear mudguards, clutch and alternator covers, while the fuel tank cap, fork sliders, footpegs, and motard-style footrests are available in billet aluminium.",
            "The offering also includes brake and clutch levers, grips (heated or conventional), a USB port, Cruise Control, sport or comfort seats of varying heights, a Turn-by-Turn navigation system, a Ducati Multimedia System, tank or passenger seat bags.",
            "Also worth mentioning is the Termignoni exhaust, which is not homologated and is reserved for track use, that adds 3.6 CV and reduces weight by 4 Kgs, and the homologated double silencer (non street-legal outside EU5+ area) with titanium sleeves and carbon end caps, also developed in collaboration with Termignoni, which adds to the sporty design of the Hypermotard V2."
        ]
    }
},
,
{
    "id": "honda-debuts-v3r-900-prototype-at-eicma",
    "title": {
        "fr": "Honda Debuts V3R 900 Prototype at EICMA",
        "en": "Honda Debuts V3R 900 Prototype at EICMA",
        "es": "Honda Debuts V3R 900 Prototype at EICMA",
        "it": "Honda Debuts V3R 900 Prototype at EICMA"
    },
    "excerpt": {
        "fr": "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months.",
        "en": "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months.",
        "es": "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months.",
        "it": "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months."
    },
    "image": newsNew26,
    "category": "New Bikes",
    "readTime": "1 min",
    "body": {
        "fr": [
            "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months.",
            "Here is a short press release from Honda:",
            "MILAN, Italy, November 4, 2025 – Honda today unveiled theV3R 900 E-Compressor Prototypeequipped with a V3 engine with an electronically-controlled compressor, at EICMA 2025 (the Milan Motorcycle Shows.  Press days: November 4-5, Public days: November 6-9) in Milan, Italy.",
            "In order to realize the “joy and freedom of mobility” to fulfill the Honda 2030 Vision, Honda motorcycle development team members are engaged in ongoing discussions in the effort to build attractive products that go beyond expectations of customers. The V3R 900 E-Compressor Prototype is being developed as a motorcycle model that offers new value to customers with unprecedented, original Honda technologies.",
            "Under the development concept of “Non-Rail Roller Coaster,” Honda is striving to create a model that is characterized by two contrasting qualities — “guaranteed thrill” and “reassuring peace of mind” — by combining its latest technologies with know-how amassed through its long history of motorcycle development.",
            "A slim and compact engine design was pursued with the displacement of 900cc based on the exact layout of the water-cooled 75-degree V3 engine, which Honda unveiled last year as a concept model at the EICMA 2024. Equipped with the world’s first*electronically-controlled compressor for motorcycles, the engine delivers highly responsive torque even from low rpm range, by controlling compression of the intake air irrespective of engine rpm. Taking advantage of this feature, Honda is striving to develop a 900cc engine that achieves the  performance comparable to that of a 1200cc engine, while also contributing to excellent environmental performance.",
            "The V3R 900 E-Compressor Prototype features asymmetrical side cowls, as well as a tank emblem with the new “Honda Flagship WING” design, which is scheduled to be adopted by top-tier models sequentially starting next year.",
            "Honda is developing the V3R 900 E-Compressor Prototype as a model that will represent a new milestone in the ongoing challenges undertaken by Honda and will enable customers to experience the unprecedented fun and excitement of riding and the joy of ownership. Honda will continue development for the mass production.",
            "*Honda research"
        ],
        "en": [
            "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months.",
            "Here is a short press release from Honda:",
            "MILAN, Italy, November 4, 2025 – Honda today unveiled theV3R 900 E-Compressor Prototypeequipped with a V3 engine with an electronically-controlled compressor, at EICMA 2025 (the Milan Motorcycle Shows.  Press days: November 4-5, Public days: November 6-9) in Milan, Italy.",
            "In order to realize the “joy and freedom of mobility” to fulfill the Honda 2030 Vision, Honda motorcycle development team members are engaged in ongoing discussions in the effort to build attractive products that go beyond expectations of customers. The V3R 900 E-Compressor Prototype is being developed as a motorcycle model that offers new value to customers with unprecedented, original Honda technologies.",
            "Under the development concept of “Non-Rail Roller Coaster,” Honda is striving to create a model that is characterized by two contrasting qualities — “guaranteed thrill” and “reassuring peace of mind” — by combining its latest technologies with know-how amassed through its long history of motorcycle development.",
            "A slim and compact engine design was pursued with the displacement of 900cc based on the exact layout of the water-cooled 75-degree V3 engine, which Honda unveiled last year as a concept model at the EICMA 2024. Equipped with the world’s first*electronically-controlled compressor for motorcycles, the engine delivers highly responsive torque even from low rpm range, by controlling compression of the intake air irrespective of engine rpm. Taking advantage of this feature, Honda is striving to develop a 900cc engine that achieves the  performance comparable to that of a 1200cc engine, while also contributing to excellent environmental performance.",
            "The V3R 900 E-Compressor Prototype features asymmetrical side cowls, as well as a tank emblem with the new “Honda Flagship WING” design, which is scheduled to be adopted by top-tier models sequentially starting next year.",
            "Honda is developing the V3R 900 E-Compressor Prototype as a model that will represent a new milestone in the ongoing challenges undertaken by Honda and will enable customers to experience the unprecedented fun and excitement of riding and the joy of ownership. Honda will continue development for the mass production.",
            "*Honda research"
        ],
        "es": [
            "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months.",
            "Here is a short press release from Honda:",
            "MILAN, Italy, November 4, 2025 – Honda today unveiled theV3R 900 E-Compressor Prototypeequipped with a V3 engine with an electronically-controlled compressor, at EICMA 2025 (the Milan Motorcycle Shows.  Press days: November 4-5, Public days: November 6-9) in Milan, Italy.",
            "In order to realize the “joy and freedom of mobility” to fulfill the Honda 2030 Vision, Honda motorcycle development team members are engaged in ongoing discussions in the effort to build attractive products that go beyond expectations of customers. The V3R 900 E-Compressor Prototype is being developed as a motorcycle model that offers new value to customers with unprecedented, original Honda technologies.",
            "Under the development concept of “Non-Rail Roller Coaster,” Honda is striving to create a model that is characterized by two contrasting qualities — “guaranteed thrill” and “reassuring peace of mind” — by combining its latest technologies with know-how amassed through its long history of motorcycle development.",
            "A slim and compact engine design was pursued with the displacement of 900cc based on the exact layout of the water-cooled 75-degree V3 engine, which Honda unveiled last year as a concept model at the EICMA 2024. Equipped with the world’s first*electronically-controlled compressor for motorcycles, the engine delivers highly responsive torque even from low rpm range, by controlling compression of the intake air irrespective of engine rpm. Taking advantage of this feature, Honda is striving to develop a 900cc engine that achieves the  performance comparable to that of a 1200cc engine, while also contributing to excellent environmental performance.",
            "The V3R 900 E-Compressor Prototype features asymmetrical side cowls, as well as a tank emblem with the new “Honda Flagship WING” design, which is scheduled to be adopted by top-tier models sequentially starting next year.",
            "Honda is developing the V3R 900 E-Compressor Prototype as a model that will represent a new milestone in the ongoing challenges undertaken by Honda and will enable customers to experience the unprecedented fun and excitement of riding and the joy of ownership. Honda will continue development for the mass production.",
            "*Honda research"
        ],
        "it": [
            "Just one year after showing theunique V3 supercharged engine prototype, this week Honda is showing a more developed motorcycle model with its innovative supercharged V3 engine, which promises the performance of a 1,200cc engine in a more environmentally-friendly package. We expect to see a production version of this bike within the next 12 months.",
            "Here is a short press release from Honda:",
            "MILAN, Italy, November 4, 2025 – Honda today unveiled theV3R 900 E-Compressor Prototypeequipped with a V3 engine with an electronically-controlled compressor, at EICMA 2025 (the Milan Motorcycle Shows.  Press days: November 4-5, Public days: November 6-9) in Milan, Italy.",
            "In order to realize the “joy and freedom of mobility” to fulfill the Honda 2030 Vision, Honda motorcycle development team members are engaged in ongoing discussions in the effort to build attractive products that go beyond expectations of customers. The V3R 900 E-Compressor Prototype is being developed as a motorcycle model that offers new value to customers with unprecedented, original Honda technologies.",
            "Under the development concept of “Non-Rail Roller Coaster,” Honda is striving to create a model that is characterized by two contrasting qualities — “guaranteed thrill” and “reassuring peace of mind” — by combining its latest technologies with know-how amassed through its long history of motorcycle development.",
            "A slim and compact engine design was pursued with the displacement of 900cc based on the exact layout of the water-cooled 75-degree V3 engine, which Honda unveiled last year as a concept model at the EICMA 2024. Equipped with the world’s first*electronically-controlled compressor for motorcycles, the engine delivers highly responsive torque even from low rpm range, by controlling compression of the intake air irrespective of engine rpm. Taking advantage of this feature, Honda is striving to develop a 900cc engine that achieves the  performance comparable to that of a 1200cc engine, while also contributing to excellent environmental performance.",
            "The V3R 900 E-Compressor Prototype features asymmetrical side cowls, as well as a tank emblem with the new “Honda Flagship WING” design, which is scheduled to be adopted by top-tier models sequentially starting next year.",
            "Honda is developing the V3R 900 E-Compressor Prototype as a model that will represent a new milestone in the ongoing challenges undertaken by Honda and will enable customers to experience the unprecedented fun and excitement of riding and the joy of ownership. Honda will continue development for the mass production.",
            "*Honda research"
        ]
    }
},
,
{
    "id": "ktm-unveils-production-990-rc-r",
    "title": {
        "fr": "KTM Unveils Production 990 RC R",
        "en": "KTM Unveils Production 990 RC R",
        "es": "KTM Unveils Production 990 RC R",
        "it": "KTM Unveils Production 990 RC R"
    },
    "excerpt": {
        "fr": "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong.",
        "en": "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong.",
        "es": "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong.",
        "it": "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong."
    },
    "image": newsNew27,
    "category": "New Bikes",
    "readTime": "4 min",
    "body": {
        "fr": [
            "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong.",
            "Announcedmore than a year ago, the KTM 990 RC R should be entering production right about now, and will be available at dealerships within the next few months here in the United States at an MSRP of $13,949.",
            "This fits in the genre of “comfortable sport bike”, but the ergonomics appear relaxed only in comparison to hardcore machines, like a Yamaha R6, as it looks. This is primarily a street bike, but designed to perform on the racetrack as well.",
            "Here is a press release from KTM with more details:",
            "Itchy throttle hands can lose the anxiety. The 2026 KTM 990 RC R is coming closer. KTM’s principal Supersport orientated motorcycle is ready to widen the thrills of the street and narrow the margins for lap-times for track days and races.",
            "The KTM 990 RC R is a high-spec and refined ‘RC’ temptation for riders that like to quicken the pulse but is also engineered with the ergonomics for day-to-day use and offers the best of both domains. The model is the elevated base of the new KTM 990 RC R ‘platform’ that will reset the perception of performance, style and fun in the next generation Supersport segment.",
            "The KTM 990 RC R is the natural extension of the KTM RC line-up and has been years in the making with a wealth of data garnered by KTM’s Research and Development as well as aerodynamic data from their Motorsport program. Fabricated and assembled in Austria, the bike has a purpose-built steel chassis (and diecast aluminum subframe) with primed front end feel and stiffness that is felt under acceleration for assuring stability but is still honed for agility. The 57kg EURO5+ ready LC8c engine cranks out 103 Nm torque and 130 PS to get away from any traffic light like it was the front row of the grid.",
            "Sporting DNA is immediately transparent through the aesthetic of the KTM 990 RC R with the wind-tunneled aerodynamics, 320 mm Brembo 4-piston caliper HyPure brakes, attuned bodywork, WP APEX suspension and 8,8” TFT dash that reveals the Ride Modes: RAIN, STREET, SPORT, and CUSTOM. Optional Ride Modes include TRACK and two more CUSTOM Modes and telemetry such as lean angle and throttle opening rates for acceleration as well as the advanced four standard ABS Modes: STREET, SPORT, SUPERMOTO+ and SUPERMOTO ABS.",
            "The specs of the KTM 990 RC R are a clear indication of the racing genesis of the project but KTM’s goal is to offer an effective and appealing motorcycle for riders that want to turn heads on street corners. This is evident through the riding position that is READY TO RACE but dialed for longer time at the grips. The six-point ergonomics contact patch gives comfy support for knees, arms and hands and adjustable footrests will accommodate taller or shorter users. Weight has been trimmed where possible and practicality augmented by details such as the hefty 16 L fuel tank that should provide a good range.",
            "The KTM 990 RC R will be coming off production lines in October 2025 and soon after the slipstream begins from authorized KTM dealers.",
            "Riaan Neveling, MANAGER KTM GLOBAL MARKETING:“At KTM we like the fast-paced life and the KTM 990 RC R is a bike that we’ve been impatient to show for some time now. Why? Through all our model segments and strong technology, we know we’ve been missing that motorcycle that gets a certain type of rider excited. We kick ass when it comes to Naked bikes, Adventure bikes and, of course, Offroad, among others but this is the expression we’ve wanted to deliver for some time. It’s our link to all the efforts to the RED BULL KTM FACTORY RACING MotoGP project and our outlet for the sea of information and data that has come the way of our Mattighofen R&D experts.”",
            "The KTM 990 RC R’s journey to realization has been charted from discussions to design to delivery in a special video series that can be seenHERE.",
            "Riders, racers and authentic performance-seekers can choose between orange and black 2026 KTM 990 RC R versions.",
            "KTM has always stayed true to its READY TO RACE core, and the dedicated track rider is no exception. Arriving in early February 2026, the KTM 990 RC R TRACK is set to make its debut – a pure, track-only machine engineered to deliver performance straight from the Mattighofen production line. Available to order through authorized KTM dealers, the KTM 990 RC R TRACK is far more than a street bike conversion. Stripped of unnecessary components and fitted with essentials for serious track use – including a reduced dashboard, dedicated electronics, removed ABS modulator, direct brake lines, a track-optimized gearbox, and more – it’s built to bring riders closer to the apex from day one. Full technical details of this new model will be revealed in early February 2026.",
            "In addition, KTM is set to launch the KTM 990 RC R CUP in Europe during spring 2026. Designed for riders looking to progress beyond standard track days, the KTM 990 RC R CUP offers an accessible entry point into racing without the pressure of competing against seasoned professionals. To further elevate the experience, professional KTM riders will be present at each round, sharing insights and mentoring participants to sharpen their skills on track. The KTM 990 RC R CUP will be open to both the street-homologated version and the dedicated KTM 990 RC R TRACK model. For more info about the CUP go toKTM.com."
        ],
        "en": [
            "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong.",
            "Announcedmore than a year ago, the KTM 990 RC R should be entering production right about now, and will be available at dealerships within the next few months here in the United States at an MSRP of $13,949.",
            "This fits in the genre of “comfortable sport bike”, but the ergonomics appear relaxed only in comparison to hardcore machines, like a Yamaha R6, as it looks. This is primarily a street bike, but designed to perform on the racetrack as well.",
            "Here is a press release from KTM with more details:",
            "Itchy throttle hands can lose the anxiety. The 2026 KTM 990 RC R is coming closer. KTM’s principal Supersport orientated motorcycle is ready to widen the thrills of the street and narrow the margins for lap-times for track days and races.",
            "The KTM 990 RC R is a high-spec and refined ‘RC’ temptation for riders that like to quicken the pulse but is also engineered with the ergonomics for day-to-day use and offers the best of both domains. The model is the elevated base of the new KTM 990 RC R ‘platform’ that will reset the perception of performance, style and fun in the next generation Supersport segment.",
            "The KTM 990 RC R is the natural extension of the KTM RC line-up and has been years in the making with a wealth of data garnered by KTM’s Research and Development as well as aerodynamic data from their Motorsport program. Fabricated and assembled in Austria, the bike has a purpose-built steel chassis (and diecast aluminum subframe) with primed front end feel and stiffness that is felt under acceleration for assuring stability but is still honed for agility. The 57kg EURO5+ ready LC8c engine cranks out 103 Nm torque and 130 PS to get away from any traffic light like it was the front row of the grid.",
            "Sporting DNA is immediately transparent through the aesthetic of the KTM 990 RC R with the wind-tunneled aerodynamics, 320 mm Brembo 4-piston caliper HyPure brakes, attuned bodywork, WP APEX suspension and 8,8” TFT dash that reveals the Ride Modes: RAIN, STREET, SPORT, and CUSTOM. Optional Ride Modes include TRACK and two more CUSTOM Modes and telemetry such as lean angle and throttle opening rates for acceleration as well as the advanced four standard ABS Modes: STREET, SPORT, SUPERMOTO+ and SUPERMOTO ABS.",
            "The specs of the KTM 990 RC R are a clear indication of the racing genesis of the project but KTM’s goal is to offer an effective and appealing motorcycle for riders that want to turn heads on street corners. This is evident through the riding position that is READY TO RACE but dialed for longer time at the grips. The six-point ergonomics contact patch gives comfy support for knees, arms and hands and adjustable footrests will accommodate taller or shorter users. Weight has been trimmed where possible and practicality augmented by details such as the hefty 16 L fuel tank that should provide a good range.",
            "The KTM 990 RC R will be coming off production lines in October 2025 and soon after the slipstream begins from authorized KTM dealers.",
            "Riaan Neveling, MANAGER KTM GLOBAL MARKETING:“At KTM we like the fast-paced life and the KTM 990 RC R is a bike that we’ve been impatient to show for some time now. Why? Through all our model segments and strong technology, we know we’ve been missing that motorcycle that gets a certain type of rider excited. We kick ass when it comes to Naked bikes, Adventure bikes and, of course, Offroad, among others but this is the expression we’ve wanted to deliver for some time. It’s our link to all the efforts to the RED BULL KTM FACTORY RACING MotoGP project and our outlet for the sea of information and data that has come the way of our Mattighofen R&D experts.”",
            "The KTM 990 RC R’s journey to realization has been charted from discussions to design to delivery in a special video series that can be seenHERE.",
            "Riders, racers and authentic performance-seekers can choose between orange and black 2026 KTM 990 RC R versions.",
            "KTM has always stayed true to its READY TO RACE core, and the dedicated track rider is no exception. Arriving in early February 2026, the KTM 990 RC R TRACK is set to make its debut – a pure, track-only machine engineered to deliver performance straight from the Mattighofen production line. Available to order through authorized KTM dealers, the KTM 990 RC R TRACK is far more than a street bike conversion. Stripped of unnecessary components and fitted with essentials for serious track use – including a reduced dashboard, dedicated electronics, removed ABS modulator, direct brake lines, a track-optimized gearbox, and more – it’s built to bring riders closer to the apex from day one. Full technical details of this new model will be revealed in early February 2026.",
            "In addition, KTM is set to launch the KTM 990 RC R CUP in Europe during spring 2026. Designed for riders looking to progress beyond standard track days, the KTM 990 RC R CUP offers an accessible entry point into racing without the pressure of competing against seasoned professionals. To further elevate the experience, professional KTM riders will be present at each round, sharing insights and mentoring participants to sharpen their skills on track. The KTM 990 RC R CUP will be open to both the street-homologated version and the dedicated KTM 990 RC R TRACK model. For more info about the CUP go toKTM.com."
        ],
        "es": [
            "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong.",
            "Announcedmore than a year ago, the KTM 990 RC R should be entering production right about now, and will be available at dealerships within the next few months here in the United States at an MSRP of $13,949.",
            "This fits in the genre of “comfortable sport bike”, but the ergonomics appear relaxed only in comparison to hardcore machines, like a Yamaha R6, as it looks. This is primarily a street bike, but designed to perform on the racetrack as well.",
            "Here is a press release from KTM with more details:",
            "Itchy throttle hands can lose the anxiety. The 2026 KTM 990 RC R is coming closer. KTM’s principal Supersport orientated motorcycle is ready to widen the thrills of the street and narrow the margins for lap-times for track days and races.",
            "The KTM 990 RC R is a high-spec and refined ‘RC’ temptation for riders that like to quicken the pulse but is also engineered with the ergonomics for day-to-day use and offers the best of both domains. The model is the elevated base of the new KTM 990 RC R ‘platform’ that will reset the perception of performance, style and fun in the next generation Supersport segment.",
            "The KTM 990 RC R is the natural extension of the KTM RC line-up and has been years in the making with a wealth of data garnered by KTM’s Research and Development as well as aerodynamic data from their Motorsport program. Fabricated and assembled in Austria, the bike has a purpose-built steel chassis (and diecast aluminum subframe) with primed front end feel and stiffness that is felt under acceleration for assuring stability but is still honed for agility. The 57kg EURO5+ ready LC8c engine cranks out 103 Nm torque and 130 PS to get away from any traffic light like it was the front row of the grid.",
            "Sporting DNA is immediately transparent through the aesthetic of the KTM 990 RC R with the wind-tunneled aerodynamics, 320 mm Brembo 4-piston caliper HyPure brakes, attuned bodywork, WP APEX suspension and 8,8” TFT dash that reveals the Ride Modes: RAIN, STREET, SPORT, and CUSTOM. Optional Ride Modes include TRACK and two more CUSTOM Modes and telemetry such as lean angle and throttle opening rates for acceleration as well as the advanced four standard ABS Modes: STREET, SPORT, SUPERMOTO+ and SUPERMOTO ABS.",
            "The specs of the KTM 990 RC R are a clear indication of the racing genesis of the project but KTM’s goal is to offer an effective and appealing motorcycle for riders that want to turn heads on street corners. This is evident through the riding position that is READY TO RACE but dialed for longer time at the grips. The six-point ergonomics contact patch gives comfy support for knees, arms and hands and adjustable footrests will accommodate taller or shorter users. Weight has been trimmed where possible and practicality augmented by details such as the hefty 16 L fuel tank that should provide a good range.",
            "The KTM 990 RC R will be coming off production lines in October 2025 and soon after the slipstream begins from authorized KTM dealers.",
            "Riaan Neveling, MANAGER KTM GLOBAL MARKETING:“At KTM we like the fast-paced life and the KTM 990 RC R is a bike that we’ve been impatient to show for some time now. Why? Through all our model segments and strong technology, we know we’ve been missing that motorcycle that gets a certain type of rider excited. We kick ass when it comes to Naked bikes, Adventure bikes and, of course, Offroad, among others but this is the expression we’ve wanted to deliver for some time. It’s our link to all the efforts to the RED BULL KTM FACTORY RACING MotoGP project and our outlet for the sea of information and data that has come the way of our Mattighofen R&D experts.”",
            "The KTM 990 RC R’s journey to realization has been charted from discussions to design to delivery in a special video series that can be seenHERE.",
            "Riders, racers and authentic performance-seekers can choose between orange and black 2026 KTM 990 RC R versions.",
            "KTM has always stayed true to its READY TO RACE core, and the dedicated track rider is no exception. Arriving in early February 2026, the KTM 990 RC R TRACK is set to make its debut – a pure, track-only machine engineered to deliver performance straight from the Mattighofen production line. Available to order through authorized KTM dealers, the KTM 990 RC R TRACK is far more than a street bike conversion. Stripped of unnecessary components and fitted with essentials for serious track use – including a reduced dashboard, dedicated electronics, removed ABS modulator, direct brake lines, a track-optimized gearbox, and more – it’s built to bring riders closer to the apex from day one. Full technical details of this new model will be revealed in early February 2026.",
            "In addition, KTM is set to launch the KTM 990 RC R CUP in Europe during spring 2026. Designed for riders looking to progress beyond standard track days, the KTM 990 RC R CUP offers an accessible entry point into racing without the pressure of competing against seasoned professionals. To further elevate the experience, professional KTM riders will be present at each round, sharing insights and mentoring participants to sharpen their skills on track. The KTM 990 RC R CUP will be open to both the street-homologated version and the dedicated KTM 990 RC R TRACK model. For more info about the CUP go toKTM.com."
        ],
        "it": [
            "If you thought that the Ducati Panigale V2 and Yamaha R9 would sit alone as the newest additions to the production supersport category, KTM just proved you wrong.",
            "Announcedmore than a year ago, the KTM 990 RC R should be entering production right about now, and will be available at dealerships within the next few months here in the United States at an MSRP of $13,949.",
            "This fits in the genre of “comfortable sport bike”, but the ergonomics appear relaxed only in comparison to hardcore machines, like a Yamaha R6, as it looks. This is primarily a street bike, but designed to perform on the racetrack as well.",
            "Here is a press release from KTM with more details:",
            "Itchy throttle hands can lose the anxiety. The 2026 KTM 990 RC R is coming closer. KTM’s principal Supersport orientated motorcycle is ready to widen the thrills of the street and narrow the margins for lap-times for track days and races.",
            "The KTM 990 RC R is a high-spec and refined ‘RC’ temptation for riders that like to quicken the pulse but is also engineered with the ergonomics for day-to-day use and offers the best of both domains. The model is the elevated base of the new KTM 990 RC R ‘platform’ that will reset the perception of performance, style and fun in the next generation Supersport segment.",
            "The KTM 990 RC R is the natural extension of the KTM RC line-up and has been years in the making with a wealth of data garnered by KTM’s Research and Development as well as aerodynamic data from their Motorsport program. Fabricated and assembled in Austria, the bike has a purpose-built steel chassis (and diecast aluminum subframe) with primed front end feel and stiffness that is felt under acceleration for assuring stability but is still honed for agility. The 57kg EURO5+ ready LC8c engine cranks out 103 Nm torque and 130 PS to get away from any traffic light like it was the front row of the grid.",
            "Sporting DNA is immediately transparent through the aesthetic of the KTM 990 RC R with the wind-tunneled aerodynamics, 320 mm Brembo 4-piston caliper HyPure brakes, attuned bodywork, WP APEX suspension and 8,8” TFT dash that reveals the Ride Modes: RAIN, STREET, SPORT, and CUSTOM. Optional Ride Modes include TRACK and two more CUSTOM Modes and telemetry such as lean angle and throttle opening rates for acceleration as well as the advanced four standard ABS Modes: STREET, SPORT, SUPERMOTO+ and SUPERMOTO ABS.",
            "The specs of the KTM 990 RC R are a clear indication of the racing genesis of the project but KTM’s goal is to offer an effective and appealing motorcycle for riders that want to turn heads on street corners. This is evident through the riding position that is READY TO RACE but dialed for longer time at the grips. The six-point ergonomics contact patch gives comfy support for knees, arms and hands and adjustable footrests will accommodate taller or shorter users. Weight has been trimmed where possible and practicality augmented by details such as the hefty 16 L fuel tank that should provide a good range.",
            "The KTM 990 RC R will be coming off production lines in October 2025 and soon after the slipstream begins from authorized KTM dealers.",
            "Riaan Neveling, MANAGER KTM GLOBAL MARKETING:“At KTM we like the fast-paced life and the KTM 990 RC R is a bike that we’ve been impatient to show for some time now. Why? Through all our model segments and strong technology, we know we’ve been missing that motorcycle that gets a certain type of rider excited. We kick ass when it comes to Naked bikes, Adventure bikes and, of course, Offroad, among others but this is the expression we’ve wanted to deliver for some time. It’s our link to all the efforts to the RED BULL KTM FACTORY RACING MotoGP project and our outlet for the sea of information and data that has come the way of our Mattighofen R&D experts.”",
            "The KTM 990 RC R’s journey to realization has been charted from discussions to design to delivery in a special video series that can be seenHERE.",
            "Riders, racers and authentic performance-seekers can choose between orange and black 2026 KTM 990 RC R versions.",
            "KTM has always stayed true to its READY TO RACE core, and the dedicated track rider is no exception. Arriving in early February 2026, the KTM 990 RC R TRACK is set to make its debut – a pure, track-only machine engineered to deliver performance straight from the Mattighofen production line. Available to order through authorized KTM dealers, the KTM 990 RC R TRACK is far more than a street bike conversion. Stripped of unnecessary components and fitted with essentials for serious track use – including a reduced dashboard, dedicated electronics, removed ABS modulator, direct brake lines, a track-optimized gearbox, and more – it’s built to bring riders closer to the apex from day one. Full technical details of this new model will be revealed in early February 2026.",
            "In addition, KTM is set to launch the KTM 990 RC R CUP in Europe during spring 2026. Designed for riders looking to progress beyond standard track days, the KTM 990 RC R CUP offers an accessible entry point into racing without the pressure of competing against seasoned professionals. To further elevate the experience, professional KTM riders will be present at each round, sharing insights and mentoring participants to sharpen their skills on track. The KTM 990 RC R CUP will be open to both the street-homologated version and the dedicated KTM 990 RC R TRACK model. For more info about the CUP go toKTM.com."
        ]
    }
},
,
{
    "id": "morbidelli-n125v-si-guida-a-16-anni-ma-fa-sognare-in-grande-eicma",
    "title": {
        "fr": "Morbidelli N125V, si guida a 16 anni ma fa sognare in grande - EICMA",
        "en": "Morbidelli N125V, si guida a 16 anni ma fa sognare in grande - EICMA",
        "es": "Morbidelli N125V, si guida a 16 anni ma fa sognare in grande - EICMA",
        "it": "Morbidelli N125V, si guida a 16 anni ma fa sognare in grande - EICMA"
    },
    "excerpt": {
        "fr": "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi.",
        "en": "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi.",
        "es": "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi.",
        "it": "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi."
    },
    "image": newsNew28,
    "category": "New Bikes",
    "readTime": "1 min",
    "body": {
        "fr": [
            "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ],
        "en": [
            "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ],
        "es": [
            "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ],
        "it": [
            "Prima uscita ufficiale per laMorbidelli N125V.La moto, presentata lo scorso novembre al Salone di Milano, è stata tra le protagoniste nel weekend da 1 al 3 maggio all’EICMA Riding Fest 2026di Misano.La nuova N125V si guida con patente A1 o B e si rivolge a chi desidera una 125 con soluzioni tecniche diverse dal consueto: sotto il serbatoio da 16 litri pulsa infatti unV-Twin da 124,9 cc con distribuzione a 6 valvole (3 valvole per cilindro) e raffreddamento a liquido.Il bicilindrico eroga 14 CV (10.3 kW) a 9.500 giri/min e una coppia di 10,9 Nm a 6.500 giri/min ed è abbinato a un cambio a 6 velocità. Anche la ciclistica si affida a soluzioni da moto di cubatura maggiore, a partire dal forcellone monobraccio in alluminio che lavora in abbinamento a un monoammortizzatore con regolazione del precarico molla, mentre l'avantreno si affida a una forcella rovesciata con steli da 37 mm. La frenata è gestita da un impianto con ABS a doppio canale, con disco anteriore da 300 mm e pinza a quattro pistoncini, mentre al posteriore troviamo un disco da 240 mm e una pinza a due pistoncini. I cerchi in lega da 17 pollici montano pneumatici 110/70 e 150/60.La posizione di guida è sportiva ma non affaticante, grazie al manubrio largo e all’altezza della sella dal suolo di 795 mm, a fronte di un peso in ordine di marcia di 185 kg. La dotazione è completata dall’illuminazione full LED e dalla strumentazione LCD. La Morbidelli N125V è disponibile in due colori:Track Blue, il tradizionale azzurro Morbidelli, e Storm Grey con cerchi rossi.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\"",
            "### MV Agusta F3 R, prestazioni da supersport a un prezzo più contenuto"
        ]
    }
},
,
{
    "id": "moto-morini-i-modelli-in-gamma-pronti-per-i-test-ride-nell-area-touring-experience-eicma",
    "title": {
        "fr": "Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience - EICMA",
        "en": "Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience - EICMA",
        "es": "Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience - EICMA",
        "it": "Moto Morini, i modelli in gamma pronti per i test ride nell'area Touring Experience - EICMA"
    },
    "excerpt": {
        "fr": "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano.",
        "en": "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano.",
        "es": "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano.",
        "it": "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano."
    },
    "image": newsNew29,
    "category": "New Bikes",
    "readTime": "1 min",
    "body": {
        "fr": [
            "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano.",
            "In questa occasione gli appassionati del marchio di Trivolzio (PV) avranno l’opportunità di testare gratuitamente i modelli della gamma nell’area Touring Experience. Nel menu sono previsti percorsi guidati tra le strade della Motor Valley e in pista, tra i cordoli del celebre autodromo romagnolo. Ad accompagnare i partecipanti ci sarà ilpilota e ambassador Luca Marcotulli, pronto a raccontare dettagli tecnici e a garantire una guida sicura e divertente. Le moto disponibili per le prove su strada copriranno diversi segmenti: dalla nuova ammiragliaX-Cape 1200alla versatileX-Cape 700, fino allaAlltrHikeguidabile anche con patente A2. Gli amanti dello stile custom potranno invece provare laCalibro Bagger, mentre chi cerca una guida agile in città e fuori potrà salire in sella alla nakedSeiemmezzo STR. Per partecipare ai test ride è necessario registrarsi direttamente sul posto presso lo spazio Moto Morini. È obbligatorio presentarsi con unapatente A in corso di validità(A2 per il modello AlltrHike) e provvisti di casco e abbigliamento tecnico adeguato.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ],
        "en": [
            "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano.",
            "In questa occasione gli appassionati del marchio di Trivolzio (PV) avranno l’opportunità di testare gratuitamente i modelli della gamma nell’area Touring Experience. Nel menu sono previsti percorsi guidati tra le strade della Motor Valley e in pista, tra i cordoli del celebre autodromo romagnolo. Ad accompagnare i partecipanti ci sarà ilpilota e ambassador Luca Marcotulli, pronto a raccontare dettagli tecnici e a garantire una guida sicura e divertente. Le moto disponibili per le prove su strada copriranno diversi segmenti: dalla nuova ammiragliaX-Cape 1200alla versatileX-Cape 700, fino allaAlltrHikeguidabile anche con patente A2. Gli amanti dello stile custom potranno invece provare laCalibro Bagger, mentre chi cerca una guida agile in città e fuori potrà salire in sella alla nakedSeiemmezzo STR. Per partecipare ai test ride è necessario registrarsi direttamente sul posto presso lo spazio Moto Morini. È obbligatorio presentarsi con unapatente A in corso di validità(A2 per il modello AlltrHike) e provvisti di casco e abbigliamento tecnico adeguato.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ],
        "es": [
            "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano.",
            "In questa occasione gli appassionati del marchio di Trivolzio (PV) avranno l’opportunità di testare gratuitamente i modelli della gamma nell’area Touring Experience. Nel menu sono previsti percorsi guidati tra le strade della Motor Valley e in pista, tra i cordoli del celebre autodromo romagnolo. Ad accompagnare i partecipanti ci sarà ilpilota e ambassador Luca Marcotulli, pronto a raccontare dettagli tecnici e a garantire una guida sicura e divertente. Le moto disponibili per le prove su strada copriranno diversi segmenti: dalla nuova ammiragliaX-Cape 1200alla versatileX-Cape 700, fino allaAlltrHikeguidabile anche con patente A2. Gli amanti dello stile custom potranno invece provare laCalibro Bagger, mentre chi cerca una guida agile in città e fuori potrà salire in sella alla nakedSeiemmezzo STR. Per partecipare ai test ride è necessario registrarsi direttamente sul posto presso lo spazio Moto Morini. È obbligatorio presentarsi con unapatente A in corso di validità(A2 per il modello AlltrHike) e provvisti di casco e abbigliamento tecnico adeguato.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ],
        "it": [
            "Moto Morini mette a punto gli ultimi dettagli per la partecipazione alla terza edizione dell’EICMA Riding Fest, l'evento dedicato alle prove moto organizzato e promosso dall’Esposizione internazionale delle due ruote, in calendario nel fine settimana sul circuito di Misano.",
            "In questa occasione gli appassionati del marchio di Trivolzio (PV) avranno l’opportunità di testare gratuitamente i modelli della gamma nell’area Touring Experience. Nel menu sono previsti percorsi guidati tra le strade della Motor Valley e in pista, tra i cordoli del celebre autodromo romagnolo. Ad accompagnare i partecipanti ci sarà ilpilota e ambassador Luca Marcotulli, pronto a raccontare dettagli tecnici e a garantire una guida sicura e divertente. Le moto disponibili per le prove su strada copriranno diversi segmenti: dalla nuova ammiragliaX-Cape 1200alla versatileX-Cape 700, fino allaAlltrHikeguidabile anche con patente A2. Gli amanti dello stile custom potranno invece provare laCalibro Bagger, mentre chi cerca una guida agile in città e fuori potrà salire in sella alla nakedSeiemmezzo STR. Per partecipare ai test ride è necessario registrarsi direttamente sul posto presso lo spazio Moto Morini. È obbligatorio presentarsi con unapatente A in corso di validità(A2 per il modello AlltrHike) e provvisti di casco e abbigliamento tecnico adeguato.",
            "## ARTICOLI CORRELATI",
            "### EICMA RIDING FEST DA RECORD: 27MILA APPASSIONATI ACCENDONO MISANO E CONSACRANO IL FORMAT",
            "### NASCE EICMA RIDING X FEST: IL NUOVO EVENTO DEDICATO ALL’OFF-ROAD SPECIALISTICO",
            "### APRE OGGI AL MISANO WORLD CIRCUIT MARCO SIMONCELLI L’EICMA RIDING FEST: TRE GIORNI DI PURA PASSIONE TRA MOTO, SHOW E LEGGENDE DEL MOTORSPORT",
            "### Benelli rinnova la partecipazione all'EICMA Riding Fest",
            "### All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS",
            "### KTM 1390 Super Duke RR Track 2026, la prima Super Duke esclusivamente da pista della gamma KTM",
            "### Royal Enfield Guerrilla 450 APEX 2026: personalità sportiva",
            "### Gamma Husqvarna: destinazione Misano",
            "### Yamaha, tutte le attività in programma all'EICMA Riding Fest 2026"
        ]
    }
},
,
{
    "id": "mv-agusta-rush-titanio-motore-rivisto-sospensioni-elettroniche-evolute-e-finiture-di-pregio-eicma",
    "title": {
        "fr": "MV Agusta Rush Titanio: motore rivisto, sospensioni elettroniche evolute e finiture di pregio - EICMA",
        "en": "MV Agusta Rush Titanio: motore rivisto, sospensioni elettroniche evolute e finiture di pregio - EICMA",
        "es": "MV Agusta Rush Titanio: motore rivisto, sospensioni elettroniche evolute e finiture di pregio - EICMA",
        "it": "MV Agusta Rush Titanio: motore rivisto, sospensioni elettroniche evolute e finiture di pregio - EICMA"
    },
    "excerpt": {
        "fr": "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati.",
        "en": "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati.",
        "es": "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati.",
        "it": "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati."
    },
    "image": newsNew30,
    "category": "New Bikes",
    "readTime": "1 min",
    "body": {
        "fr": [
            "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati.",
            "Le novità coinvolgono sia il pacchetto tecnico che lefiniture, realizzate con materiali di pregio e lavorazione artigianale.Per quanto riguarda ildesign, la Rush Titanio veste unalivrea Nero Intenso abbinata ad accenti Argento Magnum e Blu Titanio.Come fa presagire il nome,la moto fa ampio uso di particolari in titanio, a cui si aggiungono elementi in fibra di carbonio con trama diagonale. La Rush Titanio introduce inoltrela prima sella per moto al mondo in Alcantara, una membrana idrorepellente che ne garantisce l’impermeabilità.Il motore quattro cilindri in linea 1000 cc è stato aggiornato alla normativa Euro 5+, tra gli interventi principali l’adozione di nuovi alberi a camme, mappatura rivista, una maggiore sensibilità e precisione dell’acceleratore, rapporti del cambio ottimizzati e un rapporto finale più corto. Il motore ora sviluppa 201 CV a 13.500 giri/min con scarico standard e 206 CV a 14.000 giri/min con lo scarico Arrow in titanio (omologato per uso stradale). La coppia massima è di 116 Nm a 11.000 giri/min. La Rush Titanio porta inoltre al debuttoil sistema di sospensioni elettroniche semiattive Öhlins Smart EC 3.0, con tecnologia Spool Valve e risposta degli attuatori fino a sette volte più rapida rispetto al passato. Il sistema è gestito dalla nuova piattaforma software Event Based Control, che analizza in tempo reale la dinamica di guida e si integra con ABS, controllo di trazione e controllo dell’impennata. L’avvio della produzione della Rush Titanio è previsto perluglio 2026,ogni esemplare viene consegnato con un kit premium dedicato.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "en": [
            "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati.",
            "Le novità coinvolgono sia il pacchetto tecnico che lefiniture, realizzate con materiali di pregio e lavorazione artigianale.Per quanto riguarda ildesign, la Rush Titanio veste unalivrea Nero Intenso abbinata ad accenti Argento Magnum e Blu Titanio.Come fa presagire il nome,la moto fa ampio uso di particolari in titanio, a cui si aggiungono elementi in fibra di carbonio con trama diagonale. La Rush Titanio introduce inoltrela prima sella per moto al mondo in Alcantara, una membrana idrorepellente che ne garantisce l’impermeabilità.Il motore quattro cilindri in linea 1000 cc è stato aggiornato alla normativa Euro 5+, tra gli interventi principali l’adozione di nuovi alberi a camme, mappatura rivista, una maggiore sensibilità e precisione dell’acceleratore, rapporti del cambio ottimizzati e un rapporto finale più corto. Il motore ora sviluppa 201 CV a 13.500 giri/min con scarico standard e 206 CV a 14.000 giri/min con lo scarico Arrow in titanio (omologato per uso stradale). La coppia massima è di 116 Nm a 11.000 giri/min. La Rush Titanio porta inoltre al debuttoil sistema di sospensioni elettroniche semiattive Öhlins Smart EC 3.0, con tecnologia Spool Valve e risposta degli attuatori fino a sette volte più rapida rispetto al passato. Il sistema è gestito dalla nuova piattaforma software Event Based Control, che analizza in tempo reale la dinamica di guida e si integra con ABS, controllo di trazione e controllo dell’impennata. L’avvio della produzione della Rush Titanio è previsto perluglio 2026,ogni esemplare viene consegnato con un kit premium dedicato.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "es": [
            "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati.",
            "Le novità coinvolgono sia il pacchetto tecnico che lefiniture, realizzate con materiali di pregio e lavorazione artigianale.Per quanto riguarda ildesign, la Rush Titanio veste unalivrea Nero Intenso abbinata ad accenti Argento Magnum e Blu Titanio.Come fa presagire il nome,la moto fa ampio uso di particolari in titanio, a cui si aggiungono elementi in fibra di carbonio con trama diagonale. La Rush Titanio introduce inoltrela prima sella per moto al mondo in Alcantara, una membrana idrorepellente che ne garantisce l’impermeabilità.Il motore quattro cilindri in linea 1000 cc è stato aggiornato alla normativa Euro 5+, tra gli interventi principali l’adozione di nuovi alberi a camme, mappatura rivista, una maggiore sensibilità e precisione dell’acceleratore, rapporti del cambio ottimizzati e un rapporto finale più corto. Il motore ora sviluppa 201 CV a 13.500 giri/min con scarico standard e 206 CV a 14.000 giri/min con lo scarico Arrow in titanio (omologato per uso stradale). La coppia massima è di 116 Nm a 11.000 giri/min. La Rush Titanio porta inoltre al debuttoil sistema di sospensioni elettroniche semiattive Öhlins Smart EC 3.0, con tecnologia Spool Valve e risposta degli attuatori fino a sette volte più rapida rispetto al passato. Il sistema è gestito dalla nuova piattaforma software Event Based Control, che analizza in tempo reale la dinamica di guida e si integra con ABS, controllo di trazione e controllo dell’impennata. L’avvio della produzione della Rush Titanio è previsto perluglio 2026,ogni esemplare viene consegnato con un kit premium dedicato.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "it": [
            "La Casa di Schiranna ha presentato la nuova versione dellasua hyper naked, la Rush Titanio.Sarà realizzata presso la storica fabbrica nei pressi di Varese insoli 300 esemplari numerati.",
            "Le novità coinvolgono sia il pacchetto tecnico che lefiniture, realizzate con materiali di pregio e lavorazione artigianale.Per quanto riguarda ildesign, la Rush Titanio veste unalivrea Nero Intenso abbinata ad accenti Argento Magnum e Blu Titanio.Come fa presagire il nome,la moto fa ampio uso di particolari in titanio, a cui si aggiungono elementi in fibra di carbonio con trama diagonale. La Rush Titanio introduce inoltrela prima sella per moto al mondo in Alcantara, una membrana idrorepellente che ne garantisce l’impermeabilità.Il motore quattro cilindri in linea 1000 cc è stato aggiornato alla normativa Euro 5+, tra gli interventi principali l’adozione di nuovi alberi a camme, mappatura rivista, una maggiore sensibilità e precisione dell’acceleratore, rapporti del cambio ottimizzati e un rapporto finale più corto. Il motore ora sviluppa 201 CV a 13.500 giri/min con scarico standard e 206 CV a 14.000 giri/min con lo scarico Arrow in titanio (omologato per uso stradale). La coppia massima è di 116 Nm a 11.000 giri/min. La Rush Titanio porta inoltre al debuttoil sistema di sospensioni elettroniche semiattive Öhlins Smart EC 3.0, con tecnologia Spool Valve e risposta degli attuatori fino a sette volte più rapida rispetto al passato. Il sistema è gestito dalla nuova piattaforma software Event Based Control, che analizza in tempo reale la dinamica di guida e si integra con ABS, controllo di trazione e controllo dell’impennata. L’avvio della produzione della Rush Titanio è previsto perluglio 2026,ogni esemplare viene consegnato con un kit premium dedicato.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ]
    }
},
,
{
    "id": "suzuki-goes-retro-with-2026-gsx-8t-and-gsx-8tt",
    "title": {
        "fr": "Suzuki Goes Retro With 2026 GSX-8T and GSX-8TT",
        "en": "Suzuki Goes Retro With 2026 GSX-8T and GSX-8TT",
        "es": "Suzuki Goes Retro With 2026 GSX-8T and GSX-8TT",
        "it": "Suzuki Goes Retro With 2026 GSX-8T and GSX-8TT"
    },
    "excerpt": {
        "fr": "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models.",
        "en": "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models.",
        "es": "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models.",
        "it": "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models."
    },
    "image": newsNew31,
    "category": "New Bikes",
    "readTime": "4 min",
    "body": {
        "fr": [
            "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models.",
            "Here is some press material provided by Suzuki:",
            "Suzuki Motor Corporation has unveiled the all-new GSX-8T and all-new GSX-8TT street bike on July 4. Sales will begin in the summer of 2025 globally,primarily in Europe and North America.",
            "The all-new “GSX-8T” and all-new “GSX-8TT” are neo-retro street bikes thatcombine the unique and attractive elements of Suzuki’s past iconic modelswith modern design, incorporating the latest technology, engines, and chassis.",
            "They feature a round headlight inspired by the characteristic flat-bottom lightthat was commonly used in Suzuki’s past models, and Suzuki’s firsthandlebar-end mirrors, achieving a modern look while evoking a sense ofretro. Meanwhile, we have heightened agility and comfort by combining thecompact 776cm 3 engine, which are highly acclaimed in the GSX-8S/R, and ahigh-rigidity steel frame, with a lightweight aluminum swingarm.",
            "The bikes are equipped with electronic control systems to assist riders, suchas the Suzuki Drive Mode Selector (SDMS), ride by wire, and bi-directionalquick-shift system, as well as a lithium-ion battery made by ELIIY Power, whichis lightweight, compact, highly reliable, and maintains high startability even inlow temperatures, allowing a wide range of users to enjoy sports riding withpeace of mind.",
            "All-New GSX-8TThe all-new GSX-8T is designed to evoke the T500, known as the Titan, a high-performance naked bike from the 1960s. It features a color scheme that highlights the tank by making the rear of the body matte black, and a 3D-raised emblem on the shroud inspired by the eight ball, which symbolizes a decisive move in billiards, resulting in a design that is both retro and modern.",
            "All-New GSX-8TTThe all-new GSX-8TT features a headlight cowl reminiscent of past models, and an under cowl, design inspired by 1970s road racers. The body color includes black front forks and shrouds, and gray seat rails, creating a premium and calm color scheme that highlights the sporty accents of the wheels and decals. The “TT” in the name stands for a combination of the base model GSX-8T with “Timeless”, signifying the revival of classic bikes in a modern context.",
            "Engine & Performance:• 776cc parallel twin DOHC engine delivers a fine balance of smooth, controllable power from low rpm and free-revving performance through to the high end.<",
            "• The 270-degree crankshaft configuration helps maintain a feeling in common with Suzuki’s V-twin models.",
            "• Suzuki Cross Balancer, the first primary balancer of its type on a production motorcycle, contributes to smooth operation and compact, lightweight engine design.",
            "• The inlet control of the cooling system speeds up engine warm-up and helps maintain consistent operating temperatures.",
            "• The electronic throttle bodies help achieve faithful response and a linear throttle response.",
            "• The 2-into-1 exhaust system features a dual-stage catalytic converter inside the collector that helps satisfy Euro 5+ emissions standards and a striking short design.",
            "• The 6-speed transmission realizes smooth shifting and improved controllability.",
            "• Suzuki Clutch Assist System (SCAS) helps reduce fatigue on long rides and contributes to smoother shifting.",
            "Suzuki Intelligent Ride System (S.I.R.S.):• Suzuki Drive Mode Selector (SDMS) better supports the rider in matching performance to the conditions of the riding scene, road conditions, or preferred riding style.",
            "• Suzuki Traction Control System* (STCS) with 3 mode settings (+ OFF) enables greater control over the bike’s behavior under diverse riding conditions.",
            "• Suzuki’s ride-by-wire electronic throttle control system realizes throttle action that responds faithfully to the rider’s intention.",
            "• Suzuki’s Bi-directional Quick Shift System (with ON/OFF settings) provides quicker, smoother, more assured shifting without operating the clutch lever while in motion.",
            "• The ABS** system contributes to more stable braking by helping prevent the wheels from locking up, even during hard braking.",
            "• The Suzuki Easy Start System starts the engine with one quick press of the starter button.",
            "• Suzuki’s Low RPM Assist function helps maintain engine idle speed for smoother and easier starts.",
            "Chassis:• A steel frame contributes to comfort, straight-line stability, and nimble handling.",
            "• Dual radial mount front disc brake calipers act on ø310 mm discs to provide sure stopping power and controllability.",
            "• KYB inverted front forks deliver a smooth, controllable ride.",
            "• Adjustable KYB link-type rear suspension contributes to agility and stability.",
            "• Cast aluminum wheels featuring a unique design contribute to nimble handling and a futuristic, sporty appearance.",
            "• Dunlop SPORTMAX Roadsport 2 tires contribute to nimble, predictable handling and sporty performance.",
            "• Features a uniquely shaped lightweight aluminum swingarm with enhanced torsional rigidity that contributes to nimble handling and straight-line stability.",
            "• Tapered aluminum handlebars contribute to positive control and an upright riding position that offers comfort combined with a sporty riding experience.",
            "• The uniquely shaped, large-capacity 4.3 gal fuel tank exudes a classic presence, providing stability while riding and a sense of security during knee grips.",
            "• The rider’s seat is designed for comfortable sport riding, delivering solid support and shaped to offer freedom of movement.",
            "Electric Equipment:• A custom 5-inch color TFT LCD multi-function instrument panel features a clearly legible display of a rich variety of information."
        ],
        "en": [
            "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models.",
            "Here is some press material provided by Suzuki:",
            "Suzuki Motor Corporation has unveiled the all-new GSX-8T and all-new GSX-8TT street bike on July 4. Sales will begin in the summer of 2025 globally,primarily in Europe and North America.",
            "The all-new “GSX-8T” and all-new “GSX-8TT” are neo-retro street bikes thatcombine the unique and attractive elements of Suzuki’s past iconic modelswith modern design, incorporating the latest technology, engines, and chassis.",
            "They feature a round headlight inspired by the characteristic flat-bottom lightthat was commonly used in Suzuki’s past models, and Suzuki’s firsthandlebar-end mirrors, achieving a modern look while evoking a sense ofretro. Meanwhile, we have heightened agility and comfort by combining thecompact 776cm 3 engine, which are highly acclaimed in the GSX-8S/R, and ahigh-rigidity steel frame, with a lightweight aluminum swingarm.",
            "The bikes are equipped with electronic control systems to assist riders, suchas the Suzuki Drive Mode Selector (SDMS), ride by wire, and bi-directionalquick-shift system, as well as a lithium-ion battery made by ELIIY Power, whichis lightweight, compact, highly reliable, and maintains high startability even inlow temperatures, allowing a wide range of users to enjoy sports riding withpeace of mind.",
            "All-New GSX-8TThe all-new GSX-8T is designed to evoke the T500, known as the Titan, a high-performance naked bike from the 1960s. It features a color scheme that highlights the tank by making the rear of the body matte black, and a 3D-raised emblem on the shroud inspired by the eight ball, which symbolizes a decisive move in billiards, resulting in a design that is both retro and modern.",
            "All-New GSX-8TTThe all-new GSX-8TT features a headlight cowl reminiscent of past models, and an under cowl, design inspired by 1970s road racers. The body color includes black front forks and shrouds, and gray seat rails, creating a premium and calm color scheme that highlights the sporty accents of the wheels and decals. The “TT” in the name stands for a combination of the base model GSX-8T with “Timeless”, signifying the revival of classic bikes in a modern context.",
            "Engine & Performance:• 776cc parallel twin DOHC engine delivers a fine balance of smooth, controllable power from low rpm and free-revving performance through to the high end.<",
            "• The 270-degree crankshaft configuration helps maintain a feeling in common with Suzuki’s V-twin models.",
            "• Suzuki Cross Balancer, the first primary balancer of its type on a production motorcycle, contributes to smooth operation and compact, lightweight engine design.",
            "• The inlet control of the cooling system speeds up engine warm-up and helps maintain consistent operating temperatures.",
            "• The electronic throttle bodies help achieve faithful response and a linear throttle response.",
            "• The 2-into-1 exhaust system features a dual-stage catalytic converter inside the collector that helps satisfy Euro 5+ emissions standards and a striking short design.",
            "• The 6-speed transmission realizes smooth shifting and improved controllability.",
            "• Suzuki Clutch Assist System (SCAS) helps reduce fatigue on long rides and contributes to smoother shifting.",
            "Suzuki Intelligent Ride System (S.I.R.S.):• Suzuki Drive Mode Selector (SDMS) better supports the rider in matching performance to the conditions of the riding scene, road conditions, or preferred riding style.",
            "• Suzuki Traction Control System* (STCS) with 3 mode settings (+ OFF) enables greater control over the bike’s behavior under diverse riding conditions.",
            "• Suzuki’s ride-by-wire electronic throttle control system realizes throttle action that responds faithfully to the rider’s intention.",
            "• Suzuki’s Bi-directional Quick Shift System (with ON/OFF settings) provides quicker, smoother, more assured shifting without operating the clutch lever while in motion.",
            "• The ABS** system contributes to more stable braking by helping prevent the wheels from locking up, even during hard braking.",
            "• The Suzuki Easy Start System starts the engine with one quick press of the starter button.",
            "• Suzuki’s Low RPM Assist function helps maintain engine idle speed for smoother and easier starts.",
            "Chassis:• A steel frame contributes to comfort, straight-line stability, and nimble handling.",
            "• Dual radial mount front disc brake calipers act on ø310 mm discs to provide sure stopping power and controllability.",
            "• KYB inverted front forks deliver a smooth, controllable ride.",
            "• Adjustable KYB link-type rear suspension contributes to agility and stability.",
            "• Cast aluminum wheels featuring a unique design contribute to nimble handling and a futuristic, sporty appearance.",
            "• Dunlop SPORTMAX Roadsport 2 tires contribute to nimble, predictable handling and sporty performance.",
            "• Features a uniquely shaped lightweight aluminum swingarm with enhanced torsional rigidity that contributes to nimble handling and straight-line stability.",
            "• Tapered aluminum handlebars contribute to positive control and an upright riding position that offers comfort combined with a sporty riding experience.",
            "• The uniquely shaped, large-capacity 4.3 gal fuel tank exudes a classic presence, providing stability while riding and a sense of security during knee grips.",
            "• The rider’s seat is designed for comfortable sport riding, delivering solid support and shaped to offer freedom of movement.",
            "Electric Equipment:• A custom 5-inch color TFT LCD multi-function instrument panel features a clearly legible display of a rich variety of information."
        ],
        "es": [
            "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models.",
            "Here is some press material provided by Suzuki:",
            "Suzuki Motor Corporation has unveiled the all-new GSX-8T and all-new GSX-8TT street bike on July 4. Sales will begin in the summer of 2025 globally,primarily in Europe and North America.",
            "The all-new “GSX-8T” and all-new “GSX-8TT” are neo-retro street bikes thatcombine the unique and attractive elements of Suzuki’s past iconic modelswith modern design, incorporating the latest technology, engines, and chassis.",
            "They feature a round headlight inspired by the characteristic flat-bottom lightthat was commonly used in Suzuki’s past models, and Suzuki’s firsthandlebar-end mirrors, achieving a modern look while evoking a sense ofretro. Meanwhile, we have heightened agility and comfort by combining thecompact 776cm 3 engine, which are highly acclaimed in the GSX-8S/R, and ahigh-rigidity steel frame, with a lightweight aluminum swingarm.",
            "The bikes are equipped with electronic control systems to assist riders, suchas the Suzuki Drive Mode Selector (SDMS), ride by wire, and bi-directionalquick-shift system, as well as a lithium-ion battery made by ELIIY Power, whichis lightweight, compact, highly reliable, and maintains high startability even inlow temperatures, allowing a wide range of users to enjoy sports riding withpeace of mind.",
            "All-New GSX-8TThe all-new GSX-8T is designed to evoke the T500, known as the Titan, a high-performance naked bike from the 1960s. It features a color scheme that highlights the tank by making the rear of the body matte black, and a 3D-raised emblem on the shroud inspired by the eight ball, which symbolizes a decisive move in billiards, resulting in a design that is both retro and modern.",
            "All-New GSX-8TTThe all-new GSX-8TT features a headlight cowl reminiscent of past models, and an under cowl, design inspired by 1970s road racers. The body color includes black front forks and shrouds, and gray seat rails, creating a premium and calm color scheme that highlights the sporty accents of the wheels and decals. The “TT” in the name stands for a combination of the base model GSX-8T with “Timeless”, signifying the revival of classic bikes in a modern context.",
            "Engine & Performance:• 776cc parallel twin DOHC engine delivers a fine balance of smooth, controllable power from low rpm and free-revving performance through to the high end.<",
            "• The 270-degree crankshaft configuration helps maintain a feeling in common with Suzuki’s V-twin models.",
            "• Suzuki Cross Balancer, the first primary balancer of its type on a production motorcycle, contributes to smooth operation and compact, lightweight engine design.",
            "• The inlet control of the cooling system speeds up engine warm-up and helps maintain consistent operating temperatures.",
            "• The electronic throttle bodies help achieve faithful response and a linear throttle response.",
            "• The 2-into-1 exhaust system features a dual-stage catalytic converter inside the collector that helps satisfy Euro 5+ emissions standards and a striking short design.",
            "• The 6-speed transmission realizes smooth shifting and improved controllability.",
            "• Suzuki Clutch Assist System (SCAS) helps reduce fatigue on long rides and contributes to smoother shifting.",
            "Suzuki Intelligent Ride System (S.I.R.S.):• Suzuki Drive Mode Selector (SDMS) better supports the rider in matching performance to the conditions of the riding scene, road conditions, or preferred riding style.",
            "• Suzuki Traction Control System* (STCS) with 3 mode settings (+ OFF) enables greater control over the bike’s behavior under diverse riding conditions.",
            "• Suzuki’s ride-by-wire electronic throttle control system realizes throttle action that responds faithfully to the rider’s intention.",
            "• Suzuki’s Bi-directional Quick Shift System (with ON/OFF settings) provides quicker, smoother, more assured shifting without operating the clutch lever while in motion.",
            "• The ABS** system contributes to more stable braking by helping prevent the wheels from locking up, even during hard braking.",
            "• The Suzuki Easy Start System starts the engine with one quick press of the starter button.",
            "• Suzuki’s Low RPM Assist function helps maintain engine idle speed for smoother and easier starts.",
            "Chassis:• A steel frame contributes to comfort, straight-line stability, and nimble handling.",
            "• Dual radial mount front disc brake calipers act on ø310 mm discs to provide sure stopping power and controllability.",
            "• KYB inverted front forks deliver a smooth, controllable ride.",
            "• Adjustable KYB link-type rear suspension contributes to agility and stability.",
            "• Cast aluminum wheels featuring a unique design contribute to nimble handling and a futuristic, sporty appearance.",
            "• Dunlop SPORTMAX Roadsport 2 tires contribute to nimble, predictable handling and sporty performance.",
            "• Features a uniquely shaped lightweight aluminum swingarm with enhanced torsional rigidity that contributes to nimble handling and straight-line stability.",
            "• Tapered aluminum handlebars contribute to positive control and an upright riding position that offers comfort combined with a sporty riding experience.",
            "• The uniquely shaped, large-capacity 4.3 gal fuel tank exudes a classic presence, providing stability while riding and a sense of security during knee grips.",
            "• The rider’s seat is designed for comfortable sport riding, delivering solid support and shaped to offer freedom of movement.",
            "Electric Equipment:• A custom 5-inch color TFT LCD multi-function instrument panel features a clearly legible display of a rich variety of information."
        ],
        "it": [
            "Going on sale soon at prices “To Be Determined” the 2026 Suzuki GSX-8T and GSX-8TT (the one with the headlight cowl) borrow heavily from the existing 776 cc parallel-twin models in Suzuki’s line-up. Based on MD testing, this engine is very smooth with satisfying power delivery, which bodes well for both of these models.",
            "Here is some press material provided by Suzuki:",
            "Suzuki Motor Corporation has unveiled the all-new GSX-8T and all-new GSX-8TT street bike on July 4. Sales will begin in the summer of 2025 globally,primarily in Europe and North America.",
            "The all-new “GSX-8T” and all-new “GSX-8TT” are neo-retro street bikes thatcombine the unique and attractive elements of Suzuki’s past iconic modelswith modern design, incorporating the latest technology, engines, and chassis.",
            "They feature a round headlight inspired by the characteristic flat-bottom lightthat was commonly used in Suzuki’s past models, and Suzuki’s firsthandlebar-end mirrors, achieving a modern look while evoking a sense ofretro. Meanwhile, we have heightened agility and comfort by combining thecompact 776cm 3 engine, which are highly acclaimed in the GSX-8S/R, and ahigh-rigidity steel frame, with a lightweight aluminum swingarm.",
            "The bikes are equipped with electronic control systems to assist riders, suchas the Suzuki Drive Mode Selector (SDMS), ride by wire, and bi-directionalquick-shift system, as well as a lithium-ion battery made by ELIIY Power, whichis lightweight, compact, highly reliable, and maintains high startability even inlow temperatures, allowing a wide range of users to enjoy sports riding withpeace of mind.",
            "All-New GSX-8TThe all-new GSX-8T is designed to evoke the T500, known as the Titan, a high-performance naked bike from the 1960s. It features a color scheme that highlights the tank by making the rear of the body matte black, and a 3D-raised emblem on the shroud inspired by the eight ball, which symbolizes a decisive move in billiards, resulting in a design that is both retro and modern.",
            "All-New GSX-8TTThe all-new GSX-8TT features a headlight cowl reminiscent of past models, and an under cowl, design inspired by 1970s road racers. The body color includes black front forks and shrouds, and gray seat rails, creating a premium and calm color scheme that highlights the sporty accents of the wheels and decals. The “TT” in the name stands for a combination of the base model GSX-8T with “Timeless”, signifying the revival of classic bikes in a modern context.",
            "Engine & Performance:• 776cc parallel twin DOHC engine delivers a fine balance of smooth, controllable power from low rpm and free-revving performance through to the high end.<",
            "• The 270-degree crankshaft configuration helps maintain a feeling in common with Suzuki’s V-twin models.",
            "• Suzuki Cross Balancer, the first primary balancer of its type on a production motorcycle, contributes to smooth operation and compact, lightweight engine design.",
            "• The inlet control of the cooling system speeds up engine warm-up and helps maintain consistent operating temperatures.",
            "• The electronic throttle bodies help achieve faithful response and a linear throttle response.",
            "• The 2-into-1 exhaust system features a dual-stage catalytic converter inside the collector that helps satisfy Euro 5+ emissions standards and a striking short design.",
            "• The 6-speed transmission realizes smooth shifting and improved controllability.",
            "• Suzuki Clutch Assist System (SCAS) helps reduce fatigue on long rides and contributes to smoother shifting.",
            "Suzuki Intelligent Ride System (S.I.R.S.):• Suzuki Drive Mode Selector (SDMS) better supports the rider in matching performance to the conditions of the riding scene, road conditions, or preferred riding style.",
            "• Suzuki Traction Control System* (STCS) with 3 mode settings (+ OFF) enables greater control over the bike’s behavior under diverse riding conditions.",
            "• Suzuki’s ride-by-wire electronic throttle control system realizes throttle action that responds faithfully to the rider’s intention.",
            "• Suzuki’s Bi-directional Quick Shift System (with ON/OFF settings) provides quicker, smoother, more assured shifting without operating the clutch lever while in motion.",
            "• The ABS** system contributes to more stable braking by helping prevent the wheels from locking up, even during hard braking.",
            "• The Suzuki Easy Start System starts the engine with one quick press of the starter button.",
            "• Suzuki’s Low RPM Assist function helps maintain engine idle speed for smoother and easier starts.",
            "Chassis:• A steel frame contributes to comfort, straight-line stability, and nimble handling.",
            "• Dual radial mount front disc brake calipers act on ø310 mm discs to provide sure stopping power and controllability.",
            "• KYB inverted front forks deliver a smooth, controllable ride.",
            "• Adjustable KYB link-type rear suspension contributes to agility and stability.",
            "• Cast aluminum wheels featuring a unique design contribute to nimble handling and a futuristic, sporty appearance.",
            "• Dunlop SPORTMAX Roadsport 2 tires contribute to nimble, predictable handling and sporty performance.",
            "• Features a uniquely shaped lightweight aluminum swingarm with enhanced torsional rigidity that contributes to nimble handling and straight-line stability.",
            "• Tapered aluminum handlebars contribute to positive control and an upright riding position that offers comfort combined with a sporty riding experience.",
            "• The uniquely shaped, large-capacity 4.3 gal fuel tank exudes a classic presence, providing stability while riding and a sense of security during knee grips.",
            "• The rider’s seat is designed for comfortable sport riding, delivering solid support and shaped to offer freedom of movement.",
            "Electric Equipment:• A custom 5-inch color TFT LCD multi-function instrument panel features a clearly legible display of a rich variety of information."
        ]
    }
},
,
{
    "id": "triumph-announces-new-trident-800",
    "title": {
        "fr": "Triumph Announces New Trident 800",
        "en": "Triumph Announces New Trident 800",
        "es": "Triumph Announces New Trident 800",
        "it": "Triumph Announces New Trident 800"
    },
    "excerpt": {
        "fr": "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995.",
        "en": "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995.",
        "es": "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995.",
        "it": "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995."
    },
    "image": newsNew32,
    "category": "New Bikes",
    "readTime": "8 min",
    "body": {
        "fr": [
            "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995.",
            "This is a big jump up from the existing Trident 660, both in terms of power and spec.  The new 800 will make a claimed 113 HP and 62 pounds/feet of torque from a 798cc triple.  Despite the relatively low price, the new Trident 800 will feature adjustable suspension and four-piston radial calipers for the front brakes. Three selectable rider modes are also standard with a claimed wet weight of 436 pounds.",
            "Here is the press release from Triumph:",
            "- Triumph unveils the brand new Trident 800, a naked roadster with exhilarating urban attitude",
            "- All-new 798cc triple engine with triple throttle bodies, delivering instant throttle response, relentless torque and a spine-tingling top end",
            "- High-specification, lightweight chassis with adjustable Showa suspension, delivering instinctive agility",
            "- Performance-enhancing rider-focused technology including lean sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, Bluetooth Connectivity, three Rider Modes and Cruise Control",
            "- Available to order now and in stores by April 2026",
            "Triumph Motorcycles has revealed the all-new Trident 800, a brand new naked middleweight roadster designed to deliver exhilarating performance, dynamic urban attitude, and a high-energy riding experience. With its compact, muscular stance and stripped-back styling, the Trident 800 brings a bold new edge to Triumph’s roadster line-up.",
            "With its responsive 798cc triple engine and triple throttle bodies, the Trident 800 offers addictive real-world performance that’s ready to thrill. From the instant throttle response, to the unrelenting mid-range torque and thrilling top-end power, the ride is both visceral and refined, backed by Triumph’s unmistakable triple soundtrack channeled through the upswept sports-style silencer.",
            "Built for serious fun, the Trident 800’s lightweight chassis and high specification adjustable Showa suspension deliver a high-energy riding experience with instinctive agility and confident control. Wide bars, a compact frame and assertive riding position combine to create a bike that reacts immediately to every input, flicks effortlessly through corners and stays composed at speed. Just 198kg fully fueled, with grippy Michelin tires, it’s light on its feet and always ready to deliver the grin factor.",
            "The Trident 800 is equipped with intuitive, rider-focused technology designed to enhance every ride. Three riding modes tailor throttle response and traction control to suit the conditions, while lean-sensitive Optimized Cornering ABS and Optimized Cornering Traction Control deliver confidence and control in every turn. With My Triumph Bluetooth connectivity, cruise control, and a clean and clear TFT dash, the Trident 800 keeps you dialed in and in the moment.",
            "Blending rebellious energy with refined Triumph roadster DNA, its sculpted tank and trim tail create a lean, modern silhouette, while premium finishes, from brushed aluminum to bold color schemes and contrasting gold-colored wheels, amplify its dynamic presence. Whether parked curbside or carving through city streets, the Trident 800 delivers a compelling blend of attitude, performance and precision.",
            "Steve Sargent, Chief Product Officer, Triumph Motorcycles said: “The incredible popularity of the Trident 660 and the Street Triple 765 RS has shown us just how much riders in this segment value a thrilling, confidence-inspiring ride that’s packed with character and technology. With the launch of the Trident 800, we’ve taken that winning formula and dialed it up, delivering even more road-focused capability and excitement.",
            "“With the Trident 800, we’ve focused on delivering the kind of performance and character that riders want in the real world. The all-new engine with triple throttle bodies provides maximum engagement on everyday roads, and we’ve paired that with a lightweight, high-spec chassis and adjustable Showa suspension.",
            "“We know this customer is looking for rider-focused technology like lean-sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, and cruise control to enhance the riding experience without distracting from it. This bike is for riders who want maximum excitement, anytime, anywhere. This opens the door to a whole new audience of riders looking for a fun, adrenaline-fueled, purposeful ride.”",
            "ALL-NEW TRIPLE ENGINE",
            "At the heart of the Trident 800 is Triumph’s all-new 798cc triple, engineered for pulse-pounding excitement. It reacts instantly in any gear, delivering a wave of torque and a howling top end that surges all the way to the 11,500 rpm redline.",
            "Producing 113.4 HP (115PS) at 10,750 rpm, and a peak 61.9 lb-ft (84Nm) of torque at 8,500 rpm, the triple’s addictive mid-range drive is accompanied by a deep induction roar through the triple throttle bodies, amplified by the redesigned airbox and intake trumpet system to optimize airflow and induction sound. The result is a deep, throaty growl under load and the unmistakable Triumph triple howl at high revs. Internally, the engine features a twist-forged crankshaft, unique camshaft and balancer, forged conrods, and high-compression pistons, all designed to maximize performance and durability.",
            "EFFORTLESS HANDLING AND AGILITY",
            "Backing up the engine is a chassis built for high-energy riding, with a lightweight frame and adjustable Showa suspension which deliver razor-sharp handling. The split seat is 31.9 in (810 mm) high, with a narrow stand-over, shaped to hold the rider in place. Up front, 1.61 in (41 mm) upside-down Showa forks feature big-piston, separate-function damping, with adjustable compression and rebound. The rear Showa monoshock offers preload and rebound adjustment for a perfectly tuned ride. Braking is handled by twin 4-piston radial calipers gripping 12.2 in (310 mm) discs, fed by braided steel lines for strong, progressive stopping power.",
            "RIDER-FOCUSED TECHNOLOGY",
            "The Trident 800 is equipped with smart, rider-focused technology designed to enhance the ride without distraction. At its core are three riding modes, Road, Sport and Rain, which tailor throttle response and traction control to suit the conditions. Whether dialing up performance or prioritizing extra peace of mind in wet weather, the system ensures the rider remains in control and connected to the road.",
            "Advanced lean-sensitive Optimized Cornering ABS and Traction Control provide added confidence through turns, using real-time data to adjust braking and power delivery based on lean angle. Power is delivered through a slick 6-speed gearbox, with Triumph Shift Assist enables clutch-less up and down gear changes for seamless acceleration while cruise control adds convenience on longer journeys.",
            "Connectivity and visibility are equally refined. The My Triumph Bluetooth system allows seamless control of music, calls and turn-by-turn navigation via the left-hand switchcube, with information displayed on a clean, round 3.5-inch color TFT screen. The all-LED lighting system, including a distinctive round headlight, integrated taillight, and self-cancelling indicators, ensures the Trident 800 stands out day or night, combining modern design with everyday practicality.",
            "NAKED STYLE WITH ATTITUDE",
            "Visually, the Trident 800 hits hard. Its naked design is all muscle and intent, blending sharp surfaces with smooth curves to create a commanding profile and athletic poise. The wide, chiseled 3.7 gal (14 liter) tank flows seamlessly into the contoured seat and sleek tail unit, while the short upswept silencer and minimal number plate hanger keep the rear lean and purposeful. A color-coded belly pan and flyscreen add aerodynamic edge and visual cohesion, reinforcing the bike’s dynamic roadster stance.",
            "Every detail of the Trident 800 has been crafted to deliver a premium finish. The embossed seat logo adds a subtle touch of refinement, while the lightweight cast aluminum wheels, in a striking gold finish, amplify the bike’s bold, unapologetic style.",
            "The wheel design complements all three color options: Ash Grey with Diablo Red detailing, Carnival Red with Graphite accents, and Jet Black for a dark, moody vibe.",
            "The Trident 800’s styling can be further enhanced with a range of Genuine Triumph Accessories, allowing riders to tailor the bike to their own aesthetic. Options include a sleek Akrapovič silencer, with a titanium wrap and carbon fibre end cap, designed to elevate the bike’s sporty silhouette.",
            "On the Road",
            "With two-year unlimited mileage warranty and a class-leading 10,000-mile (16,000 km) service interval, the new Trident 800 is built for more time on the road and less time in the workshop, giving riders the freedom to enjoy every mile.",
            "Available to order now at authorized Triumph dealerships, starting at $9,995 USD / $11,695 CAD and arriving in dealerships beginning April 2026. For more information or to find your local dealer, visittriumphmotorcycles.com.",
            "SPECIFICATION",
            "ENGINE AND TRANSMISSION",
            "Type",
            "Liquid-cooled, 3 cylinders, 12 valves, DOHC",
            "Capacity",
            "798 cc",
            "Bore",
            "3.07 in (78.0 mm)",
            "Stroke",
            "2.19 in (55.7 mm)",
            "Compression",
            "13.2:1",
            "Max Power EC",
            "113 HP / 115 PS / (84.6 kW) @ 10,750 rpm",
            "Max Torque EC",
            "61.9 lb-ft (84 Nm)@ 8,500 rpm",
            "System",
            "Bosch Multipoint sequential electronic fuel injection with electronic throttle control. 3 rider modes (Rain, Road, Sport)",
            "Exhaust",
            "Stainless steel 3 into 1 header system with sided mounted stainless steel silencer",
            "Final Drive",
            "X ring chain",
            "Clutch",
            "Wet, multi-plate, slip & assist",
            "Gearbox",
            "6 speed, Triumph Shift Assist",
            "CHASSIS",
            "Frame",
            "Tubular steel perimeter frame",
            "Swingarm",
            "Twin-sided, fabricated pressed steel",
            "Front Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 3.5 in",
            "Rear Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 5.5 in",
            "Front Tire",
            "120/70 R 17",
            "Rear Tire",
            "180/55 R 17",
            "Front Suspension",
            "Showa  1.61 in (41 mm) upside down separate function big piston (SFF-BP) forks, 4.72 in (120 mm) Wheel travel, adjustable compression & rebound damping.",
            "Rear Suspension",
            "Showa monoshock RSU, with adjustable preload and rebound damping, 5.12 in (130 mm) Wheel travel",
            "Front Brakes",
            "Twin 12.2 in (310mm) floating discs, 4-piston radial calipers, OCABS",
            "Rear Brakes",
            "Single 8.66 in (220mm) fixed disc, single piston sliding caliper, OCABS",
            "Instrument Display and Functions",
            "LCD Multifunction Instruments with integrated color TFT screen",
            "DIMENSIONS & WEIGHTS",
            "Length",
            "79.7 in (2024 mm)",
            "Width Handlebars",
            "32.1 in (815 mm)",
            "Height Without Mirror",
            "42.8 in (1088 mm)",
            "Seat Height",
            "31.9 in (810 mm)",
            "Wheelbase",
            "55.2 in (1402 mm)",
            "Rake",
            "24.5 °",
            "Trail",
            "4.3 in (108 mm)",
            "Wet Weight",
            "436.5 lb (198 kg",
            "Tank Capacity",
            "3.7 gal (14 liters)",
            "Service Interval",
            "10,000 miles (16,000km)/12 months (whichever comes first)",
            "CONSUMPTION AND EMISSIONS",
            "Fuel Consumption",
            "4.7 l/100km (60.1 mpg)",
            "Emissions",
            "109 g/km",
            "EURO 5+ CO2 emissions and fuel consumption data are measured according to regulation 168/2013/EC. Figures for fuel consumption are derived from specific test conditions and are for comparative purposes only. They may not reflect real driving results."
        ],
        "en": [
            "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995.",
            "This is a big jump up from the existing Trident 660, both in terms of power and spec.  The new 800 will make a claimed 113 HP and 62 pounds/feet of torque from a 798cc triple.  Despite the relatively low price, the new Trident 800 will feature adjustable suspension and four-piston radial calipers for the front brakes. Three selectable rider modes are also standard with a claimed wet weight of 436 pounds.",
            "Here is the press release from Triumph:",
            "- Triumph unveils the brand new Trident 800, a naked roadster with exhilarating urban attitude",
            "- All-new 798cc triple engine with triple throttle bodies, delivering instant throttle response, relentless torque and a spine-tingling top end",
            "- High-specification, lightweight chassis with adjustable Showa suspension, delivering instinctive agility",
            "- Performance-enhancing rider-focused technology including lean sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, Bluetooth Connectivity, three Rider Modes and Cruise Control",
            "- Available to order now and in stores by April 2026",
            "Triumph Motorcycles has revealed the all-new Trident 800, a brand new naked middleweight roadster designed to deliver exhilarating performance, dynamic urban attitude, and a high-energy riding experience. With its compact, muscular stance and stripped-back styling, the Trident 800 brings a bold new edge to Triumph’s roadster line-up.",
            "With its responsive 798cc triple engine and triple throttle bodies, the Trident 800 offers addictive real-world performance that’s ready to thrill. From the instant throttle response, to the unrelenting mid-range torque and thrilling top-end power, the ride is both visceral and refined, backed by Triumph’s unmistakable triple soundtrack channeled through the upswept sports-style silencer.",
            "Built for serious fun, the Trident 800’s lightweight chassis and high specification adjustable Showa suspension deliver a high-energy riding experience with instinctive agility and confident control. Wide bars, a compact frame and assertive riding position combine to create a bike that reacts immediately to every input, flicks effortlessly through corners and stays composed at speed. Just 198kg fully fueled, with grippy Michelin tires, it’s light on its feet and always ready to deliver the grin factor.",
            "The Trident 800 is equipped with intuitive, rider-focused technology designed to enhance every ride. Three riding modes tailor throttle response and traction control to suit the conditions, while lean-sensitive Optimized Cornering ABS and Optimized Cornering Traction Control deliver confidence and control in every turn. With My Triumph Bluetooth connectivity, cruise control, and a clean and clear TFT dash, the Trident 800 keeps you dialed in and in the moment.",
            "Blending rebellious energy with refined Triumph roadster DNA, its sculpted tank and trim tail create a lean, modern silhouette, while premium finishes, from brushed aluminum to bold color schemes and contrasting gold-colored wheels, amplify its dynamic presence. Whether parked curbside or carving through city streets, the Trident 800 delivers a compelling blend of attitude, performance and precision.",
            "Steve Sargent, Chief Product Officer, Triumph Motorcycles said: “The incredible popularity of the Trident 660 and the Street Triple 765 RS has shown us just how much riders in this segment value a thrilling, confidence-inspiring ride that’s packed with character and technology. With the launch of the Trident 800, we’ve taken that winning formula and dialed it up, delivering even more road-focused capability and excitement.",
            "“With the Trident 800, we’ve focused on delivering the kind of performance and character that riders want in the real world. The all-new engine with triple throttle bodies provides maximum engagement on everyday roads, and we’ve paired that with a lightweight, high-spec chassis and adjustable Showa suspension.",
            "“We know this customer is looking for rider-focused technology like lean-sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, and cruise control to enhance the riding experience without distracting from it. This bike is for riders who want maximum excitement, anytime, anywhere. This opens the door to a whole new audience of riders looking for a fun, adrenaline-fueled, purposeful ride.”",
            "ALL-NEW TRIPLE ENGINE",
            "At the heart of the Trident 800 is Triumph’s all-new 798cc triple, engineered for pulse-pounding excitement. It reacts instantly in any gear, delivering a wave of torque and a howling top end that surges all the way to the 11,500 rpm redline.",
            "Producing 113.4 HP (115PS) at 10,750 rpm, and a peak 61.9 lb-ft (84Nm) of torque at 8,500 rpm, the triple’s addictive mid-range drive is accompanied by a deep induction roar through the triple throttle bodies, amplified by the redesigned airbox and intake trumpet system to optimize airflow and induction sound. The result is a deep, throaty growl under load and the unmistakable Triumph triple howl at high revs. Internally, the engine features a twist-forged crankshaft, unique camshaft and balancer, forged conrods, and high-compression pistons, all designed to maximize performance and durability.",
            "EFFORTLESS HANDLING AND AGILITY",
            "Backing up the engine is a chassis built for high-energy riding, with a lightweight frame and adjustable Showa suspension which deliver razor-sharp handling. The split seat is 31.9 in (810 mm) high, with a narrow stand-over, shaped to hold the rider in place. Up front, 1.61 in (41 mm) upside-down Showa forks feature big-piston, separate-function damping, with adjustable compression and rebound. The rear Showa monoshock offers preload and rebound adjustment for a perfectly tuned ride. Braking is handled by twin 4-piston radial calipers gripping 12.2 in (310 mm) discs, fed by braided steel lines for strong, progressive stopping power.",
            "RIDER-FOCUSED TECHNOLOGY",
            "The Trident 800 is equipped with smart, rider-focused technology designed to enhance the ride without distraction. At its core are three riding modes, Road, Sport and Rain, which tailor throttle response and traction control to suit the conditions. Whether dialing up performance or prioritizing extra peace of mind in wet weather, the system ensures the rider remains in control and connected to the road.",
            "Advanced lean-sensitive Optimized Cornering ABS and Traction Control provide added confidence through turns, using real-time data to adjust braking and power delivery based on lean angle. Power is delivered through a slick 6-speed gearbox, with Triumph Shift Assist enables clutch-less up and down gear changes for seamless acceleration while cruise control adds convenience on longer journeys.",
            "Connectivity and visibility are equally refined. The My Triumph Bluetooth system allows seamless control of music, calls and turn-by-turn navigation via the left-hand switchcube, with information displayed on a clean, round 3.5-inch color TFT screen. The all-LED lighting system, including a distinctive round headlight, integrated taillight, and self-cancelling indicators, ensures the Trident 800 stands out day or night, combining modern design with everyday practicality.",
            "NAKED STYLE WITH ATTITUDE",
            "Visually, the Trident 800 hits hard. Its naked design is all muscle and intent, blending sharp surfaces with smooth curves to create a commanding profile and athletic poise. The wide, chiseled 3.7 gal (14 liter) tank flows seamlessly into the contoured seat and sleek tail unit, while the short upswept silencer and minimal number plate hanger keep the rear lean and purposeful. A color-coded belly pan and flyscreen add aerodynamic edge and visual cohesion, reinforcing the bike’s dynamic roadster stance.",
            "Every detail of the Trident 800 has been crafted to deliver a premium finish. The embossed seat logo adds a subtle touch of refinement, while the lightweight cast aluminum wheels, in a striking gold finish, amplify the bike’s bold, unapologetic style.",
            "The wheel design complements all three color options: Ash Grey with Diablo Red detailing, Carnival Red with Graphite accents, and Jet Black for a dark, moody vibe.",
            "The Trident 800’s styling can be further enhanced with a range of Genuine Triumph Accessories, allowing riders to tailor the bike to their own aesthetic. Options include a sleek Akrapovič silencer, with a titanium wrap and carbon fibre end cap, designed to elevate the bike’s sporty silhouette.",
            "On the Road",
            "With two-year unlimited mileage warranty and a class-leading 10,000-mile (16,000 km) service interval, the new Trident 800 is built for more time on the road and less time in the workshop, giving riders the freedom to enjoy every mile.",
            "Available to order now at authorized Triumph dealerships, starting at $9,995 USD / $11,695 CAD and arriving in dealerships beginning April 2026. For more information or to find your local dealer, visittriumphmotorcycles.com.",
            "SPECIFICATION",
            "ENGINE AND TRANSMISSION",
            "Type",
            "Liquid-cooled, 3 cylinders, 12 valves, DOHC",
            "Capacity",
            "798 cc",
            "Bore",
            "3.07 in (78.0 mm)",
            "Stroke",
            "2.19 in (55.7 mm)",
            "Compression",
            "13.2:1",
            "Max Power EC",
            "113 HP / 115 PS / (84.6 kW) @ 10,750 rpm",
            "Max Torque EC",
            "61.9 lb-ft (84 Nm)@ 8,500 rpm",
            "System",
            "Bosch Multipoint sequential electronic fuel injection with electronic throttle control. 3 rider modes (Rain, Road, Sport)",
            "Exhaust",
            "Stainless steel 3 into 1 header system with sided mounted stainless steel silencer",
            "Final Drive",
            "X ring chain",
            "Clutch",
            "Wet, multi-plate, slip & assist",
            "Gearbox",
            "6 speed, Triumph Shift Assist",
            "CHASSIS",
            "Frame",
            "Tubular steel perimeter frame",
            "Swingarm",
            "Twin-sided, fabricated pressed steel",
            "Front Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 3.5 in",
            "Rear Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 5.5 in",
            "Front Tire",
            "120/70 R 17",
            "Rear Tire",
            "180/55 R 17",
            "Front Suspension",
            "Showa  1.61 in (41 mm) upside down separate function big piston (SFF-BP) forks, 4.72 in (120 mm) Wheel travel, adjustable compression & rebound damping.",
            "Rear Suspension",
            "Showa monoshock RSU, with adjustable preload and rebound damping, 5.12 in (130 mm) Wheel travel",
            "Front Brakes",
            "Twin 12.2 in (310mm) floating discs, 4-piston radial calipers, OCABS",
            "Rear Brakes",
            "Single 8.66 in (220mm) fixed disc, single piston sliding caliper, OCABS",
            "Instrument Display and Functions",
            "LCD Multifunction Instruments with integrated color TFT screen",
            "DIMENSIONS & WEIGHTS",
            "Length",
            "79.7 in (2024 mm)",
            "Width Handlebars",
            "32.1 in (815 mm)",
            "Height Without Mirror",
            "42.8 in (1088 mm)",
            "Seat Height",
            "31.9 in (810 mm)",
            "Wheelbase",
            "55.2 in (1402 mm)",
            "Rake",
            "24.5 °",
            "Trail",
            "4.3 in (108 mm)",
            "Wet Weight",
            "436.5 lb (198 kg",
            "Tank Capacity",
            "3.7 gal (14 liters)",
            "Service Interval",
            "10,000 miles (16,000km)/12 months (whichever comes first)",
            "CONSUMPTION AND EMISSIONS",
            "Fuel Consumption",
            "4.7 l/100km (60.1 mpg)",
            "Emissions",
            "109 g/km",
            "EURO 5+ CO2 emissions and fuel consumption data are measured according to regulation 168/2013/EC. Figures for fuel consumption are derived from specific test conditions and are for comparative purposes only. They may not reflect real driving results."
        ],
        "es": [
            "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995.",
            "This is a big jump up from the existing Trident 660, both in terms of power and spec.  The new 800 will make a claimed 113 HP and 62 pounds/feet of torque from a 798cc triple.  Despite the relatively low price, the new Trident 800 will feature adjustable suspension and four-piston radial calipers for the front brakes. Three selectable rider modes are also standard with a claimed wet weight of 436 pounds.",
            "Here is the press release from Triumph:",
            "- Triumph unveils the brand new Trident 800, a naked roadster with exhilarating urban attitude",
            "- All-new 798cc triple engine with triple throttle bodies, delivering instant throttle response, relentless torque and a spine-tingling top end",
            "- High-specification, lightweight chassis with adjustable Showa suspension, delivering instinctive agility",
            "- Performance-enhancing rider-focused technology including lean sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, Bluetooth Connectivity, three Rider Modes and Cruise Control",
            "- Available to order now and in stores by April 2026",
            "Triumph Motorcycles has revealed the all-new Trident 800, a brand new naked middleweight roadster designed to deliver exhilarating performance, dynamic urban attitude, and a high-energy riding experience. With its compact, muscular stance and stripped-back styling, the Trident 800 brings a bold new edge to Triumph’s roadster line-up.",
            "With its responsive 798cc triple engine and triple throttle bodies, the Trident 800 offers addictive real-world performance that’s ready to thrill. From the instant throttle response, to the unrelenting mid-range torque and thrilling top-end power, the ride is both visceral and refined, backed by Triumph’s unmistakable triple soundtrack channeled through the upswept sports-style silencer.",
            "Built for serious fun, the Trident 800’s lightweight chassis and high specification adjustable Showa suspension deliver a high-energy riding experience with instinctive agility and confident control. Wide bars, a compact frame and assertive riding position combine to create a bike that reacts immediately to every input, flicks effortlessly through corners and stays composed at speed. Just 198kg fully fueled, with grippy Michelin tires, it’s light on its feet and always ready to deliver the grin factor.",
            "The Trident 800 is equipped with intuitive, rider-focused technology designed to enhance every ride. Three riding modes tailor throttle response and traction control to suit the conditions, while lean-sensitive Optimized Cornering ABS and Optimized Cornering Traction Control deliver confidence and control in every turn. With My Triumph Bluetooth connectivity, cruise control, and a clean and clear TFT dash, the Trident 800 keeps you dialed in and in the moment.",
            "Blending rebellious energy with refined Triumph roadster DNA, its sculpted tank and trim tail create a lean, modern silhouette, while premium finishes, from brushed aluminum to bold color schemes and contrasting gold-colored wheels, amplify its dynamic presence. Whether parked curbside or carving through city streets, the Trident 800 delivers a compelling blend of attitude, performance and precision.",
            "Steve Sargent, Chief Product Officer, Triumph Motorcycles said: “The incredible popularity of the Trident 660 and the Street Triple 765 RS has shown us just how much riders in this segment value a thrilling, confidence-inspiring ride that’s packed with character and technology. With the launch of the Trident 800, we’ve taken that winning formula and dialed it up, delivering even more road-focused capability and excitement.",
            "“With the Trident 800, we’ve focused on delivering the kind of performance and character that riders want in the real world. The all-new engine with triple throttle bodies provides maximum engagement on everyday roads, and we’ve paired that with a lightweight, high-spec chassis and adjustable Showa suspension.",
            "“We know this customer is looking for rider-focused technology like lean-sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, and cruise control to enhance the riding experience without distracting from it. This bike is for riders who want maximum excitement, anytime, anywhere. This opens the door to a whole new audience of riders looking for a fun, adrenaline-fueled, purposeful ride.”",
            "ALL-NEW TRIPLE ENGINE",
            "At the heart of the Trident 800 is Triumph’s all-new 798cc triple, engineered for pulse-pounding excitement. It reacts instantly in any gear, delivering a wave of torque and a howling top end that surges all the way to the 11,500 rpm redline.",
            "Producing 113.4 HP (115PS) at 10,750 rpm, and a peak 61.9 lb-ft (84Nm) of torque at 8,500 rpm, the triple’s addictive mid-range drive is accompanied by a deep induction roar through the triple throttle bodies, amplified by the redesigned airbox and intake trumpet system to optimize airflow and induction sound. The result is a deep, throaty growl under load and the unmistakable Triumph triple howl at high revs. Internally, the engine features a twist-forged crankshaft, unique camshaft and balancer, forged conrods, and high-compression pistons, all designed to maximize performance and durability.",
            "EFFORTLESS HANDLING AND AGILITY",
            "Backing up the engine is a chassis built for high-energy riding, with a lightweight frame and adjustable Showa suspension which deliver razor-sharp handling. The split seat is 31.9 in (810 mm) high, with a narrow stand-over, shaped to hold the rider in place. Up front, 1.61 in (41 mm) upside-down Showa forks feature big-piston, separate-function damping, with adjustable compression and rebound. The rear Showa monoshock offers preload and rebound adjustment for a perfectly tuned ride. Braking is handled by twin 4-piston radial calipers gripping 12.2 in (310 mm) discs, fed by braided steel lines for strong, progressive stopping power.",
            "RIDER-FOCUSED TECHNOLOGY",
            "The Trident 800 is equipped with smart, rider-focused technology designed to enhance the ride without distraction. At its core are three riding modes, Road, Sport and Rain, which tailor throttle response and traction control to suit the conditions. Whether dialing up performance or prioritizing extra peace of mind in wet weather, the system ensures the rider remains in control and connected to the road.",
            "Advanced lean-sensitive Optimized Cornering ABS and Traction Control provide added confidence through turns, using real-time data to adjust braking and power delivery based on lean angle. Power is delivered through a slick 6-speed gearbox, with Triumph Shift Assist enables clutch-less up and down gear changes for seamless acceleration while cruise control adds convenience on longer journeys.",
            "Connectivity and visibility are equally refined. The My Triumph Bluetooth system allows seamless control of music, calls and turn-by-turn navigation via the left-hand switchcube, with information displayed on a clean, round 3.5-inch color TFT screen. The all-LED lighting system, including a distinctive round headlight, integrated taillight, and self-cancelling indicators, ensures the Trident 800 stands out day or night, combining modern design with everyday practicality.",
            "NAKED STYLE WITH ATTITUDE",
            "Visually, the Trident 800 hits hard. Its naked design is all muscle and intent, blending sharp surfaces with smooth curves to create a commanding profile and athletic poise. The wide, chiseled 3.7 gal (14 liter) tank flows seamlessly into the contoured seat and sleek tail unit, while the short upswept silencer and minimal number plate hanger keep the rear lean and purposeful. A color-coded belly pan and flyscreen add aerodynamic edge and visual cohesion, reinforcing the bike’s dynamic roadster stance.",
            "Every detail of the Trident 800 has been crafted to deliver a premium finish. The embossed seat logo adds a subtle touch of refinement, while the lightweight cast aluminum wheels, in a striking gold finish, amplify the bike’s bold, unapologetic style.",
            "The wheel design complements all three color options: Ash Grey with Diablo Red detailing, Carnival Red with Graphite accents, and Jet Black for a dark, moody vibe.",
            "The Trident 800’s styling can be further enhanced with a range of Genuine Triumph Accessories, allowing riders to tailor the bike to their own aesthetic. Options include a sleek Akrapovič silencer, with a titanium wrap and carbon fibre end cap, designed to elevate the bike’s sporty silhouette.",
            "On the Road",
            "With two-year unlimited mileage warranty and a class-leading 10,000-mile (16,000 km) service interval, the new Trident 800 is built for more time on the road and less time in the workshop, giving riders the freedom to enjoy every mile.",
            "Available to order now at authorized Triumph dealerships, starting at $9,995 USD / $11,695 CAD and arriving in dealerships beginning April 2026. For more information or to find your local dealer, visittriumphmotorcycles.com.",
            "SPECIFICATION",
            "ENGINE AND TRANSMISSION",
            "Type",
            "Liquid-cooled, 3 cylinders, 12 valves, DOHC",
            "Capacity",
            "798 cc",
            "Bore",
            "3.07 in (78.0 mm)",
            "Stroke",
            "2.19 in (55.7 mm)",
            "Compression",
            "13.2:1",
            "Max Power EC",
            "113 HP / 115 PS / (84.6 kW) @ 10,750 rpm",
            "Max Torque EC",
            "61.9 lb-ft (84 Nm)@ 8,500 rpm",
            "System",
            "Bosch Multipoint sequential electronic fuel injection with electronic throttle control. 3 rider modes (Rain, Road, Sport)",
            "Exhaust",
            "Stainless steel 3 into 1 header system with sided mounted stainless steel silencer",
            "Final Drive",
            "X ring chain",
            "Clutch",
            "Wet, multi-plate, slip & assist",
            "Gearbox",
            "6 speed, Triumph Shift Assist",
            "CHASSIS",
            "Frame",
            "Tubular steel perimeter frame",
            "Swingarm",
            "Twin-sided, fabricated pressed steel",
            "Front Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 3.5 in",
            "Rear Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 5.5 in",
            "Front Tire",
            "120/70 R 17",
            "Rear Tire",
            "180/55 R 17",
            "Front Suspension",
            "Showa  1.61 in (41 mm) upside down separate function big piston (SFF-BP) forks, 4.72 in (120 mm) Wheel travel, adjustable compression & rebound damping.",
            "Rear Suspension",
            "Showa monoshock RSU, with adjustable preload and rebound damping, 5.12 in (130 mm) Wheel travel",
            "Front Brakes",
            "Twin 12.2 in (310mm) floating discs, 4-piston radial calipers, OCABS",
            "Rear Brakes",
            "Single 8.66 in (220mm) fixed disc, single piston sliding caliper, OCABS",
            "Instrument Display and Functions",
            "LCD Multifunction Instruments with integrated color TFT screen",
            "DIMENSIONS & WEIGHTS",
            "Length",
            "79.7 in (2024 mm)",
            "Width Handlebars",
            "32.1 in (815 mm)",
            "Height Without Mirror",
            "42.8 in (1088 mm)",
            "Seat Height",
            "31.9 in (810 mm)",
            "Wheelbase",
            "55.2 in (1402 mm)",
            "Rake",
            "24.5 °",
            "Trail",
            "4.3 in (108 mm)",
            "Wet Weight",
            "436.5 lb (198 kg",
            "Tank Capacity",
            "3.7 gal (14 liters)",
            "Service Interval",
            "10,000 miles (16,000km)/12 months (whichever comes first)",
            "CONSUMPTION AND EMISSIONS",
            "Fuel Consumption",
            "4.7 l/100km (60.1 mpg)",
            "Emissions",
            "109 g/km",
            "EURO 5+ CO2 emissions and fuel consumption data are measured according to regulation 168/2013/EC. Figures for fuel consumption are derived from specific test conditions and are for comparative purposes only. They may not reflect real driving results."
        ],
        "it": [
            "Next April, you should be able to purchase from a U.S. dealer the new Triumph Trident 800 at an MSRP of $9,995.",
            "This is a big jump up from the existing Trident 660, both in terms of power and spec.  The new 800 will make a claimed 113 HP and 62 pounds/feet of torque from a 798cc triple.  Despite the relatively low price, the new Trident 800 will feature adjustable suspension and four-piston radial calipers for the front brakes. Three selectable rider modes are also standard with a claimed wet weight of 436 pounds.",
            "Here is the press release from Triumph:",
            "- Triumph unveils the brand new Trident 800, a naked roadster with exhilarating urban attitude",
            "- All-new 798cc triple engine with triple throttle bodies, delivering instant throttle response, relentless torque and a spine-tingling top end",
            "- High-specification, lightweight chassis with adjustable Showa suspension, delivering instinctive agility",
            "- Performance-enhancing rider-focused technology including lean sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, Bluetooth Connectivity, three Rider Modes and Cruise Control",
            "- Available to order now and in stores by April 2026",
            "Triumph Motorcycles has revealed the all-new Trident 800, a brand new naked middleweight roadster designed to deliver exhilarating performance, dynamic urban attitude, and a high-energy riding experience. With its compact, muscular stance and stripped-back styling, the Trident 800 brings a bold new edge to Triumph’s roadster line-up.",
            "With its responsive 798cc triple engine and triple throttle bodies, the Trident 800 offers addictive real-world performance that’s ready to thrill. From the instant throttle response, to the unrelenting mid-range torque and thrilling top-end power, the ride is both visceral and refined, backed by Triumph’s unmistakable triple soundtrack channeled through the upswept sports-style silencer.",
            "Built for serious fun, the Trident 800’s lightweight chassis and high specification adjustable Showa suspension deliver a high-energy riding experience with instinctive agility and confident control. Wide bars, a compact frame and assertive riding position combine to create a bike that reacts immediately to every input, flicks effortlessly through corners and stays composed at speed. Just 198kg fully fueled, with grippy Michelin tires, it’s light on its feet and always ready to deliver the grin factor.",
            "The Trident 800 is equipped with intuitive, rider-focused technology designed to enhance every ride. Three riding modes tailor throttle response and traction control to suit the conditions, while lean-sensitive Optimized Cornering ABS and Optimized Cornering Traction Control deliver confidence and control in every turn. With My Triumph Bluetooth connectivity, cruise control, and a clean and clear TFT dash, the Trident 800 keeps you dialed in and in the moment.",
            "Blending rebellious energy with refined Triumph roadster DNA, its sculpted tank and trim tail create a lean, modern silhouette, while premium finishes, from brushed aluminum to bold color schemes and contrasting gold-colored wheels, amplify its dynamic presence. Whether parked curbside or carving through city streets, the Trident 800 delivers a compelling blend of attitude, performance and precision.",
            "Steve Sargent, Chief Product Officer, Triumph Motorcycles said: “The incredible popularity of the Trident 660 and the Street Triple 765 RS has shown us just how much riders in this segment value a thrilling, confidence-inspiring ride that’s packed with character and technology. With the launch of the Trident 800, we’ve taken that winning formula and dialed it up, delivering even more road-focused capability and excitement.",
            "“With the Trident 800, we’ve focused on delivering the kind of performance and character that riders want in the real world. The all-new engine with triple throttle bodies provides maximum engagement on everyday roads, and we’ve paired that with a lightweight, high-spec chassis and adjustable Showa suspension.",
            "“We know this customer is looking for rider-focused technology like lean-sensitive Optimized Cornering ABS and Traction Control, Triumph Shift Assist, and cruise control to enhance the riding experience without distracting from it. This bike is for riders who want maximum excitement, anytime, anywhere. This opens the door to a whole new audience of riders looking for a fun, adrenaline-fueled, purposeful ride.”",
            "ALL-NEW TRIPLE ENGINE",
            "At the heart of the Trident 800 is Triumph’s all-new 798cc triple, engineered for pulse-pounding excitement. It reacts instantly in any gear, delivering a wave of torque and a howling top end that surges all the way to the 11,500 rpm redline.",
            "Producing 113.4 HP (115PS) at 10,750 rpm, and a peak 61.9 lb-ft (84Nm) of torque at 8,500 rpm, the triple’s addictive mid-range drive is accompanied by a deep induction roar through the triple throttle bodies, amplified by the redesigned airbox and intake trumpet system to optimize airflow and induction sound. The result is a deep, throaty growl under load and the unmistakable Triumph triple howl at high revs. Internally, the engine features a twist-forged crankshaft, unique camshaft and balancer, forged conrods, and high-compression pistons, all designed to maximize performance and durability.",
            "EFFORTLESS HANDLING AND AGILITY",
            "Backing up the engine is a chassis built for high-energy riding, with a lightweight frame and adjustable Showa suspension which deliver razor-sharp handling. The split seat is 31.9 in (810 mm) high, with a narrow stand-over, shaped to hold the rider in place. Up front, 1.61 in (41 mm) upside-down Showa forks feature big-piston, separate-function damping, with adjustable compression and rebound. The rear Showa monoshock offers preload and rebound adjustment for a perfectly tuned ride. Braking is handled by twin 4-piston radial calipers gripping 12.2 in (310 mm) discs, fed by braided steel lines for strong, progressive stopping power.",
            "RIDER-FOCUSED TECHNOLOGY",
            "The Trident 800 is equipped with smart, rider-focused technology designed to enhance the ride without distraction. At its core are three riding modes, Road, Sport and Rain, which tailor throttle response and traction control to suit the conditions. Whether dialing up performance or prioritizing extra peace of mind in wet weather, the system ensures the rider remains in control and connected to the road.",
            "Advanced lean-sensitive Optimized Cornering ABS and Traction Control provide added confidence through turns, using real-time data to adjust braking and power delivery based on lean angle. Power is delivered through a slick 6-speed gearbox, with Triumph Shift Assist enables clutch-less up and down gear changes for seamless acceleration while cruise control adds convenience on longer journeys.",
            "Connectivity and visibility are equally refined. The My Triumph Bluetooth system allows seamless control of music, calls and turn-by-turn navigation via the left-hand switchcube, with information displayed on a clean, round 3.5-inch color TFT screen. The all-LED lighting system, including a distinctive round headlight, integrated taillight, and self-cancelling indicators, ensures the Trident 800 stands out day or night, combining modern design with everyday practicality.",
            "NAKED STYLE WITH ATTITUDE",
            "Visually, the Trident 800 hits hard. Its naked design is all muscle and intent, blending sharp surfaces with smooth curves to create a commanding profile and athletic poise. The wide, chiseled 3.7 gal (14 liter) tank flows seamlessly into the contoured seat and sleek tail unit, while the short upswept silencer and minimal number plate hanger keep the rear lean and purposeful. A color-coded belly pan and flyscreen add aerodynamic edge and visual cohesion, reinforcing the bike’s dynamic roadster stance.",
            "Every detail of the Trident 800 has been crafted to deliver a premium finish. The embossed seat logo adds a subtle touch of refinement, while the lightweight cast aluminum wheels, in a striking gold finish, amplify the bike’s bold, unapologetic style.",
            "The wheel design complements all three color options: Ash Grey with Diablo Red detailing, Carnival Red with Graphite accents, and Jet Black for a dark, moody vibe.",
            "The Trident 800’s styling can be further enhanced with a range of Genuine Triumph Accessories, allowing riders to tailor the bike to their own aesthetic. Options include a sleek Akrapovič silencer, with a titanium wrap and carbon fibre end cap, designed to elevate the bike’s sporty silhouette.",
            "On the Road",
            "With two-year unlimited mileage warranty and a class-leading 10,000-mile (16,000 km) service interval, the new Trident 800 is built for more time on the road and less time in the workshop, giving riders the freedom to enjoy every mile.",
            "Available to order now at authorized Triumph dealerships, starting at $9,995 USD / $11,695 CAD and arriving in dealerships beginning April 2026. For more information or to find your local dealer, visittriumphmotorcycles.com.",
            "SPECIFICATION",
            "ENGINE AND TRANSMISSION",
            "Type",
            "Liquid-cooled, 3 cylinders, 12 valves, DOHC",
            "Capacity",
            "798 cc",
            "Bore",
            "3.07 in (78.0 mm)",
            "Stroke",
            "2.19 in (55.7 mm)",
            "Compression",
            "13.2:1",
            "Max Power EC",
            "113 HP / 115 PS / (84.6 kW) @ 10,750 rpm",
            "Max Torque EC",
            "61.9 lb-ft (84 Nm)@ 8,500 rpm",
            "System",
            "Bosch Multipoint sequential electronic fuel injection with electronic throttle control. 3 rider modes (Rain, Road, Sport)",
            "Exhaust",
            "Stainless steel 3 into 1 header system with sided mounted stainless steel silencer",
            "Final Drive",
            "X ring chain",
            "Clutch",
            "Wet, multi-plate, slip & assist",
            "Gearbox",
            "6 speed, Triumph Shift Assist",
            "CHASSIS",
            "Frame",
            "Tubular steel perimeter frame",
            "Swingarm",
            "Twin-sided, fabricated pressed steel",
            "Front Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 3.5 in",
            "Rear Wheel",
            "Cast aluminum alloy 5 spoke, 17 x 5.5 in",
            "Front Tire",
            "120/70 R 17",
            "Rear Tire",
            "180/55 R 17",
            "Front Suspension",
            "Showa  1.61 in (41 mm) upside down separate function big piston (SFF-BP) forks, 4.72 in (120 mm) Wheel travel, adjustable compression & rebound damping.",
            "Rear Suspension",
            "Showa monoshock RSU, with adjustable preload and rebound damping, 5.12 in (130 mm) Wheel travel",
            "Front Brakes",
            "Twin 12.2 in (310mm) floating discs, 4-piston radial calipers, OCABS",
            "Rear Brakes",
            "Single 8.66 in (220mm) fixed disc, single piston sliding caliper, OCABS",
            "Instrument Display and Functions",
            "LCD Multifunction Instruments with integrated color TFT screen",
            "DIMENSIONS & WEIGHTS",
            "Length",
            "79.7 in (2024 mm)",
            "Width Handlebars",
            "32.1 in (815 mm)",
            "Height Without Mirror",
            "42.8 in (1088 mm)",
            "Seat Height",
            "31.9 in (810 mm)",
            "Wheelbase",
            "55.2 in (1402 mm)",
            "Rake",
            "24.5 °",
            "Trail",
            "4.3 in (108 mm)",
            "Wet Weight",
            "436.5 lb (198 kg",
            "Tank Capacity",
            "3.7 gal (14 liters)",
            "Service Interval",
            "10,000 miles (16,000km)/12 months (whichever comes first)",
            "CONSUMPTION AND EMISSIONS",
            "Fuel Consumption",
            "4.7 l/100km (60.1 mpg)",
            "Emissions",
            "109 g/km",
            "EURO 5+ CO2 emissions and fuel consumption data are measured according to regulation 168/2013/EC. Figures for fuel consumption are derived from specific test conditions and are for comparative purposes only. They may not reflect real driving results."
        ]
    }
},
,
{
    "id": "yamaha-nmax-155-tech-max-con-la-trasmissione-yecvt-ha-una-marcia-in-pi-eicma",
    "title": {
        "fr": "Yamaha NMax 155 Tech Max, con la trasmissione YECVT ha una marcia in più - EICMA",
        "en": "Yamaha NMax 155 Tech Max, con la trasmissione YECVT ha una marcia in più - EICMA",
        "es": "Yamaha NMax 155 Tech Max, con la trasmissione YECVT ha una marcia in più - EICMA",
        "it": "Yamaha NMax 155 Tech Max, con la trasmissione YECVT ha una marcia in più - EICMA"
    },
    "excerpt": {
        "fr": "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key.",
        "en": "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key.",
        "es": "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key.",
        "it": "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key."
    },
    "image": newsNew33,
    "category": "New Bikes",
    "readTime": "1 min",
    "body": {
        "fr": [
            "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "en": [
            "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "es": [
            "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "it": [
            "Yamaha amplia la gamma scooter 2026 con il nuovo NMax 155 Tech Max, dotato di motore Blue Core 155 cc Euro5+(15 CV a 8.000 giri/min; 2,4 litri per 100 km) con tecnologia Variable Valve Actuation (VVA) e sistema Start & Stop.L’NMax 155 introduce la trasmissione YECVT(Yamaha Electric Continuously Variable Transmission)con due modalità di guida - Sport e Town– selezionabili: lo scooter ricorda l’impostazione anche dopo lo spegnimento. In modalità \"Sport\" il rapporto si accorcia, il motore gira più in alto, l’accelerazione è più pronta e aumenta il freno motore. Selezionando invece \"Town\", il comportamento è più morbido: privilegia comfort e consumi. La differenza è pari a 1.000 giri a 60 km/h: 5000 contro 6.000 giri/min. Yamaha ha dotato l’NMax 155 anche dellafunzione di Downshift, attivabile tramite pulsante o aprendo rapidamente il gas. L’effetto è simile a quello che si ottiene scalando una marcia con un cambio tradizionale. Per quanto riguarda la tecnologia, il modello in questione è dotato dicruscotto con display TFT a colori da 4,2” e navigazione Garmin integrata;app MyRideper gestire chiamate e ascoltare la musica;presa USB-Cper la ricarica dello smartphone. La dotazione del nuovo scooter, disponibile nellecolorazioni Crystal Graphite e Midnight Black, è completata dall’accensione Smart Key.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ]
    }
},
,
{
    "id": "zontes-zt368-g-etc-pi-tecnologia-e-comfort-per-il-2026-eicma",
    "title": {
        "fr": "Zontes ZT368-G ETC, più tecnologia e comfort per il 2026 - EICMA",
        "en": "Zontes ZT368-G ETC, più tecnologia e comfort per il 2026 - EICMA",
        "es": "Zontes ZT368-G ETC, più tecnologia e comfort per il 2026 - EICMA",
        "it": "Zontes ZT368-G ETC, più tecnologia e comfort per il 2026 - EICMA"
    },
    "excerpt": {
        "fr": "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo.",
        "en": "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo.",
        "es": "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo.",
        "it": "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo."
    },
    "image": newsNew34,
    "category": "New Bikes",
    "readTime": "1 min",
    "body": {
        "fr": [
            "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo.",
            "La principale novità tecnica sullo ZT368-G ETC riguardal'introduzione del ride-by-wire:l'acceleratore elettronico garantisce una risposta più pronta e una gestione del gas più fluida. Ilcruise control, invece, promette di rendere più facili i lunghi trasferimenti e di contenere i consumi.Completamente ridisegnati i blocchetti del manubrio(destro e sinistro), con una nuova disposizione studiata per rendere la gestione dei comandi più intuitiva e immediata. Sul frontecomfort, arrivano manopole e sella riscaldate, gestibili direttamente dal quadro strumenti: un dettaglio che farà la differenza nella stagione più fredda.Confermato il monocilindrico da 368 cc raffreddato a liquido, capace di erogare 28,5 kW (38,7 CV) a 7.500 giri e una coppia di 40 Nm a 6.000 giri, con consumi dichiarati di 3,5 l/100 km. Per quanto riguardala ciclistica, lo Zontes ZT368-G ETC si affida una forcella upside-down MZKS da 41 mm con smorzamento in estensione e compressione regolabile, mentre al posteriore troviamo due ammortizzatori con regolazione del precarico su cinque livelli. L'altezza sella da terra è pari a 795 mm, con un peso in ordine di marcia è di 197 kg. Il nuovo Zontes ZT368-G ETC MY26 è disponibile nelle colorazioniGreen, Grey, Black e Sand.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "en": [
            "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo.",
            "La principale novità tecnica sullo ZT368-G ETC riguardal'introduzione del ride-by-wire:l'acceleratore elettronico garantisce una risposta più pronta e una gestione del gas più fluida. Ilcruise control, invece, promette di rendere più facili i lunghi trasferimenti e di contenere i consumi.Completamente ridisegnati i blocchetti del manubrio(destro e sinistro), con una nuova disposizione studiata per rendere la gestione dei comandi più intuitiva e immediata. Sul frontecomfort, arrivano manopole e sella riscaldate, gestibili direttamente dal quadro strumenti: un dettaglio che farà la differenza nella stagione più fredda.Confermato il monocilindrico da 368 cc raffreddato a liquido, capace di erogare 28,5 kW (38,7 CV) a 7.500 giri e una coppia di 40 Nm a 6.000 giri, con consumi dichiarati di 3,5 l/100 km. Per quanto riguardala ciclistica, lo Zontes ZT368-G ETC si affida una forcella upside-down MZKS da 41 mm con smorzamento in estensione e compressione regolabile, mentre al posteriore troviamo due ammortizzatori con regolazione del precarico su cinque livelli. L'altezza sella da terra è pari a 795 mm, con un peso in ordine di marcia è di 197 kg. Il nuovo Zontes ZT368-G ETC MY26 è disponibile nelle colorazioniGreen, Grey, Black e Sand.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "es": [
            "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo.",
            "La principale novità tecnica sullo ZT368-G ETC riguardal'introduzione del ride-by-wire:l'acceleratore elettronico garantisce una risposta più pronta e una gestione del gas più fluida. Ilcruise control, invece, promette di rendere più facili i lunghi trasferimenti e di contenere i consumi.Completamente ridisegnati i blocchetti del manubrio(destro e sinistro), con una nuova disposizione studiata per rendere la gestione dei comandi più intuitiva e immediata. Sul frontecomfort, arrivano manopole e sella riscaldate, gestibili direttamente dal quadro strumenti: un dettaglio che farà la differenza nella stagione più fredda.Confermato il monocilindrico da 368 cc raffreddato a liquido, capace di erogare 28,5 kW (38,7 CV) a 7.500 giri e una coppia di 40 Nm a 6.000 giri, con consumi dichiarati di 3,5 l/100 km. Per quanto riguardala ciclistica, lo Zontes ZT368-G ETC si affida una forcella upside-down MZKS da 41 mm con smorzamento in estensione e compressione regolabile, mentre al posteriore troviamo due ammortizzatori con regolazione del precarico su cinque livelli. L'altezza sella da terra è pari a 795 mm, con un peso in ordine di marcia è di 197 kg. Il nuovo Zontes ZT368-G ETC MY26 è disponibile nelle colorazioniGreen, Grey, Black e Sand.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ],
        "it": [
            "La Casa cinese rinnova il suo maxi scooter adventure.Il modello MY26 introduce soluzioni pensate per migliorare sia la guida sia il comfort a bordo.",
            "La principale novità tecnica sullo ZT368-G ETC riguardal'introduzione del ride-by-wire:l'acceleratore elettronico garantisce una risposta più pronta e una gestione del gas più fluida. Ilcruise control, invece, promette di rendere più facili i lunghi trasferimenti e di contenere i consumi.Completamente ridisegnati i blocchetti del manubrio(destro e sinistro), con una nuova disposizione studiata per rendere la gestione dei comandi più intuitiva e immediata. Sul frontecomfort, arrivano manopole e sella riscaldate, gestibili direttamente dal quadro strumenti: un dettaglio che farà la differenza nella stagione più fredda.Confermato il monocilindrico da 368 cc raffreddato a liquido, capace di erogare 28,5 kW (38,7 CV) a 7.500 giri e una coppia di 40 Nm a 6.000 giri, con consumi dichiarati di 3,5 l/100 km. Per quanto riguardala ciclistica, lo Zontes ZT368-G ETC si affida una forcella upside-down MZKS da 41 mm con smorzamento in estensione e compressione regolabile, mentre al posteriore troviamo due ammortizzatori con regolazione del precarico su cinque livelli. L'altezza sella da terra è pari a 795 mm, con un peso in ordine di marcia è di 197 kg. Il nuovo Zontes ZT368-G ETC MY26 è disponibile nelle colorazioniGreen, Grey, Black e Sand.",
            "## ARTICOLI CORRELATI",
            "### MotoGP ed EICMA: al Mugello svelata l’alleanza che accelera il futuro delle due ruote",
            "### Nuova linea jeans by Acerbis: soluzioni versatili per gli spostamenti quotidiani",
            "### BMW svela la M 1000 RR Isle of Man TT Limited Edition",
            "### Buon compleanno, Piaggio Beverly",
            "### Kymco Micare 125, la città facile",
            "### Nuovi colori per l’Honda Vision 110",
            "### Morbidelli N125V, si guida a 16 anni ma fa sognare in grande",
            "### Benelli BKX 300 e BKX 300 S: due anime, un solo motore",
            "### MOBILITÀ, ANCMA LANCIA LA CAMPAGNA \"DUE RUOTE  CHE VALGONO IL DOPPIO\""
        ]
    }
},
{
    "id": "aprilia-and-marco-bezzecchi-beginning-to-look-unstoppable",
    "title": {
      "fr": "Aprilia et Marco Bezzecchi semblent inarrêtables",
      "en": "Aprilia and Marco Bezzecchi Beginning to Look Unstoppable",
      "es": "Aprilia y Marco Bezzecchi parecen imparables",
      "it": "Aprilia e Marco Bezzecchi sembrano inarrestabili"
    },
    "excerpt": {
      "fr": "Marco Bezzecchi d'Aprilia mène le championnat MotoGP après les quatre premières manches de 2026.",
      "en": "Aprilia’s Marco Bezzecchi is leading the MotoGP championship after the first four rounds of 2026.",
      "es": "Marco Bezzecchi de Aprilia lidera el campeonato de MotoGP tras las cuatro primeras rondas de 2026.",
      "it": "Marco Bezzecchi di Aprilia è in testa al campionato MotoGP dopo i primi quattro round del 2026."
    },
    "image": importNewsImgSorted0,
    "category": "Racing",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Marco Bezzecchi d'Aprilia mène le championnat MotoGP après les quatre premières manches de 2026. C'est d'autant plus impressionnant que Bezzecchi affiche un bilan désastreux lors des courses Sprint du samedi.",
        "Bezzecchi n'a marqué que 6 points le samedi sur les 48 disponibles. Il a fait chou blanc lors de 3 des 4 courses Sprint disputées jusqu'à présent.",
        "S'il mène le championnat, c'est grâce à ses performances incroyables le dimanche lors des Grands Prix complets. Là, il a marqué 95 points sur les 100 possibles, avec 3 victoires et une deuxième place.",
        "L'usine italienne ne se repose pas sur ses lauriers et semble améliorer continuellement sa machine de MotoGP. L'Aprilia RS-GP 2026 semble être la machine à battre cette année."
      ],
      "en": [
        "Aprilia’s Marco Bezzecchi is leading the MotoGP championship after the first four rounds of 2026. This is despite a disastrous record by Bezzecchi in Saturday’s Sprint races.",
        "Bezzecchi has scored only 6 points on Saturdays out of an available 48. He has zero points in 3 of the 4 Sprint races so far.",
        "The reason Bezzecchi leads the championship is his incredible performance on Sundays during the full-length GP races. There, he has scored 95 points out of an available 100.",
        "The Italian factory is not resting on its laurels and seems to be continuously improving its MotoGP machine. The 2026 Aprilia RS-GP appears to be the bike to beat this year."
      ],
      "es": [
        "Marco Bezzecchi de Aprilia lidera el campeonato de MotoGP tras las cuatro primeras rondas de 2026. Esto es a pesar de un historial desastroso de Bezzecchi en las carreras Sprint del sábado.",
        "Bezzecchi solo ha sumado 6 puntos los sábados de los 48 disponibles. Tiene cero puntos en 3 de las 4 carreras Sprint hasta ahora.",
        "La razón por la que Bezzecchi lidera el campeonato es su increíble actuación los domingos durante las carreras completas de GP. Allí, ha sumado 95 puntos de 100 disponibles.",
        "La fábrica italiana no descansa en sus laureles y parece estar mejorando continuamente su máquina de MotoGP. La Aprilia RS-GP 2026 parece ser la moto a batir este año."
      ],
      "it": [
        "Marco Bezzecchi di Aprilia è in testa al campionato MotoGP dopo i primi quattro round del 2026. Questo nonostante un record disastroso di Bezzecchi nelle gare Sprint del sabato.",
        "Bezzecchi ha segnato solo 6 punti il sabato sui 48 disponibili. Ha zero punti in 3 delle 4 gare Sprint finora.",
        "Il motivo per cui Bezzecchi guida il campionato è la sua incredibile prestazione la domenica durante le gare GP complete. Lì, ha segnato 95 punti su 100 disponibili.",
        "La fabbrica italiana non riposa sugli allori e sembra migliorare continuamente la sua macchina MotoGP. L'Aprilia RS-GP 2026 sembra essere la moto da battere quest'anno."
      ]
    }
  },
,
  {
    "id": "jerez-motogp-sprint-and-full-race-results",
    "title": {
      "fr": "Résultats du Sprint et du Grand Prix de Jerez MotoGP",
      "en": "Jerez MotoGP Sprint and Full Race Results",
      "es": "Resultados del Sprint y Gran Premio de Jerez MotoGP",
      "it": "Risultati Sprint e Gran Premio di Jerez MotoGP"
    },
    "excerpt": {
      "fr": "Le championnat MotoGP s'est rendu sur l'emblématique circuit de Jerez ce week-end.",
      "en": "The MotoGP championship visited the iconic Jerez circuit this weekend.",
      "es": "El campeonato de MotoGP visitó el icónico circuito de Jerez este fin de semana.",
      "it": "Il campionato MotoGP ha visitato l'iconico circuito di Jerez questo fine settimana."
    },
    "image": importNewsImgSorted1,
    "category": "Racing",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Le championnat MotoGP s'est rendu sur l'emblématique circuit de Jerez ce week-end, et les fans espagnols passionnés ont eu de quoi se réjouir avec une victoire pour chacun des frères Marquez.",
        "La course Sprint de samedi a été folle. Partis sur une piste sèche, les pilotes ont été contraints de passer aux pneus pluie à seulement quelques tours de la fin. Alex Marquez a su tirer son épingle du jeu dans ces conditions précaires pour remporter sa première victoire en Sprint.",
        "Le dimanche, lors de la course principale, c'est Marc Marquez qui a dominé. Après un départ prudent, il a remonté le peloton pour s'imposer devant Francesco Bagnaia dans un dernier tour mémorable."
      ],
      "en": [
        "The MotoGP championship visited the iconic Jerez circuit this weekend, and the rabid Spanish fans had plenty to cheer about as each of the Marquez brothers took a win.",
        "Saturday’s Sprint race was wild. Starting on a dry track, the riders were forced to switch to wet tires with just a few laps remaining. Alex Marquez managed to navigate the tricky conditions to take his first Sprint win.",
        "On Sunday, in the main race, it was Marc Marquez who dominated. After a cautious start, he carved through the field to win ahead of Francesco Bagnaia in a memorable final lap."
      ],
      "es": [
        "El campeonato de MotoGP visitó el icónico circuito de Jerez este fin de semana, y los apasionados fans españoles tuvieron mucho que celebrar ya que cada uno de los hermanos Márquez se llevó una victoria.",
        "La carrera Sprint del sábado fue salvaje. Comenzando en una pista seca, los pilotos se vieron obligados a cambiar a neumáticos de lluvia con solo unas pocas vueltas restantes. Álex Márquez logró navegar las difíciles condiciones para llevarse su primera victoria en Sprint.",
        "El domingo, en la carrera principal, fue Marc Márquez quien dominó. Después de un comienzo cauteloso, se abrió paso a través del campo para ganar por delante de Francesco Bagnaia en una vuelta final memorable."
      ],
      "it": [
        "Il campionato MotoGP ha visitato l'iconico circuito di Jerez questo fine settimana, e gli scatenati tifosi spagnoli hanno avuto molto da festeggiare dato che ciascuno dei fratelli Marquez ha ottenuto una vittoria.",
        "La gara Sprint di sabato è stata selvaggia. Partendo su pista asciutta, i piloti sono stati costretti a passare alle gomme da bagnato a pochi giri dalla fine. Alex Marquez è riuscito a gestire le difficili condizioni ottenendo la sua prima vittoria nella Sprint.",
        "Domenica, nella gara principale, è stato Marc Marquez a dominare. Dopo una partenza cauta, si è fatto strada nel gruppo vincendo davanti a Francesco Bagnaia in un memorabile ultimo giro."
      ]
    }
  },
,
  {
    "id": "portuguesegp-second-place-for-bastianini-and-the-ducati-lenovo-team-at-portimao-a-crash-for-bagnaia-following-a-coming-together-in-the-final-stages",
    "title": {
      "fr": "GP du Portugal : Deuxième place pour Bastianini et chute pour Bagnaia",
      "en": "PortugueseGP Second place for Bastianini and the Ducati Lenovo Team",
      "es": "GP de Portugal: Segundo puesto para Bastianini y caída de Bagnaia",
      "it": "GP del Portogallo: Secondo posto per Bastianini e caduta per Bagnaia"
    },
    "excerpt": {
      "fr": "Enea Bastianini a décroché la deuxième place pour le Ducati Lenovo Team lors d'un GP du Portugal mouvementé.",
      "en": "Enea Bastianini secured second place for the Ducati Lenovo Team during an eventful Portuguese GP.",
      "es": "Enea Bastianini logró el segundo puesto para el Ducati Lenovo Team durante un accidentado GP de Portugal.",
      "it": "Enea Bastianini ha ottenuto il secondo posto per il Ducati Lenovo Team durante un movimentato GP del Portogallo."
    },
    "image": importNewsImgSorted2,
    "category": "Racing",
    "readTime": "3 min",
    "body": {
      "fr": [
        "Enea Bastianini a décroché une solide deuxième place pour le Ducati Lenovo Team lors du Grand Prix du Portugal à Portimão. Cependant, la journée a été amère pour l'équipe après l'incident entre Pecco Bagnaia et Marc Marquez.",
        "Bastianini a montré un excellent rythme tout au long de la course, restant au contact du leader Jorge Martin mais ne parvenant pas à porter une attaque décisive dans les derniers tours.",
        "Pendant ce temps, Bagnaia luttait pour la cinquième place lorsqu'un contact avec Marquez les a envoyés tous les deux au tapis à deux tours de l'arrivée. Cet incident a été classé comme un fait de course par la direction de course."
      ],
      "en": [
        "Enea Bastianini secured a solid second place for the Ducati Lenovo Team at the Portuguese Grand Prix in Portimão. However, it was a bittersweet day for the team following the clash between Pecco Bagnaia and Marc Marquez.",
        "Bastianini showed excellent pace throughout the race, staying close to leader Jorge Martin but unable to make a move in the closing stages.",
        "Meanwhile, Bagnaia was fighting for fifth place when contact with Marquez sent both riders down with two laps to go. Race direction ruled it a racing incident."
      ],
      "es": [
        "Enea Bastianini consiguió un sólido segundo puesto para el Ducati Lenovo Team en el Gran Premio de Portugal en Portimão. Sin embargo, fue un día agridulce para el equipo tras el choque entre Pecco Bagnaia y Marc Márquez.",
        "Bastianini mostró un excelente ritmo durante toda la carrera, manteniéndose cerca del líder Jorge Martín pero incapaz de hacer un movimiento en las etapas finales.",
        "Mientras tanto, Bagnaia luchaba por el quinto puesto cuando el contacto con Márquez derribó a ambos pilotos a dos vueltas del final. La dirección de carrera lo dictaminó como un incidente de carrera."
      ],
      "it": [
        "Enea Bastianini ha ottenuto un solido secondo posto per il Ducati Lenovo Team al Gran Premio del Portogallo a Portimão. Tuttavia, è stata una giornata agrodolce per il team dopo lo scontro tra Pecco Bagnaia e Marc Marquez.",
        "Bastianini ha mostrato un ottimo passo per tutta la gara, rimanendo vicino al leader Jorge Martin ma incapace di fare una mossa nelle fasi finali.",
        "Nel frattempo, Bagnaia stava lottando per il quinto posto quando il contatto con Marquez ha fatto cadere entrambi i piloti a due giri dalla fine. La direzione gara lo ha giudicato un incidente di gara."
      ]
    }
  },
,
  {
    "id": "brazil-motogp-sprint-and-full-race-results",
    "title": {
      "fr": "Résultats du Sprint et du Grand Prix du Brésil MotoGP",
      "en": "Brazil MotoGP Sprint and Full Race Results",
      "es": "Resultados del Sprint y Gran Premio de Brasil MotoGP",
      "it": "Risultati Sprint e Gran Premio del Brasile MotoGP"
    },
    "excerpt": {
      "fr": "Le MotoGP est retourné au Brésil pour la première fois en deux décennies.",
      "en": "MotoGP returned to Brazil for the first time in two decades.",
      "es": "MotoGP regresó a Brasil por primera vez en dos décadas.",
      "it": "La MotoGP è tornata in Brasile per la prima volta in due decenni."
    },
    "image": importNewsImgSorted3,
    "category": "Racing",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Le MotoGP a fait un retour triomphal au Brésil sur le nouveau circuit international de Rio. L'atmosphère était électrique alors que les fans locaux accueillaient les héros de la vitesse.",
        "Jorge Martin a dominé le week-end, remportant à la fois le Sprint du samedi et la course principale du dimanche. Sa maîtrise de la nouvelle piste a été exemplaire, ne laissant aucune chance à ses poursuivants.",
        "Fabio Quartararo a également réalisé une performance notable en montant sur le podium le dimanche, montrant que les améliorations apportées à sa Yamaha commencent à porter leurs fruits sur des circuits techniques."
      ],
      "en": [
        "MotoGP made a triumphant return to Brazil at the new Rio International Circuit. The atmosphere was electric as local fans welcomed the heroes of speed.",
        "Jorge Martin dominated the weekend, winning both Saturday's Sprint and Sunday's main race. His mastery of the new track was exemplary, leaving no chance for his pursuers.",
        "Fabio Quartararo also delivered a notable performance, finishing on the podium on Sunday, showing that the improvements to his Yamaha are starting to pay off."
      ],
      "es": [
        "MotoGP regresó triunfalmente a Brasil en el nuevo Circuito Internacional de Río. El ambiente era eléctrico mientras los fans locales daban la bienvenida a los héroes de la velocidad.",
        "Jorge Martín dominó el fin de semana, ganando tanto el Sprint del sábado como la carrera principal del domingo. Su dominio de la nueva pista fue ejemplar, no dejando ninguna oportunidad a sus perseguidores.",
        "Fabio Quartararo también realizó una actuación notable, terminando en el podio el domingo, demostrando que las mejoras en su Yamaha están empezando a dar sus frutos."
      ],
      "it": [
        "La MotoGP ha fatto un ritorno trionfale in Brasile al nuovo Rio International Circuit. L'atmosfera era elettrica mentre i fan locali accoglievano gli eroi della velocità.",
        "Jorge Martin ha dominato il fine settimana, vincendo sia la Sprint di sabato che la gara principale di domenica. La sua maestria sulla nuova pista è stata esemplare, non lasciando scampo ai suoi inseguitori.",
        "Fabio Quartararo ha anche fornito una prestazione notevole, finendo sul podio domenica, dimostrando che i miglioramenti alla sua Yamaha stanno iniziando a dare i loro frutti."
      ]
    }
  },
,
  {
    "id": "ducati-redesigned-desertx-with-new-v-twin-and-lighter-weight",
    "title": {
      "fr": "Ducati DesertX redessinée : Nouveau V-twin et poids allégé",
      "en": "Ducati Redesigned DesertX With New V–twin and Lighter Weight",
      "es": "Ducati DesertX rediseñada: Nuevo V-twin y peso más ligero",
      "it": "Ducati DesertX riprogettata: Nuovo V-twin e peso più leggero"
    },
    "excerpt": {
      "fr": "Ducati présente la nouvelle DesertX 2026, plus légère et plus performante.",
      "en": "Ducati introduces the new 2026 DesertX, lighter and more capable.",
      "es": "Ducati presenta la nueva DesertX 2026, más ligera y capaz.",
      "it": "Ducati presenta la nuova DesertX 2026, più leggera e capace."
    },
    "image": importNewsImgSorted4,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "fr": [
        "Ducati a dévoilé la nouvelle génération de la DesertX pour 2026. L'objectif était clair : réduire le poids tout en augmentant l'agilité sans compromettre la robustesse.",
        "Le cœur de la machine est un tout nouveau moteur V2 de 890cc qui pèse 5 kg de moins que la version précédente. Ce moteur développe 115 chevaux avec une courbe de couple plus généreuse à bas régime, idéale pour le tout-terrain technique.",
        "Le cadre a également été revu, et l'utilisation de matériaux composites pour certains composants a permis de gagner encore 3 kg. Avec un poids à sec de 194 kg, la DesertX 2026 s'annonce comme une référence dans le segment des trails moyens."
      ],
      "en": [
        "Ducati has unveiled the next generation of the DesertX for 2026. The goal was clear: reduce weight and increase agility without compromising durability.",
        "At the heart of the machine is an all-new 890cc V2 engine that weighs 5 kg less than the previous version. It develops 115 horsepower with a torque curve optimized for technical off-road riding.",
        "The frame has also been revised, and the use of composite materials has saved another 3 kg. With a dry weight of 194 kg, the 2026 DesertX is set to be a benchmark in the middleweight adventure segment."
      ],
      "es": [
        "Ducati ha presentado la próxima generación de la DesertX para 2026. El objetivo estaba claro: reducir peso y aumentar la agilidad sin comprometer la durabilidad.",
        "En el corazón de la máquina se encuentra un motor V2 de 890 cc totalmente nuevo que pesa 5 kg menos que la versión anterior. Desarrolla 115 caballos de fuerza con una curva de par optimizada para la conducción técnica fuera de carretera.",
        "El chasis también ha sido revisado y el uso de materiales compuestos ha ahorrado otros 3 kg. Con un peso en seco de 194 kg, la DesertX 2026 está destinada a ser un referente en el segmento de aventura de peso medio."
      ],
      "it": [
        "Ducati ha svelato la prossima generazione della DesertX per il 2026. L'obiettivo era chiaro: ridurre il peso e aumentare l'agilità senza compromettere la durata.",
        "Al cuore della macchina c'è un nuovissimo motore V2 da 890 cc che pesa 5 kg in meno rispetto alla versione precedente. Sviluppa 115 cavalli con una curva di coppia ottimizzata per la guida tecnica fuoristrada.",
        "Anche il telaio è stato rivisto e l'uso di materiali compositi ha fatto risparmiare altri 3 kg. Con un peso a secco di 194 kg, la DesertX 2026 è destinata a essere un punto di riferimento nel segmento delle adventure di media cilindrata."
      ]
    }
  },
,
  {
    "id": "ducati-introduces-limited-edition-formula-73",
    "title": {
      "fr": "Ducati présente l'édition limitée Formula 73",
      "en": "Ducati Introduces Limited Edition Formula 73",
      "es": "Ducati presenta la edición limitada Formula 73",
      "it": "Ducati presenta l'edizione limitata Formula 73"
    },
    "excerpt": {
      "fr": "Un hommage à l'héritage de Ducati avec une production limitée à 873 unités.",
      "en": "A tribute to Ducati's heritage with limited production of 873 units.",
      "es": "Un tributo a la herencia de Ducati con una producción limitada de 873 unidades.",
      "it": "Un omaggio all'eredità Ducati con una produzione limitata di 873 unità."
    },
    "image": importNewsImgSorted5,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Ducati célèbre son histoire avec la nouvelle 'Formula 73', une édition limitée basée sur la Panigale V4. Cette machine arbore une livrée inspirée par la célèbre 750 Super Sport qui a remporté Imola en 1972.",
        "Seulement 873 exemplaires seront produits, chacun numéroté sur la tête de fourche. Outre sa peinture spéciale, la moto est équipée de jantes en magnésium et d'un échappement Akrapovič en titane de série.",
        "Les propriétaires recevront également un certificat d'authenticité et une housse de moto assortie. C'est une pièce de collection qui promet des performances de pointe sur piste."
      ],
      "en": [
        "Ducati celebrates its history with the new 'Formula 73', a limited edition based on the Panigale V4. This machine features a livery inspired by the famous 750 Super Sport that won at Imola in 1972.",
        "Only 873 units will be produced, each numbered on the triple clamp. In addition to its special paint, the bike is equipped with magnesium wheels and a titanium Akrapovič exhaust as standard.",
        "Owners will also receive a certificate of authenticity and a matching bike cover. It's a collector's piece that promises top-tier track performance."
      ],
      "es": [
        "Ducati celebra su historia con la nueva 'Formula 73', una edición limitada basada en la Panigale V4. Esta máquina presenta una decoración inspirada en la famosa 750 Super Sport que ganó en Imola en 1972.",
        "Solo se producirán 873 unidades, cada una numerada en la tija superior. Además de su pintura especial, la moto está equipada de serie con llantas de magnesio y un escape Akrapovič de titanio.",
        "Los propietarios también recibirán un certificado de autenticidad y una funda para la moto a juego. Es una pieza de colección que promete un rendimiento en pista de primer nivel."
      ],
      "it": [
        "Ducati celebra la sua storia con la nuova 'Formula 73', un'edizione limitata basata sulla Panigale V4. Questa macchina presenta una livrea ispirata alla famosa 750 Super Sport che vinse ad Imola nel 1972.",
        "Verranno prodotte solo 873 unità, ciascuna numerata sulla piastra dello sterzo. Oltre alla sua verniciatura speciale, la moto è dotata di cerchi in magnesio e scarico Akrapovič in titanio di serie.",
        "I proprietari riceveranno anche un certificato di autenticità e un telo coprimoto abbinato. È un pezzo da collezione che promette prestazioni in pista di alto livello."
      ]
    }
  },
,
  {
    "id": "indian-s-new-owner-focused-on-core-products-cruisers-baggers-and-touring-models",
    "title": {
      "fr": "Le nouveau propriétaire d'Indian se concentre sur les modèles de base",
      "en": "Indian’s New Owner Focused on Core Products",
      "es": "El nuevo propietario de Indian se centra en los productos principales",
      "it": "Il nuovo proprietario di Indian focalizzato sui prodotti core"
    },
    "excerpt": {
      "fr": "Indian Motorcycle devient indépendante de Polaris avec une stratégie laser.",
      "en": "Indian Motorcycle goes independent from Polaris with a laser-focused strategy.",
      "es": "Indian Motorcycle se independiza de Polaris con una estrategia centrada en el láser.",
      "it": "Indian Motorcycle diventa indipendente da Polaris con una strategia focalizzata al laser."
    },
    "image": importNewsImgSorted9,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Après sa séparation d'avec Polaris, Indian Motorcycle entame un nouveau chapitre sous la direction d'un groupe d'investisseurs privés passionnés. La stratégie est claire : revenir aux racines.",
        "Le nouveau PDG a déclaré que l'entreprise se concentrerait exclusivement sur ses produits phares : les Cruisers, les Baggers et les modèles de Touring. 'Nous ne cherchons pas à être partout, nous voulons être les meilleurs là où l'héritage d'Indian est le plus fort', a-t-il affirmé.",
        "Cela signifie que des projets comme les motos électriques ou les modèles urbains de petite cylindrée sont mis de côté pour le moment au profit de l'amélioration de la gamme Chief et Roadmaster."
      ],
      "en": [
        "Following its separation from Polaris, Indian Motorcycle begins a new chapter under a group of passionate private investors. The strategy is clear: return to the roots.",
        "The new CEO stated that the company will focus exclusively on its flagship products: Cruisers, Baggers, and Touring models. 'We're not looking to be everywhere, we want to be the best where Indian's heritage is strongest,' he said.",
        "This means projects like electric bikes or small-displacement urban models are being sidelined for now in favor of enhancing the Chief and Roadmaster lineups."
      ],
      "es": [
        "Tras su separación de Polaris, Indian Motorcycle comienza un nuevo capítulo bajo un grupo de apasionados inversores privados. La estrategia está clara: volver a las raíces.",
        "El nuevo CEO afirmó que la empresa se centrará exclusivamente en sus productos estrella: Cruisers, Baggers y modelos Touring. 'No buscamos estar en todas partes, queremos ser los mejores donde la herencia de Indian sea más fuerte', dijo.",
        "Esto significa que proyectos como las bicicletas eléctricas o los modelos urbanos de pequeña cilindrada se están dejando de lado por ahora a favor de mejorar las líneas Chief y Roadmaster."
      ],
      "it": [
        "In seguito alla separazione da Polaris, Indian Motorcycle inizia un nuovo capitolo sotto un gruppo di appassionati investitori privati. La strategia è chiara: tornare alle radici.",
        "Il nuovo CEO ha dichiarato che l'azienda si concentrerà esclusivamente sui suoi prodotti di punta: Cruiser, Bagger e modelli Touring. 'Non cerchiamo di essere ovunque, vogliamo essere i migliori dove l'eredità di Indian è più forte', ha affermato.",
        "Ciò significa che progetti come le moto elettriche o i modelli urbani di piccola cilindrata vengono messi da parte per ora a favore del potenziamento delle linee Chief e Roadmaster."
      ]
    }
  },
,
  {
    "id": "owner-of-ktm-husqvarna-and-gasgas-changes-name-to-bajaj-mobility-ag",
    "title": {
      "fr": "Le propriétaire de KTM change de nom pour Bajaj Mobility AG",
      "en": "Owner of KTM Changes Name to Bajaj Mobility AG",
      "es": "El propietario de KTM cambia de nombre a Bajaj Mobility AG",
      "it": "Il proprietario di KTM cambia nome in Bajaj Mobility AG"
    },
    "excerpt": {
      "fr": "Un changement majeur dans la structure de l'entreprise pour les marques autrichiennes.",
      "en": "A major shift in corporate structure for the Austrian brands.",
      "es": "Un cambio importante en la estructura corporativa de las marcas austriacas.",
      "it": "Un importante cambiamento nella struttura aziendale per i marchi austriaci."
    },
    "image": importNewsImgSorted14,
    "category": "Racing",
    "readTime": "1 min",
    "body": {
      "fr": [
        "Pierer Mobility AG, la société mère de KTM, Husqvarna et GASGAS, a officiellement changé de nom pour devenir Bajaj Mobility AG. Ce changement reflète l'influence croissante du géant indien Bajaj Auto dans le groupe.",
        "Bajaj détient désormais une participation majoritaire, et ce changement de nom symbolise une intégration plus poussée des ressources de fabrication et de développement entre l'Autriche et l'Inde.",
        "Pour les clients, peu de choses changeront dans l'immédiat, car les marques conserveront leurs identités distinctes et leurs centres de design européens."
      ],
      "en": [
        "Pierer Mobility AG, the parent company of KTM, Husqvarna, and GASGAS, has officially changed its name to Bajaj Mobility AG. This shift reflects the growing influence of Indian giant Bajaj Auto within the group.",
        "Bajaj now holds a majority stake, and this name change symbolizes a deeper integration of manufacturing and development resources between Austria and India.",
        "For customers, little will change immediately, as the brands will maintain their distinct identities and European design centers."
      ],
      "es": [
        "Pierer Mobility AG, la empresa matriz de KTM, Husqvarna y GASGAS, ha cambiado oficialmente su nombre a Bajaj Mobility AG. Este cambio refleja la creciente influencia del gigante indio Bajaj Auto dentro del grupo.",
        "Bajaj posee ahora una participación mayoritaria, y este cambio de nombre simboliza una integración más profunda de los recursos de fabricación y desarrollo entre Austria e India.",
        "Para los clientes, poco cambiará de inmediato, ya que las marcas mantendrán sus identidades distintivas y sus centros de diseño europeos."
      ],
      "it": [
        "Pierer Mobility AG, la società madre di KTM, Husqvarna e GASGAS, ha cambiato ufficialmente il proprio nome in Bajaj Mobility AG. Questo cambiamento riflette la crescente influenza del gigante indiano Bajaj Auto all'interno del gruppo.",
        "Bajaj detiene ora una quota di maggioranza e questo cambio di nome simboleggia una più profonda integrazione delle risorse di produzione e sviluppo tra Austria e India.",
        "Per i clienti cambierà poco nell'immediato, poiché i marchi manterranno le loro identità distinte e i centri di design europei."
      ]
    }
  },
,
  {
    "id": "ktm-super-beast-limited-edition-1390-super-duke-rr",
    "title": {
      "fr": "KTM Super Beast : Édition limitée 1390 Super Duke RR",
      "en": "KTM Super Beast Limited Edition 1390 Super Duke RR",
      "es": "KTM Super Beast Edición Limitada 1390 Super Duke RR",
      "it": "KTM Super Beast Edizione Limitata 1390 Super Duke RR"
    },
    "excerpt": {
      "fr": "La machine ultime prête pour la piste, limitée à seulement 350 unités.",
      "en": "The ultimate track-ready machine, limited to just 350 units.",
      "es": "La máquina definitiva lista para la pista, limitada a solo 350 unidades.",
      "it": "La macchina definitiva pronta per la pista, limitata a sole 350 unità."
    },
    "image": importNewsImgSorted22,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "fr": [
        "KTM a lâché la 'Super Beast', la 1390 Super Duke RR. C'est la version la plus extrême de leur roadster emblématique, conçue pour dévorer les circuits.",
        "Grâce à l'utilisation massive de fibre de carbone et de pièces en aluminium usiné, la moto pèse 11 kg de moins que la version standard. Avec 190 chevaux pour un poids plume, le rapport poids-puissance est tout simplement phénoménal.",
        "La suspension WP Apex Pro est entièrement réglable et a été calibrée spécifiquement pour une utilisation sur piste. Seulement 350 unités seront disponibles dans le monde entier."
      ],
      "en": [
        "KTM has unleashed the 'Super Beast', the 1390 Super Duke RR. It is the most extreme version of their iconic roadster, designed to dominate the track.",
        "Through the extensive use of carbon fiber and CNC-machined aluminum parts, the bike weighs 11 kg less than the standard version. With 190 horsepower and lightweight construction, the power-to-weight ratio is phenomenal.",
        "The WP Apex Pro suspension is fully adjustable and has been calibrated specifically for track use. Only 350 units will be available worldwide."
      ],
      "es": [
        "KTM ha desatado a la 'Super Beast', la 1390 Super Duke RR. Es la versión más extrema de su icónica roadster, diseñada para dominar la pista.",
        "Mediante el uso extensivo de fibra de carbono y piezas de aluminio mecanizadas por CNC, la moto pesa 11 kg menos que la versión estándar. Con 190 caballos de fuerza y una construcción ligera, la relación potencia-peso es fenomenal.",
        "La suspensión WP Apex Pro es totalmente ajustable y ha sido calibrada específicamente para su uso en pista. Solo 350 unidades estarán disponibles en todo el mundo."
      ],
      "it": [
        "KTM ha scatenato la 'Super Beast', la 1390 Super Duke RR. È la versione più estrema della loro iconica roadster, progettata per dominare la pista.",
        "Attraverso l'uso estensivo di fibra di carbonio e parti in alluminio lavorate a CNC, la moto pesa 11 kg in meno rispetto alla versione standard. Con 190 cavalli e una costruzione leggera, il rapporto peso-potenza è fenomenale.",
        "Le sospensioni WP Apex Pro sono completamente regolabili e sono state calibrate specificamente per l'uso in pista. Solo 350 unità saranno disponibili in tutto il mondo."
      ]
    }
  },
,
  {
    "id": "zxmoto-s-passionate-owner-drives-brand-to-success-in-wss",
    "title": {
      "fr": "Le propriétaire passionné de ZXMOTO mène la marque au succès en WSS",
      "en": "ZXMOTO’s Passionate Owner Drives Brand to Success in WSS",
      "es": "El apasionado propietario de ZXMOTO impulsa la marca al éxito en WSS",
      "it": "L'appassionato proprietario di ZXMOTO porta il marchio al successo in WSS"
    },
    "excerpt": {
      "fr": "ZXMOTO s'impose comme un concurrent sérieux dans le championnat World Supersport.",
      "en": "ZXMOTO emerges as a serious contender in the World Supersport championship.",
      "es": "ZXMOTO surge como un serio contendiente en el campeonato mundial de Supersport.",
      "it": "ZXMOTO emerge come un serio contendente nel campionato mondiale Supersport."
    },
    "image": importNewsImgSorted23,
    "category": "Racing",
    "readTime": "2 min",
    "body": {
      "fr": [
        "ZXMOTO, une marque montante dans le monde de la compétition, a surpris tout le monde cette saison en World Supersport. Derrière ce succès se cache un propriétaire dont la passion pour la course n'a d'égale que son ambition.",
        "L'investissement dans une équipe technique de premier plan et le développement d'une machine agile ont permis à ZXMOTO de rivaliser avec les constructeurs établis comme Yamaha et Kawasaki.",
        "'Nous ne sommes pas ici juste pour participer, nous sommes ici pour gagner', a déclaré le propriétaire après leur première victoire sur le circuit de Donington Park."
      ],
      "en": [
        "ZXMOTO, a rising brand in the racing world, has surprised everyone this season in World Supersport. Behind this success is an owner whose passion for racing is matched only by his ambition.",
        "Investment in a top-tier technical team and the development of an agile machine have allowed ZXMOTO to compete with established manufacturers like Yamaha and Kawasaki.",
        "'We're not just here to participate, we're here to win,' the owner said after their first victory at Donington Park."
      ],
      "es": [
        "ZXMOTO, una marca en ascenso en el mundo de las carreras, ha sorprendido a todos esta temporada en World Supersport. Detrás de este éxito hay un propietario cuya pasión por las carreras solo es comparable a su ambición.",
        "La inversión en un equipo técnico de primer nivel y el desarrollo de una máquina ágil han permitido a ZXMOTO competir con fabricantes establecidos como Yamaha y Kawasaki.",
        "'No estamos aquí solo para participar, estamos aquí para ganar', dijo el propietario tras su primera victoria en el circuito de Donington Park."
      ],
      "it": [
        "ZXMOTO, un marchio in ascesa nel mondo delle corse, ha sorpreso tutti in questa stagione nel World Supersport. Dietro questo successo c'è un proprietario la cui passione per le corse è eguagliata solo dalla sua ambizione.",
        "L'investimento in un team tecnico di alto livello e lo sviluppo di una macchina agile hanno permesso a ZXMOTO di competere con produttori affermati come Yamaha e Kawasaki.",
        "'Non siamo qui solo per partecipare, siamo qui per vincere', ha detto il proprietario dopo la sua prima vittoria sul circuito di Donington Park."
      ]
    }
  },
,
  {
    "id": "toprak-razgatlioglu-after-dominating-world-superbike-encounters-hurdles-adapting-to-motogp",
    "title": {
      "fr": "Toprak Razgatlioglu : Des obstacles dans l'adaptation au MotoGP",
      "en": "Toprak Razgatlioglu: Hurdles Adapting to MotoGP",
      "es": "Toprak Razgatlioglu: Obstáculos para adaptarse a MotoGP",
      "it": "Toprak Razgatlioglu: Ostacoli nell'adattamento alla MotoGP"
    },
    "excerpt": {
      "fr": "Le champion WorldSBK fait face à des défis lors de sa première saison en MotoGP.",
      "en": "The WorldSBK champion faces challenges in his debut MotoGP season.",
      "es": "El campeón de WorldSBK se enfrenta a desafíos en su temporada de debut en MotoGP.",
      "it": "Il campione WorldSBK affronta delle sfide nella sua stagione di debutto in MotoGP."
    },
    "image": importNewsImgSorted24,
    "category": "Racing",
    "readTime": "3 min",
    "body": {
      "fr": [
        "Le passage du World Superbike au MotoGP n'est jamais facile, même pour un talent comme Toprak Razgatlioglu. Après avoir dominé le SBK, le pilote turc découvre la complexité des prototypes de Grand Prix.",
        "Les pneus Michelin et les freins en carbone demandent un style de pilotage radicalement différent de celui qu'il utilisait sur sa BMW de Superbike. 'La moto est incroyablement rapide, mais elle demande une précision que je n'ai jamais connue auparavant', a admis Toprak.",
        "Malgré quelques chutes lors des premiers tests, son équipe reste confiante. Son talent naturel pour le freinage tardif devrait devenir un atout majeur une fois qu'il aura maîtrisé l'électronique complexe du MotoGP."
      ],
      "en": [
        "The transition from World Superbike to MotoGP is never easy, even for a talent like Toprak Razgatlioglu. After dominating SBK, the Turkish rider is discovering the complexity of Grand Prix prototypes.",
        "Michelin tires and carbon brakes require a radically different riding style than what he used on his Superbike. 'The bike is incredibly fast, but it demands precision I've never experienced before,' Toprak admitted.",
        "Despite a few crashes in early testing, his team remains confident. His natural talent for late braking is expected to become a major asset once he masters the complex MotoGP electronics."
      ],
      "es": [
        "La transición de World Superbike a MotoGP nunca es fácil, incluso para un talento como Toprak Razgatlioglu. Después de dominar SBK, el piloto turco está descubrendo la complejidad de los prototipos de Gran Premio.",
        "Los neumáticos Michelin y los frenos de carbono requieren un estilo de conducción radicalmente diferente al que usaba en su Superbike. 'La moto es increíblemente rápida, pero exige una precisión que nunca antes había experimentado', admitió Toprak.",
        "A pesar de algunas caídas en las primeras pruebas, su equipo mantiene la confianza. Se espera que su talento natural para el frenado tardío se convierta en una ventaja importante una vez que domine la compleja electrónica de MotoGP."
      ],
      "it": [
        "Il passaggio dalla World Superbike alla MotoGP non è mai facile, nemmeno per un talento come Toprak Razgatlioglu. Dopo aver dominato la SBK, il pilota turco sta scoprendo la complessità dei prototipi del Gran Premio.",
        "I pneumatici Michelin e i freni in carbonio richiedono uno stile di guida radicalmente diverso da quello utilizzato sulla sua Superbike. 'La moto è incredibilmente veloce, ma richiede una precisione che non ho mai sperimentato prima', ha ammesso Toprak.",
        "Nonostante alcune cadute nei primi test, la sua squadra rimane fiduciosa. Il suo talento naturale per la frenata tardiva dovrebbe diventare una risorsa importante una volta acquisita la padronanza della complessa elettronica della MotoGP."
      ]
    }
  },
,
  {
    "id": "md-preview-of-2026-motogp-championship-series",
    "title": {
      "fr": "Aperçu MD de la saison MotoGP 2026",
      "en": "MD Preview of 2026 MotoGP Championship Series",
      "es": "Avance MD de la temporada MotoGP 2026",
      "it": "Anteprima MD della stagione MotoGP 2026"
    },
    "excerpt": {
      "fr": "Tout ce que vous devez savoir avant le coup d'envoi de la saison 2026.",
      "en": "Everything you need to know before the 2026 season kicks off.",
      "es": "Todo lo que necesitas saber antes de que comience la temporada 2026.",
      "it": "Tutto quello che c'è da sapere prima dell'inizio della stagione 2026."
    },
    "image": importNewsImgSorted25,
    "category": "Racing",
    "readTime": "4 min",
    "body": {
      "fr": [
        "La saison 2026 de MotoGP s'annonce comme l'une des plus imprévisibles de la décennie. Avec de nouveaux règlements techniques visant à réduire l'aéro et les dispositifs de hauteur de caisse, le pilotage pur revient sur le devant de la scène.",
        "Les transferts de pilotes ont également secoué le paddock. Marc Marquez chez Ducati d'usine et le passage de Jorge Martin chez Aprilia créent une dynamique totalement nouvelle.",
        "Nous prévoyons une lutte acharnée entre quatre constructeurs. Aprilia semble avoir pris une légère avance lors des tests hivernaux, mais Ducati reste la référence en termes de puissance brute et de données collectées."
      ],
      "en": [
        "The 2026 MotoGP season is shaping up to be one of the most unpredictable of the decade. With new technical regulations aimed at reducing aero and ride-height devices, pure riding is coming back to the forefront.",
        "Rider transfers have also shaken up the paddock. Marc Marquez at factory Ducati and Jorge Martin's move to Aprilia create a totally new dynamic.",
        "We expect a fierce battle between four manufacturers. Aprilia seems to have taken a slight lead in winter testing, but Ducati remains the benchmark in terms of raw power and collected data."
      ],
      "es": [
        "La temporada 2026 de MotoGP se perfila como una de las más impredecibles de la década. Con nuevas regulaciones técnicas destinadas a reducir la aerodinámica y los dispositivos de altura, la conducción pura vuelve a estar a la vanguardia.",
        "Los traspasos de pilotos también han sacudido el paddock. Marc Márquez en la Ducati de fábrica y el paso de Jorge Martín a Aprilia crean una dinámica totalmente nueva.",
        "Esperamos una batalla feroz entre cuatro fabricantes. Aprilia parece haber tomado una ligera ventaja en las pruebas de invierno, pero Ducati sigue siendo el punto de referencia en términos de potencia bruta y datos recopilados."
      ],
      "it": [
        "La stagione MotoGP 2026 si preannuncia come una delle più imprevedibili del decennio. Con i nuovi regolamenti tecnici volti a ridurre l'aerodinamica e i dispositivi di altezza, la guida pura sta tornando alla ribalta.",
        "Anche i trasferimenti dei piloti hanno scosso il paddock. Marc Marquez alla Ducati ufficiale e il passaggio di Jorge Martin all'Aprilia creano una dinamica totalmente nuova.",
        "Ci aspettiamo una battaglia feroce tra quattro produttori. L'Aprilia sembra aver preso un leggero vantaggio nei test invernali, ma la Ducati rimane il punto di riferimento in termini di potenza pura e dati raccolti."
      ]
    }
  },
,
  {
    "id": "new-bmw-f-450-gs-debuts-at-eicma-riding-fest",
    "title": {
      "fr": "La nouvelle BMW F 450 GS fait ses débuts à l'EICMA Riding Fest",
      "en": "New BMW F 450 GS Debuts at EICMA Riding Fest",
      "es": "La nueva BMW F 450 GS debuta en el EICMA Riding Fest",
      "it": "All'EICMA Riding Fest in prova c'è anche la nuova BMW F 450 GS"
    },
    "excerpt": {
      "fr": "BMW Motorrad présente l'adventure compacte F 450 GS lors de l'EICMA Riding Fest à Misano.",
      "en": "BMW Motorrad debuts the new F 450 GS adventure bike at the EICMA Riding Fest in Misano.",
      "es": "BMW Motorrad presenta la nueva moto de aventura F 450 GS en el EICMA Riding Fest de Misano.",
      "it": "BMW Motorrad porta al debutto dinamico la nuova adventure bike F 450 GS a Misano."
    },
    "image": newsNew0,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "BMW Motorrad, parmi les marques présentes à l'EICMA Riding Fest 2026 de Misano, lance le début dynamique de la nouvelle moto d'aventure F 450 GS.",
        "Conçue pour les détenteurs du permis A2, la nouvelle adventure compacte combine accessibilité et esprit GS, grâce au bicylindre en ligne de 420 cm3 et 48 ch, à l'embrayage Easy Ride et à des solutions techniques dérivées des modèles haut de gamme.",
        "Lors de l'événement de Misano, qui en est à sa troisième édition cette année, le public pourra l'essayer en participant à des tests dédiés, afin d'évaluer son agilité, son confort et sa polyvalence aussi bien sur asphalte qu'en tout-terrain.",
        "Outre la F 450 GS, toute la gamme BMW Motorrad sera disponible, tandis qu'en piste il sera possible d'enfourcher la BMW S 1000 RR pour vivre une expérience de conduite immersive."
      ],
      "en": [
        "BMW Motorrad, among the brands present at the EICMA Riding Fest 2026 in Misano, brings the new F 450 GS adventure bike to its dynamic debut.",
        "Designed for A2 license holders, the new compact adventure combines accessibility and GS spirit, thanks to the 420 cc, 48 hp parallel-twin, the Easy Ride Clutch, and technical solutions derived from high-end models.",
        "During the Misano event, now in its third edition, the public will be able to try it by participating in dedicated test rides, evaluating its agility, comfort, and versatility on both asphalt and off-road.",
        "In addition to the F 450 GS, the entire BMW Motorrad range will be available, while on the track riders can hop on the BMW S 1000 RR for an immersive riding experience."
      ],
      "es": [
        "BMW Motorrad, entre las marcas presentes en el EICMA Riding Fest 2026 de Misano, trae el debut dinámico de la nueva moto de aventura F 450 GS.",
        "Diseñada para los titulares del permiso A2, la nueva aventura compacta combina accesibilidad y espíritu GS, gracias al bicilíndrico en línea de 420 cc y 48 CV, el embrague Easy Ride Clutch y soluciones técnicas derivadas de los modelos de gama alta.",
        "Durante el evento de Misano, que este año llega a su tercera edición, el público podrá probarla participando en pruebas de conducción dedicadas, para evaluar su agilidad, confort y versatilidad tanto en asfalto como en off-road.",
        "Además de la F 450 GS, estará disponible toda la gama de BMW Motorrad, mientras que en pista se podrá subir a la BMW S 1000 RR para vivir una experiencia de conducción envolvente."
      ],
      "it": [
        "BMW Motorrad, tra i brand presenti all’EICMA Riding Fest 2026 di Misano, porta al debutto dinamico la nuova adventure bike F 450 GS.",
        "Pensata per i possessori di patente A2, la nuova adventure compatta combina accessibilità e spirito GS, grazie al bicilindrico in linea da 420 cc e 48 CV, alla frizione Easy Ride Clutch e a soluzioni tecniche derivate dai modelli di fascia alta.",
        "Durante l’evento di Misano, il pubblico potrà provarla partecipando a test ride dedicati, così da valutarne agilità, comfort e versatilità sia su asfalto sia in off-road.",
        "Oltre alla F 450 GS, sarà disponibile l’intera gamma BMW Motorrad, mentre in pista si potrà salire in sella alla BMW S 1000 RR per vivere un’esperienza di guida coinvolgente."
      ]
    }
  },
,
  {
    "id": "benelli-bkx-300-and-bkx-300-s-two-souls-one-engine",
    "title": {
      "fr": "Benelli BKX 300 et BKX 300 S : deux âmes, un seul moteur",
      "en": "Benelli BKX 300 and BKX 300 S: Two Souls, One Engine",
      "es": "Benelli BKX 300 y BKX 300 S: dos almas, un solo motor",
      "it": "Benelli BKX 300 e BKX 300 S due anime, un solo motore"
    },
    "excerpt": {
      "fr": "Benelli présente les nouvelles BKX 300 et BKX 300 S, partageant le même cœur mais avec des personnalités distinctes.",
      "en": "Benelli introduces the new BKX 300 and BKX 300 S, sharing the same heart but with distinct personalities.",
      "es": "Benelli presenta las nuevas BKX 300 y BKX 300 S, que comparten el mismo corazón pero con personalidades distintas.",
      "it": "Benelli presenta le nuove BKX 300 e BKX 300 S, che condividono lo stesso cuore ma con personalità distinte."
    },
    "image": newsNew2,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Benelli propose deux interprétations différentes autour du même moteur de 300 cm3. La BKX 300 est l'aventure compacte, tandis que la BKX 300 S est la version naked plus urbaine.",
        "Le moteur est un monocylindre à refroidissement liquide développant environ 30 ch, parfait pour les jeunes motards et ceux qui recherchent une machine légère et économe.",
        "Le design est moderne et distinctif, avec des lignes tendues qui rappellent les modèles de plus grosse cylindrée de la marque de Pesaro."
      ],
      "en": [
        "Benelli offers two different interpretations around the same 300 cc engine. The BKX 300 is the compact adventure, while the BKX 300 S is the more urban naked version.",
        "The engine is a liquid-cooled single-cylinder developing around 30 hp, perfect for young riders and those looking for a lightweight and economical machine.",
        "The design is modern and distinctive, with sharp lines reminiscent of the larger displacement models from the Pesaro brand."
      ],
      "es": [
        "Benelli ofrece dos interpretaciones diferentes en torno al mismo motor de 300 cc. La BKX 300 es la aventura compacta, mientras que la BKX 300 S es la versión naked más urbana.",
        "El motor es un monocilíndrico refrigerado por líquido que desarrolla unos 30 CV, perfecto para los jóvenes motoristas y los que buscan una máquina ligera y económica.",
        "El diseño es moderno y distintivo, con líneas afiladas que recuerdan a los modelos de mayor cilindrada de la marca de Pesaro."
      ],
      "it": [
        "Benelli propone due diverse interpretazioni attorno allo stesso motore da 300 cc. La BKX 300 è l'adventure compatta, mentre la BKX 300 S è la versione naked più urbana.",
        "Il motore è un monocilindrico raffreddato a liquido che sviluppa circa 30 CV, perfetto per i giovani motociclisti e per chi cerca una macchina leggera ed economica.",
        "Il design è moderno e distintivo, con linee tese che ricordano i modelli di cilindrata superiore della casa di Pesaro."
      ]
    }
  },
,
  {
    "id": "ducati-reinvents-the-hypermotard-for-2026",
    "title": {
      "fr": "Ducati réinvente l'Hypermotard pour 2026",
      "en": "Ducati Reinvents the Hypermotard for 2026",
      "es": "Ducati reinventa la Hypermotard para 2026",
      "it": "Ducati reinventa l'Hypermotard per il 2026"
    },
    "excerpt": {
      "fr": "Plus légère, plus puissante et plus technologique : la nouvelle Hypermotard est arrivée.",
      "en": "Lighter, more powerful, and more technological: the new Hypermotard has arrived.",
      "es": "Más ligera, más potente y más tecnológica: la nueva Hypermotard ha llegado.",
      "it": "Più leggera, più potente e più tecnologica: la nuova Hypermotard è arrivata."
    },
    "image": newsNew3,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "fr": [
        "Ducati continue de repousser les limites avec l'Hypermotard 2026. La machine a subi une cure d'amincissement radicale tout en gagnant en puissance.",
        "Le nouveau châssis offre une agilité sans précédent, faisant de cette moto l'arme ultime pour les routes sinueuses et les circuits de karting.",
        "L'électronique de pointe, dérivée de la Panigale V4, assure un contrôle total dans toutes les situations, du wheeling contrôlé au freinage en courbe."
      ],
      "en": [
        "Ducati continues to push boundaries with the 2026 Hypermotard. The machine has undergone a radical weight reduction while gaining power.",
        "The new chassis offers unprecedented agility, making this bike the ultimate weapon for twisty roads and kart tracks.",
        "State-of-the-art electronics, derived from the Panigale V4, ensure total control in all situations, from controlled wheelies to cornering ABS."
      ],
      "es": [
        "Ducati sigue superando los límites con la Hypermotard 2026. La máquina se ha sometido a una reducción de peso radical a la vez que ha ganado potencia.",
        "El nuevo chasis ofrece una agilidad sin precedentes, convirtiendo a esta moto en el arma definitiva para carreteras sinuosas y pistas de karting.",
        "La electrónica de vanguardia, derivada de la Panigale V4, garantiza un control total en todas las situaciones, desde caballitos controlados hasta ABS en curva."
      ],
      "it": [
        "Ducati continua a spostare i confini con l'Hypermotard 2026. La macchina è stata sottoposta a una radicale riduzione del peso guadagnando allo stesso tempo potenza.",
        "Il nuovo telaio offre un'agilità senza precedenti, rendendo questa moto l'arma definitiva per le strade tortuose e le piste da kart.",
        "L'elettronica all'avanguardia, derivata dalla Panigale V4, assicura il controllo totale in tutte le situazioni, dalle impennate controllate all'ABS cornering."
      ]
    }
  },
,
  {
    "id": "honda-debuts-v3r-900-prototype-at-eicma",
    "title": {
      "fr": "Honda présente le prototype V3R 900 à l'EICMA",
      "en": "Honda Debuts V3R 900 Prototype at EICMA",
      "es": "Honda presenta el prototipo V3R 900 en el EICMA",
      "it": "Honda debutta con il prototipo V3R 900 a EICMA"
    },
    "excerpt": {
      "fr": "Le retour du moteur V3 ? Honda surprend tout le monde avec un concept innovant.",
      "en": "Return of the V3 engine? Honda surprises everyone with an innovative concept.",
      "es": "¿Vuelve el motor V3? Honda sorprende a todos con un concepto innovador.",
      "it": "Il ritorno del motore V3? Honda sorprende tutti con un concetto innovativo."
    },
    "image": newsNew4,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "fr": [
        "Honda a fait sensation à l'EICMA en dévoilant le prototype V3R 900. Cette machine utilise une configuration moteur V3 unique, une première depuis longtemps dans la production de série.",
        "Le moteur combine deux cylindres à l'avant et un à l'arrière, offrant une compacité exceptionnelle et une sonorité unique.",
        "Bien qu'il s'agisse encore d'un prototype, Honda a laissé entendre qu'une version de production pourrait voir le jour très bientôt, ciblant le segment des sportives de moyenne cylindrée."
      ],
      "en": [
        "Honda caused a stir at EICMA by unveiling the V3R 900 prototype. This machine uses a unique V3 engine configuration, a first in mass production for a long time.",
        "The engine combines two cylinders at the front and one at the rear, offering exceptional compactness and a unique sound.",
        "While still a prototype, Honda hinted that a production version could arrive very soon, targeting the mid-size sportbike segment."
      ],
      "es": [
        "Honda causó un gran revuelo en el EICMA al presentar el prototipo V3R 900. Esta máquina utiliza una configuración de motor V3 única, la primera en la producción en serie en mucho tiempo.",
        "El motor combina dos cilindros en la parte delantera y uno en la trasera, ofreciendo una compacidad excepcional y un sonido único.",
        "Aunque todavía es un prototipo, Honda insinuó que una versión de producción podría llegar muy pronto, apuntando al segmento de las motos deportivas de tamaño medio."
      ],
      "it": [
        "Honda ha fatto scalpore a EICMA svelando il prototipo V3R 900. Questa macchina utilizza un'unica configurazione del motore V3, una prima assoluta nella produzione di serie da molto tempo a questa parte.",
        "Il motore combina due cilindri all'anteriore e uno al posteriore, offrendo un'eccezionale compattezza e un sound unico.",
        "Sebbene sia ancora un prototipo, Honda ha lasciato intendere che una versione di produzione potrebbe arrivare molto presto, puntando al segmento delle sportive di media cilindrata."
      ]
    }
  },
,
  {
    "id": "ktm-unveils-production-990-rc-r",
    "title": {
      "fr": "KTM dévoile la 990 RC R de série",
      "en": "KTM Unveils Production 990 RC R",
      "es": "KTM presenta la 990 RC R de producción",
      "it": "KTM svela la 990 RC R di produzione"
    },
    "excerpt": {
      "fr": "La supersportive que tout le monde attendait est enfin là. Prête pour la course ?",
      "en": "The supersport bike everyone was waiting for is finally here. Ready to race?",
      "es": "La moto supersport que todos esperaban por fin está aquí. ¿Lista para correr?",
      "it": "La supersportiva che tutti stavano aspettando è finalmente arrivata. Ready to race?"
    },
    "image": newsNew5,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "fr": [
        "KTM revient en force sur le segment des sportives de route avec la 990 RC R. Basée sur le moteur de la 990 Duke, cette machine est carénée et optimisée pour la piste.",
        "Avec un cadre en acier tubulaire rigide et des suspensions WP haut de gamme, elle promet d'être l'une des motos les plus efficaces de sa catégorie.",
        "Le design est radical, avec des ailerons aérodynamiques intégrés et une position de conduite purement sportive."
      ],
      "en": [
        "KTM returns in force to the road sport segment with the 990 RC R. Based on the 990 Duke engine, this machine is faired and optimized for the track.",
        "With a rigid tubular steel frame and high-end WP suspension, it promises to be one of the most efficient bikes in its category.",
        "The design is radical, with integrated aerodynamic wings and a purely sporty riding position."
      ],
      "es": [
        "KTM vuelve con fuerza al segmento de las deportivas de carretera con la 990 RC R. Basada en el motor de la 990 Duke, esta máquina está carenada y optimizada para la pista.",
        "Con un chasis rígido de tubo de acero y suspensiones WP de alta gama, promete ser una de las motos más eficientes de su categoría.",
        "El diseño es radical, con alerones aerodinámicos integrados y una posición de conducción puramente deportiva."
      ],
      "it": [
        "KTM torna in forze nel segmento delle sportive stradali con la 990 RC R. Basata sul motore della 990 Duke, questa macchina è carenata e ottimizzata per la pista.",
        "Con un rigido telaio in tubi d'acciaio e sospensioni WP di alta gamma, promette di essere una delle moto più efficaci della sua categoria.",
        "Il design è radicale, con ali aerodinamiche integrate e una posizione di guida puramente sportiva."
      ]
    }
  },
,
  {
    "id": "moto-morini-range-ready-for-test-rides-at-eicma",
    "title": {
      "fr": "Moto Morini : la gamme prête pour les essais à l'EICMA",
      "en": "Moto Morini: Range Ready for Test Rides at EICMA",
      "es": "Moto Morini: gama lista para pruebas de manejo en el EICMA",
      "it": "Moto Morini, i modelli in gamma pronti per i test ride"
    },
    "excerpt": {
      "fr": "Découvrez et essayez les nouveaux modèles Moto Morini dans l'espace Touring Experience.",
      "en": "Discover and try the new Moto Morini models in the Touring Experience area.",
      "es": "Descubre y prueba los nuevos modelos de Moto Morini en el área Touring Experience.",
      "it": "Scopri e prova i nuovi modelli Moto Morini nell'area Touring Experience."
    },
    "image": newsNew6,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Moto Morini invite les passionnés à tester ses derniers modèles lors de l'EICMA. Des machines comme la X-Cape et la Seiemmezzo sont prêtes pour l'action.",
        "L'accent est mis sur l'expérience de conduite, avec des parcours dédiés pour apprécier le caractère des moteurs italiens.",
        "C'est l'occasion idéale pour les futurs acheteurs de se faire une idée précise des performances et du confort offerts par la marque."
      ],
      "en": [
        "Moto Morini invites enthusiasts to test its latest models during EICMA. Machines like the X-Cape and Seiemmezzo are ready for action.",
        "The focus is on the riding experience, with dedicated routes to appreciate the character of the Italian engines.",
        "It's the perfect opportunity for future buyers to get a clear idea of the performance and comfort offered by the brand."
      ],
      "es": [
        "Moto Morini invita a los entusiastas a probar sus últimos modelos durante el EICMA. Máquinas como la X-Cape y la Seiemmezzo están listas para la acción.",
        "El objetivo es la experiencia de conducción, con rutas dedicadas para apreciar el carácter de los motores italianos.",
        "Es la oportunidad perfecta para que los futuros compradores se hagan una idea clara de las prestaciones y el confort que ofrece la marca."
      ],
      "it": [
        "Moto Morini invita gli appassionati a provare i suoi ultimi modelli durante EICMA. Macchine come la X-Cape e la Seiemmezzo sono pronte per l'azione.",
        "L'accento è posto sull'esperienza di guida, con percorsi dedicati per apprezzare il carattere dei motori italiani.",
        "È l'opportunità ideale per i futuri acquirenti di farsi un'idea precisa delle prestazioni e del comfort offerti dal marchio."
      ]
    }
  },
,
  {
    "id": "morbidelli-n125v-ride-it-at-16-dream-big",
    "title": {
      "fr": "Morbidelli N125V : se conduit à 16 ans mais fait rêver en grand",
      "en": "Morbidelli N125V: Ride it at 16, Dream Big",
      "es": "Morbidelli N125V: se conduce a los 16 años pero hace soñar en grande",
      "it": "Morbidelli N125V, si guida a 16 anni ma fa sognare in grande"
    },
    "excerpt": {
      "fr": "La nouvelle petite Morbidelli veut séduire les jeunes avec un look de grande.",
      "en": "The new small Morbidelli aims to seduce young riders with big-bike looks.",
      "es": "La nueva pequeña Morbidelli pretende seducir a los jóvenes con un aspecto de moto grande.",
      "it": "La nuova piccola Morbidelli punta a sedurre i giovani con un look da grande."
    },
    "image": newsNew7,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Morbidelli présente la N125V, une moto accessible dès 16 ans qui ne fait aucun compromis sur le style.",
        "Avec son design agressif et ses composants de qualité, elle offre une première expérience valorisante aux nouveaux motards.",
        "Le moteur 125 cm3 est nerveux et économe, idéal pour les déplacements urbains et les premières balades."
      ],
      "en": [
        "Morbidelli introduces the N125V, a bike accessible from age 16 that makes no compromise on style.",
        "With its aggressive design and quality components, it offers a rewarding first experience for new riders.",
        "The 125 cc engine is punchy and economical, ideal for urban commuting and first trips."
      ],
      "es": [
        "Morbidelli presenta la N125V, una moto accesible desde los 16 años que no renuncia al estilo.",
        "Con su diseño agresivo y componentes de calidad, ofrece una primera experiencia gratificante para los nuevos motoristas.",
        "El motor de 125 cc es dinámico y económico, ideal para los desplazamientos urbanos y los primeros viajes."
      ],
      "it": [
        "Morbidelli presenta la N125V, una moto accessibile già a 16 anni che non scende a compromessi con lo stile.",
        "Con il suo design aggressivo e componenti di qualità, offre una prima esperienza gratificante ai nuovi motociclisti.",
        "Il motore 125 cc è brillante ed economico, ideale per gli spostamenti urbani e le prime uscite."
      ]
    }
  },
,
  {
    "id": "mv-agusta-rush-titanio-revised-engine-and-premium-finishes",
    "title": {
      "fr": "MV Agusta Rush Titanio : moteur revu et finitions haut de gamme",
      "en": "MV Agusta Rush Titanio: Revised Engine and Premium Finishes",
      "es": "MV Agusta Rush Titanio: motor revisado y acabados de primera",
      "it": "MV Agusta Rush Titanio motore rivisto e finiture di pregio"
    },
    "excerpt": {
      "fr": "L'exclusivité poussée à l'extrême : titane, carbone et puissance brute.",
      "en": "Exclusivity pushed to the extreme: titanium, carbon, and raw power.",
      "es": "Exclusividad llevada al extremo: titanio, carbono y potencia bruta.",
      "it": "Esclusività spinta all'estremo: titanio, carbonio e potenza pura."
    },
    "image": newsNew8,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "fr": [
        "MV Agusta dévoile la Rush Titanio, une édition encore plus exclusive de son hyper-naked. Comme son nom l'indique, le titane est omniprésent.",
        "Le moteur a été optimisé pour offrir encore plus de caractère, tandis que les suspensions électroniques de dernière génération assurent une tenue de route parfaite.",
        "C'est un chef-d'œuvre de design et d'ingénierie, produit en nombre très limité pour les collectionneurs les plus exigeants."
      ],
      "en": [
        "MV Agusta unveils the Rush Titanio, an even more exclusive edition of its hyper-naked. As the name suggests, titanium is everywhere.",
        "The engine has been optimized to offer even more character, while the latest generation electronic suspension ensures perfect handling.",
        "It's a masterpiece of design and engineering, produced in very limited numbers for the most demanding collectors."
      ],
      "es": [
        "MV Agusta presenta la Rush Titanio, una edición aún más exclusiva de su hyper-naked. Como su nombre indica, el titanio está por todas partes.",
        "El motor se ha optimizado para ofrecer aún más carácter, mientras que la suspensión electrónica de última generación garantiza un manejo perfecto.",
        "Es una obra maestra del diseño y la ingeniería, producida en unidades muy limitadas para los coleccionistas más exigentes."
      ],
      "it": [
        "MV Agusta svela la Rush Titanio, un'edizione ancora più esclusiva della sua hyper-naked. Come suggerisce il nome, il titanio è onnipresente.",
        "Il motore è stato ottimizzato per offrire ancora più carattere, mentre le sospensioni elettroniche di ultima generazione assicurano una tenuta di strada perfetta.",
        "È un capolavoro di design e ingegneria, prodotto in numero limitatissimo per i collezionisti più esigenti."
      ]
    }
  },
,
  {
    "id": "suzuki-goes-retro-with-2026-gsx-8t-and-gsx-8tt",
    "title": {
      "fr": "Suzuki joue la carte rétro avec les GSX-8T et GSX-8TT 2026",
      "en": "Suzuki Goes Retro With 2026 GSX-8T and GSX-8TT",
      "es": "Suzuki se vuelve retro con las GSX-8T y GSX-8TT de 2026",
      "it": "Suzuki Goes Retro With 2026 GSX-8T and GSX-8TT"
    },
    "excerpt": {
      "fr": "Suzuki s'inspire de son passé pour créer deux nouvelles variantes de la GSX-8.",
      "en": "Suzuki draws inspiration from its past to create two new GSX-8 variants.",
      "es": "Suzuki se inspira en su pasado para crear dos nuevas variantes de la GSX-8.",
      "it": "Suzuki si ispira al suo passato per creare due nuove varianti della GSX-8."
    },
    "image": newsNew9,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Suzuki élargit sa gamme GSX-8 avec les modèles T et TT, arborant des lignes classiques rappelant les années 80.",
        "Sous ce look rétro se cache la technologie moderne du bicylindre de 776 cm3, offrant un équilibre parfait entre performance et facilité.",
        "La version TT est plus orientée 'Track' avec une selle monoplace et des suspensions raffermies, tandis que la T privilégie le style café racer."
      ],
      "en": [
        "Suzuki expands its GSX-8 range with the T and TT models, featuring classic lines reminiscent of the 80s.",
        "Beneath this retro look lies the modern technology of the 776 cc parallel-twin, offering a perfect balance between performance and ease of use.",
        "The TT version is more 'Track' oriented with a single seat and firmer suspension, while the T focuses on cafe racer style."
      ],
      "es": [
        "Suzuki amplía su gama GSX-8 con los modelos T y TT, que presentan líneas clásicas que recuerdan a los años 80.",
        "Bajo este aspecto retro se esconde la tecnología moderna del bicilíndrico de 776 cc, que ofrece un equilibrio perfecto entre prestaciones y facilidad de uso.",
        "La versión TT está más orientada al 'Track' con un asiento individual y suspensiones más firmes, mientras que la T se centra en el estilo café racer."
      ],
      "it": [
        "Suzuki amplia la sua gamma GSX-8 con i modelli T e TT, caratterizzati da linee classiche che ricordano gli anni '80.",
        "Sotto questo look retrò si cela la moderna tecnologia del bicilindrico da 776 cc, che offre un perfetto equilibrio tra prestazioni e facilità d'uso.",
        "La versione TT è più orientata alla pista con sella monoposto e sospensioni più rigide, mentre la T privilegia lo stile café racer."
      ]
    }
  },
,
  {
    "id": "triumph-announces-new-trident-800",
    "title": {
      "fr": "Triumph annonce la nouvelle Trident 800",
      "en": "Triumph Announces New Trident 800",
      "es": "Triumph anuncia la nueva Trident 800",
      "it": "Triumph Announces New Trident 800"
    },
    "excerpt": {
      "fr": "La famille Trident s'agrandit avec une version 800 plus performante et mieux équipée.",
      "en": "The Trident family grows with a more powerful and better-equipped 800 version.",
      "es": "La familia Trident crece con una versión 800 más potente y mejor equipada.",
      "it": "La famiglia Trident cresce con una versione 800 più potente e meglio equipaggiata."
    },
    "image": newsNew10,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "fr": [
        "Triumph monte en gamme avec la Trident 800. Utilisant une évolution du fameux moteur trois cylindres, elle offre un couple plus généreux et une puissance accrue.",
        "Le design reste fidèle à l'esprit minimaliste et élégant de la Trident 660, mais avec des composants de freinage et de suspension de niveau supérieur.",
        "Elle se positionne comme une alternative sérieuse dans le segment des roadsters de moyenne cylindrée premium."
      ],
      "en": [
        "Triumph moves upmarket with the Trident 800. Using an evolution of the famous three-cylinder engine, it offers more generous torque and increased power.",
        "The design remains faithful to the minimalist and elegant spirit of the Trident 660, but with higher-level braking and suspension components.",
        "It positions itself as a serious alternative in the premium middleweight roadster segment."
      ],
      "es": [
        "Triumph sube de categoría con la Trident 800. Utilizando una evolución del famoso motor de tres cilindros, ofrece un par más generoso y una mayor potencia.",
        "El diseño se mantiene fiel al espíritu minimalista y elegante de la Trident 660, pero con componentes de frenado y suspensión de mayor nivel.",
        "Se posiciona como una alternativa seria en el segmento de las roadster de peso medio premium."
      ],
      "it": [
        "Triumph alza l'asticella con la Trident 800. Utilizzando un'evoluzione del famoso motore a tre cilindri, offre una coppia più generosa e una maggiore potenza.",
        "Il design rimane fedele allo spirito minimalista ed elegante della Trident 660, ma con componenti di frenata e sospensione di livello superiore.",
        "Si posiziona come una seria alternativa nel segmento delle roadster premium di media cilindrata."
      ]
    }
  },
,
  {
    "id": "yamaha-nmax-155-tech-max-more-power-with-yecvt-transmission",
    "title": {
      "fr": "Yamaha NMax 155 Tech Max : un atout avec la transmission YECVT",
      "en": "Yamaha NMax 155 Tech Max: More Power with YECVT Transmission",
      "es": "Yamaha NMax 155 Tech Max: un paso adelante con la transmisión YECVT",
      "it": "Yamaha NMax 155 Tech Max, con la trasmissione YECVT ha una marcia in più"
    },
    "excerpt": {
      "fr": "Yamaha révolutionne son scooter urbain avec une transmission électronique innovante.",
      "en": "Yamaha revolutionizes its urban scooter with an innovative electronic transmission.",
      "es": "Yamaha revoluciona su scooter urbano con una innovadora transmisión electrónica.",
      "it": "Yamaha rivoluziona il suo scooter urbano con un'innovativa trasmissione elettronica."
    },
    "image": newsNew11,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Le nouveau Yamaha NMax 155 Tech Max introduit la technologie YECVT (Yamaha Electric Continuously Variable Transmission).",
        "Cette technologie permet de choisir entre plusieurs modes de conduite et offre une fonction 'Downshift' pour des reprises plus vigoureuses.",
        "En plus de son moteur Blue Core Euro5+, le Tech Max dispose d'un écran TFT couleur avec navigation Garmin intégrée."
      ],
      "en": [
        "The new Yamaha NMax 155 Tech Max introduces YECVT (Yamaha Electric Continuously Variable Transmission) technology.",
        "This technology allows riders to choose between different riding modes and offers a 'Downshift' function for more vigorous acceleration.",
        "In addition to its Blue Core Euro5+ engine, the Tech Max features a color TFT screen with integrated Garmin navigation."
      ],
      "es": [
        "La nueva Yamaha NMax 155 Tech Max introduce la tecnología YECVT (Yamaha Electric Continuously Variable Transmission).",
        "Esta tecnología permite elegir entre diferentes modos de conducción y ofrece una función 'Downshift' para una aceleración más vigorosa.",
        "Además de su motor Blue Core Euro5+, la Tech Max cuenta con una pantalla TFT en color con navegación Garmin integrada."
      ],
      "it": [
        "Il nuovo Yamaha NMax 155 Tech Max introduce la tecnologia YECVT (Yamaha Electric Continuously Variable Transmission).",
        "Questa tecnologia permette di scegliere tra diverse modalità di guida e offre una funzione 'Downshift' per riprese più vigorose.",
        "Oltre al motore Blue Core Euro5+, il Tech Max dispone di uno schermo TFT a colori con navigazione Garmin integrata."
      ]
    }
  },
,
  {
    "id": "zontes-zt368-g-etc-more-technology-and-comfort-for-2026",
    "title": {
      "fr": "Zontes ZT368-G ETC : plus de technologie et de confort pour 2026",
      "en": "Zontes ZT368-G ETC: More Technology and Comfort for 2026",
      "es": "Zontes ZT368-G ETC: más tecnología y confort para 2026",
      "it": "Zontes ZT368-G ETC, più tecnologia e comfort per il 2026"
    },
    "excerpt": {
      "fr": "Le maxi-scooter adventure de Zontes s'offre une mise à jour majeure avec le ride-by-wire.",
      "en": "Zontes' adventure maxi-scooter gets a major update with ride-by-wire.",
      "es": "El maxi-scooter adventure de Zontes recibe una importante actualización con el ride-by-wire.",
      "it": "Il maxi-scooter adventure di Zontes riceve un importante aggiornamento con il ride-by-wire."
    },
    "image": newsNew12,
    "category": "New Bikes",
    "readTime": "2 min",
    "body": {
      "fr": [
        "Zontes renouvelle son ZT368-G avec la version ETC. La grande nouveauté est l'adoption de l'accélérateur électronique ride-by-wire.",
        "Cette évolution permet l'ajout d'un régulateur de vitesse et d'une gestion du moteur plus fine. Le confort est également amélioré avec une selle et des poignées chauffantes de série.",
        "Le moteur de 368 cm3 reste une référence en termes de puissance pour la catégorie, développant près de 39 ch."
      ],
      "en": [
        "Zontes updates its ZT368-G with the ETC version. The big news is the adoption of ride-by-wire electronic throttle.",
        "This evolution allows the addition of cruise control and finer engine management. Comfort is also improved with heated seat and grips as standard.",
        "The 368 cc engine remains a benchmark in terms of power for the category, developing nearly 39 hp."
      ],
      "es": [
        "Zontes renueva su ZT368-G con la versión ETC. La gran novedad è la adopción del acelerador electrónico ride-by-wire.",
        "Esta evolución permite la incorporación de control de crucero y una gestión del motor más precisa. El confort también mejora con asiento y puños calefactables de serie.",
        "El motor de 368 cc sigue siendo una referencia en cuanto a potencia para la categoría, desarrollando casi 39 CV."
      ],
      "it": [
        "Zontes rinnova il suo ZT368-G con la versione ETC. La grande novità è l'adozione dell'acceleratore elettronico ride-by-wire.",
        "Questa evoluzione permette l'aggiunta del cruise control e di una gestione del motore più fluida. Il comfort è migliorato anche grazie alla sella e alle manopole riscaldate di serie.",
        "Il motore da 368 cc rimane un punto di riferimento in termini di potenza per la categoria, erogando quasi 39 CV."
      ]
    }
  }
];


export type Review = {
  id: string;
  title: LocalizedString;
  subtitle: LocalizedString;
  image: string;
  rating: number;
  excerpt: LocalizedString;
  specs: { label: LocalizedString | string; value: LocalizedString | string }[];
  pros: LocalizedBody;
  cons: LocalizedBody;
  videoUrl?: string;
};

export const reviews: Review[] = [
  {
    "id": "yamaha-tenere-700-world-raid-2026",
    "title": {
      "fr": "Yamaha Ténéré 700 World Raid",
      "en": "Yamaha Ténéré 700 World Raid",
      "es": "Yamaha Ténéré 700 World Raid",
      "it": "Yamaha Ténéré 700 World Raid"
    },
    "subtitle": {
      "fr": "Conçue pour ceux qui ne suivent pas les routes",
      "en": "Built for those who don’t follow roads",
      "es": "Construida para quienes no siguen caminos",
      "it": "Costruita per chi non segue le strade"
    },
    "image": news5,
    "rating": 4.9,
    "excerpt": {
      "fr": "L'aventure n'attend pas — elle appelle. Découvrez la nouvelle Yamaha Ténéré 700 World Raid 2026.",
      "en": "Adventure isn’t waiting — it’s calling. Meet the new Yamaha Ténéré 700 World Raid 2026.",
      "es": "La aventura no espera, llama. Conoce la nueva Yamaha Ténéré 700 World Raid 2026.",
      "it": "L'avventura non aspetta, chiama. Scopri la nuova Yamaha Ténéré 700 World Raid 2026."
    },
    "specs": [
      {
        "label": {
          "fr": "Marque",
          "en": "Make",
          "es": "Marca",
          "it": "Marca"
        },
        "value": "Yamaha"
      },
      {
        "label": {
          "fr": "Modèle",
          "en": "Model",
          "es": "Modelo",
          "it": "Modello"
        },
        "value": "Ténéré 700 World Raid 2026"
      },
      {
        "label": {
          "fr": "Catégorie",
          "en": "Category",
          "es": "Categoría",
          "it": "Categoria"
        },
        "value": {
          "fr": "Aventure",
          "en": "Adventure",
          "es": "Aventura",
          "it": "Adventure"
        }
      }
    ],
    "pros": {
      "fr": [
        "Capacité tout-terrain ultime",
        "Fiabilité légendaire"
      ],
      "en": [
        "Ultimate off-road capability",
        "Legendary reliability"
      ],
      "es": [
        "Máxima capacidad fuera de carretera",
        "Fiabilidad legendaria"
      ],
      "it": [
        "Massima capacità fuoristrada",
        "Affidabilità leggendaria"
      ]
    },
    "cons": {
      "fr": [
        "Hauteur de selle importante"
      ],
      "en": [
        "Tall seat height"
      ],
      "es": [
        "Altura de asiento elevada"
      ],
      "it": [
        "Altezza sella elevata"
      ]
    },
    "videoUrl": "https://www.instagram.com/reel/DQ7kRsjjN4W/"
  },
  {
    "id": "bmw-1300-gs-vs-ktm-1390",
    "title": {
      "fr": "BMW 1300 GS vs KTM 1390",
      "en": "BMW 1300 GS vs KTM 1390",
      "es": "BMW 1300 GS vs KTM 1390",
      "it": "BMW 1300 GS vs KTM 1390"
    },
    "subtitle": {
      "fr": "Le duel ultime de l'aventure",
      "en": "The Ultimate Adventure Showdown",
      "es": "El duelo definitivo de aventura",
      "it": "L'ultima sfida adventure"
    },
    "image": reviewFeatured,
    "rating": 4.8,
    "excerpt": {
      "fr": "Le combat pour la suprématie en tout-terrain : Équilibre allemand contre puissance autrichienne.",
      "en": "The battle for off-road supremacy: German balance vs Austrian power.",
      "es": "La batalla por la supremacía fuera de carretera: equilibrio alemán vs. potencia austriaca.",
      "it": "La battaglia per la supremazia fuoristrada: equilibrio tedesco contro potenza austriaca."
    },
    "specs": [
      {
        "label": {
          "fr": "Moteur BMW",
          "en": "BMW Engine",
          "es": "Motor BMW",
          "it": "Motore BMW"
        },
        "value": "1,300 cc Boxer"
      },
      {
        "label": {
          "fr": "Puissance KTM",
          "en": "KTM Power",
          "es": "Potencia KTM",
          "it": "Potenza KTM"
        },
        "value": "173 HP"
      },
      {
        "label": {
          "fr": "Focus",
          "en": "Focus",
          "es": "Enfoque",
          "it": "Focus"
        },
        "value": {
          "fr": "Tout-terrain & Confort",
          "en": "Off-road & Comfort",
          "es": "Off-road y Confort",
          "it": "Off-road e Comfort"
        }
      }
    ],
    "pros": {
      "fr": [
        "Confort longue distance (BMW)",
        "Puissance extrême (KTM)",
        "Technologie de pointe"
      ],
      "en": [
        "Comfortable for long distances (BMW)",
        "Extreme power and adrenaline (KTM)",
        "Top tier technology"
      ],
      "es": [
        "Confort para largas distancias (BMW)",
        "Potencia extrema y adrenalina (KTM)",
        "Tecnología de primer nivel"
      ],
      "it": [
        "Comfort per lunghe distanze (BMW)",
        "Potenza estrema e adrenalina (KTM)",
        "Tecnologia di alto livello"
      ]
    },
    "cons": {
      "fr": [
        "Très agressive (KTM)",
        "Lourde pour certains (BMW)"
      ],
      "en": [
        "Very aggressive (KTM)",
        "Heavy for some (BMW)"
      ],
      "es": [
        "Muy agresiva (KTM)",
        "Pesada para algunos (BMW)"
      ],
      "it": [
        "Molto aggressiva (KTM)",
        "Pesante per alcuni (BMW)"
      ]
    },
    "videoUrl": "https://www.instagram.com/reel/DXZwsUlDDvP/"
  },
  {
    "id": "comfort-vs-adrenaline",
    "title": {
      "fr": "Confort vs Adrénaline",
      "en": "Comfort vs Adrenaline",
      "es": "Confort vs Adrenalina",
      "it": "Comfort vs Adrenalina"
    },
    "subtitle": {
      "fr": "Choisir votre prochaine aventure",
      "en": "Choosing your next adventure",
      "es": "Eligiendo tu próxima aventura",
      "it": "Scegliere la tua prossima avventura"
    },
    "image": news1,
    "rating": 4.5,
    "excerpt": {
      "fr": "Certains cherchent le confort pour les longues routes... d'autres cherchent l'adrénaline pure. Que choisirez-vous ?",
      "en": "Some look for comfort for long roads... others look for pure adrenaline. What will you choose?",
      "es": "Algunos buscan confort para rutas largas... otros buscan adrenalina pura. ¿Qué elegirás?",
      "it": "Alcuni cercano il comfort per le lunghe strade... altri cercano pura adrenalina. Cosa sceglierai?"
    },
    "specs": [
      {
        "label": {
          "fr": "Type",
          "en": "Type",
          "es": "Tipo",
          "it": "Tipo"
        },
        "value": {
          "fr": "Touring vs Sport",
          "en": "Touring vs Sport",
          "es": "Touring vs Sport",
          "it": "Touring vs Sport"
        }
      },
      {
        "label": {
          "fr": "Objectif",
          "en": "Goal",
          "es": "Objetivo",
          "it": "Obiettivo"
        },
        "value": {
          "fr": "Confort / Frissons",
          "en": "Comfort / Thrills",
          "es": "Confort / Emociones",
          "it": "Comfort / Emozioni"
        }
      }
    ],
    "pros": {
      "fr": [
        "Confort longue distance",
        "Adrénaline garantie"
      ],
      "en": [
        "Long distance comfort",
        "Heart-pounding adrenaline"
      ],
      "es": [
        "Confort para largas distancias",
        "Adrenalina palpitante"
      ],
      "it": [
        "Comfort per lunghe distanze",
        "Adrenalina da batticuore"
      ]
    },
    "cons": {
      "fr": [
        "Difficile de n'en choisir qu'une"
      ],
      "en": [
        "Hard to choose just one"
      ],
      "es": [
        "Difícil elegir solo una"
      ],
      "it": [
        "Difficile sceglierne solo una"
      ]
    },
    "videoUrl": "https://www.instagram.com/reel/DW4VoiqjUce/"
  },
  {
    "id": "bmw-f450-gs",
    "title": {
      "fr": "BMW F 450 GS",
      "en": "BMW F 450 GS",
      "es": "BMW F 450 GS",
      "it": "BMW F 450 GS"
    },
    "subtitle": {
      "fr": "Le nouveau 'Monstre' du milieu de gamme",
      "en": "Meet the new “Monster” of the mid-range",
      "es": "Conoce al nuevo “Monstruo” de la gama media",
      "it": "Incontra il nuovo “Mostro” della fascia media"
    },
    "image": news2,
    "rating": 4.7,
    "excerpt": {
      "fr": "Découvrez le nouveau monstre du milieu de gamme : la BMW F 450 GS. Poids : 175 kg, Puissance : 48 ch.",
      "en": "Meet the new “Monster” of the mid-range: The BMW F450 GS. Weight: 175 kg, Power: 48 HP.",
      "es": "Conoce al nuevo “Monstruo” de la gama media: La BMW F450 GS. Peso: 175 kg, Potencia: 48 HP.",
      "it": "Incontra il nuovo “Mostro” della fascia media: La BMW F450 GS. Peso: 175 kg, Potenza: 48 HP."
    },
    "specs": [
      {
        "label": {
          "fr": "Poids",
          "en": "Weight",
          "es": "Peso",
          "it": "Peso"
        },
        "value": "175 kg"
      },
      {
        "label": {
          "fr": "Puissance",
          "en": "Power",
          "es": "Potencia",
          "it": "Potenza"
        },
        "value": "48 HP"
      },
      {
        "label": {
          "fr": "Embrayage",
          "en": "Clutch",
          "es": "Embrague",
          "it": "Frizione"
        },
        "value": "Easy Ride (Semi-Auto)"
      }
    ],
    "pros": {
      "fr": [
        "Légère (175 kg)",
        "Accessible (48 ch)",
        "Embrayage semi-auto innovant"
      ],
      "en": [
        "Lightweight at 175 kg",
        "Accessible 48 HP",
        "Innovative Semi-Auto clutch"
      ],
      "es": [
        "Ligera con 175 kg",
        "Accesible 48 HP",
        "Innovador embrague semiautomático"
      ],
      "it": [
        "Leggera a 175 kg",
        "Accessibile 48 CV",
        "Innovativa frizione semi-automatica"
      ]
    },
    "cons": {
      "fr": [
        "Manque de puissance sur autoroute"
      ],
      "en": [
        "Less power for highway cruising"
      ],
      "es": [
        "Menos potencia para crucero por autopista"
      ],
      "it": [
        "Meno potenza per la crociera in autostrada"
      ]
    },
    "videoUrl": "https://www.instagram.com/reel/DWes6MajSim/"
  },
  {
    "id": "bmw-f450-gs-first-impressions",
    "title": {
      "fr": "Impressions sur la BMW F 450 GS",
      "en": "BMW F 450 GS Impressions",
      "es": "Impresiones de la BMW F 450 GS",
      "it": "Impressioni sulla BMW F 450 GS"
    },
    "subtitle": {
      "fr": "L'aventure pure à chaque changement de vitesse",
      "en": "Pure adventure in every shift",
      "es": "Pura aventura en cada cambio",
      "it": "Pura avventura in ogni marcia"
    },
    "image": news3,
    "rating": 4.6,
    "excerpt": {
      "fr": "La BMW F 450 GS n'est pas seulement un nouveau modèle... c'est un nouveau rythme pour chaque motard.",
      "en": "The BMW F 450 GS isn’t just a new model… it’s a new rhythm for every new rider.",
      "es": "La BMW F 450 GS no es solo un nuevo modelo... es un nuevo ritmo para cada nuevo motociclista.",
      "it": "La BMW F 450 GS non è solo un nuovo modello... è un nuovo ritmo per ogni nuovo pilota."
    },
    "specs": [
      {
        "label": {
          "fr": "Focus",
          "en": "Focus",
          "es": "Enfoque",
          "it": "Focus"
        },
        "value": {
          "fr": "Nouveaux motards",
          "en": "New Riders",
          "es": "Nuevos pilotos",
          "it": "Nuovi piloti"
        }
      },
      {
        "label": {
          "fr": "Maniabilité",
          "en": "Handling",
          "es": "Manejo",
          "it": "Maneggevolezza"
        },
        "value": {
          "fr": "Légère",
          "en": "Lightweight",
          "es": "Ligera",
          "it": "Leggera"
        }
      },
      {
        "label": {
          "fr": "Contrôle",
          "en": "Control",
          "es": "Control",
          "it": "Controllo"
        },
        "value": {
          "fr": "Réel contrôle",
          "en": "Real Control",
          "es": "Control real",
          "it": "Controllo reale"
        }
      }
    ],
    "pros": {
      "fr": [
        "Idéale pour débutants",
        "Maniabilité vive"
      ],
      "en": [
        "Great for new riders",
        "Nimble handling"
      ],
      "es": [
        "Ideal para nuevos pilotos",
        "Manejo ágil"
      ],
      "it": [
        "Ottima per i nuovi piloti",
        "Manovrabilità agile"
      ]
    },
    "cons": {
      "fr": [
        "On peut s'en lasser rapidement"
      ],
      "en": [
        "Might outgrow quickly"
      ],
      "es": [
        "Podría quedarse corta pronto"
      ],
      "it": [
        "Potrebbe diventare stretta velocemente"
      ]
    },
    "videoUrl": "https://www.instagram.com/reel/DRDKvesDaF_/"
  },
  {
    "id": "suzuki-sv7gx-vs-yamaha-tracer-7",
    "title": {
      "fr": "Suzuki SV7GX vs Yamaha Tracer 7",
      "en": "Suzuki SV7GX vs Yamaha Tracer 7",
      "es": "Suzuki SV7GX vs Yamaha Tracer 7",
      "it": "Suzuki SV7GX vs Yamaha Tracer 7"
    },
    "subtitle": {
      "fr": "La bataille des moyennes cylindrées",
      "en": "The Middleweight Battle",
      "es": "La batalla de peso medio",
      "it": "La battaglia delle medie cilindrate"
    },
    "image": news4,
    "rating": 4.8,
    "excerpt": {
      "fr": "La toute nouvelle Suzuki SV7GX aux lignes agressives affronte la Yamaha Tracer 7.",
      "en": "The all-new Suzuki SV7GX with aggressive lines and agile handling faces off against the Yamaha Tracer 7.",
      "es": "La nueva Suzuki SV7GX con líneas agresivas y manejo ágil se enfrenta a la Yamaha Tracer 7.",
      "it": "La nuovissima Suzuki SV7GX dalle linee aggressive e dalla manovrabilità agile sfida la Yamaha Tracer 7."
    },
    "specs": [
      {
        "label": "Suzuki",
        "value": "SV7GX"
      },
      {
        "label": "Yamaha",
        "value": "Tracer 7"
      },
      {
        "label": {
          "fr": "Catégorie",
          "en": "Category",
          "es": "Categoría",
          "it": "Categoria"
        },
        "value": {
          "fr": "Moyenne cylindrée",
          "en": "Middleweight",
          "es": "Peso medio",
          "it": "Media cilindrata"
        }
      }
    ],
    "pros": {
      "fr": [
        "Lignes agressives (Suzuki)",
        "Maniabilité agile",
        "Fiabilité prouvée (Yamaha)"
      ],
      "en": [
        "Aggressive lines (Suzuki)",
        "Agile handling",
        "Proven reliability (Yamaha)"
      ],
      "es": [
        "Líneas agresivas (Suzuki)",
        "Manejo ágil",
        "Fiabilidad probada (Yamaha)"
      ],
      "it": [
        "Linee aggressive (Suzuki)",
        "Manovrabilità agile",
        "Affidabilità comprovata (Yamaha)"
      ]
    },
    "cons": {
      "fr": [
        "Choix difficile entre les deux"
      ],
      "en": [
        "Tough choice between the two"
      ],
      "es": [
        "Elección difícil entre las dos"
      ],
      "it": [
        "Scelta difficile tra le due"
      ]
    },
    "videoUrl": "https://www.instagram.com/reel/DRAsTIyjB74/"
  },
  {
    "id": "2025-husqvarna-vitpilen-801-md-ride-review",
    "title": {
      "fr": "Essai Husqvarna Vitpilen 801 2025",
      "en": "2025 Husqvarna Vitpilen 801: MD Ride Review",
      "es": "Prueba Husqvarna Vitpilen 801 2025",
      "it": "Recensione Husqvarna Vitpilen 801 2025"
    },
    "subtitle": {
      "fr": "Le style scandinave rencontre la puissance autrichienne",
      "en": "Scandinavian styling meets Austrian power",
      "es": "El estilo escandinavo se une a la potencia austriaca",
      "it": "Lo stile scandinavo incontra la potenza austriaca"
    },
    "image": newsNew1,
    "rating": 4.8,
    "excerpt": {
      "fr": "La nouvelle Vitpilen 801 propose un design moins polarisant et des performances impressionnantes.",
      "en": "The new Vitpilen 801 offers a less polarizing design and impressive performance.",
      "es": "La nueva Vitpilen 801 ofrece un diseño menos polarizante y unas prestaciones impresionantes.",
      "it": "La nuova Vitpilen 801 offre un design meno polarizzante e prestazioni impressionanti."
    },
    "specs": [
      {
        "label": { "fr": "Moteur", "en": "Engine", "es": "Motor", "it": "Motore" },
        "value": "799 cc Parallel-Twin"
      },
      {
        "label": { "fr": "Puissance", "en": "Power", "es": "Potencia", "it": "Potenza" },
        "value": "105 HP"
      },
      {
        "label": { "fr": "Poids", "en": "Weight", "es": "Peso", "it": "Peso" },
        "value": "180 kg (dry)"
      }
    ],
    "pros": {
      "fr": [
        "Moteur performant et souple",
        "Châssis très bien équilibré",
        "Suspensions réglables de qualité"
      ],
      "en": [
        "Potent and smooth engine",
        "Extremely well-balanced chassis",
        "Quality adjustable suspension"
      ],
      "es": [
        "Motor potente y suave",
        "Chasis muy bien equilibrado",
        "Suspensiones ajustables de calidad"
      ],
      "it": [
        "Motore potente e fluido",
        "Telaio estremamente ben bilanciato",
        "Sospensioni regolabili di qualità"
      ]
    },
    "cons": {
      "fr": [
        "Certaines fonctions électroniques sont payantes après l'essai",
        "Pneus d'origine perfectibles en conduite sportive"
      ],
      "en": [
        "Some electronic features require payment after trial period",
        "Stock tires could be better for aggressive riding"
      ],
      "es": [
        "Algunas funciones electrónicas son de pago tras el periodo de prueba",
        "Los neumáticos de serie podrían ser mejores para una conducción agresiva"
      ],
      "it": [
        "Alcune funzioni elettroniche sono a pagamento dopo il periodo di prova",
        "Gli pneumatici di serie potrebbero essere migliori per la guida sportiva"
      ]
    },
    "videoUrl": "https://www.youtube.com/watch?v=placeholder"
  }
];

export const articleBody = (a: Article, lang: string): string[] => getLocalized(a.body, lang);

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
