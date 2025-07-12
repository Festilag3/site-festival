# 🚀 Guide d'Installation Complète - Site du Festival

## 📁 **Structure du Projet à Télécharger**

Voici tous les fichiers nécessaires pour installer le site complet sur votre serveur local :

```
festival-laghouat/
├── backend/
│   ├── server.py
│   ├── models.py
│   ├── admin_routes.py
│   ├── requirements.txt
│   ├── .env
│   └── __init__.py
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── images/
│   ├── src/
│   │   ├── components/
│   │   │   └── Layout/
│   │   │       ├── Header.js
│   │   │       └── Footer.js
│   │   ├── contexts/
│   │   │   └── LanguageContext.js
│   │   ├── data/
│   │   │   └── mock.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Program.js
│   │   │   ├── Gallery.js
│   │   │   ├── Artists.js
│   │   │   ├── Location.js
│   │   │   ├── Vote.js
│   │   │   ├── Contact.js
│   │   │   └── Admin/
│   │   │       ├── AdminLogin.js
│   │   │       ├── AdminDashboard.js
│   │   │       └── AdminArtists.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── index.js
│   ├── package.json
│   ├── tailwind.config.js
│   ├── craco.config.js
│   └── .env
├── README.md
├── GUIDE_ADMIN.md
└── INSTALLATION.md
```

---

## 🛠️ **Installation Étape par Étape**

### **1. Prérequis**

Installez sur votre serveur :
- **Node.js** (version 16+) : https://nodejs.org/
- **Python** (version 3.8+) : https://python.org/
- **MongoDB** : https://mongodb.com/try/download/community

### **2. Configuration du Backend**

```bash
# Créer le dossier backend
mkdir festival-laghouat/backend
cd festival-laghouat/backend

# Installer les dépendances Python
pip install -r requirements.txt

# Créer le fichier .env
MONGO_URL=mongodb://localhost:27017
DB_NAME=festival_laghouat
```

### **3. Configuration du Frontend**

```bash
# Aller dans le dossier frontend
cd ../frontend

# Installer les dépendances Node.js
npm install
# ou
yarn install

# Créer le fichier .env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### **4. Démarrage de l'Application**

```bash
# Terminal 1 : Démarrer MongoDB
mongod

# Terminal 2 : Démarrer le Backend
cd backend
python server.py

# Terminal 3 : Démarrer le Frontend
cd frontend
npm start
# ou
yarn start
```

---

## 🔧 **Fichiers de Configuration**

### **Backend Requirements (requirements.txt)**
```
fastapi==0.110.1
uvicorn==0.25.0
motor==3.3.1
python-dotenv>=1.0.1
pymongo==4.5.0
pydantic>=2.6.4
```

### **Frontend Package.json**
```json
{
  "name": "festival-laghouat",
  "version": "1.0.0",
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.5.1",
    "axios": "^1.8.4",
    "lucide-react": "^0.507.0",
    "tailwindcss": "^3.4.17"
  }
}
```

---

## 🗄️ **Base de Données MongoDB**

L'application créera automatiquement :
- **Collection `artists`** : Gestion des artistes
- **Collection `festival`** : Informations du festival
- **Collection `contacts`** : Messages de contact
- **Collection `votes`** : Votes du public
- **Collection `newsletter`** : Abonnés newsletter

---

## 🌐 **URLs d'Accès**

Après installation :
- **Site Public** : http://localhost:3000
- **Administration** : http://localhost:3000/admin/login
- **API Backend** : http://localhost:8001/api

**Identifiants Admin :**
- Username: `admin`
- Password: `festival2025`

---

## 📋 **Fonctionnalités Incluses**

✅ **Site Public Complet**
- Page d'accueil avec hero section
- Programme détaillé 5 jours
- Galerie photos interactive
- Système de vote public
- Contact et newsletter
- Support multilingue (AR/FR/EN)

✅ **Interface d'Administration**
- Dashboard avec statistiques
- Gestion des artistes (CRUD)
- Authentification sécurisée
- Interface multilingue

✅ **Backend API**
- Routes RESTful complètes
- Base de données MongoDB
- Gestion des erreurs
- CORS configuré

---

## 🎨 **Personnalisation**

### **Changer les Couleurs**
Modifiez dans `frontend/src/index.css` :
```css
:root {
  --primary-color: #votre-couleur;
  --secondary-color: #votre-couleur;
}
```

### **Ajouter votre Photo de Laghouat**
1. Placez votre image dans `frontend/public/images/`
2. Modifiez dans `frontend/src/index.css` :
```css
.laghouat-background {
  background-image: url('/images/votre-photo.jpg');
}
```

### **Modifier les Informations du Festival**
Éditez `frontend/src/data/mock.js` avec vos données.

---

## 🚀 **Déploiement en Production**

### **Frontend**
```bash
cd frontend
npm run build
```

### **Backend**
```bash
cd backend
uvicorn server:app --host 0.0.0.0 --port 8001
```

---

## 📞 **Support**

En cas de problème :
1. Vérifiez que tous les services fonctionnent
2. Consultez les logs d'erreur
3. Vérifiez les URLs dans les fichiers .env

**Votre site du festival est maintenant prêt à être installé sur n'importe quel serveur !** 🎉