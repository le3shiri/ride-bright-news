import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
import news5 from "@/assets/news-5.jpg";
import news6 from "@/assets/news-6.jpg";
import reviewFeatured from "@/assets/review-featured.jpg";

// ZXMOTO Images
import zxmotoTopi from "./ZXMOTO’s Passionate Owner Drives Brand to Success in WSS/images/042826Topi.jpg";
import zxmotoMid1 from "./ZXMOTO’s Passionate Owner Drives Brand to Success in WSS/images/042826Middle1.jpg";
import zxmotoMid2 from "./ZXMOTO’s Passionate Owner Drives Brand to Success in WSS/images/042826Middle2.png";
import zxmotoMid3 from "./ZXMOTO’s Passionate Owner Drives Brand to Success in WSS/images/042826Middle3.png";
import zxmotoBot from "./ZXMOTO’s Passionate Owner Drives Brand to Success in WSS/images/042826Bottom.jpg";

// Aprilia Images
import apriliaTopi from "./Aprilia and Marco Bezzecchi Beginning to Look Unstoppable/images/050126Topi-scaled.jpg";

// Brazil Images
import brazilTopi from "./Brazil MotoGP Sprint and Full Race Results/images/032426Topi-scaled.jpg";

// Ducati Formula 73 Images
import ducati73Topi from "./Ducati Introduces Limited Edition Formula 73/images/021226Topi.jpg";
import ducati73Mid1 from "./Ducati Introduces Limited Edition Formula 73/images/021226Middle1.jpg";
import ducati73Bot from "./Ducati Introduces Limited Edition Formula 73/images/021226Bottom.jpg";

// Ducati DesertX Images
import desertXBot from "./Ducati Redesigned DesertX With New V–twin and Lighter Weight/images/031726Bottom.avif";
import desertXMid1 from "./Ducati Redesigned DesertX With New V–twin and Lighter Weight/images/031726Middle1.webp";
import desertXMid2 from "./Ducati Redesigned DesertX With New V–twin and Lighter Weight/images/031726Middle2.webp";
import desertXMid3 from "./Ducati Redesigned DesertX With New V–twin and Lighter Weight/images/031726Middle3.avif";

// Indian Images
import indianTopi from "./Indian’s New Owner Focused on Core Products – Cruisers, Baggers and Touring Models/images/021026Topi-scaled.jpg";
import indianMid1 from "./Indian’s New Owner Focused on Core Products – Cruisers, Baggers and Touring Models/images/021026Middle1.jpg";

// Jerez Images
import jerezTopi from "./Jerez MotoGP Sprint and Full Race Results/images/042726Topi.jpeg";

// KTM Images
import ktmTopi from "./KTM Super Beast Limited Edition 1390 Super Duke RR/images/041426Topi.jpg";
import ktmMid1 from "./KTM Super Beast Limited Edition 1390 Super Duke RR/images/041426Middle1.jpg";
import ktmMid2 from "./KTM Super Beast Limited Edition 1390 Super Duke RR/images/041426Middle2.jpg";
import ktmMid3 from "./KTM Super Beast Limited Edition 1390 Super Duke RR/images/041426Middle3.jpg";
import ktmMid4 from "./KTM Super Beast Limited Edition 1390 Super Duke RR/images/041426Middle4.jpg";
import ktmBot from "./KTM Super Beast Limited Edition 1390 Super Duke RR/images/041426Bottom.jpg";

// MD Preview Images
import mdTopi from "./MD Preview of 2026 MotoGP Championship Series/images/022326Topi-scaled.jpg";

// Owner KTM Images
import ownerKtmTopi from "./Owner of KTM, Husqvarna and GASGAS Changes Name to Bajaj Mobility AG/images/011426Topi.jpg";

// PortugueseGP Images
import portuTopi from "./PortugueseGP Second place for Bastianini and the Ducati Lenovo Team at  Portimão, a crash for Bagnaia following a coming together in the final stages/images/Ducati-Lenovo-Racing-032424.jpg";

