import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData } from '../data/mock';
import { MapPin, Navigation, Clock, Car, Bus, Plane, Train, Info } from 'lucide-react';

const Location = () => {
  const { t } = useLanguage();
  const [selectedVenue, setSelectedVenue] = useState(0);

  const transportOptions = [
    {
      icon: <Plane className="w-6 h-6" />,
      title: {
        ar: "الطيران",
        fr: "Avion",
        en: "By Plane"
      },
      description: {
        ar: "مطار الأغواط الدولي - 15 دقيقة من وسط المدينة",
        fr: "Aéroport international de Laghouat - 15 min du centre-ville",
        en: "Laghouat International Airport - 15 min from city center"
      }
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: {
        ar: "بالسيارة",
        fr: "En voiture",
        en: "By Car"
      },
      description: {
        ar: "الطريق السريع الشرق-غرب - مواقف مجانية متوفرة",
        fr: "Autoroute Est-Ouest - Parking gratuit disponible",
        en: "East-West Highway - Free parking available"
      }
    },
    {
      icon: <Bus className="w-6 h-6" />,
      title: {
        ar: "الحافلة",
        fr: "Bus",
        en: "By Bus"
      },
      description: {
        ar: "محطة الحافلات المركزية - خدمة منتظمة من المدن الكبرى",
        fr: "Gare routière centrale - Service régulier des grandes villes",
        en: "Central bus station - Regular service from major cities"
      }
    },
    {
      icon: <Train className="w-6 h-6" />,
      title: {
        ar: "القطار",
        fr: "Train",
        en: "By Train"
      },
      description: {
        ar: "محطة الأغواط - متصلة بالشبكة الوطنية",
        fr: "Gare de Laghouat - Connectée au réseau national",
        en: "Laghouat Station - Connected to national network"
      }
    }
  ];

  const nearbyPlaces = [
    {
      name: {
        ar: "مركز المدينة التجاري",
        fr: "Centre commercial",
        en: "Shopping Center"
      },
      distance: "500m",
      icon: <MapPin className="w-4 h-4" />
    },
    {
      name: {
        ar: "فندق الأغواط",
        fr: "Hôtel Laghouat",
        en: "Laghouat Hotel"
      },
      distance: "200m",
      icon: <MapPin className="w-4 h-4" />
    },
    {
      name: {
        ar: "مطعم الواحة",
        fr: "Restaurant Oasis",
        en: "Oasis Restaurant"
      },
      distance: "150m",
      icon: <MapPin className="w-4 h-4" />
    },
    {
      name: {
        ar: "مسجد الأغواط الكبير",
        fr: "Grande Mosquée de Laghouat",
        en: "Grand Mosque of Laghouat"
      },
      distance: "300m",
      icon: <MapPin className="w-4 h-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t({
              ar: "موقع المهرجان",
              fr: "Localisation du Festival",
              en: "Festival Location"
            })}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t({
              ar: "اكتشف مواقع فعاليات المهرجان وكيفية الوصول إليها",
              fr: "Découvrez les lieux du festival et comment s'y rendre",
              en: "Discover festival venues and how to get there"
            })}
          </p>
        </div>

        {/* Main Location Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map Placeholder */}
            <div className="relative bg-gray-300 h-64 lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {t({
                      ar: "خريطة تفاعلية",
                      fr: "Carte Interactive",
                      en: "Interactive Map"
                    })}
                  </h3>
                  <p className="text-sm opacity-90">
                    {t({
                      ar: "الأغواط، الجزائر",
                      fr: "Laghouat, Algérie",
                      en: "Laghouat, Algeria"
                    })}
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                <Navigation className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            
            {/* Location Info */}
            <div className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {t({
                      ar: "الأغواط",
                      fr: "Laghouat",
                      en: "Laghouat"
                    })}
                  </h2>
                  <p className="text-gray-600">
                    {t({
                      ar: "ولاية الأغواط، الجزائر",
                      fr: "Wilaya de Laghouat, Algérie",
                      en: "Laghouat Province, Algeria"
                    })}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t({
                        ar: "العنوان الرئيسي",
                        fr: "Adresse principale",
                        en: "Main Address"
                      })}
                    </h4>
                    <p className="text-gray-600">{t(mockData.location.address)}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t({
                        ar: "تواريخ المهرجان",
                        fr: "Dates du festival",
                        en: "Festival Dates"
                      })}
                    </h4>
                    <p className="text-gray-600">{t(mockData.festival.dates)}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {t({
                        ar: "معلومات إضافية",
                        fr: "Informations supplémentaires",
                        en: "Additional Information"
                      })}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {t({
                        ar: "جميع المواقع في وسط المدينة، سهولة في الوصول",
                        fr: "Tous les lieux sont au centre-ville, facilement accessibles",
                        en: "All venues are in city center, easily accessible"
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Venues */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t({
              ar: "مواقع الفعاليات",
              fr: "Lieux des Événements",
              en: "Event Venues"
            })}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockData.location.venues.map((venue, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${
                  selectedVenue === index ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setSelectedVenue(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {t(venue.name)}
                    </h3>
                    <p className="text-gray-600 mb-3">{venue.address}</p>
                    <div className="flex flex-wrap gap-2">
                      {index === 0 && (
                        <>
                          <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                            {t({
                              ar: "معرض الألوان المائية",
                              fr: "Exposition Aquarelle",
                              en: "Watercolor Exhibition"
                            })}
                          </span>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                            {t({
                              ar: "ورش العمل",
                              fr: "Ateliers",
                              en: "Workshops"
                            })}
                          </span>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                            {t({
                              ar: "عروض الأفلام",
                              fr: "Projections",
                              en: "Film Screenings"
                            })}
                          </span>
                          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                            {t({
                              ar: "حفل الختام",
                              fr: "Cérémonie de clôture",
                              en: "Closing Ceremony"
                            })}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t({
              ar: "كيفية الوصول",
              fr: "Comment s'y rendre",
              en: "How to Get There"
            })}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-purple-600 mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t(option.title)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(option.description)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Places */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t({
              ar: "أماكن قريبة",
              fr: "Lieux à proximité",
              en: "Nearby Places"
            })}
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {nearbyPlaces.map((place, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-purple-600">{place.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{t(place.name)}</h4>
                      <p className="text-sm text-gray-600">{place.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Accommodation */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t({
                ar: "الإقامة",
                fr: "Hébergement",
                en: "Accommodation"
              })}
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              {t({
                ar: "نوفر قائمة بأفضل الفنادق والمطاعم القريبة من مواقع المهرجان",
                fr: "Nous fournissons une liste des meilleurs hôtels et restaurants près des lieux du festival",
                en: "We provide a list of the best hotels and restaurants near festival venues"
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
                {t({
                  ar: "عرض الفنادق",
                  fr: "Voir les hôtels",
                  en: "View Hotels"
                })}
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200">
                {t({
                  ar: "المطاعم القريبة",
                  fr: "Restaurants à proximité",
                  en: "Nearby Restaurants"
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;