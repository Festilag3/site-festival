# 🎨 Festival LAGHOUAT - Installation Locale

## 📦 Contenu du Package

Votre site web complet pour le Festival Culturel National des Arts Plastiques et des Arts Visuels de LAGHOUAT.

### 🚀 Démarrage Ultra-Rapide

**Windows :**
1. Décompressez le ZIP
2. Double-cliquez sur `start.bat`
3. Attendez que tout se lance automatiquement

**Mac/Linux :**
1. Décompressez le ZIP
2. Ouvrez le terminal dans le dossier
3. Tapez : `./start.sh`

### 🎯 Accès Direct

Une fois démarré :
- **Site public :** http://localhost:3000
- **Interface Admin :** http://localhost:3000/admin/login
  - Utilisateur : `admin`
  - Mot de passe : `festival2025`

### 📋 Fonctionnalités Disponibles

#### ✅ Interface Publique
- **Multilingue** : Arabe (par défaut), Français, Anglais
- **Pages** : Accueil, Programme, Galerie, Artistes, Vote, Localisation, Contact, À propos
- **Fonctionnalités** : Vote public, galerie interactive, formulaires de contact

#### ✅ Interface d'Administration
- **Gestion des artistes** : Ajouter, modifier, supprimer
- **Upload d'images** : Support complet
- **Multilingue** : Gestion du contenu en 3 langues
- **Dashboard** : Vue d'ensemble des données

### 📚 Guides Inclus

1. **GUIDE_INSTALLATION_COMPLET.md** - Instructions détaillées
2. **MODIFICATIONS_RAPIDES.md** - Actions courantes
3. **Scripts de démarrage** - Automatisation complète

### 🛠️ Technologies

- **Frontend** : React + Tailwind CSS
- **Backend** : FastAPI + Python
- **Base de données** : MongoDB
- **Interface** : Radix UI Components

### 🔧 Modifications Manuelles

#### Fichiers Principaux
- `frontend/src/data/mock.js` - Données du festival
- `frontend/src/index.css` - Styles et couleurs
- `frontend/public/images/` - Images du site

#### Admin Web
- Gérer les artistes directement dans l'interface
- Upload d'images intégré
- Gestion multilingue

### ⚡ Tips Rapides

1. **Changer les couleurs** : Modifiez `:root` dans `index.css`
2. **Ajouter des images** : Placez-les dans `public/images/`
3. **Modifier le programme** : Éditez `mock.js`
4. **Ajouter des artistes** : Utilisez l'interface admin

### 🆘 Support

Si quelque chose ne marche pas :
1. Consultez `GUIDE_INSTALLATION_COMPLET.md`
2. Vérifiez que MongoDB est installé
3. Redémarrez avec les scripts fournis

---

**🎭 Bon festival et bon développement !**

*Dernière mise à jour : Juillet 2025*