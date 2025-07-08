import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData } from '../data/mock';
import { Palette, Film, Camera, Heart, Eye, Download } from 'lucide-react';

const Gallery = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('watercolor');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = [
    {
      id: 'watercolor',
      icon: <Palette className="w-5 h-5" />,
      label: {
        ar: "أعمال الألوان المائية",
        fr: "Œuvres d'Aquarelle",
        en: "Watercolor Works"
      },
      data: mockData.gallery.watercolorWorks
    },
    {
      id: 'films',
      icon: <Film className="w-5 h-5" />,
      label: {
        ar: "لقطات من الأفلام",
        fr: "Captures de Films",
        en: "Film Captures"
      },
      data: mockData.gallery.filmCaptures
    },
    {
      id: 'events',
      icon: <Camera className="w-5 h-5" />,
      label: {
        ar: "فعاليات سابقة",
        fr: "Événements Précédents",
        en: "Previous Events"
      },
      data: mockData.gallery.previousEvents
    }
  ];

  const currentData = tabs.find(tab => tab.id === activeTab)?.data || [];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t({
              ar: "معرض الصور",
              fr: "Galerie Photos",
              en: "Photo Gallery"
            })}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t({
              ar: "اكتشف أعمال الفنانين ولقطات من الأفلام وذكريات الفعاليات السابقة",
              fr: "Découvrez les œuvres des artistes, les captures de films et les souvenirs des événements précédents",
              en: "Discover artists' works, film captures, and memories from previous events"
            })}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-purple-50 hover:text-purple-600'
              }`}
            >
              {tab.icon}
              <span>{t(tab.label)}</span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  {item.artist || item.director || item.year}
                </p>
                <p className="text-xs text-gray-500 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {currentData.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Camera className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {t({
                ar: "لا توجد صور متاحة",
                fr: "Aucune image disponible",
                en: "No images available"
              })}
            </h3>
            <p className="text-gray-500">
              {t({
                ar: "سيتم إضافة المزيد من الصور قريباً",
                fr: "Plus d'images seront ajoutées bientôt",
                en: "More images will be added soon"
              })}
            </p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain"
            />
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-sm mb-1">
                {selectedImage.artist || selectedImage.director || selectedImage.year}
              </p>
              <p className="text-sm opacity-75">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;