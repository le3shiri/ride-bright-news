import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    lng: 'fr', // Force French as primary as requested
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fr: {
        translation: {
          nav: {
            home: "Accueil",
            news: "Actualités",
            reviews: "Essais",
            compare: "Comparer",
            about: "À propos",
            contact: "Contact",
          },
          home: {
            hero: {
              issue: "Édition 142 · Avril 2026",
              titlePrefix: "Deux roues.",
              titleAccent: "Infinies",
              titleSuffix: " histoires.",
              tagline: "Le leader de la moto au Maroc. Des essais honnêtes, des comptes-rendus de course et les aventures qui nous transportent.",
              cta: "Lire les dernières histoires",
            },
            sections: {
              fresh: "Fraîchement publié",
              latestNews: "Dernières actualités",
              viewAll: "Tout voir",
              trending: "Tendances actuelles",
              whatReading: "Ce que les motards lisent",
              featuredReview: "Essai vedette",
              allReviews: "Tous les essais",
              newsletterTitle: "Le meilleur de iRide Morocco, chaque dimanche.",
              newsletterDesc: "Un e-mail sélectionné. Essais, résumés de course et les plus belles machines de la semaine.",
              subscribeFree: "S'abonner gratuitement",
            }
          },
          news: {
            title: "Actualités Moto",
            tagline: "Le pouls de la moto",
            description: "Reportages quotidiens sur les lancements, les courses et les personnes qui font avancer l'industrie.",
            back: "Retour aux actualités",
            readTime: "{{min}} min de lecture",
            pagination: {
              previous: "Précédent",
              next: "Suivant",
              page: "Page {{current}} sur {{total}}",
            },
            pullQuote: "Les décisions d'ingénierie qui semblent conservatrices sur le papier deviennent des forces évidentes une fois que la route s'ouvre.",
          },
          reviews: {
            title: "Essais",
            tagline: "Testé. Noté. Examiné.",
            pros: "Points positifs",
            cons: "Points négatifs",
            watchOnInsta: "Voir sur Instagram",
          },
          compare: {
            title: "Comparer les motos",
            tagline: "Côte à côte",
            description: "Choisissez jusqu'à trois motos et voyez comment elles se comparent — performance, prix et verdict de iRide.",
            addBike: "Ajouter une moto",
            upTo3: "Jusqu'à 3",
            chooseBike: "Choisir une moto",
            specification: "Spécification",
            verdict: "Verdict iRide",
            bestOverall: "Le meilleur choix :",
            verdictDesc: "Les cellules en surbrillance indiquent les leaders de catégorie. Choisissez celle qui correspond à votre conduite — la fiche technique ne dit que la moitié de l'histoire.",
            metrics: {
              price: "Prix",
              power: "Puissance",
              torque: "Couple",
              topSpeed: "Vitesse max",
              zeroToHundred: "0–100 km/h",
              weight: "Poids",
              range: "Autonomie",
              fuel: "Consommation",
              rating: "Note de la rédaction",
            }
          },
          about: {
            title: "À propos",
            tagline: "Notre histoire",
            heroTitle: "Construit par des motards, <span class='italic text-accent'>pour les motards.</span>",
            heroDesc: "iRide Morocco a commencé en 2014 comme un projet passionné pour la communauté moto marocaine. Douze ans plus tard, nous sommes une équipe mondiale d'éditeurs, de photographes et de pilotes qui partagent une seule conviction : la moto est la machine la plus honnête jamais construite.",
            missionTitle: "Dire la vérité sur les machines à deux roues.",
            missionDesc1: "Les médias automobiles traditionnels traitent souvent les motos comme une note de bas de page. Nous les traitons comme l'événement principal. Chaque moto que nous couvrons est pilotée — généralement pendant des semaines, parfois des mois — avant que nous n'écrivions un mot.",
            missionDesc2: "Nous croyons qu'un grand journalisme est un journalisme indépendant. iRide Morocco est financé par ses lecteurs via des abonnements et un petit nombre de partenaires soigneusement choisis.",
            valuesTitle: "Nos valeurs",
            valuesTagline: "Ce que nous défendons",
            ctaTitle: "Vous avez une histoire pour nous ?",
            ctaDesc: "Conseils, communiqués de presse, partenariats — nous lisons chaque e-mail.",
            getInTouch: "Contactez-nous",
            stats: {
              years: "Années sur la route",
              countries: "Pays atteints",
              readers: "Lecteurs mensuels",
              reviews: "Essais publiés",
            },
            values: {
              honest: "Essais honnêtes",
              honestText: "Nous achetons ou empruntons — n'acceptons jamais de placements payants.",
              global: "Perspective mondiale",
              globalText: "Des correspondants dans huit pays couvrent les courses et la culture.",
              reader: "Le lecteur d'abord",
              readerText: "Chaque histoire répond à une question qu'un vrai pilote se pose.",
              future: "Curieux de l'avenir",
              futureText: "De l'électrique à l'IA, nous couvrons ce qui vient après.",
            }
          },
          contact: {
            title: "Contact",
            tagline: "Contactez-nous",
            description: "Conseils, communiqués de presse, publicité — nous lisons chaque message et répondons dans un délai d'un jour ouvrable.",
            sendMessage: "Envoyez-nous un message",
            name: "Nom",
            namePlaceholder: "Votre nom",
            email: "Email",
            emailPlaceholder: "vous@exemple.com",
            message: "Message",
            messagePlaceholder: "Dites-nous tout...",
            send: "Envoyer le message",
            reachUs: "Nous joindre directement",
            location: "Emplacement",
            followRide: "Suivez l'aventure",
            dailyContent: "Contenu quotidien sur toutes les plateformes.",
            successTitle: "Message envoyé !",
            successDesc: "Nous vous répondrons dans les 24 heures.",
          },
          common: {
            search: "Rechercher des motos, marques, courses…",
            subscribe: "S'abonner",
            sections: "Sections",
            company: "Entreprise",
            newsletter: "Newsletter",
            join: "Rejoindre",
            noSpam: "Envois hebdomadaires. Pas de spam.",
            latestNews: "Dernières actualités",
            racing: "Courses",
            aboutUs: "À propos",
            advertise: "Publicité",
            compareBikes: "Comparer les motos",
            rights: "© {{year}} iRide Morocco. Tous droits réservés.",
            footerDesc: "Le leader de la moto au Maroc. Actualités, essais et aventures depuis 2014.",
            categories: {
              racing: "Courses",
              newBikes: "Nouvelles Motos",
              reviews: "Essais",
              guides: "Guides",
            },
            relatedStories: "Histoires similaires",
            keepReading: "Continuer la lecture",
            allNews: "Toutes les actualités",
            spreadWord: "Partager l'article",
            notFound: "Article non trouvé",
            notFoundDesc: "L'histoire que vous recherchez a été déplacée ou n'existe pas.",
            oneEmail: "Un e-mail sélectionné chaque dimanche.",
            moreLikeThis: "Plus de contenus comme celui-ci dans votre boîte mail",
          },
          // ... rest of fr
        }
      },
      en: {
        translation: {
          nav: {
            home: "Home",
            news: "News",
            reviews: "Reviews",
            compare: "Compare",
            about: "About",
            contact: "Contact",
          },
          common: {
            search: "Search bikes, brands, races…",
            subscribe: "Subscribe",
            categories: {
              racing: "Racing",
              newBikes: "New Bikes",
              reviews: "Reviews",
              guides: "Guides",
            },
          },
          news: {
            title: "Motorcycle News",
            tagline: "The pulse of motorcycling",
            description: "Daily reporting on launches, races, and the people moving the industry forward.",
            back: "Back to news",
            readTime: "{{min}} min read",
            pagination: {
              previous: "Previous",
              next: "Next",
              page: "Page {{current}} of {{total}}",
            },
            pullQuote: "Engineering decisions that look conservative on paper become obvious strengths once the road opens up.",
          }
        }
      },
      es: {
        translation: {
          nav: {
            home: "Inicio",
            news: "Noticias",
            reviews: "Reseñas",
            compare: "Comparar",
            about: "Sobre nosotros",
            contact: "Contacto",
          },
          home: {
            hero: {
              issue: "Edición 142 · Abril 2026",
              titlePrefix: "Dos ruedas.",
              titleAccent: "Infinitas",
              titleSuffix: " historias.",
              tagline: "Líder en motociclismo en Marruecos. Reseñas honestas, informes de carreras y las aventuras que nos mueven.",
              cta: "Leer últimas historias",
            },
            sections: {
              fresh: "Recién publicado",
              latestNews: "Últimas noticias",
              viewAll: "Ver todo",
              trending: "Tendencias actuales",
              whatReading: "Lo que leen los motociclistas",
              featuredReview: "Reseña destacada",
              allReviews: "Todas las reseñas",
              newsletterTitle: "Lo mejor de iRide Morocco, cada domingo.",
              newsletterDesc: "Un correo curado. Reseñas, resúmenes de carreras y las máquinas más bellas.",
              subscribeFree: "Suscribirse gratis",
            }
          },
          news: {
            title: "Noticias de Motociclismo",
            tagline: "El pulso del motociclismo",
            description: "Informes diarios sobre lanzamientos, carreras y las personas que mueven la industria.",
            back: "Volver a noticias",
            readTime: "{{min}} min de lectura",
            pagination: {
              previous: "Anterior",
              next: "Siguiente",
              page: "Página {{current}} de {{total}}",
            },
            pullQuote: "Las decisiones de ingeniería que parecen conservadoras en el papel se convierten en fortalezas evidentes una vez que el camino se abre.",
          },
          reviews: {
            title: "Reseñas",
            tagline: "Probado. Calificado. Reseñado.",
            pros: "Pros",
            cons: "Contras",
            watchOnInsta: "Ver en Instagram",
          },
          compare: {
            title: "Comparar Motos",
            tagline: "Lado a lado",
            description: "Elige hasta tres motocicletas y mira cómo se comparan: rendimiento, precio y veredicto de iRide.",
            addBike: "Añadir moto",
            chooseBike: "Elegir una motocicleta",
            specification: "Especificación",
            metrics: {
              price: "Precio",
              power: "Potencia",
              torque: "Par motor",
              topSpeed: "Velocidad máx",
              weight: "Peso",
              range: "Autonomía",
              fuel: "Consumo",
              rating: "Calificación editor",
            }
          },
          about: {
            title: "Sobre nosotros",
            tagline: "Nuestra historia",
            heroTitle: "Construido por motociclistas, <span class='italic text-accent'>para motociclistas.</span>",
            heroDesc: "iRide Morocco comenzó en 2014 como un proyecto apasionado. Doce años después, somos un equipo global.",
            stats: {
              years: "Años en la carretera",
              countries: "Países alcanzados",
              readers: "Lectores mensuales",
              reviews: "Reseñas publicadas",
            }
          },
          contact: {
            title: "Contacto",
            tagline: "Ponte en contacto",
            sendMessage: "Envíanos un mensaje",
            name: "Nombre",
            email: "Correo",
            message: "Mensaje",
            send: "Enviar mensaje",
          },
          common: {
            search: "Buscar motos, marcas, carreras…",
            subscribe: "Suscribirse",
            categories: {
              racing: "Carreras",
              newBikes: "Nuevas Motos",
              reviews: "Reseñas",
              guides: "Guías",
            },
            noSpam: "Semanalmente. Sin spam.",
            latestNews: "Últimas noticias",
            racing: "Carreras",
            aboutUs: "Sobre nosotros",
            rights: "© {{year}} iRide Morocco. Todos los derechos reservados.",
            footerDesc: "Líder en motociclismo en Marruecos. Noticias, reseñas y aventuras desde 2014.",
            relatedStories: "Historias relacionadas",
            keepReading: "Seguir leyendo",
            allNews: "Todas las noticias",
            spreadWord: "Compartir",
            notFound: "No encontrado",
            notFoundDesc: "La historia que buscas no existe.",
            oneEmail: "Un correo curado cada domingo.",
            moreLikeThis: "Más contenido como este en tu bandeja de entrada",
          }
        }
      },
      it: {
        translation: {
          nav: {
            home: "Home",
            news: "Notizie",
            reviews: "Recensioni",
            compare: "Confronta",
            about: "Chi siamo",
            contact: "Contatti",
          },
          home: {
            hero: {
              issue: "Edizione 142 · Aprile 2026",
              titlePrefix: "Due ruote.",
              titleAccent: "Infinite",
              titleSuffix: " storie.",
              tagline: "Il leader del motociclismo in Marocco. Recensioni oneste, cronaca delle gare e le avventure che ci emozionano.",
              cta: "Leggi le ultime storie",
            },
            sections: {
              fresh: "Appena pubblicato",
              latestNews: "Ultime notizie",
              viewAll: "Vedi tutto",
              trending: "Tendenze attuali",
              whatReading: "Cosa leggono i motociclisti",
              featuredReview: "Recensione in primo piano",
              allReviews: "Tutte le recensioni",
              newsletterTitle: "Il meglio di iRide Morocco, ogni domenica.",
              newsletterDesc: "Una email curata. Recensioni, riassunti delle gare e le macchine più belle.",
              subscribeFree: "Iscriviti gratuitamente",
            }
          },
          news: {
            title: "Notizie di Motociclismo",
            tagline: "Il polso del motociclismo",
            description: "Notizie quotidiane su lanci, gare e le persone che muovono l'industria.",
            back: "Torna alle notizie",
            readTime: "{{min}} min di lettura",
            pagination: {
              previous: "Precedente",
              next: "Successivo",
              page: "Pagina {{current}} di {{total}}",
            },
            pullQuote: "Le decisioni ingegneristiche che sembrano conservative sulla carta diventano punti di forza evidenti una volta che la strada si apre.",
          },
          reviews: {
            title: "Recensioni",
            tagline: "Testato. Valutato. Recensito.",
            pros: "Pro",
            cons: "Contro",
            watchOnInsta: "Guarda su Instagram",
          },
          compare: {
            title: "Confronta Moto",
            tagline: "Fianco a fianco",
            description: "Scegli fino a tre motociclette e guarda come si confrontano: prestazioni, prezzo e verdetto iRide.",
            addBike: "Aggiungi moto",
            chooseBike: "Scegli una motocicletta",
            specification: "Specifica",
            metrics: {
              price: "Prezzo",
              power: "Potenza",
              torque: "Coppia",
              topSpeed: "Velocità max",
              weight: "Peso",
              range: "Autonomia",
              fuel: "Consumo",
              rating: "Valutazione editor",
            }
          },
          about: {
            title: "Chi siamo",
            tagline: "La nostra storia",
            heroTitle: "Costruito da motociclisti, <span class='italic text-accent'>per i motociclisti.</span>",
            heroDesc: "iRide Morocco è iniziato nel 2014 come progetto di passione. Dodici anni dopo, siamo un team globale.",
            stats: {
              years: "Anni sulla strada",
              countries: "Paesi raggiunti",
              readers: "Lettori mensili",
              reviews: "Recensioni pubblicate",
            }
          },
          contact: {
            title: "Contatti",
            tagline: "Mettiti in contatto",
            sendMessage: "Inviaci un messaggio",
            name: "Nome",
            email: "Email",
            message: "Messaggio",
            send: "Invia messaggio",
          },
          common: {
            search: "Cerca moto, marche, gare…",
            subscribe: "Iscriviti",
            categories: {
              racing: "Gare",
              newBikes: "Nuove Moto",
              reviews: "Recensioni",
              guides: "Guide",
            },
            noSpam: "Settimanale. No spam.",
            latestNews: "Ultime notizie",
            racing: "Gare",
            aboutUs: "Chi siamo",
            rights: "© {{year}} iRide Morocco. Tutti i diritti riservati.",
            footerDesc: "Il leader del motociclismo in Marocco. Notizie, recensioni e avventure dal 2014.",
            relatedStories: "Storie correlate",
            keepReading: "Continua a leggere",
            allNews: "Tutte le notizie",
            spreadWord: "Condividi",
            notFound: "Non trovato",
            notFoundDesc: "La storia che cerchi non esiste.",
            oneEmail: "Una email curata ogni domenica.",
            moreLikeThis: "Più contenuti come questo nella tua casella di posta",
          }
        }
      }
    }
  });

export default i18n;
