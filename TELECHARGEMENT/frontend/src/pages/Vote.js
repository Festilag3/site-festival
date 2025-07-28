import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData, saveToStorage, loadFromStorage } from '../data/mock';
import { Film, Star, Check, Trophy, Users, Calendar } from 'lucide-react';

const Vote = () => {
  const { t } = useLanguage();
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);
  const [votes, setVotes] = useState({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    // Load existing votes from localStorage
    const savedVotes = loadFromStorage('festival-votes');
    const userVoted = loadFromStorage('user-has-voted');
    
    if (savedVotes) {
      setVotes(savedVotes);
    }
    if (userVoted) {
      setHasVoted(true);
    }
  }, []);

  const handleVote = (filmTitle) => {
    if (hasVoted) return;
    
    const newVotes = { ...votes };
    newVotes[filmTitle] = (newVotes[filmTitle] || 0) + 1;
    
    setVotes(newVotes);
    setSelectedFilm(filmTitle);
    setHasVoted(true);
    
    // Save to localStorage
    saveToStorage('festival-votes', newVotes);
    saveToStorage('user-has-voted', true);
  };

  const getAllFilms = () => {
    return mockData.filmCompetition.flatMap(session => 
      session.films.map(film => ({
        ...film,
        session: session.session,
        theme: session.theme
      }))
    );
  };

  const getVoteCount = (filmTitle) => {
    return votes[filmTitle] || 0;
  };

  const getTotalVotes = () => {
    return Object.values(votes).reduce((total, count) => total + count, 0);
  };

  const getVotePercentage = (filmTitle) => {
    const total = getTotalVotes();
    if (total === 0) return 0;
    return ((getVoteCount(filmTitle) / total) * 100).toFixed(1);
  };

  const getTopFilms = () => {
    const allFilms = getAllFilms();
    return allFilms
      .map(film => ({
        ...film,
        voteCount: getVoteCount(film.title),
        percentage: getVotePercentage(film.title)
      }))
      .sort((a, b) => b.voteCount - a.voteCount)
      .slice(0, 3);
  };

  const allFilms = getAllFilms();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t({
              ar: "تصويت الجمهور",
              fr: "Vote du Public",
              en: "Public Vote"
            })}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t({
              ar: "صوت لأفضل فيلم قصير في مسابقة المهرجان",
              fr: "Votez pour le meilleur court métrage de la compétition du festival",
              en: "Vote for the best short film in the festival competition"
            })}
          </p>
        </div>

        {/* Voting Status */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-600">
                  {t({
                    ar: "إجمالي الأصوات:",
                    fr: "Total des votes:",
                    en: "Total votes:"
                  })}
                </span>
                <span className="font-semibold text-purple-600">{getTotalVotes()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gray-600" />
                <span className="text-sm text-gray-600">
                  {t({
                    ar: "ينتهي التصويت: 30 سبتمبر",
                    fr: "Vote jusqu'au: 30 septembre",
                    en: "Voting ends: September 30"
                  })}
                </span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setShowResults(!showResults)}
                className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg hover:bg-purple-200 transition-colors duration-200"
              >
                {showResults ? t({
                  ar: "إخفاء النتائج",
                  fr: "Masquer les résultats",
                  en: "Hide results"
                }) : t({
                  ar: "عرض النتائج",
                  fr: "Voir les résultats",
                  en: "Show results"
                })}
              </button>
            </div>
          </div>
        </div>

        {/* Voting Success Message */}
        {hasVoted && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8">
            <div className="flex items-center space-x-3">
              <Check className="w-6 h-6 text-green-600" />
              <div>
                <h3 className="text-lg font-semibold text-green-800">
                  {t({
                    ar: "شكراً لك على التصويت!",
                    fr: "Merci pour votre vote!",
                    en: "Thank you for voting!"
                  })}
                </h3>
                <p className="text-green-700">
                  {t({
                    ar: `لقد صوت لـ "${selectedFilm}"`,
                    fr: `Vous avez voté pour "${selectedFilm}"`,
                    en: `You voted for "${selectedFilm}"`
                  })}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Top Films (Results) */}
        {showResults && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
              {t({
                ar: "أفضل الأفلام",
                fr: "Meilleurs Films",
                en: "Top Films"
              })}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getTopFilms().map((film, index) => (
                <div
                  key={film.title}
                  className={`bg-white rounded-xl p-6 shadow-lg border-2 ${
                    index === 0 ? 'border-yellow-300 bg-yellow-50' :
                    index === 1 ? 'border-gray-300 bg-gray-50' :
                    'border-orange-300 bg-orange-50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' :
                      index === 1 ? 'bg-gray-500' :
                      'bg-orange-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{film.percentage}%</div>
                      <div className="text-sm text-gray-600">{film.voteCount} votes</div>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{film.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">{film.director}</p>
                  <p className="text-xs text-gray-500">{film.duration}</p>
                  
                  <div className="mt-4">
                    <div className="bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-500' :
                          'bg-orange-500'
                        }`}
                        style={{ width: `${film.percentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Films Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allFilms.map((film, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                selectedFilm === film.title ? 'ring-2 ring-purple-500 bg-purple-50' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Film className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-600">
                    {t({
                      ar: `الجلسة ${film.session}`,
                      fr: `Séance ${film.session}`,
                      en: `Session ${film.session}`
                    })}
                  </span>
                </div>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  {t(film.theme)}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{film.title}</h3>
              <p className="text-sm text-gray-600 mb-1">{film.director}</p>
              <p className="text-xs text-gray-500 mb-4">{film.duration}</p>
              
              {showResults && (
                <div className="mb-4">
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="text-gray-600">
                      {t({
                        ar: "الأصوات",
                        fr: "Votes",
                        en: "Votes"
                      })}
                    </span>
                    <span className="font-semibold text-purple-600">
                      {getVoteCount(film.title)} ({getVotePercentage(film.title)}%)
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getVotePercentage(film.title)}%` }}
                    />
                  </div>
                </div>
              )}
              
              <button
                onClick={() => handleVote(film.title)}
                disabled={hasVoted}
                className={`w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                  hasVoted 
                    ? selectedFilm === film.title
                      ? 'bg-green-100 text-green-800 cursor-not-allowed'
                      : 'bg-gray-100 text-gray-500 cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700 transform hover:scale-105'
                }`}
              >
                {hasVoted ? (
                  selectedFilm === film.title ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>{t({
                        ar: "تم التصويت",
                        fr: "Voté",
                        en: "Voted"
                      })}</span>
                    </>
                  ) : (
                    <Star className="w-5 h-5" />
                  )
                ) : (
                  <>
                    <Star className="w-5 h-5" />
                    <span>{t({
                      ar: "صوت",
                      fr: "Voter",
                      en: "Vote"
                    })}</span>
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Voting Info */}
        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            {t({
              ar: "معلومات التصويت",
              fr: "Informations sur le vote",
              en: "Voting Information"
            })}
          </h3>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• {t({
              ar: "يمكن لكل شخص التصويت مرة واحدة فقط",
              fr: "Chaque personne ne peut voter qu'une seule fois",
              en: "Each person can vote only once"
            })}</li>
            <li>• {t({
              ar: "سيتم الإعلان عن النتائج في حفل الختام",
              fr: "Les résultats seront annoncés lors de la cérémonie de clôture",
              en: "Results will be announced at the closing ceremony"
            })}</li>
            <li>• {t({
              ar: "جائزة أفضل فيلم حسب تصويت الجمهور",
              fr: "Prix du meilleur film selon le vote du public",
              en: "Best film award according to public vote"
            })}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Vote;