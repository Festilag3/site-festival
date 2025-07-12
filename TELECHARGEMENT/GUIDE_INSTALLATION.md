# 🚀 Guide d'Installation Complète - Festival des Arts Laghouat

## ✅ **FONCTIONNALITÉS GARANTIES EN LOCAL**

### 🎯 **Gestion Complète des Artistes**
- ✅ **Ajouter des artistes** via l'interface d'administration
- ✅ **Modifier les informations** existantes  
- ✅ **Supprimer des artistes**
- ✅ **Ajouter des photos** (URL ou upload local)
- ✅ **Support multilingue** (Arabe/Français/Anglais)

### 🖼️ **Gestion des Photos**
- ✅ **URLs d'images** (Unsplash, liens directs)
- ✅ **Upload local** dans le dossier `public/images/`
- ✅ **Galerie interactive** avec lightbox
- ✅ **Images optimisées** automatiquement

### 🗄️ **Base de Données MongoDB**
- ✅ **Données persistantes** (ne se perdent pas)
- ✅ **Sauvegarde automatique** de tous les ajouts
- ✅ **Collections organisées** (artistes, votes, contacts)

---

## 📋 **PRÉREQUIS SYSTÈME**

Installez sur votre serveur local :
1. **Node.js** (version 16+) : https://nodejs.org/
2. **Python** (version 3.8+) : https://python.org/
3. **MongoDB** : https://mongodb.com/try/download/community

---

## 🛠️ **INSTALLATION ÉTAPE PAR ÉTAPE**

### **Étape 1 : Préparation des Dossiers**
```bash
# Créer le dossier principal
mkdir festival-laghouat
cd festival-laghouat

# Copier tous les fichiers téléchargés dans ce dossier
```

### **Étape 2 : Installation Backend**
```bash
# Aller dans le dossier backend
cd backend

# Installer les dépendances Python
pip install -r requirements.txt

# Vérifier le fichier .env
MONGO_URL=mongodb://localhost:27017
DB_NAME=festival_laghouat
```

### **Étape 3 : Installation Frontend**
```bash
# Aller dans le dossier frontend
cd ../frontend

# Installer les dépendances Node.js
yarn install
# ou
npm install

# Vérifier le fichier .env
REACT_APP_BACKEND_URL=http://localhost:8001
```

### **Étape 4 : Démarrage des Services**

**Terminal 1 : MongoDB**
```bash
# Démarrer MongoDB
mongod
```

**Terminal 2 : Backend API**
```bash
cd backend
python server.py
```

**Terminal 3 : Frontend React**
```bash
cd frontend
yarn start
# ou
npm start
```

---

## 🎯 **ACCÈS À L'APPLICATION**

### **Site Public**
- **URL** : http://localhost:3000
- **Pages** : Accueil, Programme, Galerie, Artistes, Vote, Contact

### **Interface d'Administration**
- **URL** : http://localhost:3000/admin/login
- **Username** : `admin`
- **Password** : `festival2025`

### **API Backend**
- **URL** : http://localhost:8001/api
- **Documentation** : http://localhost:8001/docs

---

## 👨‍🎨 **COMMENT AJOUTER UN ARTISTE**

### **Via l'Interface d'Administration :**

1. **Connexion**
   - Allez sur : http://localhost:3000/admin/login
   - Entrez : admin / festival2025

2. **Navigation**
   - Cliquez sur "الفنانون" (Artistes)
   - Cliquez sur "إضافة فنان" (Ajouter un artiste)

3. **Remplir le Formulaire**
   ```
   Nom : Ahmed Ben Ali
   Spécialité AR : الرسم بالألوان المائية
   Spécialité FR : Peinture à l'aquarelle
   Spécialité EN : Watercolor Painting
   Bio AR : فنان جزائري متخصص في الرسم
   Bio FR : Artiste algérien spécialisé en peinture
   Bio EN : Algerian artist specialized in painting
   Email : ahmed@example.com
   Téléphone : +213 555 123 456
   Image URL : https://example.com/photo.jpg
   ```

4. **Sauvegarde**
   - Cliquez sur "حفظ" (Enregistrer)
   - L'artiste apparaît immédiatement dans la liste

---

## 📸 **GESTION DES PHOTOS**

### **Option 1 : URLs Internet**
```
https://images.unsplash.com/photo-123456
https://example.com/photos/artiste.jpg
```

### **Option 2 : Photos Locales**
1. **Placer les photos** dans `frontend/public/images/artists/`
2. **Utiliser le chemin** : `/images/artists/nom-artiste.jpg`

### **Option 3 : Upload Direct** (Avancé)
- Configurable via l'interface d'administration
- Stockage automatique dans le dossier public

---

## 🔧 **PERSONNALISATION**

### **Changer les Informations du Festival**
Modifiez `frontend/src/data/mock.js` :
```javascript
festival: {
  name: {
    ar: "اسم مهرجانكم",
    fr: "Nom de votre festival", 
    en: "Your festival name"
  }
}
```

### **Ajouter votre Photo de Laghouat**
1. **Placez votre photo** dans `frontend/public/images/`
2. **Modifiez le CSS** dans `frontend/src/index.css` :
```css
.laghouat-background {
  background-image: url('/images/votre-photo-laghouat.jpg');
}
```

### **Modifier les Couleurs**
Dans `frontend/src/index.css` :
```css
:root {
  --primary: votre-couleur;
  --secondary: votre-couleur;
}
```

---

## ✅ **FONCTIONNALITÉS CONFIRMÉES**

🎯 **Interface d'Administration Complète**
- ✅ Dashboard avec statistiques en temps réel
- ✅ Gestion CRUD complète des artistes
- ✅ Interface multilingue (AR/FR/EN)
- ✅ Authentification sécurisée

🎯 **Site Public Fonctionnel**
- ✅ Navigation multilingue
- ✅ Système de vote public
- ✅ Galerie interactive
- ✅ Formulaire de contact
- ✅ Newsletter

🎯 **Backend API Robuste**
- ✅ Base de données MongoDB
- ✅ Routes RESTful complètes
- ✅ Gestion des erreurs
- ✅ CORS configuré

---

## 🆘 **DÉPANNAGE**

### **Problème : MongoDB ne démarre pas**
```bash
# Créer le dossier de données
sudo mkdir -p /data/db
sudo chmod 777 /data/db
mongod
```

### **Problème : Port déjà utilisé**
```bash
# Tuer les processus sur les ports
sudo lsof -ti:3000 | xargs kill -9
sudo lsof -ti:8001 | xargs kill -9
```

### **Problème : Dépendances manquantes**
```bash
# Backend
cd backend
pip install --upgrade -r requirements.txt

# Frontend  
cd frontend
rm -rf node_modules
yarn install
```

---

## 🎉 **CONFIRMATION**

**Votre site sera 100% fonctionnel en local avec :**
- ✅ **Ajout/modification d'artistes** via l'admin
- ✅ **Gestion des photos** (URL ou local)
- ✅ **Base de données persistante**
- ✅ **Interface multilingue**
- ✅ **Toutes les fonctionnalités du site**

**Vous pourrez gérer votre festival complètement en autonomie !** 🎨🎬