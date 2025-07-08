// Mock data for Festival Culturel National des Arts Plastiques et des Arts Visuels
export const mockData = {
  // Festival info
  festival: {
    name: {
      ar: "المهرجان الثقافي الوطني للفنون التشكيلية والفنون البصرية لولاية الأغواط",
      fr: "Festival Culturel National des Arts Plastiques et des Arts Visuels de la Wilaya de Laghouat",
      en: "National Cultural Festival of Plastic Arts and Visual Arts of Laghouat Province"
    },
    dates: {
      ar: "من 27 سبتمبر إلى 1 أكتوبر 2025",
      fr: "Du 27 septembre au 1 octobre 2025",
      en: "From September 27 to October 1, 2025"
    },
    location: {
      ar: "الأغواط، الجزائر",
      fr: "Laghouat, Algérie",
      en: "Laghouat, Algeria"
    },
    description: {
      ar: "مهرجان وطني يجمع بين الفنون التشكيلية والفنون البصرية، يقدم معارض الألوان المائية ومسابقات الأفلام القصيرة",
      fr: "Festival national alliant arts plastiques et arts visuels, présentant des expositions d'aquarelle et des compétitions de courts métrages",
      en: "National festival combining plastic arts and visual arts, featuring watercolor exhibitions and short film competitions"
    }
  },

  // Program schedule
  program: [
    {
      day: 1,
      date: "27/09/2025",
      morning: {
        time: "10h-12h",
        title: {
          ar: "افتتاح معرض الألوان المائية",
          fr: "Ouverture Expo Aquarelle",
          en: "Watercolor Exhibition Opening"
        },
        details: {
          ar: "حفل افتتاح - لقاء مع الفنانين",
          fr: "Vernissage - Rencontre artistes",
          en: "Opening ceremony - Meet the artists"
        }
      },
      afternoon: {
        time: "14h-18h",
        title: {
          ar: "ورشة الألوان المائية",
          fr: "Atelier Aquarelle",
          en: "Watercolor Workshop"
        },
        details: {
          ar: "تعريف الجمهور بالفن",
          fr: "Initiation public",
          en: "Public initiation"
        }
      },
      evening: {
        time: "18h-23h",
        title: {
          ar: "عروض #1-3",
          fr: "Projections #1-3",
          en: "Screenings #1-3"
        },
        details: {
          ar: "18س: فيلم الافتتاح، 20س: أفلام قصيرة (4/12), 22س: مجموعة خاصة",
          fr: "18h: Film d'ouverture, 20h: Courts métrages (4/12), 22h: Sélection spéciale",
          en: "6pm: Opening film, 8pm: Short films (4/12), 10pm: Special selection"
        }
      }
    },
    {
      day: 2,
      date: "28/09/2025",
      morning: {
        time: "10h-12h",
        title: {
          ar: "محاضرة: الألوان المائية المعاصرة",
          fr: "Conférence: L'aquarelle contemporaine",
          en: "Conference: Contemporary Watercolor"
        }
      },
      afternoon: {
        time: "14h-18h",
        title: {
          ar: "مسابقة الألوان المائية",
          fr: "Concours Aquarelle",
          en: "Watercolor Competition"
        },
        details: {
          ar: "جلسة إبداع - تداول لجنة التحكيم",
          fr: "Séance création - Jury en délibération",
          en: "Creation session - Jury deliberation"
        }
      },
      evening: {
        time: "18h-23h",
        title: {
          ar: "عروض #4-6",
          fr: "Projections #4-6",
          en: "Screenings #4-6"
        },
        details: {
          ar: "18س: أفلام قصيرة (4/12), 20س: موضوع 'الطبيعة', 22س: نقاش مع المخرجين",
          fr: "18h: Courts métrages (4/12), 20h: Thématique 'Nature', 22h: Débat avec réalisateurs",
          en: "6pm: Short films (4/12), 8pm: 'Nature' theme, 10pm: Debate with directors"
        }
      }
    },
    {
      day: 3,
      date: "29/09/2025",
      morning: {
        time: "10h-12h",
        title: {
          ar: "ورشة مختلطة: الرسم والسينما",
          fr: "Workshop Mixte: Peinture & Cinéma",
          en: "Mixed Workshop: Painting & Cinema"
        },
        details: {
          ar: "رسم حي",
          fr: "Live painting",
          en: "Live painting"
        }
      },
      afternoon: {
        time: "14h-18h",
        title: {
          ar: "معرض الألوان المائية",
          fr: "Expo Aquarelle",
          en: "Watercolor Exhibition"
        },
        details: {
          ar: "جولات مرشدة",
          fr: "Visites guidées",
          en: "Guided tours"
        }
      },
      evening: {
        time: "18h-23h",
        title: {
          ar: "عروض #7-9",
          fr: "Projections #7-9",
          en: "Screenings #7-9"
        },
        details: {
          ar: "18س: أفلام قصيرة (4/12), 20س: تجريبي + أداء, 22س: ليلة قصيرة",
          fr: "18h: Courts métrages (4/12), 20h: Expérimental + performance, 22h: Nuit courte",
          en: "6pm: Short films (4/12), 8pm: Experimental + performance, 10pm: Short night"
        }
      }
    },
    {
      day: 4,
      date: "30/09/2025",
      morning: {
        time: "10h-12h",
        title: {
          ar: "ماستركلاس السمعي البصري",
          fr: "Masterclass Audiovisuel",
          en: "Audiovisual Masterclass"
        },
        details: {
          ar: "ضيف خاص",
          fr: "Invité spécial",
          en: "Special guest"
        }
      },
      afternoon: {
        time: "14h-18h",
        title: {
          ar: "تصويت الجمهور",
          fr: "Vote Public",
          en: "Public Vote"
        },
        details: {
          ar: "أفضل فيلم قصير",
          fr: "Meilleur court métrage",
          en: "Best short film"
        }
      },
      evening: {
        time: "18h-23h",
        title: {
          ar: "عروض #10-12",
          fr: "Projections #10-12",
          en: "Screenings #10-12"
        },
        details: {
          ar: "18س: نهائي المسابقة, 20س: اختيار لجنة التحكيم, 22س: عرض أول",
          fr: "18h: Finale compétition, 20h: Sélection jury, 22h: Avant-première",
          en: "6pm: Competition final, 8pm: Jury selection, 10pm: Preview"
        }
      }
    },
    {
      day: 5,
      date: "01/10/2025",
      morning: {
        time: "10h-12h",
        title: {
          ar: "المعرض النهائي",
          fr: "Expo Finale",
          en: "Final Exhibition"
        },
        details: {
          ar: "أعمال مسابقة الألوان المائية",
          fr: "Œuvres concours aquarelle",
          en: "Watercolor competition works"
        }
      },
      afternoon: {
        time: "14h-18h",
        title: {
          ar: "حفل توزيع الجوائز",
          fr: "Cérémonie Prix",
          en: "Award Ceremony"
        },
        details: {
          ar: "توزيع جوائز الألوان المائية والأفلام",
          fr: "Remise des prix (aquarelle + films)",
          en: "Prize distribution (watercolor + films)"
        }
      },
      evening: {
        time: "18h-23h",
        title: {
          ar: "عرض #13 + كوكتيل",
          fr: "Projection #13 + Cocktail",
          en: "Screening #13 + Cocktail"
        },
        details: {
          ar: "18س: قائمة الفائزين بالأفلام القصيرة, 20س: حفل الختام",
          fr: "18h: Palmarès courts métrages, 20h: Clôture festive",
          en: "6pm: Short film awards, 8pm: Festive closing"
        }
      }
    }
  ],

  // Short films competition
  filmCompetition: [
    {
      session: 1,
      time: "20h",
      theme: {
        ar: "موضوع حر",
        fr: "Thème libre",
        en: "Free theme"
      },
      filmCount: 4,
      films: [
        { title: "Les Couleurs de l'Âme", director: "Ahmed Benali", duration: "12 min" },
        { title: "Reflets", director: "Fatima Khelif", duration: "8 min" },
        { title: "Lumière du Sahara", director: "Youssef Mansouri", duration: "15 min" },
        { title: "Fragments", director: "Nadia Bousekri", duration: "10 min" }
      ]
    },
    {
      session: 2,
      time: "18h",
      theme: {
        ar: "الحرية",
        fr: "Liberté",
        en: "Freedom"
      },
      filmCount: 4,
      films: [
        { title: "Envol", director: "Karim Hadji", duration: "11 min" },
        { title: "Barrières", director: "Leila Mokhtar", duration: "13 min" },
        { title: "Horizon", director: "Omar Belkacem", duration: "9 min" },
        { title: "Renaissance", director: "Amina Cherif", duration: "14 min" }
      ]
    },
    {
      session: 3,
      time: "18h",
      theme: {
        ar: "الابتكار",
        fr: "Innovation",
        en: "Innovation"
      },
      filmCount: 4,
      films: [
        { title: "Numérique", director: "Sami Bouaziz", duration: "10 min" },
        { title: "Transformation", director: "Rania Slimani", duration: "12 min" },
        { title: "Futur", director: "Mehdi Larbi", duration: "8 min" },
        { title: "Créativité", director: "Yasmine Hamdi", duration: "11 min" }
      ]
    }
  ],

  // Artists
  artists: [
    {
      name: "Rachid Talbi",
      specialty: {
        ar: "الألوان المائية",
        fr: "Aquarelle",
        en: "Watercolor"
      },
      bio: {
        ar: "فنان متخصص في الألوان المائية",
        fr: "Artiste spécialisé en aquarelle",
        en: "Artist specialized in watercolor"
      },
      image: "/images/artists/rachid-talbi.jpg"
    },
    {
      name: "Saidat Belkacem",
      specialty: {
        ar: "الفنون البصرية",
        fr: "Arts visuels",
        en: "Visual arts"
      },
      bio: {
        ar: "فنان في الفنون البصرية",
        fr: "Artiste en arts visuels",
        en: "Visual arts artist"
      },
      image: "/images/artists/saidat-belkacem.jpg"
    }
  ],

  // Gallery sections
  gallery: {
    watercolorWorks: [
      {
        title: "Paysage du Sahara",
        artist: "Rachid Talbi",
        image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04",
        description: "Aquarelle représentant les dunes du Sahara"
      },
      {
        title: "Oasis",
        artist: "Saidat Belkacem",
        image: "https://images.pexels.com/photos/2261165/pexels-photo-2261165.jpeg",
        description: "Scène d'oasis en aquarelle"
      }
    ],
    filmCaptures: [
      {
        title: "Scène du film 'Les Couleurs de l'Âme'",
        director: "Ahmed Benali",
        image: "https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9",
        description: "Capture d'écran du film en compétition"
      },
      {
        title: "Moment du film 'Reflets'",
        director: "Fatima Khelif",
        image: "https://images.unsplash.com/photo-1643753072748-cac34c448e3f",
        description: "Image emblématique du court métrage"
      }
    ],
    previousEvents: [
      {
        title: "Festival 2024 - Exposition",
        year: "2024",
        image: "https://images.unsplash.com/photo-1640350168509-756f1ef84b37",
        description: "Moments forts de l'édition précédente"
      },
      {
        title: "Cérémonie des prix 2024",
        year: "2024",
        image: "https://images.pexels.com/photos/32919544/pexels-photo-32919544.jpeg",
        description: "Remise des prix de l'édition 2024"
      }
    ]
  },

  // Location
  location: {
    address: {
      ar: "الأغواط، الجزائر",
      fr: "Laghouat, Algérie",
      en: "Laghouat, Algeria"
    },
    coordinates: {
      lat: 33.8008,
      lng: 2.8647
    },
    venues: [
      {
        name: {
          ar: "مركز الفنون الثقافي",
          fr: "Centre Culturel des Arts",
          en: "Cultural Arts Center"
        },
        address: "Avenue de l'Indépendance, Laghouat"
      },
      {
        name: {
          ar: "قاعة العروض الكبرى",
          fr: "Grande Salle de Projection",
          en: "Grand Screening Hall"
        },
        address: "Rue des Artistes, Laghouat"
      }
    ]
  },

  // Navigation
  navigation: {
    ar: [
      { label: "الرئيسية", href: "/" },
      { label: "البرنامج", href: "/program" },
      { label: "المعرض", href: "/gallery" },
      { label: "الفنانون", href: "/artists" },
      { label: "الموقع", href: "/location" },
      { label: "تصويت", href: "/vote" },
      { label: "اتصل بنا", href: "/contact" }
    ],
    fr: [
      { label: "Accueil", href: "/" },
      { label: "Programme", href: "/program" },
      { label: "Galerie", href: "/gallery" },
      { label: "Artistes", href: "/artists" },
      { label: "Localisation", href: "/location" },
      { label: "Vote", href: "/vote" },
      { label: "Contact", href: "/contact" }
    ],
    en: [
      { label: "Home", href: "/" },
      { label: "Program", href: "/program" },
      { label: "Gallery", href: "/gallery" },
      { label: "Artists", href: "/artists" },
      { label: "Location", href: "/location" },
      { label: "Vote", href: "/vote" },
      { label: "Contact", href: "/contact" }
    ]
  }
};

// Language context helper
export const languages = {
  ar: { name: "العربية", code: "ar", dir: "rtl" },
  fr: { name: "Français", code: "fr", dir: "ltr" },
  en: { name: "English", code: "en", dir: "ltr" }
};

// Save to localStorage helper
export const saveToStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

// Load from localStorage helper
export const loadFromStorage = (key) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error("Error loading from storage:", error);
    return null;
  }
};