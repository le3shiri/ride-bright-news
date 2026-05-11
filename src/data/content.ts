



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
  }
];;


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
