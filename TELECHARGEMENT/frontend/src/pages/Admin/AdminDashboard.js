import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Users, 
  Film, 
  Palette, 
  Mail, 
  BarChart3, 
  Calendar,
  ImageIcon,
  MessageSquare,
  TrendingUp,
  LogOut,
  Settings,
  Plus
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [statistics, setStatistics] = useState({
    total_artists: 0,
    total_films: 0,
    total_votes: 0,
    total_contacts: 0,
    total_newsletter_subscribers: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchStatistics();
  }, [navigate]);

  const fetchStatistics = async () => {
    try {
      const response = await axios.get(`${API}/admin/statistics`);
      setStatistics(response.data);
    } catch (error) {
      console.error('Error fetching statistics:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  const statisticsCards = [
    {
      title: {
        ar: 'الفنانون',
        fr: 'Artistes',
        en: 'Artists'
      },
      value: statistics.total_artists,
      icon: <Users className="w-8 h-8" />,
      color: 'bg-blue-500',
      link: '/admin/artists'
    },
    {
      title: {
        ar: 'الأفلام',
        fr: 'Films',
        en: 'Films'
      },
      value: statistics.total_films,
      icon: <Film className="w-8 h-8" />,
      color: 'bg-purple-500',
      link: '/admin/films'
    },
    {
      title: {
        ar: 'الأصوات',
        fr: 'Votes',
        en: 'Votes'
      },
      value: statistics.total_votes,
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'bg-green-500',
      link: '/admin/votes'
    },
    {
      title: {
        ar: 'الرسائل',
        fr: 'Messages',
        en: 'Messages'
      },
      value: statistics.total_contacts,
      icon: <MessageSquare className="w-8 h-8" />,
      color: 'bg-orange-500',
      link: '/admin/contacts'
    },
    {
      title: {
        ar: 'المشتركون',
        fr: 'Abonnés',
        en: 'Subscribers'
      },
      value: statistics.total_newsletter_subscribers,
      icon: <Mail className="w-8 h-8" />,
      color: 'bg-pink-500',
      link: '/admin/newsletter'
    }
  ];

  const quickActions = [
    {
      title: {
        ar: 'إضافة فنان',
        fr: 'Ajouter un artiste',
        en: 'Add Artist'
      },
      icon: <Users className="w-6 h-6" />,
      color: 'bg-blue-500',
      link: '/admin/artists/new'
    },
    {
      title: {
        ar: 'إضافة فيلم',
        fr: 'Ajouter un film',
        en: 'Add Film'
      },
      icon: <Film className="w-6 h-6" />,
      color: 'bg-purple-500',
      link: '/admin/films/new'
    },
    {
      title: {
        ar: 'إدارة البرنامج',
        fr: 'Gérer le programme',
        en: 'Manage Program'
      },
      icon: <Calendar className="w-6 h-6" />,
      color: 'bg-green-500',
      link: '/admin/program'
    },
    {
      title: {
        ar: 'إدارة المعرض',
        fr: 'Gérer la galerie',
        en: 'Manage Gallery'
      },
      icon: <ImageIcon className="w-6 h-6" />,
      color: 'bg-orange-500',
      link: '/admin/gallery'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 menu-laghouat-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl font-bold">A</span>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {t({
                      ar: 'لوحة الإدارة',
                      fr: 'Administration',
                      en: 'Admin Dashboard'
                    })}
                  </h1>
                  <p className="text-sm text-white/80">
                    {t({
                      ar: 'إدارة محتوى المهرجان',
                      fr: 'Gestion du contenu du festival',
                      en: 'Festival Content Management'
                    })}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/settings')}
                className="p-2 text-white hover:text-yellow-200 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-white hover:text-yellow-200 rounded-lg hover:bg-white/20 transition-colors duration-200 border border-white/20"
              >
                <LogOut className="w-5 h-5" />
                <span>{t({
                  ar: 'تسجيل الخروج',
                  fr: 'Se déconnecter',
                  en: 'Logout'
                })}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          {statisticsCards.map((card, index) => (
            <div
              key={index}
              onClick={() => navigate(card.link)}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-1">
                      {t(card.title)}
                    </p>
                    <p className="text-3xl font-bold text-gray-900">
                      {card.value}
                    </p>
                  </div>
                  <div className={`${card.color} text-white p-3 rounded-lg`}>
                    {card.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t({
              ar: 'إجراءات سريعة',
              fr: 'Actions rapides',
              en: 'Quick Actions'
            })}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => navigate(action.link)}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
              >
                <div className={`${action.color} text-white p-2 rounded-lg`}>
                  {action.icon}
                </div>
                <span className="font-medium text-gray-900">
                  {t(action.title)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t({
                  ar: 'النشاط الأخير',
                  fr: 'Activité récente',
                  en: 'Recent Activity'
                })}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    {t({
                      ar: 'تم إنشاء البيانات الأولية',
                      fr: 'Données initiales créées',
                      en: 'Initial data created'
                    })}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">
                    {t({
                      ar: 'تم تفعيل لوحة الإدارة',
                      fr: 'Panneau d\'administration activé',
                      en: 'Admin panel activated'
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {t({
                  ar: 'روابط سريعة',
                  fr: 'Liens rapides',
                  en: 'Quick Links'
                })}
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  <span>{t({
                    ar: 'عرض الموقع',
                    fr: 'Voir le site',
                    en: 'View Site'
                  })}</span>
                </button>
                <button
                  onClick={() => navigate('/admin/settings')}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  <span>{t({
                    ar: 'إعدادات المهرجان',
                    fr: 'Paramètres du festival',
                    en: 'Festival Settings'
                  })}</span>
                </button>
                <button
                  onClick={() => navigate('/admin/backup')}
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors duration-200"
                >
                  <span>{t({
                    ar: 'نسخ احتياطي',
                    fr: 'Sauvegarde',
                    en: 'Backup'
                  })}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;