// Toprak Images
import toprakTopi from "./Toprak Razgatlioglu, After Dominating World Superbike, Encounters Hurdles Adapting to MotoGP/images/021826Topi-scaled.jpg";










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
  {
    "id": "zxmoto-passionate-owner-drives-brand-to-success-in-wss",
    "title": {
      "en": "ZXMOTO’s Passionate Owner Drives Brand to Success in WSS",
      "fr": "Le propriétaire passionné de ZXMOTO mène la marque au succès en WSS",
      "es": "El apasionado propietario de ZXMOTO impulsa la marca hacia el éxito en WSS",
      "it": "L'appassionato proprietario di ZXMOTO guida il marchio al successo nel WSS"
    },
    "excerpt": {
      "en": "Zhang Xue and ZXMOTO's rise in World Supersport through pure passion and engineering drive.",
      "fr": "L'ascension de Zhang Xue et ZXMOTO en World Supersport grâce à une passion pure et un moteur d'ingénierie.",
      "es": "El ascenso de Zhang Xue y ZXMOTO en World Supersport a través de pura pasión e impulso de ingeniería.",
      "it": "L'ascesa di Zhang Xue e ZXMOTO nel World Supersport attraverso la pura passione e la spinta ingegneristica."
    },
    "image": zxmotoTopi,
    "category": "Racing",
    "readTime": "4 min",
    "body": {
      "en": [
        "It isn’t likely you are old enough to remember the relatively sudden rise of Japanese motorcycle brands. In the United States, there was plenty of prejudice against Japanese products, much of it related to the memories of WW2.",
        "Despite this, the Japanese could not be stopped. People like Soichiro Honda were driven by a passion to succeed, both in the showroom and on the race track. Are we seeing something similar now?",
        "The Chinese manufacturers also face some prejudice, and preconceptions regarding quality and innovation. Some of the motorcycles have styling that is derivative. Chinese motorcycles defining characteristic, in the minds of many, is low pricing.",
        "Enter Zhang Xue and ZXMOTO. Passionate about motorcycles for decades, his background includes being a motocross rider, stunt rider, mechanic, and product manager before founding his own brands.",
        "Zhang Xue founded ZXMOTO in 2024 after previously founding Kove and leading them to success in WSBK and Dakar. His drive is relentless, taking no more than 5 days off work each year.",
        "The results are already showing: two race wins in the World Supersport championship with the 820RR model – a lightweight three-cylinder machine with more than 140 horsepower.",
        "The ZXMOTO 820RR has beaten well-funded, experienced teams piloting Yamahas and Ducatis. It is a remarkable achievement for a debut year in such a competitive series.",
        "While currently gaining traction in Europe, ZXMOTO is yet to enter the United States market, but their full line-up shows a brand with global ambitions."
      ],
      "fr": [
        "Il est peu probable que vous soyez assez vieux pour vous souvenir de l'ascension relativement soudaine des marques de motos japonaises. Aux États-Unis, il y avait beaucoup de préjugés contre les produits japonais, en grande partie liés aux souvenirs de la Seconde Guerre mondiale.",
        "Malgré cela, les Japonais ne pouvaient être arrêtés. Des gens comme Soichiro Honda étaient animés par une passion de réussir, tant dans les salles d'exposition que sur les circuits de course. Voyons-nous quelque chose de similaire maintenant ?",
        "Les fabricants chinois font également face à certains préjugés et idées préconçues concernant la qualité et l'innovation. Certaines motos ont un style dérivé. La caractéristique déterminante des motos chinoises, dans l'esprit de beaucoup, est le prix bas.",
        "Entrez Zhang Xue et ZXMOTO. Passionné de motos depuis des décennies, son parcours comprend avoir été pilote de motocross, cascadeur, mécanicien et chef de produit avant de fonder ses propres marques.",
        "Zhang Xue a fondé ZXMOTO en 2024 après avoir précédemment fondé Kove et les avoir menés au succès en WSBK et au Dakar. Son dynamisme est implacable, ne prenant pas plus de 5 jours de congé par an.",
        "Les résultats sont déjà là : deux victoires en championnat du monde Supersport avec le modèle 820RR – une machine légère à trois cylindres de plus de 140 chevaux.",
        "La ZXMOTO 820RR a battu des équipes expérimentées et bien financées pilotant des Yamaha et des Ducati. C'est une réussite remarquable pour une première année dans une série aussi compétitive.",
        "Bien qu'elle gagne actuellement du terrain en Europe, ZXMOTO n'est pas encore entrée sur le marché des États-Unis, mais leur gamme complète montre une marque aux ambitions mondiales."
      ],
      "es": [
        "Es poco probable que tenga la edad suficiente para recordar el ascenso relativamente repentino de las marcas de motocicletas japonesas. En los Estados Unidos, había muchos prejuicios contra los productos japoneses, gran parte relacionados con los recuerdos de la Segunda Guerra Mundial.",
        "A pesar de esto, los japoneses no pudieron ser detenidos. Personas como Soichiro Honda se sintieron impulsadas por la pasión por el éxito, tanto en la sala de exposición como en la pista de carreras. ¿Estamos viendo algo similar ahora?",
        "Los fabricantes chinos también enfrentan algunos prejuicios y preconcepciones sobre la calidad e innovación. Algunas de las motocicletas tienen un estilo derivado. La característica definitoria de las motocicletas chinas, en la mente de muchos, es el bajo precio.",
        "Entren Zhang Xue y ZXMOTO. Apasionado por las motocicletas durante décadas, su experiencia incluye ser piloto de motocross, acróbata, mecánico y gerente de producto antes de fundar sus propias marcas.",
        "Zhang Xue fundó ZXMOTO en 2024 después de haber fundado previamente Kove y haberlos llevado al éxito en WSBK y Dakar. Su impulso es implacable, no toma más de 5 días libres al año.",
        "Los resultados ya se están viendo: dos victorias en el campeonato mundial de Supersport con el modelo 820RR, una máquina ligera de tres cilindros con más de 140 caballos de fuerza.",
        "La ZXMOTO 820RR ha vencido a equipos experimentados y bien financiados que pilotan Yamahas y Ducatis. Es un logro notable para un año de debut en una serie tan competitiva.",
        "Si bien actualmente está ganando terreno en Europa, ZXMOTO aún no ha entrado en el mercado de los Estados Unidos, pero su línea completa muestra una marca con ambiciones globales."
      ],
      "it": [
        "Non è probabile che tu sia abbastanza vecchio per ricordare l'ascesa relativamente improvvisa dei marchi motociclistici giapponesi. Negli Stati Uniti, c'erano molti pregiudizi contro i prodotti giapponesi, molti dei quali legati ai ricordi della seconda guerra mondiale.",
        "Nonostante ciò, i giapponesi non potevano essere fermati. Persone come Soichiro Honda erano spinte dalla passione per il successo, sia nello showroom che in pista. Stiamo vedendo qualcosa di simile ora?",
        "Anche i produttori cinesi devono affrontare alcuni pregiudizi e preconcetti riguardanti la qualità e l'innovazione. Alcune motociclette hanno uno stile derivato. La caratteristica distintiva delle motociclette cinesi, nella mente di molti, è il prezzo basso.",
        "Entra Zhang Xue e ZXMOTO. Appassionato di moto da decenni, il suo background include l'essere un pilota di motocross, stuntman, meccanico e product manager prima di fondare i propri marchi.",
        "Zhang Xue ha fondato ZXMOTO nel 2024 dopo aver precedentemente fondato Kove e averli portati al successo nel WSBK e alla Dakar. La sua determinazione è implacabile, non si prende più di 5 giorni di ferie all'anno.",
        "I risultati si vedono già: due vittorie nel campionato Mondiale Supersport con il modello 820RR – una macchina a tre cilindri leggera con oltre 140 cavalli.",
        "La ZXMOTO 820RR ha battuto team esperti e ben finanziati alla guida di Yamaha e Ducati. È un risultato notevole per un anno di debutto in una serie così competitiva.",
        "Mentre attualmente sta guadagnando terreno in Europa, ZXMOTO non è ancora entrata nel mercato degli Stati Uniti, ma la loro gamma completa mostra un marchio con ambizioni globali."
      ]
    },
    "extraImages": [zxmotoMid1, zxmotoMid2, zxmotoMid3, zxmotoBot]
  },
  {
    "id": "aprilia-and-marco-bezzecchi-beginning-to-look-unstoppable",
    "title": {
      "en": "Aprilia and Marco Bezzecchi Beginning to Look Unstoppable",
      "fr": "Aprilia et Marco Bezzecchi commencent à paraître inarrêtables",
      "es": "Aprilia y Marco Bezzecchi comienzan a parecer imparables",
      "it": "Aprilia e Marco Bezzecchi iniziano a sembrare inarrestabili"
    },
    "excerpt": {
      "en": "Marco Bezzecchi leads the MotoGP championship through Sunday dominance despite Sprint struggles.",
      "fr": "Marco Bezzecchi mène le championnat MotoGP grâce à sa domination le dimanche malgré des difficultés en Sprint.",
      "es": "Marco Bezzecchi lidera el campeonato de MotoGP gracias al dominio dominical a pesar de los problemas en el Sprint.",
      "it": "Marco Bezzecchi guida il campionato MotoGP grazie al dominio domenicale nonostante le difficoltà nella Sprint."
    },
    "image": apriliaTopi,
    "category": "Racing",
    "readTime": "3 min",
    "body": {
      "en": [
        "Aprilia’s Marco Bezzecchi is leading the MotoGP championship after the first four rounds of 2026. This is despite a disastrous record by Bezzecchi in Saturday’s Sprint races.",
        "Bezzecchi has scored only 6 points on Saturdays out of an available 48. The reason he leads the championship is his incredible performance on Sundays during the full-length GP races. There, he has scored 95 points out of 100, with 3 wins and one second place.",
        "Aprilia currently holds the two top spots in the championship with Bezzecchi and teammate Jorge Martin. Along with the Trackhouse satellite team, Aprilia has 4 of the top 8 places in championship points.",
        "The recent test at Jerez saw Aprilia post the three fastest times. The Italian manufacturer appears to continually improve its MotoGP weapon, asserting itself as the strongest manufacturer on the grid.",
        "While Marc Marquez remains in striking distance, he has struggled with a right shoulder weakened by injuries. Bezzecchi’s Sunday performances underscore his emergence as the top rider in MotoGP."
      ],
      "fr": [
        "Marco Bezzecchi d'Aprilia mène le championnat MotoGP après les quatre premières manches de 2026. Ceci malgré un bilan désastreux de Bezzecchi dans les courses Sprint du samedi.",
        "Bezzecchi n'a marqué que 6 points les samedis sur les 48 disponibles. La raison pour laquelle il mène le championnat est sa performance incroyable les dimanches lors des courses de GP complètes. Là, il a marqué 95 points sur 100 disponibles, avec 3 victoires et une deuxième place.",
        "Aprilia occupe actuellement les deux premières places du championnat avec Bezzecchi et son coéquipier Jorge Martin. Avec l'équipe satellite Trackhouse, Aprilia occupe 4 des 8 premières places du classement.",
        "Le récent test à Jerez a vu Aprilia signer les trois meilleurs temps. Le constructeur italien semble continuellement améliorer son arme MotoGP, s'affirmant comme le constructeur le plus fort de la grille.",
        "Alors que Marc Marquez reste à portée de tir, il a lutté avec une épaule droite affaiblie par les blessures. Les performances dominicales de Bezzecchi soulignent son émergence en tant que meilleur pilote du MotoGP."
      ],
      "es": [
        "Marco Bezzecchi de Aprilia lidera el campeonato de MotoGP tras las primeras cuatro rondas de 2026. Esto a pesar de un historial desastroso de Bezzecchi en las carreras Sprint de los sábados.",
        "Bezzecchi ha sumado solo 6 puntos los sábados de un total de 48 disponibles. La razón por la que lidera el campeonato es su increíble desempeño los domingos durante las carreras de GP completas. Allí, ha sumado 95 puntos de 100 disponibles, con 3 victorias y un segundo puesto.",
        "Aprilia ocupa actualmente los dos primeros puestos del campeonato con Bezzecchi y su compañero Jorge Martin. Junto con el equipo satélite Trackhouse, Aprilia tiene 4 de los 8 primeros lugares en puntos del campeonato.",
        "La reciente prueba en Jerez vio a Aprilia marcar los tres tiempos más rápidos. El fabricante italiano parece mejorar continuamente su arma de MotoGP, afirmándose como el fabricante más fuerte en la parrilla.",
        "Si bien Marc Márquez sigue a una distancia sorprendente, ha luchado con un hombro derecho debilitado por las lesiones. Las actuaciones dominicales de Bezzecchi subrayan su surgimiento como el mejor piloto de MotoGP."
      ],
      "it": [
        "Marco Bezzecchi dell'Aprilia è in testa al campionato MotoGP dopo i primi quattro round del 2026. Questo nonostante un record disastroso di Bezzecchi nelle gare Sprint del sabato.",
        "Bezzecchi ha segnato solo 6 punti il sabato su 48 disponibili. Il motivo per cui guida il campionato è la sua incredibile prestazione la domenica durante le gare GP complete. Lì, ha segnato 95 punti su 100 disponibili, con 3 vittorie e un secondo posto.",
        "L'Aprilia occupa attualmente i primi due posti del campionato con Bezzecchi e il compagno di squadra Jorge Martin. Insieme al team satellite Trackhouse, Aprilia ha 4 dei primi 8 posti nella classifica del campionato.",
        "Il recente test a Jerez ha visto l'Aprilia segnare i tre tempi più veloci. Il produttore italiano sembra migliorare continuamente la sua arma MotoGP, affermandosi come il produttore più forte sulla griglia.",
        "Mentre Marc Marquez rimane a distanza ravvicinata, ha lottato con una spalla destra indebolita da infortuni. Le prestazioni domenicali di Bezzecchi sottolineano la sua affermazione come miglior pilota della MotoGP."
      ]
    },
    "extraImages": []
  },
  {
    "id": "brazil-motogp-sprint-and-full-race-results",
    "title": {
      "en": "Brazil MotoGP Sprint and Full Race Results",
      "fr": "Résultats du Sprint et de la Course MotoGP du Brésil",
      "es": "Resultados del Sprint y la Carrera Completa de MotoGP en Brasil",
      "it": "Risultati della Sprint e della Gara MotoGP del Brasile"
    },
    "excerpt": {
      "en": "Marco Bezzecchi dominates the main race in Brazil, leading Aprilia to a 1-2 finish.",
      "fr": "Marco Bezzecchi domine la course principale au Brésil, menant Aprilia à un doublé 1-2.",
      "es": "Marco Bezzecchi domina la carrera principal en Brasil, llevando a Aprilia a un final 1-2.",
      "it": "Marco Bezzecchi domina la gara principale in Brasile, portando Aprilia a una doppietta 1-2."
    },
    "image": brazilTopi,
    "category": "Racing",
    "readTime": "2 min",
    "body": {
      "en": [
        "The second round of the 2026 MotoGP championship was held in Brazil last weekend, marking the first visit to the country in more than two decades.",
        "Saturday’s Sprint saw a close battle between the Ducatis of Marc Marquez and Fabio Di Giannantonio, with Marquez coming out on top. Jorge Martin and Marco Bezzecchi finished third and fourth.",
        "Sunday’s main event was a different story, as Bezzecchi took the holeshot and led the entire race. Martin secured second place, making it an Aprilia 1-2 ahead of Di Giannantonio and Marc Marquez.",
        "Bezzecchi has now won four straight GPs and leads the championship going into the next round at COTA.",
        "The return to Brazil was a huge success for the series and highlighted Aprilia's early season strength in 2026."
      ],
      "fr": [
        "La deuxième manche du championnat MotoGP 2026 s'est déroulée au Brésil le week-end dernier, marquant la première visite dans le pays depuis plus de deux décennies.",
        "Le Sprint de samedi a vu une bataille serrée entre les Ducati de Marc Marquez et Fabio Di Giannantonio, avec Marquez l'emportant. Jorge Martin et Marco Bezzecchi ont terminé troisième et quatrième.",
        "L'événement principal de dimanche a été une toute autre histoire, Bezzecchi prenant le holeshot et menant toute la course. Martin a pris la deuxième place, assurant un doublé Aprilia 1-2 devant Di Giannantonio et Marc Marquez.",
        "Bezzecchi a maintenant remporté quatre GP consécutifs et mène le championnat avant la prochaine manche au COTA.",
        "Le retour au Brésil a été un énorme succès pour la série et a souligné la force d'Aprilia en ce début de saison 2026."
      ],
      "es": [
        "La segunda ronda del campeonato de MotoGP 2026 se llevó a cabo en Brasil el fin de semana pasado, marcando la primera visita al país en más de dos décadas.",
        "El Sprint del sábado vio una batalla cerrada entre las Ducatis de Marc Márquez y Fabio Di Giannantonio, con Márquez saliendo victorioso. Jorge Martin y Marco Bezzecchi terminaron tercero y cuarto.",
        "El evento principal del domingo fue una historia diferente, ya que Bezzecchi tomó el 'holeshot' y lideró toda la carrera. Martin aseguró el segundo lugar, logrando un 1-2 para Aprilia por delante de Di Giannantonio y Marc Márquez.",
        "Bezzecchi ha ganado ahora cuatro GP seguidos y lidera el campeonato de cara a la próxima ronda en COTA.",
        "El regreso a Brasil fue un gran éxito para la serie y destacó la fuerza de Aprilia al comienzo de la temporada 2026."
      ],
      "it": [
        "Il secondo round del campionato MotoGP 2026 si è tenuto in Brasile lo scorso fine settimana, segnando la prima visita nel paese dopo oltre due decenni.",
        "La Sprint di sabato ha visto una battaglia serrata tra le Ducati di Marc Marquez e Fabio Di Giannantonio, con Marquez che ha avuto la meglio. Jorge Martin e Marco Bezzecchi sono finiti terzo e quarto.",
        "L'evento principale di domenica è stato una storia diversa, con Bezzecchi che ha preso l'holeshot e ha guidato l'intera gara. Martin ha conquistato il secondo posto, rendendo una doppietta Aprilia 1-2 davanti a Di Giannantonio e Marc Marquez.",
        "Bezzecchi ha ora vinto quattro GP consecutivi e guida il campionato in vista del prossimo round al COTA.",
        "Il ritorno in Brasile è stato un enorme successo per la serie e ha evidenziato la forza dell'Aprilia all'inizio della stagione 2026."
      ]
    },
    "extraImages": []
  },
  {
    "id": "ducati-introduces-limited-edition-formula-73",
    "title": {
      "en": "Ducati Introduces Limited Edition Formula 73",
      "fr": "Ducati présente l'édition limitée Formula 73",
      "es": "Ducati presenta la edición limitada Formula 73",
      "it": "Ducati presenta l'edizione limitata Formula 73"
    },
    "excerpt": {
      "en": "A tribute to the iconic 750 Super Sport Desmo, combining retro charm with modern technology.",
      "fr": "Un hommage à l'iconique 750 Super Sport Desmo, alliant charme rétro et technologie moderne.",
      "es": "Un tributo a la icónica 750 Super Sport Desmo, combinando el encanto retro con la tecnología moderna.",
      "it": "Un omaggio all'iconica 750 Super Sport Desmo, che unisce il fascino retrò alla tecnologia moderna."
    },
    "image": ducati73Topi,
    "category": "New Bikes",
    "readTime": "4 min",
    "body": {
      "en": [
        "Produced in a limited series of 873 numbered units, the Formula 73 celebrates the Super Sport 750 Desmo, one of the most iconic models in Ducati history.",
        "This Urban Café Racer combines the authentic charm of the 1970s with modern technology. It features a silver and aqua green livery inspired by the original Imola winner from 1972.",
        "The bike is powered by an 803 cc Desmodue air-cooled twin-cylinder engine, delivering 73 horsepower at 8,250 rpm. It's a tribute to the first Ducati road bike with desmodromic valve timing.",
        "Details like the gold vertical stripe on the tank, clip-on handlebars with bar-end mirrors, and billet aluminum components make it a true collector's piece.",
        "Despite its retro look, it features modern electronics including Cornering ABS, Traction Control, and a Quick Shifter, making it as enjoyable to ride as it is to look at."
      ],
      "fr": [
        "Produite en une série limitée de 873 unités numérotées, la Formula 73 célèbre la Super Sport 750 Desmo, l'un des modèles les plus emblématiques de l'histoire de Ducati.",
        "Ce Café Racer urbain combine le charme authentique des années 1970 avec la technologie moderne. Il arbore une livrée argent et vert eau inspirée du vainqueur original d'Imola en 1972.",
        "La moto est propulsée par un moteur bicylindre Desmodue de 803 cm3 refroidi par air, développant 73 chevaux à 8 250 tr/min. C'est un hommage à la première Ducati de route équipée d'une distribution desmodromique.",
        "Des détails tels que la bande verticale dorée sur le réservoir, les demi-guidons avec rétroviseurs en bout de guidon et les composants en aluminium taillés dans la masse en font une véritable pièce de collection.",
        "Malgré son look rétro, elle dispose d'une électronique moderne comprenant l'ABS de virage, le contrôle de traction et un Quick Shifter, la rendant aussi agréable à conduire qu'à regarder."
      ],
      "es": [
        "Producida en una serie limitada de 873 unidades numeradas, la Formula 73 celebra la Super Sport 750 Desmo, uno de los modelos más icónicos en la historia de Ducati.",
        "Esta Urban Café Racer combina el encanto auténtico de la década de 1970 con la tecnología moderna. Presenta una decoración en plata y verde agua inspirada en el ganador original de Imola de 1972.",
        "La moto está propulsada por un motor bicilíndrico Desmodue de 803 cc refrigerado por aire, que entrega 73 caballos de fuerza a 8.250 rpm. Es un tributo a la primera moto de carretera de Ducati equipada con sistema desmodrómico.",
        "Detalles como la franja vertical dorada en el tanque, semimanillares con espejos en los extremos y componentes de aluminio mecanizado la convierten en una verdadera pieza de colección.",
        "A pesar de su aspecto retro, cuenta con electrónica moderna que incluye ABS en curvas, control de tracción y Quick Shifter, lo que la hace tan agradable de conducir como de mirar."
      ],
      "it": [
        "Prodotta in una serie limitata di 873 unità numerate, la Formula 73 celebra la Super Sport 750 Desmo, uno dei modelli più iconici della storia Ducati.",
        "Questa Urban Café Racer combina il fascino autentico degli anni '70 con la tecnologia moderna. Presenta una livrea argento e verde acqua ispirata all'originale vincitrice di Imola del 1972.",
        "La moto è alimentata da un motore bicilindrico Desmodue da 803 cc raffreddato ad aria, che eroga 73 cavalli a 8.250 giri/min. È un omaggio alla prima Ducati stradale dotata di sistema desmodromico.",
        "Dettagli come la striscia verticale dorata sul serbatoio, i semimanubri con specchietti bar-end e i componenti in alluminio ricavati dal pieno la rendono un vero pezzo da collezione.",
        "Nonostante il suo look retrò, dispone di un'elettronica moderna che include ABS Cornering, Traction Control e Quick Shifter, rendendola piacevole da guidare quanto da ammirare."
      ]
    },
    "extraImages": [ducati73Mid1, ducati73Bot]
  },
  {
    "id": "ducati-redesigned-desertx-with-new-v-twin-and-lighter-weight",
    "title": {
      "en": "Ducati Redesigned DesertX With New V–twin and Lighter Weight",
      "fr": "Ducati redessine la DesertX avec un nouveau V-twin et un poids plus léger",
      "es": "Ducati rediseña la DesertX con un nuevo motor V2 y un peso más ligero",
      "it": "Ducati ridisegna la DesertX con un nuovo V-twin e un peso più leggero"
    },
    "excerpt": {
      "en": "The second generation DesertX is significantly redesigned with the new, lighter 890 cc V2 engine.",
      "fr": "La deuxième génération de DesertX est considérablement redessinée avec le nouveau moteur V2 de 890 cm3 plus léger.",
      "es": "La segunda generación de DesertX ha sido rediseñada significativamente con el nuevo motor V2 de 890 cc más ligero.",
      "it": "La seconda generazione di DesertX è stata significativamente ridisegnata con il nuovo motore V2 da 890 cc più leggero."
    },
    "image": desertXBot,
    "category": "New Bikes",
    "readTime": "5 min",
    "body": {
      "en": [
        "Ducati has introduced the second generation of the DesertX adventure model, featuring a complete redesign and the new, lightest twin-cylinder engine ever produced by Borgo Panigale.",
        "The new 890 cc V2 engine delivers 110 hp and 92 Nm of torque, with variable intake valve timing (IVT) ensuring generous power across the entire range.",
        "A unique monocoque frame uses the engine as a structural element, increasing rigidity for better handling while also acting as the airbox for a more compact design.",
        "Suspension has been upgraded with a new Kayaba fork and a Full-floater progressive linkage at the rear, offering improved comfort and off-road performance for both beginners and pros.",
        "Ergonomics have been refined with a slimmer 18-litre fuel tank and moved footpegs, providing better control when standing off-road and more comfort during long-distance road tours.",
        "Advanced electronics include six Riding Modes, Cornering ABS with off-road specific levels, and a 5″ full-TFT dashboard with dedicated Rally navigation features."
      ],
      "fr": [
        "Ducati a présenté la deuxième génération du modèle d'aventure DesertX, avec une refonte complète et le nouveau moteur bicylindre le plus léger jamais produit par Borgo Panigale.",
        "Le nouveau moteur V2 de 890 cm3 développe 110 ch et 92 Nm de couple, avec un calage variable des soupapes d'admission (IVT) assurant une puissance généreuse sur toute la plage de régime.",
        "Un cadre monocoque unique utilise le moteur comme élément structurel, augmentant la rigidité pour une meilleure maniabilité tout en faisant office de boîte à air pour un design plus compact.",
        "La suspension a été améliorée avec une nouvelle fourche Kayaba et une liaison progressive Full-floater à l'arrière, offrant un confort et des performances tout-terrain accrus pour les débutants comme pour les pros.",
        "L'ergonomie a été affinée avec un réservoir de carburant de 18 litres plus étroit et des repose-pieds déplacés, offrant un meilleur contrôle en position debout tout-terrain et plus de confort lors des longs trajets routiers.",
        "L'électronique de pointe comprend six modes de conduite, l'ABS de virage avec des niveaux spécifiques au tout-terrain et un tableau de bord TFT de 5 pouces avec des fonctions de navigation Rally dédiées."
      ],
      "es": [
        "Ducati ha presentado la segunda generación del modelo de aventura DesertX, con un rediseño completo y el nuevo motor bicilíndrico más ligero jamás producido por Borgo Panigale.",
        "El nuevo motor V2 de 890 cc entrega 110 CV y 92 Nm de par, con distribución variable de las válvulas de admisión (IVT) que garantiza una potencia generosa en toda la gama.",
        "Un chasis monocasco único utiliza el motor como elemento estructural, aumentando la rigidez para un mejor manejo y actuando también como caja de aire para un diseño más compacto.",
        "La suspensión se ha mejorado con una nueva horquilla Kayaba y un varillaje progresivo Full-floater en la parte trasera, lo que ofrece un mejor confort y rendimiento fuera de carretera tanto para principiantes como para profesionales.",
        "La ergonomía se ha refinado con un tanque de combustible de 18 litros más delgado y estribos desplazados, lo que proporciona un mejor control al conducir de pie fuera de carretera y más comodidad durante los viajes largos por carretera.",
        "La electrónica avanzada incluye seis modos de conducción, ABS en curvas con niveles específicos para fuera de carretera y un tablero TFT de 5 pulgadas con funciones de navegación Rally dedicadas."
      ],
      "it": [
        "Ducati ha presentato la seconda generazione del modello adventure DesertX, caratterizzata da una riprogettazione completa e dal nuovo motore bicilindrico più leggero mai prodotto a Borgo Panigale.",
        "Il nuovo motore V2 da 890 cc eroga 110 CV e 92 Nm di coppia, con la fasatura variabile delle valvole di aspirazione (IVT) che garantisce una potenza generosa su tutto l'arco di utilizzo.",
        "Un esclusivo telaio monoscocca utilizza il motore come elemento strutturale, aumentando la rigidità per una migliore maneggevolezza e fungendo anche da airbox per un design più compatto.",
        "Le sospensioni sono state aggiornate con una nuova forcella Kayaba e un leveraggio progressivo Full-floater al posteriore, offrendo maggiore comfort e prestazioni fuoristrada sia per i principianti che per i professionisti.",
        "L'ergonomia è stata affinata con un serbatoio più snello da 18 litri e pedane spostate, offrendo un migliore controllo nella guida in piedi in fuoristrada e maggiore comfort durante i tour stradali a lunga percorrenza.",
        "L'elettronica avanzata include sei Riding Mode, ABS Cornering con livelli specifici per il fuoristrada e un cruscotto TFT da 5 pollici con funzioni di navigazione Rally dedicate."
      ]
    },
    "extraImages": [desertXMid1, desertXMid2, desertXMid3]
  },
  {
    "id": "indian-s-new-owner-focused-on-core-products-cruisers-baggers-and-touring-models",
    "title": {
      "en": "Indian’s New Owner Focused on Core Products – Cruisers, Baggers and Touring Models",
      "fr": "Le nouveau propriétaire d'Indian se concentre sur les produits phares – Cruisers, Baggers et Touring",
      "es": "El nuevo propietario de Indian se enfoca en productos principales: Cruisers, Baggers y Touring",
      "it": "Il nuovo proprietario di Indian si concentra sui prodotti principali: Cruiser, Bagger e Touring"
    },
    "excerpt": {
      "en": "Indian Motorcycle becomes independent from Polaris with a laser-focused strategy on cruisers, baggers and touring.",
      "fr": "Indian Motorcycle devient indépendant de Polaris avec une stratégie laser concentrée sur les cruisers, les baggers et le touring.",
      "es": "Indian Motorcycle se independiza de Polaris con una estrategia centrada en cruisers, baggers y touring.",
      "it": "Indian Motorcycle diventa indipendente da Polaris con una strategia focalizzata su cruiser, bagger e touring."
    },
    "image": indianTopi,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "en": [
        "Indian Motorcycle became independent from its former owner Polaris last week, following its acquisition by Carolwood LP. New CEO Mike Kennedy has been chosen to lead the company into this new chapter.",
        "Kennedy believes that independence will allow Indian to flourish. The brand's immediate strategy is to be 'laser-focused' on its heritage products: cruisers, baggers, and touring models.",
        "While electric bikes and adventure models are considered for the future, the primary goal is to outperform in the categories where Indian has its strongest roots, ensuring larger scale growth.",
        "Manufacturing will remain in the United States as Indian celebrates its 125th anniversary this year, making it the oldest U.S. motorcycle manufacturer, even surpassing Harley-Davidson.",
        "This strategic decision means Indian will not be chasing emerging markets like small displacement cruisers or electrics in the short term, focusing instead on strengthening its dealer network and core line-up."
      ],
      "fr": [
        "Indian Motorcycle est devenue indépendante de son ancien propriétaire Polaris la semaine dernière, suite à son acquisition par Carolwood LP. Le nouveau PDG Mike Kennedy a été choisi pour mener l'entreprise dans ce nouveau chapitre.",
        "Kennedy pense que l'indépendance permettra à Indian de s'épanouir. La stratégie immédiate de la marque est d'être 'focalisée au laser' sur ses produits historiques : les cruisers, les baggers et les modèles de touring.",
        "Bien que les motos électriques et les modèles d'aventure soient envisagés pour l'avenir, l'objectif principal est de surpasser la concurrence dans les catégories où Indian a ses racines les plus fortes.",
        "La fabrication restera aux États-Unis alors qu'Indian célèbre son 125e anniversaire cette année, ce qui en fait le plus ancien constructeur de motos américain, dépassant même Harley-Davidson.",
        "Cette décision stratégique signifie qu'Indian ne poursuivra pas les marchés émergents comme les cruisers de petite cylindrée ou les électriques à court terme, se concentrant plutôt sur le renforcement de son réseau de concessionnaires."
      ],
      "es": [
        "Indian Motorcycle se independizó de su antiguo propietario Polaris la semana pasada, tras su adquisición por parte de Carolwood LP. El nuevo CEO, Mike Kennedy, ha sido elegido para liderar la empresa en este nuevo capítulo.",
        "Kennedy cree que la independencia permitirá que Indian florezca. La estrategia inmediata de la marca es estar 'centrada en el láser' en sus productos heredados: cruisers, baggers y modelos de turismo.",
        "Si bien las bicicletas eléctricas y los modelos de aventura se consideran para el futuro, el objetivo principal es superar el desempeño en las categorías donde Indian tiene sus raíces más fuertes.",
        "La fabricación continuará en los Estados Unidos mientras Indian celebra su 125 aniversario este año, lo que lo convierte en el fabricante de motocicletas más antiguo de los EE. UU., superando incluso a Harley-Davidson.",
        "Esta decisión estratégica significa que Indian no perseguirá mercados emergentes como cruceros de pequeña cilindrada o eléctricos a corto plazo, centrándose en cambio en fortalecer su red de distribuidores."
      ],
      "it": [
        "Indian Motorcycle è diventata indipendente dal suo precedente proprietario Polaris la scorsa settimana, in seguito all'acquisizione da parte di Carolwood LP. Il nuovo CEO Mike Kennedy è stato scelto per guidare l'azienda in questo nuovo capitolo.",
        "Kennedy ritiene che l'indipendenza permetterà a Indian di prosperare. La strategia immediata del marchio è quella di essere 'focalizzata al laser' sui suoi prodotti storici: cruiser, bagger e modelli touring.",
        "Mentre le moto elettriche e i modelli adventure sono presi in considerazione per il futuro, l'obiettivo primario è quello di superare la concorrenza nelle categorie in cui Indian ha le sue radici più forti.",
        "La produzione continuerà ad avere sede negli Stati Uniti mentre Indian celebra quest'anno il suo 125° anniversario, rendendola il più antico produttore di motociclette statunitense, superando persino Harley-Davidson.",
        "Questa decisione strategica significa che Indian non inseguirà i mercati emergenti come le cruiser di piccola cilindrata o le elettriche a breve termine, concentrandosi invece sul rafforzamento della propria rete di concessionari."
      ]
    },
    "extraImages": [indianMid1]
  },
  {
    "id": "jerez-motogp-sprint-and-full-race-results",
    "title": {
      "en": "Jerez MotoGP Sprint and Full Race Results",
      "fr": "Résultats du Sprint et de la Course MotoGP de Jerez",
      "es": "Resultados del Sprint y la Carrera Completa de MotoGP en Jerez",
      "it": "Risultati della Sprint e della Gara MotoGP di Jerez"
    },
    "excerpt": {
      "en": "The Marquez brothers dominate Jerez as Marc wins the Sprint and Alex takes the main GP victory.",
      "fr": "Les frères Marquez dominent Jerez alors que Marc remporte le Sprint et Alex la victoire principale du GP.",
      "es": "Los hermanos Márquez dominan Jerez con Marc ganando el Sprint y Alex llevándose la victoria principal del GP.",
      "it": "I fratelli Marquez dominano a Jerez: Marc vince la Sprint e Alex conquista la vittoria nel GP principale."
    },
    "image": jerezTopi,
    "category": "Racing",
    "readTime": "3 min",
    "body": {
      "en": [
        "The MotoGP championship visited the iconic Jerez circuit this weekend, with Spanish fans celebrating wins from both Marquez brothers.",
        "Saturday’s Sprint was chaotic due to sudden rain. Marc Marquez crashed but managed to switch bikes and tires at the perfect moment, ultimately winning ahead of Pecco Bagnaia.",
        "Sunday’s main event was held in dry conditions. Alex Marquez proved to be the fastest rider of the weekend, securing a comfortable win ahead of Marco Bezzecchi and Fabio Di Giannantonio.",
        "Despite crashing on Saturday, Bezzecchi maintains his lead in the championship standings, while Marc Marquez remains in fifth position after a crash on Sunday.",
        "The series now looks forward to the next round at the Le Mans circuit in France, where the battle for the championship will continue."
      ],
      "fr": [
        "Le championnat MotoGP a visité le circuit emblématique de Jerez ce week-end, les fans espagnols célébrant les victoires des deux frères Marquez.",
        "Le Sprint de samedi a été chaotique en raison d'une pluie soudaine. Marc Marquez a chuté mais a réussi à changer de moto et de pneus au moment idéal, finissant par l'emporter devant Pecco Bagnaia.",
        "L'événement principal de dimanche s'est déroulé sur piste sèche. Alex Marquez s'est avéré être le pilote le plus rapide du week-end, s'assurant une victoire confortable devant Marco Bezzecchi et Fabio Di Giannantonio.",
        "Malgré sa chute samedi, Bezzecchi conserve sa place de leader au championnat, tandis que Marc Marquez reste en cinquième position après une chute dimanche.",
        "La série attend maintenant avec impatience la prochaine manche sur le circuit du Mans en France, où la bataille pour le championnat se poursuivra."
      ],
      "es": [
        "El campeonato de MotoGP visitó el icónico circuito de Jerez este fin de semana, con los aficionados españoles celebrando las victorias de ambos hermanos Márquez.",
        "El Sprint del sábado fue caótico debido a la lluvia repentina. Marc Márquez se cayó pero logró cambiar de moto y neumáticos en el momento perfecto, ganando finalmente por delante de Pecco Bagnaia.",
        "El evento principal del domingo se llevó a cabo en condiciones secas. Alex Márquez demostró ser el piloto más rápido del fin de semana, logrando una victoria cómoda por delante de Marco Bezzecchi y Fabio Di Giannantonio.",
        "A pesar de caer el sábado, Bezzecchi mantiene su liderazgo en la clasificación del campeonato, mientras que Marc Márquez permanece en la quinta posición tras una caída el domingo.",
        "La serie ahora espera con ansias la próxima ronda en el circuito de Le Mans en Francia, donde continuará la batalla por el campeonato."
      ],
      "it": [
        "Il campionato MotoGP ha fatto tappa sull'iconico circuito di Jerez questo fine settimana, con i tifosi spagnoli che hanno festeggiato le vittorie di entrambi i fratelli Marquez.",
        "La Sprint di sabato è stata caotica a causa della pioggia improvvisa. Marc Marquez è caduto ma è riuscito a cambiare moto e pneumatici al momento perfetto, vincendo alla fine davanti a Pecco Bagnaia.",
        "L'evento principale di domenica si è svolto in condizioni di asciutto. Alex Marquez si è rivelato il pilota più veloce del weekend, assicurandosi una comoda vittoria davanti a Marco Bezzecchi e Fabio Di Giannantonio.",
        "Nonostante la caduta di sabato, Bezzecchi mantiene il comando della classifica di campionato, mentre Marc Marquez resta in quinta posizione dopo una caduta domenica.",
        "La serie guarda ora al prossimo round sul circuito di Le Mans in Francia, dove continuerà la battaglia per il campionato."
      ]
    },
    "extraImages": []
  },
  {
    "id": "ktm-super-beast-limited-edition-1390-super-duke-rr",
    "title": {
      "en": "KTM Super Beast Limited Edition 1390 Super Duke RR",
      "fr": "KTM Super Beast Édition Limitée 1390 Super Duke RR",
      "es": "KTM Super Beast Edición Limitada 1390 Super Duke RR",
      "it": "KTM Super Beast Edizione Limitata 1390 Super Duke RR"
    },
    "excerpt": {
      "en": "KTM elevates its game with the ultra-limited 1390 Super Duke RR, shedding 11kg for pure track dominance.",
      "fr": "KTM monte en gamme avec l'ultra-limitée 1390 Super Duke RR, s'allégeant de 11 kg pour une domination pure sur piste.",
      "es": "KTM eleva su juego con la ultra limitada 1390 Super Duke RR, perdiendo 11 kg para un dominio puro en pista.",
      "it": "KTM alza il tiro con l'ultra-limitata 1390 Super Duke RR, perdendo 11 kg per il puro dominio in pista."
    },
    "image": ktmTopi,
    "category": "New Bikes",
    "readTime": "6 min",
    "body": {
      "en": [
        "KTM has announced an upgraded, limited edition (350 units worldwide) 1390 Super Duke RR, marking the most performance-oriented hyper-naked ever produced by the Austrian brand.",
        "The RR sheds 11 kilograms compared to the standard model, transforming its dynamics with extensive use of carbon fiber and lightweight forged wheels inspired by the RC16.",
        "Top-tier WP PRO COMPONENTS suspension provides unparalleled track performance, featuring a closed-cartridge fork and a specifically developed 8750 rear shock for exceptional traction.",
        "Stopping power comes from new Brembo HyPure Sport monobloc calipers, which are 100g lighter than before and offer significantly improved lever feel and modulation.",
        "The beast is powered by the LC8 V-twin engine, now meeting EURO 5+ standards while maintaining its thrilling, torquey character that delivers immediate performance.",
        "A revolutionary 8.8-inch touchscreen dashboard introduces a new era of KTM electronics, featuring a streamlined 'BEAST MODE' for pure, undistracted riding focus."
      ],
      "fr": [
        "KTM a annoncé une édition limitée améliorée (350 unités dans le monde) de la 1390 Super Duke RR, marquant l'hyper-naked le plus axé sur la performance jamais produit par la marque autrichienne.",
        "La RR perd 11 kilogrammes par rapport au modèle standard, transformant sa dynamique grâce à une utilisation intensive de fibre de carbone et de roues forgées légères inspirées de la RC16.",
        "La suspension WP PRO COMPONENTS haut de gamme offre des performances sur piste inégalées, avec une fourche à cartouche fermée et un amortisseur arrière 8750 spécifiquement développé.",
        "La puissance de freinage provient des nouveaux étriers monoblocs Brembo HyPure Sport, plus légers de 100 g et offrant un ressenti et une modulation de levier nettement améliorés.",
        "La bête est propulsée par le moteur bicylindre en V LC8, répondant désormais aux normes EURO 5+ tout en conservant son caractère coupleux et passionnant qui offre des performances immédiates.",
        "Un tableau de bord tactile révolutionnaire de 8,8 pouces introduit une nouvelle ère de l'électronique KTM, avec un 'MODE BÊTE' épuré pour une concentration de conduite pure."
      ],
      "es": [
        "KTM ha anunciado una edición limitada mejorada (350 unidades en todo el mundo) de la 1390 Super Duke RR, que marca la hyper-naked más orientada al rendimiento jamás producida por la marca austriaca.",
        "La RR pierde 11 kilogramos en comparación con el modelo estándar, transformando su dinámica con un uso extensivo de fibra de carbono y ruedas forjadas ligeras inspiradas en la RC16.",
        "La suspensión WP PRO COMPONENTS de primer nivel proporciona un rendimiento en pista inigualable, con una horquilla de cartucho cerrado y un amortiguador trasero 8750 desarrollado específicamente.",
        "La potencia de frenado proviene de las nuevas pinzas monobloque Brembo HyPure Sport, que son 100 g más ligeras que antes y ofrecen una sensación y modulación de la palanca significativamente mejoradas.",
        "La bestia está impulsada por el motor LC8 V-twin, que ahora cumple con los estándares EURO 5+ mientras mantiene su carácter emocionante y con mucho torque que brinda un rendimiento inmediato.",
        "Un revolucionario tablero con pantalla táctil de 8.8 pulgadas introduce una nueva era de la electrónica de KTM, con un 'BEAST MODE' simplificado para un enfoque de conducción puro y sin distracciones."
      ],
      "it": [
        "KTM ha annunciato una versione potenziata in edizione limitata (350 unità in tutto il mondo) della 1390 Super Duke RR, la hyper-naked più orientata alle prestazioni mai prodotta dal marchio austriaco.",
        "La RR perde 11 chilogrammi rispetto al modello standard, trasformando la sua dinamica grazie all'ampio uso di fibra di carbonio e cerchi forgiati leggeri ispirati alla RC16.",
        "Le sospensioni WP PRO COMPONENTS di alto livello offrono prestazioni in pista impareggiabili, con una forcella a cartuccia chiusa e un ammortizzatore posteriore 8750 sviluppato appositamente.",
        "La potenza frenante è affidata alle nuove pinze monoblocco Brembo HyPure Sport, più leggere di 100 g e con un feeling della leva e una modulabilità notevolmente migliorati.",
        "La 'bestia' è spinta dal motore bicilindrico a V LC8, ora conforme agli standard EURO 5+ pur mantenendo il suo carattere emozionante e ricco di coppia per prestazioni immediate.",
        "Un rivoluzionario cruscotto touchscreen da 8,8 pollici introduce una nuova era per l'elettronica KTM, con una modalità 'BEAST MODE' semplificata per la massima concentrazione alla guida."
      ]
    },
    "extraImages": [ktmMid1, ktmMid2, ktmMid3, ktmMid4, ktmBot]
  },
  {
    "id": "md-preview-of-2026-motogp-championship-series",
    "title": {
      "en": "MD Preview of 2026 MotoGP Championship Series",
      "fr": "Aperçu MD de la saison MotoGP 2026",
      "es": "Avance de MD de la Serie del Campeonato de MotoGP 2026",
      "it": "Anteprima MD della serie del campionato MotoGP 2026"
    },
    "excerpt": {
      "en": "MD looks ahead to the 2026 MotoGP season, picking Marc Marquez as the favorite to repeat his championship.",
      "fr": "MD se projette sur la saison MotoGP 2026, désignant Marc Marquez comme le favori pour conserver son titre.",
      "es": "MD mira hacia la temporada 2026 de MotoGP, eligiendo a Marc Márquez como el favorito para repetir su campeonato.",
      "it": "MD guarda alla stagione MotoGP 2026, scegliendo Marc Marquez come favorito per bissare il suo campionato."
    },
    "image": mdTopi,
    "category": "Racing",
    "readTime": "4 min",
    "body": {
      "en": [
        "The opening round of the 2026 MotoGP championship series will be held next weekend at Buriram, Thailand. This follows final pre-season testing where manufacturers showcased their refinements for the new year.",
        "MD expects Marc Marquez to repeat as champion for 2026. Despite recent injuries, his pace on the factory Ducati remains the benchmark for the field.",
        "Aprilia has shown incredible promise during testing, with Marco Bezzecchi setting the fastest single lap time at Buriram. We predict Bezzecchi to be Marquez's closest challenger this season.",
        "While KTM and Pedro Acosta show flashes of brilliance, they currently appear slightly off the pace set by the top Ducati and Aprilia riders. Honda and Yamaha still have significant ground to make up.",
        "The rookie season of Toprak Razgatlıoğlu with Yamaha will be a major talking point, though early testing suggests a difficult transition as Yamaha continues to struggle with its bike's development."
      ],
      "fr": [
        "La manche d'ouverture du championnat MotoGP 2026 se tiendra le week-end prochain à Buriram, en Thaïlande. Cela fait suite aux derniers tests de pré-saison où les constructeurs ont présenté leurs améliorations.",
        "MD s'attend à ce que Marc Marquez conserve son titre de champion en 2026. Malgré des blessures récentes, son rythme sur la Ducati d'usine reste la référence pour le plateau.",
        "Aprilia a montré des promesses incroyables lors des tests, Marco Bezzecchi ayant signé le meilleur temps au tour à Buriram. Nous prédisons que Bezzecchi sera le plus proche challenger de Marquez cette saison.",
        "Alors que KTM et Pedro Acosta montrent des éclairs de génie, ils semblent actuellement légèrement en retrait par rapport aux meilleurs pilotes Ducati et Aprilia. Honda et Yamaha ont encore beaucoup de terrain à rattraper.",
        "La première saison de Toprak Razgatlıoğlu avec Yamaha sera un sujet de discussion majeur, bien que les premiers tests suggèrent une transition difficile car Yamaha continue de lutter avec le développement de sa moto."
      ],
      "es": [
        "La ronda inaugural de la serie del campeonato de MotoGP 2026 se llevará a cabo el próximo fin de semana en Buriram, Tailandia. Esto sigue a las pruebas finales de pretemporada donde los fabricantes mostraron sus refinamientos.",
        "MD espera que Marc Márquez repita como campeón en 2026. A pesar de las lesiones recientes, su ritmo en la Ducati de fábrica sigue siendo el punto de referencia para el grupo.",
        "Aprilia ha mostrado una promesa increíble durante las pruebas, con Marco Bezzecchi marcando el tiempo de vuelta más rápido en Buriram. Predecimos que Bezzecchi será el rival más cercano de Márquez esta temporada.",
        "Si bien KTM y Pedro Acosta muestran destellos de brillantez, actualmente parecen estar un poco fuera del ritmo establecido por los mejores pilotos de Ducati y Aprilia. Honda y Yamaha todavía tienen mucho terreno por recuperar.",
        "La temporada de debut de Toprak Razgatlıoğlu con Yamaha será un tema importante de conversación, aunque las pruebas iniciales sugieren una transición difícil mientras Yamaha sigue luchando con el desarrollo de su moto."
      ],
      "it": [
        "Il round di apertura del campionato MotoGP 2026 si terrà il prossimo fine settimana a Buriram, in Thailandia. Ciò fa seguito ai test pre-stagionali finali in cui i costruttori hanno mostrato i loro affinamenti.",
        "MD si aspetta che Marc Marquez si riconfermi campione nel 2026. Nonostante i recenti infortuni, il suo passo sulla Ducati ufficiale rimane il punto di riferimento per tutto il gruppo.",
        "Aprilia ha mostrato incredibili promesse durante i test, con Marco Bezzecchi che ha segnato il giro più veloce a Buriram. Prevediamo che Bezzecchi sarà il più stretto sfidante di Marquez in questa stagione.",
        "Mentre KTM e Pedro Acosta mostrano sprazzi di genialità, attualmente sembrano leggermente fuori dal passo stabilito dai migliori piloti Ducati e Aprilia. Honda e Yamaha hanno ancora molto terreno da recuperare.",
        "La stagione di debutto di Toprak Razgatlıoğlu con la Yamaha sarà un importante argomento di discussione, anche se i primi test suggeriscono una transizione difficile mentre la Yamaha continua a lottare con lo sviluppo della sua moto."
      ]
<<<<<<< HEAD
    }
  },
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
=======
    },
    "extraImages": []
  },
  {
    "id": "owner-of-ktm-husqvarna-and-gasgas-changes-name-to-bajaj-mobility-ag",
    "title": {
      "en": "Owner of KTM, Husqvarna and GASGAS Changes Name to Bajaj Mobility AG",
      "fr": "Le propriétaire de KTM, Husqvarna et GASGAS change de nom pour Bajaj Mobility AG",
      "es": "El propietario de KTM, Husqvarna y GASGAS cambia su nombre a Bajaj Mobility AG",
      "it": "Il proprietario di KTM, Husqvarna e GASGAS cambia nome in Bajaj Mobility AG"
    },
    "excerpt": {
      "en": "Bajaj takes control as Pierer Mobility AG rebrands and announces significant restructuring at KTM AG.",
      "fr": "Bajaj prend le contrôle alors que Pierer Mobility AG change de nom et annonce une restructuration importante chez KTM AG.",
      "es": "Bajaj toma el control mientras Pierer Mobility AG cambia su marca y anuncia una reestructuración significativa en KTM AG.",
      "it": "Bajaj assume il controllo mentre Pierer Mobility AG cambia marchio e annuncia una significativa ristrutturazione di KTM AG."
    },
    "image": ownerKtmTopi,
    "category": "New Bikes",
    "readTime": "3 min",
    "body": {
      "en": [
        "The parent company of KTM, Husqvarna, and GASGAS has officially changed its name from Pierer Mobility AG to Bajaj Mobility AG, signaling Bajaj's role as the controlling owner.",
        "As part of a necessary realignment following the insolvency of KTM AG at the end of 2024, the company is implementing an efficiency program that includes a reduction of around 500 employees.",
        "CEO Gottfried Neumeister stated that the decision, while difficult, is essential to lower costs and slim down structures, removing a management layer to ensure long-term stability.",
        "The company has already divested its bicycle business and terminated distribution agreements for other brands to focus solely on its three core motorcycle brands: KTM, GASGAS, and Husqvarna.",
        "With strong support from majority shareholder Bajaj, the group aims to regain its position as a leading global motorcycle manufacturer, building on record motorsport success in 2025."
      ],
      "fr": [
        "La société mère de KTM, Husqvarna et GASGAS a officiellement changé son nom de Pierer Mobility AG en Bajaj Mobility AG, signalant le rôle de Bajaj en tant que propriétaire majoritaire.",
        "Dans le cadre d'un réalignement nécessaire suite à l'insolvabilité de KTM AG fin 2024, la société met en œuvre un programme d'efficacité qui comprend une réduction d'environ 500 employés.",
        "Le PDG Gottfried Neumeister a déclaré que la décision, bien que difficile, est essentielle pour réduire les coûts et simplifier les structures, garantissant ainsi une stabilité à long terme.",
        "L'entreprise a déjà cédé son activité de vélos et mis fin aux accords de distribution pour d'autres marques afin de se concentrer uniquement sur ses trois marques de motos de base : KTM, GASGAS et Husqvarna.",
        "Avec le solide soutien de l'actionnaire majoritaire Bajaj, le groupe vise à retrouver sa position de constructeur de motos mondial de premier plan, en s'appuyant sur les succès records en sport automobile en 2025."
      ],
      "es": [
        "La empresa matriz de KTM, Husqvarna y GASGAS ha cambiado oficialmente su nombre de Pierer Mobility AG a Bajaj Mobility AG, lo que indica el papel de Bajaj como propietario controlador.",
        "Como parte de un realineamiento necesario tras la insolvencia de KTM AG a finales de 2024, la empresa está implementando un programa de eficiencia que incluye una reducción de alrededor de 500 empleados.",
        "El director ejecutivo, Gottfried Neumeister, afirmó que la decisión, aunque difícil, es esencial para reducir costos y simplificar las estructuras, eliminando una capa de gestión para garantizar la estabilidad a largo plazo.",
        "La compañía ya vendió su negocio de bicicletas y rescindió acuerdos de distribución de otras marcas para centrarse únicamente en sus tres marcas principales de motocicletas: KTM, GASGAS y Husqvarna.",
        "Con el firme apoyo del accionista mayoritario Bajaj, el grupo pretende recuperar su posición como fabricante de motocicletas líder a nivel mundial, basándose en los éxitos récord en el deporte del motor en 2025."
      ],
      "it": [
        "La casa madre di KTM, Husqvarna e GASGAS ha cambiato ufficialmente il proprio nome da Pierer Mobility AG a Bajaj Mobility AG, segnando il ruolo di Bajaj come azionista di controllo.",
        "Come parte di un necessario riallineamento in seguito all'insolvenza di KTM AG alla fine del 2024, la società sta implementando un programma di efficienza che include una riduzione di circa 500 dipendenti.",
        "L'amministratore delegato Gottfried Neumeister ha dichiarato che la decisione, sebbene difficile, è essenziale per ridurre i costi e snellire le strutture, rimuovendo un livello dirigenziale per garantire stabilità a lungo termine.",
        "L'azienda ha già ceduto la sua attività ciclistica e ha terminato gli accordi di distribuzione per altri marchi per concentrarsi esclusivamente sui suoi tre marchi motociclistici principali: KTM, GASGAS e Husqvarna.",
        "Con il forte sostegno dell'azionista di maggioranza Bajaj, il gruppo mira a riconquistare la sua posizione di produttore di motociclette leader a livello mondiale, sulla scia dei successi record nel motorsport nel 2025."
      ]
    },
    "extraImages": []
  },
  {
    "id": "portuguesegp-second-place-for-bastianini-and-the-ducati-lenovo-team-at-portimao",
    "title": {
      "en": "PortugueseGP: Second place for Bastianini and the Ducati Lenovo Team at Portimão",
      "fr": "PortugueseGP : Deuxième place pour Bastianini et le Ducati Lenovo Team à Portimão",
      "es": "PortugueseGP: Segundo puesto para Bastianini y el Ducati Lenovo Team en Portimão",
      "it": "PortugueseGP: Secondo posto per Bastianini e il Ducati Lenovo Team a Portimão"
    },
    "excerpt": {
      "en": "Enea Bastianini secures his first podium of the season in Portugal, while Bagnaia crashes out.",
      "fr": "Enea Bastianini décroche son premier podium de la saison au Portugal, tandis que Bagnaia chute.",
      "es": "Enea Bastianini consigue su primer podio de la temporada en Portugal, mientras Bagnaia se cae.",
      "it": "Enea Bastianini conquista il suo primo podio stagionale in Portogallo, mentre Bagnaia cade."
    },
    "image": portuTopi,
    "category": "Racing",
    "readTime": "4 min",
    "body": {
      "en": [
        "The Ducati Lenovo Team scored a second-place finish in the Portuguese GP race courtesy of Enea Bastianini, who put together an excellent performance at Portimão.",
        "Bastianini showed consistently quick pace throughout the 25-lap race, setting a new race lap record and securing his maiden podium of the 2026 season.",
        "Francesco Bagnaia's race ended prematurely while battling for fifth place. A coming together with Marc Márquez resulted in both riders crashing out with three laps to go.",
        "Bastianini expressed his satisfaction with the result, noting that Portimão had not previously been among his favorite tracks, making the podium even more special.",
        "Bagnaia reflected on a difficult race where he struggled with rear-end grip, preventing him from capitalizing on the potential he felt during the morning warmup."
      ],
      "fr": [
        "Le Ducati Lenovo Team a obtenu une deuxième place lors de la course du GP du Portugal grâce à Enea Bastianini, qui a réalisé une excellente performance à Portimão.",
        "Bastianini a affiché un rythme soutenu tout au long des 25 tours, établissant un nouveau record du tour en course et décrochant son premier podium de la saison 2026.",
        "La course de Francesco Bagnaia s'est terminée prématurément alors qu'il luttait pour la cinquième place. Un accrochage avec Marc Márquez a entraîné la chute des deux pilotes à trois tours de l'arrivée.",
        "Bastianini s'est dit satisfait du résultat, notant que Portimão ne faisait pas partie de ses circuits préférés auparavant, ce qui rend ce podium encore plus spécial.",
        "Bagnaia a évoqué une course difficile où il a lutté avec l'adhérence arrière, l'empêchant de capitaliser sur le potentiel qu'il avait ressenti lors de l'échauffement matinal."
      ],
      "es": [
        "El Ducati Lenovo Team logró un segundo puesto en la carrera del GP de Portugal por cortesía de Enea Bastianini, quien realizó una excelente actuación en Portimão.",
        "Bastianini mostró un ritmo consistentemente rápido durante la carrera de 25 vueltas, estableciendo un nuevo récord de vuelta rápida y asegurando su primer podio de la temporada 2026.",
        "La carrera de Francesco Bagnaia terminó prematuramente mientras luchaba por la quinta posición. Un choque con Marc Márquez resultó en la caída de ambos pilotos a tres vueltas del final.",
        "Bastianini expresó su satisfacción con el resultado, señalando que Portimão no había estado previamente entre sus pistas favoritas, lo que hace que el podio sea aún más especial.",
        "Bagnaia reflexionó sobre una carrera difícil en la que luchó con el agarre trasero, lo que le impidió capitalizar el potencial que sintió durante el calentamiento de la mañana."
      ],
      "it": [
        "Il Ducati Lenovo Team ha ottenuto un secondo posto nella gara del GP del Portogallo grazie a Enea Bastianini, che ha messo in atto un'ottima prestazione a Portimão.",
        "Bastianini ha mostrato un passo costantemente veloce durante la gara di 25 giri, stabilendo un nuovo record sul giro in gara e conquistando il suo primo podio della stagione 2026.",
        "La gara di Francesco Bagnaia si è conclusa prematuramente mentre lottava per la quinta posizione. Un contatto con Marc Márquez ha portato alla caduta di entrambi i piloti a tre giri dalla fine.",
        "Bastianini ha espresso la sua soddisfazione per il risultato, sottolineando come Portimão non fosse in precedenza tra le sue piste preferite, rendendo il podio ancora più speciale.",
        "Bagnaia ha riflettuto su una gara difficile in cui ha lottato con il grip al posteriore, impedendogli di capitalizzare il potenziale che aveva sentito durante il warmup mattutino."
      ]
    },
    "extraImages": []
  },
  {
    "id": "toprak-razgatlioglu-encounters-hurdles-adapting-to-motogp",
    "title": {
      "en": "Toprak Razgatlioglu, After Dominating World Superbike, Encounters Hurdles Adapting to MotoGP",
      "fr": "Toprak Razgatlioglu, après avoir dominé le World Superbike, rencontre des obstacles pour s'adapter au MotoGP",
      "es": "Toprak Razgatlioglu, tras dominar el World Superbike, encuentra obstáculos para adaptarse a MotoGP",
      "it": "Toprak Razgatlioglu, dopo aver dominato il World Superbike, incontra ostacoli nell'adattarsi alla MotoGP"
    },
    "excerpt": {
      "en": "The three-time World SBK champion faces significant challenges switching to Michelin tires and Yamaha's new V4.",
      "fr": "Le triple champion du monde SBK fait face à des défis importants en passant aux pneus Michelin et au nouveau V4 de Yamaha.",
      "es": "El tres veces campeón del mundo de SBK enfrenta desafíos significativos al cambiar a los neumáticos Michelin y al nuevo V4 de Yamaha.",
      "it": "Il tre volte campione del mondo SBK deve affrontare sfide significative nel passaggio agli pneumatici Michelin e al nuovo V4 della Yamaha."
    },
    "image": toprakTopi,
    "category": "Racing",
    "readTime": "3 min",
    "body": {
      "en": [
        "Three-time World Superbike champion Toprak Razgatlioglu is facing significant hurdles as he transitions to the pinnacle of racing, MotoGP, with the Pramac Yamaha team.",
        "After the Sepang test, Razgatlioglu expressed disappointment with his 19th quickest time, primarily struggling with the sensitive Michelin tires compared to the Pirellis he used in SBK.",
        "Yamaha's switch to a V4 engine configuration adds another layer of complexity. As the only Yamaha rider without prior Michelin experience, Toprak must adapt his riding style to be much smoother on the throttle.",
        "Teammate Jack Miller noted that managing rear-wheel spin is the biggest challenge with Michelins, as once they start to spin, they often continue even through fifth or sixth gear.",
        "With another practice session coming up in Thailand, Razgatlioglu and the team are working hard to refine electronic traction control and engine character to bridge the gap to the front-runners."
      ],
      "fr": [
        "Le triple champion du monde de Superbike Toprak Razgatlioglu fait face à des obstacles importants alors qu'il passe au sommet de la compétition, le MotoGP, avec l'équipe Pramac Yamaha.",
        "Après le test de Sepang, Razgatlioglu a exprimé sa déception quant à son 19e temps, luttant principalement avec les pneus Michelin très sensibles par rapport aux Pirelli qu'il utilisait en SBK.",
        "Le passage de Yamaha à une configuration moteur V4 ajoute une couche supplémentaire de complexité. En tant que seul pilote Yamaha sans expérience préalable de Michelin, Toprak doit adapter son style de conduite.",
        "Son coéquipier Jack Miller a noté que la gestion du patinage de la roue arrière est le plus grand défi avec les Michelin, car une fois qu'ils commencent à patiner, ils continuent souvent jusqu'en cinquième ou sixième vitesse.",
        "Avec une autre session d'essais à venir en Thaïlande, Razgatlioglu et l'équipe travaillent dur pour affiner l'antipatinage électronique et le caractère du moteur."
      ],
      "es": [
        "El tres veces campeón del mundo de Superbike, Toprak Razgatlioglu, se enfrenta a importantes obstáculos en su transición a la cima de las carreras, MotoGP, con el equipo Pramac Yamaha.",
        "Tras la prueba de Sepang, Razgatlioglu expresó su decepción por su 19º tiempo más rápido, luchando principalmente con los sensibles neumáticos Michelin en comparación con los Pirelli que usaba en SBK.",
        "El cambio de Yamaha a una configuración de motor V4 añade otra capa de complejidad. Como el único piloto de Yamaha sin experiencia previa con Michelin, Toprak debe adaptar su estilo de conducción para ser mucho más suave con el acelerador.",
        "Su compañero de equipo Jack Miller señaló que gestionar el giro de la rueda trasera es el mayor desafío con los Michelin, ya que una vez que empiezan a girar, a menudo continúan incluso en quinta o sexta marcha.",
        "Con otra sesión de práctica próximamente en Tailandia, Razgatlioglu y el equipo están trabajando duro para refinar el control de tracción electrónico y el carácter del motor."
      ],
      "it": [
        "Il tre volte campione del mondo Superbike Toprak Razgatlioglu sta affrontando notevoli ostacoli nel suo passaggio all'apice delle corse, la MotoGP, con il team Pramac Yamaha.",
        "Dopo il test di Sepang, Razgatlioglu ha espresso delusione per il suo 19° tempo più veloce, lottando principalmente con gli pneumatici Michelin sensibili rispetto ai Pirelli che usava in SBK.",
        "Il passaggio della Yamaha a una configurazione del motore V4 aggiunge un altro livello di complessità. Come unico pilota Yamaha senza precedente esperienza Michelin, Toprak deve adattare il suo stile di guida per essere molto più fluido sull'acceleratore.",
        "Il compagno di squadra Jack Miller ha notato che la gestione dello slittamento della ruota posteriore è la sfida più grande con le Michelin, poiché una volta che iniziano a slittare, spesso continuano anche in quinta o sesta marcia.",
        "Con un'altra sessione di prove in arrivo in Thailandia, Razgatlioglu e il team stanno lavorando duramente per affinare il controllo di trazione elettronico e il carattere del motore."
      ]
    },
    "extraImages": []
>>>>>>> e15db699a4960f4b616de12612c7c003fcc65de8
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
