import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData } from '../data/mock';
import { Calendar, Clock, MapPin, Users, Film, Palette } from 'lucide-react';

const Program = () => {
  const { t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState(1);

  const dayNames = {
    ar: ["الجمعة", "السبت", "الأحد", "الاثنين", "الثلاثاء"],
    fr: ["Vendredi", "Samedi", "Dimanche", "Lundi", "Mardi"],
    en: ["Friday", "Saturday", "Sunday", "Monday", "Tuesday"]
  };

  const timeSlots = [
    { key: 'morning', icon: <Clock className="w-5 h-5" />, color: 'bg-yellow-100 text-yellow-800' },
    { key: 'afternoon', icon: <Clock className="w-5 h-5" />, color: 'bg-orange-100 text-orange-800' },
    { key: 'evening', icon: <Film className="w-5 h-5" />, color: 'bg-purple-100 text-purple-800' }
  ];

  const getActivityIcon = (activity) => {
    if (activity.includes('Aquarelle') || activity.includes('الألوان المائية') || activity.includes('Watercolor')) {
      return <Palette className="w-5 h-5" />;
    }
    if (activity.includes('Projection') || activity.includes('عروض') || activity.includes('Screening')) {
      return <Film className="w-5 h-5" />;
    }
    return <Users className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t({
              ar: "برنامج المهرجان",
              fr: "Programme du Festival",
              en: "Festival Program"
            })}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t({
              ar: "اكتشف جدول الفعاليات المفصل لكل يوم من أيام المهرجان",
              fr: "Découvrez le programme détaillé de chaque jour du festival",
              en: "Discover the detailed schedule for each day of the festival"
            })}
          </p>
        </div>

        {/* Day Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {mockData.program.map((day, index) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedDay === day.day
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              <div className="text-sm">
                {t({
                  ar: `اليوم ${day.day}`,
                  fr: `Jour ${day.day}`,
                  en: `Day ${day.day}`
                })}
              </div>
              <div className="text-xs opacity-75">
                {dayNames[t.currentLanguage || 'fr'][index]} {day.date}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Day Program */}
        {mockData.program.filter(day => day.day === selectedDay).map((day) => (
          <div key={day.day} className="space-y-6">
            {/* Day Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 text-center">
              <h2 className="text-2xl font-bold mb-2">
                {t({
                  ar: `اليوم ${day.day} - ${dayNames.ar[day.day - 1]}`,
                  fr: `Jour ${day.day} - ${dayNames.fr[day.day - 1]}`,
                  en: `Day ${day.day} - ${dayNames.en[day.day - 1]}`
                })}
              </h2>
              <p className="text-lg opacity-90">{day.date}</p>
            </div>

            {/* Time Slots */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timeSlots.map((slot) => {
                const activity = day[slot.key];
                if (!activity) return null;

                return (
                  <div
                    key={slot.key}
                    className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${slot.color}`}>
                      {slot.icon}
                      <span>{activity.time}</span>
                    </div>
                    
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="text-gray-600 mt-1">
                        {getActivityIcon(t(activity.title))}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {t(activity.title)}
                        </h3>
                        {activity.details && (
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {t(activity.details)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Film Competition Schedule */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t({
              ar: "جدول مسابقة الأفلام القصيرة",
              fr: "Programme de la Compétition de Courts Métrages",
              en: "Short Film Competition Schedule"
            })}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockData.filmCompetition.map((session, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t({
                      ar: `الجلسة ${session.session}`,
                      fr: `Séance ${session.session}`,
                      en: `Session ${session.session}`
                    })}
                  </h3>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                    {session.time}
                  </span>
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-gray-600">
                    {t({
                      ar: "الموضوع:",
                      fr: "Thème:",
                      en: "Theme:"
                    })}
                  </span>
                  <p className="text-gray-900 font-medium">{t(session.theme)}</p>
                </div>

                <div className="space-y-3">
                  {session.films.map((film, filmIndex) => (
                    <div key={filmIndex} className="border-l-4 border-purple-400 pl-4 py-2">
                      <h4 className="font-medium text-gray-900">{film.title}</h4>
                      <p className="text-sm text-gray-600">{film.director}</p>
                      <span className="text-xs text-gray-500">{film.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* General Information */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {t({
              ar: "معلومات عامة",
              fr: "Informations Générales",
              en: "General Information"
            })}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                {t({
                  ar: "المواقع",
                  fr: "Lieux",
                  en: "Venues"
                })}
              </h4>
              <ul className="space-y-2 text-gray-600">
                {mockData.location.venues.map((venue, index) => (
                  <li key={index}>
                    <strong>{t(venue.name)}</strong>
                    <br />
                    <span className="text-sm">{venue.address}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2 text-purple-600" />
                {t({
                  ar: "ملاحظات مهمة",
                  fr: "Notes Importantes",
                  en: "Important Notes"
                })}
              </h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• {t({
                  ar: "جميع الفعاليات مجانية",
                  fr: "Toutes les activités sont gratuites",
                  en: "All activities are free"
                })}</li>
                <li>• {t({
                  ar: "يُنصح بالحضور مبكراً",
                  fr: "Il est recommandé d'arriver tôt",
                  en: "Early arrival is recommended"
                })}</li>
                <li>• {t({
                  ar: "ورش العمل تتطلب تسجيل مسبق",
                  fr: "Les ateliers nécessitent une inscription préalable",
                  en: "Workshops require prior registration"
                })}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;