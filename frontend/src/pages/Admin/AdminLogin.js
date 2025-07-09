import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { Lock, User, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminLogin = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API}/admin/login`, formData);
      
      if (response.data.access_token) {
        localStorage.setItem('admin_token', response.data.access_token);
        navigate('/admin/dashboard');
      }
    } catch (error) {
      setError(t({
        ar: 'خطأ في اسم المستخدم أو كلمة المرور',
        fr: 'Nom d\'utilisateur ou mot de passe incorrect',
        en: 'Invalid username or password'
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-16 w-16 bg-white rounded-full flex items-center justify-center">
            <Lock className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-white">
            {t({
              ar: 'لوحة الإدارة',
              fr: 'Administration',
              en: 'Admin Panel'
            })}
          </h2>
          <p className="mt-2 text-sm text-purple-200">
            {t({
              ar: 'يرجى تسجيل الدخول للوصول إلى لوحة التحكم',
              fr: 'Veuillez vous connecter pour accéder au panneau de contrôle',
              en: 'Please sign in to access the control panel'
            })}
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-white mb-2">
                {t({
                  ar: 'اسم المستخدم',
                  fr: 'Nom d\'utilisateur',
                  en: 'Username'
                })}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full px-3 py-3 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={t({
                    ar: 'أدخل اسم المستخدم',
                    fr: 'Entrez le nom d\'utilisateur',
                    en: 'Enter username'
                  })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                {t({
                  ar: 'كلمة المرور',
                  fr: 'Mot de passe',
                  en: 'Password'
                })}
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  className="appearance-none relative block w-full px-3 py-3 pl-10 pr-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder={t({
                    ar: 'أدخل كلمة المرور',
                    fr: 'Entrez le mot de passe',
                    en: 'Enter password'
                  })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                t({
                  ar: 'تسجيل الدخول',
                  fr: 'Se connecter',
                  en: 'Sign in'
                })
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-purple-200">
              {t({
                ar: 'معلومات الدخول للاختبار: admin / festival2025',
                fr: 'Identifiants de test : admin / festival2025',
                en: 'Test credentials: admin / festival2025'
              })}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;