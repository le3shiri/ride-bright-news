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




export type Article = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: "Racing" | "New Bikes" | "Electric" | "Safety";
  readTime: string;
  body?: string[];
  extraImages?: string[];
};

export const articles: Article[] = [
  {
    id: "aprilia-and-marco-bezzecchi-beginning-to-look-unstoppable",
    title: "Aprilia and Marco Bezzecchi Beginning to Look Unstoppable",
    excerpt: "Aprilia’s Marco Bezzecchi is leading the MotoGP championship after the first four rounds of 2026. This is despite a disastrous record by Bezzecchi in Saturday’s Sprint races.",
    image: importNewsImgSorted0,
    extraImages: [],
    category: "Racing",
    readTime: "2 min",
    body: [
      "Aprilia’s Marco Bezzecchi is leading the MotoGP championship after the first four rounds of 2026. This is despite a disastrous record by Bezzecchi in Saturday’s Sprint races.",
      "Bezzecchi has scored only 6 points on Saturdays out of an available 48.  He has zero points in 3 of the 4 Sprint races so far. The reason Bezzecchi leads the championship is his incredible performance on Sundays during the full-length GP races. There, he has scored 95 points out of an available 100. This results from 3 wins and one second place. Last weekend at Jerez, Alex Marquez (Ducati), became the first rider to deprive Bezzecchi of a Sunday win this year.",
      "Of course, Aprilia has the two top spots in the championship with Bezzecchi and his teammate Jorge Martin. Along with the Trackhouse satellite team, Aprilia has 4 of the top 8 places in championship points.",
      "Theone-day testat Jerez last Monday saw Aprilia post the three fastest times. The Italian manufacturer is not standing still, but appears to continually improve its MotoGP weapon.",
      "Anything can happen in MotoGP, of course. Injuries can end the season for any rider on the grid in a heartbeat. Nevertheless, Aprilia is asserting itself as the strongest manufacturer, and Bezzecchi’s Sunday performances underscore his emergence as the top rider in MotoGP.",
      "Marc Marquez (Ducati), whomMD pickedas the favorite to win this year’s championship after his dominance last year, has struggled with a right shoulder weakened by injuries and surgeries. Thanks to Bezzecchi’s poor performance on Saturdays, Marc is only 44 points behind after the first 4 rounds. He remains in striking distance in the 22 round championship."
    ]
  },
  {
    id: "jerez-motogp-sprint-and-full-race-results",
    title: "Jerez MotoGP Sprint and Full Race Results",
    excerpt: "The MotoGP championship visited the iconic Jerez circuit this weekend, and the rabid Spanish fans had plenty to cheer about as each of the Marquez brothers took a win.",
    image: importNewsImgSorted1,
    extraImages: [],
    category: "Racing",
    readTime: "2 min",
    body: [
      "The MotoGP championship visited the iconic Jerez circuit this weekend, and the rabid Spanish fans had plenty to cheer about as each of the Marquez brothers took a win.",
      "Saturday’s Sprint race was wild. Starting on a dry track, the riders were forced to switch to wet tires with just a few laps remaining.",
      "A crash by Marc Marquez (Ducati) near the entry to pit lane proved quite fortuitous. It turns out Marquez picked up his bike, drove to his pit and switched to wet tires at exactly the right time while most other riders struggled to complete an additional lap on slicks as the sky opened up.",
      "Marc Marquez went on to win the race after a pass completed on teammate Pecco Bagnaia. Bagnaia finished second ahead of Franco Morbidelli (Ducati).",
      "For Sunday’s main event, the weather cooperated with a dry track and moderate temperatures. Alex Marquez (Ducati) was the fastest rider in the dry all weekend, and he took a relatively comfortable, convincing win ahead of championship points leader Marco Bezzecchi (Aprilia) in second and Fabio Di Giannantonio (Ducati) in third.",
      "Bezzecchi crashed out of the Sprint on Saturday, and Marc Marquez crashed out of Sunday’s GP. As a result, Bezzecchi still leads the championship ahead of his teammate Jorge Martin with defending champ Marc Marquez back in fifth position.",
      "The next round will be held at the Le Mans circuit in France. For full results and points for Saturday’s Sprint race, visit the MotoGP sitehere. For full results and points for Sunday’s MotoGP race, visit the MotoGP sitehere."
    ]
  },
  {
    id: "portuguesegp-second-place-for-bastianini-and-the-ducati-lenovo-team-at-portim-o-a-crash-for-bagnaia-following-a-coming-together-in-the-final-stages",
    title: "PortugueseGP: Second place for Bastianini and the Ducati Lenovo Team at  Portimão, a crash for Bagnaia following a coming together in the final stages",
    excerpt: "The Ducati Lenovo Team scored a second-place finish in the Portuguese GP race courtesy of Enea Bastianini, who put together an excellent performance that saw him in close proximity to the race lead up to the chequered flag. Francesco Bagnaia was out of contention with three laps to go while battling for fifth place due a coming together at turn five.",
    image: importNewsImgSorted2,
    extraImages: [],
    category: "Racing",
    readTime: "3 min",
    body: [
      "The Ducati Lenovo Team scored a second-place finish in the Portuguese GP race courtesy of Enea Bastianini, who put together an excellent performance that saw him in close proximity to the race lead up to the chequered flag. Francesco Bagnaia was out of contention with three laps to go while battling for fifth place due a coming together at turn five.",
      "Bastianini showed a consistently quick race pace throughout the 25-lap race. After setting the fastest lap of the encounter in 1:38.685secs – new race lap record at Portimão – Enea moved up to second place at the start of the final lap, securing his maiden podium of the season.",
      "After being part of the battle for the podium in the early stages, Bagnaia spent most of the encounter in a strenuous effort to defend fourth place. With three laps left, a coming together with Marc Márquez (Gresini Racing MotoGP) and the subsequent crash at turn five resulted in an early end to Pecco’s race, who was running in fifth position.",
      "The Ducati Lenovo Team will be back in action on April 12-14 at Austin’s Circuit of The Americas for the third Grand Prix of the 2024 season.",
      "Enea Bastianini (#23 Ducati Lenovo Team) – 2nd“It was a good battle. I never stopped believing until the end, but Jorge Martín pushed very hard and did a perfect race, so I had to settle for second. This is a special result for me, as Portimão isn’t among my favourite tracks. Surely, it’s a really great circuit, but prior to this weekend I had never been able to be really strong here. The three of us at the front did some push and pull throughout the race, but in the end the win was an impossible task today. Having Maverick (Viñales) ahead of me made my life a bit more complicated as he was really strong in the fourth sector, and I was never able to get close enough to him in the rest of lap. Things may have been easier had I been in front of him, but I was a bit nervous in the opening lap and made a few too many mistakes. I would like to thank the team and my family for their support because it wasn’t easy to return to top positions after such a complicated 2023 season.”",
      "Francesco Bagnaia (#1 Ducati Lenovo Team) – DNF“I got a good start but unfortunately chose the wrong line at turn three: I closed the line a bit, while the outside would have been a better choice. I wanted to overtake Enea in the early laps as I saw him having a bit of a difficult time, but at some point, I started experiencing a lack of grip at the rear-end which prevented me from pushing as hard as I wanted. We weren’t at our best and it’s clear we couldn’t find the perfect solution, even though the feeling was very good both yesterday and this morning. It’s a pity; we’ll now focus on the next race as after the warmup I felt I had the potential to battle at the front – but we weren’t able to capitalise. I’m particularly sorry because we have worked well, but we were missing something in today’s race.”"
    ]
  },
  {
    id: "brazil-motogp-sprint-and-full-race-results",
    title: "Brazil MotoGP Sprint and Full Race Results",
    excerpt: "The second round of the 2026 MotoGP championship was held in Brazil last weekend.  This is the first time in Brazil in more than two decades.  In the end, it was Aprilia and Marco Bezzecchi with the greatest success.",
    image: importNewsImgSorted3,
    extraImages: [],
    category: "Racing",
    readTime: "1 min",
    body: [
      "The second round of the 2026 MotoGP championship was held in Brazil last weekend.  This is the first time in Brazil in more than two decades.  In the end, it was Aprilia and Marco Bezzecchi with the greatest success.",
      "Saturday’s Sprint saw a close battle between the Ducatis of Marc Marquez and Fabio Di Giannantonio, with Marquez coming out on top.  Finishing third and fourth behind these two were the Aprilias of Jorge Martin and Marco Bezzecchi.",
      "Sunday’s main event saw Bezzecchi take the holeshot and lead the entire race through the checkered flag.  Martin worked his way into second place and finished there ahead of Di Giannantonio, who again battled with Marc Marquez, but was able to beat him to the flag this time.",
      "Bezzecchi has now won four straight GPs (counting the final two races last year) and leads the championship going into the COTA round coming up this weekend.",
      "For full results and points for Saturday’s Sprint race, visit the MotoGP sitehere. For full results and points for Sunday’s MotoGP race, visit the MotoGP sitehere."
    ]
  },
  {
    id: "ducati-redesigned-desertx-with-new-v-twin-and-lighter-weight",
    title: "Ducati Redesigned DesertX With New V–twin and Lighter Weight",
    excerpt: "Ducati has introduced the second generation of the DesertX adventure model. The bike is significantly redesigned and gets the new, lighter V2 engine, a new frame and other changes. The bike should be in U.S. dealerships this May priced at $16,995.",
    image: importNewsImgSorted4,
    extraImages: [importNewsImgSorted5, importNewsImgSorted6, importNewsImgSorted7],
    category: "Racing",
    readTime: "11 min",
    body: [
      "Ducati has introduced the second generation of the DesertX adventure model. The bike is significantly redesigned and gets the new, lighter V2 engine, a new frame and other changes. The bike should be in U.S. dealerships this May priced at $16,995.",
      "Here is the press release from Ducati:",
      "Borgo Panigale (Bologna, Italy), 25 February 2026 –With a new appointment at the Ducati World Première 2026 (watch the video), the Bologna based manufacturer presents the second generation of the DesertX, the bike that marked the Borgo Panigale manufacturer’s entry into the world of the most demanding off-road riding thanks to its 21-inch front wheel. Born from a concept presented at EICMA 2019, the DesertX went into production in 2021, immediately winning over many maxi-enduro and adventure touring enthusiasts thanks to its off-road performance.",
      "The second generation of DesertX is the result of extensive feedback and experience gained over years of development and competition on the most challenging terrain, including the Erzbergrodeo, the Rally of Albania, the Transanatolia and the 1,500 kilometres of desert in the NORRA Mexican 1000 Rally. The new DesertX was created with the specific aim of further improving off-road performance without sacrificing the riding pleasure typical of Ducati motorcycles.",
      "The result is a motorcycle redesigned from scratch, with an unmistakable design, easy to ride in everyday use and enjoyable on both road and off-road journeys, thanks to more efficient suspension and a new, more ergonomic and lighter fuel tank. The new DesertX is designed around the new Ducati V2 engine and its monocoque frame to be more modern, more powerful and capable of enhancing the riding skills of every rider, from the simple enthusiast to the off-road professional.",
      "The perfect engine for the DesertXThe new 890 cc Ducati V2 is the the lightest twin-cylinder engine with four valves per cylinder ever produced by Ducati and, thanks to the IVT variable intake valve timing system, unique in its segment, it delivers generous power across the entire range of use with a prompt response every time the throttle is opened.",
      "Its 110 hp are the perfect power to combine off-road effectiveness and on-road riding enjoyment. It has a maximum torque of 92 Nm, with a more sustained curve than the previous model: 70% of the maximum value is already available at 3,000 rpm, ensuring quick response and great acceleration when exiting corners. The gear ratios specifically designed for the DesertX offer shorter first four gears to overcome even the most challenging obstacles, and a longer sixth gear to improve fuel consumption and comfort during fast transfers. Finally, the class-leading service intervals (45,000 km for valve clearance checks and oil changes every 15,000 km or two years) underline the reliability of this engine and keep maintenance costs down.",
      "Monocoque frame and racing suspensionThe monocoque frame, unique in its segment and developed specifically for the DesertX, uses the engine as a structural element and also acts as an airbox, ensuring maximum compactness and increasing the rigidity of the frame to improve handling and intuitive riding. The new position of the airbox also offers better access to the air filter, which can be easily removed and cleaned after every off-road ride.",
      "The rear trellis frame is sturdy and reliable and is a clear reference to Ducati’s styling tradition. It has been designed to offer easy access to the engine components, facilitating operations and reducing maintenance costs. The aluminium swingarm, on the other hand, has been developed specifically for the DesertX and ensures the necessary strength to tackle any obstacle.",
      "The braking system is by Brembo, with M4.32 monobloc calipers, new 305 mm discs, dedicated pads and an axial pump with a newly designed lever, offering the rider greater modulation off-road and improved lever feel, while maintaining optimal braking power for road use. The new braking system also allows even the most off-road-oriented enthusiasts to fit the high front mudguard without the need for additional kits.",
      "The new chassis guarantees better off-road performance while preserving the balance and precision on the road that have made the DesertX a benchmark in its segment. Easy for beginners and high-performing in the hands of professionals, the second generation DesertX is equipped with rear suspension with Full-floater progressive linkages, a solution that improves both comfort and off-road behaviour. Unlike a suspension without linkages, where force increases linearly throughout the stroke, this solution increases support as the suspension works, offering a softer response in the first phase and more sustained support when high stresses come into play.",
      "The new Kayaba fork is smoother and better absorbs rough terrain, and is equipped with independent hydraulic adjustments on both legs, offering more experienced riders the ability to more effectively customise the bike’s behaviour over obstacles.",
      "The 21-inch tubeless spoked wheels at the front and 18-inch wheels at the rear are fitted with Pirelli Scorpion Rally Street tyres in sizes 90/90 and 150/70, the best choice for all-round motorcycle use. However, those who want to enhance its off-road or on-road capabilities can choose alternative solutions in the Pirelli Scorpion range thanks to DesertX’s triple homologation.",
      "Off-road ergonomicsThe riding position is specialised, as befits a true off-road bike: wide handlebars, narrow between the legs, light and responsive. The new ergonomic triangle has been defined by moving the footpegs back and the seat and handlebars forward, resulting in a less seated position for the rider to improve sport riding on the road and control of the bike off-road.",
      "The new 18-litre polymer fuel tank is slimmer and lighter, facilitating movement in the saddle, and thanks to the protective crash pads, it is also very resistant in the event of typical low-speed falls during off-road use. In addition, its structure positions the fuel volume very low, thus reducing the height of the bike’s centre of gravity and enhancing its handling and manoeuvrability.",
      "The side panels are designed to complement body movements and feature a texture that increases grip and feel with the bike, making standing riding easy and fun. The front mudguard is positioned higher than on the previous model to provide greater clearance above the tyre and allow for more mud accumulation without blocking the front wheel when riding on heavy terrain.",
      "The horizontal dashboard, with the standard utility bar, frees up space in the upper part of the fairing to mount navigation instruments and offers greater visibility of the area immediately in front of the bike, allowing for more accurate identification of obstacles when riding standing up off-road.",
      "The new DesertX has a seat height of 880 mm, which can be reduced to 840 mm by adopting the lowered seat and suspension kit.",
      "Advanced electronics for total controlThe new Ducati DesertX is equipped with a latest-generation electronics package based on a 6-axis inertial platform and developed specifically for off-road use thanks to the experience of Ducati riders and testers. This system detects roll, pitch and yaw in real time, allowing for rapid, precise and calibrated intervention of all controls, such as Cornering ABS, Ducati Traction Control (DTC), Ducati Wheelie Control (DWC) and Engine Brake Control (EBC). Each of these can be adjusted to multiple levels of intervention, allowing the setup to be adapted to any situation, favouring performance in sport riding, on the road or off-road, or stability and safety in touring use.",
      "Each electronic control is specifically configured within the six predefined Riding Modes (Sport, Touring, Urban, Wet, and the two designed for off-road use: Enduro and Rally) to modify the behaviour of the DesertX according to the situation and can of course be modified by the rider to customise each mode according to their riding style.",
      "All information is displayed on the new, more comprehensive 5″ TFT dashboard, with a resolution of 800 x 480 and two USB ports as standard. The three display modes, Road, Road Pro and Rally, each with automatic switching from day to night display, are called Info Mode and can be selected using the petal joystick on the left block. Each mode displays the most relevant information for each context to maximise readability. In Road and Road Pro modes, the display gives evidence to the most important info for road riding, while in Rally mode, the display becomes a true navigation tool complete with tripmaster.",
      "The DesertX has four levels of Cornering ABS. Levels 1 and 2 are designed for specific off-road use, with level 1 dedicated to faster riders and level 2 allowing less experienced riders to become familiar with typical off-road manoeuvres, while reducing braking distance on dirt roads and ensuring the stability and safety criteria of our ABS. Levels 3 and 4 are optimised for road riding, offering maximum safety without ever being invasive. The ABS can be disabled for off-road use, in Enduro and Rally riding modes only.",
      "The new Ducati Quick Shift 2.0 makes gear changes more direct and precise, and with no external sensors, it is less exposed to impacts, mud and dust. Thanks to this advanced electronics, the DesertX is fun and safe to ride on the road and performs well off-road, where it offers a more modern riding experience and significantly superior performance compared to the previous model.",
      "Modern and essential, a true adventurerThe DesertX is a modern and lightweight off-road bike, and its style communicates this at first glance, following the principle of form follows function. The front end, which is 20 mm lower, makes the bike more dynamic and lightweight.",
      "The side view of the bike, the cut of the fairing and the front light cluster reinterpret the concepts of the previous model in a more modern and dynamic way. Solutions such as the ducts that direct airflow to improve thermal comfort and the slimmer fuel tank protected by plastic covers make the bike more suitable for off-road use and enhance its aesthetics.",
      "The tail has a technical and minimalist design. It allows accessories such as an auxiliary tank, passenger grab rail and side case frames to be fitted, leaving all the most important technical elements of the DesertX visible, such as the progressive rear suspension. The lack of body panels and the design of the rear light further emphasise the bike’s off-road personality.",
      "Ducati Performance to enhance the DesertXFor those who want to enhance the versatility, comfort or off-road performance of the DesertX, Ducati has developed a range of Ducati Performance accessories. The rear auxiliary tank improves range, increasing the total capacity by 8 litres, and is designed to be a first point of contact, thus protecting the most critical components of the bike in the event of a fall. The radiator guards and bull bar help make the DesertX even more unstoppable, while the larger plexiglass and reinforced hand guards improve comfort and protection for the rider.",
      "More traditional travellers will appreciate the capacity and robustness of the aluminium panniers with dedicated frames, while off-road adventure enthusiasts can choose the soft bag kit without frames, developed in collaboration with Mosko Moto.",
      "On the electronics front, accessories designed for everyday use are available, such as the Ducati Multimedia System (DMS) for Bluetooth connection with your smartphone, and the Turn-by-Turn navigator, for always connected riding. Sports enthusiasts will also appreciate the approved silencer with titanium liners and carbon end caps, developed in collaboration with Termignoni.",
      "Availability and coloursThe new Ducati DesertX will arrive in European dealerships in April 2026. Distribution will then continue in the United States in May, followed by Australia and Japan in June. Of course, for A2 licence holders, a version with power limited to 35 kW is available.",
      "DesertX",
      "Livery",
      "- Matt Star White Silk",
      "Main Standard Equipment",
      "- V2 Engine, 890 cc",
      "- Max Power: 110 HP @ 9,000 rpm",
      "- Max Torque: 92 Nm @ 7,000 rpm",
      "- Wet Weight no fuel: 209 kg",
      "- 18L polymer fuel tank",
      "- Dedicated monocoque chassis",
      "- Dedicated trellis subframe",
      "- 46 mm KYB upside-down fork, fully adjustable with independent settings on both legs, 230 mm wheel travel",
      "- KYB monoshock, fully adjustable with remote preload adjustment, 220 mm wheel travel",
      "- Dedicated double-sided swingarm with progressive link",
      "- 15” x 21” tubeless spoked wheels at the front and 4.5” x 18” at the rear",
      "- Front braking system with Brembo M4.32 radial calipers and dual 305 mm discs",
      "- Pirelli Scorpion Rally Street 90/90 and 150/70 tyres",
      "- Latest-generation electronic package with 6-axis Inertial Measurement Unit (6D IMU): switchable",
      "- ABS with four levels of cornering functionality; Ducati Traction Control (DTC); Ducati Wheelie Control (DWC); Ducati Quick Shift (DQS) 2.0; Engine Brake Control (EBC)",
      "- New petal-shaped joystick",
      "- New 5″ full-TFT dashboard with 16:9 aspect ratio and 800 x 400 resolution",
      "- Riding Modes (Sport, Touring, Urban, Wet, Enduro, Rally)",
      "- Full-LED headlights with DRL and dynamic turn indicators (where homologated)",
      "- Ready for Ducati Multimedia System (DMS), turn-by-turn navigation, Cruise Control",
      "- Ducati Brake Light EVO",
      "*Where homologated"
    ]
  },
  {
    id: "ducati-introduces-limited-edition-formula-73",
    title: "Ducati Introduces Limited Edition Formula 73",
    excerpt: "Do you have an extra $20,000 to indulge yourself with a retro-styled Ducati that delivers just 72 horsepower (claimed)? Well, if you do, you can consider the new, limited edition Formula 73.",
    image: importNewsImgSorted8,
    extraImages: [importNewsImgSorted9, importNewsImgSorted10],
    category: "Racing",
    readTime: "7 min",
    body: [
      "Do you have an extra $20,000 to indulge yourself with a retro-styled Ducati that delivers just 72 horsepower (claimed)? Well, if you do, you can consider the new, limited edition Formula 73.",
      "Here is Ducati’s press release describing this model:",
      "- Produced in a limited series of 873 numbered units, the Formula 73 celebrates the Super Sport 750 Desmo, one the most iconic models in Ducati history.",
      "- An Urban CaféRacer that combines modern technology with the authentic charm of the 750 Super Sport Desmo.",
      "- The short film A Piece of Timeless celebrates the birth of this special bike.",
      "Borgo Panigale (Bologna, Italy), 12 February, 2026 – In its centenary year, the Borgo Panigale manufacturer presentsthe Formula 73, a motorcycle that revives, in a modern version, the spirit of a model and an era that helped create the Ducati legend and inspired the principles that still guide it today. The Formula 73 celebratesthe 750 Super Sport Desmo, the first Ducati road bike equipped with a desmodromic valve timing system.",
      "The Super Sport was in fact a replica of the750 Imola Desmo with which Paul Smart and Bruno Spaggiari triumphed in the 1972 200 Miglia di Imola, the first European competition for production-derived motorcycles, a formula which in the 1980s would give rise to Superbike. The historic victory at Imola and the subsequent birth of the 750 Super Sport Desmo represented the first and fundamental episode in Ducati’s saga in production-derived racing, where it has achieved a world championship record that now stands at more than 400 victories, sixteen rider titles and twenty-one manufacturer titles.",
      "The 750 Super Sport Desmo was born in a decade of great change and contrasts, marked by intense cultural creativity. It was a period characterised by changes in society and a widespread desire for renewal. An extraordinary artistic vitality influenced music, cinema, fashion and thought, making the 1970s a complex and deeply significant era.",
      "The Formula 73 was created today as atribute to that epoch-making motorcycle, which already embodied the values of Style, Sophistication and Performance that have inspired Ducati ever since. The Formula 73 is a model dedicated to motorcycle enthusiasts with timeless charm, who love to stand out by riding a bike with an unmistakable design and strong personality, shunning conformity and paying attention to every detail in their daily lives.",
      "The Formula 73 is the star of the short film ‘A Piece of Timeless’, in which Italian actorStefano Accorsi, a great Ducati enthusiast, reflects on his experience of trying it for the first time. Stefano, drawing a parallel between riding a motorcycle and acting, recounts his relationship with acting and the world of motorsports in this film.",
      "Unmistakable personality",
      "The Ducati Formula 73 line is a contemporary reinterpretation of the legendary 1973 750 Super Sport Desmo. Sleek and slender, this bike conveys agility thanks to its minimalist yet elegant aesthetics. Equipped with the iconic air-cooled Ducati twin-cylinder engine, it combines the rebellious spirit of Urban CaféRacers with the timeless charm of what many collectors consider to be the most significant motorcycle in Ducati’s history.",
      "Every detail contributes to making the Formula 73 unique. The silver and aqua green livery, inspired by the original 750 Super Sport Desmo, is the result of careful research in the company’s historical archives carried out by the Ducati Style Centre. The vertical gold stripe on the tank echoes the original unpainted strip on the 750 Imola Desmo, which allowed the team to check the fuel level without complicating and weighing down the bike with additional instruments. The clip-on handlebars with bar-end mirrors, the short, tapered fairing and tail confirm the CaféRacer personality of this collector’s bike.",
      "The many billet aluminium components, such as the brake and clutch levers with oil reservoirs, the footpegs and the Rizoma fuel cap supplied as standard, catch the eye and further enhance a bike designed to be admired both when stationary and in motion.",
      "Like all Ducati limited edition models, the Formula 73 features the model name and serial number on the steering plate. Each bike comes with a certificate of authenticity, as well as a collection of period images and sketches created by the Ducati Style Centre, presented in a special box.",
      "Innovation in tradition",
      "The Ducati Formula 73 is a timeless creation, faithful to the technical solutions that made the 750 Super Sport Desmo iconic, yet at the same time a modern, high-tech motorcycle.",
      "Its 803 cc Desmodue engine is an L-twin with desmodromic distribution and two valves, Euro5+ approved, faithful to the technical standards on which Ducati built its legend in the 1970s and 1980s. An authentic engine, capable of 73 horsepower at 8,250 rpm, which goes beyond the concept of performance to unequivocally define the personality of the Formula 73, becoming a fundamental element of both the style and riding experience of the bike. The silencer, developed in collaboration with Termignoni with aesthetic details specifically designed for this model, gives the bike a full and evocative voice, and the Ride-by-Wire throttle makes the engine response quick, progressive and smooth even at low revs.",
      "The steel trellis frame of the Formula 73 reinforces the connection with the Super Sport Desmo that inspired it. Sleek and painted in aqua green, it becomes part of the livery and, together with the 17-inch spoked wheels with Pirelli Diablo Rosso IV tyres, contributes to making the bike manoeuvrable and easy to ride.",
      "The Formula 73 is a complete motorcycle, thanks to its electronic systems, which include DTC traction control, Cornering ABS, the Ducati Quick Shift system and two Riding Modes. This makes every ride, from your commute to work to trips over mountain passes, safer and more enjoyable, making every moment spent in the saddle unique.",
      "Availability",
      "Fans wishing to complete their look with technical garments inspired by the aesthetics of this collector’s motorcycle can choose a helmet, created in collaboration with Arai, and a sports jacket that echo the Formula 73 livery.The Ducati Formula 73 will be produced in a numbered series limited to 873 unitsand will arrive in European dealerships in spring 2026. Distribution will be completed in the rest of the world by the end of summer.",
      "Thelaunch videoof the bike is available onDucati’s YouTube official channel.",
      "#DucatiWorldPremiere2026 #Ducati2026 #Formula73",
      "Formula 73",
      "- Livery750 Super Sport Desmo replica",
      "- Main standard equipmentDesmodue engine, 803 cm3Maximum power: 73 CV @ 8,250 RPMMaximum torque: 65.2 Nm @ 7,000 RPMType-approved Termignoni silencerWet weight no fuel: 183 KgSteel trellis frameUpside-down 41 mm KYB front forkKYB shock, preload adjustableFront brake: 4-piston Brembo radial caliper and 330 mm discPirelli Diablo Rosso IV tyres, 120/70 and 180/55Electronic package with Inertial Measurement Unit: cornering ABS; Ducati Traction Control (DTC); Power Modes; Ducati Quick Shift (DQS)Full TFT 4,3” dashboardRiding Modes (Sport, Road)Full-LED lights with DRLDucati Multimedia System (DMS) ready, Turn-by-turn navigation",
      "- 750 Super Sport Desmo replica",
      "- Desmodue engine, 803 cm3",
      "- Maximum power: 73 CV @ 8,250 RPM",
      "- Maximum torque: 65.2 Nm @ 7,000 RPM",
      "- Type-approved Termignoni silencer",
      "- Wet weight no fuel: 183 Kg",
      "- Steel trellis frame",
      "- Upside-down 41 mm KYB front fork",
      "- KYB shock, preload adjustable",
      "- Front brake: 4-piston Brembo radial caliper and 330 mm disc",
      "- Pirelli Diablo Rosso IV tyres, 120/70 and 180/55",
      "- Electronic package with Inertial Measurement Unit: cornering ABS; Ducati Traction Control (DTC); Power Modes; Ducati Quick Shift (DQS)",
      "- Full TFT 4,3” dashboard",
      "- Riding Modes (Sport, Road)",
      "- Full-LED lights with DRL",
      "- Ducati Multimedia System (DMS) ready, Turn-by-turn navigation"
    ]
  },
  {
    id: "indian-s-new-owner-focused-on-core-products-cruisers-baggers-and-touring-models",
    title: "Indian’s New Owner Focused on Core Products – Cruisers, Baggers and Touring Models",
    excerpt: "Indian Motorcycle became independent from its former owner Polaris last week on February 2.  The buyer of the motorcycle brand is Carolwood LP, which has chosen CEO Mike Kennedy to lead the company.",
    image: importNewsImgSorted11,
    extraImages: [importNewsImgSorted12],
    category: "Racing",
    readTime: "2 min",
    body: [
      "Indian Motorcycle became independent from its former owner Polaris last week on February 2.  The buyer of the motorcycle brand is Carolwood LP, which has chosen CEO Mike Kennedy to lead the company.",
      "Kennedy states that, although “Polaris is a great organization,” making Indian independent of the conglomerate will allow the brand to flourish.",
      "In the short-term, don’t expect any models from Indian outside its core cruiser-based business.  On that topic, Kennedy stated:",
      "“We’re going to be laser-focused,” he said.  “People ask me, ‘Are you going to get into electric? What about small bikes? What about adventure bikes?’ All that is fair game down the road, but our product strategy out of the gate is cruisers, baggers and touring.”",
      "“When we put all our product development, sales and marketing efforts into those categories, we’re going to outperform even more than we already are.  If we’re successful, you’ll see the brand as it is now, but on a larger scale.”",
      "Kennedy also emphasized strengthening its Indian dealer network, something that should be important to motorcycle consumers everywhere.",
      "Indian manufacturing will continue to be based in the United States as the brand celebrates its 125th anniversary this year. In case you are wondering, that makes Indian Motorcycle the oldest U.S. manufacturer, even surpassing Harley-Davidson.",
      "So Indian will not be chasing emerging markets, such as electric motorcycles and smaller displacement cruisers (many from China). We will see how this strategy plays out."
    ]
  },
  {
    id: "owner-of-ktm-husqvarna-and-gasgas-changes-name-to-bajaj-mobility-ag",
    title: "Owner of KTM, Husqvarna and GASGAS Changes Name to Bajaj Mobility AG",
    excerpt: "The restructuring of KTM’s owner has reached a new plateau with the laying-off of 500 employees at KTM AG. This lay-off was announced on the same day as the parent company of motorcycle brands KTM, Husqvarna and GASGAS changed its name from Pierer Mobility AG to Bajaj Mobility AG.  Bajaj is now the controlling owner of the group that owns all three brands.",
    image: importNewsImgSorted13,
    extraImages: [],
    category: "Racing",
    readTime: "3 min",
    body: [
      "The restructuring of KTM’s owner has reached a new plateau with the laying-off of 500 employees at KTM AG. This lay-off was announced on the same day as the parent company of motorcycle brands KTM, Husqvarna and GASGAS changed its name from Pierer Mobility AG to Bajaj Mobility AG.  Bajaj is now the controlling owner of the group that owns all three brands.",
      "Here is the press release from Bajaj Mobility AG:",
      "As part of an efficiency program, KTM AG is implementing difficult but necessary measures to continue the successful new start of 2025 following the insolvency of KTM AG at the end of 2024. The aim is to sustainably strengthen competitiveness by reducing fixed costs, streamlining structures, focusing the product and project portfolio, and optimizing our international site and leadership network. As part of this necessary realignment, a reduction of around 500 employees – predominantly in salaried positions and middle management – is unavoidable. In addition, the required early warning notifications pursuant to Section 45a of the Austrian Labor Market Promotion Act (AMFG) will be submitted to the competent Public Employment Service (AMS). The headcount as of December 31, 2025, amounted to 3,794 employees.",
      "“This reduction in positions is a difficult but necessary decision to lower our costs, slim down structures, and thereby place the company on a stable footing for the long term,” said CEO Gottfried Neumeister. “We are reducing complexity across all areas—for example in our model range, in IT, and also in the organization of our departments, particularly by removing one management layer.” All measures are taken with a clear focus on the Motorcycles segment with the three core brands KTM, GASGAS, and Husqvarna.",
      "In 2025, the company had already divested its bicycle business with the sale of FELT Bicycles. The termination of the distribution of CFMOTO and the sale of MV Agusta and X-Bow marked further milestones in the realignment. With a smaller core team in the future and significantly lower structural costs, KTM AG is pursuing its goal of simplification and focus in order to once again become one of the world’s leading motorcycle manufacturers.",
      "With Bajaj Auto International Holdings B.V. as a strong majority shareholder, Bajaj Mobility AG has solid support in accompanying the rightsizing in Austria and worldwide. This is a clear signal that KTM will continue to be positioned as a strong international brand. In 2025, KTM achieved record successes in motorsport with 29 championship titles. With the consistent implementation of cost reductions, economic improvements will also be realized in 2026. Customer and dealer confidence in KTM became clearly evident in the second half of 2025 through inventory reductions, which were carried out faster than expected due to strong demand."
    ]
  },
  {
    id: "ktm-super-beast-limited-edition-1390-super-duke-rr",
    title: "KTM Super Beast Limited Edition 1390 Super Duke RR",
    excerpt: "If theKTM 1390 Super Duke R EVOintroduced a couple of years ago to the U.S. market isn’t extreme enough for you, KTM has now announced an upgraded, limited edition (350 units worldwide) 1390 Super Duke RR.",
    image: importNewsImgSorted14,
    extraImages: [importNewsImgSorted15, importNewsImgSorted16, importNewsImgSorted17, importNewsImgSorted18, importNewsImgSorted19],
    category: "Racing",
    readTime: "10 min",
    body: [
      "If theKTM 1390 Super Duke R EVOintroduced a couple of years ago to the U.S. market isn’t extreme enough for you, KTM has now announced an upgraded, limited edition (350 units worldwide) 1390 Super Duke RR.",
      "Available in Europe soon as a 2026 model, we have no current information on U.S. availability. If it does come to the U.S. as a 2027 model, expect pricing in the neighborhood of $30,000.",
      "What is so special about the RR? Well, the following press release has all the details, but highlights include WP Pro suspension components, numerous carbon parts and forged wheels, Brembo HyPure front calipers and a wide 8.8″ color touchscreen for the dash.",
      "KTM claims the RR is 25 pounds lighter than the existing model. Here is the press release from KTM:",
      "In 2020, KTM unveiled an entirely new version of THE BEAST, marking the third generation of the SUPER DUKE since the KTM 990 SUPER DUKE made its debut. In 2021, the highly sought-after, extremely limited KTM 1290 SUPER DUKE RR stunned the world with an even more formidable package. The ‘RR’ brought unprecedented performance and an impressive list of features to the street, making it the most performance-oriented hyper-naked motorcycle ever produced by the Austrian manufacturer.",
      "For 2026, THE BEAST once again elevates its game with the latest iteration of the RR badge. Welcome to the 2026 KTM 1390 SUPER DUKE RR.",
      "## NAKED FURY. REFINED.",
      "The KTM 1390 SUPER DUKE RR earns its title as THE BEAST due to its uncompromising aggression and high-performance character. It makes no excuses for its existence; it simply commands respect.",
      "This version of THE BEAST is unlike any other. It sheds 11 kilograms compared to the standard KTM 1390 SUPER DUKE R, transforming its overall dynamics both on the road and at the racetrack. This weight reduction enhances agility and responsiveness, while a stiffer, more focused chassis provides greater stability when pushing the limits.",
      "## BODYWORK",
      "The bodywork of the KTM 1390 SUPER DUKE RR is critical to both ergonomics and performance. In its relentless pursuit of weightreduction, carbon fibre has been used extensively, minimizing material wherever possible without compromising strength.",
      "The result is a machine that presents a more aggressive stance, reflecting its performance-oriented intent. The revised tank spoiler integratesseamlessly with the LED headlight, while the front aero winglets enhance high-speed stability by generating additional downforce.",
      "## CHASSIS AND SUSPENSION",
      "The 2026 KTM 1390 SUPER DUKE RR is based on the standard KTM 1390 SUPER DUKE R but features top-tier chassis components designed for optimal track performance.",
      "FRONT SUSPENSION | WP PRO COMPONENTS 8548 FORK",
      "The WP PRO COMPONENTS 8548 Closed Cartridge spring fork significantly enhances front-end performance and responsiveness.Featuring an internally pressurized reservoir, it maintains consistent oil pressure, delivering stable, predictable damping performance even under the most challenging riding conditions.",
      "Developed with racing in mind, the closed-cartridge design eliminates hydraulic-stroke limitations, enabling riders to continuously andprecisely control damping characteristics. The use of high-quality, lightweight materials further reduces the overall fork weight while improving rigidity and feedback.",
      "Fully adjustable compression and rebound damping allow riders to fine-tune the suspension to suit individual preferences and track conditions,resulting in improved stability, enhanced front-end feel, and increased confidence when pushing performance boundaries.",
      "REAR SUSPENSION | WP PRO COMPONENTS 8750 SHOCK",
      "At the rear, the WP PRO COMPONENTS 8750 shock has been developed specifically for the KTM 1390 SUPER DUKE RR, delivering exceptional traction, stability, and adjustability for both track and aggressive road riding.",
      "Engineered using the latest racing expertise and developed in collaboration with championship-level riders, the 8750 shock offers a wide range of tuning possibilities. Riders can tailor the suspension setup through independently adjustable high- and low-speed compression and rebound damping.",
      "A new 50 mm shock piston and 14 mm piston rod improve oil circulation and reduce pressure spikes within the damper, resulting in smoother operation and more consistent performance under extreme loads.",
      "### KTM RECOMMENDED SETTINGS",
      "To help riders achieve optimal setup, KTM test riders have developed recommended suspension settings for various riding scenarios. These serve as ideal starting points for riders to further fine-tune their suspension to suit their personal riding style, track conditions, and pace.",
      "### WHEELS AND TIRES",
      "The KTM 1390 SUPER DUKE RR features lightweight 7-spoke forged wheels, inspired by the design and standards of the RC16, which weigh 1.5 kg less than the cast wheels found on the standard KTM 1390 SUPER DUKE R.",
      "These wheels are fitted with Michelin Power Cup 2 tires, known for their balance of pure track performance and street usability. These street-legal hypersport tires warm up quickly and feature a dual-compound architecture for optimum grip and stability.",
      "Wheel Size",
      "Front: 17” / 3.5”",
      "Rear: 17” / 6”",
      "Tire Size",
      "Front: 120/70 – R17 Rear: 200/55 – R17",
      "### BRAKE AND CLUTCH SYSTEM",
      "The KTM 1390 SUPER DUKE RR is equipped with new Brembo HyPure Sport 4-piston monobloc calipers, providing exceptional control andmaximum braking performance. The lever force has been reduced by approximately 10%, and the lever travel has decreased by 50%, ensuring consistent actuation. Additionally, each caliper has achieved a weight savings of 100 grams compared to the previous Stylema M4.30 model.",
      "This braking system is complemented by 320 mm floating front discs, a twin-piston floating caliper, and a 240 mm rear disc. The new MCS (multiple-click system) hand-brake lever offers enhanced adjustability. Furthermore, the updated Brembo brake and clutch cylinders include aself-venting system, eliminating the need to bleed the hydraulic systems.",
      "## FIREBREATHING LC8 V-TWIN",
      "The KTM 1390 SUPER DUKE RR is powered by the same V-twin engine as the KTM 1390 SUPER DUKE R, a powerhouse that hardly needs an introduction. The primary focus for this latest version of the LC8 engine has been to maintain its thrilling character: a torquey, powerful, and exciting Hypernaked engine that delivers immediate performance with a simple twist of the throttle, while significantly reducing weight.",
      "To ensure high performance, durability, and ease of servicing, several revisions and updates have been implemented to enhance engine reliability. As a result, service intervals have been extended, and a valve clearance check is now only required after 60,000 kilometers of engine use.",
      "### EXHAUST",
      "The KTM 1390 SUPER DUKE RR comes standard with a Titanium AKRAPOVIC Slip-on Line silencer. This premium silencer not only reducesweight but also produces a sporty sound and adds an uncompromising racing aesthetic to the street. It is the ideal complement to the 54 mm header pipes (front: 54 mm, rear: 60 mm), optimizing exhaust flow.",
      "### EMISSIONS AND CONSUMPTION",
      "The KTM 1390 SUPER DUKE RR meets EURO 5+ emissions standards. It boasts a fuel consumption of 5.6 liters per 100 kilometers,effectively combining high performance with fuel efficiency while generating only 130 grams of CO2 per kilometer.",
      "## TECHNOLOGY",
      "The KTM 1390 SUPER DUKE RR introduces a new era of premium electronic architecture. In fact, it is proud to make the claim that this is the most comprehensive electronics package ever installed on a street-legal KTM motorcycle.",
      "This innovative platform features an 8.8-inch touchscreen dashboard, new switch controls, an upgraded connectivity unit, and a groundbreaking concept for ride modes.",
      "### 8.88” DASHBOARD",
      "The all-new 8.88-inch touchscreen dashboard is set to revolutionize the motorcycle industry. Not only does it significantly enhance the user experience, but it is also optimized to be more race-ready than ever.",
      "Designed in a landscape format, the dashboard provides a clearer display with fewer elements, enabling easier, quicker readability. Thisdesign promotes a more enjoyable riding experience; the less time a rider spends looking at the screen, the better the overall experience.",
      "Improvements include new design layouts, additional display modes, a split-screen feature to better manage information display, larger specific elements, and more blank space to enhance readability.",
      "The updated display modes and split-screen feature are designed to improve clarity and reduce information overload. Additionally, the menuhas been refined for easier use while riding, incorporating confirmation and a cursor to highlight selections for clearer interaction.",
      "### 6-WAY SWITCH CUBES",
      "As functionality increases, quick and efficient access to all features becomes essential. It’s crucial to have all functions available at the touch of a button.",
      "The new 6-way switch cubes have been optimized to minimize friction during use, allowing riders to focus more on the road and resulting in afaster, safer ride. The placement and quality of the buttons make the new KTM Human-Machine Interface (HMI) even more appealing than before.",
      "Haptic feedback has been identified as a key component of the interaction experience, so premium K12 switches have been incorporatedbehind the buttons to provide consistent and clear feedback. When a rider presses a button, it’s vital that they feel assured of their action. Thus, the best switches have been used to enhance this experience.",
      "The optimal user experience is achieved when riders can locate every button without having to think about it.",
      "To facilitate this, the visuals of the switch cubes have been thoroughly revised and optimized. The back button, cruise control, indicators, flash button, and paddle buttons have been dimensioned for easier accessibility. The graphics of these buttons have also been refined and positioned logically to make them easy to find while riding.",
      "Navigating through the dashboard features is effortless with the new 5-way joystick and user-friendly back button. A 6-way interaction is required for managing the complex tasks associated with the new map navigation system, and the newly designed joystick makes it intuitive to use while riding.",
      "Additionally, the buttons are backlit to ensure quick and pleasant interaction, even in low-light conditions or challenging riding environments.",
      "### RIDE MODE BUTTON",
      "Pressing the ride mode button opens a split screen for changing ride modes. Once this split screen is open, you can interact in three ways: using the ride mode button, the joystick, or the touchscreen. A short press of the ride mode button toggles between different ride modes, while a long press confirms your selection.",
      "### BEAST MODE",
      "Introducing a new, dedicated ride mode for the KTM 1390 SUPER DUKE RR. This mode fully embodies the SUPER DUKE’s character.The ride screen is streamlined, displaying only the vehicle’s speed. Additionally, BEAST",
      "MODE does not offer any adjustable assistance settings. Rider aid configurations have been modified to meet minimal legal requirements, allowing this BEAST to unleash its full potential.",
      "## KTM POWERPARTS",
      "The KTM 1390 SUPER DUKE RR already boasts a full package of high-end",
      "componentry. However, for riders looking to boost their ride further. A full range of KTM PowerParts has been developed, fit for purpose.",
      "## KTM POWERWEAR",
      "Riders of the ultimate NAKED motorcycle need to look at and perform the part. For that reason, a dedicated range of KTM PowerWear has been developed to give KTM 1390 SUPER DUKE RR riders the utmost confidence.",
      "For more information, visitKTM.com.",
      "You can follow any responses to this entry through theRSS 2.0feed.",
      "You can skip to the end and leave a response. Pinging is currently not allowed."
    ]
  },
  {
    id: "zxmoto-s-passionate-owner-drives-brand-to-success-in-wss",
    title: "ZXMOTO’s Passionate Owner Drives Brand to Success in WSS",
    excerpt: "It isn’t likely you are old enough to remember the relatively sudden rise of Japanese motorcycle brands. In the United States, there was plenty of prejudice against Japanese products, much of it related to the memories of WW2.",
    image: importNewsImgSorted20,
    extraImages: [importNewsImgSorted21, importNewsImgSorted22, importNewsImgSorted23, importNewsImgSorted24],
    category: "Racing",
    readTime: "4 min",
    body: [
      "It isn’t likely you are old enough to remember the relatively sudden rise of Japanese motorcycle brands. In the United States, there was plenty of prejudice against Japanese products, much of it related to the memories of WW2.",
      "Despite this, the Japanese could not be stopped.  People like Soichiro Honda were driven by a passion to succeed, both in the showroom and on the race track. Are we seeing something similar now?",
      "The Chinese manufacturers also face some prejudice, and preconceptions regarding quality and innovation. Some of the motorcycles have styling that is derivative. Chinese motorcycles defining characteristic, in the minds of many, is low pricing.",
      "Enter Zhang Xue and ZXMOTO. Passionate about motorcycles for decades, his background is described as follows on the ZXMOTO website:",
      "- 2004-2006At the age of 17, Zhang Xue learned motorcycle repair, opened hisown repair shop",
      "- 2007-2008Motorcross rider, also a stunt rider and mechanic in a team",
      "- 2009-2012Product manager at Apollino",
      "- 2013-2016Developed Freedom 300X and 250X at Huang He Moto, freedom 250X is the 1st EFl motorcyclein China withe retail sales price less than CNY10000(USD1400)",
      "- 2017-2024Founded Kove jointly with investor, introduced 500X ADV,450 rally, 800X ADV,450RR, 321RRetc, achieved great success and became a leading brand in local market. 500X, 450 rally and800X competed with top brands in EuropeLed factory team and attended WSBK and Dakar with own bikes.",
      "- 2024Founded Zhang Xue Moto(ZXMOTO)",
      "At the age of 17, Zhang Xue learned motorcycle repair, opened hisown repair shop",
      "Motorcross rider, also a stunt rider and mechanic in a team",
      "Product manager at Apollino",
      "Developed Freedom 300X and 250X at Huang He Moto, freedom 250X is the 1st EFl motorcyclein China withe retail sales price less than CNY10000(USD1400)",
      "Founded Kove jointly with investor, introduced 500X ADV,450 rally, 800X ADV,450RR, 321RRetc, achieved great success and became a leading brand in local market. 500X, 450 rally and800X competed with top brands in EuropeLed factory team and attended WSBK and Dakar with own bikes.",
      "Founded Zhang Xue Moto(ZXMOTO)",
      "1. Won the third place in the domestic category of the first motorcycle city climbing competition in 2009.2. Won the second place in the domestic group of the 2011 Motorcycle City Climbing Competition.3. Won the first China award in 2013 The winner of the motorcycle group competition of Dafeng Coastal mudflat Automobile and Motorcycle Field Rally.4. Led the Kai Yue Rally Racing Team to participate in the motorcycle category of the 2023 Dakar Rally. This is the first time that a combination of Chinese brands, Chinese drivers, and Chinese racing cars has appeared on the Dakar track, and the pure Chinese elements have rewritten the history of Dakar.",
      "Passionate about motorcycles for more than 20 years now, Zhang Xue says he takes no more than 5 days off from work each year as he strives to develop the best motorcycles possible. There are two videos with interviews of him (with English subtitles) that will give you some idea about his passion and drive:ZXMOTO Founder Reflects on His High-Speed Journey from County Mechanic to Global PodiumandChinese Motorcycle Brand ZXMOTO Secures Historic Double Win at World Superbike Championship.",
      "So what has this amounted to? No less than two race wins (so far) in the World Supersport championship  with the 820RR model – a lightweight three-cylinder machine with more than 140 horsepower claimed in stock trim. The debut year for this bike in the championship, the experienced Evan Brothers Racing team has switched from their Yamaha to the ZXMOTO sportbike.",
      "If you are not familiar with World Supersport, know that it is extremely competitive and backed by major manufacturers. The ZXMOTO 820RR beat well-funded, experienced teams piloting Yamaha R9s and Ducati Panigale V2s, among others. Remarkable, to say the least.",
      "ZXMOTO has apparently sold enough 820RRs to homologate the bike for racing (the stock, relatively inexpensive machine impressively features adjustable rake and swingarm pivot location), but it is our understanding that models are just now going on sale in Europe, and are not yet available in the United States.  ZXMOTO has a full line-up of models that you can see on theirwebsite."
    ]
  },
  {
    id: "toprak-razgatlioglu-after-dominating-world-superbike-encounters-hurdles-adapting-to-motogp",
    title: "Toprak Razgatlioglu, After Dominating World Superbike, Encounters Hurdles Adapting to MotoGP",
    excerpt: "In the process of earning three World Superbike championships, Toprak Razgatlioglu became recognized as a unique, even “generational“ talent. A rider able to take bikes that shouldn’t be on the top step of the podium to the world title.",
    image: importNewsImgSorted25,
    extraImages: [],
    category: "Racing",
    readTime: "2 min",
    body: [
      "In the process of earning three World Superbike championships, Toprak Razgatlioglu became recognized as a unique, even “generational“ talent. A rider able to take bikes that shouldn’t be on the top step of the podium to the world title.",
      "Now he finds himself entering the pinnacle of motorcycle road racing, MotoGP. The recently finished Sepang three-day test revealed some significant hurdles he will face as he tries to find his way to the front this year. He is a teammate of Jack Miller on the Pramac Yamaha team.",
      "Principally, it is the switch from the World Superbike Pirelli tires to the Michelin tires used in MotoGP. After three days of testing at Sepang, Razgatlioglu was disappointed to finish with the 19th quickest lap time – slowest of the Yamahas.",
      "Yamaha is running an all-new bike this year based around a V4 engine, after using an inline-four engine configuration. The new bike has teething issues, of course, but Razgatlioglu is the only Yamaha rider who has never competed using Michelin tires.",
      "He explained his difficulties as follows:",
      "“The Pirelli [in World Superbike], when you feel the spin, it’s easy to manage. But when the Michelin spins, it doesn’t stop again.”",
      "“You need to ride like a Moto2-style and open the gas very gentle, because this tyre is so sensitive. I’m trying to adapt to this, my team always say ‘ride smooth’, but to say is easy!”",
      "“It’s so difficult to wait a lot to open the gas, because in Superbike I’m always using the rear tyre to turn. I was always using the rear tyre for sliding and pick up and good acceleration, but MotoGP is the opposite.”",
      "His teammate Miller elaborated on the behavior of the Michelins:",
      "“That’s the biggest thing with the Michelin, once you start to spin, it doesn’t stop until fifth gear or sixth gear. Like it continues spinning in a straight line.”",
      "Miller went on to say the Ducati handles this tire issue best.  It seems to be a combination of engine character (the V4 engine configuration should help Yamaha in this regard) and electronic traction control settings.",
      "The 2026 MotoGP championship will have another practice session this weekend at the Chang International circuit in Thailand before the opening round at the same circuit the following weekend."
    ]
  },
  {
    id: "md-preview-of-2026-motogp-championship-series",
    title: "MD Preview of 2026 MotoGP Championship Series",
    excerpt: "The opening round of the 2026 MotoGP championship series will be held next weekend at Buriram, Thailand. This is the same circuit where MotoGP riders have ended their final pre-season testing just yesterday.",
    image: importNewsImgSorted26,
    extraImages: [],
    category: "Racing",
    readTime: "4 min",
    body: [
      "The opening round of the 2026 MotoGP championship series will be held next weekend at Buriram, Thailand. This is the same circuit where MotoGP riders have ended their final pre-season testing just yesterday.",
      "2025 saw Marc Marquez regain the MotoGP championship with a commanding performance on the factory Ducati. His teammate, Pecco Bagnaia, suffered a relatively poor series after taking two championships, and barely losing to Jorge Martin in 2024.",
      "Ducati, like the other manufacturers, have made changes and refinements to their MotoGP bikes in preparation for 2026.",
      "The final pre-season testing at Buriram was revealing. Notably, Aprilia has a very fast, capable machine. Marco Bezzecchi had the fastest single lap time at Buriram, and he also posted a very impressive race simulation, as did Ai Ogura aboard the Trackhouse Aprilia.",
      "So what does MD expect for the new 2026 season? Here are our thoughts.",
      "Although Marc Marquez is coming off yet another injury, he was relatively quick during the Buriram testing, and we see no reason to bet against him as repeating champion for 2026. We also expect that his teammate, Pecco Bagnaia, will have a much better series this year. He says he is comfortable with the 2026 factory Ducati, and he posted some of the fastest times during the recent test.",
      "The Aprilias all look to be competitive, with Marco Bezzecchi clearly quickest at this point. Bezzecchi is a multi-time MotoGP race winner, of course, and we are picking him to finish second in the championship to Marquez in 2026. Other Aprilias are also expected to be very competitive, including Ai Ogura, who posted very fast laps during a race-length test at Buriram.",
      "Of course, Bezzecchi’s teammate is former World champion Jorge Martin. Martin is coming off a series of injuries, and recently had surgery. At Buriram, however, he was already competitively quick and comfortably in the top 10, both in terms of single-lap and race-distance testing. It is difficult to predict how quick Martin will be aboard the very impressive Aprilia machine, but we wouldn’t be too surprised if he starts running near the front within the first two or three races.",
      "Honda, although it has improved, still appears to be well off the pace of the front runners. Its riders had difficulty cracking the top 10 at Buriram during testing, and it seems like both Ducati and Aprilia have taken bigger steps forward during the off-season.",
      "KTM appears to have improved their MotoGP bike, but is it enough? The stand-out rider on a KTM is Pedro Acosta, and he posted lap times easily in the top 10 during recent testing, but he seems to be off the pace set by both the top Ducati and Aprilia riders. We will see if KTM can sort things out before next weekend, because Acosta clearly has the talent to win races, and, eventually, the MotoGP championship.",
      "What about Yamaha? At this point, Yamaha has spent years promising that their bike will get better. Arguably, they have one of the most talented riders in the paddock, if not the most talented, in Fabio Quartararo, but things look grim for Yamaha at the start of this 2026 series.",
      "Based on test results, Quartararo may have trouble finishing inside the top 10 during races early in 2026. Unless Yamaha makes another big step forward, we would not expect to see any Yamahas on the podium this coming series.",
      "All of this is bad news for the extremely talented Yamaha rookie, two-time World Superbike champion Toprak Razgatlıoğlu. Razgatlıoğlu was not competitive during pre-season testing, consistently finishing near the back of the pack, barely out-pacing factory test rider Michele Pirro on his Ducati.",
      "So here is our bold prediction for 2026. Marc Marquez will be champion again, with Marco Bezzecchi finishing second, Pecco Bagnaia third and younger Marquez brother Alex fourth.",
      "Stay tuned for race results and analysis on MD."
    ]
  }
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
