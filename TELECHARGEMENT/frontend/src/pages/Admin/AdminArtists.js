import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  Users, 
  Plus, 
  Edit3, 
  Trash2, 
  Mail, 
  Phone, 
  ArrowLeft,
  Save,
  X,
  Search,
  Filter
} from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminArtists = () => {
  const { t, currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingArtist, setEditingArtist] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    specialty: {
      ar: '',
      fr: '',
      en: ''
    },
    bio: {
      ar: '',
      fr: '',
      en: ''
    },
    email: '',
    phone: '',
    image_url: '',
    social_media: {
      facebook: '',
      instagram: '',
      twitter: ''
    }
  });

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    fetchArtists();
  }, [navigate]);

  const fetchArtists = async () => {
    try {
      const response = await axios.get(`${API}/admin/artists`);
      setArtists(response.data);
    } catch (error) {
      console.error('Error fetching artists:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      specialty: {
        ar: '',
        fr: '',
        en: ''
      },
      bio: {
        ar: '',
        fr: '',
        en: ''
      },
      email: '',
      phone: '',
      image_url: '',
      social_media: {
        facebook: '',
        instagram: '',
        twitter: ''
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (editingArtist) {
        await axios.put(`${API}/admin/artists/${editingArtist.id}`, formData);
      } else {
        await axios.post(`${API}/admin/artists`, formData);
      }
      
      fetchArtists();
      setShowAddForm(false);
      setEditingArtist(null);
      resetForm();
    } catch (error) {
      console.error('Error saving artist:', error);
    }
  };

  const handleEdit = (artist) => {
    setEditingArtist(artist);
    setFormData({
      name: artist.name,
      specialty: artist.specialty,
      bio: artist.bio,
      email: artist.email || '',
      phone: artist.phone || '',
      image_url: artist.image_url || '',
      social_media: artist.social_media || {
        facebook: '',
        instagram: '',
        twitter: ''
      }
    });
    setShowAddForm(true);
  };

  const handleDelete = async (artistId) => {
    if (window.confirm(t({
      ar: 'هل أنت متأكد من حذف هذا الفنان؟',
      fr: 'Êtes-vous sûr de vouloir supprimer cet artiste?',
      en: 'Are you sure you want to delete this artist?'
    }))) {
      try {
        await axios.delete(`${API}/admin/artists/${artistId}`);
        fetchArtists();
      } catch (error) {
        console.error('Error deleting artist:', error);
      }
    }
  };

  const filteredArtists = artists.filter(artist =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artist.specialty[currentLanguage]?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const placeholderImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face";

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
      <header className="bg-white/95 backdrop-blur-sm shadow-lg menu-laghouat-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/admin/dashboard')}
                className="p-2 text-white hover:text-yellow-200 rounded-lg hover:bg-white/20 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {t({
                    ar: 'إدارة الفنانين',
                    fr: 'Gestion des Artistes',
                    en: 'Artist Management'
                  })}
                </h1>
                <p className="text-sm text-white/80">
                  {t({
                    ar: 'إضافة وتعديل وحذف الفنانين المشاركين',
                    fr: 'Ajouter, modifier et supprimer les artistes participants',
                    en: 'Add, edit and delete participating artists'
                  })}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => {
                setShowAddForm(true);
                setEditingArtist(null);
                resetForm();
              }}
              className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-colors duration-200 border border-white/20"
            >
              <Plus className="w-5 h-5" />
              <span>{t({
                ar: 'إضافة فنان',
                fr: 'Ajouter un artiste',
                en: 'Add Artist'
              })}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t({
                ar: 'البحث عن الفنانين...',
                fr: 'Rechercher des artistes...',
                en: 'Search artists...'
              })}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArtists.map((artist) => (
            <div key={artist.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={artist.image_url || placeholderImage}
                    alt={artist.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{artist.name}</h3>
                    <p className="text-sm text-gray-600">{artist.specialty[currentLanguage]}</p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {artist.bio[currentLanguage]}
                </p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  {artist.email && (
                    <div className="flex items-center space-x-1">
                      <Mail className="w-4 h-4" />
                      <span>{artist.email}</span>
                    </div>
                  )}
                  {artist.phone && (
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{artist.phone}</span>
                    </div>
                  )}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(artist)}
                    className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>{t({
                      ar: 'تعديل',
                      fr: 'Modifier',
                      en: 'Edit'
                    })}</span>
                  </button>
                  <button
                    onClick={() => handleDelete(artist.id)}
                    className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>{t({
                      ar: 'حذف',
                      fr: 'Supprimer',
                      en: 'Delete'
                    })}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredArtists.length === 0 && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {t({
                ar: 'لا توجد فنانين',
                fr: 'Aucun artiste',
                en: 'No artists'
              })}
            </h3>
            <p className="text-gray-500 mb-4">
              {t({
                ar: 'ابدأ بإضافة فنان جديد',
                fr: 'Commencez par ajouter un nouvel artiste',
                en: 'Start by adding a new artist'
              })}
            </p>
          </div>
        )}
      </main>

      {/* Add/Edit Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {editingArtist ? t({
                    ar: 'تعديل الفنان',
                    fr: 'Modifier l\'artiste',
                    en: 'Edit Artist'
                  }) : t({
                    ar: 'إضافة فنان جديد',
                    fr: 'Ajouter un nouvel artiste',
                    en: 'Add New Artist'
                  })}
                </h2>
                <button
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingArtist(null);
                    resetForm();
                  }}
                  className="p-2 text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({
                      ar: 'الاسم',
                      fr: 'Nom',
                      en: 'Name'
                    })}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Specialty */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({
                      ar: 'التخصص',
                      fr: 'Spécialité',
                      en: 'Specialty'
                    })}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      name="specialty.ar"
                      value={formData.specialty.ar}
                      onChange={handleInputChange}
                      placeholder={t({
                        ar: 'التخصص بالعربية',
                        fr: 'Spécialité en arabe',
                        en: 'Specialty in Arabic'
                      })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="specialty.fr"
                      value={formData.specialty.fr}
                      onChange={handleInputChange}
                      placeholder={t({
                        ar: 'التخصص بالفرنسية',
                        fr: 'Spécialité en français',
                        en: 'Specialty in French'
                      })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <input
                      type="text"
                      name="specialty.en"
                      value={formData.specialty.en}
                      onChange={handleInputChange}
                      placeholder={t({
                        ar: 'التخصص بالإنجليزية',
                        fr: 'Spécialité en anglais',
                        en: 'Specialty in English'
                      })}
                      className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({
                      ar: 'السيرة الذاتية',
                      fr: 'Biographie',
                      en: 'Biography'
                    })}
                  </label>
                  <div className="space-y-4">
                    <textarea
                      name="bio.ar"
                      value={formData.bio.ar}
                      onChange={handleInputChange}
                      placeholder={t({
                        ar: 'السيرة الذاتية بالعربية',
                        fr: 'Biographie en arabe',
                        en: 'Biography in Arabic'
                      })}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <textarea
                      name="bio.fr"
                      value={formData.bio.fr}
                      onChange={handleInputChange}
                      placeholder={t({
                        ar: 'السيرة الذاتية بالفرنسية',
                        fr: 'Biographie en français',
                        en: 'Biography in French'
                      })}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <textarea
                      name="bio.en"
                      value={formData.bio.en}
                      onChange={handleInputChange}
                      placeholder={t({
                        ar: 'السيرة الذاتية بالإنجليزية',
                        fr: 'Biographie en anglais',
                        en: 'Biography in English'
                      })}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t({
                        ar: 'البريد الإلكتروني',
                        fr: 'Email',
                        en: 'Email'
                      })}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t({
                        ar: 'الهاتف',
                        fr: 'Téléphone',
                        en: 'Phone'
                      })}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Image URL */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({
                      ar: 'رابط الصورة',
                      fr: 'URL de l\'image',
                      en: 'Image URL'
                    })}
                  </label>
                  <input
                    type="url"
                    name="image_url"
                    value={formData.image_url}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingArtist(null);
                      resetForm();
                    }}
                    className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                  >
                    {t({
                      ar: 'إلغاء',
                      fr: 'Annuler',
                      en: 'Cancel'
                    })}
                  </button>
                  <button
                    type="submit"
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
                  >
                    <Save className="w-4 h-4" />
                    <span>{t({
                      ar: 'حفظ',
                      fr: 'Enregistrer',
                      en: 'Save'
                    })}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminArtists;