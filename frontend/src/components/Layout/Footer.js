import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { mockData } from '../../data/mock';
import { Mail, Phone, MapPin, Calendar, Users } from 'lucide-react';

const Footer = () => {
  const { t, currentLanguage } = useLanguage();

  const quickLinks = {
    ar: [
      { label: "البرنامج", href: "/program" },
      { label: "المعرض", href: "/gallery" },
      { label: "الفنانون", href: "/artists" },
      { label: "تصويت", href: "/vote" }
    ],
    fr: [
      { label: "Programme", href: "/program" },
      { label: "Galerie", href: "/gallery" },
      { label: "Artistes", href: "/artists" },
      { label: "Vote", href: "/vote" }
    ],
    en: [
      { label: "Program", href: "/program" },
      { label: "Gallery", href: "/gallery" },
      { label: "Artists", href: "/artists" },
      { label: "Vote", href: "/vote" }
    ]
  };

  const contactInfo = {
    ar: {
      email: "info@festival-laghouat.dz",
      phone: "+213 29 XX XX XX",
      address: "مركز الفنون الثقافي، الأغواط"
    },
    fr: {
      email: "info@festival-laghouat.dz",
      phone: "+213 29 XX XX XX",
      address: "Centre Culturel des Arts, Laghouat"
    },
    en: {
      email: "info@festival-laghouat.dz",
      phone: "+213 29 XX XX XX",
      address: "Cultural Arts Center, Laghouat"
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Festival Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">F</span>
              </div>
              <h3 className={`text-lg font-bold ${
                currentLanguage === 'ar' ? 'arabic-festival-title' : ''
              }`}>{t(mockData.festival.name)}</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t(mockData.festival.description)}
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>{t(mockData.festival.dates)}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>{t(mockData.festival.location)}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({
                ar: "روابط سريعة",
                fr: "Liens rapides",
                en: "Quick Links"
              })}
            </h4>
            <ul className="space-y-2">
              {quickLinks[t.currentLanguage]?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({
                ar: "اتصل بنا",
                fr: "Contact",
                en: "Contact"
              })}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>{contactInfo[t.currentLanguage]?.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>{contactInfo[t.currentLanguage]?.phone}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo[t.currentLanguage]?.address}</span>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t({
                ar: "إحصائيات",
                fr: "Statistiques",
                en: "Statistics"
              })}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Users className="w-4 h-4" />
                <span>
                  {t({
                    ar: "12+ فيلم قصير",
                    fr: "12+ courts métrages",
                    en: "12+ short films"
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Users className="w-4 h-4" />
                <span>
                  {t({
                    ar: "20+ فنان",
                    fr: "20+ artistes",
                    en: "20+ artists"
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>
                  {t({
                    ar: "5 أيام",
                    fr: "5 jours",
                    en: "5 days"
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t({
              ar: "© 2025 المهرجان الثقافي الوطني للفنون التشكيلية والفنون البصرية - الأغواط. جميع الحقوق محفوظة.",
              fr: "© 2025 Festival Culturel National des Arts Plastiques et des Arts Visuels - Laghouat. Tous droits réservés.",
              en: "© 2025 National Cultural Festival of Plastic Arts and Visual Arts - Laghouat. All rights reserved."
            })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;