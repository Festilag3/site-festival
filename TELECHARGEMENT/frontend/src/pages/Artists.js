import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData } from '../data/mock';
import { Palette, Award, User, Mail, Phone } from 'lucide-react';

const Artists = () => {
  const { t } = useLanguage();

  const placeholderImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t({
              ar: "الفنانون المشاركون",
              fr: "Artistes Participants",
              en: "Participating Artists"
            })}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t({
              ar: "تعرف على الفنانين المبدعين المشاركين في المهرجان",
              fr: "Rencontrez les artistes créatifs participant au festival",
              en: "Meet the creative artists participating in the festival"
            })}
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {mockData.artists.map((artist, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={placeholderImage}
                  alt={artist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-600">
                  {t(artist.specialty)}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{artist.name}</h3>
                <p className="text-gray-600 mb-4">{t(artist.bio)}</p>
                
                <div className="flex items-center space-x-3 text-sm text-gray-500 mb-4">
                  <Palette className="w-4 h-4" />
                  <span>{t(artist.specialty)}</span>
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm">
                    {t({
                      ar: "عرض الأعمال",
                      fr: "Voir les œuvres",
                      en: "View Works"
                    })}
                  </button>
                  <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call for Artists */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8 mb-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t({
                ar: "هل أنت فنان؟",
                fr: "Êtes-vous un artiste?",
                en: "Are you an artist?"
              })}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              {t({
                ar: "انضم إلى مهرجاننا وأعرض أعمالك الفنية أمام جمهور واسع",
                fr: "Rejoignez notre festival et présentez vos œuvres d'art à un large public",
                en: "Join our festival and showcase your artwork to a wide audience"
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                {t({
                  ar: "قدم الآن",
                  fr: "Postuler maintenant",
                  en: "Apply Now"
                })}
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200">
                {t({
                  ar: "تعرف على المتطلبات",
                  fr: "Voir les exigences",
                  en: "View Requirements"
                })}
              </button>
            </div>
          </div>
        </div>

        {/* Artist Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t({
              ar: "فئات الفنانين",
              fr: "Catégories d'Artistes",
              en: "Artist Categories"
            })}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Palette className="w-8 h-8" />,
                title: {
                  ar: "فنانو الألوان المائية",
                  fr: "Artistes Aquarellistes",
                  en: "Watercolor Artists"
                },
                description: {
                  ar: "فنانون متخصصون في الرسم بالألوان المائية",
                  fr: "Artistes spécialisés dans la peinture à l'aquarelle",
                  en: "Artists specialized in watercolor painting"
                },
                count: "15+"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: {
                  ar: "مخرجو الأفلام",
                  fr: "Réalisateurs de Films",
                  en: "Film Directors"
                },
                description: {
                  ar: "مخرجون للأفلام القصيرة والوثائقية",
                  fr: "Réalisateurs de courts métrages et documentaires",
                  en: "Directors of short and documentary films"
                },
                count: "12+"
              },
              {
                icon: <User className="w-8 h-8" />,
                title: {
                  ar: "فنانون تشكيليون",
                  fr: "Artistes Plasticiens",
                  en: "Plastic Artists"
                },
                description: {
                  ar: "فنانون في مختلف مجالات الفنون التشكيلية",
                  fr: "Artistes dans divers domaines des arts plastiques",
                  en: "Artists in various plastic arts fields"
                },
                count: "20+"
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-purple-600 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t(category.title)}</h3>
                <p className="text-gray-600 mb-4">{t(category.description)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-purple-600">{category.count}</span>
                  <span className="text-sm text-gray-500">
                    {t({
                      ar: "مشارك",
                      fr: "participants",
                      en: "participants"
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Jury Information */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t({
              ar: "لجنة التحكيم",
              fr: "Jury du Festival",
              en: "Festival Jury"
            })}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t({
                  ar: "لجنة الألوان المائية",
                  fr: "Jury Aquarelle",
                  en: "Watercolor Jury"
                })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t({
                  ar: "خبراء في الفنون التشكيلية والألوان المائية",
                  fr: "Experts en arts plastiques et aquarelle",
                  en: "Experts in plastic arts and watercolor"
                })}
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t({
                  ar: "لجنة الأفلام",
                  fr: "Jury Films",
                  en: "Film Jury"
                })}
              </h3>
              <p className="text-gray-600 text-sm">
                {t({
                  ar: "مختصون في السينما والإنتاج السمعي البصري",
                  fr: "Spécialistes du cinéma et de la production audiovisuelle",
                  en: "Cinema and audiovisual production specialists"
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;