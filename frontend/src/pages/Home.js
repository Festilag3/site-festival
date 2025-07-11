import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData } from '../data/mock';
import { Calendar, MapPin, Users, Trophy, Palette, Film, ArrowRight } from 'lucide-react';

const Home = () => {
  const { t, currentLanguage } = useLanguage();

  const features = [
    {
      icon: <Palette className="w-8 h-8" />,
      title: {
        ar: "معرض الألوان المائية",
        fr: "Exposition d'Aquarelle",
        en: "Watercolor Exhibition"
      },
      description: {
        ar: "أعمال فنية مميزة من أبرز الفنانين",
        fr: "Œuvres artistiques remarquables des meilleurs artistes",
        en: "Outstanding artistic works from top artists"
      }
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: {
        ar: "مسابقة الأفلام القصيرة",
        fr: "Compétition de Courts Métrages",
        en: "Short Film Competition"
      },
      description: {
        ar: "12 فيلم قصير في مواضيع متنوعة",
        fr: "12 courts métrages sur des thèmes variés",
        en: "12 short films on diverse themes"
      }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: {
        ar: "ورش تفاعلية",
        fr: "Ateliers Interactifs",
        en: "Interactive Workshops"
      },
      description: {
        ar: "ورش عمل للجمهور مع الفنانين",
        fr: "Ateliers pour le public avec les artistes",
        en: "Public workshops with artists"
      }
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: {
        ar: "جوائز وتقديرات",
        fr: "Prix et Récompenses",
        en: "Awards and Recognition"
      },
      description: {
        ar: "جوائز لأفضل الأعمال الفنية",
        fr: "Prix pour les meilleures œuvres artistiques",
        en: "Awards for the best artistic works"
      }
    }
  ];

  const stats = [
    {
      number: "12+",
      label: {
        ar: "فيلم قصير",
        fr: "Courts métrages",
        en: "Short films"
      }
    },
    {
      number: "20+",
      label: {
        ar: "فنان",
        fr: "Artistes",
        en: "Artists"
      }
    },
    {
      number: "5",
      label: {
        ar: "أيام",
        fr: "Jours",
        en: "Days"
      }
    },
    {
      number: "3",
      label: {
        ar: "لغات",
        fr: "Langues",
        en: "Languages"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1630609083938-3acb39a06392')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-900/80" />
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            currentLanguage === 'ar' ? 'arabic-festival-title' : ''
          }`}>
            {t(mockData.festival.name)}
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t(mockData.festival.description)}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center space-x-3 text-lg">
              <Calendar className="w-6 h-6 text-yellow-400" />
              <span>{t(mockData.festival.dates)}</span>
            </div>
            <div className="flex items-center space-x-3 text-lg">
              <MapPin className="w-6 h-6 text-yellow-400" />
              <span>{t(mockData.festival.location)}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/program"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t({
                ar: "استكشف البرنامج",
                fr: "Découvrir le Programme",
                en: "Explore Program"
              })}
            </Link>
            <Link
              to="/gallery"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20"
            >
              {t({
                ar: "المعرض",
                fr: "Galerie",
                en: "Gallery"
              })}
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 laghouat-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t({
                ar: "مميزات المهرجان",
                fr: "Les Highlights du Festival",
                en: "Festival Highlights"
              })}
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              {t({
                ar: "اكتشف ما يجعل مهرجاننا تجربة فريدة ومميزة",
                fr: "Découvrez ce qui rend notre festival unique et exceptionnel",
                en: "Discover what makes our festival unique and exceptional"
              })}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t(feature.title)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(feature.description)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t({
                ar: "المهرجان في أرقام",
                fr: "Le Festival en Chiffres",
                en: "Festival in Numbers"
              })}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300">
                  {t(stat.label)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t({
                ar: "آخر الأخبار",
                fr: "Dernières Nouvelles",
                en: "Latest News"
              })}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1518998053901-5348d3961a04" 
                alt="News 1" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t({
                    ar: "افتتاح التسجيل للمشاركة",
                    fr: "Ouverture des inscriptions",
                    en: "Registration Now Open"
                  })}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t({
                    ar: "بدأت فترة التسجيل للفنانين الراغبين في المشاركة",
                    fr: "La période d'inscription pour les artistes a commencé",
                    en: "Registration period for artists has begun"
                  })}
                </p>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  {t({
                    ar: "اقرأ المزيد",
                    fr: "Lire plus",
                    en: "Read more"
                  })}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1527979809431-ea3d5c0c01c9" 
                alt="News 2" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t({
                    ar: "إعلان لجنة التحكيم",
                    fr: "Annonce du jury",
                    en: "Jury Announcement"
                  })}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t({
                    ar: "تم الإعلان عن أعضاء لجنة التحكيم لهذا العام",
                    fr: "Les membres du jury de cette année ont été annoncés",
                    en: "This year's jury members have been announced"
                  })}
                </p>
                <Link 
                  to="/artists" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  {t({
                    ar: "اقرأ المزيد",
                    fr: "Lire plus",
                    en: "Read more"
                  })}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1640350168509-756f1ef84b37" 
                alt="News 3" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {t({
                    ar: "ورش العمل المجانية",
                    fr: "Ateliers gratuits",
                    en: "Free Workshops"
                  })}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t({
                    ar: "ورش عمل مجانية للجمهور خلال أيام المهرجان",
                    fr: "Ateliers gratuits pour le public pendant le festival",
                    en: "Free workshops for the public during the festival"
                  })}
                </p>
                <Link 
                  to="/program" 
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  {t({
                    ar: "اقرأ المزيد",
                    fr: "Lire plus",
                    en: "Read more"
                  })}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t({
              ar: "انضم إلينا في هذه التجربة الفريدة",
              fr: "Rejoignez-nous pour cette expérience unique",
              en: "Join us for this unique experience"
            })}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            {t({
              ar: "كن جزءاً من أكبر مهرجان للفنون في الأغواط",
              fr: "Faites partie du plus grand festival artistique de Laghouat",
              en: "Be part of the biggest art festival in Laghouat"
            })}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              {t({
                ar: "سجل الآن",
                fr: "S'inscrire maintenant",
                en: "Register Now"
              })}
            </Link>
            <Link
              to="/vote"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg border border-white/20"
            >
              {t({
                ar: "صوت للأفلام",
                fr: "Voter pour les films",
                en: "Vote for Films"
              })}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;