import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { mockData, saveToStorage } from '../data/mock';
import { Mail, Phone, MapPin, Clock, Send, Check, User, MessageCircle } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [submitted, setSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage (mock functionality)
    const contactSubmissions = JSON.parse(localStorage.getItem('contact-submissions') || '[]');
    contactSubmissions.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    saveToStorage('contact-submissions', contactSubmissions);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      type: 'general'
    });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage (mock functionality)
    const newsletters = JSON.parse(localStorage.getItem('newsletter-subscriptions') || '[]');
    newsletters.push({
      email: newsletter,
      timestamp: new Date().toISOString()
    });
    saveToStorage('newsletter-subscriptions', newsletters);
    setSubscribed(true);
    setNewsletter('');
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: {
        ar: "البريد الإلكتروني",
        fr: "Email",
        en: "Email"
      },
      value: "info@festival-laghouat.dz",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: {
        ar: "الهاتف",
        fr: "Téléphone",
        en: "Phone"
      },
      value: "+213 29 XX XX XX",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: {
        ar: "العنوان",
        fr: "Adresse",
        en: "Address"
      },
      value: t({
        ar: "مركز الفنون الثقافي، الأغواط",
        fr: "Centre Culturel des Arts, Laghouat",
        en: "Cultural Arts Center, Laghouat"
      }),
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: {
        ar: "ساعات العمل",
        fr: "Horaires",
        en: "Working Hours"
      },
      value: t({
        ar: "الأحد - الخميس: 9:00 - 17:00",
        fr: "Dimanche - Jeudi: 9:00 - 17:00",
        en: "Sunday - Thursday: 9:00 - 17:00"
      }),
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const contactTypes = [
    {
      value: 'general',
      label: {
        ar: "استفسار عام",
        fr: "Demande générale",
        en: "General Inquiry"
      }
    },
    {
      value: 'artist',
      label: {
        ar: "تسجيل فنان",
        fr: "Inscription artiste",
        en: "Artist Registration"
      }
    },
    {
      value: 'media',
      label: {
        ar: "إعلام وصحافة",
        fr: "Média et presse",
        en: "Media and Press"
      }
    },
    {
      value: 'sponsor',
      label: {
        ar: "رعاية",
        fr: "Parrainage",
        en: "Sponsorship"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t({
              ar: "اتصل بنا",
              fr: "Contactez-nous",
              en: "Contact Us"
            })}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t({
              ar: "نحن هنا لمساعدتك! لا تتردد في التواصل معنا لأي استفسار",
              fr: "Nous sommes là pour vous aider! N'hésitez pas à nous contacter pour toute question",
              en: "We're here to help! Don't hesitate to contact us for any questions"
            })}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {t({
                  ar: "معلومات الاتصال",
                  fr: "Informations de contact",
                  en: "Contact Information"
                })}
              </h2>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${info.color}`}>
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{t(info.title)}</h3>
                      <p className="text-gray-600">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-4">
                {t({
                  ar: "اشترك في النشرة الإخبارية",
                  fr: "Abonnez-vous à la newsletter",
                  en: "Subscribe to Newsletter"
                })}
              </h2>
              <p className="mb-6">
                {t({
                  ar: "احصل على آخر التحديثات حول المهرجان",
                  fr: "Recevez les dernières mises à jour du festival",
                  en: "Get the latest festival updates"
                })}
              </p>
              
              {subscribed ? (
                <div className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <Check className="w-6 h-6 text-green-300" />
                  <span>{t({
                    ar: "تم الاشتراك بنجاح!",
                    fr: "Abonnement réussi!",
                    en: "Successfully subscribed!"
                  })}</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                  <input
                    type="email"
                    value={newsletter}
                    onChange={(e) => setNewsletter(e.target.value)}
                    placeholder={t({
                      ar: "بريدك الإلكتروني",
                      fr: "Votre email",
                      en: "Your email"
                    })}
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                  >
                    {t({
                      ar: "اشترك",
                      fr: "S'abonner",
                      en: "Subscribe"
                    })}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {t({
                ar: "أرسل رسالة",
                fr: "Envoyer un message",
                en: "Send a Message"
              })}
            </h2>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {t({
                    ar: "تم إرسال الرسالة بنجاح!",
                    fr: "Message envoyé avec succès!",
                    en: "Message sent successfully!"
                  })}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t({
                    ar: "سنقوم بالرد عليك في أقرب وقت ممكن",
                    fr: "Nous vous répondrons dès que possible",
                    en: "We'll get back to you as soon as possible"
                  })}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200"
                >
                  {t({
                    ar: "إرسال رسالة أخرى",
                    fr: "Envoyer un autre message",
                    en: "Send another message"
                  })}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({
                      ar: "نوع الاستفسار",
                      fr: "Type de demande",
                      en: "Inquiry Type"
                    })}
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    {contactTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {t(type.label)}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t({
                        ar: "الاسم الكامل",
                        fr: "Nom complet",
                        en: "Full Name"
                      })}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t({
                        ar: "البريد الإلكتروني",
                        fr: "Email",
                        en: "Email"
                      })}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t({
                        ar: "رقم الهاتف",
                        fr: "Téléphone",
                        en: "Phone"
                      })}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t({
                        ar: "الموضوع",
                        fr: "Sujet",
                        en: "Subject"
                      })}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t({
                      ar: "الرسالة",
                      fr: "Message",
                      en: "Message"
                    })}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t({
                    ar: "إرسال الرسالة",
                    fr: "Envoyer le message",
                    en: "Send Message"
                  })}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;