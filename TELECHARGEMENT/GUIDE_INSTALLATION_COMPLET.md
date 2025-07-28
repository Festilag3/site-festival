# Guide d'Installation et d'Utilisation - Festival LAGHOUAT

## 🚀 Installation Locale

### Prérequis
- **Node.js** (version 16 ou plus récente) : https://nodejs.org/
- **Python** (version 3.8 ou plus récente) : https://python.org/
- **MongoDB** : https://www.mongodb.com/try/download/community
- **Yarn** : `npm install -g yarn`

### Étape 1: Préparation de l'environnement

#### 1.1 Démarrer MongoDB
```bash
# Windows
mongod

# macOS/Linux
sudo systemctl start mongod
# ou
brew services start mongodb-community
```

#### 1.2 Configuration des variables d'environnement

**Frontend (.env):**
```bash
cd frontend
cp .env.example .env
```
Contenu du fichier `.env` :
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

**Backend (.env):**
```bash
cd backend
cp .env.example .env
```
Contenu du fichier `.env` :
```
MONGO_URL=mongodb://localhost:27017/festival_laghouat
```

### Étape 2: Installation des dépendances

#### 2.1 Backend (API)
```bash
cd backend
pip install -r requirements.txt
```

#### 2.2 Frontend (Interface utilisateur)
```bash
cd frontend
yarn install
```

### Étape 3: Démarrage du site

#### 3.1 Démarrer le backend (Terminal 1)
```bash
cd backend
python server.py
```
Le backend sera accessible sur : http://localhost:8001

#### 3.2 Démarrer le frontend (Terminal 2)
```bash
cd frontend
yarn start
```
Le site sera accessible sur : http://localhost:3000

---

## 🎛️ Interface d'Administration

### Accès à l'admin
1. Ouvrez votre navigateur : http://localhost:3000/admin/login
2. **Identifiants :**
   - Nom d'utilisateur : `admin`
   - Mot de passe : `festival2025`

### Fonctionnalités disponibles

#### Gestion des Artistes
- ✅ Ajouter de nouveaux artistes
- ✅ Modifier les informations (nom, biographie, photo)
- ✅ Supprimer des artistes
- ✅ Support multilingue (Arabe, Français, Anglais)
- ✅ Upload d'images

#### Pages de l'interface admin
- **Dashboard** : Vue d'ensemble
- **Gestion des artistes** : CRUD complet
- *Note: D'autres sections (films, programme, etc.) peuvent être ajoutées*

---

## ✏️ Modifications Manuelles

### Structure des fichiers importants

```
festival-laghouat/
├── frontend/
│   ├── src/
│   │   ├── data/
│   │   │   └── mock.js          # 📝 Données du festival
│   │   ├── pages/
│   │   │   ├── Home.js          # 🏠 Page d'accueil
│   │   │   ├── Program.js       # 📅 Programme
│   │   │   ├── Gallery.js       # 🖼️ Galerie
│   │   │   ├── Artists.js       # 🎨 Artistes
│   │   │   └── Vote.js          # 🗳️ Vote
│   │   ├── components/
│   │   │   └── Layout/
│   │   │       ├── Header.js    # 📋 En-tête (navigation)
│   │   │       └── Footer.js    # 📋 Pied de page
│   │   └── index.css            # 🎨 Styles globaux
│   └── public/
│       └── images/              # 🖼️ Images du site
└── backend/
    ├── server.py                # 🔧 Serveur principal
    ├── models.py                # 📊 Structure des données
    └── admin_routes.py          # 🛣️ Routes d'administration
```

### Modifications courantes

#### 1. Changer les informations du festival
**Fichier :** `frontend/src/data/mock.js`
```javascript
festival: {
  name: {
    ar: "المهرجان الثقافي الوطني للفنون التشكيلية والفنون البصرية للأغواط",
    fr: "Festival Culturel National des Arts Plastiques et des Arts Visuels de LAGHOUAT",
    en: "National Cultural Festival of Plastic Arts and Visual Arts of LAGHOUAT"
  },
  dates: {
    ar: "من 27 سبتمبر إلى 1 أكتوبر 2025",
    fr: "Du 27 septembre au 1 octobre 2025",
    en: "From September 27 to October 1, 2025"
  }
}
```

#### 2. Modifier le programme
**Fichier :** `frontend/src/data/mock.js`
```javascript
program: {
  morning: [
    {
      time: "09:00",
      title: {
        ar: "افتتاح المعرض",
        fr: "Ouverture de l'exposition",
        en: "Exhibition Opening"
      },
      location: {
        ar: "القاعة الرئيسية",
        fr: "Salle principale",
        en: "Main Hall"
      }
    }
  ]
}
```

#### 3. Ajouter des images
1. Placez vos images dans `frontend/public/images/`
2. Référencez-les avec : `/images/nom-de-votre-image.jpg`

#### 4. Modifier les styles
**Fichier :** `frontend/src/index.css`
- Couleurs, polices, mise en page

#### 5. Changer les couleurs principales
```css
:root {
  --primary-color: #8B5CF6;     /* Violet principal */
  --secondary-color: #3B82F6;   /* Bleu secondaire */
  --accent-color: #F59E0B;      /* Accent doré */
}
```

---

## 🔧 Conseils de développement

### Redémarrage après modifications
- **Frontend** : Les changements sont automatiques (hot reload)
- **Backend** : Redémarrez avec `Ctrl+C` puis `python server.py`

### Sauvegarde de la base de données
```bash
# Export
mongodump --db festival_laghouat --out backup/

# Import
mongorestore --db festival_laghouat backup/festival_laghouat/
```

### Débogage
- **Backend logs** : Visible dans le terminal backend
- **Frontend console** : F12 → Console dans le navigateur

---

## 🆘 Problèmes courants

### Le site ne se charge pas
1. Vérifiez que MongoDB est démarré
2. Vérifiez que les deux serveurs (frontend + backend) fonctionnent
3. Vérifiez les URLs dans les fichiers `.env`

### Images ne s'affichent pas
1. Placez les images dans `frontend/public/images/`
2. Utilisez le chemin : `/images/votre-image.jpg`

### Erreur de connexion API
1. Vérifiez que le backend fonctionne sur http://localhost:8001
2. Vérifiez le fichier `frontend/.env`

---

## 📞 Support

Pour toute question ou problème :
1. Vérifiez ce guide
2. Consultez les logs dans les terminaux
3. Redémarrez les services si nécessaire

**Bon développement ! 🎨**